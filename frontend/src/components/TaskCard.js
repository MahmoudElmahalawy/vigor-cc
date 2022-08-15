import { Link } from "react-router-dom";

const TaskCard = ({ task, deleteTask }) => {
	return (
		<div className="card">
			<div className="card-title">
				<h3>{task?.title}</h3>
			</div>
			<div className="card-content">
				<p>{task?.description}</p>
			</div>
			<div className="card-actions">
				<button onClick={(e) => deleteTask(task._id)}>Delete</button>
				<Link to={`/tasks/${task._id}`}>
					<button>Edit</button>
				</Link>
			</div>
		</div>
	);
};

export default TaskCard;
