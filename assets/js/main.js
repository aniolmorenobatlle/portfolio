// Dark Mode
function theme(event) {
    console.log('theme');
    document.documentElement.classList.toggle('dark');
}

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 4,
        },
        600: {
            items: 5,
        },
        1000: {
            items: 8,
        },
    },
});

// Language Selector
var currentLanguage = localStorage.getItem('language') || 'ca';
changeLanguage(currentLanguage);

function changeLanguage(language) {
    // Carrega les traduccions
    fetch('translations.json')
        .then((response) => response.json())
        .then((translations) => {
            // Itera sobre els elements amb l'atribut data-translate
            var elementsToTranslate =
                document.querySelectorAll('[data-translate]');
            elementsToTranslate.forEach(function (element) {
                var key = element.getAttribute('data-translate');
                element.textContent = translations[language][key];
            });

            // Actualitza l'idioma actual a localStorage
            localStorage.setItem('language', language);

            // Actualitza el botó del idioma seleccionat amb la bandera i el nom del idioma
            var button = document.getElementById('states-button');
            var flagImg = button.querySelector('img');
            var languageName = button.querySelector('span');

            switch (language) {
                case 'ca':
                    flagImg.src = '/assets/img/languages/catalan_flag.png';
                    languageName.textContent = 'Català';
                    break;
                case 'es':
                    flagImg.src = '/assets/img/languages/spanish_flag.png';
                    languageName.textContent = 'Español';
                    break;
                case 'en':
                    flagImg.src = '/assets/img/languages/english_flag.png';
                    languageName.textContent = 'English';
                    break;
                // Añade más casos según los idiomas necesarios
            }
        })
        .catch((error) =>
            console.error('Error carregant les traduccions:', error),
        );
}
