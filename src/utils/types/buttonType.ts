export type CartButtonProps = {
  title: string;
  cls?: string;
};

export type ProductButtonProps = {
  onClass: string;
  icon: string;
  color: string;
  width: number;
  height: number;
  setClick?: () => void;
};
