const superheroes = [
    {
        'id':1,
        'name': 'Iron Man',
        'superPower': 'SuperSuit',
        'strength': 80,
    },
    {
        'id':2,
        'name': 'The Hulk',
        'superPower': 'Super Strength',
        'strength': 90,
    },
    {
        'id':3,
        'name': 'Captain America',
        'superPower': 'Super Endurance',
        'strength': 50,
    },
    {
        'id':4,
        'name': 'Thor',
        'superPower': 'Odins blessing',
        'strength': 99,
    }
]



const superHeroeSelector = new Promise((resolve, reject) =>{
    const superHeroIndex = 5;
    if(superheroes.find(({id})=>id === superHeroIndex)){
        const {name: name, strength: strength} = superheroes.find(({id})=>id === superHeroIndex)
        resolve(`The name of the superho chosen is ${name} and his strength is ${strength}`);
    } else {
        reject("The superheroe could not be found..")
    }
})


superHeroeSelector.then( (result) =>{
    console.log(result)
}
)
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("The query was completed!.")
})

