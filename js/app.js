const speakers = [
  {
    id: 1,
    image: './Assets/images/ryan.png',
    name: 'Augusta Ada King',
    organization: 'Counter of Lovelace and Mathematician',
    background:
      'Augusta has completed his Bachelor\'s degree in Civil Engineering in University of the Philippines',
  },
  {
    id: 2,
    image:
    './Assets/images/julia.png',
    name: 'Rear Admiral Grace Hopper',
    organization: 'Internet Pioneer',
    background:
      'Admiral. He has started his coding journey end of January 2022 and was accepted as a full-time Microverse student mid of March of that year.',
  },
  {
    id: 3,
    image:
    './Assets/images/kilnam.png',
    name: 'Rebecca Cole',
    organization: 'NASA Space Scientist',
    background:
      'As the main venue for new media art production in Korea Nabi promotes cross-disciplinary collaboration and understanding among science technology humanities and the arts.',
  },
  {
    id: 4,
    image: './Assets/images/lila.png',
    name: 'Radia Perlman',
    organization: 'MD',
    background:
    'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement.',
  },
  {
    id: 5,
    image:
    './Assets/images/yokai.png',
    name: 'Katherine Johnson',
    organization: 'Inventor and Computer Scientist',
    background:
      'Katherine Johnson is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia.',
  },
  {
    id: 6,
    image:
    './Assets/images/sohyeong.png',
    name: 'Florence Nightngale',
    organization: 'Social Reformer and Mathematician',
    background:
      'Florence Nightngale is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
];

const featuredSpeakers = document.querySelector('.speakers-list');
const speakersButton = document.querySelector('.speakers-btn');

function loadSpeakers() {
  speakers.forEach((speaker, index) => {
    const speakerContainer = document.createElement('article');
    speakerContainer.className = index > 1 ? 'flex-row-center speakers-display' : 'flex-row-center';
    featuredSpeakers.appendChild(speakerContainer);

    const speakerImage = document.createElement('img');
    speakerImage.src = `${speaker.image}`;
    speakerImage.alt = `Image of ${speaker.name}`;
    speakerImage.className = 'speaker-image';
    speakerContainer.appendChild(speakerImage);

    const speakerInfos = document.createElement('div');
    speakerInfos.className = 'speaker-infos';
    speakerContainer.appendChild(speakerInfos);

    const speakerName = document.createElement('h3');
    speakerName.className = 'light-black heading-medium speaker-heading';
    speakerName.textContent = `${speaker.name}`;
    speakerInfos.appendChild(speakerName);

    const speakerOrganization = document.createElement('h4');
    speakerOrganization.className = 'dark-orange';
    speakerOrganization.textContent = `${speaker.organization}`;
    speakerInfos.appendChild(speakerOrganization);

    const speakerBackground = document.createElement('h4');
    speakerBackground.className = 'light-black';
    speakerBackground.textContent = `${speaker.background}`;
    speakerInfos.appendChild(speakerBackground);
  });
}

function toggleSpeakers() {
  const displayedItems = document.querySelectorAll('.speakers-display');
  const toggledItems = document.querySelectorAll('.toggle');

  if (toggledItems.length === 0) {
    displayedItems.forEach((item) => {
      item.className = 'flex-row-center toggle';
    });
    speakersButton.textContent = 'LESS';
    const arrow = document.createElement('i');
    arrow.className = 'fas fa-angle-up down-arrow';
    speakersButton.appendChild(arrow);
  }
  if (toggledItems.length) {
    toggledItems.forEach((item) => {
      item.className = 'flex-row-center speakers-display';
      speakersButton.textContent = 'MORE';
      const arrow = document.createElement('i');
      arrow.className = 'fas fa-angle-down down-arrow';
      speakersButton.appendChild(arrow);
    });
  }
}

featuredSpeakers.addEventListener('DOMContentLoaded', loadSpeakers());
speakersButton.addEventListener('onclick', toggleSpeakers);

function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}

openNav();
closeNav();
