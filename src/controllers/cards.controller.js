import { Cards } from "../models/cards/Cards.js";
import { CardsList } from "../models/cards/CardsList.js";

const listCards = new CardsList();

export const getCards = (req, res) => {
    const cards = listCards.getAllCards();
    if(cards.length > 0){
        return res.status(200).send(cards);
    }
    else{
      return res.status(200).send({message: "Sem Cartas Cadastradas"});
    }

}

export const getCardByID = (req, res) => {
    const { id } = req.params;
    const card = listCards.getCardByID(id);
    if(card){
        return res.status(200).send(card);
    }
    else{
        return res.status(404).send({message: "Carta não encontrada"});
    }
}

export const addCard = (req, res) => {
    const { name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed } = req.body;
    const card = new Cards(name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed);
    listCards.addCard(card);
    return res.status(201).send(card);
}

export const updateCard = (req, res) => {
    const { id } = req.params;
    const { name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed } = req.body;
    const card = listCards.updateCard(name, image, type, rarity, elixir, hp, deploytime, shieldhp, description, damage, damagepersecond, rangeddamage, damageondistance, damageonarea, damageonimpact, damageontower, chargedamage, damageondeath, spawnspeed, duration, radius, width, efecttime, freezetime, unities, arena, target, projectilerange, range, speed, impactspeed, id);
    if(card){
        return res.status(200).send(card);
    }
    else{
        return res.status(404).send({message: "Carta não encontrada"});
    }
}

export const removeCard = (req, res) => {
    const { id } = req.params;
    listCards.removeCard(id);
    return res.status(200).send({message: "Carta removida com sucesso"});
}