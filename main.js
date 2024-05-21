// Dark Mode
function theme(event) {
    console.log('theme');
    document.documentElement.classList.toggle('dark');
}

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    responsive: {
        0: {
            items: 4,
        },
        600: {
            items: 4,
        },
        1000: {
            items: 6,
        },
    },
});

var currentLanguage = localStorage.getItem('language') || 'ca';
changeLanguage(currentLanguage);

function changeLanguage(language) {
    fetch('public/assets/languages/translations.json')
        .then((response) => response.json())
        .then((translations) => {
            var elementsToTranslate =
                document.querySelectorAll('[data-translate]');
            elementsToTranslate.forEach(function (element) {
                var key = element.getAttribute('data-translate');
                element.textContent = translations[language][key];
            });

            localStorage.setItem('language', language);

            var button = document.getElementById('states-button');
            var flagImg = button.querySelector('img');
            var languageName = button.querySelector('span');

            switch (language) {
                case 'ca':
                    flagImg.src = '/public/assets/languages/catalan_flag.png';
                    languageName.textContent = 'Català';
                    break;
                case 'es':
                    flagImg.src = '/public/assets/languages/spanish_flag.png';
                    languageName.textContent = 'Español';
                    break;
                case 'en':
                    flagImg.src = '/public/assets/languages/english_flag.png';
                    languageName.textContent = 'English';
                    break;
            }
        })
        .catch((error) =>
            console.error('Error carregant les traduccions:', error),
        );
}
