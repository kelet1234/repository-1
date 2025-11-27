while True:
	for i in range(get_world_size()):
		plant(Entities.Carrot)
		if can_harvest():
			harvest()
			till()
			use_item(Items.Water)
		move(North)
	
	move(East)