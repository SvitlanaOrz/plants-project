let burger_menu = document.querySelector("#burger_menu");
let header_menu = document.querySelector("#header_menu");
let link = document.querySelector("ul");

function showBurgerMenu() {
  burger_menu.classList.toggle("active");
  header_menu.classList.toggle("active");
}

burger_menu.addEventListener("click", showBurgerMenu);
link.addEventListener("click", showBurgerMenu);

let gardens_button = document.querySelector(`#gardens_button`);
let lawn_button = document.querySelector(`#lawn_button`);
let planting_button = document.querySelector(`#planting_button`);

let gardens_images = document.querySelectorAll(`.gardens_image`);
let planting_images = document.querySelectorAll(`.planting_image`);
let lawn_images = document.querySelectorAll(`.lawn_image`);

function clickGardenButton() {
  if (
    lawn_button.matches(".buttons_hover") &&
    planting_button.matches(".buttons_hover")
  ) {
  } else if (
    lawn_button.matches(".buttons_hover") === false &&
    planting_button.matches(".buttons_hover") === false
  ) {
    gardens_button.classList.toggle("buttons_hover");
    planting_images.forEach((unit) => unit.classList.toggle("blur"));
    lawn_images.forEach((unit) => unit.classList.toggle("blur"));
  } else if (
    lawn_button.matches(".buttons_hover") ||
    planting_button.matches(".buttons_hover")
  ) {
    gardens_button.classList.toggle("buttons_hover");
    gardens_images.forEach((unit) => unit.classList.toggle("blur"));
  }
}
function clickLawnButton() {
  if (
    gardens_button.matches(".buttons_hover") &&
    planting_button.matches(".buttons_hover")
  ) {
  } else if (
    gardens_button.matches(".buttons_hover") === false &&
    planting_button.matches(".buttons_hover") === false
  ) {
    lawn_button.classList.toggle("buttons_hover");
    planting_images.forEach((unit) => unit.classList.toggle("blur"));
    gardens_images.forEach((unit) => unit.classList.toggle("blur"));
  } else if (
    gardens_button.matches(".buttons_hover") ||
    planting_button.matches(".buttons_hover")
  ) {
    lawn_button.classList.toggle("buttons_hover");
    lawn_images.forEach((unit) => unit.classList.toggle("blur"));
  }
}
function clickPlantingButton() {
  if (
    lawn_button.matches(".buttons_hover") &&
    gardens_button.matches(".buttons_hover")
  ) {
  } else if (
    lawn_button.matches(".buttons_hover") === false &&
    gardens_button.matches(".buttons_hover") === false
  ) {
    planting_button.classList.toggle("buttons_hover");

    gardens_images.forEach((unit) => unit.classList.toggle("blur"));
    lawn_images.forEach((unit) => unit.classList.toggle("blur"));
  } else if (
    lawn_button.matches(".buttons_hover") ||
    gardens_button.matches(".buttons_hover")
  ) {
    planting_button.classList.toggle("buttons_hover");
    planting_images.forEach((unit) => unit.classList.toggle("blur"));
  }
}

gardens_button.addEventListener("click", clickGardenButton);
lawn_button.addEventListener("click", clickLawnButton);
planting_button.addEventListener("click", clickPlantingButton);

let basics_button = document.querySelector("#basics_button");
let standard_button = document.querySelector("#standard_button");
let pro_care_button = document.querySelector("#pro_care_button");

let accordion_btn_basics = document.querySelector("#accordion_btn_basics");
let accordion_btn_standard = document.querySelector("#accordion_btn_standard");
let accordion_btn_pro_care = document.querySelector("#accordion_btn_pro_care");

function showBasicsClosedMenu() {
  basics_button.classList.toggle("accordion_section");

  basics_button.innerHTML = ` <button class="prices_buttons basics_button">
  Basics
  <img
    src="./pictures/accordion_btn.svg"
    alt="accordion_btn"
    class="accordion_btn"
    id="accordion_btn_basics"
  />
</button>`;

  let accordion_btn_basics = document.querySelector("#accordion_btn_basics");
  accordion_btn_basics.addEventListener("click", checkOpenMenuForBasic);
}

function showBasicsAccordionMenu() {
  basics_button.classList.toggle("accordion_section");

  basics_button.innerHTML = `<div class="width">
    <div class="basics_name">
        Basics
      <img
        src="./pictures/accordion_btn_open.svg"
        alt="accordion_btn"
        class="accordion_btn"
        id="accordion_btn_basics_open"/>
    </div>
    <hr />
    <p class="accordion_text">
      Release of Letraset sheets containing Lorem Ipsum passages, and
      more recently
    </p>
    <p class="per_hour">
      <span class="red_text">$<span class="price_per_hour">15</span></span> / per hour
    </p>
    <button class="order_button"><a href="#contacts_section">Order</a></button>
  </div>
  `;
  let accordion_btn_basics = document.querySelector(
    "#accordion_btn_basics_open"
  );
  accordion_btn_basics.addEventListener("click", showBasicsClosedMenu);
}

