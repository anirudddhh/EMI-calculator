function calculateEMI() {
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const months = document.getElementById('months').value;

    const monthlyRate = (rate / 100) / 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

    document.getElementById('emi').innerText = emi.toFixed(2);
    document.getElementById('result').style.display = 'block';
}