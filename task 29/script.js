function makeRequst2(url) {
    return fetch(url).then(res => res.json());
}

let dogsArr;
makeRequst2('https://dog.ceo/api/breeds/list/all').then(response => {
    dogsArr = getArrFromObj(response.message);
    createList(dogsArr);
})
 
function getArrFromObj(obj){
    const arr = Object.entries(obj)
    return arr;
}

function createList(dogs) {
	const fragment = document.createDocumentFragment();
	const li = document.createElement('li');


        dogs.forEach(dog => {
            const clone = li.cloneNode();

            clone.innerText = dog[0];
            fragment.appendChild(clone);
            clickHandler(clone, dog[0])
        });

 	const ul = document.getElementsByTagName('ul')[0];
 	ul.appendChild(fragment);
}

const breedName = document.querySelector('#breedNameTitle');
const select = document.querySelector('#breeds');
const images = document.querySelector('#carousel');
select.onchange = () => {
    if(select.value){
        if(images.classList[1]){
            images.classList.toggle('d-none');
        };
        makeRequst2(`https://dog.ceo/api/breed/${breedName.innerText}/${select.value}/images/random/10`)
        .then(response => generateImage(response.message));
   ;
        
        
    }
    else if(!images.classList[1]){
        images.classList.toggle('d-none');
    }
};

const searchBtn = document.querySelector('.searchBtn');
const searchInput = document.querySelector('.searchInput');
const container = document.querySelector('.container-1');

function clickHandler(li, name) {

    function breedVerification(event, value = null){

        const targetName = event.target.innerText;

        if(!select.className){
        select.classList.toggle('d-none');
        };
        if(!images.classList[1]){
            images.classList.toggle('d-none');
        }

        dogsArr.forEach(elem =>{
            if(targetName === elem[0].toString() || value === elem[0].toString() ){

                if(elem[1].length !== 0){
                    select.innerHTML='<option value="">Выберите разновидность породы</option>';

                    elem[1].forEach(breed => {
                        let option = new Option(breed, breed);
                        select.append(option);
                    })

                    if(select.className){
                        select.classList.toggle('d-none');
                    };

                }else{

                    if(images.classList[1]){
                        images.classList.toggle('d-none');
                    };
                    makeRequst2(`https://dog.ceo/api/breed/${name}/images/random/10`)
                    .then(response => generateImage(response.message));
                }
            }
        })
        if(value){
            breedName.innerText = value;
        }else{
            breedName.innerText = name;
        }
    };

    function inputVerification(e){
        let value = searchInput.value;
            dogsArr.forEach(elem =>{
                if(value === elem[0].toString()){
                    breedVerification(e, value);
                }
            })
    }

    li.onclick = breedVerification;
    searchBtn.onclick = inputVerification;

}


const ul = document.querySelector('.images');
function generateImage(src){
    document.querySelectorAll('#images img').forEach(e => e.parentNode.removeChild(e));
  
  
    const fragment = document.createDocumentFragment();
    ul.innerHTML = '';
    const li = document.createElement('li');
    const img = document.createElement('img');

    src.forEach(elem =>{
        const cloneImg = img.cloneNode();
        const cloneLi = li.cloneNode();
  
            cloneImg.src = elem;
  
            cloneLi.insertBefore(cloneImg, cloneLi.firstChild);
            fragment.appendChild(cloneLi);
            
    })
  
  ul.appendChild(fragment);
}

/*SLIDER*/
/* этот код помечает картинки, для удобства разработки */
let i = 1;
for(let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 130; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function() {
  // сдвиг влево
  position += width * count;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function() {
  // сдвиг вправо
  position -= width * count;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};