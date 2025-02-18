"use strict"

// landing page items 
let allCountryArry = [
    { id: 1, img: "../imge/imge/turky/image 37.png", toreName: "تور آنتالیا", price: 45000000, score: 4.1, day: 3, night: 4, discount: true },
    { id: 2, img: "../imge/imge/malezi/image 39.png", toreName: 'تور دبی', price: 4.9, score: 65000000, day: 4, night: 5, discount: false },
    { id: 3, img: "../imge/imge/dubai/Frame 31.png", toreName: 'تور مالزی', price: 4.1, score: 70000000, day: 6, night: 5, discount: true },
    { id: 3, img: "../imge/imge/dubai/Frame 31.png", toreName: 'اصفهان', price: 4.4, score: 15000000, day: 6, night: 5, discount: true },
]

// header img items
let headerImgArry = [
    { id: 1, nameCountry: "تایلند", capital: "پاتایا", imgSrc: "../imge/imge/image 2.png" },
    { id: 2, nameCountry: "امارات متحده عربی", capital: "دبی", imgSrc: "../imge/imge/dubai/RBP06201.jpg" },
    { id: 3, nameCountry: "ایتالیا", capital: "میلان", imgSrc: "../imge/imge/italy/view-Milan-Italy.webp" },
    { id: 4, capital: "مالزی", nameCountry: "کوالانپور", imgSrc: "../imge/imge/malezi/Malaysia-Kuala-Lumpur.jpg" },
    { id: 5, capital: "ایران", nameCountry: "اصفهان", imgSrc: "../imge/imge/esfahan/esfahan-header.jpg" },
]

// $ === document
let $ = document


let selectBar = $.querySelector('#fa-bar')   //select element fa-fa bar or burger btn
let selecMobileNav = $.querySelector('.mobile_nav')  // navigation bar in mobil 
let getDarkBlank = $.querySelector('.dark-blank')  // dark blank when nav open

// open bar and navigation event 
let navOpen = true
selectBar.addEventListener('click', function () {
    if (navOpen) {
        selecMobileNav.classList.remove('right-[-208px]')
        selecMobileNav.classList.add('right-0')
        openBlank()
        navOpen = false
    } else {
        selecMobileNav.classList.add('right-[-208px]')
        selecMobileNav.classList.remove('right-0')
        closeBlank()
        navOpen = true
    }
})
// when click on dark bg nav close
getDarkBlank.addEventListener('click', function () {
    selecMobileNav.classList.add('right-[-208px]')
    selecMobileNav.classList.remove('right-0')
    closeBlank()
    navOpen = true
})
// open dark bg
function openBlank() {
    getDarkBlank.classList.remove('hidden')
}
// close dark bg
function closeBlank() {
    getDarkBlank.classList.add('hidden')
}
// ///////////////////////////////////////////////////////

// for click and chang header img  
var arryIndex = 0  // index of pic
let nextPic = $.querySelector('.next-pic')  // next pic btn
let lastPic = $.querySelector('.pervious-pic')  // previous btn
let getHeaderImg = $.querySelector('.header-img')  // header img content
let capital = $.querySelector('.capital')  // captal of city in header
let nameCountry = $.querySelector('.nameCountry')  // country name in header
let pageNumber = $.querySelector('.page-number')  // page number
getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc) // get img src for event
capital.innerHTML = headerImgArry[arryIndex].capital  // inner for city
nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry  // inner content for country 
pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id  // set number for pages

// event for go next pic
nextPic.addEventListener('click', function (e) {
    arryIndex++ // index of pic++

    // change img content and img
    getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
    capital.innerHTML = headerImgArry[arryIndex].capital
    nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
    pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id
    // /////////////////////////// 

    // go last pic and next pic
    lastPic.classList.remove('deactivate')
    lastPic.classList.add('active')
    if (arryIndex === headerImgArry.length - 1) {
        nextPic.classList.remove('active')
        nextPic.classList.add('deactivate')
    }
    e.preventDefault
    // //////////////////
})
// ///////////////////////////

// event for previous page
lastPic.addEventListener('click', function () {
    arryIndex--  // index of pic--

    // change img content and img
    getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
    capital.innerHTML = headerImgArry[arryIndex].capital
    nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
    pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id
    // /////////////////////////// 

    // go last pic and next pic
    nextPic.classList.add('active')
    nextPic.classList.remove('deactivate')
    if (arryIndex === 0) {
        lastPic.classList.add('deactivate')
        lastPic.classList.remove('active')
        arryIndex = 0
    }
    // //////////////////
})