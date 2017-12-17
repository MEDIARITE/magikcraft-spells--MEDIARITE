const magik = magikcraft.io;

function write() {
	
    const font = {
    a:[0,24,36,38,198,198,138,138],
    b:[192,192,192,192,252,194,194,252],
    d:[254,195,195,195,195,195,195,225],
    }

function binary(letter){
    return letter.map(line=>
    line.toString(2));
}

const a = binary(font.a);
a.forEach(line=>magik.dixit(line.padStart("0",8)));

}