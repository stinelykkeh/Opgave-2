const storyImage = document.getElementById('story-img');
const storyText = document.getElementById('story-text');
const storyOptions = document.getElementById('story-options');

// Brugervalg array
let userChoices = [];

function renderStep(step) {
  // Sæt eller ryd indhold
  storyImage.innerHTML = `<img src="${step.imgUrl}">`;
  storyText.textContent = step.text;
  storyOptions.innerHTML = '';

  // Hvis dette er en slutning, vis popup-mulighed
  if (step.ending) {
    // Opret en knap for at vise valg
    const showChoicesBtn = document.createElement('button');
    showChoicesBtn.textContent = 'Vis mine valg';
    showChoicesBtn.onclick = () => showChoicesPopup();

    // Opret en genstart-knap
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Genstart';
    restartBtn.onclick = () => {
      localStorage.removeItem('userChoices');
      startStory();
    };

    // Tilføj knapper til options-sektionen
    storyOptions.appendChild(showChoicesBtn);
    storyOptions.appendChild(restartBtn);
    return;
  }

  // Render muligheder for det aktuelle trin
  step.options.forEach((option) => {
    // Opret en knap for hver mulighed
    const btn = document.createElement('button');
    btn.textContent = option.text;
    btn.onclick = () => {
      // Registrer valget
      userChoices.push({
        stepId: step.id,
        choice: option.text,
      });

      // Gem valg i localStorage
      localStorage.setItem('userChoices', JSON.stringify(userChoices));

      // Vis næste trin
      const nextStep = storyData[option.next];
      renderStep(nextStep);
    };

    // Tilføj knappen til options-sektionen
    storyOptions.appendChild(btn);
  });
}

// Initialiser historien
function startStory() {
  // Ryd tidligere valg
  userChoices = [];
  renderStep(storyData.start);
}

// Vis popup med JSON af brugerens valg
function showChoicesPopup() {
  const popup = document.createElement('div');
  popup.className = 'popup';

  const popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  const pre = document.createElement('pre');
  pre.textContent = JSON.stringify(userChoices, null, 2);

  const closeBtn = document.createElement('button');
  closeBtn.textContent = 'Luk';
  closeBtn.onclick = () => document.body.removeChild(popup);

  popupContent.appendChild(pre);
  popupContent.appendChild(closeBtn);
  popup.appendChild(popupContent);
  document.body.appendChild(popup);
}

startStory();
