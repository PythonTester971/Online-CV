// Fonctionnalité du Bouton 2
document.getElementById('experiences-hide').addEventListener('click', function() {
    const experiences = document.getElementById('experiences');
    if (experiences.style.display === 'none') {
        experiences.style.display = 'block';
    } else {
        experiences.style.display = 'none';
    }
});

document.getElementById('formations-hide').addEventListener('click', function() {
    const formations = document.getElementById('formations');
    if (formations.style.display === 'none') {
        formations.style.display = 'block';
    } else {
        formations.style.display = 'none';
    }
});

document.getElementById('hobbies-hide').addEventListener('click', function() {
    const hobbies = document.getElementById('hobbies');
    if (hobbies.style.display === 'none') {
        hobbies.style.display = 'block';
    } else {
        hobbies.style.display = 'none';
    }
});

document.getElementById('form-hide').addEventListener('click', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm.style.display === 'none') {
        contactForm.style.display = 'block';
    } else {
        contactForm.style.display = 'none';
    }
});

cursor = document.getElementById('cursor');
cursor.addEventListener('click', function() {
    const geolineDenisseBin = document.getElementById('author-bin');
    const geolineDenisseStr = document.getElementById('author-string');      
    if (geolineDenisseBin.style.display === 'none') {
        cursor.textContent = '>';
        geolineDenisseBin.style.display = 'inline';
        geolineDenisseStr.style.display = 'none';
    } else {
        geolineDenisseBin.style.display = 'none';
        geolineDenisseStr.style.display = 'inline';
        cursor.textContent = '_';
    }
});                                        