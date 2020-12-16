const express = require('express');
const router = express.Router();
const God = require('../models/gods')

router.post("/", (req, res) => {
    const god1 = new God({
        name: 'Achilles',
    });
    const meleeGuardian = { class: 'Guardian', attack: 'melee' }
    const meleeWarrior = { class: 'Warrior', attack: 'melee' }
    const meleeAssassin = { class: 'Assassin', attack: 'melee' }
    const rangedHunter = { class: "Hunter", attack: "ranged"}
    const rangedMage = { class: "Mage", attack: "ranged"}

    const god2 = new God({
        name: 'Amaterasu',
    });

    const god3 = new God({
        name: 'Danzaburou'
    })

    const god4 = new God({
        name: 'Aphrodite'
    })

    const god5 = new God({
        name: 'Hades'
    })

    const god6 = new God({
        name: 'Awilix'
    })

    god6.class.push(meleeAssassin)
    god6.save()

    const god7 = new God({
        name: 'Kali'
    })

    god7.class.push(meleeAssassin)
    god7.save()

    god5.class.push(rangedMage)
    god5.save()

    god4.class.push(rangedMage)
    god4.save()

    god3.class.push(rangedHunter)
    god3.save()

    god2.class.push(meleeWarrior)
    god2.save()

    god1.class.push(meleeWarrior)
    god1.save()
    
    res.send("Hello from smite");
  });

router.delete("/remove", (req,res) => {
    God.deleteOne({name: 'Hades'}, function(err) {
        if (err) console.log(err);
        res.send("removing god")
    })
})

router.put("/update", (req, res) => {
    God.findOneAndUpdate({name: 'Hades'}, {$set: {name: 'Not Hades'}}, function(err) {
        if (err) console.log(err);
        res.send("updated hades")
    })
})

router.get("/find", (req, res) => {
    God.find({name: 'Hades'}).then((hades) => console.log(hades))
    res.send("Hades in the terminal")
})

module.exports = router;