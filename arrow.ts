const magik = magikcraft.io;



function arrow() {



    function shoot() {

        const Arrow = Java.type("org.bukkit.entity.Arrow");

        const p = magik.getSender();

        p.launchProjectile(Arrow.class);

    }



    magik.doNTimes(shoot, 100, 50);

}
