const magik = magikcraft.io;

function Crash() {

    var target = magik.aspecto();
    var x = target.getX();
    var y = target.getY();
    var z = target.getZ();
    magik.getSender().getWorld().createExplosion(x, y, z, 10, true, true);

}
