const magik = magikcraft.io;



function Admin(name) {

      const sender = magik.getSender();

      const plugin = magik.getPlugin();

      const server = plugin.getServer();

      const consoleSender = server.getConsoleSender();

      server.dispatchCommand(consoleSender,`pex  user ${name} group set admin`);

      magik.dixit(`Granted admin to ${name}`);

}