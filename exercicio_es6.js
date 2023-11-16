const students = [
    {
        name: 'Rodrigo',
        grade: 7.5
    }, 
    {
        name: 'Pedro',
        grade: 5.4
    }, 
    {
        name: 'Laura',
        grade: 6.0
    }, 
    {
        name: 'Beatriz',
        grade: 9
    }, 
    {
        name: 'Letícia',
        grade: 10
    }, 
    {
        name: 'João',
        grade: 7
    }, 
    {
        name: 'Miguel',
        grade: 8
    }, 
    {
        name: 'Ana',
        grade: 5
    }, 
    {
        name: 'Caio',
        grade: 3
    }, 
    {
        name: 'Júlio',
        grade: 6.1
    }, 
]

const approved = students.filter((student) => {
    return student.grade >= 6
})

console.log(approved)