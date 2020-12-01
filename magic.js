const phoneNumber = (arr) => {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join("")}-${arr.slice(6).join('')}`;
}

console.log(phoneNumber([7, 0, 0, 4, 8, 2, 3, 9, 5]));


//another version of my DM program

const myNumber = (numbers) =>{
    let template = "(xxx) xxx-xxxx"; //(700) 482-395
    for(let i=0; i<template.length; i++){
        template = template.replace('x', numbers[i] )
    }
    return template;
}
myNumber([7,0,0,4,8,2,3,9,5])