class University {
    name: string;
    dept: string;

    constructor(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number): void { //put void here - this method has no return
        console.log(`Graduating ${this.name} ${this.dept} ${year} students`);
    }
}

let miu = new University("MIU", "MSD");
miu.graduation(2021);