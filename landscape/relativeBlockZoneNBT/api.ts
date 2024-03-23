import Vec3d from "../vec3d.js"

function operation(origin: Vec3d, pos1: Vec3d, pos2: Vec3d, indexNum: int): string {
    var pos1: Vec3d = pos1Vec3d.asRelative(origin) 
    var pos2: Vec3d = pos2Vec3d.asRelative(origin)

    return `${indexNum}: [[I; ${pos1.x}, ${pos1.y}, ${pos1.z}],[I; ${pos2.x}, ${pos2.y}, ${pos2.z}]]`
}