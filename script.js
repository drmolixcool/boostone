const random_string_list = [
    "désolé mais tu es éliminé",
    "tu dois piocher 4 cartes",
    "la personne de ton choix pioche 4 cartes",
    "la personne qui A JOUÉ avant toi pioche 4 cartes",
    "la personne SITUÉ AVANT TOI (DANS LE SENS DU JEU) pioche 4 cartes",
    "élimine un joueur de ton choix, ce dernier donnera ses cartes au joueur de son choix (sauf toi)",
    "élimine un joueur de ton choix, cependant tu récupéreras ses cartes",
    "tu pioches autant de cartes que le symbole indiqué par la dernière carte posée (autres cartes = 0 sauf carte +2 -> 2 et carte +4 -> 4",
    "tu rejoues",
    "tu peux échanger ton jeu avec le joueur de ton choix",
    "chaque joueur passe une carte à son voisin (dans le sens du jeu)",
    "chaque joueur passe son jeu à son voisin (dans le sens du jeu)",
    "tu devras payer un boisson chaude au distributeur au gagnant de la partie",
    "Les cartes +4 qui te vise se retourne contre l'envoyeur durant cette partie",
    "Tu peux choisir n'importe quelle couleur parmi les 4 (loi Amandine non appliqué)",
    "Mélange des cartes de tous les joueurs et redistribution (carte de la République)",
    "Si un ou plusieurs joueur n'ont plus qu'une seule carte, ceux-ci doivent piocher 3 cartes",
    "C'est ton jour de bonté ! : tu dois donner une carte de ton jeu à un autre joueur",
    "Appuie une deuxième fois sur le bouton",
    "Appuie une deuxième fois sur le bouton",
    "Appuie une deuxième fois sur le bouton",
    "Appuie une deuxième fois sur le bouton",
    "Appuie une deuxième fois sur le bouton"
]

window.addEventListener('load', function () {

    let button = document.getElementById('generate_button')

    let prec_random_string = ""
    
    let random_number = -1
    let random_string = ""

    button.addEventListener('click', function () {
        do {
            random_number = Math.floor(Math.random()*random_string_list.length)
            random_string = random_string_list[random_number]
        } while (random_string === prec_random_string)
        document.getElementById('generated_text').value = random_string
        prec_random_string = random_string

        button.classList.add("clicked")
        setTimeout(() => button.classList.remove("clicked"), 100)
    })
})