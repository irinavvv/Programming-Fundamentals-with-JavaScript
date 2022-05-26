function logIn(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let pass = userName.split(``).reverse().join(``);
    let counter = 0;
    let currentInput = input[index];

   
    
    while (currentInput !== pass) {
        counter++;
        if (counter === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }else {
            console.log(`Incorrect password. Try again.`);
        }
        index++;
        currentInput = input[index];
    }
    if (currentInput === pass) {
        console.log(`User ${userName} logged in.`);
    }
}

//logIn(['Acer','login','go','let me in','recA'])
//logIn(['momo','omom'])
logIn(['sunny','rainy','cloudy','sunny','not sunny'])