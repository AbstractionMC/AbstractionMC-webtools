export default class Vec3d {
    public x: int
    public y: int
    public z: int
    
    constructor(x: int, y: int, z: int) {
        this.x = x;
        this.y = y;
        this.z = z
    }

    export public asRelative(originVec3d: Vec3d): Vec3d {
        return new Vec3d(
            this.x - originVec3d.x,
            this.y - originVec3d.y,
            this.z - originVec3d.z)
    }
}