

function hasilJawaban() {
    let pertanyaan1 = document.getElementById('pilihan1').value;
    let pertanyaan2 = document.getElementById('pilihan2').value;
    let pertanyaan3 = document.getElementById('pilihan3').value;
    let pertanyaan4 = document.getElementById('pilihan4').value;
    let pertanyaan5 = document.getElementById('pilihan5').value;
    let score = 0 
    
    if(pertanyaan1 === "Brendan Eich") {
        score +=20
    }
    
    else if (pertanyaan2 === "Thom Yorke") {
        score +=20
    }
    
    else if (pertanyaan3 === "Parasite") {
        score +=20
    }
    
    else if (pertanyaan4 === "Bong Joon Ho") {
        score +=20
    }
    
    else if (pertanyaan5 === "Math Rock") {
        score +=20
    }
    
    
    let jumlahScore = document.getElementById('hasil');
    jumlahScore = (score/100)*100;
    jumlahScore.innerHTML = jumlahScore
}

