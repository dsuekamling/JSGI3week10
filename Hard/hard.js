// Make a function called patient2
// Make a private object variable called pii inside the function
// Create private properties by making functions called getName() and getSSN()


let pii = (function () {
    let name = 'Dan'
    let _ssn = '671-65-5554';
    getssn = function () {
        return _ssn;
    }
    getname = function () {
        return name;
    }
    return {
        getname: name
    }
    return {
        getssn: getssn
        
    }
}());
console.log(pii.getname);
console.log(pii._ssn);