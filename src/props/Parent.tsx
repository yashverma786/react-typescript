import { Child, ChildAsFC } from "./Child";
const Parent = () => {
  return (
    <>
      <Child color="red" onClick={() => console.log("click")}></Child>;
      <ChildAsFC color="red" onClick={() => console.log("click")}>
        sndjsdn
      </ChildAsFC>
    </>
  );
};

export default Parent;
