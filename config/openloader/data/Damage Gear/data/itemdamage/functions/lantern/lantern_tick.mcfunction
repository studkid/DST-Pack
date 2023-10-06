# Iterate Timer
scoreboard players add @s lanternTimer 1

# Display durability
title @s actionbar ["",{"score":{"name":"@s","objective":"lanternUsage"}},"%"]

# Check for durability use
execute if score @s lanternTimer matches 96 run scoreboard players remove @s lanternUsage 1

# Break Lantern
execute if score @s lanternUsage matches 0 run playsound minecraft:entity.item.break player @s
execute as @s[predicate=itemdamage:mainlantern] if score @s lanternUsage matches 0 run item modify entity @s weapon.mainhand itemdamage:break_tool
execute as @s[predicate=itemdamage:offlantern] if score @s lanternUsage matches 0 run item modify entity @s weapon.offhand itemdamage:break_tool
