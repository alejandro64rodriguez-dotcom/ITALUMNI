document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search');
  if (!input) return;

  const cards = document.querySelectorAll('.person-card');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    cards.forEach(card => {
      const text = card.textContent.toLowerCase();
      const match = text.includes(q);
      
      
      card.style.visibility = match ? '' : 'hidden';
    });
  });
});