let essai = 0 ;

function SubmitQuiz()
{
    let score = 0 ;
    let val = document.getElementsByName("greenit_def")[0] ;
    console.log(val);

    let q1 = document.querySelector('input[name="especes"]:checked');
    if (q1 && q1.value === "def1") {
        score += 4;
    }

    let q2 = document.querySelector('#nom').value.toLowerCase();
    let keywords = ['steve'];
    if (keywords.some(keyword => q2.includes(keyword))) {
        score += 4;
    }

    let q3 = document.querySelector('#color').value.toLowerCase();
    let keywords2 = ['orange'];


    if (keywords2.some(keyword => q3.includes(keyword))) {
        score += 4;
    }

    let q4 = document.querySelector('input[name="nb"]:checked');
    if (q4 && q4.value === "def3") {
        score += 4;
    }

    let q5 = document.querySelector('input[name="cara"]:checked');
    if (q5 && q5.value === "def3") {
        score += 4;
    }

    let q6 = document.querySelector('input[name="douce"]:checked');
    if (q6 && q6.value === "def2") {
        score += 4;
    }

    let q7 = document.querySelector('input[name="sf"]:checked');
    if (q7 && q7.value === "def3") {
        score += 4;
    }

    let q8 = document.querySelector('input[name="mort"]:checked');
    if (q8 && q8.value === "def3") {
        score += 4;
    }

    let q9 = document.querySelector('input[name="cetaces"]:checked');
    if (q9 && q9.value === "def2") {
        score += 4;
    }


    if (score < 13)
    {
        var message = "Presque... Peut-être devrais tu rejeter un oeil à la page d'informations ?" ;
    }

    if (score >= 13 && score <18)
    {
        var message = "Pas mal ! Tu pourrais jeter un oeil à la page d'informations pour t'améliorer !" ;
    }

    if (score >=18 && score <30)
    {
        var message = "Génial ! Jette un oeil aux informations pour progresser encore plus !" ;
    }

    if (score >=30 &&  score != 36) 
    {
        var message = "In-croy-able !" ;
    }

    if (score == 36) 
    {
        var message = "Le sauveur des océans est arrivé !" ;
    }


document.getElementById("resultat").textContent = `Ton score est de ${score} sur 36 ! ${message}`;



}