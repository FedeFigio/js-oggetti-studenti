// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo
// for - in tutte le proprietà dell 'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’ utente, attraverso 3 prompt(),
// di aggiungere un nuovo oggetto studente
// inserendo nell’ ordine: nome, cognome e età.



$(document).ready(function() {

    $("#add").click(function(e) {
        insertStudent()
        cycle()
    });
});

// Creare un array di oggetti di studenti.
var students = []

// Creare un oggetto che descriva uno studente,
// con le seguenti proprietà: nome, cognome e età.
// attraverso form, aggiungere un nuovo oggetto studente all array 
function insertStudent() {
    var nome = $("#nome").val()
    var cognome = $("#cognome").val()
    var eta = $("#eta").val()

    var student = {
        nome: nome,
        cognome: cognome,
        eta: eta
    }
    students.push(student)
}

function cycle() {
    // Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
    $("#output").html("")
    for (let i = 0; i < students.length; i++) {

        // Stampare a schermo attraverso un ciclo
        // for - in tutte le proprietà dell 'oggetto.
        $("#output").append("<p>" + "studente numero: " + i + "</p>");
        for (const key in students[i]) {

            $("#output").append("<div>" + key + " : " + students[i][key] + "</div>");
            console.log(key);
        }
    }
}