import { useState, useEffect } from "react";

import { useParams, useNavigate } from "react-router-dom";

const TaskForm = ({ formType = "add", currentTask, getSingleTask, addTask, editTask }) => {
	const [task, setTask] = useState({ title: "", description: "" });
	const [errors, setErrors] = useState({ title: "", description: "" });

	const navigate = useNavigate();
	const { taskId } = useParams();

	const onInputChange = (event) => {
		setTask((state) => ({ ...state, [event.target.name]: event.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!task.title) {
			return setErrors((errors) => ({ ...errors, title: "Title is required!" }));
		}
		if (!task.description) {
			return setErrors((errors) => ({ ...errors, description: "Description is required!" }));
		}

		if (formType === "add") {
			addTask({ title: task.title, description: task.description });
			return navigate("/");
		} else if (formType === "edit") {
			editTask(taskId, { title: task.title, description: task.description });
			return navigate("/");
		}
	};

	useEffect(() => {
		if (formType === "edit" && taskId) {
			getSingleTask(taskId);
		}
	}, [taskId]);

	useEffect(() => {
		if (formType === "edit") setTask(currentTask);
	}, [currentTask]);

	return (
		<form className="task-form" spellCheck="false" onSubmit={handleSubmit}>
			<legend>{formType === "add" ? "Add Task" : "Edit Task"}</legend>

			<div className="form-control">
				<input
					type="text"
					id="title"
					name="title"
					placeholder="Task Title"
					value={task?.title ?? ""}
					onChange={onInputChange}
				/>
				<label htmlFor="title">Task Title</label>
				{errors?.title && <span className="form-error">{errors.title}</span>}
			</div>

			<div className="form-control">
				<textarea
					id="description"
					name="description"
					placeholder="Task Description"
					value={task?.description ?? ""}
					onChange={onInputChange}
				/>
				<label htmlFor="description">Task Description</label>
				{errors?.description && <span className="form-error">{errors.description}</span>}
			</div>

			<button className="btn submit-btn">{formType === "add" ? "Submit" : "Edit"}</button>
		</form>
	);
};

export default TaskForm;
