import TaskCard from "../components/TaskCard";

const Tasks = ({ tasks, deleteTask }) => {
	return tasks?.length > 0 ? (
		<div className="container p-50">
			<h1 className="page-title">Tasks</h1>
			<main className="grid">
				{tasks !== null && tasks.map((task) => <TaskCard key={task._id} task={task} deleteTask={deleteTask} />)}
			</main>
		</div>
	) : (
		<h1 className="page-title">No Tasks</h1>
	);
};

export default Tasks;
