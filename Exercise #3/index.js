//Exercise #3

//1. Class
class Person {
    constructor(Nama, Umur){
        this.Nama = Nama
        this.Umur = Umur
    }
    bekerja(){
        console.log(`${this.Nama} sedang bekerja seperti biasa`)
    }
}
const user1 = new Person('Kevin Aldo', 20);
user1.bekerja();

//2. Inheritance
class Orang{
    constructor(nama, umur){
        this.nama = nama;
        this.umur = umur;
    }
    tidur(){
        console.log(`${this.nama} sedang tidur`);
    }
    makan(){
        console.log(`${this.nama} sedang makan`);
    }
} 

class Pelajar extends Orang{
    constructor(nama, umur, namaSekolah){
        super(nama, umur);
        this.namaSekolah =namaSekolah;
    }
    belajar(){
        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
    }
}
let user = new Pelajar('Jhon', 17, 'Unklab');
user.belajar();
user.tidur();
user.makan();
