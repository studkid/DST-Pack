StartupEvents.registry('item', (event) => {
    event.create('hand_torch')
        .displayName('Torch')
        .texture('kubejs:item/hand_torch')
        .tooltip('§4Cannot be Placed')
        .maxStackSize(1);

    event.create('hand_lantern')
        .displayName('Lantern')
        .texture('kubejs:item/hand_lantern')
        .tooltip('§4Cannot be Placed')
        .maxStackSize(1);

    event.create('glow_berry_cookie')
        .displayName('Glow Berry Cookie')
        .texture('kubejs:item/glow_berry_cookie')
        .tooltip('Can be eaten anytime')
        .food((food) => {
            food
                .hunger(2)
                .saturation(0.2) // About half a drumstick
                .alwaysEdible()
                .fastToEat();
        });
});
