function death(name) {
    const sender = magik.getSender();
    const plugin = magik.getPlugin():
    const server = magik.getServer();
    const consoleSender = server.ConsoleSender();
    server.dispatchCommand(consoleSender,`effect ${name} 20 60 1`)
}