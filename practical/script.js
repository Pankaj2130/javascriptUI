document.getElementById('display-image');
const datainfo = 'https://some-random-apis.herokuapp.com/images/';
function random() {
    fetch('https://some-random-apis.herokuapp.com/images', {
    
    }).then(res => res.json()).then(data => console.log(data))
}