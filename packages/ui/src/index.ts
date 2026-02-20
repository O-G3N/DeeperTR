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
