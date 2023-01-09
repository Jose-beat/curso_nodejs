//Importamos los componentes de HTTP
const http  = require('http');


const todos  =[
   
    {id:1, text:"Todo en uno"},
    {id:2, text:"Todo en uno"},
    {id:3, text:"Todo en uno"},
    

]
//Usamos la funcion para crear un servidor que tendra como parametors req que es los datos de cabecera y res contiene los datos de respuesta
const server  = http.createServer((req, res)=>{
    //del objeto de cabecera obtenenos la url, metodos y cabeceras de la solicitud
    const {headers, url, method} = req;
    //Definicion de un encabezado HTTP
    //Con este podemos definir el tipo de informacion a manejar, ya sea de texto, html o similar
    //res.setHeader('Content-Type', 'text/html');

    res.setHeader('Content-Type', 'application/json');
    
    //Especializacion de la tecnologia
    res.setHeader('X-Powered-By', 'Node JS');

    //Envio de una respuesta
    res.write('<h1>Hola</h1>');


    
    console.log(headers, url, method);

    //Podemos enviar la informacion (en caso de ser un JSON) por el metodo end de la respuesta pero esta debe convertirse en tipo JSON o el tipo que vaya a enviarse
    
    res.end(
    JSON.stringify({
        success: true,
        data: todos
    })
    
    );
});

const PORT  = 5000;

server.listen(PORT, () => console.log(`El servidor esta corriendo en el puerto ${PORT}`));