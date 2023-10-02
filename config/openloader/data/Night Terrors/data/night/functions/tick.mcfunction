execute as @a[tag=!registered] at @s run function night:register

execute as @a[predicate=night:indark,gamemode=!spectator,gamemode=!creative,nbt=!{ActiveEffects:[{Id:16}]}] at @s run function night:dark/unsafe
execute as @a[predicate=!night:indark] run scoreboard players set @s darknessTimer 201
execute as @a[nbt={ActiveEffects:[{Id:16}]}] run scoreboard players set @s darknessTimer 201

schedule function night:tick 1t 