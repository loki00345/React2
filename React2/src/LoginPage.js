import React from 'react';

const LoginPage = () => {
    return (
        <div>
            <h1>Вхід</h1>
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
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default LoginPage;