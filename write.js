const magik = magikcraft.io;

function write() {
	
    const font = {
    a:[0,24,36,102,126,126,102,102],
    b:[192,192,192,192,252,194,194,252],
    c:[255,192,192,192,192,192,192,255],
    d:[254,195,195,195,195,195,195,225],
    e:[252,128,128,252,]
    f:[]
    g:[]
    h:[]
    i:[]
    }

function binary(letter){
    return letter.map(line=>
    line.toString(2));
}

const a = binary(font.a);
a.forEach(line=>magik.dixit(line.padStart("0",8)));

}