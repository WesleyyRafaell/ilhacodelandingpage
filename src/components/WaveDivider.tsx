type WaveDividerProps = {
  position: 'top' | 'bottom'
  fillClassName: string
}

export function WaveDivider({ position, fillClassName }: WaveDividerProps) {
  const placement = position === 'top'
    ? 'top-0 -translate-y-px'
    : 'bottom-0 translate-y-px rotate-180'

  return (
    <svg
      className={`pointer-events-none absolute left-0 z-10 h-14 w-full sm:h-20 ${placement}`}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className={fillClassName}
        d="M0 0H1440V62C1310 100 1190 104 1062 72C924 38 798 18 660 52C522 86 408 116 260 82C150 56 70 46 0 64V0Z"
      />
    </svg>
  )
}
