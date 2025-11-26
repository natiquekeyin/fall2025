import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {
  //   console.log("click");
  // };

  const location = useLocation();
  return (
    <header>
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          text={showAdd ? "Close" : "Add"}
          color={showAdd ? "red" : "green"}
          onAdd={onAdd}
        />
      )}
    </header>
  );
};

export default Header;
