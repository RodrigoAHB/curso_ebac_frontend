function Pessoa(name){
    this.name = name
}

function Player(name, position, gamesPlayed) {
    Pessoa.call(this, name)
    this.position = position
    this.gamesPlayed = gamesPlayed
}  

function Employee(name, position, salary){
    Pessoa.call(this, name)
    this.position = position
    let _salary = salary

    this.setSalary = function (salary){
        _salary = salary
    }

    this.getSalary = function (){
        return _salary
    }
}

const rodrigo = new Player('Rodrigo', 'Volante', 2)
const pessoa1 = new Employee('João das Couves', 'Vendedor', 2000)
console.log(pessoa1.getSalary())
pessoa1.setSalary(3000)
const messi = new Player('Messi', 'Ponta Esquerda', 350)


console.log(rodrigo)
console.log(pessoa1.getSalary())
console.log(messi)