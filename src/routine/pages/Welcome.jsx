import React from 'react'
import { useRoutineStore } from '../../hooks';
import { useForm } from '../../hooks/useform';
import { useUserStore } from '../../hooks/useUserStore'
import { InputButton } from '../components/InputButton'

export const Welcome = () => {

	const { addUser } = useUserStore();
	const { loadEvents } = useRoutineStore();

	const [formValues, handleInputChange] = useForm({ displayName: '' });
	const { displayName } = formValues;

	const handleSubmit = (e) => {
		e.preventDefault();
		const events = JSON.parse(localStorage.getItem('events'));
		loadEvents(events)
		addUser({ displayName, uid: '' });
	}


	return (
		<>
			<div>
				<span>login</span>&emsp;
				<span>sign-in</span>
			</div>
			<img src="" alt="logo" />
			<h1>Routine App</h1>
			<p>Welcome to <strong>Routine App</strong>, please write your name :)</p>
			<form onSubmit={handleSubmit}>
				<InputButton
					name='displayName'
					value={displayName}
					handleInputChange={handleInputChange}
					icon={<i className="fa-solid fa-check"></i>}
					placeholder='Valeria Herna...'
				/>
			</form>
		</>
	)
}
