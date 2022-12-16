console.log("Start");
var sg;
const apidog = 'http://api.thedogapi.com/v1';

const fetchDoggoBreeds = async() => {
    /*const data = fetch('http://api.thedogapi.com/v1/breeds')
    .then(data => data.json())
    .then(doggos => console.log(doggos))
    .catch(e => console.error(e));*/
    const response = await fetch(apidog + '/breeds');
    const dogBreeds = await response.json();
    sg = dogBreeds;
    
   
    populateDoggoSelect(dogBreeds);
}



const populateDoggoSelect = (breeds) => {
    
    const select = document.querySelector('.breed-select');
    const breedOptions = breeds.map(breed => {
        const option = document.createElement('option');
        option.text = breed.name;
        option.value = breed.id;
        return option;
    })
   
    breedOptions.forEach(breedOption => {
        select.appendChild(breedOption);
    })



}

const fillDoggoImage = (imageUrl) => {
    document.querySelector('#doggo-image').setAttribute('src', imageUrl);
}

const createDescriptionEntry = ({label, value}) => {
    const descriptionTerm = document.createElement('dt');
    descriptionTerm.textContent = label;
    const descriptionValue =document.createElement('dd');
    descriptionValue.textContent = value;
    const parentElement =document.querySelector('#doggo-description');
    parentElement.appendChild(descriptionTerm);
    parentElement.appendChild(descriptionValue);

}

const clearDoggoDescription = () => {
    const descriptionElement = document.querySelector('#doggo-description')

    while(descriptionElement.firstChild) {
        descriptionElement.removeChild(descriptionElement.firstChild);
    }
}

const fillDoggoDescription = ({bred_for: bredFor,bred_group: bredGroup,name,temperament,life_span: lifeSpan,origin,height,weight}) => {
    clearDoggoDescription();
    createDescriptionEntry({
        label: 'Name',
        value: name
    })

    createDescriptionEntry({
        label: 'Bred For',
        value: bredFor
    })

    createDescriptionEntry({
        label: 'Bred Group',
        value: bredGroup
    })

    createDescriptionEntry({
        label: 'Temperament',
        value: temperament
    })

    createDescriptionEntry({
        label: 'Life Span',
        value: lifeSpan
    })

    createDescriptionEntry({
        label: 'Origin',
        value: origin
    })

    createDescriptionEntry({
        label: 'Height cm',
        value: height.metric
    })

    createDescriptionEntry({
        label: 'Weight kg',
        value: weight.metric
    })
}

const getDogByBreed = async(breedId) => {
    const [ data ] = await fetch(apidog + '/images/search?include_breed=1&breed_id=' + breedId).then((data) => data.json())
    const {url: imageUrl,breeds} = data;
    fillDoggoImage(imageUrl);
    console.log("url:" + imageUrl);
   
    console.log(sg[breedId-1]);
    fillDoggoDescription(sg[breedId-1]);
}

const changeDoggo = () => {
    console.log(event.target.value);
    getDogByBreed(event.target.value);
}

fetchDoggoBreeds();