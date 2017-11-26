/**
 *  Player Unknown Battlegrounds mini-game in Magikcraft
 *  www.magikcraft.io
 *  Made by Ruben Bliss
 *  Credit to Josh Wulf <josh@magikcraft.io> for making alot of the code
 * 
 * This is a cool little mini-game where the world border
 * shrinks, and you have to stay inside it and kill other players to stay alive.
 * This mini-game defaultly goes for 5 minutes.
 * 
 * Note: to play, you need to add magikcraft-lore-ui-bar to your package.json file, 
 *       or run `/npm install magikcraft-lore-ui-bar` in Minecraft.
 * 
 * Usage: 
 * /cast border - start a new game
 * /cast border <number> - specify the initial border size (default is 1500)
 * /cast border reset - stop a game in-progress
 * 
 */

const magik = magikcraft.io;
const { bar, color, style } = require('magikcraft-lore-ui-bar');
const finalsize = 5;
const blocksPerSecond = 5;

const STATE = {
    PROGRESS: 'border.game.progress',
    RUNNING: 'border.game.mutex',
    BAR: 'border.game.persistence.bar',
    LISTENER: 'border.game.progress.listener'
};

const TEXT = {
    INITIAL: 'The Battle Has Begun!',
    HALFWAY: 'The Game Is Halfway Done!',
    URGENT: 'Theres Not Much Time Left!',
    GAMEOVER: 'GAME OVER!'
};

function PUBg(size = 1500) {

    if (size == 'reset') {
        // Use this to halt a game
        gameOver();
        return;
    }

    if (size == 'clear') {
        // Use this when the UI bar has disappeared
        magik.playerMap.remove(STATE.BAR);
        magik.playerMap.remove(STATE.LISTENER);
        return;
    }

    magik.dixit('Setting up...');

    function getBar() {
        if (magik.playerMap.containsKey(STATE.BAR)) {
            // Return a reference to the existing UI Bar
            return magik.playerMap.get(STATE.BAR);
        } else {
            // Or create a new UI bar
            magik.dixit('Creating UI bar...');
            const _b = bar();
            // Stash a reference to it
            magik.playerMap.put(STATE.BAR, _b);
            return _b;
        }
    }

    const b = getBar()
        .text(TEXT.INITIAL)
        .color(color.GREEN)
        .style(style.NOTCHED_300)
        .progress(100)
        .show();

    function getBorder() {
        return magik.getSender().getWorld().getWorldBorder();
    }

    function initialiseBorder() {
        const border = getBorder();

        const here = magik.hic();
        const zDelta = Math.random() * 100 - 50;
        const xDelta = Math.random() * 100 - 50;

        here.setZ(here.getZ() + zDelta);
        here.setX(here.getX() + xDelta);

        border.setCenter(here);
        border.setSize(size);
        return border;
    }

    function shrink(border) {
        const newSize = border.getSize() - blocksPerSecond;
        if (newSize === finalsize) {
            magik.clearInterval(loop);
        }