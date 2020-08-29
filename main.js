window.addEventListener('load', main);

function main(){
    let holder = document.getElementById('holder');
    holder.style.border = '2px solid black';
    holder.style.minHeight = '250px'; 

    let naslov = document.createElement('h1');
    naslov.style.color = 'blue';
    naslov.style.borderBottom = '1px solid blue';
    naslov.innerText = 'Upravljanje dokumentom';
    holder.appendChild(naslov); 

    let paragraf1 = document.createElement('p');
    paragraf1.style.textAlign = 'center';
    paragraf1.innerHTML = 'Ovo je <u>prvi</u> paragraf';
    holder.appendChild(paragraf1);

    let paragraf2 = document.createElement('p');
    paragraf2.style.textAlign = 'center';
    paragraf2.innerHTML = 'Ovo je <u>drugi</u> paragraf';
    holder.appendChild(paragraf2);

    let paragraf3 = document.createElement('p');
    paragraf3.style.textAlign = 'center';
    paragraf3.innerHTML = 'Ovo je <u>treci</u> paragraf';
    holder.appendChild(paragraf3);

    let dugme = document.createElement('button');
    dugme.innerText = 'Izvrsi funkciju';
    dugme.addEventListener('click', dugmeClick);
    holder.appendChild(dugme);

    let remove = document.createElement('button');
    remove.innerText = 'Obrisi';
    remove.addEventListener('click', dugmeRemove);
    holder.appendChild(remove);
}

function dugmeClick(){
    /*let holder = document.getElementById('holder');
    let paragrafi = holder.querySelectorAll('p');
    let drugiParagraf = paragrafi[1];
    drugiParagraf.style.color = 'red';*/

    document.querySelectorAll('#holder > p')[1].style.color = 'red';
}

function dugmeRemove(){
    let holder = document.getElementById('holder');
    let paragrafi = holder.querySelectorAll('p');

    for (let paragraf of paragrafi) {  
       holder.removeChild(paragraf); 
    }
}
