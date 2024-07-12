const imagesDiv = document.getElementById("images")
console.log (images)

const resultDiv = document.getElementById('result')

const rnd = Math.random()>0.5
const arr = [rnd,!rnd]


let id = (Math.random() *6 +1) *10000
id = Math.floor(id)
const realImge = `https://whichfaceisreal.blob.core.windows.net/public/realimages/${id}.jpeg`
const fakeImg = `https://thispersondoesnotexist.com/`

const again = document.createElement("button")
again.innerText = 'Play Again'
again.onclick = function()
{
    location.reload()
}

for(const x of arr)
{
    const img =document.createElement("img")
    img.src = (x ? realImge : fakeImg)
    imagesDiv.append(img)
    img.onclick = function()
    {
        resultDiv.innerText = x ? 'correct 😀' : 'not correct 😥'
        imagesDiv.style.pointerEvents = 'none'
        resultDiv.append(again)
    }
}
