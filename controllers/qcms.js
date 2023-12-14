const { qcms, addQcm, } = require('../models/inmemory');

const displayQcms = (req, res) => {
    res.render('qcms', { qcms: qcms });
};

const displayQcmDetailed = (req, res) => {
    const id = Number(req.params.qcmid);
    const qcm = qcms.find(qcm => qcm.id === id);
    res.render('qcm', { qcm });
};

const displayQcmJson = (req, res) => {
    res.json({ qcms });
};

const displayFormQcm = (req, res) => {
    res.render('newqcm');
};

const createNewForm = (req, res) => {
    addQcm({
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints,
        questions: req.body.questionText.map((text, index) => ({
            text: text,
            choices: req.body.choices[index].split(','),
            correctAnswer: req.body.correctAnswer[index]
        }))
    });
    res.redirect('/qcms');
};

const submitAnswer = (req, res) => {
    // Générer un nombre aléatoire (0 ou 1)
    const randomResponse = Math.random() < 0.5;

    if (randomResponse) {
        // Si le nombre aléatoire est inférieur à 0.5, dire "Bravo"
        res.send("Bravo !");
    } else {
        // Sinon, dire "Dommage"
        res.send("Dommage !");
    }
};

    

module.exports = { displayQcms, displayFormQcm, createNewForm, displayQcmJson, displayQcmDetailed, submitAnswer };
