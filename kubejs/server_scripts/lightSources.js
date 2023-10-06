ServerEvents.recipes((event) => {
    // Torches
    // This might be better if recipes were iterated over
    event.remove({ input: 'minecraft:torch' });
    event.shaped(
        'kubejs:hand_torch',
        [
            'C',
            'S',
        ],
        {
            C: '#minecraft:coals',
            S: 'minecraft:stick',
        },
    ).id('minecraft:torch');
    event.shaped(
        'kubejs:hand_torch',
        [
            'C',
            'S',
        ],
        {
            C: 'twilightforest:torchberries',
            S: 'minecraft:stick',
        },
    ).id('twilightforest:berry_torch');
    // Just in case...
    event.replaceOutput(
        { output: 'minecraft:torch' },
        'minecraft:torch',
        'kubejs:hand_torch',
    );

    event.remove({ output: 'minecraft:soul_torch' });
    event.remove({ input: 'minecraft:soul_torch' });
    // Remove every object with the word "candle" in its id via regex
    event.remove({ input: /candle/ });
    event.remove({ output: /candle/ });

    event.remove({ mod: 'drg_flares' });

    event.shaped(
        'kubejs:hand_torch',
        [
            'WWW',
            ' S ',
        ],
        {
            S: 'minecraft:stick',
            W: 'farmersdelight:straw',
        },
    );
    event.shaped(
        'kubejs:hand_lantern',
        [
            ' I ',
            'IGI',
            ' I ',
        ],
        {
            I: 'minecraft:iron_ingot',
            G: 'minecraft:glow_berries',
        },
    );
});

ServerEvents.tags('item', (event) => {
    const hide = ['minecraft:torch', 'minecraft:soul_torch', 'minecraft:lantern', 'minecraft:soul_lantern'];

    hide.forEach((item) => {
        event.add('c:hidden_from_recipe_viewers', item);
    });

    event.removeAll('dynamiclights:light_level/15');
    event.removeAll('dynamiclights:light_level/9');
    event.removeAll('dynamiclights:light_level/6');

    event.add('dynamiclights:light_level/9', "kubejs:hand_torch");
    event.add('dynamiclights:light_level/turn_off', "kubejs:hand_torch");
    event.add('dynamiclights:light_level/15', "kubejs:hand_lantern");
});

ServerEvents.tags('entity_type', (event) => {
    event.removeAll('dynamiclights:light_level/15');
    event.removeAll('dynamiclights:light_level/9');
    event.removeAll('dynamiclights:light_level/6');
})
