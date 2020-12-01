import React, { useState, useEffect, useRef } from 'react';
import LevelsForm from './LevelsForm';
import LevelsList from './LevelsList';

function Programmation() {
  const [levels, setLevels] = useState([]);
	const [path, setPath] = useState([]);

  const inputRef = useRef(null);

  const addLevelsList = level => {
    const newLevelsList = [level, ...levels];

    setLevels(newLevelsList);
  };

  const updateLevels = (levelsId, newValue) => {
    setLevels(prev => prev.map(item => (item.id === levelsId ? newValue : item)));
  };

  const removeLevels = id => {
    const removedArr = [...levels].filter(level => level.id !== id);

    setLevels(removedArr);
  };

  return (
		<div style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
			<div style={{width: '700px'}}>
				<h1>Adicione as áreas</h1>
				<LevelsForm onSubmit={addLevelsList} />
				<LevelsList
					levels={levels}
					removeLevels={removeLevels}
					updateLevels={updateLevels}
				/>
			</div>
			<div style={{display: 'flex', flex: '1', flexDirection: 'column'}}>
			</div>
		</div>
  );
}

export default Programmation;

