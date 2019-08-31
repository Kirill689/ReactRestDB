
export default class SwApiService {

_baseSwApiURL = `https://swapi.co/api`;

async getResource (url){

    const response = await fetch (`${this._baseSwApiURL}${url}`);
    if(!response.ok){
        throw new Error(`Cant get responce from ${url} ` + response.status)
    }
    return await response.json();
};




async getAllPeople(){
    const persons = await this.getResource(`/people/`);
    return persons.results.map(this._transformPersonData);
};


async getPerson(id){
    const person = await this.getResource(`/people/${id}/`);
    return  this._transformPersonData(person);
};


async getAllPlanets(){
    const planets = await this.getResource(`/planets/`);
    return planets.results.map(this._transformPlanetData);
}


async getPlanet(id){
    const planet = await this.getResource(`/planets/${id}/`);
    return this._transformPlanetData(planet);
}


async getAllStarships(){
    const starships = await this.getResource(`/starships/`);
    return starships.results.map(this._transformStarshipData);
}


async getStarship(id){
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarshipData(starship);
}





_idExtractor(elem){
    const idExtractorRegExp =/\/([0-9]+)*\/$/;
    console.log(elem.url.match(idExtractorRegExp)[1])
    return elem.url.match(idExtractorRegExp)[1];
}

_transformPlanetData(elem){
    return  {
        id: this._idExtractor(elem),
        name:elem.name,
        population: elem.population,
        rotationPer:elem.rotation_period,
        diameter:elem.diameter,
            } 
}

_transformStarshipData(elem){
    return {
        id: this._idExtractor(elem),
        name: elem.name,
        model:elem.model,
        manufacturer:elem.manufacturer,
        costInCredits:elem.costInCredits,
        length:elem.length,
        crew:elem.crew,
        passengers:elem.passengers,
        cargoCapacity:elem.cargoCapacity 
    }
}

_transformPersonData(elem){
    return{
        id:this._idExtractor(elem),
        name:elem.name,
        gender:elem.gender,
        birthYear:elem.birthYear,
        eyeColor:elem.eyeColor
    }
}


};


