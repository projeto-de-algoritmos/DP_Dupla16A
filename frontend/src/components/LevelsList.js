import React, { useState } from 'react';
import LevelsForm from './LevelsForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const LevelsList = ({ levels, removeProgram, updateProgram }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateProgram(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <LevelsForm edit={edit} onSubmit={submitUpdate} />;
  }

  return levels.map((level, index) => (
    <div
			style={{marginLeft: 'auto', marginRight: 'auto'}}
      className={'level-row'}
      key={level.id}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}key={level.id}>
        <div>
          {level.name}
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}key={level.id}>
				<div>
					{level.lvlMin}
				</div>
				<div>
					{level.mobsLvl}
				</div>
      </div>
      <div className='icons' style={{flex: 1}}>
        <RiCloseCircleLine
          onClick={() => removeProgram(level.id)}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: level.id, value: {date: level.date, time: level.time, duration: level.duration, name: level.name} })}
          className='edit-icon' style={{flex: 1}}
        />
      </div>
    </div>
  ));
};

export default LevelsList;

