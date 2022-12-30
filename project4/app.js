const accordItems = document.querySelectorAll('.faq__panel')

accordItems.forEach(item => {
    const accordText = item.querySelector('.faq__label');
    const content = item.querySelector('.faq__content');
  
    item.addEventListener('click', (event) => {
      const wasActive = item.classList.contains('active');
      accordItems.forEach(item => {
        item.classList.remove('active');
      });
      if (!wasActive) {
          item.classList.add('active');
      }
    });
  })