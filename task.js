class PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }
    set state(st){
        if(st < 0){
            st = 0;
        }
        if(st > 100){
            st = 100;
        }
        this._state = st;
    }
    get state(){
        return this._state;
    }
    fix(){
        this.state = this._state*1.5;
    }
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name. releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library{
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        for(let i=0; i<this.books.length; i++){
            if(this.books[i][type] === value){
                return this.books[i];
            }
        }
        return null;
    }
    giveBookByName(bookName){
        for(let i=0; i<this.books.length; i++){
            if(this.books[i].name === bookName){
                let book = this.books[i];
                this.books.splice(i, 1);
                return book;
            }
        }
        return null;
    }
}

class Student{
    constructor(name){
        this.name = name;
        this.marks = {};
    }
    addMark(mark, subject){
        if(mark >= 2 && mark <= 5){
            if(!Object.keys(this.marks).includes(subject)){
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }
    getAverageBySubject(subject){
        if(!Object.keys(this.marks).includes(subject)){
            return 0;
        }
        let average = this.marks[subject].reduce((acc, item, index, arr) => {
            acc += item;
            if(index === arr.length - 1){
                return acc / arr.length;
            }
            return acc;
        }, 0);
        return average;
    }
    getAverage(){
        let keyArray = Object.keys(this.marks);
        if(keyArray.length === 0){
            return 0;
        }
        let sum = 0;
        for(let i=0; i < keyArray.length; i++){
            let key=keyArray[i];
            sum += this.getAverageBySubject(key);
        }
        return sum / keyArray.length;
    }
}

const student = new Student("Олег Никифоров");
student.addMark(5, "химия");
student.addMark(5, "химия");
student.addMark(5, "физика");
student.addMark(4, "физика");
student.addMark(6, "физика"); // Оценка не добавится, так как больше 5
student.getAverageBySubject("физика"); // Средний балл по предмету физика 4.5
student.getAverageBySubject("биология"); // Вернёт 0, так как по такому предмету нет никаких оценок.
student.getAverage(); // Средний балл по всем предметам 4.75