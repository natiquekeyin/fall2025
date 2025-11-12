const Header = ({ title, text }) => {
  //   let x = props.title;
  //   let y = props.text;

  //   destructuring!
  //   let { title, text } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Header;
