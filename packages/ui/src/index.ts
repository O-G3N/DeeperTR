export type VectorIconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const createBaseIcon = ({ size = 20, strokeWidth = 1.8, className }: VectorIconProps = {}) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className
});

export const IconSearch = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z", "m21 21-4.35-4.35"]
});

export const IconBook = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["M4 5a3 3 0 0 1 3-3h13v19H7a3 3 0 0 0-3 3V5Z", "M7 2v19"]
});

export const IconChevronRight = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["m9 18 6-6-6-6"]
});

export const IconHeart = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["m12 20-7-7a4.5 4.5 0 0 1 6.35-6.36L12 7.29l.65-.65a4.5 4.5 0 1 1 6.36 6.36l-7.01 7Z"]
});

export const IconLayoutDashboard = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["M3 3h8v8H3z", "M13 3h8v5h-8z", "M13 10h8v11h-8z", "M3 13h8v8H3z"]
});

export const IconUsers = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2", "M8.5 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8", "M23 21v-2a4 4 0 0 0-3-3.87", "M16 3.13a4 4 0 0 1 0 7.75"]
});

export const IconMessageSquare = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"]
});

export const IconShield = (props: VectorIconProps = {}) => ({
  ...createBaseIcon(props),
  paths: ["M12 3 4 7v6c0 5 3.4 8.7 8 10 4.6-1.3 8-5 8-10V7l-8-4Z", "m9.5 12 1.7 1.7 3.3-3.7"]
});
