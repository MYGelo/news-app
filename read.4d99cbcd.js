function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},i={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in a)return a[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=n);var s=n("7Y9D8"),r=n("3oIZ9"),o=n("ivQiK"),d=n("iyfrJ"),l=n("jV1Ao"),c=n("1FEMK");o=n("ivQiK");n("1wH5c");var g=n("krGWQ"),h=n("bnq7P");n("dmjU2");var m=n("2lb2Y");const w=[{dateOfReading:"24.02.2023",readNews:[{id:"nyt://article/fe6a2ccd-b317-5255-9cb8-797151f0bb06",category:"News",title:"Men’s Wear Puts on the Dog",img:"https://static01.nyt.com/images/2023/01/12/fashion/11pitti-pet10-flhz/11pitti-pet10-flhz-articleLarge.jpg",description:"A pavilion dedicated to the multibillion-dollar market in pet apparel makes its debut at the world’s largest men’s wear trade show.",date:"2023/01/12",link:"https://www.nytimes.com/2023/01/12/style/mens-wear-puts-on-the-dog.html",favorite:!0,wasRead:""},{id:"nyt://article/efad5094-18ef-5bec-9912-1269354e4ad5",category:"News",title:"Puppies on Prozac: How to Handle Your Pet’s Anxiety",img:"https://static01.nyt.com/images/2022/11/15/well/10Well-NL-Pet-Meds/10Well-NL-Pet-Meds-articleLarge.jpg",description:"Veterinarians say they have seen an increasing number of pets experiencing mental distress. Here’s how to spot the signs.",date:"2022/11/11",link:"https://www.nytimes.com/2022/11/10/well/pet-anxiety-meds.html",favorite:!0,wasRead:""},{id:"nyt://article/25bfc8fb-0081-5105-a9b7-e8dd8ff991df",category:"News",title:"Your Cat Might Not Be Ignoring You When You Speak",img:"https://static01.nyt.com/images/2022/11/29/science/00tb-cats1/merlin_194921559_c9e53b04-169a-4144-bd76-9ec2d987c35c-articleLarge.jpg",description:"Cats have a reputation for being aloof, but a new study has found that their relationships with their owners may be stronger than we thought ...",date:"2022/11/12",link:"https://www.nytimes.com/2022/11/12/science/cat-talking-owners-voice-dog.html",favorite:!0,wasRead:""}]},{dateOfReading:"23.02.2023",readNews:[{id:"nyt://article/929fb517-f957-5ef8-ac68-97361f20fb75",category:"News",title:"Gary Oldman Found James Dean and His Wife at a Gallery",img:"https://static01.nyt.com/images/2022/12/11/arts/11my-ten-oldman-wen/11my-ten-oldman-wen-articleLarge.jpg",description:"The Oscar-winning star of “Slow Horses” on Apple TV+ likes comedians in dramas, makes photos the hard way and is still discovering the Beatl ...",date:"2022/12/05",link:"https://www.nytimes.com/2022/12/05/arts/television/gary-oldman-slow-horses.html",favorite:!0,wasRead:""},{id:"nyt://article/d4b2d7c2-4f96-58e6-8143-1ea0ab5d495a",category:"News",title:"Deforestation Brings Bat-Borne Virus Home to Roost",img:"https://static01.nyt.com/images/2022/11/29/science/16hendra1/16hendra1-articleLarge.jpg",description:"Habitat loss and food shortages have pushed bats into closer proximity to horses and humans, fueling Hendra virus spillover, a new study sug ...",date:"2022/11/16",link:"https://www.nytimes.com/2022/11/16/health/deforestation-bats-hendra-virus.html",favorite:!0,wasRead:""},{id:"nyt://article/4d46843f-798e-5e8b-bff2-7414314c72a2",category:"News",title:"The Horse Who Reignited New York’s Carriage Ride Controversy Has Died",img:"https://static01.nyt.com/images/2022/10/17/multimedia/17ny-horse-1-c8b5/17ny-horse-1-c8b5-articleLarge.jpg",description:"Carriage rides have charmed tourists and drawn critics since the 19th century. A horse’s collapse on a Midtown street in August revived call ...",date:"2022/10/17",link:"https://www.nytimes.com/2022/10/17/nyregion/carriage-ride-horse-dead.html",favorite:!0,wasRead:""}]},{dateOfReading:"22.02.2023",readNews:[{id:"undefined",category:"Guides",title:"How to Get Holiday Coziness, Year-Round",img:"https://static01.nyt.com/images/2022/11/24/fashion/23pilar-book2/23pilar-book2-articleLarge.jpg",description:"The media power couple Pilar Guzmán and Chris Mitchell shared their secrets to crafting an inviting home for the festive season and beyond.",date:"2022/11/24",link:"https://www.nytimes.com/2022/11/24/style/cozy-holiday-design-tips.html",favorite:!0,wasRead:""}]}];localStorage.setItem("read",JSON.stringify(w));c=n("1FEMK");e(s).Loading.pulse(),(0,d.defaultLocalStorage)(),(0,d.headerLogic)(),(0,l.addModalOpenListeners)(),(0,d.headerLogic)(),(0,c.addListenersForMobileHeader)(),(0,c.viewportWidthCheck)(),(0,o.currentLinkUnderline)(),(0,r.addEventListenerForBurgerBtn)(),(0,c.searchByForm)(),function(){if(""!==localStorage.read&&void 0!==localStorage.read&&null!==localStorage.read){const e=w.map((({dateOfReading:e,readNews:t})=>`\n        <li class="date__item">\n        <div class="date__click-container">\n            <h3 class="date__title">${e}</h3>\n            <span date__marker>&#11167</span>\n        </div>\n            <ul class="date__news-list render-container">${t.map((({id:e,category:t,wasRead:a,img:i,imgAlt:n,title:s,description:r,date:o,favorite:d,link:l})=>{if(localStorage.getItem("read"))return`\n                <li class="news__item card" data-id=${e}>\n                <span class="news__category is-hidden">${t}</span>\n                <span class="news__read is-hidden"></span>\n                <div class="news__container-img">\n                \n                <button class="news__favorite">Add to favorite</button>\n                <img src="${i}" alt="${n}" class="news__img"/>\n                </div>\n                <h3 class="news__title">${s}</h3>\n                <p class="news__abstract">${r}</p>\n                \n                <span class="news__date">${o.replaceAll("-","/")}</span>\n                <a href="${l}" class="news__link" target = "_blank">Read more</a>\n            </li>\n        `})).join("")}\n        </ul>\n        </li>`)).join("");g.refs.renderContainerReadPage.innerHTML=e,(0,m.addNewsToReadArrayInLocalStorage)(),(0,h.addNewsToFavoriteArrayInLocalStorage)()}}(),window.setTimeout(e(s).Loading.remove(),5e3);
//# sourceMappingURL=read.4d99cbcd.js.map
