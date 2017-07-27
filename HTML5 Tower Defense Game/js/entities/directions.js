var TILE_WIDTH = 32;
var TILE_HEIGHT = 32;

function getDirection(x, y, level){
    // Handle situations where a collision pushes the enemies off the screen.
    if (y < 0)
        y = 0;

    else if (y > 19 * TILE_HEIGHT)
        y = 19 * TILE_HEIGHT;

    if (x < 0)
        x = 0;
    else if (x > 29 * TILE_WIDTH)
        x = 29 * TILE_WIDTH;

    var direction;

    switch(level){

        case 1:
            // Mall Level
            direction = [
                ['SE', 'SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SW'],//0
                ['SE', 'SE', 'SE', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],
                ['SE', 'SE', 'SE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],
                ['SE', 'SE', 'E', 'E', 'NE', 'NE', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],
                ['SE', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'W'],//4
                ['E', 'E', 'E', 'E', 'NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'S', 'W', 'W', 'W', 'W', 'W'],
                ['E', 'NE', 'E', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'S', 'S', 'SE', 'SE', 'S', 'S', 'SE', 'S', 'S', 'S', 'E', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'SW'],
                ['NE', 'N', 'N', 'E', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'E', 'SE', 'SE', 'S', 'SE', 'SE', 'SE', 'S', 'SW'],
                ['NE', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SE', 'SE', 'SE', 'S', 'SW'],
                ['N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'E', 'E', 'E', 'SE', 'SW'],//9
                ['S', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'E', 'E', 'E', 'NE', 'NW'],
                ['S', 'S', 'S', 'E', 'NE', 'NE', 'NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NE', 'NE', 'NE', 'N', 'NW'],
                ['SE', 'S', 'S', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'NE', 'NE', 'N', 'NE', 'NE', 'NE', 'N', 'NW'],
                ['SE', 'E', 'E', 'E', 'NE', 'NE', 'N', 'E', 'NE', 'NE', 'NE', 'N', 'N', 'NE', 'NE', 'N', 'N', 'NE', 'N', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'NW'],
                ['E', 'E', 'E', 'E', 'SE', 'S', 'S', 'E', 'SE', 'SE', 'N', 'N', 'E', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'N', 'W', 'W', 'W', 'W', 'W'],//14
                ['NE', 'E', 'E', 'E', 'E', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],
                ['NE', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],
                ['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'E', 'E', 'E', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],
                ['NE', 'NE', 'NE', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],
                ['NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW'] //19
            ];
            break;

        case 2:
            // Bullseye level
            direction = [
                ['SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'W'],//0
                ['E', 'SE', 'SE', 'S', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'W', 'W'],
                ['E', 'E', 'E', 'S', 'SW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                ['NE', 'NE', 'NE', 'S', 'SW', 'SW', 'W', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW'],
                ['S', 'S', 'SW', 'S', 'S', 'SW', 'W', 'SE', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'N', 'N', 'NW', 'NW', 'NW', 'W', 'NW', 'NW'],//4
                ['S', 'S', 'SW', 'S', 'S', 'SW', 'W', 'S', 'S', 'S', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'S', 'S', 'SW', 'SW', 'SW', 'W', 'W', 'W'],
                ['S', 'S', 'SW', 'S', 'S', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                ['S', 'S', 'SW', 'S', 'SW', 'W', 'W', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'NW', 'NW', 'W', 'W', 'W', 'W'],
                ['S', 'SW', 'SW', 'S', 'SW', 'SW', 'W', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'N', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],
                ['W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'E', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],//9
                ['N', 'NW', 'NW', 'N', 'NW', 'NW', 'W', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'E', 'S', 'S', 'S', 'SW', 'W', 'W', 'W'],
                ['N', 'N', 'NW', 'N', 'NW', 'NW', 'W', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'SW', 'E', 'S', 'S', 'SW', 'SW', 'W', 'W', 'W'],
                ['N', 'N', 'NW', 'N', 'N', 'NW', 'W', 'W', 'S', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'SW', 'E', 'S', 'SW', 'SW', 'SW', 'W', 'W', 'W'],
                ['N', 'N', 'NW', 'N', 'N', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'NW', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                ['N', 'N', 'NW', 'N', 'N', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'N', 'N', 'N', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],//14
                ['E', 'E', 'E', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'NW', 'NW', 'N', 'N', 'NW', 'NW', 'W', 'W', 'W'],
                ['E', 'E', 'E', 'N', 'N', 'NW', 'N', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'N', 'E', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],
                ['E', 'E', 'E', 'N', 'N', 'NW', 'E', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W', 'E', 'N', 'N', 'NW', 'W', 'W', 'W', 'W'],
                ['E', 'E', 'E', 'N', 'N', 'NW', 'E', 'E', 'N', 'N', 'N', 'NW', 'N', 'N', 'E', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W', 'E', 'N', 'N', 'N', 'NW', 'W', 'W', 'W'],
                ['NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'N', 'NW', 'W', 'W'] //19
            ];
            break;

        case 3:
            // Bestbuy level
            direction = [
                ['E', 'E', 'S', 'S', 'S', 'S', 'W', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'W', 'W'],//0
                ['E', 'E', 'S', 'S', 'S', 'S', 'W', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'W', 'W'],
                ['E', 'E', 'S', 'S', 'S', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'SW', 'W', 'W'],
                ['E', 'E', 'S', 'SE', 'SE', 'SE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'S', 'S', 'S'],
                ['E', 'E', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'SE', 'SE', 'S', 'S', 'S'],//4
                ['E', 'E', 'S', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'E', 'SE', 'S', 'S', 'S'],
                ['E', 'E', 'S', 'NE', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'SE', 'SE', 'S', 'S', 'S'],
                ['E', 'E', 'S', 'NE', 'N', 'N', 'W', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'E', 'SE', 'SE', 'S', 'S', 'S'],
                ['E', 'E', 'SE', 'SE', 'S', 'S', 'S', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'SE', 'SE', 'S', 'S', 'S'],
                ['E', 'E', 'E', 'E', 'SE', 'SE', 'SE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],//9
                ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E'],
                ['E', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N'],
                ['E', 'E', 'N', 'NE', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'NE', 'NE', 'N', 'N', 'N'],
                ['E', 'E', 'N', 'E', 'NE', 'NE', 'N', 'E', 'NE', 'NE', 'NE', 'N', 'N', 'NE', 'NE', 'N', 'N', 'NE', 'N', 'N', 'N', 'E', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'NW'],
                ['E', 'E', 'N', 'SE', 'S', 'S', 'S', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'SE', 'S', 'S', 'NE', 'N', 'N', 'N', 'N'],//14
                ['E', 'E', 'N', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N'],
                ['E', 'E', 'N', 'E', 'E', 'NE', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'NE', 'N', 'N', 'W', 'W'],
                ['E', 'E', 'N', 'NE', 'N', 'N', 'N', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'NW', 'W'],
                ['E', 'E', 'N', 'NE', 'N', 'N', 'E', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'NE', 'N', 'NW', 'N', 'N', 'N', 'W', 'W'],
                ['E', 'E', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'W', 'W'] //19
            ];
            break;

        default:
            // Floormart level
            direction = [
                ['SE', 'S', 'S', 'S', 'S', 'S', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'SE', 'S', 'S', 'S', 'S', 'SW'],//0
                ['SE', 'SE', 'SE', 'S', 'S', 'W', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'N', 'N', 'N', 'N', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'E', 'S', 'SW', 'SW', 'SW', 'W'],
                ['SE', 'SE', 'SE', 'SE', 'S', 'S', 'S', 'S', 'W', 'W', 'W', 'W', 'W', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'S', 'S', 'S', 'S', 'SW', 'SW', 'SW', 'W'],
                ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'N', 'N', 'N', 'N', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],//4
                ['E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W', 'W', 'W', 'W', 'W', 'W', 'W', 'W'],
                ['E', 'NE', 'E', 'E', 'E', 'E', 'E', 'NE', 'N', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW', 'NW', 'NW', 'N', 'N', 'NW', 'NW', 'NW', 'NW', 'W'],
                ['E', 'N', 'NE', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'W', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'N', 'W', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'NW', 'NW', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW', 'W', 'W', 'E', 'E', 'E', 'NE', 'N', 'N', 'NW', 'W', 'W', 'E', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'N', 'W'],
                ['E', 'N', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'E', 'NE', 'N', 'N', 'N', 'NW', 'NW', 'N', 'W'],//9
                ['E', 'N', 'NE', 'NE', 'NE', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'E', 'NE', 'N', 'N', 'N', 'NW', 'NW', 'N', 'W'],
                ['E', 'N', 'NE', 'NE', 'N', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'E', 'NE', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'NE', 'N', 'N', 'N', 'N', 'NW', 'NW', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'NW', 'E', 'NE', 'N', 'N', 'NW', 'NE', 'N', 'N', 'NW', 'E', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'N', 'W'],//14
                ['E', 'N', 'N', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'E', 'N', 'N', 'NW', 'NE', 'N', 'N', 'N', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'NE', 'N', 'N', 'E', 'N', 'N', 'NW', 'W', 'E', 'NE', 'N', 'N', 'E', 'N', 'NW', 'W', 'E', 'NE', 'N', 'N', 'N', 'W'],
                ['E', 'N', 'N', 'N', 'N', 'NW', 'W', 'E', 'NE', 'N', 'N', 'E', 'N', 'N', 'NW', 'W', 'E', 'N', 'N', 'N', 'E', 'N', 'NW', 'NW', 'NE', 'N', 'N', 'N', 'N', 'W'],
                ['NE', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'N', 'NW'] //19
            ];
            break;
    }



    return direction[Math.floor((y + 0.5) / TILE_HEIGHT)][Math.floor((x + 0.5) / TILE_WIDTH)];
};

/*
 // Mall level
 var spawnPoints = [
 // Column 1, rows 6, 7, 8, 9.
 {x: 0, y: 5 * TILE_HEIGHT},
 {x: 0, y: 6 * TILE_HEIGHT},
 {x: 0, y: 7 * TILE_HEIGHT},
 {x: 0, y: 8 * TILE_HEIGHT},

 // Column 1, rows 12, 13, 14, 15.
 {x: 0, y: 11 * TILE_HEIGHT},
 {x: 0, y: 12 * TILE_HEIGHT},
 {x: 0, y: 13 * TILE_HEIGHT},
 {x: 0, y: 14 * TILE_HEIGHT},


 // Columns 13, 14, 15, 16, 17, row 1.
 {x: 12 * TILE_WIDTH, y: 0},
 {x: 13 * TILE_WIDTH, y: 0},
 {x: 14 * TILE_WIDTH, y: 0},
 {x: 15 * TILE_WIDTH, y: 0},
 {x: 16 * TILE_WIDTH, y: 0},

 // Columns 13, 14, 15, 16, 17, row 20.
 {x: 12 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 13 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 14 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 15 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 16 * TILE_WIDTH, y: 19 * TILE_HEIGHT}

 ];

 // Bullseye level
 var spawnPoints = [
 // Columns 24, 25, 26, 27, 28, row 1.
 {x: 23 * TILE_WIDTH, y: 0},
 {x: 24 * TILE_WIDTH, y: 0},
 {x: 25 * TILE_WIDTH, y: 0},
 {x: 26 * TILE_WIDTH, y: 0},
 {x: 27 * TILE_WIDTH, y: 0},

 // Columns 24, 25, 26, 27, 28, row 20.
 {x: 23 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 24 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 25 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 26 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 27 * TILE_WIDTH, y: 19 * TILE_HEIGHT},

 // Columns 16, 17, 18, row 20.
 {x: 15 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 16 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 17 * TILE_WIDTH, y: 19 * TILE_HEIGHT},

 // Columns 12, 13, 14, row 20.
 {x: 11 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 12 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 13 * TILE_WIDTH, y: 19 * TILE_HEIGHT}

 ];

 // Best buy level
 var spawnPoints = [
 // Columns 13, 14, 15, 16, 17, row 1.
 {x: 2 * TILE_WIDTH, y: 0},
 {x: 3 * TILE_WIDTH, y: 0},
 {x: 4 * TILE_WIDTH, y: 0},
 {x: 5 * TILE_WIDTH, y: 0},

 {x: 25 * TILE_WIDTH, y: 0},
 {x: 26 * TILE_WIDTH, y: 0},
 {x: 27 * TILE_WIDTH, y: 0},

 // Columns 13, 14, 15, 16, 17, row 20.
 {x: 2 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 3 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 4 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 5 * TILE_WIDTH, y: 19 * TILE_HEIGHT},

 {x: 25 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 26 * TILE_WIDTH, y: 19 * TILE_HEIGHT},
 {x: 27 * TILE_WIDTH, y: 19 * TILE_HEIGHT}
 ];

 // Floormart level
 var spawnPoints = [
 // Middle of columns 6, 7, 8, 9, 10, row 20.
 {x: 5 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 6 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 7 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 8 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 9 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},

 // Middle of columns 15, 16, 17, 18 row 20.
 {x: 14 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 15 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 16 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 17 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},

 // Middle of columns 22, 23, 24, 25 row 20.
 {x: 21 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 22 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 23 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2},
 {x: 24 * TILE_WIDTH + TILE_WIDTH / 2, y: 19 * TILE_HEIGHT + TILE_HEIGHT / 2}
 ];
 */