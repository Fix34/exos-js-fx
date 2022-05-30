// Exo 1 et 1-bis
// On selectionne l'élément + [0] car sinon ça renvoir un array et donc erreur + on défini count à 0
var footerClick = document.querySelector("footer");
count = 0
// On défini la fonction qui va agir lorsqu'on clique
var onFooterClick = function() {
    count += 1;
    console.log("click n°" + count);
};
// ON appelle la fonction qui va réagir à l'évènement "clique"
footerClick.addEventListener("click", onFooterClick);

// Exo 2
// On sélectionne le bouton à toggle
document.querySelector("button.navbar-toggler")
// On ajoute le event listener pour qui va agir sur le #navbar-header lorsqu'on clique qui va enlever/remettre avec toggle la classe collapse
.addEventListener("click", function() {
    document.querySelector("#navbarHeader")
    .classList.toggle("collapse");
});

// Exo 3
// On sélectionne la 1ere card (index 0) et le 2e bouton (index 1)
let cardRed = document.querySelectorAll(".card")[0]
let cardText = cardRed.querySelectorAll("button")[1]
// ON ajoute une fonction à l'event "click" qui change le style de la card sélectionnée en red lorqu'on clique sur le bouton [1]
cardText.addEventListener("click", function() {
    cardRed.style.color = "red";
});


// Exo 4
// Même chose, on sélectionne la 2e card et le bouton edit
let cardGreen = document.querySelectorAll(".card")[1]
let cardEdit = cardGreen.querySelectorAll("button")[1]
// On ajoute une fonction qui va changer le style de couleur à l'évent clique de green à rien (donc normal) et inversement avec else
cardEdit.addEventListener("click", function () {
    if (cardGreen.style.color === "green") {
        cardGreen.style.color = "";
    }
    else { 
        cardGreen.style.color = "green"; }
});


// Exo 5
// On sélectionne la navbar puis le lien boostrap
let navBar = document.querySelector(".navbar");
let link = document.styleSheets[0];
// On initialise le lien comme actif
link.disabled = false;
// On ajoute l'eventlistener double clique qui démarre la fonction "nostyle" qui désactive le lien boostrap
navBar.addEventListener("dblclick", (nostyle));

function nostyle() {
    if (document.styleSheets[0].value === "") {
        link.disabled = false;
    }
    else {
        link.disabled = true;
    }
};

//Exo 6
// ON sélectionne les card
let card = document.querySelectorAll(".card");
// Sur l'array de card obtenu on sélectionne le bouton, on y ajoute event mouseover auquel on applique notre fonction qui ajouter collapse au paragraphe et réduire la taille de l'image
card.forEach(function (card) {
    card.querySelector("button")
    // POURQUOI SI JE PRECISE L'INDEX DU BOUTON ÇA MARCHE PAS MAIS SANS PRECISER ÇA COMPREND DIRECT QUE C'EST LE BOUTON VIEW ET ÇA FONCTIONNE ????
    .addEventListener("mouseover", function () {
        card.querySelector("p")
        .classList.toggle("collapse");
        let img = card.querySelector("img");
        if (img.style.width === "20%" ) {
            img.style.width = "100%";
        }
        else {
            img.style.width = "20%";
        }
    });
});

//Exo 7
// On selectione le bouton gris
let arrow = document.querySelectorAll("section a")[1]
// On ajoute l'évent au clique qui va faire partir la fonction qui suit
.addEventListener("click", function () {
    // ON selectionne l'élément parent "row" et on met en place notre fonction qui insérer le dernier élément devant le premier élément
    let row = document.querySelector(".album .row")
    row.insertBefore( 
        row.lastElementChild,
            row.firstElementChild
        );
})

// Exo 8
//event.preventDefault()
document.querySelectorAll("section a")[0]
.addEventListener("click", function(event) {
    console.log("Sorry bro, preventdefault t'empêche d'activer ce lien !");
    event.preventDefault();
})

let arrow2 = document.querySelectorAll("section a")[0]
// On ajoute l'évent au clique qui va faire partir la fonction qui suit
.addEventListener("click", function () {
    // ON selectionne l'élément parent "row" et on met en place notre fonction qui insérer le dernier élément devant le premier élément
    let row = document.querySelector(".album .row")
    row.insertBefore( 
        row.firstElementChild,
            row.lastElementChild
        );
})

//Exo 9

// switch (...) { case 1:}
var logo = document.querySelector('.navbar-brand strong')
.addEventListener("keypress", function (events) {
    let body  = document.body
    switch (events.key) {
        case "a":
        classList.body = ""
        classList.body.add("col-4");
        break;
        case "y":
        classList.body = ""
        classList.body.add("col-4" + "offset-md-4");
        break;
        case "a":
        classList.body = ""
        classList.body.add("col-4" + "offset-md-8");
        break;
        case "b":
        classList.body = ""
        classList.body.add("col-sm-4" + "offset-md-1" + "py-4");
        break;
    }
})

// ça marche pô....