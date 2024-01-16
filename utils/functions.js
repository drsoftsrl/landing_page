export const ShadeColor = (color, percent) => {
    const f = parseInt(color.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = (f >> 8) & 0x00ff,
        B = f & 0x0000ff;
    return (
        '#' +
        (
            0x1000000 +
            (Math.round((t - R) * p) + R) * 0x10000 +
            (Math.round((t - G) * p) + G) * 0x100 +
            (Math.round((t - B) * p) + B)
        )
            .toString(16)
            .slice(1)
    );
};

const createResponse = (
    error,
    data,
    success,
    status
) => ({
    data,
    error,
    success,
    status
});

const interpretResponse = (data) =>
    data.text().then(text => {
        try {
            const json = JSON.parse(text);
            return createResponse(
                json.error,
                json.data,
                !json.error,
                data.status
            );
        } catch (err) {
            return createResponse(
                'There was a problem retrieving data.',
                null,
                false,
                data.status
            );
        }
    });

export const RequestHandler = (url, opts) => {
    const config = Object.assign(opts || {}, {
        mode: 'cors',
        credentials: 'include'
    });

    return fetch(url, config)
        .then(res => interpretResponse(res))
        .catch(() =>
            createResponse('The server is not responding. Try again later !')
        );
};
