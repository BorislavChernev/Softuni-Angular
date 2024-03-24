abstract class Employee {
    public name: string;
    public age: number;
    public salary: number;
    public tasks: string[];

    constructor(name: string, age: number, salary: number, tasks: []) {
        this.name = name;
        this.age = age;
        this.salary = 0;
        this.tasks = [];
    }

    public work(): void {
        var currentTask: string | undefined = this.tasks.shift();
        if (currentTask !== undefined) {
            this.tasks.push(currentTask as string);
            console.log(this.name + currentTask);
        } else {
            console.log(this.name + " has no tasks.");
        }
    }

    public collectSalary(): void {
        console.log(`${this.name} received ${this.getSalary()} this month.`);
        
    }

    public getSalary(): number {
        return this.salary;
    }
}

class Junior extends Employee {
    constructor(name: string, age: number) {
        super(name, age, 0, []);
        this.tasks.push(" is working on a simple task");
    }
}

class Senior extends Employee {
    constructor(name: string, age: number) {
        super(name, age, 0, []);
        this.tasks.push(" is working on a complicated task.")
        this.tasks.push(" is taking time off work.")
        this.tasks.push(" is supervising junior workers.")
    }
}

class Manager extends Employee {
    public divident: number;

    constructor(name: string, age: number) {
        super(name, age, 0, []);
        this.divident = 0;
        this.tasks.push(" scheduled a meeting.");
        this.tasks.push(" is preparing a quarterly meeting.");
    }

    public getSalary(): number {
        return this.salary + this.divident;
    }
}

var junior: Junior = new Junior("Borislav", 18);
var senior: Senior = new Junior("Taulant", 24);
var manager: Manager = new Manager("Asen", 30);

console.log(junior, senior, manager);