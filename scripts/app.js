const section = document.querySelector('.cours');

class Element
{
    constructor(urlImage, title, urlPage)
    {
        this.urlImage = urlImage,
        this.title = title,
        this.urlPage = urlPage
    }

    createCours()
    {
        const article = document.createElement('article');
        const containerImage = document.createElement('div');
        const containerDescription = document.createElement('div');
        article.appendChild(containerImage);
        article.appendChild(containerDescription);

        const image = document.createElement('img');
        image.setAttribute('src', this.urlImage);
        image.setAttribute('alt', `image représentant le cours ${this.title}`);
        containerImage.appendChild(image);

        const titleDescription = document.createElement('h2');
        titleDescription.innerHTML = this.title;
        containerDescription.appendChild(titleDescription);

        const linkDescription = document.createElement('a');
        linkDescription.setAttribute('href', this.urlPage);
        linkDescription.innerHTML = 'Grab That Code';
        containerDescription.appendChild(linkDescription);

        return article;
    }
}

const typewriter = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Ftypewritter.jpg&w=1920&q=75', 'Typewriter effect CSS/JS', '').createCours();
const intersectionObserver = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fintersectionobserver.jpg&w=1920&q=75', 'Intersection Observer', '').createCours();
const lettersExplosion = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Flettersexplosion.jpg&w=1920&q=75', 'Letters Explosion', '').createCours();
const javaScriptTabs = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fjstabs.jpg&w=1920&q=75', 'JavaScript Tabs', '').createCours();
const animatedDropdown = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fanimateddropdown.jpg&w=1920&q=75', 'Animated Dropdown').createCours();
const gradientAnimation = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Flinearanimation.jpg&w=1920&q=75', 'Gradient Animation', '').createCours();
const frostEffect = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Ffrosteffect.jpg&w=1920&q=75', 'Frost Effect', '').createCours();
const neomorphism = new Element ('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fneomorphism.jpg&w=1920&q=75', 'Neomorphism', '').createCours();
const sideNav = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fsidenav.jpg&w=1920&q=75', 'Side Nav', '').createCours();
const spinningHamburger = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fspinninghamburger.jpg&w=1920&q=75', 'Spinning Hamburger', '').createCours();
const spinningColor = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fspinningcolors.jpg&w=1920&q=75', 'Spinning Color', '').createCours();
const blobbyMenu = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fblobmenu.jpg&w=1920&q=75', 'Blobby Menu', '').createCours();
const draggableSlider = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fdraggableslider.jpg&w=1920&q=75', 'Draggable Slider', '').createCours();
const threeDtextAnimation = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Ftext3d.jpg&w=1920&q=75', '3D Text Animation', '').createCours();
const tableUi = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Ftable.jpg&w=1920&q=75', 'Table UI', '').createCours();
const flexboxFooter = new Element('https://www.ui-delivery.com/_next/image?url=%2Fthumbs%2Fflexfooter.jpg&w=1920&q=75', 'Flexbox Footer', '').createCours();

tabElement = 
[
    typewriter, intersectionObserver, lettersExplosion, javaScriptTabs,
    animatedDropdown, gradientAnimation, frostEffect,
    neomorphism, sideNav, spinningHamburger,
    spinningColor, blobbyMenu, draggableSlider, 
    threeDtextAnimation, tableUi, flexboxFooter
]

tabElement.forEach(element => 
{
    section.appendChild(element);
});

const dataCopy = document.querySelector('.dataCopy');
const thisYear = new Date().getFullYear();
dataCopy.innerHTML = thisYear.toString();