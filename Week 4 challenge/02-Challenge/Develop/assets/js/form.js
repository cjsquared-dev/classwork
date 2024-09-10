// TODO: Create a variable that selects the form element
const errorElement = document.getElementById('error');
const formElement = document.getElementById('post-form');
const userInputElement = document.getElementById('username');
const titleInputElement = document.getElementById('title');
const contentInputElement = document.getElementById('content')



// TODO: Create a function that handles the form submission. Grab the form data and store it in local 
// storage, then redirect to the blog page using the `redirectPage` function. If the form is submitted with 
// missing data, display an error message to the user.
function formSubmission() {
    if (userInputElement.value !== '' && titleInputElement.value !== '' && contentInputElement.value !== '') {
        // set the data in local storage for later use
        const blogPost = {
            username: userInputElement.value,
            title: titleInputElement.value,
            content: contentInputElement.value,
        }
        storeLocalStorage(blogPost);
        redirectPage('blog.html');
    } else {
        errorElement.textContent = 'Please complete the form.'
    }
}


// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
formElement.addEventListener('submit', function(event){
    event.preventDefault()
    formSubmission()
})