const Skills = ({ skills }) => {
  return (
    <>
      <ul>
        {skills.map((skill) => {
          return <li>{skill}</li>;
        })}
      </ul>
    </>
  );
};

export default Skills;
