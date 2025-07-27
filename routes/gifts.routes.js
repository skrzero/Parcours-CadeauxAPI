const express = require('express');
const router = express.Router();
const db = require('../config/db');
const giftSchema = require('../schemas/gift.schema');

// Liste des cadeaux
router.get('/', async (req, res, next) => {
    try {
        //TODO : Ecrire la requête dans les '' qui permet de récuperer tous les cadeaux
        const [gifts] = await db.query('select *from gifts');
        res.json(gifts);
    } catch (err) {
        next(err);
    }
});

// Ajouter un cadeau
router.post('/', async (req, res, next) => {
    try {
        const { error, value } = giftSchema.validate(req.body);
        if (error) return res.status(400).json({ error: error.details[0].message });
        
        const { title, description, price, reserved = false } = value;
        //TODO : Ecrire la requête dans les '' qui permet d'ajouter un cadeau sur SQL
        const [result] = await db.query(
            'insert into gifts (title ,description ,price ,reserved) values ("console", "xbox", 299, 1)',
            [title, description, price, reserved]
        );
        res.status(201).json({ id: result.insertId, ...value });
    } catch (err) {
        next(err);
    }
});

// Modifier un cadeau
router.patch('/:id', async (req, res, next) => {
    try {
        const { error, value } = giftSchema.validate(req.body, { presence: 'optional' });
        if (error) return res.status(400).json({ error: error.details[0].message });

                //TODO : Ecrire la requête dans les '' qui permet de modifier un cadeau sur SQL
        const [result] = await db.query('update gifts set title = ? where id =?', [value, req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Cadeau non trouvé' });
        res.json({ message: 'Cadeau mis à jour' });
    } catch (err) {
        next(err);
    }
});

// Supprimer un cadeau
router.delete('/:id', async (req, res, next) => {
    try {
        const [result] = await db.query('DELETE FROM gifts WHERE id = ?', [req.params.id]);
        if (result.affectedRows === 0) return res.status(404).json({ error: 'Cadeau non trouvé' });
        res.json({ message: 'Cadeau supprimé' });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
