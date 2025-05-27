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
    let keywords = ['steve']; // Mots-clés à rechercher
    if (keywords.some(keyword => q2.includes(keyword))) {
        score += 4;
    }

    let q3 = document.querySelector('#color').value.toLowerCase();
    let keywords2 = ['orange']; // Mots-clés à rechercher


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



    // ... le reste du code de calcul du score ...

// Affichage du score
document.getElementById("resultat").textContent = `Votre score est de ${score} sur 36 !`;



}