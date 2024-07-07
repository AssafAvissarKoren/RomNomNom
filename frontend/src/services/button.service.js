// button.service.js

export const buttonService = {
    getRandomEffect,
    getRandomPosition,
    playSound,
    getNextPosition,
    getRandomColor
}

function getRandomColor(lastColor) {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let newColors = colors.filter(color => color !== lastColor);
    return newColors[Math.floor(Math.random() * newColors.length)];
}

function getRandomPosition(lastPosition) {
    let newPosition;
    do {
        newPosition = {
            row: Math.ceil(Math.random() * 3),
            col: Math.ceil(Math.random() * 3)
        };
    } while (newPosition.row === lastPosition.row && newPosition.col === lastPosition.col);

    return newPosition;
}

function getRandomEffect() {
    const effects = ['explode', 'changeBackground', 'move'];
    return effects[Math.floor(Math.random() * effects.length)];
}

function playSound() {
    const audio = new Audio('/path_to_click_sound.mp3'); // Specify the path to your sound file
    audio.play();
}

function getNextPosition() {
    // Returns a new position within a 3x3 grid layout
    const positions = [
        { top: '10%', left: '10%' },
        { top: '10%', left: '45%' },
        { top: '10%', left: '80%' },
        { top: '45%', left: '10%' },
        { top: '45%', left: '45%' },
        { top: '45%', left: '80%' },
        { top: '80%', left: '10%' },
        { top: '80%', left: '45%' },
        { top: '80%', left: '80%' }
    ];
    return positions[Math.floor(Math.random() * positions.length)];
}
