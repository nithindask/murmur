let count = 0;
const loadingDiv = document.getElementById('loading');
const captchaDiv = document.getElementById('captcha');
const captchaTextDiv = document.getElementById('captcha-text');
const captchaInput = document.getElementById('captcha-input');
const captchaSubmit = document.getElementById('captcha-submit');
const captchaRefresh = document.getElementById('captcha-refresh');
const loadingSpinner = document.getElementById('loading-spinner');

let captchaString = '';

function updateLoading() {
    loadingDiv.textContent = count;
    count++;
    
    if (count <= 100) {
        setTimeout(updateLoading, 30);
    } else {
        loadingDiv.style.display = 'none';
        generateCaptcha();
        captchaDiv.style.display = 'block';
    }
}

function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    captchaString = '';
    for (let i = 0; i < 6; i++) {
        captchaString += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    captchaTextDiv.textContent = captchaString;
    captchaInput.value = '';
}

captchaSubmit.addEventListener('click', () => {
    if (captchaInput.value === captchaString) {
        // Show loading spinner
        loadingSpinner.style.display = 'block';
        captchaDiv.style.display = 'none';

        // Simulate loading time before redirecting
        setTimeout(() => {
            loadingSpinner.style.display = 'none';
            window.location.href = 'port.html'; // Redirect to port.html
        }, 2000); // Adjust time as needed (2000 ms = 2 seconds)
    } else {
        alert('Incorrect captcha, please try again.');
    }

    document.addEventListener('contextmenu', event => event.preventDefault());
});

captchaRefresh.addEventListener('click', generateCaptcha);

updateLoading();
