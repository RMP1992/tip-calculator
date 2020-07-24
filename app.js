const button = document.querySelector('button');
const input = document.querySelector('input');
const output = document.querySelector('.output');

button.addEventListener('click', calculateTip = () => {
    
    let cal = input.value * 0.15
    let tip = cal.toFixed(2)
    let heading = document.createElement('h1')
    heading.innerHTML = `You should tip £${tip} on the cost of £${input.value}`
    output.appendChild(heading)
    console.log(output)
    
})

