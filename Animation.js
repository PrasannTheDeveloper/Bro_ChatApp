// Anime-style Chat Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animation elements
    initAnimations();
    
    // Add event listeners for animation triggers
    setupEventListeners();
});

function initAnimations() {
    // Add bubble particles to the background
    createBubbles();
    
    // Add animated sakura petals
    createSakuraPetals();
    
    // Add shine effect to buttons
    addButtonShine();
    
    // Add message appear animation class
    addMessageAnimationClass();
}

function setupEventListeners() {
    // Animate input field on focus
    const inputFields = document.querySelectorAll('input, select, textarea');
    inputFields.forEach(field => {
        field.addEventListener('focus', function() {
            this.classList.add('input-focus-animation');
        });
        
        field.addEventListener('blur', function() {
            this.classList.remove('input-focus-animation');
        });
    });
    
    // Button click animation
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
    
    // Message sent animation
    if (document.getElementById('userInput')) {
        document.getElementById('userInput').addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                animateMessageSending();
            }
        });
    }
}

// Create bubble background effect
function createBubbles() {
    const bubbleContainer = document.createElement('div');
    bubbleContainer.className = 'bubble-container';
    document.body.appendChild(bubbleContainer);
    
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Randomize bubble properties
        const size = Math.random() * 60 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = Math.random() * 20 + 10;
        
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${posX}vw`;
        bubble.style.top = `${posY}vh`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.animationDuration = `${duration}s`;
        
        // Set random pastel color
        const hue = Math.floor(Math.random() * 60) + 300; // Pink to purple range
        const saturation = Math.floor(Math.random() * 40) + 60;
        const lightness = Math.floor(Math.random() * 20) + 75;
        bubble.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.1)`;
        
        bubbleContainer.appendChild(bubble);
    }
    
    // Add CSS for bubbles
    const style = document.createElement('style');
    style.textContent = `
        .bubble-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
            pointer-events: none;
        }
        .bubble {
            position: absolute;
            border-radius: 50%;
            opacity: 0;
            animation: bubble-float linear infinite;
        }
        @keyframes bubble-float {
            0% {
                transform: translateY(0) scale(0);
                opacity: 0;
            }
            10% {
                opacity: 0.2;
            }
            30% {
                transform: translateY(-30vh) scale(0.8);
                opacity: 0.4;
            }
            70% {
                opacity: 0.2;
            }
            100% {
                transform: translateY(-100vh) scale(0.2);
                opacity: 0;
            }
        }
        .input-focus-animation {
            transform: scale(1.02);
            box-shadow: 0 0 15px rgba(255, 158, 216, 0.3);
        }
    `;
    document.head.appendChild(style);
}

