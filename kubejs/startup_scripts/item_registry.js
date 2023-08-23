StartupEvents.registry('item', e => {
    e.create('hand_torch')
        .texture('kubejs:item/torch')
        .unstackable()
        .displayName("Hand Torch")
        .maxDamage(100);
})