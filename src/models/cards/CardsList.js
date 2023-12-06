
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
    const { name, type, rarity, elixir, orderbyname, orderbyelixir, orderbyrarity } = dados;

    if (elixir || rarity || type || name) {
      return this.getCardByElixirRaretyType(name, type, rarity, elixir);
    }
    // if (orderbyname || orderbyelixir || orderbyrarity) {
    //  return this.orderCardsBy(orderbyname, orderbyelixir, orderbyrarity);
    //     }

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

  // orderCardsBy(orderbyname, orderbyelixir, orderbyrarity) {
  //   let card = [...this.cards]; 
  
  //   if (orderbyname === 'asc') {
  //     card.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (orderbyname === 'desc') {
  //     card.sort((a, b) => b.name.localeCompare(a.name));
  //   }
  
  //   if (orderbyelixir === 'asc') {
  //     card.sort((a, b) => a.elixir - b.elixir);
  //   } else if (orderbyelixir === 'desc') {
  //     card.sort((a, b) => b.elixir - a.elixir);
  //   }
  
  //   if (orderbyrarity === 'asc' || orderbyrarity === 'desc') {
  //     const rarityValues = {
  //       'Comum': 1,
  //       'Raro': 2,
  //       'Épico': 3,
  //       'Lendário': 4,
  //       'Campeão': 5
  //     };
  
  //     card.sort((a, b) => {
  //       const rarityA = rarityValues[a.rarity];
  //       const rarityB = rarityValues[b.rarity];
  
  //       if (orderbyrarity === 'asc') {
  //         return rarityA - rarityB;
  //       } else {
  //         return rarityB - rarityA;
  //       }
  //     });
  //   }
  
  //   console.log(card);
  //   return card;
  // }
  
  getCardByElixirRaretyType( name, type, rarity, elixir) {
    
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
      // Retorna true se todas as condições forem verdadeiras
      console.log(card);
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
