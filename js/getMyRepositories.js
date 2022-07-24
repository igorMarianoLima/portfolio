const API_MY_REPOS = "https://api.github.com/users/igorMarianoLima/repos";
let repositoriesContainer = document.querySelector(
  "#projetos-container .slide__content"
);

const createRepositoryCard = (repository) => {
  const cardElement = document.createElement("div");
  cardElement.className = "repository-card";

  const githubIcon = document.createElement("img");
  githubIcon.src = "../images/svg/github.svg";
  githubIcon.alt = "Ícone do GitHub";

  const cardTitle = document.createElement("a");
  cardTitle.href = repository.html_url;
  cardTitle.innerText = repository.name;

  cardElement.appendChild(githubIcon);
  cardElement.appendChild(cardTitle);

  return cardElement;
};

fetch(API_MY_REPOS).then(
  (response) =>
    response.status === 200 &&
    response.json().then((repositories) => {
      repositories.forEach((repository) => {
        const card = createRepositoryCard(repository);
        repositoriesContainer.appendChild(card);
      });
    })
);
