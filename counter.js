let count = 0;

        function updateDisplay() {
            document.querySelector('.displaycount').innerText = count;
        }
        
        
            document.querySelector(".decrement").addEventListener("click",function(){
                count  --;
                updateDisplay();
            });

            document.querySelector(".reset").addEventListener("click",function(){
                count = 0;
                updateDisplay();
            
            });

            document.querySelector(".increment").addEventListener("click",function(){
                count  ++;
                updateDisplay();
            });

    
        document.getElementsByTagName('button')[3].addEventListener("click",function(){

        const inputText = document.getElementById('textInput').value;
        const displayCountValue = document.querySelector('.displaycount').innerText;

        if(inputText == displayCountValue) {
           alert('Value is Same');
        }else{
           alert('Value is Not Same');  
        }

        });