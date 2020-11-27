const phoneNumber = (arr) => {
    return `(${arr.slice(0, 3).join('')}) ${arr.slice(3, 6).join("")}-${arr.slice(6).join('')}`;
}

console.log(phoneNumber([7, 0, 0, 4, 8, 2, 3, 9, 5]));