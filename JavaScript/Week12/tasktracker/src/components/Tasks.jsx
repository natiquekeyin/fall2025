import Task from "./Task";
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        // <div key={task.id}>
        //   <h3>{task.text}</h3>
        // </div>
        <Task
          task={task}
          key={task.id}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
