import {AT} from './secret'
export default API = (url, setQuests) => {
  request = new Request(`${url}&${AT}`)
  return(fetch(request)
    .then(response => response.json())
    .then(json => {
      var arr = []
      json.quests.map((element, index) => {
        const reQuest = new Request(element.key.href)
        fetch(reQuest)
        .then(response => response.jaon())
        .then(questDetails => {
          arr = [...arr, {
            name: questDetails.title.pt_BR,
            descricao: questDetails.description.pt_BR,
            level: questDetails.requirements.min_character_level,

          }]
        }).then(arr => setQuests(arr))
      })
    }).then(arr => arr)
  )
}
