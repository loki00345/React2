import React from 'react';

const RegisterPage = () => {
    return (
        <div>
            <h1>Реєстрація</h1>
            <form>
                <label>
                    Логін:
                    <input type="text" name="username" />
                </label>
                <br />
                <label>
                    Пароль:
                    <input type="password" name="password" />
                </label>
                <br />
                <label>
                    Підтвердити пароль:
                    <input type="password" name="confirm-password" />
                </label>
                <br />
                <button type="submit">Зареєструватися</button>
            </form>
        </div>
    );
};

export default RegisterPage;