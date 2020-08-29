import produce from 'immer'

export function parseInput(char, dataObj) {
    let result = produce(dataObj, draftObj => {
        switch (char) {
            case "^": {
                draftObj.y++;
                if (!draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`]) {
                    draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`] = 0
                }
                if (draftObj.maxY < draftObj.y) {
                    draftObj.maxY = draftObj.y
                }
                break;
            }
            case "v": {
                draftObj.y--;
                if (!draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`]) {
                    draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`] = 0
                }
                if (draftObj.minY > draftObj.y) {
                    draftObj.minY = draftObj.y;
                }
                break
            }
            case "<": {
                draftObj.x--;
                if (!draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`]) {
                    draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`] = 0
                }
                if (draftObj.minX > draftObj.x) {
                    draftObj.minX = draftObj.x;
                }
                break
            }
            case ">": {
                draftObj.x++;
                if (!draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`]) {
                    draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`] = 0
                }
                if (draftObj.maxX < draftObj.x) {
                    draftObj.maxX = draftObj.x;
                }
                break
            }
            case "x": {
                draftObj.photoCount += 1;
                if (!draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`]) {
                    draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`] = 1
                } else {
                    draftObj.droneCoordinates[`${draftObj.x},${draftObj.y}`] += 1
                }
                break
            }
        }
    })

    return result
}