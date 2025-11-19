import Task from "./Task";
const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
      {tasks.map((task) => (
        // <div key={task.id}>
        //   <h3>{task.text}</h3>
        // </div>
        <Task task={task} key={task.id} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
