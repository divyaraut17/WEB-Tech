import React, { useState } from 'react';

function AddStudent(props) {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [email, setEmail] = useState("");

	function handleNameChange(event) {
		setName(event.target.value);
	}

	function handleAgeChange(event) {
		setAge(event.target.value);
	}

	function handleEmailChange(event) {
		setEmail(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (name === "" || age === "" || email === "") {
			alert("Please fill all fields.");
			return;
		}
		// Only basic validation
		var newStudent = {
			name: name,
			age: age,
			email: email
		};
		var newList = props.students.slice();
		newList.push(newStudent);
		props.setStudents(newList);
		alert("Student added!");
		setName("");
		setAge("");
		setEmail("");
	}

	return (
		<div style={{ maxWidth: '420px', margin: '32px auto', padding: '18px', border: '1px solid #b0bec5', borderRadius: '6px', background: '#fff' }}>
			<h2 style={{ textAlign: 'center', marginBottom: '18px', color: '#1976d2', letterSpacing: '1px' }}>Add Student</h2>
			<form onSubmit={handleSubmit}>
				<div style={{ marginBottom: '12px' }}>
					<label style={{ display: 'block', marginBottom: '4px' }}>Name:</label>
					<input type="text" value={name} onChange={handleNameChange} style={{ width: '100%', padding: '7px', borderRadius: '4px', border: '1px solid #b0bec5' }} />
				</div>
				<div style={{ marginBottom: '12px' }}>
					<label style={{ display: 'block', marginBottom: '4px' }}>Age:</label>
					<input type="text" value={age} onChange={handleAgeChange} style={{ width: '100%', padding: '7px', borderRadius: '4px', border: '1px solid #b0bec5' }} />
				</div>
				<div style={{ marginBottom: '16px' }}>
					<label style={{ display: 'block', marginBottom: '4px' }}>Email:</label>
					<input type="text" value={email} onChange={handleEmailChange} style={{ width: '100%', padding: '7px', borderRadius: '4px', border: '1px solid #b0bec5' }} />
				</div>
				<button type="submit" style={{ width: '100%', padding: '9px', background: '#1976d2', color: 'white', border: 'none', borderRadius: '4px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>Add Student</button>
			</form>
		</div>
	);
}

export default AddStudent;