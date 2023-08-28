let inputBox = document.querySelector('.inputBox');
let equation = document.querySelector('.equation');
let Equation = [];
let Answer = [];
let HistoryBox = document.querySelector('.history');
let historyBody =document.querySelector('#historyBody');
historyBody.style.display = 'none';
flag = true;


function getVal(val)
{
    if (inputBox.value == 0)
    {
        inputBox.value = val;
    } else{
        inputBox.value += val
    }
};

function ON()
{
    if (flag)
    {
        inputBox.value = 0;

    }else{
        inputBox.value = 'Bye Bye';
    }
    flag = !flag;
}

function clr()
{   
    inputBox.value = 0
    equation.value = '';
};

function getAnswer()
{
    
    equation.value = inputBox.value;
    let ans = eval(inputBox.value);
    inputBox.value = ans;
    let newEquation = equation.value;
    console.log(newEquation);
    Answer.push(ans);
    Equation.push(newEquation);
}
{/* <td><input class="btn" type="button" value="del" onclick='del()' ></td> */}
function his()  
{
    
    document.querySelector('#historyBody').style.display = 'block';
    HistoryBox.innerHTML = '<div><button class="btn" onclick="del()">Del</button> <button class="btn" onclick="back()">back</button></div>';
    document.querySelector('#calcu').style.display = 'none';
    for (let i=0; i < Equation.length; i++)
    {
        HistoryBox.innerHTML += "<div class='element'><h3>"+
        Equation[i]+"</h3><h2>"+Answer[i]+"</h2></div>";  
    }
    
}


function back()
{
    document.querySelector('#calcu').style.display = 'block';
    document.querySelector('#historyBody').style.display = 'none'
}

function del()
{ 
    document.querySelector('.element').innerHTML = '';
    // console.log(del());
    // HistoryBox.value.clear();
}
// document.HistoryBox.Input.value = document.calc.Input.value.slice(0, -1)

// function press(id)
// {
//     var elements = document.getElementsByClassName('box');

//     for (let i = 0; i < elements.length; i++)
//     {
//         elements[i].style.display = 'inline';
//     }

//     document.getElementById(id).style.display = 'none';
// }

// function show(id)
// {
//     var boxes = document.getElementsByClassName('box');
    
//     for (let i = 0; i < boxes.length; i++)
//     {
//         boxes[i].style.display = 'inline';
//     }

// }


// function newBtnpress(id){
//     if(id == 1){
//         document.getElementById('1').style.display = "none";
//         document.getElementById('2').style.display = "block";
//         //state = 1
//     }
//     else if(id == 2){
//         document.getElementById('1').style.display = "block";
//         document.getElementById('2').style.display = "none";
//     }else{
//         document.getElementById('1').style.display = "block";
//         document.getElementById('2').style.display = "block";
//     }
// }

