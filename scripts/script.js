
var screen1 = document.querySelector('#screen1');
var btn = document.querySelectorAll('.btn');
for(item of btn)
    {
        item.addEventListener('click',(e)=>{
            

            btntext = e.target.innerText;
            // console.log(btntext)
            

            if(btntext=='×'){
                btntext = '*';
            }

            if(btntext == '÷'){
                btntext = '/';
            }
            screen1.value=screen1.value+btntext;
            console.log(screen1.value);
        });
    }

function sin(){
    screen1.value = Math.sin(screen1.value);
}


function cos(){
    screen1.value = Math.cos(screen1.value);
}

function tan(){
    screen1.value = Math.tan(screen1.value);
}

function pow(){
    screen1.value = Math.pow(screen1.value,2);
}

function sqrt(){
    screen1.value = Math.sqrt(screen1.value,2);
}

function log(){
    screen1.value = Math.log(screen1.value);
}

function pi(){
    screen1.value = 3.14159265359;
}

function e(){
    screen1.value = 2.71828182846;
}

function fact(){
    var i,num,f;
    f = 1;
    num = screen1.value;
    for(i=1; i<=num; i++){
        f = f*i;
    }
    i=i-1;
    screen1.value = f;
}

function backspc(){
    screen1.value = screen1.value.substr(0,screen1.value.length-1);
}