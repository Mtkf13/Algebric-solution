equation1 = document.querySelector(".equation1")
button1 = document.querySelector(".button1")

equation2 = document.querySelector(".equation2")
button2 = document.querySelector(".button2")


equation3 = document.querySelector(".equation3")
button3 = document.querySelector(".button3")
equation4 = document.querySelector(".equation4")
button4 = document.querySelector(".button4")
equation5 = document.querySelector(".equation5")
button5= document.querySelector(".button5")
equation6 = document.querySelector(".equation6")
button6 = document.querySelector(".button6")
console.log(equation1)
console.log(button1)
console.log(equation2)
console.log(button2)
console.log(equation3)
console.log(button3)
console.log(equation4)
console.log(button4)
console.log(equation4)
console.log(button4)
console.log(equation5)
console.log(button5)

function handleClick(e) {
	if (e.target.classList[1] === "button1") {
		equation1.classList.toggle("show")	
	} else if (e.target.classList[1] === "button2") {
		equation2.classList.toggle("show")
	}
	else if (e.target.classList[1] === "button3") {
		equation3.classList.toggle("show")
	}
	else if (e.target.classList[1] === "button4") {
		equation4.classList.toggle("show")
	}
	else if (e.target.classList[1] === "button5") {
		equation5.classList.toggle("show")
	}
	else if (e.target.classList[1] === "button6") {
		equation6.classList.toggle("show")
	}

}
