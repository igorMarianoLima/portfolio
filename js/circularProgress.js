let skillsContainer = document.querySelector("#skills-container");

const skills = [
  {
    technology: "HTML5",
    percentage: 90,
  },
  {
    technology: "CSS3",
    percentage: 90,
  },
  {
    technology: "JavaScript",
    percentage: 70,
  },
  {
    technology: "ReactJS",
    percentage: 65,
  },
  {
    technology: "React Native",
    percentage: 45,
  },
  {
    technology: "PHP",
    percentage: 61,
  },
  {
    technology: "SQL",
    percentage: 32,
  },
  {
    technology: "UI/UX",
    percentage: 40,
  },
];

const getProgressSvg = (percentage) => {
  const setElementAttributes = (element, attributes) => {
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
  const textElement = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "text"
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

  const textProperties = {
    y: 124,
    x: 80,
    fill: "#fff",
  };

  let svgAttributes = Object.entries(svgProperties);
  let circleAttributes = Object.entries(circleProperties);
  let textAttributes = Object.entries(textProperties);

  setElementAttributes(svgElement, svgAttributes);
  setElementAttributes(circleElement, circleAttributes);
  setElementAttributes(textElement, textAttributes);

  textElement.innerHTML = `${percentage}%`;

  svgElement.appendChild(circleElement);
  svgElement.appendChild(textElement);

  return svgElement;
};

const createProgressCard = (technology, percentage) => {
  const divContainer = document.createElement("div");
  divContainer.setAttribute("class", "progress-card");

  const svgPercentage = getProgressSvg(percentage);
  const cardTitle = `<h3>${technology}</h3>`;

  divContainer.appendChild(svgPercentage);
  divContainer.innerHTML += cardTitle;

  return divContainer;
};

skills.forEach(({ technology, percentage }) => {
  const cardElement = createProgressCard(technology, percentage);
  skillsContainer.appendChild(cardElement);
});
