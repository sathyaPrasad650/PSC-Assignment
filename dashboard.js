function append() {
    let data = JSON.parse(localStorage.getItem('students')) || [];

    let container = document.querySelector('#container');

    data.forEach(function (el, index) {
        let div = document.createElement('div')
        div.setAttribute('id', 'div')

        let img = document.createElement('img')
        img.src = el.image

        let name = document.createElement('p');
        name.innerText = el.name

        let unit = document.createElement('p');
        unit.innerText = el.name

        let course = document.createElement('p')
        course.innerText = el.course

        let batch = document.createElement('p')
        batch.innerText = el.batch

        let btn = document.createElement('button')
        btn.innerText = "Remove"
        btn.addEventListener('click', function () {
            remove(index)
        })

        div.append(img, name, unit, course, batch, btn)

        container.append(div)

    })
}


append()

function remove(index) {
    let data = JSON.parse(localStorage.getItem('students')) || [];

    data.filter(function (el, i) {
        if (i === index) {
            let trash = JSON.parse(localStorage.getItem('trash')) || [];

            trash.push(el)

            localStorage.setItem('trash', JSON.stringify(trash))
        }

    });

    data.splice(index, 1)

    localStorage.setItem('students', JSON.stringify(data));

    window.location.reload()
}