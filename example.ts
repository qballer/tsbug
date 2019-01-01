const b = getB() 

function getB() {
    return new C()
}

//Will generate Class 'C' used before its declaration.
//const instanceOfC = new C()

class C {}