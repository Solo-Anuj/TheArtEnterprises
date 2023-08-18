var barIcon = document.getElementById('barIconImage');

barIcon.addEventListener('click', openmenubar);

function openmenubar() {
    document.getElementById('menubar').style.display = 'block';
    document.getElementById('navbar').style.display = 'none';
    document.getElementById('image1').style.display = 'none';

    document.getElementById('product2').style.display = 'none';

}

var crossbtn = document.getElementById('menu-close-btn');
crossbtn.addEventListener('click', closemenubar);

function closemenubar() {
    document.getElementById('menubar').style.display = 'none';
    document.getElementById('navbar').style.display = 'flex';
    document.getElementById('image1').style.display = 'block';
    document.getElementById('product2').style.display = 'grid';
}


//search


// products

// 1.batman
// 2.green man
// 3.red man
// 4.ninja turtle
// 5.swimming girl
// 6.stylish girl
// 7.dancing girl
// 8.robo girl
// 9.deadpool
// 10.spiderman
// 11.half venom
// 12.venom


var searchbar=document.getElementById('searchbar');
var productitem1=document.getElementById('product-item1').innerHTML;
var productitem2=document.getElementById('product-item2').innerHTML;
var productitem3=document.getElementById('product-item3').innerHTML;
var productitem4=document.getElementById('product-item4').innerHTML;
var productitem5=document.getElementById('product-item5').innerHTML;
var productitem6=document.getElementById('product-item6').innerHTML;
var productitem7=document.getElementById('product-item7').innerHTML;
var productitem8=document.getElementById('product-item8').innerHTML;
var productitem9=document.getElementById('product-item9').innerHTML;
var productitem10=document.getElementById('product-item10').innerHTML;
var productitem11=document.getElementById('product-item11').innerHTML;
var productitem12=document.getElementById('product-item12').innerHTML;

function followuserinput(){
    // document.getElementById('navbar').style.display = 'none';

    // document.getElementById('image1').style.display = 'none';
    document.getElementById('usersearch').style.display = 'flex';
    document.getElementById('product2').style.display = 'none';

    document.getElementById('userinput').innerHTML=`User Is Searching For "${searchbar.value}"`
    if (searchbar.value=='batman' || searchbar.value=='Batman' || searchbar.value=='BATMAN') {
    document.getElementById('useroutput').innerHTML=`${productitem1}`;
        
    } 
    else if (searchbar.value=='green man') {
    document.getElementById('useroutput').innerHTML=`${productitem2}`;
        
    } 
    else if (searchbar.value=='red man') {
    document.getElementById('useroutput').innerHTML=`${productitem3}`;
        
    } 
    else if (searchbar.value=='ninja turtle') {
    document.getElementById('useroutput').innerHTML=`${productitem4}`;
        
    } 
    else if (searchbar.value=='swimming girl') {
    document.getElementById('useroutput').innerHTML=`${productitem5}`;
        
    } 
    else if (searchbar.value=='stylish girl') {
    document.getElementById('useroutput').innerHTML=`${productitem6}`;
        
    } 
    else if (searchbar.value=='dancing girl') {
    document.getElementById('useroutput').innerHTML=`${productitem7}`;
        
    } 
    else if (searchbar.value=='robo girl') {
    document.getElementById('useroutput').innerHTML=`${productitem8}`;
        
    } 
    else if (searchbar.value=='deadpool') {
    document.getElementById('useroutput').innerHTML=`${productitem9}`;
        
    } 
    else if (searchbar.value=='spiderman') {
    document.getElementById('useroutput').innerHTML=`${productitem10}`;
        
    } 
    else if (searchbar.value=='half venom') {
    document.getElementById('useroutput').innerHTML=`${productitem11}`;
        
    } 
    else if (searchbar.value=='venom') {
    document.getElementById('useroutput').innerHTML=`${productitem12}`;
        
    } 
    
    else {
    document.getElementById('useroutput').innerHTML=`Not Found...`;
        
    }

}