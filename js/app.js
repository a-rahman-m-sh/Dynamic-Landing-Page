/*
#PRE WORKING SELF GUIDE#
1. Split to 3 functions (navBarConstructor,activateSection,newSectionConstructor,lastSectionDeleter)
2.work on functions 

*/
// Global Variables
let allSections = document.querySelectorAll("section");
let navList = document.getElementById("navbar__list");
let fragment = document.createDocumentFragment();

// navBarConstructor constructing the navbar menu
function navBarConstructor() {
  allSections.forEach((sec) => {
    let navLink = document.createElement("li");
    navLink.textContent = sec.getAttribute("data-nav");
    fragment.appendChild(navLink);
    navLink.classList.add("menu__link");
    if (navLink.textContent === "Section 1") {
      navLink.classList.add("your-active-class");
    }
    navLink.addEventListener("click", activateSection);
  });
  navList.appendChild(fragment);
}
navBarConstructor();
// activate section activating section when revoked
function activateSection(evt) {
  let targetNavElement = evt.target;
  let sectionName = targetNavElement.textContent;
  let sectionView = document.querySelector(
    `section[data-nav='${sectionName}']`
  );
  if (!sectionView.classList.contains("your-active-class")) {
    // find last active section
    let lastActiveSection = document.querySelector("section.your-active-class");
    // remave class from last active
    lastActiveSection.classList.remove("your-active-class");
    // add class to carrent active
    sectionView.classList.add("your-active-class");
    sectionView.scrollIntoView({ behavior: "smooth" });
  }
  if (!targetNavElement.classList.contains("your-active-class")) {
    let lastActiveNav = document.querySelector("li.your-active-class");
    // remave class from last active
    lastActiveNav.classList.remove("your-active-class");
    // add class to carrent active
    targetNavElement.classList.add("your-active-class");
  }
}
// section constructor constructs new section when revoked
function newSectionConstructor() {
  let currentSectionsCount = document.querySelectorAll("section").length;
  let newSectionCount = currentSectionsCount + 1;
  let newSection = document.createElement("section");
  let newDiv = document.createElement("div");
  let newh2 = document.createElement("h2");
  let newp1 = document.createElement("p");
  let newp2 = document.createElement("p");
  newp1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbifermentum metus faucibus lectus pharetra dapibus. Suspendissepotenti. Aenean aliquam elementum mi, ac euismod augue. Donec egetlacinia ex. Phasellus imperdiet porta orci eget mollis. Sedconvallis sollicitudin mauris ac tincidunt. Donec bibendum, nullaeget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quamnunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duislectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi atincidunt felis. Sed leo nunc, pharetra et elementum non, faucibusvitae elit. Integer nec libero venenatis libero ultricies molestiesemper in tellus. Sed congue et odio sed euismod.";
  newp2.textContent =
    "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";
  let idw = `section${newSectionCount}`;
  let dataNav = `Section ${newSectionCount}`;
  let idAttr = document.createAttribute("id");
  let dataNavAttr = document.createAttribute("data-nav");
  idAttr.value = idw;
  dataNavAttr.value = dataNav;
  newSection.setAttributeNode(idAttr);
  newSection.setAttributeNode(dataNavAttr);
  newDiv.classList.add("landing__container");
  newh2.textContent = `${dataNav}`;
  newDiv.appendChild(newh2);
  newDiv.appendChild(newp1);
  newDiv.appendChild(newp2);
  newSection.appendChild(newDiv);
  document.querySelector("main").appendChild(newSection);
  let sectionLink = document.createElement("li");
  sectionLink.textContent = dataNav;
  sectionLink.classList.add("menu__link");
  sectionLink.addEventListener("click", activateSection);
  navList.appendChild(sectionLink);
}
addButton = document.querySelector(".create_section");
addButton.addEventListener("click", newSectionConstructor);
// last section deleter deletes last section when revoked
function lastSectionDeleter() {
  let mainDoc = document.querySelector("main");
  let lastSection = mainDoc.lastElementChild;
  mainDoc.removeChild(lastSection);
  let lastNavLink = navList.lastElementChild;
  navList.removeChild(lastNavLink);
}

deleteButton = document.querySelector(".delete_section");
deleteButton.addEventListener("click", lastSectionDeleter);
