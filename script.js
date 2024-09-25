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

    // Confetti inside the result box
    const resultBox = document.getElementById('result');
    
    confetti({
        particleCount: 100,
        spread: 60,
        origin: {
            x: (resultBox.offsetLeft + resultBox.offsetWidth / 2) / window.innerWidth,
            y: (resultBox.offsetTop + resultBox.offsetHeight / 2) / window.innerHeight
        }
    });
}
