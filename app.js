const form = document.querySelector('.form-quiz')
let tableauResultat = []
const res = ['c','b','a','d','c','d']
const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');
const partie =  document.querySelector('.partie');
const etape = document.querySelector('.etape')
let verifTableau = [];

form.addEventListener('submit', (e) => {
    e.preventDefault() // De prevenir le comportement par default


    for(let i = 1; i < 7;i++){
        tableauResultat.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    verifFun(tableauResultat);
   
    tableauResultat = [];
});

function verifFun(TabResultats){

    for(let a = 0; a < 6; a++){

        if(TabResultats[a] === res[a]){
            verifTableau.push(true);
        }else{
            verifTableau.push(false);
        }
    }
    afficherResultats(verifTableau)
    couleurFunction(verifTableau);
    verifTableau = [];

}

function afficherResultats(tabCheck){
    const nbFaute =tabCheck.filter(el => el !== true).length;
    
    // if(nbFaute == 0){
    //     titreResultat.textContent = 'Bravo c est un sans faute';
    //     aideResultat.textContent = '';
    //     noteResultat.textContent = '10/10';
         
    // }

    switch(nbFaute){
        case 0: 
            titreResultat.textContent = 'Bravo, vous etes Fort ';
            aideResultat.textContent = '';
            noteResultat.textContent = '12/12';
             break;
        case 1: 
            titreResultat.textContent = 'vous y etes presque ';
            aideResultat.textContent = 'Retentez une autre reponse dans la case rouge, puis re-validez ';
            noteResultat.textContent = '10/12';
             break;
        case 2: 
            titreResultat.textContent = 'Encore un effort ... .';
            aideResultat.textContent = 'Retentez une autre reponse dans la case rouge, puis re-validez ';
            noteResultat.textContent = '8/12';
             break;
        case 3: 
            titreResultat.textContent = 'Peux mieux faire ! .';
            aideResultat.textContent = 'Retentez une autre reponse dans la case rouge, puis re-validez ';
            noteResultat.textContent = '6/12';
             break;
        case 4: 
            titreResultat.textContent = 'Peux mieux faire .';
            aideResultat.textContent = 'Retentez une autre reponse dans la case rouge, puis re-validez ';
            noteResultat.textContent = '4/12';
             break;
        case 5:
            titreResultat.textContent = 'Oups vous est null';
            aideResultat.textContent = 'Retentez une autre reponse dans la case rouge, puis-revalidez';
            noteResultat.textContent = '2/12';
            break;
        case 6:
            titreResultat.textContent = 'Oups vous est null';
            aideResultat.textContent = 'Retentez une autre reponse dans la case rouge, puis-revalidez';
            noteResultat.textContent = '0/10';
            break;
        default:
            "oups cas imprevue "

     }
}

function couleurFunction(tabQuestion){
    
    for(let i = 0; i< tabQuestion.length; i++){
        if(tabQuestion[i] === true){
            toutesLesQuestions[i].style.background = 'lightgreen';
        }
        else{
            toutesLesQuestions[i].style.background = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echec');
            setTimeout(() =>{
                toutesLesQuestions[i].classList.remove('echec')
            }, 500)
        }  
    }
}
toutesLesQuestions.forEach(item => {
    item.addEventListener('click', ()=>{
        item.style.background = 'white';
    })
})

partie.textContent = 1

