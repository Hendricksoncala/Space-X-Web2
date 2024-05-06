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
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
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

    //the result of all the processes are this:
    // <div class="carousel__item">
    //     <div class="item__progress__bar">
    //         <div class="progress__value">
    //             <strong>Title</strong>
    //             <small>3</small>
    //         </div>
    //     </div>
    // </div>
}

export const infoRocketEngineThrustVacuum = async(thrust_vacuum)=>{
    let {kN:totalKN} = await getAllRocketsEngineThrustVacuumTotal();
    let pocentaje = (thrust_vacuum.kN * 100) / totalKN;

    let div = document.createElement("div");   
    div.classList.add("carousel__item")
    let divlist = document.createElement("div");
    divlist.classList.add("item__progress__bar");
    divFirst.style = `background: radial-gradient(closest-side, #1d1f38 85%, transparent 85% 100%), conic-gradient(var(--color--three) ${pocentaje}%, transparent 0)`
    let divFirstChildren = document.createElement("div");
    divFirstChildren.classList.add("progress__value");
    let strong = document.createElement("strong");
    strong.textContent = "Speed in space"
    let smallFirst = document.createElement("small")
    smallFirst.textContent = `${pocentaje.toFixed(2)} %`

    let smallLast = document.createElement("small");
    let kN = new Intl.NumberFormat('cop').format(thrust_vacuum.kN)
    let lbf = new Intl.NumberFormat('cop').format(thrust_vacuum.lbf)
    smallLast.innerHTML = `${kN} kN <br> / ${lbf} lbf`

    divFirstChildren.append(strong, smallFirst, smallLast)
    divlist.append(divFirstChildren)
    div.append(divFirst)
    let section__information__1 = document.querySelector("#section__information__1");
    section__information__1.innerHTML = "";
    section__information__1.append(div)
}