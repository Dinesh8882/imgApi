let accesKey = "jJQNRV5eY4n52xccAXi-RYuwTurW70ID-Rwm-ZLGjKE";
let searchInput = document.querySelector('#search');
let searchBtn = document.querySelector('#btn')
let showData = document.querySelector('.showData')
let button = document.querySelector('.button button')

let page=1;
let clutter ;
const getData = async (getSearchInput,page) => {
    let fetching = await fetch(`https://api.unsplash.com/search/photos?query=${getSearchInput}&per_Page=28&P=${page} age&client_id=${accesKey}`)
    let data = await fetching.json();
    // console.log(data.results);



    if(page === 1){
        clutter = '';
    }
    data.results.forEach((data) => {
        clutter += `<div class="card" id=${data.id}>
                        <a href=${data.links.html} target= "_blank"><img src=${data.urls.small} alt=${data.alt_description}></a>
                   </div>`

    })
    if (clutter !== '') {
        button.style.display = "block"
    }
    showData.innerHTML = clutter

}

searchBtn.addEventListener('click', () => {
    // let seaInput = ;
    getData(searchInput.value,page);
    // searchInput.innerHTML = "s"
})



button.addEventListener('click',()=>{
    page++;
    getData(searchInput.value,page)
})



