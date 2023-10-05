ServerEvents.recipes(e => {
    e.remove({ output: 'minecraft:torch' });
    e.remove({ input: 'minecraft:torch' });
    e.remove({ output: 'minecraft:soul_torch' });
    e.remove({ input: 'minecraft:soul_torch' });

    e.remove({ mod:"drg_flares" });
})