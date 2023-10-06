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
});
