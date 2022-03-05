const food = {
    menu: [{
            id: 1,
            title: "Tteokbokki",
            category: "Korea",
            price: 10.99,
            img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
            desc: `Spicy rice cakes, serving with fish cake.`,
        },
        {
            id: 2,
            title: "Chicken Ramen",
            category: "Japan",
            price: 7.99,
            img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
            desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
        },
        {
            id: 3,
            title: "Bibimbap",
            category: "Korea",
            price: 8.99,
            img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
            desc: `Boiling vegetables, serving with special hot sauce`,
        },
        {
            id: 4,
            title: "Dan Dan Mian",
            category: "China",
            price: 5.99,
            img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
            desc: `Dan dan noodle, serving with green onion `,
        },
        {
            id: 5,
            title: "Yangzhou Fried Rice",
            category: "China",
            price: 12.99,
            img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
            desc: `Yangzhou style fried rice, serving with bean and pickles `,
        },
        {
            id: 6,
            title: "Onigiri",
            category: "Japan",
            price: 9.99,
            img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
            desc: `Rice Sandwich, serving with soy sauce`,
        },
        {
            id: 7,
            title: "Jajangmyeon",
            category: "Korea",
            price: 15.99,
            img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
            desc: `Black bean sauce noodle, serving with green onion `,
        },
        {
            id: 8,
            title: "Ma Yi Shang Shu",
            category: "China",
            price: 12.99,
            img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
            desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
        },
        {
            id: 9,
            title: "Doroyaki",
            category: "Japan",
            price: 3.99,
            img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
            desc: `Red bean paste dessert, serving with honey.`,
        },
    ]
};
//----------------------------------------------------------------------------------------
// card1
let cardTitle1 = document.getElementById('cardTitle1')
cardTitle1.innerHTML = food.menu[0].title;

let price1 = document.getElementById('price1')
price1.innerHTML = food.menu[0].price;

let img1;
img1 = food.menu[0].img;
document.getElementById("img1").src = img1

let desc1 = document.getElementById('desc1')
desc1.innerHTML = food.menu[0].desc;
//----------------------------------------------------------------------------------------
// card2
let cardTitle2 = document.getElementById('cardTitle2')
cardTitle2.innerHTML = food.menu[1].title;

let price2 = document.getElementById('price2')
price2.innerHTML = food.menu[1].price;

let img2;
img2 = food.menu[1].img;
document.getElementById("img2").src = img2

let desc2 = document.getElementById('desc2')
desc2.innerHTML = food.menu[2].desc;
//----------------------------------------------------------------------------------------
// card3
let cardTitle3 = document.getElementById('cardTitle3')
cardTitle3.innerHTML = food.menu[2].title;

let price3 = document.getElementById('price3')
price3.innerHTML = food.menu[2].price;

let img3;
img3 = food.menu[2].img;
document.getElementById("img3").src = img3

let desc3 = document.getElementById('desc3')
desc3.innerHTML = food.menu[2].desc;
//----------------------------------------------------------------------------------------
// card4
let cardTitle4 = document.getElementById('cardTitle4')
cardTitle4.innerHTML = food.menu[3].title;

let price4 = document.getElementById('price4')
price4.innerHTML = food.menu[3].price;

let img4;
img4 = food.menu[3].img;
document.getElementById("img4").src = img4

let desc4 = document.getElementById('desc4')
desc4.innerHTML = food.menu[3].desc;
//----------------------------------------------------------------------------------------
// card5
let cardTitle5 = document.getElementById('cardTitle5')
cardTitle5.innerHTML = food.menu[4].title;

let price5 = document.getElementById('price5')
price5.innerHTML = food.menu[4].price;

let img5;
img5 = food.menu[4].img;
document.getElementById("img5").src = img5

let desc5 = document.getElementById('desc5')
desc5.innerHTML = food.menu[4].desc;
//----------------------------------------------------------------------------------------
// card6
let cardTitle6 = document.getElementById('cardTitle6')
cardTitle6.innerHTML = food.menu[5].title;

