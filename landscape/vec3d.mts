export default class Vec3d {
    public x: number
    public y: number
    public z: number
    
    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z
    }

    public asRelative(originVec3d: Vec3d): Vec3d {
        return new Vec3d(
            this.x - originVec3d.x,
            this.y - originVec3d.y,
            this.z - originVec3d.z)
    }
}