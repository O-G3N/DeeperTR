export type VectorIconProps = {
  size?: number;
  strokeWidth?: number;
};

export const createVectorIcon = ({ size = 24, strokeWidth = 2 }: VectorIconProps = {}) => ({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  strokeWidth
});
