ServerEvents.recipes((event) => {
    event.remove({ output: 'minecraft:torch' });
    event.remove({ input: 'minecraft:torch' });
    event.remove({ output: 'minecraft:soul_torch' });
    event.remove({ input: 'minecraft:soul_torch' });

    event.remove({ mod: 'drg_flares' });
});
