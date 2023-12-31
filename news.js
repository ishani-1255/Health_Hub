

document.addEventListener('DOMContentLoaded', function () {
    // Fetch health-related news from the Guardian API
    fetch('https://content.guardianapis.com/search?q=health&api-key=adb35959-8558-4601-9cb2-e776b962fcec')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayNews(data.response.results);
      })
      .catch(error => {
        console.error('Error fetching news:', error.message);
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = '<p>Failed to fetch news. Please try again later.</p>';
      });
  });
  
  // Function to display news
  function displayNews(newsArray) {
    const newsContainer = document.getElementById('news-container');
  
    // Check if there are any news articles
    if (newsArray.length === 0) {
      newsContainer.innerHTML = '<p>No health-related news available.</p>';
      return;
    }
  
    // Clear loading message
    newsContainer.innerHTML = '';
  
    // Create HTML elements for each news article
    newsArray.forEach(article => {
      const articleElement = document.createElement('article');
  
      // Check if properties exist before accessing them
      const title = article.webTitle || 'No Title';
      const trailText = article.fields?.trailText || '    ';
      const webUrl = article.webUrl || '#';
  
      articleElement.innerHTML = `
        <h2>${title}</h2>
        <p>${trailText}</p>
        <a href="${webUrl}" target="_blank">Read more</a>
        <hr>
      `;
  
      newsContainer.appendChild(articleElement);
    });
  }
  
      