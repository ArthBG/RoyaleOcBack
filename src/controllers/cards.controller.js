import { Cards } from "../models/cards/Cards.js";
import { CardsList } from "../models/cards/CardsList.js";
import { cardsBody } from "../data/cardsbody.js";


const listCards = new CardsList();

const cards = cardsBody.map(
  (card) => {

    const cardsNew = new Cards(
      card.name,
      card.image,
      card.type,
      card.rarity,
      card.elixir,
      card.hp,
      card.deploytime,
      card.shieldhp,
      card.description,
      card.damage,
      card.damagepersecond,
      card.rangeddamage,
      card.damageondistance,
      card.damageonarea,
      card.damageonimpact,
      card.damageontower,
      card.chargedamage,
      card.damageondeath,
      card.spawnspeed,
      card.duration,
      card.radius,
      card.width,
      card.efecttime,
      card.freezetime,
      card.unities,
      card.arena,
      card.target,
      card.projectilerange,
      card.range,
      card.speed,
      card.impactspeed
    )
    listCards.addCard(cardsNew);
  }
);

export const getCards = (req, res) => {
  let { name, type, rarity, elixir, orderbyname, orderbyelixir, orderbyrarity } = req.query;

  const dados = { name, type, rarity, elixir, orderbyname, orderbyelixir, orderbyrarity }

  const array = listCards.getAllCards(dados);
  
    return res
      .status(200)
      .send({
        total: array.length,
        cards: array,
      });
  
};

export const getCardByID = (req, res) => {
  const { id } = req.params;
  const card = listCards.getCardByID(id);
  if (card) {
    return res.status(200).send(card);
  } else {
    return res.status(404).send({ message: "Carta não encontrada" });
  }
};

export const createCard = (req, res) => {
  const {
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
  } = req.body;
  // const errors = [];

  // 
  // if (!name) {
  //     errors.push("Nome não informado");
  // }
  // else if (name.find(card => card.name === name)) {
  //     errors.push("Nome já cadastrado");
  // }
  // else if (elixir < 0 || elixir > 10) {
  //     errors.push(elixir + " não é um valor válido, o valor deve ser entre 0 e 10");
  // }
  // else if (!type || !["Tropa", "Construção", "Feitiço"].includes(type)) {
  //     errors.push("Tipo não informado ou inválido");
  // }
  // else if (!rarity || !["Comum", "Rara", "Épica", "Lendária"].includes(rarity)) {
  //     errors.push("Raridade não informada ou inválida");
  // }
  // else if (!hp || hp < 0 || hp > 8756) {
  //     errors.push("Vida da carta não informada ou inválida");
  // }

  // if (errors.length > 0) {
  //     return res.status(400).send({ message: `${errors.flat()}` });
  // }
  const card = new Cards(
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
    impactspeed
  );
  listCards.addCard(card);
  return res.status(201).send(card);
};

export const updateCard = (req, res) => {
  const { id } = req.params;
  const {
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
  } = req.body;
  const card = listCards.updateCard(
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
  );
  if (card) {
    return res.status(200).send(card);
  } else {
    return res.status(404).send({ message: "Carta não encontrada" });
  }
};

export const deleteCard = (req, res) => {
  const { id } = req.params;
  listCards.removeCard(id);
  return res.status(200).send({ message: "Carta removida com sucesso" });
};
