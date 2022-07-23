import { Slider } from '@mui/material';
import { useEffect } from 'react';

import { useRoutineStore, useListItemObjective, useSave, useAuthStore } from '../../hooks/';
import { List } from '../components/List';

export const Objectives = () => {

	const { objectives, addObjective, loadObjectives } = useRoutineStore();
	const { user } = useAuthStore();
	const { uid } = user;
	const { handleSaveObjectives } = useSave();

	useEffect(() => {
		if (!uid) {
			const objectives = JSON.parse(localStorage.getItem('objectives'));
			Array.isArray(objectives) && loadObjectives(objectives);
		} else {
			//load objectives from backend
		}
	}, [])

	const handleAddObjective = () => {
		const id = new Date().getTime();
		addObjective({
			name: '',
			progress: 50,
			id
		});
	}

	return (
		<>
			<List
				handleAddItem={handleAddObjective}
				hook={useListItemObjective}
				list={objectives}
				title='Objectives'
				save={handleSaveObjectives}
			>
				{
					(change, value) => {
						return (
							<Slider
								aria-label="Default"
								valueLabelDisplay="auto"
								value={value}
								onChange={change}
							/>
						)
					}
				}
			</List>
		</>
	)
}
