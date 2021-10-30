class University {
    name: string;
    dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }
    graduation(year: number): void { //put void here - this method has no return
        console.log(`Graduating ${this.name} ${this.dept} ${year} students`);
    }
}

let miu: University = new University("MIU", "MSD"); // need to put type "University" here as well 
miu.graduation(2021);