// TODO: Create a variable that selects the main element, and a variable that selects the back button element

const mainElement = document.querySelector('.blog-main')
const backButton = document.getElementById('back')

// TODO: Create a function that builds an element and appends it to the DOM

function renderBlogPost(title, content, username) {
    const articleElement = document.createElement('article');
    const titleElement = document.createElement('h2');
    const contentElement = document.createElement('blockquote');
    const userElement = document.createElement('p');

    titleElement.textContent = title;
    contentElement.textContent = content;
    userElement.textContent = username;
    articleElement.append(titleElement)
    articleElement.append(contentElement)
    articleElement.append(userElement)
    mainElement.append(articleElement)
}
// renderBlogPost('My First Blog', 'Here I am Writing My First Blog Post, on a website that I built pretty much by myself...', 'lamoudregaia')
// renderBlogPost('My First Blog', 'Here I am Writing My First Blog Post, on a website that I built pretty much by myself...', 'lamoudregaia')
// renderBlogPost('My First Blog', 'Here I am Writing My First Blog Post, on a website that I built pretty much by myself...', 'lamoudregaia')
// renderBlogPost('My First Blog', 'Here I am Writing My First Blog Post, on a website that I built pretty much by myself...', 'lamoudregaia')

// TODO: Create a function that handles the case where there are no blog posts to display

function emptyBlogPost () {
    const pElement = document.createElement('p')
    const errorContainer = document.createElement('section');
    errorContainer.append(pElement);
    pElement.textContent = 'No Blog posts yet...!'
    mainElement.append(errorContainer)
}



// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.
function renderBlogList() {
    const blogPosts = readLocalStorage()
    if (blogPosts.length === 0) {
        emptyBlogPost()
        return;  
    }
    for (let i = 0; i < blogPosts.length; i++) {
        renderBlogPost(blogPosts[i].title, blogPosts[i].content, blogPosts[i].username)
    }
}

// TODO: Call the `renderBlogList` function
renderBlogList()



// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked
backButton.addEventListener('click', function(){
    redirectPage('index.html');
})