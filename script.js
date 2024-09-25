function calculateDebt() {
    const balance = parseFloat(document.getElementById('balance').value);
    const payment = parseFloat(document.getElementById('payment').value);
    const frequency = document.getElementById('frequency').value;

    let months;

    if (frequency === 'monthly') {
        months = balance / payment;
    } else if (frequency === 'weekly') {
        months = balance / (payment * 4);
    } else if (frequency === 'biweekly') {
        months = balance / (payment * 2);
    }

    const resultElement = document.getElementById('months');
    resultElement.innerText = Math.ceil(months);

    // Confetti inside result box
    const resultBox = document.getElementById('result');
    const rect = resultBox.getBoundingClientRect();

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { x: (rect.left + rect.right) / 2 / window.innerWidth, y: (rect.top + rect.bottom) / 2 / window.innerHeight },
        startVelocity: 30,
        elementCount: 200,
    });
}
