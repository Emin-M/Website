class Gpa {
    constructor(name, averag, ac) {
        this.name = name;
        this.averag = averag;
        this.ac = ac;
    }
}

class UI {
    addGpaToList(gpa) {
        var list = document.querySelector('.list-item');
        var html = `
            <td>${gpa.name}</td>
            <td class='aver'>${gpa.averag}</td>
            <td class='acc'>${gpa.ac}</td>`
        list.innerHTML += html;
    }
    clearControls() {
        const name = document.querySelector('#name').value = '';
        const averag = document.querySelector('#average').value = '';
        const ac = document.querySelector('#act').value = '';
    }
}

document.querySelector('.btn').addEventListener('click', function (e) {
    const name = document.querySelector('#name').value;
    const averag = document.querySelector('#average').value;
    const ac = document.querySelector('#act').value;

    var gpa = new Gpa(name, averag, ac);
    var ui = new UI();
    if (name === '' || averag === '' || ac === '') {
        alert('formu eksiksiz doldurun!')
    } else {
        ui.addGpaToList(gpa);
        ui.clearControls();
    }

    e.preventDefault();
});

document.querySelector('.btnn').addEventListener('click', function () {
    var aver = document.querySelectorAll('.aver');
    var acc = document.querySelectorAll('.acc');
    var ua = 0;
    var gpa = 0;
    acc.forEach(k => {
        ua += Number(k.textContent);
    });
    for (var i = 0; i < acc.length; i++) {
        gpa += (Number(aver[i].textContent) * Number(acc[i].textContent)) / ua;
    };

    var gpaa = document.querySelector('.gpa');
    var gpb = gpa.toPrecision(4);
    gpaa.innerHTML = gpb;
});