import React from 'react';

const LevelsResult = ({ path }) => {
	if(path.lenght === 0)
		return(null);
  return path.map((time, index) => (
    <div className={'levels-row'}>
			<div>
				{path.name}
			</div>
    </div>
	));
};

export default LevelsResult;


