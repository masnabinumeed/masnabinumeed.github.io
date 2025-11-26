document.addEventListener('DOMContentLoaded', function() {
  
  // Modal functionality
  var modal = document.querySelector('.modal');
  var btn = document.querySelector('.button');
  var span = document.querySelector('.close');

  if (btn && modal) {
    btn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  }

  if (span && modal) {
    span.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  }

  // Check if element is scrolled into view (triggers when 25% visible)
  function isScrolledIntoView(elem) {
    var rect = elem.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var triggerPoint = rect.top + (rect.height * 0.25);
    
    return triggerPoint <= windowHeight && rect.bottom >= 0;
  }

  // Lazyscroll - fade in elements on scroll
  function checkLazyScroll() {
    var elements = document.querySelectorAll('.lazyscroll');
    elements.forEach(function(elem) {
      if (isScrolledIntoView(elem)) {
        elem.classList.add('fadein');
      }
    });
  }

  window.addEventListener('scroll', checkLazyScroll);
  checkLazyScroll(); // Check on initial load

  // Onload - fade in elements when page loads
  window.addEventListener('load', function() {
    var elements = document.querySelectorAll('.onload');
    elements.forEach(function(elem) {
      elem.classList.add('fadein');
    });
  });

});
