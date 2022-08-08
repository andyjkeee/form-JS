//1.
window.onload = function () {
    let fullName = document.getElementById('fullName');
    fullName.onkeydown = (e) => {
        let number = parseInt(e.key)
        if (!isNaN(number)) {
            return false;
        }
    }

    let username = document.getElementById('username');
    username.onkeydown = (e) => {
        if (e.key === ',' || e.key === '.') {
            e.preventDefault()
        }
    }

    let checkbox = document.getElementById('checkbox');
    checkbox.onchange = (e) => {
        if (e.target.checked === true) {
            console.log('Согласен')
        } else {
            console.log('Не согласен')
        }
    }

    document.getElementById('button').onclick = function () {
        let eMail = document.getElementById('e-mail');
        let password = document.getElementById('password');
        let repeatPassword = document.getElementById('repeatPassword')
        let checkbox = document.getElementById('checkbox');

        if (!fullName.value) {
            alert('Заполните поле Full Name');
            return;
        }

        if (!username.value) {
            alert('Заполните поле Your username');
            return;
        }

        if (!eMail.value) {
            alert('Заполните поле E-mail');
            return;
        }
        if (!password.value) {
            alert('Заполните поле Password');
            return;
        }
        if (!repeatPassword.value) {
            alert('Заполните поле Repeat Password');
            return;
        }

        if (password.value.length < 8) {
            alert('Пароль должен содержать как минимум 8 символов!');
            return;
        }

        if (password.value !== repeatPassword.value) {
            alert('Пароли не совпадают!')
            return;
        }

        if (checkbox.checked !== true) {
            alert('Подтвердите согласие с условиями!');
            return;
        }

        document.getElementById('modal-window').classList.add('open');

        document.getElementById('modal-button-btn').onclick = function () {
            document.getElementById('modal-window').classList.remove('open');
            document.getElementById('fullName').value = '';
            document.getElementById('username').value = '';
            document.getElementById('e-mail').value = '';
            document.getElementById('password').value = '';
            document.getElementById('repeatPassword').value = '';
            document.getElementById('checkbox').checked = false;

            login();

        }

    }

    document.getElementById('a-question').onclick = function () {
        login ();
    }
    function login () {

        document.getElementById('a-question').innerText = ('Log in to the system');

        document.getElementById('fullName').remove();
        document.getElementById('fullName-div').remove();

        document.getElementById('e-mail').remove();
        document.getElementById('e-mail-div').remove();

        document.getElementById('repeatPassword').remove();
        document.getElementById('repeatPassword-div').remove();

        document.getElementById('checkbox-div').remove();

        document.getElementById('button').innerText = 'Sign In';

        document.getElementById('a-question').remove();

        document.getElementById('button').onclick = function () {

            if (!username.value) {
                alert('Заполните поле Your username');
                return;
            }
            if (!password.value) {
                alert('Заполните поле Password');
                return;
            }

            if (username.value + password.value) {
                alert('Добро пожаловать, ' + username.value)
            }
        }
    }
}

