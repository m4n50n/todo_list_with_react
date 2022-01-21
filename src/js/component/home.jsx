import React, { useState } from "react";
import TodoList from "./TodoList.jsx";

const Home = () => {
	// Available task priorities
	const Priorities = ["normal", "low", "high"];

	// State hooks
	const [TasksList, setTasksList] = useState([]);
	const [InputValue, setInputValue] = useState("");
	const [PriorityValue, setPriorityValue] = useState(0);

	// Adding new task
	const HandleNewTask = () => {
		setTasksList(
			InputValue.length === 0 || PriorityValue.length === 0
				? [...TasksList]
				: [
						...TasksList,
						{
							task: InputValue,
							priority: Priorities[PriorityValue],
							completed: false,
						},
				  ]
		);

		setInputValue("");
	};

	// Deleting task
	const DeleteTask = (IndexToDelete) =>
		setTasksList(
			TasksList.filter((Task, TaskIndex) => TaskIndex !== IndexToDelete)
		);

	// Completing task
	const CompleteTask = (IndexToComplete) =>
		setTasksList(
			TasksList.map((Task, TaskIndex) => {
				return TaskIndex === IndexToComplete
					? { ...Task, completed: !Task.complete }
					: { ...Task };
			})
		);

	return (
		<>
			<input
				type="text"
				value={InputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>

			<select
				defaultValue={PriorityValue}
				onChange={(e) => setPriorityValue(e.target.value)}>
				{Priorities.map((PriorityName, PriorityIndex) => (
					<option key={PriorityIndex} value={PriorityIndex}>
						{PriorityName}
					</option>
				))}
			</select>

			<button type="button" onClick={HandleNewTask}>
				Add Task
			</button>

			<TodoList
				TasksList={TasksList}
				DeleteTask={DeleteTask}
				CompleteTask={CompleteTask}
			/>
		</>
	);
};

export default Home;
