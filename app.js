var code = document.querySelector('.code')
var controller = document.querySelector('.controller')
var startBtn = document.querySelector('.rounded-button')
var num1 = document.querySelector('.num1')
var num2 = document.querySelector('.num2')
var output1 = document.querySelector('.output1')
var output2 = document.querySelector('.output2')
var img = document.querySelector('.img')
var text = document.querySelector('.text')



// START FUNCTION
const start =()=>{
    startBtn.classList.replace('rounded-button','hide')
    controller.classList.remove('hide')
    
    document.querySelector(`.hello0`).classList.add('highlight')
    text.innerHTML=splitterExpl[0]

    window.addEventListener('keydown',(e)=>{
    console.log(e)
    
     if (e.key == 'ArrowUp') {
        previous()
    }
    else if (e.key == 'ArrowDown') {
        next()
    }})
}

// RESET FUNCTION
const reset =()=>{
    controller.classList.remove('hide')
    document.querySelector(`.hello0`).classList.add('highlight')
    document.querySelector(`.hello${pl}`).classList.remove('highlight')

    num1.textContent="---"
    num2.textContent="---"
    output1.textContent=">"
    output2.textContent=""
    num1.classList.remove('blip')
    num2.classList.remove('blip')
    output1.classList.remove('flash')
    output2.classList.remove('flash')
    img.classList.add('img2')

    text.innerHTML='<p>*Understanding the concept of Pointers*</p>'
    
    ln=1
    pl=0
}

// CONTROLLERS
var ln=1
var pl=0
// NEXT FUNCTION
const next =()=>{
    if(ln!==11){
        document.querySelector(`.hello${ln}`).classList.add('highlight')
        document.querySelector(`.hello${pl}`).classList.remove('highlight')

        if(ln == 3){
            num1.textContent="10"
            num2.textContent="0x7fff5694dc58"
            num1.classList.add('blip')
            num2.classList.add('blip')
            img.classList.remove('img2')
        }
        if(pl==2){
            text.innerHTML=splitterExpl[1]
        }
        if(pl==3){
            output1.textContent=">Value of variable num is: 10"
            text.innerHTML=splitterExpl[2]
            
        }
        if(pl==4){
            output2.textContent=">Address of variable num is: 0x7fff5694dc58"
            text.innerHTML=splitterExpl[3]
        }
        console.log(pl,ln) 
        pl=ln
        if(ln == 4){
            ln=7
        }
        ln++
    }
    console.log(pl,ln) 
}
const previous =()=>{
    if(pl !=0 ){
        pl--
        ln--
        if (pl ==2){
            text.innerHTML=splitterExpl[0]
        }
        if(ln == 8){
            pl=4  
        }
        if(pl==3 && ln==7){
            text.innerHTML=splitterExpl[1]
            output1.innerHTML=""
            ln=4
        }   
        if(pl==2){
            num1.classList.remove('blip')
            num2.classList.remove('blip')
            num1.textContent="---"
            num2.textContent="---"
            img.classList.add('img2')
        }
        if(pl==4){
             output2.textContent=""
            text.innerHTML=splitterExpl[2]
        }

        document.querySelector(`.hello${pl}`).classList.add('highlight')
        document.querySelector(`.hello${ln}`).classList.remove('highlight') 
    }
    console.log(pl,ln)
}

// DATA FOR CODE SECTION
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

// DATA FOR EXPLAINATION SECTION
var explaination=`<b>line1:</b> <p>Including standard input output header file</p>
<b>line4: </b><p>Declaration and assignment of variable of <b>type integer</b> and <b>name num</b></p>
<b>line5: </b><p>Print Statement which prints the <b>value</b> of the variable <b>num</b></p><p><b>%d</b> tells printf that the corresponding argument is to be treated as an integer value;</p>
<b>line9: </b><p>Print Statement which prints the <b>address</b> of the variable <b>num</b></p><p><b>%p</b> tells printf that the corresponding argument to be printed is of a pointer type data;</p>`

    var splittedData = data.split("\n")
    var splitterExpl = explaination.split("\n")

// SEEDING CODE DATA
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