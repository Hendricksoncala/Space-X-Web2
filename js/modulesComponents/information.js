import { 
    getAllLaunchesId
} from "../modules/launches.js";
import { getAllRocketsId } from "../modules/rockets.js";

export const infoName = async(name)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/rocket.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "name"
    let small = document.createElement('small');
    small.textContent = name
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}
export const infoImg = async(imagen)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.marginTop = "4px";
    div.style.justifyContent = "center";
    let imgFist = document.createElement("img");
    imgFist.src = imagen;
    imgFist.style.width = "100%";
    imgFist.style.height = "100%";
    imgFist.style.borderRadius = "2px";
    imgFist.style.boxShadow = "#298BFE 0px 0px 6px 4px";
    div.append(imgFist);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}


export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}




//===================================================
export const informationTypeCapsule = async(type)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Type of capsule"
    let small = document.createElement('small');
    small.textContent = type
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.innerHTML="";
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationStatusCapsule = async(status)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Status of the capsule"
    let small = document.createElement('small');
    small.textContent = status
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationIdCapsule = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "id of the capsule"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationLastUpdateCapsule = async(last_update)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Last update of the capsule"
    let small = document.createElement('small');
    small.textContent = last_update
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const informationlaunchesCapsule = async(info)=>{
    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = "";

    for(let i=0; i<info.length; i++){
        let launches = await getAllLaunchesId(info[i])
        console.log(launches);

        let div = document.createElement('div');
        div.classList.add('description__container')
        let divFirst = document.createElement('div');
        let img = document.createElement('img');
        img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
        divFirst.append(img);
        
        let divLast = document.createElement('div');
        let h3 = document.createElement('h3');
        h3.textContent = "Launch"
        let small = document.createElement('small');
        small.textContent = info[i]
        if(launches.links.flickr.original[0]){
            let img2 = document.createElement('img');
            img2.setAttribute("src", `${launches.links.flickr.original[0]}`)
            img2.style.width = "100%";
            img2.style.marginTop = "10px";
            img2.style.borderRadius = "2px";
            img2.style.boxShadow = "#298BFE 0px 0px 6px 4px";
            divLast.append(h3, small, img2);
        } else {
            divLast.append(h3, small);
        }
        div.append(divFirst, divLast);

        information__2.append(div)
    }
    

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}


//===================================================

export const imformationLaunchesImg = async(imagen)=>{
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    if(imagen){
        let div = document.createElement('div');
        div.classList.add('description__container')
        div.style.marginTop = "4px";
        div.style.justifyContent = "center";
        let imgFist = document.createElement("img");
        imgFist.src = imagen;
        imgFist.style.width = "100%";
        imgFist.style.height = "200px";
        imgFist.style.borderRadius = "2px";
        imgFist.style.boxShadow = "#298BFE 0px 0px 6px 4px";
        div.append(imgFist);

        description__item.append(div)
    }
}

export const informationDetailsLaunches = async(details)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    div.style.scale = "1.2";
    div.style.marginTop = "40px";
    div.style.width = "70%";
    div.style.height = "40%";
    div.style.overflowY = "auto";
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Details of the launch"
    let small = document.createElement('small');
    small.textContent = details
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = "";
    section__information__1.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}

export const imformationSuccessLaunch = async(success)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Success of the launch"
    let small = document.createElement('small');
    small.textContent = success
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}

export const informationWikiLaunc = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the launch"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationVideoLaunc = async(link)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Video about the launch"
    let a = document.createElement('a');
    a.setAttribute("href", link)
    a.setAttribute("target", "_blank")
    a.textContent = "youtube"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const informationArticleLaunc = async(link)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch article"
    let a = document.createElement('a');
    a.setAttribute("href", link)
    a.setAttribute("target", "_blank")
    a.textContent = "link"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)
}

export const imformationIdLaunch = async(id)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "/storage/img/icons/iconos/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Launch ID"
    let small = document.createElement('small');
    small.textContent = id
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

}
