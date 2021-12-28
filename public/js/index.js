let searchButton=  document.querySelector('#Search-Button');
searchButton.addEventListener('click',(event)=>{
    let searchTitle= document.querySelector('#Search-Title');
    let searchSort = document.querySelector('#Search-Sort');
    let searchArea = document.querySelector('#Search-Area');
    const url= new URL('https:localhost:3000/search/');
    url.searchParams.set('queryString',searchArea.value);
    url.searchParams.set('field',searchTitle.innerHTML.split(' ').pop().toLowerCase());
    url.searchParams.set('sort',searchSort.innerHTML.split(' ').pop().toLowerCase());
    location.href= url.pathname+url.search
    console.log(url.pathname+url.searchParams)
})
const observer = new MutationObserver((record)=>{
    
});
observer.observe(document,{
    childList:true,
    subtree:true
})


