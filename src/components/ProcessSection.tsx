import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Share requirements",
    description:
      "Tell us about your vision, goals, and preferences. We'll understand your needs and scope the project together.",
  },
  {
    number: "02",
    title: "Design & build",
    description:
      "Our team crafts your designs and website with attention to every detail, focusing on clarity and aesthetics.",
  },
  {
    number: "03",
    title: "Review & refine",
    description:
      "We present the work for your feedback. Iterate and refine until everything feels just right.",
  },
  {
    number: "04",
    title: "Final delivery",
    description:
      "Receive your polished, ready-to-use designs or website. Launch with confidence.",
  },
];

// SVG Icons for each step
const icons = [
  // Lightbulb (Share requirements)
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M16 24h8M17 27h6M18 30h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 8V5M28 12l2-2M12 12l-2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // Tools (Design & build)
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M10 30L24 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <rect x="22" y="8" width="10" height="6" rx="1" transform="rotate(45 22 8)" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 14l-4 4 8 8 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="28" r="4" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  // Magnifier doc (Review)
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <rect x="8" y="6" width="18" height="24" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 13h10M12 18h7M12 23h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="29" cy="29" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M32 32l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
  // Rocket (Final delivery)
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
    <path d="M20 6C20 6 28 10 28 22L20 30L12 22C12 10 20 6 20 6Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="20" cy="18" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 26L10 34M26 26L30 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 18c-2 2-2 6 0 8M31 18c2 2 2 6 0 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>,
];

// Subtle floating nodes — rendered INSIDE the diagram box only
const DiagramBackground = () => {
  const nodes = [
    { cx: 60,  cy: 50,  r: 1.5, delay: 0 },
    { cx: 160, cy: 30,  r: 1,   delay: 0.8 },
    { cx: 290, cy: 55,  r: 1.5, delay: 1.6 },
    { cx: 420, cy: 35,  r: 1,   delay: 0.4 },
    { cx: 520, cy: 80,  r: 1.5, delay: 1.2 },
    { cx: 90,  cy: 150, r: 1,   delay: 2.0 },
    { cx: 220, cy: 170, r: 1.5, delay: 0.6 },
    { cx: 360, cy: 140, r: 1,   delay: 1.8 },
    { cx: 490, cy: 160, r: 1.5, delay: 1.0 },
    { cx: 50,  cy: 230, r: 1,   delay: 0.2 },
    { cx: 170, cy: 245, r: 1.5, delay: 1.4 },
    { cx: 310, cy: 235, r: 1,   delay: 0.9 },
    { cx: 460, cy: 250, r: 1.5, delay: 1.7 },
  ];

  const lines = [
    [0,1],[1,2],[2,3],[3,4],
    [0,5],[1,6],[2,6],[3,7],[4,8],
    [5,9],[6,10],[7,11],[8,12],
    [9,10],[10,11],[11,12],
  ];

  return (
    <>
      {/* Very subtle slow-moving orb — stays inside box */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          translateX: "-50%",
          translateY: "-50%",
          filter: "blur(24px)",
        }}
        animate={{
          x: [0, 25, -15, 0],
          y: [0, -15, 10, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Node network SVG — clipped by parent overflow:hidden */}
      <svg
        viewBox="0 0 580 280"
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="dotglow">
            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Connection lines — very faint */}
        {lines.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].cx} y1={nodes[a].cy}
            x2={nodes[b].cx} y2={nodes[b].cy}
            stroke="rgba(99,102,241,0.10)"
            strokeWidth="0.6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: i * 0.1 }}
          />
        ))}

        {/* Small floating dots */}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.cx}
            cy={n.cy}
            r={n.r}
            fill="rgba(139,140,255,0.45)"
            filter="url(#dotglow)"
            animate={{
              cy: [n.cy, n.cy - 5, n.cy + 3, n.cy],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 10 + n.delay * 2,
              repeat: Infinity,
              delay: n.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </>
  );
};

