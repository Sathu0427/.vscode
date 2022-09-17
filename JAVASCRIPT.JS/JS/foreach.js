let heros=['Ironman', 'Spiderman', 'Batman', 'Hulk', 'SheHulk'];

heros.forEach(function (hero) {
console.log(`${hero}`);
} );

let days =['Mon', 'Tue', 'Wed','Thu', 'Fri', 'Sat'];

days.forEach(function (day, position) {
    console.log(`${position+1} ${day}`);
} );

let subjects=['English', 'Tamil', 'Maths', 'Chemistry', 'Physics', 'Biology'];

subjects.forEach(function(subject,position) {
    console.log(`${position+7} ${subject}`);
} );
