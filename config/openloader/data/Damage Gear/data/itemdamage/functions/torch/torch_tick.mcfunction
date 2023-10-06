# Iterate Timer
scoreboard players add @s torchTimer 1

# Display durability
title @s actionbar ["",{"score":{"name":"@s","objective":"torchUsage"}},"%"]

# Check for durability use
execute if score @s torchTimer matches 15 run scoreboard players remove @s torchUsage 1

# Break Torch
execute if score @s torchUsage matches 0 run playsound minecraft:entity.item.break player @s
execute as @s[predicate=itemdamage:maintorch] if score @s torchUsage matches 0 run item modify entity @s weapon.mainhand itemdamage:break_tool
execute as @s[predicate=itemdamage:offtorch] if score @s torchUsage matches 0 run item modify entity @s weapon.offhand itemdamage:break_tool
