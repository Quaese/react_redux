let root_dir = 'E:/Files/Projekte/react_js/react-base-wireframe',
    config = {
        client: root_dir + '/dist/',
        server: root_dir + '/server/',
        secretKey: 'asdahd123iuwjp23eqniewi23epjdms32dbzajidmkw1212313aeknd6568alhd567vnyd',
        port: 54321,
        host: 'localhost'
    };

Object.keys(config).forEach(key => {
    if (!global[key]) {
        global[key] = config[key];
    }
})

module.exports = config;