execute if score @s darknessTimer matches 1.. run scoreboard players remove @s darknessTimer 1

execute if score @s darknessTimer matches 200 run title @s actionbar [{"text": "It's so dark..."}]

execute if score @s darknessTimer matches 120 run playsound eyesinthedarkness:mob.eyes.laugh hostile @s
execute if score @s darknessTimer matches 120 run title @s actionbar [{"text": "Is there something there?","color":"red"}]

execute if score @s darknessTimer matches ..70 at @s run particle twilightforest:annihilate ~ ~1 ~ 0.2 0.2 0.2 0.1 1
execute if score @s darknessTimer matches 70 run playsound twilightforest:entity.twilightforest.alpha_yeti.growl hostile @s

execute if score @s darknessTimer matches ..50 at @s run particle twilightforest:annihilate ~ ~1 ~ 0.2 0.2 0.2 0.1 5

execute if score @s darknessTimer matches 0 at @s run function night:dark/damage