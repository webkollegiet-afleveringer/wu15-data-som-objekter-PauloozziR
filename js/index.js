// slå dig løs her... 

const heroSec = document.querySelector(".hero");
let heroImage = document.createElement("img");
heroImage.setAttribute("src", hero.image);
let heroHeading = document.createElement("h1");
heroHeading.textContent = hero.headline;
let heroText = document.createElement("p");
heroText.textContent = hero.copy;
let heroIcon = document.createElement("img");
heroIcon.setAttribute("src", hero.icon);
heroSec.append(heroImage, heroHeading, heroText, heroIcon);

const servicesSec = document.querySelector(".services");
services.forEach(service => {
    let serviceDiv = document.createElement("div");
    serviceDiv.classList.add("service");
    let serviceImage = document.createElement("img");
    serviceImage.setAttribute("src", service.illustration);
    let serviceHeading = document.createElement("h3");
    serviceHeading.textContent = service.headline;
    let serviceText = document.createElement("p");
    serviceText.textContent = service.text;
    let serviceLinkText = document.createElement("a");
    serviceLinkText.textContent = service.linktext;
/*    serviceLinkText.setAttribute("href", );     */
    serviceDiv.append(serviceImage, serviceHeading, serviceText, serviceLinkText);
    servicesSec.appendChild(serviceDiv);
});

const facilitiesSec = document.querySelector(".facilities");
let facilitiesHeadline = document.createElement("h2");
facilitiesHeadline.textContent = facilities.headline;
facilitiesSec.append(facilitiesHeadline);
facilities.options.forEach(option => {
let facilitiesDiv = document.createElement("div");
    let facilityIcon = document.createElement("img");
    facilityIcon.setAttribute("src", option.icon);
    let facilityHeadline = document.createElement("h3");
    facilityHeadline.textContent = option.headline;
    let facilityText = document.createElement("p");
    facilityText.textContent = option.text;
    facilitiesDiv.append(facilityIcon, facilityHeadline, facilityText);
    facilitiesSec.append(facilitiesDiv);
});

const sitesSec = document.querySelector(".sites");
let sitesHeadline = document.createElement("h2");
sitesHeadline.textContent = sites.headline;
let sitesText = document.createElement("p");
sitesText.textContent = sites.text;
let sitesButton = document.createElement("button");
sitesButton.textContent = "Start";
let sitesImage = document.createElement("img");
sitesImage.setAttribute("src", sites.btnicon);
sitesButton.append(sitesImage);
sitesSec.append(sitesHeadline, sitesButton);
sites.places.forEach(place => {
    let sitesDiv = document.createElement("div");
    let siteIcon = document.createElement("img");
    siteIcon.setAttribute("src", place.img);
    let siteHeadline = document.createElement("h3");
    siteHeadline.textContent = place.name;
    let siteText = document.createElement("p");
    siteText.textContent = place.city;
    sitesDiv.append(place.img, place.name, place.city);
    sitesSec.append(sitesDiv);
});

const advantagesSec = document.querySelector(".advantages");
advantages.forEach(service => {
    let advantageDiv = document.createElement("div");
    advantageDiv.classList.add("service");
    let advantageImage = document.createElement("img");
    advantageImage.setAttribute("src", service.illustration);
    let advantageHeading = document.createElement("h3");
    advantageHeading.textContent = service.headline;
    let advantageText = document.createElement("p");
    advantageText.textContent = service.text;
    advantageDiv.append(advantageImage, advantageHeading, advantageText);
    advantagesSec.appendChild(advantageDiv);
});
//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
