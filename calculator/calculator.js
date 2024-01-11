function addfun() {
    let num1 = document.getElementById("fnum").value
    let num2 = document.getElementById("snum").value
    console.log(num1, num2);
    if (num1 === '' || num2 === '') {
        document.getElementById("store").innerHTML = "Please enter the number..";
        document.getElementById("store").style.backgroundColor = 'red';

    } else {
        let ans = parseInt(num1) + parseInt(num2)
        document.getElementById("store").innerHTML = `ANSWER : ${ans}`;
        document.getElementById("store").style.backgroundColor = 'green';
    }

}
function subtrafun() {
    let num1 = document.getElementById("fnum").value
    let num2 = document.getElementById("snum").value
    if (num1 === '' || num2 === '') {
        document.getElementById("store").innerHTML = "Please enter the number..";
        document.getElementById("store").style.backgroundColor = 'red';

    }
    else {
        let ans = parseInt(num1) - parseInt(num2)
        document.getElementById("store").innerHTML = `ANSWER : ${ans}`;
        document.getElementById("store").style.backgroundColor = 'green';
    }

}
function multiplyfun() {
    let num1 = document.getElementById("fnum").value
    let num2 = document.getElementById("snum").value
    if (num1 === '' || num2 === '') {
        document.getElementById("store").innerHTML = "Please enter the number..";
        document.getElementById("store").style.backgroundColor = 'red';

    }
    else {
        let ans = parseInt(num1) * parseInt(num2)
        document.getElementById("store").innerHTML = `ANSWER : ${ans}`;
        document.getElementById("store").style.backgroundColor = 'green';
    }

}
function divisionfun() {
    let num1 = document.getElementById("fnum").value
    let num2 = document.getElementById("snum").value
    if (num1 === '' || num2 === '') {
        document.getElementById("store").innerHTML = "Please enter the number..";
        document.getElementById("store").style.backgroundColor = 'red';

    }
    else {
        let ans = parseInt(num1) / parseInt(num2)
        document.getElementById("store").innerHTML = `ANSWER : ${ans}`;
        document.getElementById("store").style.backgroundColor = 'green';
    }

}
