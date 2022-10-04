declare type DivElement<T = {}> = React.FC<
  Omit<React.HTMLAttributes<HTMLDivElement>, "title"> & T
>;
