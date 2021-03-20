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
    
     
    if (e.key == 'ArrowDown') {
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

   
    output1.textContent=">"
    output2.textContent=""
    document.querySelector(`.numxp1`).innerHTML = "" 
    document.querySelector(`.numxp2`).innerHTML = ""
    document.querySelector(`.numxp3`).innerHTML = ""
    document.querySelector(`.numxp4`).innerHTML = ""
    document.querySelector(`.numxp5`).innerHTML = ""
    output1.classList.remove('flash')
    output2.classList.remove('flash')
    text.innerHTML='<p>Understanding the concept of <b>Recursion</b> with an example program to calculate the factorial of a given number </p>'
     enteredRecursion=false
     rcount=0
     fact = 5
     factcount = 1
     end = false

    const sums = document.querySelectorAll('.sum')
    for(let sum of sums){
        sum.classList.add('hide')
    }
    const rs = document.querySelectorAll('.arrowrotations')
            for(let r of rs){
                r.classList.remove('rotations')
            }
    
    ln=1
    pl=0
}

// CONTROLLERS
var ln=1
var pl=0
var enteredRecursion = false
var rcount = 0;
var end = false
var fact = 5
var factcount = 1

const highlighter=(a,b,type)=>{
    document.querySelector(`.hello${a}`).classList.add(type)
    document.querySelector(`.hello${b}`).classList.remove(type)
}
// NEXT FUNCTION
const next =()=>{

    if(pl==0){
        text.innerHTML=splitterExpl[1]
    }
    

    if(enteredRecursion && !end){
        rcount+=1
        console.log(rcount);
        highlighter(ln,pl,'highlight')
        pl=ln

        if(rcount == 1){
            text.innerHTML = splitterExpl[4]
        }
        if(rcount == 2 || rcount ==6 || rcount == 10||rcount == 14){
            ln = 5
        }
        if(rcount == 4 || rcount ==8 || rcount == 12||rcount == 16){
            // <span> factorial</span>(1-0) 
            ln = 2
            document.querySelector(`.sum${factcount+1}`).classList.remove('hide')
            document.querySelector(`.numxp${factcount}`).innerHTML = `${fact} * <span> factorial</span>(${fact}-1) `
            fact --
            factcount++

        }
        if(rcount == 19){
            ln = 10
            document.querySelector(`.numxp${factcount}`).innerHTML = `<span class='blip factansnobr'>${fact}</span>`
            document.querySelector(`.numxp1`).innerHTML = "5 * <span>24</span> &nbsp; = <span class='blip factans'>120</span>"
            document.querySelector(`.numxp2`).innerHTML = "4 * <span>6</span>  &nbsp; = <span class='blip factansnobr'>24</span>"
            document.querySelector(`.numxp3`).innerHTML = "3 * <span>2</span>  &nbsp; = <span class='blip factansnobr'>6</span>"
            document.querySelector(`.numxp4`).innerHTML = "2 * <span>1</span>  &nbsp; = <span class='blip factansnobr'>2</span>"
            document.querySelector('.factfuncitonnn').classList.remove('factfuncitonex')
            const rs = document.querySelectorAll('.arrowrotations')
            for(let r of rs){
                r.classList.add('rotations')
            }
            // document.querySelector('.arrowrotationshide').classList.add('hide')
            // document.querySelector('.arrowrotationsshow').classList.remove('hide')
            
            

        }
        if(rcount == 20){
            output1.textContent = "Result : 120"
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
        document.querySelector('.sum1').classList.remove('hide')
        document.querySelector('.factfuncitonnn').classList.add('factfuncitonex')
        text.innerHTML=splitterExpl[3]
        ln = 2
        }
        if(ln!==11){
        ln++
        }
        if(ln==2){
            text.innerHTML=splitterExpl[2]
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
    document.querySelector('.down').classList.remove("hide")
}

// DATA FOR CODE SECTION
var data =`#include <<iostream>iostream>
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
   cout<<"Result : "<< <span class="factfuncitonnn">factorial(num)</span>;
   return 0;
}`

// DATA FOR EXPLAINATION SECTION
var explaination=`<b>line1:</b> <p>iostream is a header file that contains functions for input/output operations </p>
<p>All the files in the C++ standard library declare all of its entities within the std namespace</p>
<p> main() is the entry point of the application</p>
<p>Upon reaching this line of code the factorial funcion is called, passing the variable value of num</p>
<p>The factorial function will keep calling itself untill the base case is reached (which is 'n <= 1' in our case) and recursively returns the final value</p>`

    var splittedData = data.split("\n")
    var splitterExpl = explaination.split("\n")

// SEEDING CODE DATA
    
    for(i=0; i<splittedData.length ; i++){

        
        
        var li = document.createElement('div')
        li.innerHTML=splittedData[i]
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