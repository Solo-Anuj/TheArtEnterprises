var searchbutton=document.getElementById('searchbutton');
searchbutton.addEventListener('click',opensearchbar);

// var searchbar=document.getElementById('searchbar');
// searchbar.addEventListener('blur' ,closesearchbar)

// when using laptop
function opensearchbar(){
    document.getElementById('searchbar').style.display='inline-block';

    document.getElementById('searchbar').style.visibility='visible';
    document.getElementById('barIcon').style.visibility='hidden';
    document.getElementById('logoName').style.visibility='hidden';
    document.getElementById('links').style.visibility='hidden';
    document.getElementById('searchbutton').style.display='none';
    document.getElementById('searchbutton2').style.display='inline-block';

}

// when using phone
var searchbutton3=document.getElementById('searchbutton3');
searchbutton3.addEventListener('click', opensearchbar2);
function opensearchbar2(){
    document.getElementById('searchbar').style.display='inline-block';
    document.getElementById('searchbar').style.visibility='visible';
    // document.getElementById('searchbar').style.width='372px';
    document.getElementById('barIcon').style.display='none';
    document.getElementById('logoName').style.display='none';
    document.getElementById('links').style.display='none';
    document.getElementById('searchbutton3').style.display='none';
    document.getElementById('navbar-item3').style.width='400px';
    document.getElementById('searchbutton2').style.display='inline-block';
    document.getElementById('navbar').style.justifyContent='center';

}


// function closesearchbar(){
//     document.getElementById('searchbar').style.display='inline-block';

//     document.getElementById('searchbar').style.visibility='hidden';
//     document.getElementById('barIcon').style.visibility='visible';
//     document.getElementById('logoName').style.visibility='visible';
//     document.getElementById('links').style.visibility='visible';
//     document.getElementById('searchbutton').style.display='inline-block';
//     document.getElementById('searchbutton2').style.display='';

// }