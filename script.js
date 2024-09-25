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

    document.getElementById('result').innerText = Math.ceil(months);
}
