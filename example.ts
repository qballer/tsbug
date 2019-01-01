const b = getB() 

function getB() {
    // will throw C is not a constructor in runtime
    return new C()
}

// Will generate Class 'C' used before its declaration.
// const instanceOfC = new C()

class C {}