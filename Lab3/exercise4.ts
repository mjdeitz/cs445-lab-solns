let baseObject: {
    width: number,
    length: number
} = {
    width: 0,
    length: 0
};
let rectangle: any = Object.create(baseObject); // need to put type for rectangle
//baseObject is limited to width length which are number so we need to put any
//otherwise calcSize will generate an error
//Error says Property calcSize does not exist on width length

rectangle.width = 5;
rectangle.length = 2;


//this function declaration is similar to java where the return type must be specified
rectangle.calcSize = function (): number {//this function has a return - therefore must specify return type
    return this.width * this.length;
};

console.log(rectangle.calcSize()); // 10