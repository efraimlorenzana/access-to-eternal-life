const  Scriptures = (endpoint) => {
    let status = {
        isError: false,
        message: null
    }

    try {
        return new Promise(resolve => {
            fetch(`https://api.scripture.api.bible/${endpoint}`, {
                method: 'GET',
                headers: {
                    'api-key': '57f09446f302f6e2ffbfd083d5f069c4'
                }

            }).then(res => res.json()).then(({ data }) => {
                resolve({ data, error: status });
            }).catch(({ message }) => {
                status.isError = true;
                status.message = message;

                resolve({ error: status });
            });
        });
    } catch ({ message }) {
        status.isError = true;
        status.message = message;

        return { data: null, error: status };
    }
}

export default Scriptures;