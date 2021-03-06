import React, { useState } from "react";
import TodoList from "./TodoList.jsx";

const Home = () => {
	// Available task priorities
	const Priorities = ["normal", "low", "high"];

	// State hooks
	const [TasksList, setTasksList] = useState([]);
	const [InputValue, setInputValue] = useState("");
	const [PriorityValue, setPriorityValue] = useState("DEFAULT");

	// Adding new task
	const HandleNewTask = () => {
		setTasksList(
			InputValue.length === 0 || isNaN(PriorityValue)
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

		setInputValue(!isNaN(PriorityValue) ? "" : InputValue);
	};

	// Deleting task
	const DeleteTask = (IndexToDelete) =>
		setTasksList(
			TasksList.filter((Task, TaskIndex) => TaskIndex !== IndexToDelete)
		);

	// Completing task
	const CompleteTask = (IndexToComplete) =>
		setTasksList(
			TasksList.map((Task, TaskIndex) =>
				TaskIndex === IndexToComplete
					? { ...Task, completed: !Task.completed }
					: { ...Task }
			)
		);

	return (
		<div className="container-fluid p-0">
			<div className="row mt-4 mb-3">
				<div className="col-12">
					<h1 className="text-white text-center">
						<i className="fas fa-list"></i> TO-DO LIST
					</h1>
				</div>
			</div>

			<div className="row flex-wrap justify-content-center align-items-center gap-2 mb-5 mx-2">
				<div className="col-12 col-sm-6 col-md-6 col-xl-3 p-0">
					<input
						type="text"
						title="Write a task"
						className="form-control border-0 shadow-sm"
						value={InputValue}
						placeholder="What needs to be done?"
						onChange={(e) => setInputValue(e.target.value)}
						onKeyDown={(e) =>
							e.key === "Enter" ? HandleNewTask() : null
						}
						autoFocus
					/>
				</div>

				<div className="col-12 col-sm-4 col-md-3 col-lg-2 p-0">
					<select
						title="Priority"
						className="form-select border-0 shadow-sm"
						defaultValue={PriorityValue}
						onChange={(e) => setPriorityValue(e.target.value)}>
						<option value="DEFAULT" disabled>
							&#9473; Task Priority
						</option>
						{Priorities.map((PriorityName, PriorityIndex) => (
							<option key={PriorityIndex} value={PriorityIndex}>
								{PriorityName}
							</option>
						))}
					</select>
				</div>

				<div className="col-12 col-sm-auto p-0">
					<button
						type="button"
						title="Add task"
						className="btn w-100 bg-warning bg-gradient shadow-sm text-white"
						onClick={HandleNewTask}>
						<i className="fas fa-paper-plane"></i>
						<span className="d-sm-none ps-2">
							<strong>ADD NEW</strong> TASK
						</span>
					</button>
				</div>
			</div>

			<TodoList
				Priorities={Priorities}
				TasksList={TasksList}
				DeleteTask={DeleteTask}
				CompleteTask={CompleteTask}
			/>
		</div>
	);
};

export default Home;
