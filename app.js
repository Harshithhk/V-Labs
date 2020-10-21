var code = document.querySelector('.code')
var controller = document.querySelector('.controller')
var startBtn = document.querySelector('.rounded-button')
var num1 = document.querySelector('.num1')
var num2 = document.querySelector('.num2')

// START FUNCTION
const start =()=>{
    startBtn.classList.replace('rounded-button','hide')
    controller.classList.remove('hide')
    document.querySelector(`.hello0`).classList.add('highlight')
}

// CONTROLLERS
var ln=1;
var pl=0;
const next =()=>{
    if(ln!==11){
        document.querySelector(`.hello${ln}`).classList.add('highlight')
        if(ln!==0){
        document.querySelector(`.hello${pl}`).classList.remove('highlight')
        }
        if(ln == 3){
            num1.textContent="10"
            num2.textContent="0x7fff5694dc58"
        }
        pl=ln
        ln++
    }
    console.log(pl,ln) 
}
const previous =()=>{
    if(pl !=0 ){
        pl--
        ln--
        document.querySelector(`.hello${pl}`).classList.add('highlight')
        document.querySelector(`.hello${ln}`).classList.remove('highlight')
    }
    console.log(pl,ln)
}

// SEEDING DATA INTO CODE SECTION
var data =`#include <stdio.h>
	int main()
	{
 	  int num = 10;
   	printf("Value of variable num is: %d", num);
   	/* To print the address of a variable we use %p
   	 * format specifier and ampersand (&) sign just
   	 * before the variable name like &num.*/
   	printf("\\nAddress of variable num is: %p", &num);
  	 return 0;
    }` 

    var splittedData = data.split("\n")


    for(i=0; i<splittedData.length ; i++){
        var li = document.createElement('div')
        li.textContent=splittedData[i]
        li.className=`hello hello${i}`
        if(i>=3 && i<=9){
            li.classList.add('padding1')
        }
        if(i>=5 &&i<8){
            li.classList.add('comment')
        }
        code.appendChild(li)
    }

  
    console.log(code)