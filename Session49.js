// Database design (basic)
var classes = [
    {
        id: 0,
        name: '1A',
        teacherId: 1,
        // Instead of declaring students in this class, which is really hard to manage later on. We should declare `students` as an array object, so that when students change the class, we can easily update the students list of a class.
        // students: [
        //     0,
        //     1,
        //     2
        // ]
    },
    {
        id: 1,
        name: '2A',
        teacherId: 2
    },
    {
        id: 2,
        name: '3A',
        teacherId: 3
    },
    {
        id: 3,
        name: '4A',
        teacherId: 4
    },
    {
        id: 4,
        name: '5A',
        teacherId: 5
    },
];

var teachers = [
    {
        id: 1,
        name: 'Quynh',
        age: 30
    },
    {
        id: 2,
        name: 'Chinh',
        age: 55
    },
    {
        id: 3,
        name: 'Nguyet',
        age: 40
    },
    {
        id: 4,
        name: 'Huong',
        age: 45
    },
    {
        id: 5,
        name: 'Hai',
        age: 50
    }
];

var students = [
    {
        id: 0,
        name: 'Minh',
        height: 120,
        class: 0
    },
    {
        id: 1,
        name: 'Minh',
        height: 120,
        class: 0
    },
    {
        id: 2,
        name: 'Minh',
        height: 120,
        class: 0
    }
];

function getStudentsInClass(className) {
    var classObject = classes.find(function(x) {
        return x.name === className;
    });

    var studentsInClass = students.filter(function(student) {
        return student.class === classObject.id;
    });
    
    return studentsInClass;
}

var studentsInClass = getStudentsInClass('1A');
console.log(studentsInClass);

// Exercise:
// 1. Design database for a e-magazine website.
// 2. Design database for a e-commerce website.
// 3. Using node table to make the previous app look nicer.