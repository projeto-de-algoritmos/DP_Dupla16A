import React, { useState, useEffect } from 'react';
import QuestList from './QuestList'
import API from '../util/API'
import {Catalog} from '../util/catalog'
import { makeStyles } from '@material-ui/core/styles';
import {CircularProgress, Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Bulbapedia = () => {
  const [area, setArea] = useState(''); 
  const [questList, setQuestList] = useState([]); 
  const classes = useStyles();

  const handleChange = (event) => {
    setQuestList(null)
    setArea(event.target.value)
    API(Catalog[event.target.value[0]], setQuestList)
    
  }

  const dropDownMenu = () => {
    Catalog.map((item, index) => (
      <MenuItem value={index}>{index}</MenuItem>
    ))
  }

	if(questList !== null)
		return (
			<div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Speed</InputLabel>
          <Select
            style={{width: '175px'}}
            name="s"
            id="demo-simple-select-outlined"
            value={area}
            onChange={handleChange}
            label="Area"
          >
          {dropDownMenu()}
          </Select>
        </FormControl>
				<QuestList />
        <div style={{display: 'inline-block'}}>
          <PokeList pokemons={pokemons} offset={offset} limit={limit} />
        </div>
        <div style={{marginTop: '20px'}}>
					<Button type="button" onClick={prevAction}>Prev</Button>
					<Button type="button" onClick={nextAction}>Next</Button>
        </div>
			</div>
		);
	return(
    <div className={classes.root}>
      <CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
    </div>
	)
}
export default Bulbapedia;

