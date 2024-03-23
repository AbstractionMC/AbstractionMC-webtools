import Vec3d from "../vec3d.mjs"

function operation(origin: Vec3d, pos1: Vec3d, pos2: Vec3d, indexNum: number): string {
    pos1 = pos1.asRelative(origin) 
    pos2 = pos2.asRelative(origin)

    return `${indexNum}: [[I; ${pos1.x}, ${pos1.y}, ${pos1.z}],[I; ${pos2.x}, ${pos2.y}, ${pos2.z}]]`
}