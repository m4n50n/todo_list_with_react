import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
	return (
		<div>
			{props.TasksList.map((Task, TaskIndex) => (
				<div
					key={TaskIndex}
					className={`${Task.priority} ${
						Task.completed ? "completed" : ""
					}`}>
					<span onClick={() => props.CompleteTask(TaskIndex)}>
						V{" "}
					</span>
					{Task.task}
					<span onClick={() => props.DeleteTask(TaskIndex)}> X</span>
				</div>
			))}
		</div>
	);
};

TodoList.propTypes = {
	TasksList: PropTypes.array,
	DeleteTask: PropTypes.func,
	CompleteTask: PropTypes.func,
};

export default TodoList;
