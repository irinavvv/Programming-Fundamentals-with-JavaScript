function logIn(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let pass = "";
    let counter = 0;

    for (let i = userName.length-1; i >= 0; i--) {
        pass = pass + userName[i];
    }
    
    while (input[index] !== pass) {
        counter++;
        if (counter === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
    }
    if (input[index] === pass) {
        console.log(`User ${userName} logged in.`);
    }
}

//logIn(['Acer','login','go','let me in','recA'])
//logIn(['momo','omom'])
logIn(['sunny','rainy','cloudy','sunny','not sunny'])