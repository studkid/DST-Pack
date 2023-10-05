ServerEvents.tags('item', event => {
    const hide = ['minecraft:torch', 'minecraft:soul_torch', 'minecraft:lantern', 'minecraft:soul_lantern'];

    hide.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item);
    })
})