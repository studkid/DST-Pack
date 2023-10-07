ServerEvents.recipes((event) => {
    event.shaped(
        Item.of('minecraft:golden_leggings', '{Damage:0}').enchant('minecraft:swift_sneak', 3),
        [
            'GGG',
            'G G',
            'G G',
        ],
        {
            G: 'minecraft:gold_ingot',
        },
    ).id('minecraft:golden_leggings');
});