let price6 = document.getElementById('price6')
price6.innerHTML = food.menu[5].price;

let img6;
img6 = food.menu[5].img;
document.getElementById("img6").src = img6

let desc6 = document.getElementById('desc6')
desc6.innerHTML = food.menu[5].desc;
//----------------------------------------------------------------------------------------
//card7
let cardTitle7 = document.getElementById('cardTitle7')
cardTitle7.innerHTML = food.menu[6].title;

let price7 = document.getElementById('price7')
price7.innerHTML = food.menu[6].price;

let img7;
img7 = food.menu[6].img;
document.getElementById("img7").src = img7

let desc7 = document.getElementById('desc7')
desc7.innerHTML = food.menu[6].desc;
//----------------------------------------------------------------------------------------
// card8
let cardTitle8 = document.getElementById('cardTitle8')
cardTitle8.innerHTML = food.menu[7].title;

let price8 = document.getElementById('price8')
price8.innerHTML = food.menu[7].price;

let img8;
img8 = food.menu[7].img;
document.getElementById("img8").src = img8

let desc8 = document.getElementById('desc8')
desc8.innerHTML = food.menu[7].desc;
//----------------------------------------------------------------------------------------
// card9
let cardTitle9 = document.getElementById('cardTitle9')
cardTitle9.innerHTML = food.menu[8].title;

let price9 = document.getElementById('price9')
price9.innerHTML = food.menu[8].price;

let img9;
img9 = food.menu[8].img;
document.getElementById("img9").src = img9

let desc9 = document.getElementById('desc9')
desc9.innerHTML = food.menu[8].desc;
//----------------------------------------------------------------------------------------

let korea1 = document.getElementById('display1')
let japan1 = document.getElementById('display2')
let korea2 = document.getElementById('display3')
let china1 = document.getElementById('display4')
let china2 = document.getElementById('display5')
let japan2 = document.getElementById('display6')
let korea3 = document.getElementById('display7')
let china3 = document.getElementById('display8')
let japan3 = document.getElementById('display9')








let btnAll = document.getElementById('btnAll')

btnAll.addEventListener('click', function() {
    korea1.style.cssText = ""
    japan1.style.cssText = ""
    korea2.style.cssText = ""
    china1.style.cssText = ""
    china2.style.cssText = ""
    japan2.style.cssText = ""
    korea3.style.cssText = ""
    china3.style.cssText = ""
    japan3.style.cssText = ""
});

//----------------------------------------------------------------------------------------
let btnKorea = document.getElementById('btnKorea')

btnKorea.addEventListener('click', function() {

    korea1.style.cssText = ""
    japan1.style.cssText = "display: none;"
    korea2.style.cssText = ""
    china1.style.cssText = "display: none;"
    china2.style.cssText = "display: none;"
    japan2.style.cssText = "display: none;"
    korea3.style.cssText = ""
    china3.style.cssText = "display: none;"
    japan3.style.cssText = "display: none;"


});
//----------------------------------------------------------------------------------------
let btnJapan = document.getElementById('btnJapan')
btnJapan.addEventListener('click', function() {

    korea1.style.cssText = "display: none;"
    japan1.style.cssText = ""
    korea2.style.cssText = "display: none;"
    china1.style.cssText = "display: none;"
    china2.style.cssText = "display: none;"
    japan2.style.cssText = ""
    korea3.style.cssText = "display: none;"
    china3.style.cssText = "display: none;"
    japan3.style.cssText = ""


});

//----------------------------------------------------------------------------------------
let btnChina = document.getElementById('btnChina')
btnChina.addEventListener('click', function() {

    korea1.style.cssText = "display: none;"
    japan1.style.cssText = "display: none;"
    korea2.style.cssText = "display: none;"
    china1.style.cssText = ""
    china2.style.cssText = ""
    japan2.style.cssText = "display: none;"
    korea3.style.cssText = "display: none;"
    china3.style.cssText = ""
    japan3.style.cssText = "display: none;"
});