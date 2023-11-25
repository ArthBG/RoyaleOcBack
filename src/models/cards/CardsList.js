import { cardsBody } from "../../data/cardsbody.js";
export class CardsList {
    constructor() {
        this.cards = [];
        const cardBody = cardsBody;
        this.cards.push(cardBody); 
    }

    addCard(card) {
        this.cards.push(card);
    }

    getCardByID(id) {
        return this.cards.find(card => card.id === id);
    }

    getAllCards() {
        return this.cards;
    }

    getCardByName(name) {
        return this.cards.find(card => card.name === name);
    }

    getCardByType(type) {
        return this.cards.find(card => card.type === type);
    }

    getCardByRarity(rarity) {
        return this.cards.find(card => card.rarity === rarity);
    }

    getCardByElixir(elixir) {
        return this.cards.find(card => card.elixir === elixir);
    }

    removeCard(id) {
        this.cards = this.cards.filter(card => card.id !== id);
    }

    updateCard(name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed, id){
        const card = this.getCardByID(id);
        if(!card) return;
        if(card){
        card.name = name;
        card.image = image;
        card.type = type;
        card.rarity = rarity;
        card.elixir = elixir;
        card.hp = hp;
        card.deploytime = deploytime;
        card.shieldhp = shieldhp;
        card.description = description;
        card.damage = damage;
        card.damagepersecond = damagepersecond;
        card.rangeddamage = rangeddamage;
        card.damageondistance = damageondistance;
        card.damageonarea = damageonarea;
        card.damageonimpact = damageonimpact;
        card.damageontower = damageontower;
        card.chargedamage = chargedamage;
        card.damageondeath = damageondeath;
        card.spawnspeed = spawnspeed;
        card.duration = duration;
        card.radius = radius;
        card.width = width;
        card.efecttime = efecttime;
        card.freezetime = freezetime;
        card.unities = unities;
        card.arena = arena;
        card.target = target;
        card.projectilerange = projectilerange;
        card.range = range;
        card.speed = speed;
        card.impactspeed = impactspeed;
        }

        return card;
    }

}