function start() {
    const numbers = document.querySelectorAll('.number')
    const output = document.querySelector('.display')

    let list_numbers = []
    let expression = null

    numbers.forEach(number => {
        number.addEventListener('click', (element) => {

            list_numbers.push(element.target.id) //add the id to array "list_numbers"
            let last_button = list_numbers.at(-1)//last element from array

            try {
                output.style.color = "black"
                output.style.fontSize = "1.5cm"
                switch (last_button) {
                    case "=":
                        list_numbers.pop('=') 
                        expression = Function("return " + list_numbers.join(""))()
                        list_numbers.length = 0
                        list_numbers.push(expression)
                        break
    
                    case "clear":
                        list_numbers.length = 0 //clear list_numbers
                        break
    
                    case "delete":
                        list_numbers.pop('delete')
                        list_numbers.pop(last_button)
                        break
                }
                expression % 1 != 0 ? output.innerHTML = expression.toFixed(2) : output.innerHTML = expression 
                // ^^^ check if the number is decimal, if true, this will show only 2 decimal places 
            } catch {
                output.style.color = "red"
                output.innerHTML = "ERROR"
                list_numbers.length = 0
            } 
        })
    }) 

}