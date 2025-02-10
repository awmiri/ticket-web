let allCountryArry = [
    { id: 1, img: "../imge/imge/turky/image 37.png", toreName: "تور آنتالیا", price: 45000000, score: 4.1, day: 3, night: 4 },
    { id: 2, img: "../imge/imge/malezi/image 39.png", toreName: 'تور دبی', price: 4.9, score: 65000000, day: 4, night: 5 },
    { id: 3, img: "../imge/imge/dubai/Frame 31.png", toreName: 'تور مالزی', price: 4.1, score: 70000000, day: 6, night: 5 }
]

let headerImgArry = [
    { id: 1, nameCountry: "تایلند", capital: "پاتایا", imgSrc: "../imge/imge/image 2.png" },
    { id: 2, nameCountry: "دبی", capital: "مارات متحده عربی", imgSrc: "../imge/imge/dubai/RBP06201.jpg" },
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