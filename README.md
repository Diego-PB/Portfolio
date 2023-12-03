# Readme

Ce site est mon E-Portfolio.
Il presente mon profil, mes compétences, mes projets.

## Lien

[Site v1 / Render / ...](https://diegopenicaudbernal-website.onrender.com/)

[Site v2 / GitHub / travail en cours](https://diego-pb.github.io/Portfolio/)


## Pages

Le site est composé de plusieurs pages :  
*Les coches représentent si les pages sont terminées ou non*

- [x] Acceuil | *contenu a faire*
- [x] Notes
- [ ] Projets
- [ ] A Propos
- [ ] Contact

### Css

Ce bout de code represente le ```:root``` present dans chaque fichier.css

```css
/* Debut */
/* 2/12/2023 [16:21] */

/* 'Sometype Mono', monospace */
@import url('https://fonts.googleapis.com/css2?family=Sometype+Mono&display=swap');
/* 'Gabarito', sans-serif */
@import url('https://fonts.googleapis.com/css2?family=Gabarito&display=swap');
/* 'Roboto Serif', serif */
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Serif:opsz@8..144&display=swap');

:root {
    /* Color */
    --color_background_main: #121F40;
    --color_font_main: #fff;
    --color_current_page: rgba(217, 217, 217, 0.3);
    --color_background_nav_scroll: rgba(80, 93, 124, 0.9);

    /* Font */
    --font_family_main: 'Sometype Mono', monospace;
    --font_family_title: 'Gabarito', sans-serif;

    --font_size_main: 20px;
    --font_size_title: 9.6em;

    /* Border */
    --border_radius_main: 15px;

    /* notes.html */
    --color_background_note: rgba(55, 77, 135, 0.7);
    --color_background_note_hover: rgba(62, 94, 180, 0.7);
    --color_background_cercle: rgb(127, 144, 187);
    --color_font_titre_note: hsl(216.7, 100%, 73.7%);

    --font_size_title_note: 25px;
    --font_size_descr_note: 17px;

    --font_family_descr_note: 'Roboto Serif', serif;

    --cercle_note_dim: 90px;
}

/* Fin */
```
### Javascript

Ce script permet l'ajout de couleur au background du menu situé dans le ```<nav>``` lorque l'on descend dans la page

```javascipt
<script> /* Script js permettant d'ajouter un background-color au menu dans le nav lorsque on descend dans la page */
  window.addEventListener('scroll', function () { /* execute le script en fondtion du scroll */
    var navbar = document.querySelector('nav ul'); /* selectionne le menu */

    if (window.scrollY <= 100) { /* si le scroll descend de 1px */
      navbar.classList.remove('scrolled'); /* retire le bg */
    } else {

      navbar.classList.add('scrolled'); /* ajoute le bg */
    }
  });
</script>
```