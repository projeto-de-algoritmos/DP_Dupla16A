import {AT} from './secret'
const compare = (a, b) => {
	if(a.levelMin < b.levelMin)
		return -1;
	if(a.levelMin > b.levelMin)
		return 1;
	return 0;
}
function API (url, setQuests){
	var size;
  const request = new Request(`${url}&${AT}`)
  return fetch(request)
    .then(response => response.json())
    .then(json => {
      var arr = []
			size = json.quests.length
      json.quests.map((element, index) => {
        const reQuest = new Request(`${element.key.href}&${AT}`)
        fetch(reQuest)
        .then(response => response.json())
        .then(questDetails => {
					var max = questDetails.requirements.max_character_level
					var min = questDetails.requirements.min_character_level
          arr = [...arr, {
            name: questDetails.title.pt_BR,
            levelMin: Math.floor(Math.random()*(max - min)) + min,
            levelMobs: Math.floor(Math.random()*(max - min)) + min,
          }]
					return arr;
        }).then(arr => {
					if(size === arr.length){
						arr.sort(compare)
						setQuests(arr)
					}
				})
      })
    }).then(arr => arr)
}
export default API;
