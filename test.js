document.addEventListener('DOMContentLoaded', async function() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const newsContainer = document.getElementById('news-container');
  
    // Define a default query
    const defaultQuery = 'world'; // Replace with your preferred default news topic
  
    // Fetch default news on page load
    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${encodeURIComponent(defaultQuery)}&apiKey=8f4c5e88c22c4c8485b142c4f294a2b6`);
      const data = await response.json();
      console.log({ data });
  
      // Clear the container (optional if you want to keep previous results)
      newsContainer.innerHTML = '';
  
      // Call a function to display the fetched news (improved readability)
      displayNews(data.articles);
    } catch (error) {
      console.error('Error fetching default news:', error);
    }
  
    // Search button click event listener remains the same
    searchButton.addEventListener('click', async () => {
      // ... rest of the search functionality as before ...
    });
  
    // Function to display news articles (reusable)
    function displayNews(articles) {
      articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';
        articleDiv.innerHTML = `
            <a href="${article.url}" target="_blank">
                <img src="${article.urlToImage}" alt="${article.title}">
                <h3>${article.title}</h3>
            </a>
            <small>${new Date(article.publishedAt).toLocaleString()}</small>
            <p>${article.description}</p>
        `;
        newsContainer.appendChild(articleDiv);
      });
    }
  });