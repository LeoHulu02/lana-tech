import type { ReactNode } from "react";

type IconProps = {
  size?: number;
  className?: string;
};

function Svg({ size = 22, className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </Svg>
  );
}

export function IconDevice(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </Svg>
  );
}

export function IconSettings(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6L17 7M7 17l-1.4 1.4" />
    </Svg>
  );
}

export function IconPalette(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3a9 9 0 108.2 12.6 1.8 1.8 0 00-1.7-2.6H15a3 3 0 010-6h.5" />
      <circle cx="7.5" cy="10.5" r=".8" fill="currentColor" />
      <circle cx="9.5" cy="7.5" r=".8" fill="currentColor" />
      <circle cx="13.5" cy="7" r=".8" fill="currentColor" />
    </Svg>
  );
}

export function IconCart(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 5h2l1.5 9h10L20 8H7" />
      <circle cx="10" cy="19" r="1.2" fill="currentColor" />
      <circle cx="17" cy="19" r="1.2" fill="currentColor" />
    </Svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3l8 3v6c0 5-3.4 8.4-8 9-4.6-.6-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </Svg>
  );
}

export function IconBolt(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />
    </Svg>
  );
}

export function IconLayout(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </Svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </Svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </Svg>
  );
}

export function IconHandshake(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 13l3 3 7-7M4 14l4-4 3 3M16 8l2-2 3 3-4 4" />
    </Svg>
  );
}

export function IconMonitor(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8M12 16v4" />
    </Svg>
  );
}

export function IconTablet(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M11 18h2" />
    </Svg>
  );
}

export function IconScreens(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="2" y="6" width="13" height="10" rx="1.5" />
      <rect x="12" y="10" width="10" height="8" rx="1.5" />
    </Svg>
  );
}

export function IconTargetResult(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
    </Svg>
  );
}

export function IconSun(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 18}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    </Svg>
  );
}

export function IconMoon(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 18}>
      <path d="M21 14.5A8.5 8.5 0 1110.5 3 7 7 0 0021 14.5z" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 22}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 22}>
      <path d="M6 6l12 12M18 6L6 18" />
    </Svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 11v5M8 8h.01M12 16v-3.2a1.8 1.8 0 013.6 0V16" />
    </Svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.4" cy="7.6" r=".6" fill="currentColor" />
    </Svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <path d="M5 5l14 14M15.5 5L5 17.5M19 5l-6 6" />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </Svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <path d="M8 3h3l1 4-2 1a12 12 0 006 6l1-2 4 1v3c0 1-1 2-2 2C10 18 6 14 6 5c0-1 1-2 2-2z" />
    </Svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 16}>
      <path d="M6.2 17.8L5 21l3.3-1.1A9 9 0 1012 21a9 9 0 01-5.8-3.2z" />
      <path d="M9 10c.2 2 2 4 4 4.2" />
    </Svg>
  );
}

export function IconChevronDown(props: IconProps) {
  return (
    <Svg {...props} size={props.size ?? 18}>
      <path d="M6 9l6 6 6-6" />
    </Svg>
  );
}
