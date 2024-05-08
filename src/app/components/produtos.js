const url = './products.json'

const produtos = fetch(url).then(response => response.json()).then(data => {

    console.log(data);

});

