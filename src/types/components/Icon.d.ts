type IconWeight = "thin" | "light" | "regular" | "bold" | "fill" | "duotone";

declare type PhosphorIconProps<AdditionalProps = {}> = {
  alt?: string;
  color?: string;
  size?: string | number;
  weight?: IconWeight;
  mirrored?: boolean;
} & AdditionalProps &
  React.ComponentPropsWithoutRef<"svg">;

declare type IconType = React.ForwardRefExoticComponent<
  PhosphorIconProps & React.RefAttributes<SVGSVGElement>
>;
