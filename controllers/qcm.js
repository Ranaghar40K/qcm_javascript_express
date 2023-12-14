const { qcms, addQcm } = require('../models/inmemory');
const Question = require('../models/question'); // Assurez-vous que le chemin est correct

const displayQcm = (req, res) => {
    res.render('qcm', { qcms: qcms });
};

const displayForms = (req, res) => {
    res.render('newqcm');
};

const createQcm = (req, res) => {
    // Extraire les données des questions
    const questionsData = req.body.questionText.map((text, index) => ({
        text: text,
        choices: req.body.choices[index].split(','),
        correctAnswer: req.body.correctAnswer[index]
    }));

    // Créer des objets Question
    const questions = questionsData.map(q => new Question(null, q.text, q.choices, q.correctAnswer));

    // Ajouter le QCM avec les questions
    addQcm({
        name: req.body.name,
        subject: req.body.subject,
        nbpoints: req.body.nbpoints,
        questions: questions
    });

    res.redirect('/qcm');
};

module.exports = { displayQcm, displayForms, createQcm };
