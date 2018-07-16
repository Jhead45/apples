import { Router } from 'express';
import passport from 'passport';
import { encode } from '../utils/tokens';
import { generateHash } from '../utils/security';
import Table from '../table';

let router = Router();
let users = new Table('users');


router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, token, info) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        } else if (!token) {
            return res.status(401).json(info);
        } else {
            return res.status(201).json(token);
        }
    })(req, res, next);
});


router.post('/signup', (req, res) => {
    console.log(req.body);
    generateHash(req.body.password)
        .then((hash) => {
            users.insert({
                // contact_agreement: req.body.contact_agreement,
                email: req.body.email,
                username: req.body.name,
                hash: hash
            })
        })
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log(err)
        })
});

export default router;