import React from 'react';

function StudentList(props) {
	var students = props.students;

	if (!students || students.length === 0) {
		return (
			<div>
				<h2>Student List</h2>
				<p>No students found.</p>
			</div>
		);
	}

	return (
		<div>
			<h2>Student List</h2>
			<ul>
				{students.map(function(student, index) {
					return (
						<li key={index}>
							Name: {student.name}, Age: {student.age}, Email: {student.email}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default StudentList;