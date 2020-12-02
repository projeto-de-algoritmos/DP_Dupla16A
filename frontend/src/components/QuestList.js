import { React } from 'react'

const QuestList = ({ quests }) => {

  return quests.map((quest, index) => (
    <div
			style={{marginLeft: 'auto', marginRight: 'auto'}}
      className={'program-row'}
    >
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}>
        <div>
          {quest.name}
        </div>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-between', flex: '5', marginRight: '30px'}}>
				<div>
					{`${quest.level}`}
				</div>
      </div>
    </div>
  ));
};

export default QuestList;

