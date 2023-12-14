const Qcm = require('./qcm');
const Question = require('./question');

const qcms = [
    new Qcm({
        id: 0,
        name: 'Introduction Vanilla JS',
        nbpoints: 20,
        subject: 'Javascript',
        questions: [
            new Question(1, 'Question JS', ['Option 1', 'Option 2'], 'Option 1')
        ]
    }),
    // Plus de QCMs ici
];

const addQcm = (qcmData) => {
    const maxId = qcms.reduce((max, qcm) => qcm.id > max ? qcm.id : max, 0);
    const newQcm = new Qcm({
        id: maxId + 1,
        name: qcmData.name,
        subject: qcmData.subject,
        nbpoints: qcmData.nbpoints,
        questions: qcmData.questions.map(q => new Question(null, q.text, q.choices, q.correctAnswer))
    });
    qcms.push(newQcm);
};

module.exports = { qcms, addQcm };
