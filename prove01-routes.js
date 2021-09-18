

const requestHandler = (req, res) =>  {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Greeeting Message</title></head>');
        res.write('<body><h1>WELCOME TO THIS PAGE</h1></body>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="message"><button type="submit"> Create User </button></form>');
        res.write('</html>');
        return res.end();
        //...
    }
    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User List</title></head>');
        res.write('<body><h1>Users List</h1>');
        res.write('<ul><li>User 1</li><li>User 2</li></ul>');
        res.write('</body>');
        res.write('</html>');
        return res.end();

        //..
    }

    if (url =='/create-user') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const user = parsedBody.split('=')[1];
            console.log('New user:', user);
        });
            res.statusCode = 302;
            res.setHeader('Location','/');
            res.end();
        
    }
};


module.exports = requestHandler;
