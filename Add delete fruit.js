// Function to handle deletion of a fruit
function handleDeleteButtonClick(event) {
    // Get the parent list item of the delete button
    const listItem = event.target.closest('li');
  
    // Remove the parent list item from the list
    listItem.remove();
  }
  
  // Function to handle form submission
  function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get the value of the input field
    const fruitToAdd = document.getElementById('fruit-to-add').value;
  
    // Check if the input field is empty
    if (fruitToAdd.trim() === '') {
      alert('Please enter a fruit name.');
      return;
    }
  
    // Create a new list item with the fruit name, delete button, and edit button
    const newListItem = document.createElement('li');
    newListItem.classList.add('fruit');
    newListItem.innerHTML = `${fruitToAdd}<button class="delete-btn">x</button><button class="edit-btn">Edit</button>`;
  
    // Append the new list item to the list of fruits
    const fruitList = document.querySelector('.fruits');
    fruitList.appendChild(newListItem);
  
    // Clear the input field
    document.getElementById('fruit-to-add').value = '';
  }
  
  // Add event listener for form submission
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
  
  // Select all delete buttons (existing functionality)
  const deleteButtons = document.querySelectorAll('.delete-btn');
  
  // Loop through each delete button and attach event listener (existing functionality)
  deleteButtons.forEach(button => {
    button.addEventListener('click', handleDeleteButtonClick);
  });
  
  // Add edit buttons to existing fruits (new functionality)
  const existingFruits = document.querySelectorAll('.fruit');
  existingFruits.forEach(fruit => {
    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    fruit.appendChild(editButton);
  });
  