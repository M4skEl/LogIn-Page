export {tokenSave}
export {logIn}

function logIn(userEmail, userPassword, setDataSent, isRemember) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userEmail === 'admin@admin.ru' && userPassword === '123456') {
                resolve({token: 'admin', expires: Date.now() + 1000 * 60 * 60});
            } else {
                reject({code: 401, description: 'Incorrect email or password'})
            }
            setDataSent(false);
        }, 2000)
    })
}

function tokenSave(res) {
    const tokenStr = localStorage.getItem('AuthorizationToken');
    if (!tokenStr) {
        localStorage.setItem('AuthorizationToken', JSON.stringify(res))
    }
    ;
    const token = JSON.parse(tokenStr);
    const now = new Date();

    if (token.token !== res.token) {
        localStorage.setItem('AuthorizationToken', JSON.stringify(res))
    } else if (now.getTime() > token.expires) {
        // удаляем старый и сохраняем новый
        localStorage.removeItem('AuthorizationToken')
        localStorage.setItem('AuthorizationToken', JSON.stringify(res))
    }
}
