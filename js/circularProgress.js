let skillsContainer = document.querySelector("#skills-container");

const skills = [
  {
    technology: "HTML5",
    image: "./images/svg/html.svg",
  },
  {
    technology: "CSS3",
    image: "./images/svg/css.svg",
  },
  {
    technology: "JavaScript",
    image: "./images/svg/js.svg",
  },
  {
    technology: "TypeScript",
    image: "./images/svg/typescript.svg",
  },
  {
    technology: "ReactJS",
    image: "./images/svg/react.svg",
  },
  {
    technology: "React Native",
    image: "./images/svg/react.svg",
  },
  {
    technology: "SQL",
    image: "./images/svg/sql.svg",
  },
  {
    technology: "UI/UX",
    image: "./images/svg/ui_ux.svg",
  },
];

const getProgressSvg = (percentage) => {
  const setElementAttributes = (element, properties) => {
    let attributes = Object.entries(properties);

    attributes.forEach((attribute) => element.setAttribute(...attribute));
  };

  const svgElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "svg"
  );
  const circleElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  const svgProperties = {
    width: 220,
    height: 220,
  };

  const circleProperties = {
    cx: 110,
    cy: 110,
    r: 80,
    "stroke-width": 4,
    stroke: "#2AD17B",
    fill: "transparent",
  };

  setElementAttributes(svgElement, svgProperties);
  setElementAttributes(circleElement, circleProperties);

  svgElement.appendChild(circleElement);

  return svgElement;
};

const createProgressCard = (technology, percentage, image = null) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "progress-card");

  const svgPercentage = getProgressSvg(percentage);
  const cardTitle = `<h3>${technology}</h3>`;

  divContainer.appendChild(svgPercentage);
  divContainer.innerHTML += cardTitle;

  if (image) {
    const imageCard = document.createElement("img");
    imageCard.src = image;
    imageCard.alt = `Logo ${technology}`;

    divContainer.appendChild(imageCard);
  }

  return divContainer;
};

skills.forEach(({ technology, percentage, image }) => {
  const cardElement = createProgressCard(technology, percentage, image);
  skillsContainer.appendChild(cardElement);
});
