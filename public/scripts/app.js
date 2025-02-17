let allCountryArry = [
    { id: 1, img: "../imge/imge/turky/image 37.png", toreName: "تور آنتالیا", price: 45000000, score: 4.1, day: 3, night: 4, discount: true },
    { id: 2, img: "../imge/imge/malezi/image 39.png", toreName: 'تور دبی', price: 4.9, score: 65000000, day: 4, night: 5, discount: false },
    { id: 3, img: "../imge/imge/dubai/Frame 31.png", toreName: 'تور مالزی', price: 4.1, score: 70000000, day: 6, night: 5, discount: true },
    { id: 3, img: "../imge/imge/dubai/Frame 31.png", toreName: 'اصفهان', price: 4.4, score: 15000000, day: 6, night: 5, discount: true },
]

let headerImgArry = [
    { id: 1, nameCountry: "تایلند", capital: "پاتایا", imgSrc: "../imge/imge/image 2.png" },
    { id: 2, nameCountry: "امارات متحده عربی", capital: "دبی", imgSrc: "../imge/imge/dubai/RBP06201.jpg" },
    { id: 3, nameCountry: "ایتالیا", capital: "میلان", imgSrc: "../imge/imge/italy/view-Milan-Italy.webp" },
    { id: 4, capital: "مالزی", nameCountry: "کوالانپور", imgSrc: "../imge/imge/malezi/Malaysia-Kuala-Lumpur.jpg" },
    { id: 5, capital: "ایران", nameCountry: "اصفهان", imgSrc: "../imge/imge/esfahan/esfahan-header.jpg" },
]
let $ = document

let selectBar = $.querySelector('#fa-bar')
let selecMobileNav = $.querySelector('.mobile_nav')
let getDarkBlank = $.querySelector('.dark-blank')


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
getDarkBlank.addEventListener('click', function () {
    selecMobileNav.classList.add('right-[-208px]')
    selecMobileNav.classList.remove('right-0')
    closeBlank()
    navOpen = true
})

function openBlank() {
    getDarkBlank.classList.remove('hidden')
}
function closeBlank() {
    getDarkBlank.classList.add('hidden')
}

var arryIndex = 0
let nextPic = $.querySelector('.next-pic')
let lastPic = $.querySelector('.pervious-pic')
let getHeaderImg = $.querySelector('.header-img')
let capital = $.querySelector('.capital')
let nameCountry = $.querySelector('.nameCountry')
let pageNumber = $.querySelector('.page-number')
getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
capital.innerHTML = headerImgArry[arryIndex].capital
nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id

nextPic.addEventListener('click', function (e) {
    arryIndex++

    getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
    capital.innerHTML = headerImgArry[arryIndex].capital
    nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
    pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id

    lastPic.classList.remove('deactivate')
    lastPic.classList.add('active')
    if (arryIndex === headerImgArry.length - 1) {
        nextPic.classList.remove('active')
        nextPic.classList.add('deactivate')
    }
    e.preventDefault



})

lastPic.addEventListener('click', function () {
    arryIndex--
    getHeaderImg.setAttribute('src', headerImgArry[arryIndex].imgSrc)
    capital.innerHTML = headerImgArry[arryIndex].capital
    nameCountry.innerHTML = headerImgArry[arryIndex].nameCountry
    pageNumber.innerHTML = "0" + headerImgArry[arryIndex].id
    nextPic.classList.add('active')
    nextPic.classList.remove('deactivate')
    if (arryIndex === 0) {
        lastPic.classList.add('deactivate')
        lastPic.classList.remove('active')
        arryIndex = 0
    }
})