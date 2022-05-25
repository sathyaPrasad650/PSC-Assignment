// Constructor function
function Student(n, c, u, i, b) {
    this.name = n;
    this.course = c;
    this.unit = u;
    this.image = i;
    this.batch = `Ft-Web${b}`;
}

function storeData(event) {
    event.preventDefault();
    console.log('s')
    let form = document.querySelector('#students_data');
    let name = form.name.value;
    let course = form.course.value;
    let unit = form.unit.value;
    let image = form.image.value;
    let batch = form.batch.value;

    let s1 = new Student(name, course, unit, image, batch);

    let data = JSON.parse(localStorage.getItem('students')) || [];

    data.push(s1)

    localStorage.setItem('students', JSON.stringify(data))

    console.log(s1);
}

function calculate() {
    let data = JSON.parse(localStorage.getItem('students')) || [];

    let counts = {};
    for (var i = 0; i < data.length; i++) {
        counts[data[i].batch] = (counts[data[i].batch] + 1) || 1;
    }

    console.log(counts);

    let navbar = document.querySelector('#navbar');

    for (let key in counts) {
        let batch = document.createElement('p')
        batch.innerText = ` ${key} - ${counts[key]} |`

        navbar.append(batch)
    }
}

calculate();