function checkOpenMenuForBasic() {
  if (standard_button.className.includes("accordion_section")) {
    showStandardClosedMenu();
    showBasicsAccordionMenu();
  } else if (pro_care_button.className.includes("accordion_section")) {
    showProCareClosedMenu();
    showBasicsAccordionMenu();
  } else {
    showBasicsAccordionMenu();
  }
}

function showStandardClosedMenu() {
  standard_button.classList.toggle("accordion_section");

  standard_button.innerHTML = ` <button class="prices_buttons basics_button">
  Standard
  <img
    src="./pictures/accordion_btn.svg"
    alt="accordion_btn"
    class="accordion_btn"
    id="accordion_btn_standard"
  />
</button>`;

  let accordion_btn_standard = document.querySelector(
    "#accordion_btn_standard"
  );
  accordion_btn_standard.addEventListener("click", checkOpenMenuForStandart);
}

function showStandardAccordionMenu() {
  standard_button.classList.toggle("accordion_section");

  standard_button.innerHTML = `<div class="width">
    <div class="standart_name">
        Standard
      <img
        src="./pictures/accordion_btn_open.svg"
        alt="accordion_btn"
        class="accordion_btn"
        id="accordion_btn_standard_open"/>
    </div>
    <hr />
    <p class="accordion_text">
      Release of Letraset sheets containing Lorem Ipsum passages, and
      more recently
    </p>
    <p class="per_hour">
      <span class="red_text">$<span class="price_per_hour">25</span></span> / per hour
    </p>
    <button class="order_button"><a href="#contacts_section">Order</a></button>
  </div>
  `;

  let accordion_btn_standard_open = document.querySelector(
    "#accordion_btn_standard_open"
  );

  accordion_btn_standard_open.addEventListener("click", showStandardClosedMenu);
}

function checkOpenMenuForStandart() {
  if (basics_button.className.includes("accordion_section")) {
    showBasicsClosedMenu();
    showStandardAccordionMenu();
  } else if (pro_care_button.className.includes("accordion_section")) {
    showProCareClosedMenu();
    showStandardAccordionMenu();
  } else {
    showStandardAccordionMenu();
  }
}

function showProCareClosedMenu() {
  pro_care_button.classList.toggle("accordion_section");

  pro_care_button.innerHTML = ` <button class="prices_buttons basics_button">
  Pro care
  <img
    src="./pictures/accordion_btn.svg"
    alt="accordion_btn"
    class="accordion_btn"
    id="accordion_btn_pro_care"
  />
</button>`;

  let accordion_btn_pro_care = document.querySelector(
    "#accordion_btn_pro_care"
  );
  accordion_btn_pro_care.addEventListener("click", checkOpenMenuForProCare);
}

function showProCareAccordionMenu() {
  pro_care_button.classList.toggle("accordion_section");

  pro_care_button.innerHTML = `<div class="width">
    <div class="pro_care_name">
        Pro care
      <img
        src="./pictures/accordion_btn_open.svg"
        alt="accordion_btn"
        class="accordion_btn"
        id="accordion_btn_pro_care_open"/>
    </div>
    <hr />
    <p class="accordion_text">
      Release of Letraset sheets containing Lorem Ipsum passages, and
      more recently
    </p>
    <p class="per_hour">
      <span class="red_text">$<span class="price_per_hour">35</span></span> / per hour
    </p>
    <button class="order_button"><a href="#contacts_section">Order</a></button>
  </div>
  `;

  let accordion_btn_pro_care_open = document.querySelector(
    "#accordion_btn_pro_care_open"
  );

  accordion_btn_pro_care_open.addEventListener("click", showProCareClosedMenu);
}

function checkOpenMenuForProCare() {
  if (basics_button.className.includes("accordion_section")) {
    showBasicsClosedMenu();
    showProCareAccordionMenu();
  } else if (standard_button.className.includes("accordion_section")) {
    showStandardClosedMenu();
    showProCareAccordionMenu();
  } else {
    showProCareAccordionMenu();
  }
}

accordion_btn_basics.addEventListener("click", checkOpenMenuForBasic);
accordion_btn_standard.addEventListener("click", checkOpenMenuForStandart);
accordion_btn_pro_care.addEventListener("click", checkOpenMenuForProCare);

