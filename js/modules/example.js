export const getAllRockets = async ()=>{
    let res = await fetch("https://api.spacexdata.com/v4/rockets")
    let data = await res.json();
    // console.log(data);
    return data;
}

export const getAllRocketsById = async ()=>{
    let res = await fetch(`https://api.spacexdata.com/v4/rockets/${id}`)
    let data = await res.json();
    // console.log(data);
    return data;
}


export const getRocketMassTotal = async() =>{
    let config = {
        headers:{
            "content-type": "aplication/json"
        },
        method:"POST",
        body: JSON.stringify({
            "options":{
                "select": {
                    "name": 1,
                    "mass": 1
                },
                "sort": {
                    "mass.kg": "desc"
                },
                
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{mass} = maxMassRocket ]} = await res.json();
    return mass
}

export const getRocketPayloadWeightsTotal = async ()=>{
    let config = {
        headers:{
            "content-type": "aplication/json"
        },
        method: "POST",
        body: JSON.stringify({

            "options": {
                "select": {
                    "name": 1,
                    "payload_weights": 1
                },
                "sort":{
                    "payload_weights.kg": "desc"
                }
            }
        })
    }
    let res = await fetch ("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs} = await res.json();
    let data = []
    docs.forEach(val => data.push(...val.payload_weights))
    docs.sort((a,b) => b.kg - a.kg)
    let maxPayloadWeightsRocket = data;
    return maxPayloadWeightsRocket;

}

export const getRocketHeightTotal = async () => {
    let config = {
        headers:{
            "content-type": "aplication/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options":{
                "select": {
                    "height": 1
                },
                "sort":{ 
                "height.meters": "desc"

                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs:[{height} = maxHeightRocket]} = await res.json();
    return height
}

export const getRocketDiameterTotal = async ()=>{
    let config =  {
        headers: {
            "content-type" : "aplication/json"
        },
        method: "POST",
        body: JSON.stringify({
            "options" :{
                "select":{
                    "diameter" : 1
                },
                "sort" : {
                    "diameter.meters" : "desc"
                }
            }
        })
    }
    let res = await fetch("https://api.spacexdata.com/v4/rockets/query", config);
    let {docs: [{diameter} = maxDiameterRocket]} = await res.json();
    return diameter
}

export const getRocketSecondStageCompositeFairingDiameterTotal = async ()=> {
    let config = {
        headers: {
            "content-type": "aplication/json"
        }
    }
}