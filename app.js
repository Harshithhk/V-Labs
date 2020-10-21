var code = document.querySelector('.code')
var img = document.querySelector('.img')

img.addEventListener('click',()=>{
    img.classList.toggle('imgclick')
})

code.addEventListener('click',()=>{
    console.log("CODE")
})
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
    
    console.log(typeof(data))
    var splittedData = data.split("\n")
    console.log(splittedData.length)

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