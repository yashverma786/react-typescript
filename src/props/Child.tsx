interface ChildProps {
  color: string;
  onClick: () => void;
}
export const Child = ({ color, onClick }: ChildProps) => {
  //tis type of function wont receive ildren props directly
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

//two different approaches
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
