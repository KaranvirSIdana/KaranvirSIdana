document.addEventListener("DOMContentLoaded", function () {
    const constants = [
        'π', 'e', 'φ', 'γ', 'i', 'Ω', 'α', 'β',
        'θ', 'λ', 'Σ', 'Δ', '∞', 'μ', 'Ψ', '∫', '∑', 'χ', 
        'η', 'ρ', 'τ', 'σ', 'ξ', 'ζ', 'κ', 'ψ', 'ω'
    ];
    const container = document.querySelector('body');
    const numConstants = 47; // Number of constants to display
    const numStars = 247; // Number of static stars to display

    // Create static stars
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.textContent = Math.floor(Math.random() * 10); // Random single digit number for stars

        // Randomize position and size
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 0.5 + 0.2; // Size between 0.2rem and 0.7rem

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.fontSize = `${size}rem`;
        star.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity between 0.5 and 1

        // Append the star to the body
        container.appendChild(star);
    }

    // Create moving constants
    for (let i = 0; i < numConstants; i++) {
        const constant = document.createElement('div');
        constant.className = 'constant';
        constant.textContent = constants[Math.floor(Math.random() * constants.length)];

        // Set a random speed for each constant
        const speed = Math.random() * 10 + 5; // Random speed between 5s and 15s
        constant.style.animationDuration = `${speed}s`;

        // Randomize the center position for the trajectory
        const centerX = Math.random() * 100;
        const centerY = Math.random() * 100;

        constant.style.left = `${centerX}%`;
        constant.style.top = `${centerY}%`;

        // Append the constant to the body
        container.appendChild(constant);
    }
});
