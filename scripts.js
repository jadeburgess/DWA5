// scripts.js

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");


form.addEventListener("submit", (event) => {
    event.preventDefault()
    const entries = new FormData(event.target)
    const { dividend, divider} = Object.fromEntries(entries)
    
    if (dividend === 'YOLO' && divider === '+++') { //checks values of dividend and divider inputs are = to specified strings 'YOLO' and '+++'. Condistion is used to identify a critical error scenario
        document.body.innerHTML = "<h1>Something critical went wrong. Please reload the page.</h1>" //replaces content of entire body element with specified HTML string. Indicates critical error to user
        console.error("Critical error occurred. Page reloaded.") //logs error messafe to console indicatinf that critical error as occured and page should be reloaded
        console.trace() //logs current call stack to console, providing additional infor about error
      } else {//if condition in if statement is not met (inputs do not = 'YOLO' or '+++'), code will proceed to else block
        const dividendValue = parseInt(dividend.trim()); //parses dividendValue to integer. Trim function applied to remove leading and trailing whitespaces
        const dividerValue = parseInt(divider.trim()); //parses dividerValue to integer. Trim function applied to remove leading and trailing whitespaces
    
        if (!isNaN(dividendValue) && !isNaN(dividerValue)) { //Checks both values are not NaN to ensure inputs are valid numbers
          if (dividerValue !== 0) { //checks if dividerValue is not = to 0. Ensures that division by 0 is not attempted
               if (dividerValue > 0) { //checks if dividerValue is > than 0. Ensures that division is performed only when divider is a positive number
                  const divisionResult = dividendValue / dividerValue //calculates the division result by dividing the divident value by divider value and assigns it to var divisionResult
                  result.innerText = Math.floor(divisionResult) //Math.floor function used to round down the resut to nearest whole number
               } else {
                  result.innerText = "Division not performed. Invalid number provided. Try again." //if false, sets innerText to error message when invalid number is provided as divider
                  console.error("Invalid number provided for the divider") //logs error message to console when invalid number is provided as divider
                  console.trace() //logs current call stack to console, provides additional info about error
                  }
              } else {
                  result.innerText = "Division not performed. Invalid number provided. Try again." //sets innerText of result element to error message when the divider value is 0
              }
      } else { 
          result.innerText = "invalid input" //sets innerText of result element to error message when dividend or divider value is NaN, indicating invalid input
      }
    
      }
    
    })
  