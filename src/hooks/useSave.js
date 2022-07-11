import { useRoutineStore, useUserStore } from './';

export const useSave = () => {
	// A hook to handle the save in the database if the user is not logged and in the database if is logged

	const { events, tasks, objectives } = useRoutineStore();
	const { uid } = useUserStore();

	const handleSaveTasks = () => {
		if (!uid) {
			localStorage.setItem('tasks', JSON.stringify(tasks));
		} else {
			// save events in backend
		}
	}

	const handleSaveObjectives = () => {
		if (!uid) {
			localStorage.setItem('objectives', JSON.stringify(objectives));
		} else {
			// save events in backend
		}
	}

	const handleSaveEvents = () => {
		if (!uid) {
			localStorage.setItem('events', JSON.stringify(events));
		} else {
			// save events in backend
		}
	}

	return {
		handleSaveEvents,
		handleSaveTasks,
		handleSaveObjectives,
	}

}
