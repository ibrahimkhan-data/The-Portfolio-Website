import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface CirclingBorderProps {
  repeat?: boolean;
  activeDurationMs?: number;
  pauseDurationMs?: number;
  strokeWidth?: number;
  className?: string;
}

export const CirclingBorder: React.FC<CirclingBorderProps> = ({
  repeat = true,
  activeDurationMs = 3000, // Exactly 3 seconds
  pauseDurationMs = 10000, // 10 seconds pause
  strokeWidth = 2,
  className = "",
}) => {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);

  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const [phase, setPhase] = useState<"active" | "paused" | "finished">("active");

  // Synchronously measure parent bounding box before initial paint
  useLayoutEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (parent) {
      const rect = parent.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    }
  }, []);

  // Continuous measurement on resize
  useEffect(() => {
    const parent = containerRef.current?.parentElement;
    if (!parent) return;

    const measure = () => {
      const rect = parent.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({
          width: Math.round(rect.width),
          height: Math.round(rect.height),
        });
      }
    };

    measure();

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    resizeObserver.observe(parent);
    return () => resizeObserver.disconnect();
  }, []);

  // Cycle manager: active (3s, 2 rounds) -> paused (10s) -> active...
  useEffect(() => {
    if (dimensions.width <= 0 || dimensions.height <= 0) return;

    let activeTimer: NodeJS.Timeout;
    let pauseTimer: NodeJS.Timeout;

    if (phase === "active") {
      activeTimer = setTimeout(() => {
        if (repeat) {
          setPhase("paused");
        } else {
          setPhase("finished");
        }
      }, activeDurationMs);
    } else if (phase === "paused") {
      pauseTimer = setTimeout(() => {
        setPhase("active");
      }, pauseDurationMs);
    }

    return () => {
      clearTimeout(activeTimer);
      clearTimeout(pauseTimer);
    };
  }, [phase, repeat, activeDurationMs, pauseDurationMs, dimensions.width, dimensions.height]);

  // Animation frame loop: Exactly 2 rounds in 3 seconds (1 round = 1500ms)
  // Dynamic line length:
  // Starts at length 0, smoothly extends out to full length.
  // Glides for 2 rounds with smooth horizontal and corner pacing.
  // At the end, smoothly shrinks down to length 0 and disappears.
  useEffect(() => {
    if (phase !== "active" || dimensions.width <= 0 || dimensions.height <= 0) {
      return;
    }

    const path = pathRef.current;
    if (!path) return;

    const w = dimensions.width;
    const h = dimensions.height;
    const d = strokeWidth / 2;
    const r = Math.max(1, (h - 2 * d) / 2);
    const l = Math.max(1, w - 2 * r - 2 * d); // straight horizontal line length
    const c = Math.PI * r; // rounded corner arc length
    const totalPerimeter = path.getTotalLength ? path.getTotalLength() : 2 * l + 2 * c;

    // Full beam dash length (~22% of perimeter)
    const maxDash = Math.max(35, Math.min(68, totalPerimeter * 0.22));

    // Exactly 2 rounds in activeDurationMs (3000ms) -> lapDuration = 1500ms
    const lapDuration = activeDurationMs / 2;
    // Intro growth and outro shrink durations: 480ms each
    const transitionMs = Math.min(480, activeDurationMs * 0.16);
    const startTime = performance.now();
    let animFrameId: number;

    const animate = (now: number) => {
      const elapsed = Math.min(activeDurationMs, now - startTime);

      // Current lap progress [0, 1)
      const lapTime = elapsed % lapDuration;
      const tau = lapTime / lapDuration;

      // Kinematic distribution:
      // 30% top horizontal, 20% right curve, 30% bottom horizontal, 20% left curve
      let sLap = 0;
      if (tau < 0.30) {
        const u = tau / 0.30;
        const easedU = (1 - Math.cos(Math.PI * u)) / 2;
        sLap = l * easedU;
      } else if (tau < 0.50) {
        const u = (tau - 0.30) / 0.20;
        sLap = l + c * u;
      } else if (tau < 0.80) {
        const u = (tau - 0.50) / 0.30;
        const easedU = (1 - Math.cos(Math.PI * u)) / 2;
        sLap = l + c + l * easedU;
      } else {
        const u = (tau - 0.80) / 0.20;
        sLap = 2 * l + c + c * u;
      }

      const lapIndex = Math.min(1, Math.floor(elapsed / lapDuration));
      const headPos = lapIndex * totalPerimeter + sLap;

      // Smooth beam length expansion at start, smooth shrink to 0 at end
      let currentDash = maxDash;
      if (elapsed < transitionMs) {
        // Line starts from length 0 and extends out smoothly
        const progress = elapsed / transitionMs;
        const eased = (1 - Math.cos(Math.PI * progress)) / 2;
        currentDash = maxDash * eased;
      } else if (elapsed > activeDurationMs - transitionMs) {
        // Line smoothly gets shorter and shorter until it vanishes
        const remaining = Math.max(0, activeDurationMs - elapsed);
        const progress = remaining / transitionMs;
        const eased = (1 - Math.cos(Math.PI * progress)) / 2;
        currentDash = maxDash * eased;
      }

      if (currentDash <= 0.5) {
        path.style.strokeDasharray = `0 ${totalPerimeter + 20}`;
        path.style.strokeDashoffset = "0";
      } else {
        const tailPos = headPos - currentDash;
        path.style.strokeDasharray = `${currentDash.toFixed(2)} ${(totalPerimeter - currentDash).toFixed(2)}`;
        path.style.strokeDashoffset = `${(-tailPos).toFixed(2)}`;
      }

      if (elapsed < activeDurationMs) {
        animFrameId = requestAnimationFrame(animate);
      }
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animFrameId);
    };
  }, [phase, dimensions, strokeWidth, activeDurationMs]);

  if (phase === "finished") {
    return null;
  }

  const w = dimensions.width;
  const h = dimensions.height;
  const d = strokeWidth / 2;
  const r = Math.max(1, (h - 2 * d) / 2);
  const xLeft = r + d;
  const xRight = Math.max(xLeft + 1, w - r - d);
  const yTop = d;
  const yBottom = h - d;

  const pathD = `M ${xLeft} ${yTop} L ${xRight} ${yTop} A ${r} ${r} 0 0 1 ${xRight} ${yBottom} L ${xLeft} ${yBottom} A ${r} ${r} 0 0 1 ${xLeft} ${yTop} Z`;

  return (
    <span
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none rounded-full overflow-visible z-20 ${className}`}
      style={{
        opacity: phase === "active" ? 1 : 0,
        transition: "opacity 150ms ease",
      }}
    >
      {w > 0 && h > 0 && (
        <svg
          className="w-full h-full text-[#3F5D4E] dark:text-[#6EE7B7] overflow-visible"
          width={w}
          height={h}
          viewBox={`0 0 ${w} ${h}`}
          fill="none"
        >
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={strokeWidth}
          />
        </svg>
      )}
    </span>
  );
};
