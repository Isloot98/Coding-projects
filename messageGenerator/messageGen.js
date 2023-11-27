// Pieces of the sentences below
const subjects = {
    pronouns: ["He", "I", "She", "They"],
    names: ["Harry", "Gary", "Larry", "Barry"],
    nouns: ["The cat", "The dog", "The Car"],
};
let verbs = ["has", "does", "says", "goes", "can", "gets", "is" ];
const verbsI = ["have", "do", "say", "go", "can", "get", "am"];
const verbsThey = ["have", "do", "say", "go", "can", "get", "are"];
const adjectivesActions = ["attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", 
"gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly", "a ball", "something smart", "to Mongolia", "coke", "do it", "all the things"];


// Logic written under this line

const getRandomWord = array => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const conjugateVerbs = (pronoun) => {
if (pronoun === "I") {
    return getRandomWord(verbsI);
} else if (pronoun == "They") {
    return getRandomWord(verbsThey);
} else {
    return getRandomWord(verbs);
}
};

const filterAdjectivesActions = (subject, verbs) => {
    let filteredAdjectives = adjectivesActions.slice();
    
    if (subjects.nouns.includes(subject) && verbs === "does") {
        const adjectivesToRemove = ["to Mongolia", "a ball", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.nouns.includes(subject) && verbs === "has") {
        const adjectivesToRemove = ["to Mongolia","do it", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.nouns.includes(subject) && verbs ==="goes") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "do it", "all the things", "attractive", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.nouns.includes(subject) && verbs === "can") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "bald", "to Mongolia", "all the things", "attractive", "beautiful", "chubby", "dazzling", "drab", "elegant", "fancy", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.nouns.includes(subject) && verbs === "gets") {
        const adjectivesToRemove = ["do it", "attractive", "beautiful", "dazzling", "drab", "elegant", "fancy", "glamorous", "gorgeous", "handsome", "long", "magnificent", "plain", "quaint", "scruffy", "shapely", "short", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.nouns.includes(subject) && verbs === "is") {
        const adjectivesToRemove = ["something smart", "coke", "do it", "all the things", "to Mongolia"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }


    if (subjects.names.includes(subject) && verbs === "does") {
        const adjectivesToRemove = ["to Mongolia", "a ball", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.names.includes(subject) && verbs === "has") {
        const adjectivesToRemove = ["to Mongolia","do it", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }
    if (subjects.names.includes(subject) && verbs === "goes") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "do it", "all the things", "attractive", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }
    if (subjects.names.includes(subject) && verbs === "can") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "bald", "to Mongolia", "all the things", "attractive", "beautiful", "chubby", "dazzling", "drab", "elegant", "fancy", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }
    if (subjects.names.includes(subject) && verbs === "gets") {
        const adjectivesToRemove = ["do it", "attractive", "beautiful", "dazzling", "drab", "elegant", "fancy", "glamorous", "gorgeous", "handsome", "long", "magnificent", "plain", "quaint", "scruffy", "shapely", "short", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subjects.names.includes(subject) && verbs === "is") {
        const adjectivesToRemove = ["something smart", "coke", "do it", "all the things", "to Mongolia"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "I" && verbs === "do") {
        const adjectivesToRemove = ["to Mongolia", "a ball", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "I" && verbs === "have") {
        const adjectivesToRemove = ["to Mongolia","do it", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "I" && verbs === "go") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "do it", "all the things", "attractive", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "I" && verbs === "can") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "bald", "to Mongolia", "all the things", "attractive", "beautiful", "chubby", "dazzling", "drab", "elegant", "fancy", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "I" && verbs === "get") {
        const adjectivesToRemove = ["do it", "attractive", "beautiful", "dazzling", "drab", "elegant", "fancy", "glamorous", "gorgeous", "handsome", "long", "magnificent", "plain", "quaint", "scruffy", "shapely", "short", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "I" && verbs === "am") {
        const adjectivesToRemove = ["something smart", "coke", "do it", "all the things", "to Mongolia"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "He" && verbs === "does") {
        const adjectivesToRemove = ["to Mongolia", "a ball", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "He" && verbs === "has") {
        const adjectivesToRemove = ["to Mongolia","do it", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "He" && verbs === "goes") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "do it", "all the things", "attractive", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "He" && verbs === "can") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "bald", "to Mongolia", "all the things", "attractive", "beautiful", "chubby", "dazzling", "drab", "elegant", "fancy", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "He" && verbs === "gets") {
        const adjectivesToRemove = ["do it", "attractive", "beautiful", "dazzling", "drab", "elegant", "fancy", "glamorous", "gorgeous", "handsome", "long", "magnificent", "plain", "quaint", "scruffy", "shapely", "short", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "He" && verbs === "is") {
        const adjectivesToRemove = ["something smart", "coke", "do it", "all the things", "to Mongolia"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "She" && verbs === "does") {
        const adjectivesToRemove = ["to Mongolia", "a ball", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "She" && verbs === "has") {
        const adjectivesToRemove = ["to Mongolia","do it", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "She" && verbs === "goes") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "do it", "all the things", "attractive", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "She" && verbs === "can") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "bald", "to Mongolia", "all the things", "attractive", "beautiful", "chubby", "dazzling", "drab", "elegant", "fancy", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "She" && verbs === "gets") {
        const adjectivesToRemove = ["do it", "attractive", "beautiful", "dazzling", "drab", "elegant", "fancy", "glamorous", "gorgeous", "handsome", "long", "magnificent", "plain", "quaint", "scruffy", "shapely", "short", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "She" && verbs === "is") {
        const adjectivesToRemove = ["something smart", "coke", "do it", "all the things", "to Mongolia"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "They" && verbs === "do") {
        const adjectivesToRemove = ["to Mongolia", "a ball", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "They" && verbs === "have") {
        const adjectivesToRemove = ["to Mongolia","do it", "attractive", "bald", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "They" && verbs === "go") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "do it", "all the things", "attractive", "beautiful", "chubby", "clean", "dazzling", "drab", "elegant", "fancy", "fit", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "They" && verbs === "can") {
        const adjectivesToRemove = ["a ball", "something smart", "coke", "bald", "to Mongolia", "all the things", "attractive", "beautiful", "chubby", "dazzling", "drab", "elegant", "fancy", "flabby", "glamorous", "gorgeous", "handsome", "long", "magnificent", "muscular", "plain", "plump", "quaint", "scruffy", "shapely", "short", "skinny", "stocky", "ugly", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "They" && verbs === "get") {
        const adjectivesToRemove = ["do it", "attractive", "beautiful", "dazzling", "drab", "elegant", "fancy", "glamorous", "gorgeous", "handsome", "long", "magnificent", "plain", "quaint", "scruffy", "shapely", "short", "unkempt", "unsightly"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    if (subject === "They" && verbs === "are") {
        const adjectivesToRemove = ["something smart", "coke", "do it", "all the things", "to Mongolia"];
        filteredAdjectives = filteredAdjectives.filter(adjective => !adjectivesToRemove.includes(adjective));
    }

    return filteredAdjectives;
 
};

const buildABear = () => {
    const subjectType = getRandomWord(Object.keys(subjects));
    const subject = getRandomWord(subjects[subjectType]);
    const verb = conjugateVerbs(subject);
    const filteredAdjectives = filterAdjectivesActions(subject, verb);
    const adjective = getRandomWord(filteredAdjectives);
    return `${subject} ${verb} ${adjective}`;
};

const randomSentence = buildABear();
console.log(randomSentence);
