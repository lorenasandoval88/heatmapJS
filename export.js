
import * as d3 from "https://cdn.skypack.dev/d3@7"

function ui(targetDiv = document.body) {
    // target div for the user interface
 
    if (typeof (targetDiv) == 'string') {
        targetDiv = getElementById('targetDiv')
    }
    let div = document.createElement('div')
    targetDiv.appendChild(div)
    div.id = 'prsCalcUI'
    // div.innerHTML = `
    // <p>
    // HeatmapJS
    // </p>
    //  <hr>
    `

    var theSVG = d3.select('prsCalcUI')
    .append("svg")
    .attr("width",200)
    .attr("height",200);

    theSVG.append("circle")
    .style("stroke","green")
    .style("fill","white")
    .attr("r",40)
    .attr("cx", 100)
    .attr("cy", 100)
}



export {
    d3,
    ui
}
