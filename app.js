const key = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:1, k:2, l:3, m:4, n:5, o:6, p:7, q:8, r:9, s:1, t:2, u:3, v:4, w:5, x:6, y:7, z:8}

const findNumber = (name) => {
    let destiny = 0;

    name.toLowerCase().split('').forEach(element => {
        if(element.match(/^[A-Za-z]+$/)) {
            destiny += key[element];
        }
    });

    while(destiny > 9) {
        var x = 0;
        destiny.toString(10).split("").map(Number).forEach(e => {
            x += e;
        });
        destiny = x;
    }
    document.querySelector('#result').innerHTML = destiny;
}