// && and operator:

let loggedin = true;
let payment  = true;

if (loggedin && payment) {
    console.log('watch videos on your subscription');
} else {
    console.log('Please subscribe and watch videos');
}

// || or opertor:

let gmaillogin = false;
let fblogin = true;

if (gmaillogin || fblogin) {
    console.log('Logged In');
} else {
    console.log('Please Log In');
}

// if and else condition with and opertor:

let mark = 132;

if (mark >=90 && mark <=100) {
    console.log('s');
} else if (mark >=80 && mark <=89) {
    console.log('A');
} else if (mark >=70 && mark <=79) {
    console.log('B');
} else if (mark >=60 && mark <=69) {
    console.log('C');
} else if (mark >=50 && mark <=59) {
    console.log('D');
} else if  (mark <=45) {
    console.log('E');
} else {
    console.log('U');
}
