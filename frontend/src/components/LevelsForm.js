import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

function LevelForm(props) {
  const [lvlMin, setLvlMin] = useState(props.edit ? props.edit.value.date : '');
  const [mobsLvl, setMobsLvl] = useState(props.edit ? props.edit.value.time : '');
  const [name, setName] = useState(props.edit ? props.edit.value.name : '');

  const inputRef = useRef(null);


  const handleSubmit = e => {
    e.preventDefault();

    if(lvlMin === '' || mobsLvl === '' || name === '')
      return;
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      lvlMin: lvlMin,
      mobsLvl: mobsLvl,
      name: name
    });
    setLvlMin('');
    setMobsLvl('');
    setName('');
  };
	const form = (action) => {
		return(
			<div style={{display: 'flex', flexDirection:'column'}}>
        <div style={{display: 'flex', flexDirection:'row'}}>
          <input
            placeholder='Nome da área nova'
            type='text'
            value={name}
            onChange={(e) => {setName(e.target.value); console.log(`NAME: ${e.target.value}`)}}
            name='name'
            className='level-input'
            style={{width:'100%'}}
          />
          <button onClick={handleSubmit} className='level-button' style={{marginTop:'auto', marginBottom:'auto'}}>
            {action}
          </button>
        </div>
        <div style={{display: 'flex'}}>
          <input
            type='number'
            value={lvlMin}
            onChange={(e) => setLvlMin(e.target.value)}
            name='date'
            className='level-input'
            style={{marginRigth: '200px'}}
            
          />
          <input
            label='Level dos inimigos'
            type='number'
            value={mobsLvl}
            onChange={(e) => setMobsLvl(e.target.value)}
            name='text'
            className='level-input'
          />
        </div>
			</div>
		);
	}

  return (
    <form onSubmit={handleSubmit} className='level-form'>
      {props.edit ? (
				form('Editar área')
      ) : (
				form('Adicionar nova área')
      )}
    </form>
  );
}

export default LevelForm;

