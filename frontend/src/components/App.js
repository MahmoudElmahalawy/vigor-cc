import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import taskService from "../services/task.service";

import Tasks from "../pages/Tasks";
import NotFound from "../pages/NotFound";

import Navbar from "./Navbar";
import TaskForm from "./TaskForm";

function App() {
	const [tasks, setTasks] = useState([]);
	const [currentTask, setCurrentTask] = useState(null);

	const getAllTasks = () => {
		taskService.getAll().then((res) => setTasks(res.data));
	};

	const getSingleTask = (id) => {
		taskService.getById(id).then((res) => {
			setCurrentTask(res.data);
		});
	};

	const addTask = (task) => {
		taskService.post(task).then((res) => {
			getAllTasks();
		});
	};

	const editTask = (id, task) => {
		taskService.update(id, task).then((res) => {
			getAllTasks();
		});
	};

	const deleteTask = (id) => {
		taskService.delete(id).then((res) => {
			getAllTasks();
		});
	};

	useEffect(() => {
		getAllTasks();
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Navigate to="/tasks" />} />
				<Route exact path="/tasks" element={<Tasks tasks={tasks} deleteTask={deleteTask} />} />
				<Route exact path="/add" element={<TaskForm formType="add" addTask={addTask} />} />
				<Route
					exact
					path="/tasks/:taskId"
					element={
						<TaskForm
							formType="edit"
							getSingleTask={getSingleTask}
							currentTask={currentTask}
							editTask={editTask}
						/>
					}
				/>
				<Route exact path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
