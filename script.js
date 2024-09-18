document.getElementById('play-button').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.play();
});

const mindspaceTextarea = document.querySelector('.mindspace');

window.addEventListener('DOMContentLoaded', () => {
    const savedContent = localStorage.getItem('mindspaceContent');
    if (savedContent) {
        mindspaceTextarea.value = savedContent;
    }
});

mindspaceTextarea.addEventListener('input', () => {
    localStorage.setItem('mindspaceContent', mindspaceTextarea.value);
});

mindspaceTextarea.addEventListener('blur', () => {
    if (!mindspaceTextarea.value) {
        localStorage.removeItem('mindspaceContent');
    }
});