document.querySelectorAll('.Product_card_button').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.Product_card');
        card.classList.add('added');
    });
});