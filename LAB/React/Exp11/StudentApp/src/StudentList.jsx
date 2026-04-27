import React from 'react';

function StudentList(props) {
	var students = props.students;

	return (
		<div style={{ maxWidth: '420px', margin: '32px auto', padding: '18px', border: '1px solid #b0bec5', borderRadius: '6px', background: '#fff' }}>
			<h2 style={{ textAlign: 'center', marginBottom: '18px', color: '#1976d2', letterSpacing: '1px' }}>Student List</h2>
			{(!students || students.length === 0) ? (
				<p style={{ textAlign: 'center', color: '#888', fontSize: '16px' }}>No students found.</p>
			) : (
				<ul style={{ listStyle: 'none', padding: 0 }}>
					{students.map(function(student, index) {
						return (
							<li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #e3e3e3', fontSize: '16px' }}>
								<span><b>Name:</b> {student.name}</span><br />
								<span><b>Age:</b> {student.age}</span><br />
								<span><b>Email:</b> {student.email}</span>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default StudentList;