let accordion_btn_for_city = document.querySelector("#accordion_btn_for_city");
let address_container = document.querySelector("#address_container");

let cityCanandaigua = document.querySelector("#canandaigua");
let cityNewYork = document.querySelector("#new_york");
let cityYonkers = document.querySelector("#yonkers");
let citySherrill = document.querySelector("#sherrill");

let accordion_city = document.querySelector("#accordion_city");
let accordion_image = document.querySelector("#accordion_image");

function showCityAccordionMenu() {
  accordion_city.classList.toggle("display_none");

  if (accordion_city.className.includes("display_none")) {
    accordion_btn_for_city.classList.remove("new_backgraund");
    accordion_image.src = "./pictures/accordion_btn.svg";
  } else {
    accordion_btn_for_city.classList.add("new_backgraund");
    accordion_image.src = "./pictures/accordion_btn_open.svg";
  }
}

function showCanandaiguaInformation() {
  accordion_city.classList.toggle("display_none");

  let selectedCityName = document.querySelector("#selected_city_name");

  if (accordion_city.className.includes("display_none")) {
    accordion_image.src = "./pictures/accordion_btn.svg";
    selectedCityName.textContent = "Canandaigua, NY";
  }

  address_container.innerHTML = `<div class="border_address_container">
  <div class="flex_address_container">
    <div class="city_phone_address">
      <p>City:</p>
      <p>Phone:</p>
      <p>Office adress:</p>
    </div>
    <div class="city_phone_address_description">
      <p>Canandaigua, NY</p>
      <p id="telephone_number">+1	585	393 0001</p>
      <p>151 Charlotte Street</p>
    </div>
  </div>
  <a href="tel:+15853930001"><button>Call us</button></a>
</div>`;
}

function showNewYorkInformation() {
  accordion_city.classList.toggle("display_none");

  let selectedCityName = document.querySelector("#selected_city_name");

  if (accordion_city.className.includes("display_none")) {
    accordion_image.src = "./pictures/accordion_btn.svg";
    selectedCityName.textContent = "New York City";
  }

  address_container.innerHTML = `<div class="border_address_container">
  <div class="flex_address_container">
    <div class="city_phone_address">
      <p>City:</p>
      <p>Phone:</p>
      <p>Office adress:</p>
    </div>
    <div class="city_phone_address_description">
      <p>New York City</p>
      <p>+1	212	456 0002</p>
      <p>9 East 91st Street</p>
    </div>
  </div>
 <a href="tel:+12124560002"> <button>Call us</button></a>
</div>`;
}

function showYonkersInformation() {
  accordion_city.classList.toggle("display_none");

  let selectedCityName = document.querySelector("#selected_city_name");

  if (accordion_city.className.includes("display_none")) {
    accordion_image.src = "./pictures/accordion_btn.svg";
    selectedCityName.textContent = "Yonkers, NY";
  }

  address_container.innerHTML = `<div class="border_address_container">
  <div class="flex_address_container">
    <div class="city_phone_address">
      <p>City:</p>
      <p>Phone:</p>
      <p>Office adress:</p>
    </div>
    <div class="city_phone_address_description">
      <p>Yonkers, NY</p>
      <p>+1 914 678 0003</p>
      <p>511 Warburton Ave</p>
    </div>
  </div>
  <a href="tel:+19146780003"><button>Call us</button></a>
</div>`;
}

function showSherrillInformation() {
  accordion_city.classList.toggle("display_none");

  let selectedCityName = document.querySelector("#selected_city_name");

  if (accordion_city.className.includes("display_none")) {
    accordion_image.src = "./pictures/accordion_btn.svg";
    selectedCityName.textContent = "Sherrill, NY";
  }

  address_container.innerHTML = `<div class="border_address_container">
  <div class="flex_address_container">
    <div class="city_phone_address">
      <p>City:</p>
      <p>Phone:</p>
      <p>Office adress:</p>
    </div>
    <div class="city_phone_address_description">
      <p>Sherrill, NY</p>
      <p>+1	315	908 0004</p>
      <p>14 WEST Noyes BLVD</p>
    </div>
  </div>
 <a href="tel:+13159080004"> <button>Call us</button></a>
</div>`;
}

accordion_btn_for_city.addEventListener("click", showCityAccordionMenu);

cityCanandaigua.addEventListener("click", showCanandaiguaInformation);
cityNewYork.addEventListener("click", showNewYorkInformation);
cityYonkers.addEventListener("click", showYonkersInformation);
citySherrill.addEventListener("click", showSherrillInformation);
