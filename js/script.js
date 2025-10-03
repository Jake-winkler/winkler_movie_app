const global = {
    currentPage: window.location.pathname
}

// Highlight Active Link: 

function highlightActiveLink(){
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if(link.getAttribute('href') === global.currentPage){
            link.classList.add('active');
        }
    })
}

//Init app

function init() {
    switch(global.currentPage){
        case '/winkler_movie_app/index.html':
            console.log('Home');
        break;
        case '/winkler_movie_app/shows.html': 
            console.log('shows');
        break;
        case '/winkler_movie_app/movie-details.html':
            console.log('movie details');
        break
           case '/winkler_movie_app/tv-details.html':
            console.log('tv details');
        break
           case '/winkler_movie_app/search.html':
            console.log('search');
        break
    }

    highlightActiveLink();
}


document.addEventListener('DOMContentLoaded', init);