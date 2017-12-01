/**

This spell throws all entities around you, like a repulsive shield of protection.

**/



const magik = magikcraft.io;



function ssheild() {

    const times = 5 * 1000 / 300; // 5 seconds, every 1ms

    let n = times;

    magik.setTimeout(shield, 1000);



    function shield() {

        n --;

        const location = magik.hic();

        const nearbyEntities = location.getWorld().getNearbyEntities(location, 100, 100, 100);

        nearbyEntities.forEach(entity => toss(entity));

        if (n>0) {

            magik.setTimeout(shield, 1000)

        }

    }

}



function toss(entity){

    if (entity.getName() == magik.getSender().getName()) {

        return;

    }

    var Vector = Java.type('org.bukkit.util.Vector');

    entity.setVelocity(new Vector(1000,1000,1000));

}
