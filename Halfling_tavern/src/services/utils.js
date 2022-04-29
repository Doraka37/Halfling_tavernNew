

function choicesToList(choices) {
    let list = []
    for (let index = 0; index < choices.length; index++) {
        list.push({checked: false, label: choices[index], value: choices[index]})
    }
    return list
}

export {choicesToList}