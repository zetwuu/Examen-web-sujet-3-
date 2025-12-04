const reponses = document.querySelector('#juste');
reponses.addEventListener('click', () => {
    reponses.textContent = 'Bravo !'

});

var resultat = localStorage.getItem('counter') | 0 ;
document.querySelector('#juste');
reponses.addEventListener('click', () => {
    resultat++
    localStorage.setItem('counter',resultat)
    console.log(resultat)

});
 

function deleteItems() {
    localStorage.clear();
}

const results = document.querySelector('#result');
results.addEventListener('click', () => {
    results.textContent = resultat

});
