function ui(targetDiv = document.body) {
    // target div for the user interface
    //console.log(`prsCalc module imported at ${Date()}`)
    if (typeof (targetDiv) == 'string') {
        targetDiv = getElementById('targetDiv')
    }
    //console.log(pgs)
    let div = document.createElement('div')
    targetDiv.appendChild(div)
    div.id = 'prsCalcUI'
    div.innerHTML = `
    <p>
    HeatmapJS
    </p>
     <hr>
    `
}

export {
    ui
}
