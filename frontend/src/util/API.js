import {AT} from './secret'
function API (url, setQuests){
  const request = new Request(`${url}&${AT}`)
  return fetch(request)
    .then(response => response.json())
    .then(json => {
      var arr = []
      json.quests.map((element, index) => {
        const reQuest = new Request(`${element.key.href}&${AT}`)
        fetch(reQuest)
        .then(response => response.json())
        .then(questDetails => {
          arr = [...arr, {
            name: questDetails.title.pt_BR,
            level: questDetails.requirements.min_character_level,

          }]
					return arr;
        }).then(arr => setQuests(arr))
      })
    }).then(arr => arr)
}
export default API;
