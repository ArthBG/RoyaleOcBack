
export class CardsList {
  constructor() {
    this.cards = [];
  }
  
  addCard(card) {
    this.cards.push(card);
  }

  getCardByID(id) {
    return this.cards.find((card) => card.id == id);
  }

  getAllCards(dados) {
    const { elixir, rarity, type, name } = dados;

    if (elixir || rarity || type || name) {''
      return this.getCardByElixirRaretyType(elixir, rarity, type, name);
    }
  
    return this.cards;
  }

  getCardsLength() {
    return this.cards.length;
  }
  getCardByName(name) {
    return this.cards.filter((card) => card.name == name);
  }

  getCardByType(type) {
   const card = this.cards.filter((card) => card.type.toLowerCase() == type.toLowerCase());
    return card;
  }

  getCardByRarity(rarity) {
    const card = this.cards.filter((card) => card.rarity.toLowerCase() == rarity.toLowerCase());
    return card;
  }

  getCardByElixir(elixir) {
    const card = this.cards.filter((card) => card.elixir == elixir);
    return card;
  }

  removeCard(id) {
    this.cards = this.cards.filter((card) => card.id != id);
  }

  getCardByElixirRaretyType(elixir, rarity, type, name) {
    
    if (elixir) {
      elixir = parseInt(elixir);
    }
    if (rarity) {
      rarity = rarity.toLowerCase();
    }
    if (type) {
      type = type.toLowerCase();
    }
    if (name) {
      name = name.toLowerCase();
    }

    const card = this.cards.filter((card) => {
      // Verifica cada condição separadamente, considerando se o parâmetro correspondente foi fornecido
      const elixirCondition = elixir == undefined || card.elixir == elixir;
      const rarityCondition = rarity == undefined || card.rarity.toLowerCase() == rarity;
      const typeCondition = type == undefined || card.type.toLowerCase() == type;
      const nameCondition = name == undefined || card.name.toLowerCase().includes(name);
    
      // Retorna verdadeiro apenas se pelo menos uma das condições for atendida
      return elixirCondition && rarityCondition && typeCondition && nameCondition;
    });
    
    return card;
    
  }

  updateCard(
    name,
    image,
    type,
    rarity,
    elixir,
    hp,
    deploytime,
    shieldhp,
    description,
    damage,
    damagepersecond,
    rangeddamage,
    damageondistance,
    damageonarea,
    damageonimpact,
    damageontower,
    chargedamage,
    damageondeath,
    spawnspeed,
    duration,
    radius,
    width,
    efecttime,
    freezetime,
    unities,
    arena,
    target,
    projectilerange,
    range,
    speed,
    impactspeed,
    id
  ) {
    const card = this.getCardByID(id);
    if (!card) return;
    if (card) {
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
