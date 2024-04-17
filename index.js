// 1st step - Movement animation to happen
// i used dollar sign to remove the document.query selector like what discuss before.
const card = $('.card')[0]; // Selecting the first element with 'card'
const container = $('.container'); // Selecting the element with 'container'

// 5th step - all items
const photo = $('.photo img'); // Selecting the image inside an element with 'photo'
const title = $('.title'); // Selecting the element with 'title'
const social = $('.social'); // Selecting the element with 'social'
const info = $('.info h4'); // Selecting the h4 element inside an element with 'info'
const profile = $('.profile'); // Selecting the element with 'profile'

// 2nd step - Moving animation event
container.on('mousemove', (e) => {
    // Calculate the rotation angles based on mouse position
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; 
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20; 

    // rotation to the card
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// 4th step - Adding animation in
container.on('mouseenter', e => {
    card.style.transform = 'none'; // Resetting the card's transform
    // Applying popout animation to all items
    photo.css('transform', 'translateZ(50px)'); // Using jQuery's style will apply transform progress
    title.css('transform', 'translateZ(50px)');
    social.css('transform', 'translateZ(50px)');
    info.css('transform', 'translateZ(50px)');
    profile.css('transform', 'translateZ(50px)');
});

// 3rd step - Removing animation in
container.on('mouseleave', e => {
    // Applying animation to the card to return to its initial state
    card.style.transform = 'all 0.5s ease'; 
    card.style.transform = `rotateY(0deg) rotateX(0deg)`; // Resetting rotation to 0 degrees
});
    