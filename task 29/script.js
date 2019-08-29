function makeRequst2(url) {
    return fetch(url).then(res => res.json());
}

makeRequst2('https://dog.ceo/api/breeds/list/all').then(response => {
  let dogsArr = getArrFromObj(response.message);
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
            clickHandler(clone, dog[0], dogs)
        });

 	const ul = document.getElementsByTagName('ul')[0];
 	ul.appendChild(fragment);
}

function clickHandler(li, name, dogsArr) {
    const select = document.querySelector('#breeds');
    const images = document.querySelector('#carousel');
    
    li.onclick = event =>{

        const targetName = event.target.innerText;

        if(!select.className){
        select.classList.toggle('d-none');
        };
        if(!images.classList[1]){
            images.classList.toggle('d-none');
        }

        dogsArr.forEach(elem =>{
            if(targetName === elem[0].toString()){

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

        select.onchange = () => {
            const breedName = document.querySelector('#breedNameTitle');
            if(select.value){
                if(images.classList[1]){
                    images.classList.toggle('d-none');
                };
                makeRequst2(`https://dog.ceo/api/breed/${breedName.innerText}/${select.value}/images/random/10`)
                .then(response => generateImage(response.message)); 

            }
            else if(!images.classList[1]){
                images.classList.toggle('d-none');
            }
        };

        document.querySelector('#breedNameTitle').innerText = name;
    };
}




function generateImage(src){
    const ul = document.querySelector('.images');
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


document.querySelector('.searchBtn').onclick = () => {
    const breedUl = document.querySelector('.breedList')
    const searchValue = document.querySelector('.searchInput').value.toLowerCase();
    const breedLi = breedUl.getElementsByTagName('li');
    for(let i = 0; i < breedLi.length; i++){
        breedLi[i].classList.add('d-none');

        if(breedLi[i].innerText.includes(searchValue)){
           breedLi[i].classList.toggle('d-none');
        }
        
    }
}


/*SLIDER*/

(function(){
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
}());