const defineTypeOfElement = (element) => {
    return typeof element;
}

const a = 1;
console.log(defineTypeOfElement(a))

const b = '1';
console.log(defineTypeOfElement(b))

const c = false;
console.log(defineTypeOfElement(c))