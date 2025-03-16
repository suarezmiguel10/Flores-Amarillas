document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const flowersContainer = document.querySelector('.flowers-container');
    const numberOfFlowers = 7;

    const messages = [
        { title: "Eres Especial", message: "Como esta flor, tu presencia ilumina cada día 🌟" },
        { title: "Amistad Verdadera", message: "Gracias por ser una amiga tan maravillosa 💖" },
        { title: "Momentos Únicos", message: "Cada momento contigo es un regalo especial ✨" },
        { title: "Sonrisas Compartidas", message: "Tu sonrisa hace mi mundo más brillante 😊" },
        { title: "Gratitud", message: "Agradezco tenerte en mi vida 🙏" },
        { title: "Alegría", message: "Traes tanta alegría a mi vida como estas flores amarillas 🌻" },
        { title: "Amistad Eterna", message: "Nuestra amistad es un tesoro que siempre guardaré 💝" }
    ];

    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        flowersContainer.classList.remove('hidden');
        initializeGarden();
    });

    function initializeGarden() {
        // Create butterflies
        for (let i = 0; i < 3; i++) {
            const butterfly = document.createElement('div');
            butterfly.className = 'butterfly';
            butterfly.style.animationDelay = `${i * 2}s`;
            document.body.appendChild(butterfly);
        }

        // Create flowers
        for (let i = 0; i < numberOfFlowers; i++) {
            createFlower(i);
        }
    }

    function createFlower(index) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.animationDelay = `${index * 0.3}s`;

        const stem = document.createElement('div');
        stem.className = 'stem';

        // Create leaves
        const numberOfLeaves = 3;
        for (let i = 0; i < numberOfLeaves; i++) {
            const leaf = document.createElement('div');
            leaf.className = 'leaf';
            leaf.style.left = i % 2 === 0 ? '-20px' : '8px';
            leaf.style.top = `${50 + i * 60}px`;
            leaf.style.transform = `rotate(${i % 2 === 0 ? '-20deg' : '160deg'})`;
            leaf.style.animationDelay = `${1.5 + i * 0.2}s`;
            stem.appendChild(leaf);
        }

        const flowerHead = document.createElement('div');
        flowerHead.className = 'flower-head';

        // Create petals
        const numberOfPetals = 24;
        for (let i = 0; i < numberOfPetals; i++) {
            const petal = document.createElement('div');
            petal.className = 'petal';
            const rotation = (i * 360) / numberOfPetals;
            petal.style.setProperty('--rotation', `${rotation}deg`);
            petal.style.transform = `rotate(${rotation}deg)`;
            petal.style.animationDelay = `${i * 0.1}s`;
            flowerHead.appendChild(petal);
        }

        const center = document.createElement('div');
        center.className = 'center';
        flowerHead.appendChild(center);

        flower.appendChild(stem);
        flower.appendChild(flowerHead);

        // Add click event
        flower.addEventListener('click', () => showMessage(index));

        flowersContainer.appendChild(flower);
    }

    function showMessage(index) {
        // Remove any existing message
        const existingMessage = document.querySelector('.message-popup');
        if (existingMessage) {
            existingMessage.remove();
        }

        const message = messages[index];
        const messageElement = document.createElement('div');
        messageElement.className = 'message-popup';
        messageElement.innerHTML = `
            <h2>${message.title}</h2>
            <p>${message.message}</p>
        `;

        document.body.appendChild(messageElement);

        // Remove message after 3 seconds
        setTimeout(() => {
            messageElement.style.opacity = '0';
            setTimeout(() => messageElement.remove(), 500);
        }, 3000);
    }
});