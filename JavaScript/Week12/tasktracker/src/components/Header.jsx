import Button from "./Button";

const Header = ({ title }) => {
  // const onClick = () => {
  //   console.log("click");
  // };
  return (
    <header>
      <h1>{title}</h1>
      <Button text="Add" color="green" />
    </header>
  );
};

export default Header;
