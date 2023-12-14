class Qcm {
    id;
    name;
    theme;
    subject;
    author;
    nbpoints;
    questions; // Champ pour stocker les questions

    constructor(qcmToCreate) {
        this.id = qcmToCreate.id;
        this.name = qcmToCreate.name;
        this.theme = qcmToCreate.theme;
        this.subject = qcmToCreate.subject;
        this.author = qcmToCreate.author;
        this.nbpoints = qcmToCreate.nbpoints;
        this.questions = qcmToCreate.questions || []; // Initialisation des questions
    }

    // Getters pour accéder aux propriétés
    get getId() {
        return this.id;
    }

    get getName() {
        return this.name;
    }

    get getTheme() {
        return this.theme;
    }

    get getSubject() {
        return this.subject;
    }

    get getAuthor() {
        return this.author;
    }

    get getNbPoints() {
        return this.nbpoints;
    }

    get getQuestions() {
        return this.questions;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            theme: this.theme,
            subject: this.subject,
            author: this.author,
            nbpoints: this.nbpoints,
            questions: this.questions.map(question => question.toJSON())
        };
    }
}

module.exports = Qcm;
