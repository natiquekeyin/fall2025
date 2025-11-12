// this component will receive two props, name and age and it will display the name and age on our main app

const Student = ({ name, age }) => {
  return (
    <div>
      <h1>Welcome {name}</h1>
      <p>you are {age} year old</p>
    </div>
  );
};

export default Student;