// Clean ProcessDiagram — everything inside one SVG, perfectly centered
const ProcessDiagram = ({ isInView }: { isInView: boolean }) => {
  // SVG canvas 580x340. Center = (290, 170). Orbit radius = 110.
  // With node radius 26, label ~12px: total reach = 110 + 26 + 20 = 156 < 170. Safe.
  const cx = 270, cy = 170, R = 105;
  const toRad = (d: number) => (d * Math.PI) / 180;

  // top=0°, right=90°, bottom=180° (not used), left=270°
  // We place 4 nodes at: top(-90), right(0), bottom(90), left(180)
  const angles = [-90, 0, 90, 180];
  const nodeData = [
    { label: "Requirements", step: "01", color: "#9b9cff", glow: "rgba(155,156,255,0.4)" },
    { label: "Design",       step: "02", color: "#7ec8ff", glow: "rgba(126,200,255,0.4)" },
    { label: "Review",       step: "03", color: "#b87eff", glow: "rgba(184,126,255,0.4)" },
    { label: "Delivery",     step: "04", color: "#7effc0", glow: "rgba(126,255,192,0.4)" },
  ];

  const nodes = angles.map((a, i) => ({
    ...nodeData[i],
    nx: Math.round(cx + R * Math.cos(toRad(a))),
    ny: Math.round(cy + R * Math.sin(toRad(a))),
    a,
  }));

  // Curved arc between adjacent nodes, curving slightly inward
  const arc = (f: typeof nodes[0], t: typeof nodes[0]) => {
    const mx = (f.nx + t.nx) / 2 + (cx - (f.nx + t.nx) / 2) * 0.22;
    const my = (f.ny + t.ny) / 2 + (cy - (f.ny + t.ny) / 2) * 0.22;
    return `M ${f.nx} ${f.ny} Q ${mx} ${my} ${t.nx} ${t.ny}`;
  };
  const connections = [[0,1],[1,2],[2,3],[3,0]];

  // Label anchor: push further out from node center
  const labelAnchor = (n: typeof nodes[0]) => {
    const dist = 52; // from node center
    return {
      lx: Math.round(cx + (R + dist) * Math.cos(toRad(n.a))),
      ly: Math.round(cy + (R + dist) * Math.sin(toRad(n.a))),
    };
  };

  // Badge position: just outside the node circle, in direction of angle
  const badgePos = (n: typeof nodes[0]) => ({
    bx: Math.round(n.nx + 30 * Math.cos(toRad(n.a))),
    by: Math.round(n.ny + 30 * Math.sin(toRad(n.a))),
  });

  return (
    <div
      className="relative w-full mt-4 rounded-2xl overflow-hidden"
      style={{
        height: 340,
        background: "rgba(6,6,18,0.75)",
        border: "1px solid rgba(99,102,241,0.14)",
      }}
    >
      <DiagramBackground />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(99,102,241,0.012) 3px,rgba(99,102,241,0.012) 4px)",
        zIndex: 1,
      }}/>

      <svg viewBox="0 0 580 340" className="absolute inset-0 w-full h-full" style={{ zIndex: 2 }}>
        <defs>
          <filter id="pg" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="cg" x="-150%" y="-150%" width="400%" height="400%">
            <feGaussianBlur stdDeviation="7" result="b"/>
            <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <radialGradient id="rg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.35)"/>
            <stop offset="100%" stopColor="rgba(99,102,241,0)"/>
          </radialGradient>
        </defs>

        {/* Outer orbit ring — slow rotate */}
        <motion.circle cx={cx} cy={cy} r={R}
          fill="none" stroke="rgba(99,102,241,0.13)" strokeWidth="1" strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Inner counter-ring */}
        <motion.circle cx={cx} cy={cy} r={R * 0.4}
          fill="none" stroke="rgba(99,102,241,0.07)" strokeWidth="1" strokeDasharray="2 10"
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* Spokes: center → each node */}
        {nodes.map((n, i) => (
          <motion.line key={`sp${i}`}
            x1={cx} y1={cy} x2={n.nx} y2={n.ny}
            stroke="rgba(99,102,241,0.08)" strokeWidth="0.8" strokeDasharray="2 6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
          />
        ))}

        {/* Connection arcs + traveling pulse */}
        {connections.map(([a, b], i) => {
          const d = arc(nodes[a], nodes[b]);
          return (
            <g key={`c${i}`}>
              <motion.path d={d} fill="none"
                stroke="rgba(99,102,241,0.22)" strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isInView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + i * 0.15 }}
              />
              {isInView && (
                <motion.circle r="2.5" fill={nodes[a].color} filter="url(#pg)"
                  style={{ offsetPath: `path("${d}")` } as any}
                  animate={{ offsetDistance: ["0%", "100%"] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut", repeatDelay: 0.2 }}
                />
              )}
            </g>
          );
        })}

        {/* Center core */}
        <circle cx={cx} cy={cy} r={30} fill="url(#rg)" />
        <motion.circle cx={cx} cy={cy} r={10} fill="rgba(99,102,241,0.3)" filter="url(#cg)"
          animate={{ r: [8, 13, 8], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
        <line x1={cx-7} y1={cy} x2={cx+7} y2={cy} stroke="rgba(160,162,255,0.5)" strokeWidth="0.8"/>
        <line x1={cx} y1={cy-7} x2={cx} y2={cy+7} stroke="rgba(160,162,255,0.5)" strokeWidth="0.8"/>

        {/* Node circles + icons + badges + labels — all in SVG */}
        {nodes.map((n, i) => {
          const { bx, by } = badgePos(n);
          const { lx, ly } = labelAnchor(n);
          // text-anchor based on position: right(0°)=start, left(180°)=end, top/bottom=middle
          const ta = n.a === 0 ? "start" : n.a === 180 ? "end" : "middle";
          const iconPaths = [
            // Lightbulb
            <g key="i0" stroke={n.color} strokeWidth="1.3" fill="none" strokeLinecap="round">
              <circle cx={n.nx} cy={n.ny - 3} r="7"/>
              <path d={`M${n.nx-3} ${n.ny+4}h6M${n.nx-2} ${n.ny+6.5}h4M${n.nx-1} ${n.ny+9}h2`}/>
            </g>,
            // Tools
            <g key="i1" stroke={n.color} strokeWidth="1.3" fill="none" strokeLinecap="round">
              <path d={`M${n.nx-7} ${n.ny+7}L${n.nx+4} ${n.ny-4}`}/>
              <rect x={n.nx+1} y={n.ny-10} width="8" height="5" rx="1" transform={`rotate(45 ${n.nx+5} ${n.ny-7.5})`} stroke={n.color}/>
              <circle cx={n.nx+5} cy={n.ny+5} r="3.5"/>
            </g>,
            // Doc + magnifier
            <g key="i2" stroke={n.color} strokeWidth="1.3" fill="none" strokeLinecap="round">
              <rect x={n.nx-8} y={n.ny-9} width="11" height="14" rx="1.5"/>
              <path d={`M${n.nx-6} ${n.ny-5}h7M${n.nx-6} ${n.ny-2}h5M${n.nx-6} ${n.ny+1}h3`}/>
              <circle cx={n.nx+5} cy={n.ny+5} r="3.5"/>
              <path d={`M${n.nx+7.5} ${n.ny+7.5}l2.5 2.5`}/>
            </g>,
            // Rocket
            <g key="i3" stroke={n.color} strokeWidth="1.3" fill="none" strokeLinecap="round">
              <path d={`M${n.nx} ${n.ny-9}C${n.nx} ${n.ny-9} ${n.nx+7} ${n.ny-5} ${n.nx+7} ${n.ny+4}L${n.nx} ${n.ny+10}L${n.nx-7} ${n.ny+4}C${n.nx-7} ${n.ny-5} ${n.nx} ${n.ny-9}Z`}/>
              <circle cx={n.nx} cy={n.ny} r="2.5"/>
            </g>,
          ];

          return (
            <motion.g key={`n${i}`}
              initial={{ opacity: 0, scale: 0.3 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3, delay: 0.25 + i * 0.08, ease: "backOut" }}
              style={{ transformOrigin: `${n.nx}px ${n.ny}px`, cursor: "pointer" }}
              whileHover={{ scale: 1.18, transition: { duration: 0.1, ease: "easeOut" } } as any}
            >
              {/* Node outer glow ring */}
              <motion.circle cx={n.nx} cy={n.ny} r={26}
                fill="rgba(6,6,18,0.88)"
                stroke={n.color} strokeWidth="1"
                strokeOpacity={0.35}
                filter="url(#pg)"
                animate={{ strokeOpacity: [0.25, 0.6, 0.25] }}
                transition={{ duration: 1.6, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Icon */}
              {iconPaths[i]}
              {/* Step badge */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.2, delay: 0.5 + i * 0.08, ease: "backOut" }}
                style={{ transformOrigin: `${bx}px ${by}px` }}
              >
                <circle cx={bx} cy={by} r={9} fill="rgba(6,6,18,0.95)" stroke={n.color} strokeWidth="0.9" opacity={0.85}/>
                <text x={bx} y={by + 3.5} textAnchor="middle" fontSize="6.5" fill={n.color} fontWeight="700" letterSpacing="0.3">{n.step}</text>
              </motion.g>
              {/* Label */}
              <motion.text
                x={lx} y={ly + 4}
                textAnchor={ta}
                fontSize="9.5"
                fill={n.color}
                fillOpacity={0.6}
                letterSpacing="0.5"
                fontWeight="500"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.25, delay: 0.6 + i * 0.08 }}
              >
                {n.label}
              </motion.text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
};

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4 }}
      id="process"
      className="section-spacing relative overflow-hidden"
    >
      {/* ===== Content (Above Background) ===== */}
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col"
          >
            <motion.p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-medium">
              Process
            </motion.p>

            <motion.h2 className="heading-section mb-6">
              How we work
            </motion.h2>

            <motion.p className="text-lg text-muted-foreground leading-relaxed mb-10">
              A simple, collaborative process designed to deliver results efficiently.
              From first conversation to final delivery, we keep things clear and
              straightforward.
            </motion.p>

            {/* ✅ Animated diagram replaces the image */}
            <ProcessDiagram isInView={isInView} />
          </motion.div>

          {/* Steps */}
          <div>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative pl-16 pb-12 last:pb-0"
              >
                {index < steps.length - 1 && (
                  <motion.div
                    className="absolute left-[15px] top-12 bottom-0 w-px bg-border"
                    initial={{ scaleY: 0 }}
                    animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    style={{ originY: 0 }}
                  />
                )}

                <motion.span
                  className="absolute left-0 top-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.15 }}
                >
                  {step.number}
                </motion.span>

                <h3 className="text-xl font-bold text-foreground mb-2 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;