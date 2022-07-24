const API_MY_PROFILE = "https://api.github.com/users/igorMarianoLima";
const PROFILE_CONTAINER = document.getElementById("profile");

const createProfile = (profileData) => {
  const avatar = document.createElement("div");
  avatar.id = "profile__photo";
  avatar.style.backgroundImage = `url(${profileData.avatar_url})`;

  const profileName = document.createElement("h2");
  profileName.id = "profile__name";
  profileName.innerText = profileData.name;

  const profileBio = document.createElement("p");
  profileBio.id = "profile__bio";
  profileBio.innerText = profileData.bio;

  const profileLocation = document.createElement("address");
  profileLocation.id = "profile__location";
  profileLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${profileData.location}`;

  return [avatar, profileName, profileBio, profileLocation];
};

fetch(API_MY_PROFILE).then((response) =>
  response.status === 200
    ? response.json().then((data) => {
        const profileElements = createProfile(data);

        profileElements.forEach((profileElement) => {
          PROFILE_CONTAINER.appendChild(profileElement);
        });
      })
    : PROFILE_CONTAINER.remove()
);
