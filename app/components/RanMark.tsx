export function RanMark({ className, width, height, label }: { className?: string; width?: number; height?: number; label?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 120"
      fill="currentColor"
      role="img"
      aria-label={label || "RanCoPar"}
      style={{ width: width || 16, height: height || 19, display: "block" }}
    >
      <rect x="15" y="10" width="18" height="100" />
      <path fillRule="evenodd" d="M 33 10 H 55 A 25 25 0 0 1 55 60 H 33 Z M 33 24 H 52 A 12 12 0 0 1 52 46 H 33 Z" />
      <polygon points="33,65 55,65 82,110 60,110" />
    </svg>
  );
}
