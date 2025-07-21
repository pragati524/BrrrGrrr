

document.getElementById('order-button').addEventListener('click', function() {
    const bun = document.getElementById('bun').value;
    const patty = document.getElementById('patty').value;
    const cheese = document.getElementById('cheese').value;
    


    const summaryText = `You have ordered a burger with a ${bun} bun, ${patty} patty, ${cheese} cheese, and extras .`;
    document.getElementById('summary-text').textContent = summaryText;

    document.getElementById('burger-builder').classList.add('hidden');
    document.getElementById('order-summary').classList.remove('hidden');
});

document.getElementById('confirm-button').addEventListener('click', function() {
    alert('Your order has been confirmed!');
    location.reload();
});
