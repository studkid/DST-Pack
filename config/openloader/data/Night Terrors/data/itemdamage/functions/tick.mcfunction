execute as @a[nbt={SelectedItem:{id:"kubejs:hand_torch"}}] run scoreboard players add @s torchTimer 1

execute as @a[nbt={SelectedItem:{id:"kubejs:hand_torch"}}, scores={torchTimer=15..}] run scoreboard players remove @s torchUsage 1
execute as @a[nbt={SelectedItem:{id:"kubejs:hand_torch"}}] run title @a actionbar ["",{"score":{"name":"@s","objective":"torchUsage"}},"%"]

execute as @a[nbt={SelectedItem:{id:"kubejs:hand_torch"}}] if score @s torchUsage matches 0 run item modify entity @s weapon.mainhand itemdamage:break_tool

execute as @a[nbt={Inventory:[{id:"kubejs:hand_torch",tag:{Damage:101}}]}] run function itemdamage:break_tool

scoreboard players set @a[scores={torchUsage=..0}] torchUsage 100
scoreboard players set @a[scores={torchTimer=15..}] torchTimer 0

schedule function itemdamage:tick 1t