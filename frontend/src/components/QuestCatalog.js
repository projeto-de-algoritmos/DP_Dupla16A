import React, { useState, useEffect } from 'react';
import QuestList from './QuestList'
import API from '../util/API'
import catalog from '../util/catalog'
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, CircularProgress, Button, MenuItem, FormControl, Select } from '@material-ui/core';


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

const QuestCatalog = () => {
  const [area, setArea] = useState(''); 
  const [quests, setQuests] = useState([]); 
  const classes = useStyles();

  const handleChange = (event) => {
    setQuests(null)
    setArea(event.target.value)
		console.log(event.target.value)
		console.log(catalog[event.target.value])
		console.log(catalog)
    API(catalog[event.target.value], setQuests)
  }

  const dropDownMenu = () => {
    return(Object.keys(catalog).map((item, index) => {
			return(
				<MenuItem value={item}>{item}</MenuItem>
			)
		}))
  }

	if(quests !== null)
		return (
			<div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Speed</InputLabel>
          <Select
            style={{width: '100%'}}
            name="s"
            id="demo-simple-select-outlined"
            value={area}
            onChange={handleChange}
            label="Area"
          >
						{dropDownMenu()}
          </Select>
        </FormControl>
				<QuestList quests={quests}/>
			</div>
		);
	return(
    <div className={classes.root}>
      <CircularProgress style={{marginLeft: 'auto', marginRight: 'auto'}}/>
    </div>
	)
}
export default QuestCatalog;

