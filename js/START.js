
'use strict'

    reg.addEventListener('click', function()
    {
        let username = document.querySelector('#username')
        let nameu = document.querySelector('#nameu')
        let surnameu = document.querySelector('#surnameu')
        let work = document.querySelector('#work')
        let about = document.querySelector('#about')
        let vozr = document.querySelector('#vozr')
        let password = document.querySelector('#password')
        // alert(Number.isInteger(vozr.value).toString())
        if (pravila.checked) {
            if(Number.isInteger(parseInt(vozr.value)))
            {
                let date = new Date()
                localStorage.setItem('usernameloc', username.value);
                localStorage.setItem('nameloc', nameu.value);
                localStorage.setItem('surnameloc', surnameu.value);
                localStorage.setItem('workloc', work.value);
                localStorage.setItem('aboutloc', about.value);
                localStorage.setItem('vozrloc', vozr.value);
                localStorage.setItem('passwordloc', password.value);
                localStorage.setItem('dateloc', date.toString());
                // alert(localStorage.getItem('usernameloc'))

            }
            else
            {

            }
        }
        else
        {
            alert('Вы не приняли правила, прими и повтори вход, только для начала прочти их!')
        }
    })
function progressBar() {
    // Узнаем на сколько страница прокручена
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    // Узнаем высоту всей страницы
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    // Получаем в % на сколько прокручена страница
    let scrolled = scroll / height * 100;

    // Подставляем % прокрутки в ширину нашей линии
    document.getElementById('progressBar').style.width = scrolled + '%';
}

// Запускаем функцию, когда пользователя скролит
window.addEventListener('scroll', progressBar);