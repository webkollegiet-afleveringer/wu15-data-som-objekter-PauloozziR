// slå dig løs her... 

const heroSec = document.querySelector(".hero");
let heroImage = document.createElement("img");
heroImage.setAttribute("src", hero.image);
let heroDiv = document.createElement("div");
let heroHeading = document.createElement("h1");
heroHeading.textContent = hero.headline;
let heroText = document.createElement("p");
heroText.textContent = hero.copy;
let heroButton = document.createElement("button");
heroButton.textContent = "Explore";
let heroIcon = document.createElement("img");
heroIcon.setAttribute("src", hero.icon);
heroButton.append(heroIcon);
heroDiv.append(heroHeading, heroText, heroButton);
heroSec.append(heroImage, heroDiv);

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
/*    serviceLinkText.setAttribute("href", );    */
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
    let facilityLink = document.createElement("a");
    facilityLink.textContent = "Show me more";
    facilitiesDiv.append(facilityIcon, facilityHeadline, facilityText, facilityLink);
    facilitiesSec.append(facilitiesDiv);
});

const sitesSec = document.querySelector(".sites");
let sitesDiv = document.createElement("div");
let sitesHeadline = document.createElement("h2");
sitesHeadline.textContent = sites.headline;
let sitesText = document.createElement("p");
sitesText.textContent = sites.text;
let sitesButton = document.createElement("button");
sitesButton.textContent = "Start";
let sitesImage = document.createElement("img");
sitesImage.setAttribute("src", sites.btnicon);
sitesButton.append(sitesImage);
sitesDiv.append(sitesHeadline, sitesText, sitesButton);
sitesSec.append(sitesDiv);
sites.places.forEach(place => {
    let siteDiv = document.createElement("div");
    let siteIcon = document.createElement("img");
    siteIcon.setAttribute("src", place.img);
    let siteHeadline = document.createElement("h3");
    siteHeadline.textContent = place.name;
    let siteText = document.createElement("p");
    siteText.textContent = place.city;
    let siteLink = document.createElement("a");
    siteLink.textContent = "View the Site";
    siteDiv.append(siteIcon, siteHeadline, siteText, siteLink);
    sitesSec.append(siteDiv);
});

const advantagesSec = document.querySelector(".advantages");
let advantagesHeadline = document.createElement("h2");
advantagesHeadline.textContent = "Our Advantages";
advantagesSec.append(advantagesHeadline);
advantages.forEach(advantage => {
    let advantageDiv = document.createElement("div");
    advantageDiv.classList.add("service");
    let advantageImage = document.createElement("img");
    advantageImage.setAttribute("src", advantage.icon);
    let advantageHeading = document.createElement("h3");
    advantageHeading.textContent = advantage.headline;
    let advantageText = document.createElement("p");
    advantageText.textContent = advantage.text;
    advantageDiv.append(advantageImage, advantageHeading, advantageText);
    advantagesSec.appendChild(advantageDiv);
});

const footer = document.querySelector(".footer");
let footerSmall = document.createElement("h3");
footerSmall.textContent = footerData.smallHeadline;
let footerBig = document.createElement("h2");
footerBig.textContent = footerData.bigHeadline;
footer.append(footerSmall, footerBig);
footerData.lists.forEach(list => {
    let lists = document.createElement("ul");
    let listHeadline = document.createElement("li");
    listHeadline.textContent = list.headline;
    listHeadline.classList.add("listHeadline");
    let firstItem = document.createElement("li");
    firstItem.textContent = list.first;
    let secondItem = document.createElement("li");
    secondItem.textContent = list.second;
    let thirdItem = document.createElement("li");
    thirdItem.textContent = list.third;
    let fourthItem = document.createElement("li");
    fourthItem.textContent = list.fourth;
    lists.append(listHeadline, firstItem, secondItem, thirdItem, fourthItem);
    footer.append(lists);
});
let footerCopy = document.createElement("copyright");
footerCopy.textContent = footerData.copy;
let footerNavigation = document.createElement("ul");
let firstItem = document.createElement("li");
firstItem.textContent = footerData.navigation.first;
let secondItem = document.createElement("li");
secondItem.textContent = footerData.navigation.second;
let thirdItem = document.createElement("li");
thirdItem.textContent = footerData.navigation.third;
let fourthItem = document.createElement("li");
fourthItem.textContent = footerData.navigation.fourth;
let fifthItem = document.createElement("li");
fifthItem.textContent = footerData.navigation.fifth;
footerNavigation.append(firstItem, secondItem, thirdItem, fourthItem, fifthItem);
footer.append(footerCopy, footerNavigation);

//eksempel på at udskrive alle overskrifter i services i konsollen:
services.forEach(service => console.log(service.headline))
