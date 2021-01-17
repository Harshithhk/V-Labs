var code = document.querySelector('.code')
var controller = document.querySelector('.controller')
var startBtn = document.querySelector('.rounded-button')
var num1 = document.querySelector('.num1')
var num2 = document.querySelector('.num2')
var output1 = document.querySelector('.output1')
var output2 = document.querySelector('.output2')
var img = document.querySelector('.img')
var text = document.querySelector('.text')
var da = document.querySelector('.da')



// START FUNCTION
const start =()=>{
    startBtn.classList.replace('rounded-button','hide')
    controller.classList.remove('hide')
    
    document.querySelector(`.hello0`).classList.add('highlight')
    text.innerHTML=splitterExpl[0]

    window.addEventListener('keydown',(e)=>{
    
     if (e.key == 'ArrowUp') {
        previous()
    }
    else if (e.key == 'ArrowDown') {
        next()
    }})
    ln=1
    pl=0
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
var enteredRecursion = false
var rcount = 0;
var end = false

const highlighter=(a,b,type)=>{
    document.querySelector(`.hello${a}`).classList.add(type)
    document.querySelector(`.hello${b}`).classList.remove(type)
}
// NEXT FUNCTION
const next =()=>{

    if(enteredRecursion && !end){
        rcount+=1
        console.log(rcount);
        highlighter(ln,pl,'highlight')
        pl=ln
        if(rcount == 2 || rcount ==6 || rcount == 10||rcount == 14){
            ln = 5
        }
        if(rcount == 4 || rcount ==8 || rcount == 12||rcount == 16){
            ln = 2
        }
        if(rcount == 19){
            ln = 10
        }
        if(rcount == 22){
            end = true
        }
        ln++
    }

    if(!enteredRecursion){
        highlighter(ln,pl,'highlight')
        
        pl=ln 
        if(ln==11){
        enteredRecursion = true
        // pl= 2
       ln = 2
        }
        if(ln!==11){
        ln++
        }
        if(ln==2){
            ln=9
            pl=1
        }
    }

    

    
    
    
    
    



    // if(ln!==11){
        

    //     if(ln == 3){
    //         num1.textContent="10"
    //         num2.textContent="0x7fff5694dc58"
    //         num1.classList.add('blip')
    //         num2.classList.add('blip')
    //         img.classList.remove('img2')
    //         text.innerHTML=splitterExpl[1]
    //         window.scrollTo({
    //             top:90,
    //             behavior:'smooth'
    //         })
    //     }
    //     if(ln==4){
    //         output1.textContent=">Value of variable num is: 10"
    //         text.innerHTML=splitterExpl[2]
            
    //     }
    //     if(ln==8){
    //         output2.textContent=">Address of variable num is: 0x7fff5694dc58"
    //         text.innerHTML=splitterExpl[3]
    //     }
    //     
    //     if(ln == 4){
    //         ln=7
    //     }
    //     
    // }
}

const hide=()=>{
    start()
    document.querySelector('.rounded-button-after').classList.add("hide")
    document.querySelector('.blurr').classList.add("hide")
    document.querySelector('.up').classList.remove("hide")
}

// DATA FOR CODE SECTION
var data =`#include <iostream>
using namespace std;
//Factorial function
int factorial(int n) {
   if (n <= 1)
        return 1;
   else 
       return n*factorial(n-1);
}
int main() {
   int num = 5;
   cout<<"Result : "<<factorial(num);
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
        console.log(li.textContent,i)
        li.className=`hello hello${i}`
        if(i==4 || i==6 || i==10 || i==11 || i==12){
            li.classList.add('padding1')
        } 
        if(i==5 || i==7){
           li.classList.add('padding2') 
        }
        if(i==2){
            li.classList.add('comment')
        }
        
        da.appendChild(li)
    }