document.addEventListener('DOMContentLoaded', ()=> {
    let userInput = document.querySelector("#text-input")
    let result = document.querySelector("#result")
    document.getElementById("check-button").onclick = function(){
        const inputValue = userInput.value.trim().replace(/[\s.,\-_()\/\\]/g, "", ""); 

        if (inputValue === "") {
            alert("Please input a value");
            return;
        }
        
        if (isPalindrome(inputValue)){
            result.innerText = `${inputValue} is a palindrome`
        } else {
            result.innerText = `${inputValue} is not a palindrome`
        }

        function isPalindrome(str) {
            str = str.toLowerCase()
            console.log(str)
            const reverserStr = str.split("").reverse().join('')
            return str === reverserStr
        }
    }
})