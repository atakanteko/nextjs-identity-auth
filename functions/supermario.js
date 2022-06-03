exports.handler = async () => {
    console.log('function invoked');
    const data = {
        name: 'Super Mario',
        age: '32',
        job: 'Plumber'
    }
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}