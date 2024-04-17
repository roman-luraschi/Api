async function obtener10Datos(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.error('error al cargar los datos', error)
    }
}

obtener10Datos()