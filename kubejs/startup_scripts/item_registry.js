StartupEvents.registry('item', e => {
    e.create('hand_torch')
        .texture('kubejs:item/torch.png')
        .unstackable()
        .displayName("Hand Torch")
        .maxDamage(100);
})