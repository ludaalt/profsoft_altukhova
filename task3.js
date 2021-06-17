const arr =[{name: 'overflow', value: 'hidden'}, {name: 'cursor', value: 'pointer'}]

const makeObj = (arr) => {
    let result = {};

    for (let i = 0; i < arr.length; i += 1) {
        const {name, value} = arr[i]
        result[arr[i].name] = arr[i].value
    }

    return result;
}

console.log(makeObj(arr))