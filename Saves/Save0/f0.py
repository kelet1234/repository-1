while True:
	for i in range(get_world_size()):
		plant(Entities.Tree)
		if can_harvest():
			harvest()
			use_item(Items.Water)
		move(North)
	
	move(East)