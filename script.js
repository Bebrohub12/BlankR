// fetch("https://fakestoreapi.com/products")

let mainDiv = document.querySelector(".main")
let screen2 = document.querySelector(".screen2")

window.onload = () => {
    fetch("https://fakestoreapi.com/products")
        .then((responce) => { return responce.json() })
        .then((result) => { console.log(result); showResult(result); PrintDeatiles(result); })

}

function showResult(result) {

    for (let i = 0; i < result.length; i++) {
        let div = document.createElement("div")
        div.classList.add("div");
        let img = document.createElement("img")
        img.classList.add("img-box");
        img.src = result[i].image
        div.appendChild(img)

        let title = document.createElement("h3")
        let price = document.createElement("p")

        title.innerHTML = result[i].title
        price.innerHTML = result[i].price

        div.append(title)
        div.append(price)

        mainDiv.append(div)

    }
}




function PrintDeatiles(result) {

    // console.log(result);
    let images = document.querySelectorAll(".img-box");
    images.forEach((allimg) => {
        allimg.addEventListener("click", function (event) {

            mainDiv.style.display = "none"
            screen2.style.display = "block"

            let div = document.createElement("div")
            div.classList.add("img-box2")

            let img = document.createElement("img")
            img.src = allimg.src
            img.classList.add("image")

            let div1 = document.createElement("div")
            div1.classList.add("description-box")

            div.append(img)
            screen2.append(div)

            for (let i = 0; i < result.length; i++) {
                if (result[i].image === allimg.src) {
                    // console.log(result[i].title)

                    let title = result[i].title
                    let price = result[i].price
                    let description = result[i].description
                    let category = result[i].category
                    let count = result[i].rating.count
                    let rate = result[i].rating.rate

                    let h2 = document.createElement("h2")
                    h2.innerHTML = `Title : ${title}`
                    let p1 = document.createElement("p")
                    p1.innerHTML = `Price : ${price}$`
                    let p2 = document.createElement("p")
                    p2.innerHTML = `Description : ${description}`
                    let p3 = document.createElement("p")
                    p3.innerHTML = `Category : ${category}`

                    let p4 = document.createElement("p")
                    p4.innerHTML = `Rateing : ${rate}`
                    let p5 = document.createElement("p")
                    p5.innerHTML = `Count : ${count}`



                    div1.append(h2)
                    div1.append(p1)
                    div1.append(p2)
                    div1.append(p3)
                    div1.append(p4)
                    div1.append(p5)
                    screen2.append(div1)



                }
            }


        })
    })

}









