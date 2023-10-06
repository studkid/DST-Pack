# -----Iterate timers-----
execute as @a[predicate=itemdamage:holdingtorch] run function itemdamage:torch/torch_tick
execute as @a[predicate=itemdamage:holdinglantern] run function itemdamage:lantern/lantern_tick

# -----Reset Timers-----
scoreboard players set @a[scores={torchUsage=..0}] torchUsage 100
scoreboard players set @a[scores={torchTimer=15..}] torchTimer 0

scoreboard players set @a[scores={lanternUsage=..0}] lanternUsage 100
scoreboard players set @a[scores={lanternTimer=96..}] lanternTimer 0

# -----Reschedule-----
schedule function itemdamage:tick 1t