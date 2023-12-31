// recipes.js

document.addEventListener('DOMContentLoaded', function () {
    // Fetch recipes from the Edamam API
    const edamamAppId = '50cd4eb5'; // Replace with your Edamam API App ID
    const edamamAppKey = 'e652af3ef22d11e5492c9058c74fb398';
    const query = 'health'; // Example query for health-related recipes
  
    fetch(`https://api.edamam.com/search?q=${query}&app_id=${edamamAppId}&app_key=${edamamAppKey}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        displayRecipes(data.hits);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error.message);
        const recipesContainer = document.getElementById('recipes-container');
        recipesContainer.innerHTML = '<p>Failed to fetch recipes. Please try again later.</p>';
      });
  });
  
  // Function to display recipes
  function displayRecipes(recipesArray) {
    const recipesContainer = document.getElementById('recipes-container');
  
    // Check if there are any recipes
    if (recipesArray.length === 0) {
      recipesContainer.innerHTML = '<p>No recipes available.</p>';
      return;
    }
  
    // Clear loading message
    recipesContainer.innerHTML = '';
  
    // Create HTML elements for each recipe
    recipesArray.forEach(recipe => {
      const recipeElement = document.createElement('div');
      recipeElement.classList.add('recipe');
  
      const title = recipe.recipe.label || 'No Title';
      const imageUrl = recipe.recipe.image || 'placeholder-image.jpg'; // Replace with your placeholder image
      const recipeUrl = recipe.recipe.url || '#';
  
      recipeElement.innerHTML = `
        <h3>${title}</h3>
        <img src="${imageUrl}" alt="${title}">
        <p>${recipe.recipe.source}</p>
        <a href="${recipeUrl}" target="_blank">View Recipe</a>
      `;
  
      recipesContainer.appendChild(recipeElement);
    });
  }
  