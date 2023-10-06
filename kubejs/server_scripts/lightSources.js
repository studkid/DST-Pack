ServerEvents.recipes((event) => {
    event.remove({ input: 'minecraft:torch' });
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
            'IGI',
            'IGI',
            'IGI',
        ],
        {
            I: 'minecraft:iron_ingot',
            G: 'minecraft:glowstone_dust',
        },
    );
});

ServerEvents.tags('item', (event) => {
    const hide = ['minecraft:torch', 'minecraft:soul_torch', 'minecraft:lantern', 'minecraft:soul_lantern'];

    hide.forEach((item) => {
        event.add('c:hidden_from_recipe_viewers', item);
    });
});
