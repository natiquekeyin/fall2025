import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("click");
  // };
  return (
    <header>
      <h1>{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onAdd={onAdd}
      />
    </header>
  );
};

export default Header;
