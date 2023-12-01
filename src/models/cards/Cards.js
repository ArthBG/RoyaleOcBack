export class Cards{
    constructor(name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed){
        this.name = name;
        this.image = image;
        this.type = type;
        this.rarity = rarity;
        this.elixir = elixir;
        this.hp = hp;
        this.deploytime = deploytime;
        this.shieldhp = shieldhp;
        this.description = description;
        this.damage = damage;
        this.damagepersecond = damagepersecond;
        this.rangeddamage = rangeddamage;
        this.damageondistance = damageondistance;
        this.damageonarea = damageonarea;
        this.damageonimpact = damageonimpact;
        this.damageontower = damageontower;
        this.chargedamage = chargedamage;
        this.damageondeath = damageondeath;
        this.spawnspeed = spawnspeed;
        this.duration = duration;
        this.radius = radius;
        this.width = width;
        this.efecttime = efecttime;
        this.freezetime = freezetime;
        this.unities = unities;
        this.arena = arena;
        this.target = target;
        this.projectilerange = projectilerange;
        this.range = range;
        this.speed = speed;
        this.impactspeed = impactspeed;
        this.id = this.generateId();
    }

    generateId(){
        return Math.floor(Math.random() * 12000);
    }

}