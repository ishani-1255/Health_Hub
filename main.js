document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling when clicking the "Explore" button
    document.getElementById('exploreBtn').addEventListener('click', function () {
      document.querySelector('.what-we-provide').scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  