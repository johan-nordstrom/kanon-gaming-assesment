SELECT * FROM favorites f JOIN games g ON f.game_id = g.game_id 
WHERE g.type = 'SLOT';