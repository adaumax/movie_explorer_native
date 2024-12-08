function authentication() {
    const url = 'https://api.themoviedb.org/3/authentication';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer ' + AUTH
        }
    };

    return fetch(url, options)
        .then(res => {
            if (!res.ok) { throw new Error(`Error at Authentication: ${res.status}`);
            }
        })
}