// Create falling sakura petals
function createSakuraPetals() {
    const petalContainer = document.createElement('div');
    petalContainer.className = 'petal-container';
    document.body.appendChild(petalContainer);
    
    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Randomize petal properties
        const size = Math.random() * 15 + 5;
        const posX = Math.random() * 100;
        const delay = Math.random() * 30;
        const duration = Math.random() * 10 + 7;
        const rotationSpeed = Math.random() * 10 + 5;
        
        petal.style.width = `${size}px`;
        petal.style.height = `${size * 0.8}px`;
        petal.style.left = `${posX}vw`;
        petal.style.animationDelay = `${delay}s`;
        petal.style.animationDuration = `${duration}s, ${rotationSpeed}s`;
        
        // Randomize petal color
        const type = Math.floor(Math.random() * 3);
        if (type === 0) {
            petal.style.backgroundColor = 'rgba(255, 183, 197, 0.7)'; // Pink
        } else if (type === 1) {
            petal.style.backgroundColor = 'rgba(255, 255, 255, 0.7)'; // White
        } else {
            petal.style.backgroundColor = 'rgba(255, 218, 233, 0.7)'; // Light pink
        }
        
        petalContainer.appendChild(petal);
    }
    
    // Add CSS for petals
    const style = document.createElement('style');
    style.textContent = `
        .petal-container {
            position: fixed;
            top: -50px;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
            pointer-events: none;
        }
        .petal {
            position: absolute;
            border-radius: 150% 0 150% 0;
            animation: petal-fall linear infinite, petal-rotate ease-in-out infinite;
        }
        @keyframes petal-fall {
            0% {
                top: -50px;
                transform: translateX(0);
            }
            25% {
                transform: translateX(100px);
            }
            50% {
                transform: translateX(-100px);
            }
            75% {
                transform: translateX(50px);
            }
            100% {
                top: 100vh;
                transform: translateX(-50px);
            }
        }
        @keyframes petal-rotate {
            0% {
                transform: rotate(0deg);
            }
            50% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}

// Add shine effect to buttons
function addButtonShine() {
    const style = document.createElement('style');
    style.textContent = `
        button {
            position: relative;
            overflow: hidden;
        }
        
        button::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                to right,
                rgba(255,255,255,0) 0%,
                rgba(255,255,255,0.3) 50%,
                rgba(255,255,255,0) 100%
            );
            transform: rotate(30deg);
            animation: button-shine 6s ease-in-out infinite;
            opacity: 0;
        }
        
        @keyframes button-shine {
            0% {
                opacity: 0;
                transform: rotate(30deg) translateX(-300%);
            }
            10% {
                opacity: 0.5;
            }
            20% {
                opacity: 0;
                transform: rotate(30deg) translateX(300%);
            }
            100% {
                opacity: 0;
                transform: rotate(30deg) translateX(300%);
            }
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Create ripple effect on button click
function createRippleEffect(event, button) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    button.appendChild(ripple);
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add animation class for messages
function addMessageAnimationClass() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes message-pop-in {
            0% {
                opacity: 0;
                transform: translateY(20px) scale(0.8);
            }
            70% {
                transform: translateY(-5px) scale(1.05);
            }
            100% {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .message-animation {
            animation: message-pop-in 0.4s ease-out forwards;
        }
        
        .sending-animation {
            position: relative;
            overflow: hidden;
        }
        
        .sending-animation::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(to right, #ff9ed8, #a6d8ff);
            animation: sending-progress 0.8s ease-out;
        }
        
        @keyframes sending-progress {
            0% {
                left: 0;
                width: 0;
            }
            100% {
                left: 0;
                width: 100%;
            }
        }
    `;
    document.head.appendChild(style);
}

// Animate message sending
function animateMessageSending() {
    const userInput = document.getElementById('userInput');
    if (!userInput.value.trim()) return;
    
    userInput.classList.add('sending-animation');
    setTimeout(() => {
        userInput.classList.remove('sending-animation');
    }, 800);
}

// Function to display message with animation
const originalDisplayMessage = displayMessage;
window.displayMessage = function(message) {
    originalDisplayMessage(message);
    
    // Add animation class to the last message
    const messages = document.getElementById('messages');
    if (messages) {
        const lastMessage = messages.lastElementChild;
        if (lastMessage) {
            lastMessage.classList.add('message-animation');
        }
    }
};

// Extra animation for role selection
document.addEventListener('DOMContentLoaded', function() {
    const aiRoleSelect = document.getElementById('aiRole');
    if (aiRoleSelect) {
        aiRoleSelect.addEventListener('change', function() {
            if (this.value) {
                const roleEmoji = getRoleEmoji(this.value);
                highlightSelectedRole(this, roleEmoji);
            }
        });
    }
});

// Get emoji for selected role
function getRoleEmoji(role) {
    switch(role) {
        case 'Teacher': return '👨‍🏫';
        case 'Friend': return '🙋';
        case 'Best Friend': return '🤗';
        case 'GirlFriend': return '👩‍❤️‍👨';
        case 'BoyFriend': return '👨‍❤️‍👩';
        case 'Programmer': return '👨‍💻';
        case 'Custom': return '✨';
        default: return '';
    }
}

// Highlight selected role with animation
function highlightSelectedRole(selectElement, emoji) {
    const parent = selectElement.parentElement;
    const highlight = document.createElement('div');
    highlight.className = 'role-highlight';
    highlight.textContent = emoji;
    
    // Remove any existing highlights
    const existingHighlight = parent.querySelector('.role-highlight');
    if (existingHighlight) {
        existingHighlight.remove();
    }
    
    parent.appendChild(highlight);
    
    // Add CSS for highlight
    const style = document.createElement('style');
    style.textContent = `
        .role-highlight {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            animation: bounce 0.6s ease;
        }
        
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(-50%);
            }
            40% {
                transform: translateY(-65%);
            }
            60% {
                transform: translateY(-45%);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Remove highlight after animation
    setTimeout(() => {
        highlight.style.position = 'static';
        highlight.style.animation = 'none';
        const label = parent.querySelector('label');
        if (label) {
            label.appendChild(highlight);
        }
    }, 600);
}