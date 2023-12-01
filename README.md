# Readme

Ce site est mon E-Portfolio.
Il presente mon profil, mes compétences, mes projets.

## Pages

Le site est composé de plusieurs pages :  
*Les coches représentent si les pages sont terminées ou non*

- [ ] Acceuil
- [ ] Notes
- [ ] Projets
- [ ] A Propos
- [ ] Contact

## Root

Ce bout de code represente le ```:root``` present dans chaque fichier.css

```css
/* 30/11/2023 [20:52] */
@import url('https://fonts.googleapis.com/css2?family=Sometype+Mono&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gabarito&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Serif:opsz@8..144&display=swap');

:root {
    /* Couleur */
    --main_color_background: #121F40;
    --main_color_text: #fff;
    --current_page_nav: rgba(217, 217, 217, 0.3);

    /* Police */
    --main_font: 'Sometype Mono', monospace;
    --title_font: 'Gabarito', sans-serif;

    
    --main_font_size: 20px;
    --title_font_size: 10vw;
    
    /* Page - Note */
    --note_titre_font: 25px;

    --note_descr_font_size: 17px;
    --note_descr_font_family: 'Roboto Serif', serif;

    /* Border */
    --main_border_radius: 15px;
}
```

```css
/* 1/12/2023 [13:26] */

/* 'Sometype Mono', monospace */    @import url('https://fonts.googleapis.com/css2?family=Sometype+Mono&display=swap');
/* 'Gabarito', sans-serif */        @import url('https://fonts.googleapis.com/css2?family=Gabarito&display=swap');
/* 'Roboto Serif', serif */         @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&family=Roboto+Serif:opsz@8..144&display=swap');

:root {
    /* Color */
    
    --color_background_main: #121F40;
    --color_font_main: #fff;
    --color_current_page: rgba(217, 217, 217, 0.3);
    

    /* Font */
    --font_family_main: 'Sometype Mono', monospace;
    --font_family_title: 'Gabarito', sans-serif;
    
    --font_size_main: 20px;
    --font_size_title: 10vw;

    /* Border */

    --border_radius_main: 15px;

    /* notes.html */
    --font_size_title_note: 25px;
    --font_size_descr_note: 17px;

    --font_family_descr_note: 'Roboto Serif', serif;    
}
```

## Lien

[Site](https://diegopenicaudbernal-website.onrender.com/)
