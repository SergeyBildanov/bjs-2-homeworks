function parseCount(value){
    if(isNaN(Number.parseFloat(value))){
        throw new Error("Невалидное значение");
    }
    return Number.parseFloat(value);
}
function validateCount(value){
    try{
        return parseCount(value);
    } catch(error){
        return error;
    } 
}

class Triangle{
    constructor(a,b,c){
        if((a+b)<c || (b+c)<a || (a+c)<b){
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.firstSide = a;
        this.secondSide = b;
        this.thirsSide = c;
        this._perimeter = a + b + c;
        this._area = Number(Math.sqrt((this._perimeter/2)*((this._perimeter/2)-a)*((this._perimeter/2)-b)*((this._perimeter/2)-c)).toFixed(3));
    }
    get perimeter(){
        let a = this.firstSide;
        let b = this.secondSide;
        let c = this.thirsSide;
        if((a+b)<c || (b+c)<a || (a+c)<b){
            throw new Error("Ошибка! Треугольник не существует!");
        }
        return this._perimeter;
    }
    get area(){
        let a = this.firstSide;
        let b = this.secondSide;
        let c = this.thirsSide;
        if((a+b)<c || (b+c)<a || (a+c)<b){
            throw new Error("Ошибка! Треугольник не существует!");
        }
        return this._area;
    }
}

function getTriangle(a, b, c){
    try{
        return new Triangle(a, b, c);
    } catch(error){
        const triangle = {
          perimeter: "Ошибка! Треугольник не существует",
          area: "Ошибка! Треугольник не существует"   
        };
        Object.freeze(triangle);
        return triangle; 
    }
}