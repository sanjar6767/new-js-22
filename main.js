let modal = document.getElementById("modal")

let cars = [
    {
        name: "nexia",
        price: 10000,
        year: 2000,
        color: "black",
        img: "https://avatars.mds.yandex.net/get-autoru-vos/2155411/c55b4555168e160c19d47dd5336682eb/1200x900"
    },
    {
        name: "spark ",
        price: 10000,
        year: 2011,
        color: "red",
        img: "https://avatars.mds.yandex.net/get-autoru-vos/2158541/a39bcbbd88ec3ff2d59fa3bd0552875d/1200x900"
    },
    {
        name: "Cobalt",
        price: 15000,
        year: 2019,
        color: "silver",
        img: "https://avatars.mds.yandex.net/get-entity_search/2361982/1219774659/S600xU_2x",
    },
    {
        name: "Damas",
        price: 8000,
        year: 2010,
        color: "white",
        img: "https://i.pinimg.com/originals/aa/8f/df/aa8fdf40c4d2aeef995c36e92109b4ff.jpg",
    },
    {
        name: "Nexia 3",
        price: 12000,
        year: 2018,
        color: "blue",
        img: "https://avatars.mds.yandex.net/get-autoru-vos/1966039/9b138385b33b05ecd88975bfee682d61/1200x900",
    },
    {
        name: "jantra",
        price: 13000,
        year: 2016,
        color: "black",
        img: "https://fergana.media/siteapi/media/images/d8d5b8d4-344d-4d8a-9c9f-8df546e924e8.jpeg",
    }

]
let kirish = document.getElementById("kirish")
let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let input4 = document.getElementById("input4")
let input5 = document.getElementById("input5")
let btn = document.getElementById("btn")
let search = document.getElementById("search")
let select = document.getElementById("select")
let modalContent = document.getElementById("modal-content")
let cancelModal = document.getElementById("cancel")



modal.addEventListener("click",()=>{
    modal.style.display = "none"
})
cancel.addEventListener("click",()=>{
    modal.style.display = "none"
})
modalContent.addEventListener("click",(e)=>{
    e.stopPropagation()
})

function chiq(arr) {
    kirish.innerHTML = ""
    arr.forEach((car, index) => {
        let divvv = document.createElement("div")
        divvv.innerHTML = `
        <img width="200px" src="${car.img}">
        <h1>${car.name}</h1>
        <p>prise:${car.price}$</p>
        <p>year:${car.year}</p>
        <div class="ivivi"></div>
        <button class = "butbtn">dalete</button>
        <button class = "bbtn">edit</button>
     `
        

        let i = divvv.querySelector(".ivivi")
        i.className = "divvv"
        i.style.backgroundColor = car.color
        divvv.style.border = "solid 1px black"
        divvv.style.width = "210px"
        let but = divvv.querySelector(".butbtn")
        but.addEventListener("click", () => {
            cars.splice(index, 1)
            chiq(cars)

        })

        divvv.addEventListener("click",()=>{
            document.getElementById("modal").style.display = "flex"
            modalContent.innerHTML = `
            <img style="margin-left: 150px ;" width="670px" src="${car.img}" alt="">
            <h2 style="text-align: center;color:${car.color} ">${car.name}</h2>
            <p style="text-align: center;">price:${car.price}$</p>
            <p style="text-align: center;">year:${car.year}</p>
            `
        })
        kirish.appendChild(divvv)
        divvv.appendChild(i)
    })



}
chiq(cars)


search.addEventListener("input", (e) => {
    kirish.innerHTML = ""
    let ar = cars.filter((car) => {
        return car.name.toLowerCase().includes(e.target.value.toLowerCase())

    })
    chiq(ar)
    console.log(ar)
})

select.addEventListener("change", (e) => {
    if (e.target.value === "all") {
        chiq(cars)
    }
    else if (e.target.value === "1999") {
        let nini = [...cars].filter((car) => {
            return car.year < 2001
        })
        chiq(nini)
    }
    else if (e.target.value === "2010") {
        let nene = [...cars].filter((car) => {
            return car.year > 2015
        })
        chiq(nene)
    }

})

btn.addEventListener("click", () => {
    let newc = {
        name: input1.value,
        price: Number(input2.value),
        year: Number(input3.value),
        color: input4.value,
        img: input5.value,
    }
    chiq(cars)
    cars.push(newc)
})