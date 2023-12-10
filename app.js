/* Script js permettant d'ajouter un background-color au menu dans le nav lorsque on descend dans la page */
window.addEventListener('scroll', function () { /* execute le script en fondtion du scroll */
    var navbar = document.querySelector('nav ul'); /* selectionne le menu */

    if (window.scrollY <= 100) { /* si le scroll descend de 1px */
        navbar.classList.remove('scrolled'); /* retire le bg */
    } else {

        navbar.classList.add('scrolled'); /* ajoute le bg */
    }
});

document.addEventListener("DOMContentLoaded", function () {// Attacher un événement à l'élément du DOM avec la classe "liste_note" lorsque le DOM est complètement chargé
    var liElements = document.querySelectorAll('.liste_note .note, .liste_projet li');// Récupérer tous les éléments li avec la classe "note" et les stocker dans la variable "liElements"
    liElements.forEach(function (li) {// Parcourir chaque élément li et attacher un événement 'click'
        li.addEventListener('click', function (event) {// Fonction à exécuter lorsque l'élément li est cliqué
            var activeURL = li.getAttribute('activeURL');// Récupérer l'attribut 'activeURL' de l'élément li

            if (activeURL) {
                window.open(activeURL, '_blank');// Si 'activeURL' est défini, ouvrir le lien dans une nouvelle fenêtre
            }
            event.preventDefault();// Empêcher la navigation normale du lien
            return false;// Retourner false pour arrêter l'exécution de l'événement
        });
    });
});
