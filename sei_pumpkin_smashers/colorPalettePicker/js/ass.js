const myPalette = document.querySelector('#my-palette')
const colorPalette = document.querySelector('#color-palette')
const generate = document.querySelector('#generate')

const addColor = (event) => {
    const color = event.target.style.backgroundColor
    console.log('this should be the color:\n', color)
}

const makePalette = () => {
    // square removal loop
    // checks to see if there are any children of this element
    // if there are, enter the loop
    while (colorPalette.firstChild) {
        // remove the firstChild, this will cause the loop to run again until there are no more children
        colorPalette.removeChild(colorPalette.firstChild)
    }
    // square creation loop
    for (let i = 0; i < 150; i++) {
        // adding a console log helps you see if your loop is correct
        // console.log('make a square')
        // create squares
        const square = document.createElement('div')
        // id the squares(or give them a class)
        square.classList.add('square')
        // append
        colorPalette.appendChild(square)
        const red = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        const color = `rgb(${red}, ${green}, ${blue})`
        square.style.backgroundColor = color
        square.addEventListener('click', addColor)
    }
}

document.addEventListener('DOMContentLoaded', () => {
    generate.addEventListener('click', makePalette)
    makePalette()
})