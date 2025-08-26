//with vinilla Js you have to build routers yourself 
//react and frameworks have these built in 
const  global = {
   currentPage: window.location.pathname,
};
console.log(window.location.pathname);

//Init App
function init(){
    switch(global.currentPage){
        case '/':
            console.log('Home');
            break;
    }
}

document.addEventListener('DOMContentLoaded', init);