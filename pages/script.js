

// CONTROLLO ORARI APERTURA

const statoOrario = document.getElementById("stato-orario");

if (statoOrario) {

    const oggi = new Date();

    const giorno = oggi.getDay(); // 0 domenica - 6 sabato
    const ora = oggi.getHours();
    const minuti = oggi.getMinutes();

    const tempo = ora * 60 + minuti; // converte l'orario in minuti

    let aperto = false;


    switch (giorno) {

        case 1: // Lunedì
            aperto = false;
            break;


        case 2: // Martedì
        case 3: // Mercoledì
        case 4: // Giovedì
        case 5: // Venerdì

            // 08:30 - 12:30
            // 14:30 - 19:30

            if (
                (tempo >= 510 && tempo <= 750) ||
                (tempo >= 870 && tempo <= 1170)
            ) {
                aperto = true;
            }

            break;


        case 6: // Sabato

            // 08:00 - 18:00

            if (tempo >= 480 && tempo <= 1080) {
                aperto = true;
            }

            break;


        case 0: // Domenica
            aperto = false;
            break;
    }


    if (aperto) {
        statoOrario.innerHTML = "🟢 Aperto ora";
        statoOrario.style.color = "#2ecc71";
    } else {
        statoOrario.innerHTML = "🔴 Chiuso ora";
        statoOrario.style.color = "#e74c3c";
    }

}