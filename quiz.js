function SubmitQuiz()
{
    let score = 0 ;
    let val = document.getElementsByName("greenit_def")[0] ;
    console.log(val);

    let q1 = document.querySelector('input[name="greenit_def"]:checked');
    if (q1 && q1.value === "def1") {
        score += 4;
    }

    let q2 = document.querySelector('input[name="greenit_obj"]:checked');
    if (q2 && q2.value === "obj1") {
        score += 4;
    }

    let q3 = document.querySelector('#exemple').value.toLowerCase();
    let keywords = ['recyclage', 'énergie', 'reduction', 'écologique']; // Mots-clés à rechercher


    if (keywords.some(keyword => q3.includes(keyword))) {
        score += 10;
    }

    
    essai ++ ;

    let table = document.getElementById('result').getElementsByTagName('tbody')[0];
    let row = table.insertRow();
    row.insertCell(0).textContent = 'Essai';
    row.insertCell(1).textContent = essai; 
    row.insertCell(2).textContent = score; 

    // Afficher le score dans une alerte
    alert("Votre score est : " + score);

}