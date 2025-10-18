// Dark Mode Toggle
const themeToggle = documentation.getElementById('themeToggle');
themeToggle.addEventListener('click',() => {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ?":"'dark';
});

// Language Switcher Placeholder
const languageSelect = document.getElementById('language');
if(languageSelect) {
    languageSelect.addEventListener('change',(e) => {
        //Placeholder: actual implementation would load/interface translations
        alert('Language feature coming soon: ' + e.target.value);
    });
}
 
//Chart.js Lab Result Chart Setup
const labChartElem = document.getElementById('labChart');
if(labChartElem) {
    new Chart(labChartElem, {
        type: 'bar',
        data: {
            labels: ['Glucose','Cholesterol','Blood Pressure'],
            dataset: [
                {
                    label: 'Your Values',
                    data: [85, 220, 130],
                    backgroundColor: ['green','orange','red']
                },
                {
                    label: 'Normal Range Upper',
                    data: [100, 200, 120],
                    backgroundColor: 'rgba(0,0,0,0.1)'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || ";
                            if(label) {
                                label += ': ';
                            }
                            if(context.parsed.y!== null) {
                                label += context.parsed.y;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

// Tooltip Accessibility for Term Explanations
document.querySelectorAll('.tooltip').forEach(el => {
    el.addEventListener('keydown',(e) => {
        if(e.key === 'Enter' || e.key === '') {
            e.preventDefault();
            alert(el.dataset.tooltip || 'No explanation provided.');
        }
    });
    el.addEventListener('click', () => {
        alert(el.dataset.tooltip || 'No explanation provided.');
    });
});

// Show/hide Cholesterol High Explanation
const whyBtn = document.querySelector('button[aria-describedby="cholhigh"]');
const cholHighDiv = document.getElementById('cholHigh');
if(whyBtn && cholHighDiv) {
    whyBtn.addEventListener('click', () => {
        cholHighDiv.hidden = !cholHighDiv.hidden;
    });
}

//File Upload: Show Loading Indicator
const fileInput = document.getElementById('upload report');
const loadingIndicator = document.getElementById('loadingindicator');
if(fileInput && loadingIndicator) {
    fileInput.addEventListener('change', () => {
        loadingIndicator.style.display = 'block';
        setTimeout(() => {
            loadingIndicator.style.display = 'none';
            alert('File analyzed! (This is a placeholder for processing.)');
            // Here, call backend API to process uploaded file and display results
        }, 2000);
    });
}

//Voice Explanation Controls (placeholders)
const playVoiceBtn = document.getElementById('playVoice');
const pauseVoiceBtn = document.getElementById('pauseVoice');
let utterance;
if(playVoiceBtn && pauseVoiceBtn) {
    playVoiceBtn.addEventListener('click', () => {
        if('speechSynthesis' in window) {
            if (utterenace) {
                window.speechSynthesis.cancel();
            }
            utterance = new SpeechSynthesisUtterance(
                document.getElementById('explanation').innerText
            );
            window.speechSynthesis.cancel();
        }
    });
}

//Caregiver Share Checkbox handler
const caregiverShare = document.getElementById('caregiverShare');
if (caregiverShare) {
    caregiverShare.addEventListener('change', (e) => {
        if (e.target.checked) {
            alert('Caregiver will receive the summary.');
            //Trigger sharing logic here
        } else {
            alert('Caregiver summary sharing disabled.');
        }  
    });
}