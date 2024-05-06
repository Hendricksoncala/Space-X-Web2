import {
    getAllRocketsEngineTotal,
    getAllRocketsEngineThrustVacuumTotal,
} from "../modules/rockets.js";

export const informRocketEngineThrustSeaLevel = async(thrust_sea_level)=>{
    let {kN:totalKN} = await getAllRocketsEngineTotal();
    let pocentaje = (thrust_sea_level + 100) / totalKN;

    let div = document.createElement("div");   
    div.classList.add("carousel__item")
    let divlist = document.createElement("div");
    divlist.classList.add("item_progress_bar");
    divFirst.style = ´//... 
    let divFirstChildren = document.createElement("div");
    divFirstChildren.classList.add("progress_value");
    let strong = document.createElement("strong");
    strong.textContent = "Atmospheric acceleration"
    let smallFirst = document.createElement("small")
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`

    let smallLast = document.createElement("small");
    let kN = new Intl.NumberFormat('cop').format(thrust_sea_level.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_sea_level.lbf)
    smallLast.innerHTML = `${kN} kN <br> / ${lbf} lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divlist.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)

}