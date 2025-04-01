const numStreaks = 5;
const body = document.body;

// Create dynamic light streaks
for (let i = 0; i < numStreaks; i++) {
    const streak = document.createElement('div');
    streak.classList.add('streak');
    streak.style.left = Math.random() * 100 + 'vw';
    streak.style.animationDuration = (Math.random() * 10 + 15) + 's';
    streak.style.animationDelay = (Math.random() * 5) + 's';
    body.appendChild(streak);
}
