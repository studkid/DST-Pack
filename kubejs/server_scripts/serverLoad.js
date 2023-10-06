// priority: 10

ServerEvents.loaded((event) => {
    event.server.scheduleInTicks(48, () => {
        // First server load
        if (!event.server.persistentData.contains('firstload')) {
            event.server.runCommandSilent('function itemdamage:load');
            event.server.runCommandSilent('function night:load');

            event.server.persistentData.putBoolean('firstload', true);
        }
    });
});
