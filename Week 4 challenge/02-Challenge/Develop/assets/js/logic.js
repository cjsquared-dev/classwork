// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
toggleBodyTheme(JSON.parse(localStorage.getItem('darkMode')))

const lightDarkButtonElement = document.getElementById('toggle')
lightDarkButtonElement.addEventListener('click', lightDarkToggle)

function lightDarkToggle(event) {
  let darkMode = false; 

  if (localStorage.getItem('darkMode')) {
    darkMode = JSON.parse(localStorage.getItem('darkMode'))
  }
  localStorage.setItem('darkMode', !darkMode)
  toggleBodyTheme(!darkMode);
  console.log(darkMode)
}

function toggleBodyTheme(darkMode) {
  let bodyElement = document.querySelector('body')
  if (darkMode === true) {
    bodyElement.classList.add('dark')
    bodyElement.classList.remove('light')
    document.documentElement.style.setProperty('--circle-color', '#ffb999');
  } else {
    bodyElement.classList.remove('dark')
    bodyElement.classList.add('light')
    document.documentElement.style.setProperty('--circle-color', '#ffb100')
  }
}

// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  let data = [];
  if (localStorage.getItem('blogPosts')) {
    data = JSON.parse(localStorage.getItem('blogPosts'))
  }
  return data;
}


// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blogPost) {
  let blogPosts = readLocalStorage()
  blogPosts.push(blogPost)
  localStorage.setItem('blogPosts', JSON.stringify(blogPosts))
}


// ! Use the following function whenever you need to redirect to a different page

let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};