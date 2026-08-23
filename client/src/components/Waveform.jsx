function Waveform({ bars = 7, animate = false, color = "#5B5BF0", className = "" }) {
  const pattern = [7, 13, 19, 11, 17, 8, 15, 10, 14, 6];
  const heights = pattern.slice(0, bars);

  return (
    <div className={`flex items-end gap-[3px] ${className}`}>
      {animate && (
        <style>{`
          @keyframes meetingWaveBar {
            0%, 100% { transform: scaleY(0.35); }
            50% { transform: scaleY(1); }
          }
        `}</style>
      )}
      {heights.map((h, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full"
          style={{
            height: `${h}px`,
            backgroundColor: color,
            transformOrigin: "bottom",
            animation: animate
              ? `meetingWaveBar 0.9s ease-in-out infinite`
              : undefined,
            animationDelay: animate ? `${i * 0.09}s` : undefined,
          }}
        />
      ))}
    </div>
  );
}

export default Waveform;
