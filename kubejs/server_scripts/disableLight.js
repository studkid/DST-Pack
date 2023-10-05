ServerEvents.recipes(e => {
    e.remove({ output: 'minecraft:torch' });
    e.remove({ input: 'minecraft:torch' });
    e.remove({ output: 'minecraft:soul_torch' });
    e.remove({ input: 'minecraft:soul_torch' });
})

ServerEvents.tags('item', event => {
    const hide = ['minecraft:torch', 'minecraft:soul_torch', 'minecraft_lantern', 'minecraft:soul_lantern'];

    
})