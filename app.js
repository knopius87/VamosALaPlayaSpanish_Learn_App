const travelModules = [
  {
    id: "strasbourg", city: "Strasbourg", icon: "👋", km: 0, category: "alltag",
    title: "Begrüßen & erster Small Talk", summary: "Ankommen, sich vorstellen und freundlich ins Gespräch kommen.",
    tip: "In Frankreich gehört ein bonjour fast immer vor jede Bitte – auch im Geschäft.",
    vocab: [
      { fr: "Bonjour !", de: "Guten Tag!", ex: "Bonjour madame, comment allez-vous ?" },
      { fr: "Enchanté(e)", de: "Freut mich", ex: "Je suis Lena. Enchantée !" },
      { fr: "le séjour", de: "der Aufenthalt", ex: "Votre séjour se passe bien ?" },
      { fr: "venir de", de: "aus … kommen", ex: "Je viens de Cologne." },
      { fr: "pour la première fois", de: "zum ersten Mal", ex: "Nous sommes ici pour la première fois." },
      { fr: "sympa", de: "nett / schön", ex: "Le quartier est très sympa." },
      { fr: "depuis", de: "seit", ex: "Nous sommes ici depuis hier." },
      { fr: "à bientôt", de: "bis bald", ex: "Merci, à bientôt !" }
    ],
    scaffolds: [
      { fr: "Je m’appelle … et je viens de …", de: "Ich heiße … und komme aus …" },
      { fr: "Nous sommes en France pour … jours.", de: "Wir sind für … Tage in Frankreich." },
      { fr: "C’est notre première fois à …", de: "Wir sind zum ersten Mal in …" },
      { fr: "Et vous, vous habitez ici ?", de: "Und Sie, wohnen Sie hier?" }
    ],
    challenge: { prompt: "« Vous êtes ici pour les vacances ? »", options: ["Oui, nous restons une semaine.", "Une table pour deux.", "J’ai mal à la tête.", "Le plein, s’il vous plaît."], answer: 0 }
  },
  {
    id: "colmar", city: "Colmar", icon: "🚆", km: 74, category: "alltag",
    title: "Anreise & Gepäck", summary: "Von der Fahrt erzählen und Fragen zur Ankunft beantworten.",
    tip: "Für abgeschlossene Ereignisse der Anreise brauchst du oft das passé composé: nous sommes arrivés.",
    vocab: [
      { fr: "le trajet", de: "die Fahrt / Strecke", ex: "Le trajet a duré six heures." },
      { fr: "arriver", de: "ankommen", ex: "Nous sommes arrivés ce matin." },
      { fr: "partir", de: "abfahren / losfahren", ex: "Nous sommes partis très tôt." },
      { fr: "le retard", de: "die Verspätung", ex: "Le train avait vingt minutes de retard." },
      { fr: "la correspondance", de: "die Anschlussverbindung", ex: "Nous avons raté la correspondance." },
      { fr: "les bagages", de: "das Gepäck", ex: "Nos bagages sont dans la voiture." },
      { fr: "fatigant", de: "anstrengend", ex: "Le voyage était un peu fatigant." },
      { fr: "sans problème", de: "ohne Probleme", ex: "Tout s’est passé sans problème." }
    ],
    scaffolds: [
      { fr: "Nous sommes venus en voiture / en train.", de: "Wir sind mit dem Auto / Zug gekommen." },
      { fr: "Le trajet a duré environ … heures.", de: "Die Fahrt dauerte ungefähr … Stunden." },
      { fr: "Nous avons eu un peu de retard à cause de …", de: "Wir hatten etwas Verspätung wegen …" },
      { fr: "Finalement, tout s’est bien passé.", de: "Letztlich ist alles gut gegangen." }
    ],
    challenge: { prompt: "« Vous avez fait bon voyage ? »", options: ["Oui, le trajet s’est bien passé.", "Oui, il va pleuvoir.", "Non, sans ordonnance.", "Deux cafés en terrasse."], answer: 0 }
  },
  {
    id: "annecy", city: "Annecy", icon: "🧭", km: 312, category: "alltag",
    title: "Orientierung & Nahverkehr", summary: "Nach dem Weg fragen, Tickets kaufen und Verbindungen verstehen.",
    tip: "Mit excusez-moi und s’il vous plaît klingt eine direkte Frage sofort höflich.",
    vocab: [
      { fr: "tout droit", de: "geradeaus", ex: "Continuez tout droit." },
      { fr: "tourner", de: "abbiegen", ex: "Tournez à gauche après le pont." },
      { fr: "le carrefour", de: "die Kreuzung", ex: "C’est au prochain carrefour." },
      { fr: "l’arrêt", de: "die Haltestelle", ex: "Où est l’arrêt de bus ?" },
      { fr: "un aller-retour", de: "eine Hin- und Rückfahrt", ex: "Un aller-retour pour Lyon, s’il vous plaît." },
      { fr: "composter", de: "entwerten", ex: "Il faut composter le billet." },
      { fr: "descendre", de: "aussteigen", ex: "Vous descendez au troisième arrêt." },
      { fr: "à pied", de: "zu Fuß", ex: "C’est à dix minutes à pied." }
    ],
    scaffolds: [
      { fr: "Excusez-moi, pour aller à … ?", de: "Entschuldigung, wie komme ich nach / zu …?" },
      { fr: "C’est loin d’ici à pied ?", de: "Ist es von hier zu Fuß weit?" },
      { fr: "Je voudrais un aller simple pour …", de: "Ich hätte gern eine einfache Fahrt nach …" },
      { fr: "À quel arrêt faut-il descendre ?", de: "An welcher Haltestelle muss man aussteigen?" }
    ],
    challenge: { prompt: "Du hast den Weg nicht ganz verstanden. Was sagst du?", options: ["Vous pouvez répéter plus lentement ?", "L’addition, s’il vous plaît.", "Je tousse depuis hier.", "Quel beau match !"], answer: 0 }
  },
  {
    id: "lyon", city: "Lyon", icon: "🛎️", km: 458, category: "service",
    title: "Unterkunft & Reservieren", summary: "Ein Zimmer buchen, einchecken und Probleme freundlich klären.",
    tip: "Je voudrais ist der wichtigste höfliche Einstieg für Wünsche und Reservierungen.",
    vocab: [
      { fr: "une chambre double", de: "ein Doppelzimmer", ex: "Nous avons réservé une chambre double." },
      { fr: "disponible", de: "verfügbar", ex: "Avez-vous une chambre disponible ?" },
      { fr: "la réservation", de: "die Reservierung", ex: "La réservation est au nom de Weber." },
      { fr: "compris", de: "inbegriffen", ex: "Le petit-déjeuner est compris ?" },
      { fr: "la clé", de: "der Schlüssel", ex: "Voici la clé de votre chambre." },
      { fr: "bruyant", de: "laut", ex: "La chambre est assez bruyante." },
      { fr: "la climatisation", de: "die Klimaanlage", ex: "La climatisation ne marche pas." },
      { fr: "libérer la chambre", de: "das Zimmer räumen", ex: "Il faut libérer la chambre avant onze heures." }
    ],
    scaffolds: [
      { fr: "Je voudrais réserver une chambre pour … nuits.", de: "Ich möchte ein Zimmer für … Nächte reservieren." },
      { fr: "J’ai une réservation au nom de …", de: "Ich habe eine Reservierung auf den Namen …" },
      { fr: "Est-ce que le petit-déjeuner est compris ?", de: "Ist das Frühstück inbegriffen?" },
      { fr: "Il y a un problème avec …", de: "Es gibt ein Problem mit …" }
    ],
    challenge: { prompt: "An der Rezeption fragt man nach deinem Namen.", options: ["La réservation est au nom de Klein.", "Je prends le plat du jour.", "Il fait plus chaud demain.", "Je cherche une pharmacie."], answer: 0 }
  },
  {
    id: "avignon", city: "Avignon", icon: "🍽️", km: 688, category: "service",
    title: "Restaurant & Café", summary: "Einen Tisch bekommen, bestellen, nachfragen und bezahlen.",
    tip: "Une carafe d’eau ist kostenloses Leitungswasser; une bouteille d’eau wird berechnet.",
    vocab: [
      { fr: "une table en terrasse", de: "ein Tisch auf der Terrasse", ex: "Vous avez une table en terrasse ?" },
      { fr: "la carte", de: "die Speisekarte", ex: "La carte, s’il vous plaît." },
      { fr: "le plat du jour", de: "das Tagesgericht", ex: "Quel est le plat du jour ?" },
      { fr: "saignant", de: "blutig / medium-rare", ex: "Le steak saignant, s’il vous plaît." },
      { fr: "une carafe d’eau", de: "eine Karaffe Leitungswasser", ex: "Et une carafe d’eau, merci." },
      { fr: "sans", de: "ohne", ex: "La salade sans oignons, si possible." },
      { fr: "l’addition", de: "die Rechnung", ex: "On peut avoir l’addition ?" },
      { fr: "régler", de: "bezahlen / begleichen", ex: "Je peux régler par carte ?" }
    ],
    scaffolds: [
      { fr: "Nous avons réservé une table pour … personnes.", de: "Wir haben einen Tisch für … Personen reserviert." },
      { fr: "Je vais prendre … / Pour moi, ce sera …", de: "Ich nehme … / Für mich gibt es …" },
      { fr: "Qu’est-ce que vous recommandez ?", de: "Was empfehlen Sie?" },
      { fr: "On peut payer séparément ?", de: "Können wir getrennt bezahlen?" }
    ],
    challenge: { prompt: "Der Kellner fragt: « Vous avez choisi ? »", options: ["Oui, je vais prendre le plat du jour.", "Non, je suis arrivé hier.", "Oui, au prochain carrefour.", "Non, j’ai une ordonnance."], answer: 0 }
  },
  {
    id: "marseille", city: "Marseille", icon: "💊", km: 792, category: "service",
    title: "Apotheke & Gesundheit", summary: "Beschwerden beschreiben, Medikamente verstehen und Hilfe finden.",
    tip: "Depuis + Zeitspanne beschreibt, wie lange etwas schon andauert: depuis deux jours.",
    vocab: [
      { fr: "avoir mal à", de: "Schmerzen haben an", ex: "J’ai mal à la gorge." },
      { fr: "tousser", de: "husten", ex: "Je tousse surtout la nuit." },
      { fr: "la fièvre", de: "das Fieber", ex: "J’ai un peu de fièvre." },
      { fr: "une ordonnance", de: "ein Rezept", ex: "Il faut une ordonnance ?" },
      { fr: "un comprimé", de: "eine Tablette", ex: "Prenez un comprimé le soir." },
      { fr: "les effets secondaires", de: "die Nebenwirkungen", ex: "Il y a des effets secondaires ?" },
      { fr: "être allergique à", de: "allergisch sein gegen", ex: "Je suis allergique à la pénicilline." },
      { fr: "un médecin de garde", de: "ein ärztlicher Bereitschaftsdienst", ex: "Où trouver un médecin de garde ?" }
    ],
    scaffolds: [
      { fr: "J’ai mal à … depuis … jours.", de: "Ich habe seit … Tagen Schmerzen an …" },
      { fr: "Est-ce que vous avez quelque chose contre … ?", de: "Haben Sie etwas gegen …?" },
      { fr: "Combien de fois par jour faut-il le prendre ?", de: "Wie oft am Tag muss man es einnehmen?" },
      { fr: "Est-ce que je peux le prendre avec … ?", de: "Kann ich es zusammen mit … einnehmen?" }
    ],
    challenge: { prompt: "Du möchtest etwas gegen Kopfschmerzen.", options: ["Vous avez quelque chose contre le mal de tête ?", "Je voudrais une chambre calme.", "Il y a du vent sur la côte.", "Nous avons gagné deux à zéro."], answer: 0 }
  },
  {
    id: "nice", city: "Nice", icon: "☀️", km: 992, category: "freizeit",
    title: "Wetter & Freizeitpläne", summary: "Über das Wetter plaudern und Pläne davon abhängig machen.",
    tip: "Für nahe Pläne nutzt du aller + Infinitiv: on va visiter, nous allons nous baigner.",
    vocab: [
      { fr: "ensoleillé", de: "sonnig", ex: "Demain, le temps sera ensoleillé." },
      { fr: "couvert", de: "bewölkt", ex: "Le ciel est assez couvert." },
      { fr: "une averse", de: "ein Regenschauer", ex: "Il y aura des averses cet après-midi." },
      { fr: "le vent", de: "der Wind", ex: "Il y a beaucoup de vent." },
      { fr: "la météo", de: "der Wetterbericht", ex: "Tu as regardé la météo ?" },
      { fr: "se baigner", de: "baden / schwimmen gehen", ex: "On va se baigner demain." },
      { fr: "profiter de", de: "etwas genießen / nutzen", ex: "On profite du beau temps." },
      { fr: "prévoir", de: "vorhaben / vorsehen", ex: "Qu’est-ce que vous avez prévu ?" }
    ],
    scaffolds: [
      { fr: "Quel temps fait-il demain ?", de: "Wie wird das Wetter morgen?" },
      { fr: "S’il fait beau, on va …", de: "Wenn das Wetter schön ist, werden wir …" },
      { fr: "Il paraît qu’il va pleuvoir.", de: "Anscheinend wird es regnen." },
      { fr: "On pourrait plutôt visiter …", de: "Wir könnten stattdessen … besichtigen." }
    ],
    challenge: { prompt: "Es soll regnen. Du schlägst ein Museum vor.", options: ["On pourrait plutôt visiter le musée.", "On peut avoir l’addition ?", "Prenez deux comprimés.", "Je descends au prochain arrêt."], answer: 0 }
  },
  {
    id: "toulouse", city: "Toulouse", icon: "🛍️", km: 1560, category: "service",
    title: "Markt & Einkaufen", summary: "Mengen, Preise, Größen und regionale Produkte erfragen.",
    tip: "Bei nicht zählbaren Mengen steht oft de: un kilo de tomates, une tranche de jambon.",
    vocab: [
      { fr: "un morceau", de: "ein Stück", ex: "Un morceau de fromage, s’il vous plaît." },
      { fr: "une tranche", de: "eine Scheibe", ex: "Je voudrais quatre tranches de jambon." },
      { fr: "mûr", de: "reif", ex: "Ces melons sont bien mûrs ?" },
      { fr: "goûter", de: "probieren", ex: "Est-ce que je peux goûter ?" },
      { fr: "la pointure", de: "die Schuhgröße", ex: "Vous faites quelle pointure ?" },
      { fr: "essayer", de: "anprobieren / versuchen", ex: "Je peux essayer cette veste ?" },
      { fr: "trop cher", de: "zu teuer", ex: "C’est un peu trop cher." },
      { fr: "la monnaie", de: "das Wechselgeld", ex: "Gardez la monnaie." }
    ],
    scaffolds: [
      { fr: "Je voudrais … grammes de …", de: "Ich hätte gern … Gramm …" },
      { fr: "Vous en avez des plus petits / grandes ?", de: "Haben Sie kleinere / größere davon?" },
      { fr: "Est-ce que je peux l’essayer ?", de: "Kann ich es anprobieren?" },
      { fr: "Ça fait combien en tout ?", de: "Wie viel macht das insgesamt?" }
    ],
    challenge: { prompt: "Du möchtest 200 Gramm Käse.", options: ["Je voudrais deux cents grammes de fromage.", "Je voudrais descendre ici.", "J’ai réservé pour deux nuits.", "Il faisait très chaud."], answer: 0 }
  },
  {
    id: "bordeaux", city: "Bordeaux", icon: "⚽", km: 1805, category: "freizeit",
    title: "Fußball & Café-Small-Talk", summary: "Über Teams, Spiele und Sportleidenschaft plaudern.",
    tip: "Bei Spielständen sagt man à: deux à un. Gewinnen heißt gagner, verlieren perdre.",
    vocab: [
      { fr: "le match", de: "das Spiel", ex: "Tu as vu le match hier soir ?" },
      { fr: "une équipe", de: "eine Mannschaft", ex: "Quelle équipe tu supportes ?" },
      { fr: "marquer un but", de: "ein Tor schießen", ex: "Ils ont marqué à la dernière minute." },
      { fr: "gagner", de: "gewinnen", ex: "Bordeaux a gagné deux à zéro." },
      { fr: "perdre", de: "verlieren", ex: "Notre équipe a encore perdu." },
      { fr: "un joueur", de: "ein Spieler", ex: "C’est leur meilleur joueur." },
      { fr: "l’ambiance", de: "die Stimmung", ex: "L’ambiance au stade était incroyable." },
      { fr: "mériter", de: "verdienen", ex: "Ils méritaient de gagner." }
    ],
    scaffolds: [
      { fr: "Tu supportes quelle équipe ?", de: "Welche Mannschaft unterstützt du?" },
      { fr: "Tu as pensé quoi du match ?", de: "Was fandest du vom Spiel?" },
      { fr: "À mon avis, ils ont bien / mal joué.", de: "Meiner Meinung nach haben sie gut / schlecht gespielt." },
      { fr: "Le score final était de … à …", de: "Der Endstand war … zu …" }
    ],
    challenge: { prompt: "Jemand fragt nach deiner Meinung zum Spiel.", options: ["À mon avis, les deux équipes ont bien joué.", "Le petit-déjeuner est compris.", "J’ai mal au dos.", "Tournez à droite."], answer: 0 }
  },
  {
    id: "nantes", city: "Nantes", icon: "🆘", km: 2140, category: "service",
    title: "Probleme & Notfälle", summary: "Verlorenes melden, eine Panne erklären und schnell Hilfe holen.",
    tip: "Im Notfall erreichst du europaweit die 112; die französische Polizei unter 17.",
    vocab: [
      { fr: "perdre", de: "verlieren", ex: "J’ai perdu mon portefeuille." },
      { fr: "voler", de: "stehlen", ex: "On m’a volé mon téléphone." },
      { fr: "un commissariat", de: "eine Polizeiwache", ex: "Où est le commissariat le plus proche ?" },
      { fr: "une panne", de: "eine Panne", ex: "Notre voiture est en panne." },
      { fr: "un dépanneur", de: "ein Pannendienst", ex: "Pouvez-vous appeler un dépanneur ?" },
      { fr: "un constat", de: "ein Unfallbericht", ex: "Il faut remplir un constat." },
      { fr: "les papiers", de: "die Ausweispapiere", ex: "Mes papiers étaient dans mon sac." },
      { fr: "urgent", de: "dringend", ex: "C’est vraiment urgent." }
    ],
    scaffolds: [
      { fr: "J’ai perdu / On m’a volé …", de: "Ich habe … verloren / Mir wurde … gestohlen." },
      { fr: "Pouvez-vous appeler la police / une ambulance ?", de: "Können Sie die Polizei / einen Krankenwagen rufen?" },
      { fr: "Notre voiture est en panne près de …", de: "Unser Auto hat in der Nähe von … eine Panne." },
      { fr: "De quels renseignements avez-vous besoin ?", de: "Welche Angaben brauchen Sie?" }
    ],
    challenge: { prompt: "Dein Portemonnaie wurde gestohlen.", options: ["On m’a volé mon portefeuille.", "J’ai goûté le fromage.", "Il y aura des averses.", "Nous partirons demain."], answer: 0 }
  },
  {
    id: "lille", city: "Lille", icon: "🥂", km: 2670, category: "freizeit",
    title: "Einladung, Kultur & Abschied", summary: "Einladungen annehmen, Erlebnisse bewerten und herzlich Abschied nehmen.",
    tip: "Nach merci de folgt ein Infinitiv oder Nomen: merci de nous avoir invités.",
    vocab: [
      { fr: "inviter", de: "einladen", ex: "Merci de nous avoir invités." },
      { fr: "avec plaisir", de: "sehr gern", ex: "Oui, avec plaisir !" },
      { fr: "apporter", de: "mitbringen", ex: "Qu’est-ce qu’on peut apporter ?" },
      { fr: "une exposition", de: "eine Ausstellung", ex: "Nous avons vu une belle exposition." },
      { fr: "impressionnant", de: "beeindruckend", ex: "Le bâtiment est impressionnant." },
      { fr: "ça vaut le coup", de: "es lohnt sich", ex: "Le musée vaut vraiment le coup." },
      { fr: "se revoir", de: "sich wiedersehen", ex: "J’espère qu’on se reverra bientôt." },
      { fr: "rentrer", de: "zurückkehren / heimfahren", ex: "Nous rentrons dimanche." }
    ],
    scaffolds: [
      { fr: "Merci, c’est très gentil. Avec plaisir !", de: "Danke, das ist sehr nett. Sehr gern!" },
      { fr: "Qu’est-ce qu’on peut apporter ?", de: "Was können wir mitbringen?" },
      { fr: "Ce que j’ai préféré, c’est …", de: "Was mir am besten gefallen hat, ist …" },
      { fr: "Merci pour tout, j’espère qu’on se reverra.", de: "Danke für alles, hoffentlich sehen wir uns wieder." }
    ],
    challenge: { prompt: "Du nimmst eine Einladung gern an.", options: ["Merci, avec plaisir !", "Non, tournez à gauche.", "Un aller simple, merci.", "Je suis allergique."], answer: 0 }
  },
  {
    id: "paris", city: "Paris", icon: "🗼", km: 2895, category: "finale",
    title: "Le Grand Final", summary: "Alle Reisesituationen in einer gemischten Paris-Challenge.",
    tip: "Du musst nicht perfekt sprechen. Höflich anfangen, einen Satzbaustein nutzen und nachfragen bringt dich fast immer weiter.",
    vocab: [
      { fr: "se débrouiller", de: "zurechtkommen", ex: "Je me débrouille assez bien en français." },
      { fr: "faire préciser", de: "genauer erklären lassen", ex: "N’hésitez pas à faire préciser." },
      { fr: "autrement dit", de: "anders gesagt", ex: "Autrement dit, le train est annulé." },
      { fr: "si j’ai bien compris", de: "wenn ich richtig verstanden habe", ex: "Si j’ai bien compris, on change à Dijon." },
      { fr: "ça dépend", de: "es kommt darauf an", ex: "Ça dépend de la météo." },
      { fr: "tout à fait", de: "ganz genau", ex: "Oui, tout à fait." },
      { fr: "en tout cas", de: "jedenfalls", ex: "En tout cas, merci pour votre aide." },
      { fr: "oser parler", de: "sich trauen zu sprechen", ex: "L’essentiel, c’est d’oser parler." }
    ],
    scaffolds: [
      { fr: "Si j’ai bien compris, vous voulez dire que …", de: "Wenn ich richtig verstanden habe, meinen Sie, dass …" },
      { fr: "Je ne connais pas le mot, mais c’est quelque chose qui …", de: "Ich kenne das Wort nicht, aber es ist etwas, das …" },
      { fr: "Comment est-ce qu’on dit … en français ?", de: "Wie sagt man … auf Französisch?" },
      { fr: "Merci de parler un peu moins vite.", de: "Danke, dass Sie etwas langsamer sprechen." }
    ],
    challenge: { prompt: "Du hast eine Erklärung nicht sicher verstanden.", options: ["Si j’ai bien compris, je dois changer à Lyon ?", "L’addition est comprise ?", "Je supporte cette équipe.", "Il me faut une ordonnance."], answer: 0 }
  }
];

const moduleExpansions = {
  strasbourg: {
    vocab: [
      { fr: "ça fait longtemps ?", de: "ist das schon lange so?", ex: "Vous habitez ici ? Ça fait longtemps ?" },
      { fr: "être ravi", de: "sich sehr freuen", ex: "Je suis ravi de faire votre connaissance." },
      { fr: "le quartier", de: "das Stadtviertel", ex: "Vous connaissez bien ce quartier ?" },
      { fr: "recommander", de: "empfehlen", ex: "Vous pouvez recommander un café sympa ?" },
      { fr: "d’habitude", de: "normalerweise", ex: "D’habitude, nous venons en été." },
      { fr: "bavarder", de: "plaudern", ex: "Nous avons bavardé quelques minutes." }
    ],
    scaffolds: [
      { fr: "Qu’est-ce qui vous amène à Strasbourg ?", de: "Was führt Sie nach Strasbourg?" },
      { fr: "Vous connaissez bien la région ?", de: "Kennen Sie die Region gut?" },
      { fr: "Si vous avez une recommandation, je suis preneur / preneuse.", de: "Falls Sie eine Empfehlung haben, nehme ich sie gern an." }
    ],
    cloze: [
      { prompt: "Nous sommes ici ___ trois jours.", answers: ["depuis"], explain: "depuis trois jours = seit drei Tagen" },
      { prompt: "C’est notre première ___ à Strasbourg.", answers: ["fois"], explain: "la première fois = das erste Mal" }
    ]
  },
  colmar: {
    vocab: [
      { fr: "le péage", de: "die Mautstelle", ex: "Nous avons attendu au péage." },
      { fr: "l’autoroute", de: "die Autobahn", ex: "Il y avait beaucoup de monde sur l’autoroute." },
      { fr: "embarquer", de: "einsteigen / an Bord gehen", ex: "L’embarquement commence dans dix minutes." },
      { fr: "le quai", de: "der Bahnsteig", ex: "Le train part du quai numéro six." },
      { fr: "rater", de: "verpassen", ex: "Nous avons failli rater le train." },
      { fr: "chargé", de: "voll / stark befahren", ex: "La route était très chargée." }
    ],
    scaffolds: [
      { fr: "Comment s’est passé votre trajet ?", de: "Wie war Ihre Anreise?" },
      { fr: "On a mis environ … heures pour venir.", de: "Wir haben ungefähr … Stunden für die Anreise gebraucht." },
      { fr: "Heureusement, nous avons eu notre correspondance.", de: "Zum Glück haben wir unseren Anschluss erreicht." }
    ],
    cloze: [
      { prompt: "Notre train a vingt minutes de ___.", answers: ["retard"], explain: "avoir du retard = Verspätung haben" },
      { prompt: "Nous sommes ___ à midi.", answers: ["arrivés", "arrivées"], explain: "nous sommes arrivés / arrivées = wir sind angekommen" }
    ]
  },
  annecy: {
    vocab: [
      { fr: "la voie", de: "das Gleis", ex: "Votre train arrive voie B." },
      { fr: "le distributeur", de: "der Fahrkartenautomat", ex: "Le distributeur accepte les cartes." },
      { fr: "changer", de: "umsteigen / wechseln", ex: "Il faut changer à Chambéry." },
      { fr: "le prochain", de: "der nächste", ex: "Prenez le prochain bus." },
      { fr: "traverser", de: "überqueren", ex: "Traversez la place et tournez à droite." },
      { fr: "un plan", de: "ein Stadtplan", ex: "Vous avez un plan de la ville ?" }
    ],
    scaffolds: [
      { fr: "Je dois changer où exactement ?", de: "Wo genau muss ich umsteigen?" },
      { fr: "Le billet est valable toute la journée ?", de: "Ist die Fahrkarte den ganzen Tag gültig?" },
      { fr: "Après le feu, c’est la première rue à droite.", de: "Nach der Ampel ist es die erste Straße rechts." }
    ],
    cloze: [
      { prompt: "Tournez à droite au prochain ___.", answers: ["carrefour"], explain: "au prochain carrefour = an der nächsten Kreuzung" },
      { prompt: "Nous allons au centre-ville ___ pied.", answers: ["à", "a"], explain: "à pied = zu Fuß" }
    ]
  },
  lyon: {
    vocab: [
      { fr: "la réception", de: "die Rezeption", ex: "La réception est ouverte toute la nuit." },
      { fr: "une nuitée", de: "eine Übernachtung", ex: "Le prix est de quatre-vingts euros par nuitée." },
      { fr: "annuler", de: "stornieren", ex: "Je voudrais annuler ma réservation." },
      { fr: "calme", de: "ruhig", ex: "Auriez-vous une chambre plus calme ?" },
      { fr: "complet", de: "ausgebucht", ex: "Désolé, l’hôtel est complet." },
      { fr: "déposer", de: "abgeben / abstellen", ex: "On peut déposer les bagages ici ?" }
    ],
    scaffolds: [
      { fr: "Serait-il possible d’avoir une chambre côté cour ?", de: "Wäre ein Zimmer zum Innenhof möglich?" },
      { fr: "Nous arriverons probablement vers … heures.", de: "Wir werden voraussichtlich gegen … Uhr ankommen." },
      { fr: "Pourriez-vous garder nos bagages après le départ ?", de: "Könnten Sie unser Gepäck nach dem Auschecken aufbewahren?" }
    ],
    cloze: [
      { prompt: "La réservation est ___ nom de Weber.", answers: ["au"], explain: "au nom de = auf den Namen" },
      { prompt: "La climatisation ne ___ pas.", answers: ["marche", "fonctionne"], explain: "ne marche pas = funktioniert nicht" }
    ]
  },
  avignon: {
    vocab: [
      { fr: "une entrée", de: "eine Vorspeise", ex: "Nous partageons une entrée." },
      { fr: "un accompagnement", de: "eine Beilage", ex: "Quel accompagnement est servi avec le poisson ?" },
      { fr: "végétarien", de: "vegetarisch", ex: "Avez-vous un plat végétarien ?" },
      { fr: "la cuisson", de: "die Garstufe", ex: "Quelle cuisson pour la viande ?" },
      { fr: "être allergique", de: "allergisch sein", ex: "Je suis allergique aux noix." },
      { fr: "laisser un pourboire", de: "Trinkgeld geben", ex: "On peut laisser un pourboire par carte ?" }
    ],
    scaffolds: [
      { fr: "Est-ce que ce plat contient des noix / du gluten ?", de: "Enthält dieses Gericht Nüsse / Gluten?" },
      { fr: "Pourriez-vous remplacer l’accompagnement par … ?", de: "Könnten Sie die Beilage durch … ersetzen?" },
      { fr: "Tout était délicieux, merci beaucoup.", de: "Alles war köstlich, vielen Dank." }
    ],
    cloze: [
      { prompt: "Je vais ___ le plat du jour.", answers: ["prendre"], explain: "je vais prendre = ich nehme" },
      { prompt: "On peut payer ___ ?", answers: ["séparément", "separement"], explain: "payer séparément = getrennt bezahlen" }
    ]
  },
  marseille: {
    vocab: [
      { fr: "un sirop", de: "ein Hustensaft / Sirup", ex: "Je cherche un sirop contre la toux." },
      { fr: "une pommade", de: "eine Salbe", ex: "Appliquez cette pommade deux fois par jour." },
      { fr: "la posologie", de: "die Dosierung", ex: "La posologie est indiquée sur la boîte." },
      { fr: "enceinte", de: "schwanger", ex: "Est-ce adapté si on est enceinte ?" },
      { fr: "des vertiges", de: "Schwindel", ex: "J’ai des vertiges depuis ce matin." },
      { fr: "soulager", de: "lindern", ex: "Ce médicament va soulager la douleur." }
    ],
    scaffolds: [
      { fr: "Je prends déjà un médicament pour …", de: "Ich nehme bereits ein Medikament gegen …" },
      { fr: "Y a-t-il une version sans ordonnance ?", de: "Gibt es eine rezeptfreie Variante?" },
      { fr: "À partir de quand dois-je consulter un médecin ?", de: "Ab wann sollte ich einen Arzt aufsuchen?" }
    ],
    cloze: [
      { prompt: "J’ai mal à la gorge ___ hier.", answers: ["depuis"], explain: "depuis hier = seit gestern" },
      { prompt: "Prenez un comprimé deux fois ___ jour.", answers: ["par"], explain: "deux fois par jour = zweimal täglich" }
    ]
  },
  nice: {
    vocab: [
      { fr: "doux", de: "mild", ex: "Le temps restera doux ce soir." },
      { fr: "orageux", de: "gewittrig", ex: "Le ciel devient orageux." },
      { fr: "se rafraîchir", de: "sich abkühlen", ex: "Il va se rafraîchir dans la soirée." },
      { fr: "une éclaircie", de: "eine Aufheiterung", ex: "Il y aura quelques éclaircies demain." },
      { fr: "la chaleur", de: "die Hitze", ex: "Je supporte mal la chaleur." },
      { fr: "à l’ombre", de: "im Schatten", ex: "Restons à l’ombre cet après-midi." }
    ],
    scaffolds: [
      { fr: "La météo annonce des orages en fin de journée.", de: "Der Wetterbericht kündigt gegen Tagesende Gewitter an." },
      { fr: "Avec cette chaleur, mieux vaut partir tôt.", de: "Bei dieser Hitze sollte man besser früh losgehen." },
      { fr: "On décidera selon le temps.", de: "Wir entscheiden je nach Wetter." }
    ],
    cloze: [
      { prompt: "S’il ___ beau, on va se baigner.", answers: ["fait"], explain: "s’il fait beau = wenn das Wetter schön ist" },
      { prompt: "Il va ___ cet après-midi.", answers: ["pleuvoir"], explain: "il va pleuvoir = es wird regnen" }
    ]
  },
  toulouse: {
    vocab: [
      { fr: "un étal", de: "ein Marktstand", ex: "Les fruits sont sur l’étal." },
      { fr: "peser", de: "wiegen", ex: "Vous pouvez peser ces tomates ?" },
      { fr: "en promotion", de: "im Angebot", ex: "Cette chemise est en promotion." },
      { fr: "la taille", de: "die Kleidergröße", ex: "Vous avez cette veste en taille M ?" },
      { fr: "échanger", de: "umtauschen", ex: "Est-ce que je peux l’échanger ?" },
      { fr: "un reçu", de: "ein Kassenbon", ex: "Gardez bien votre reçu." }
    ],
    scaffolds: [
      { fr: "Je regarde seulement, merci.", de: "Ich schaue mich nur um, danke." },
      { fr: "Vous pourriez me faire goûter celui-ci ?", de: "Könnten Sie mich diesen hier probieren lassen?" },
      { fr: "Si ça ne va pas, je peux le rapporter ?", de: "Kann ich es zurückbringen, falls es nicht passt?" }
    ],
    cloze: [
      { prompt: "Je voudrais un kilo ___ pommes.", answers: ["de"], explain: "Nach einer Mengenangabe steht de." },
      { prompt: "Est-ce que je peux ___ cette veste ?", answers: ["essayer"], explain: "essayer une veste = eine Jacke anprobieren" }
    ]
  },
  bordeaux: {
    vocab: [
      { fr: "un supporter", de: "ein Fan", ex: "Les supporters chantent dans le stade." },
      { fr: "égaliser", de: "ausgleichen", ex: "Ils ont égalisé à la dernière minute." },
      { fr: "un arbitre", de: "ein Schiedsrichter", ex: "L’arbitre a arrêté le jeu." },
      { fr: "un penalty", de: "ein Elfmeter", ex: "L’équipe a obtenu un penalty." },
      { fr: "le championnat", de: "die Meisterschaft / Liga", ex: "Ils sont premiers du championnat." },
      { fr: "faire match nul", de: "unentschieden spielen", ex: "Les deux équipes ont fait match nul." }
    ],
    scaffolds: [
      { fr: "Le tournant du match, c’était …", de: "Der Wendepunkt des Spiels war …" },
      { fr: "Ils auraient mérité le match nul.", de: "Sie hätten ein Unentschieden verdient." },
      { fr: "Je ne suis pas expert, mais j’aime l’ambiance.", de: "Ich bin kein Experte, aber ich mag die Atmosphäre." }
    ],
    cloze: [
      { prompt: "Ils ont ___ un but.", answers: ["marqué", "marque"], explain: "marquer un but = ein Tor schießen" },
      { prompt: "Le score final était deux ___ un.", answers: ["à", "a"], explain: "deux à un = zwei zu eins" }
    ]
  },
  nantes: {
    vocab: [
      { fr: "porter plainte", de: "Anzeige erstatten", ex: "Je voudrais porter plainte." },
      { fr: "une assurance", de: "eine Versicherung", ex: "Je dois appeler mon assurance." },
      { fr: "appeler les secours", de: "den Rettungsdienst rufen", ex: "Quelqu’un a appelé les secours." },
      { fr: "blessé", de: "verletzt", ex: "Heureusement, personne n’est blessé." },
      { fr: "un témoin", de: "ein Zeuge", ex: "Un témoin a vu l’accident." },
      { fr: "une dépanneuse", de: "ein Abschleppwagen", ex: "La dépanneuse arrivera dans une heure." }
    ],
    scaffolds: [
      { fr: "L’incident s’est passé vers … heures.", de: "Der Vorfall ereignete sich gegen … Uhr." },
      { fr: "Voici le numéro de mon assurance.", de: "Hier ist die Nummer meiner Versicherung." },
      { fr: "Personne n’est blessé, mais la voiture ne roule plus.", de: "Niemand ist verletzt, aber das Auto fährt nicht mehr." }
    ],
    cloze: [
      { prompt: "On m’a ___ mon téléphone.", answers: ["volé", "vole"], explain: "on m’a volé = mir wurde gestohlen" },
      { prompt: "Pouvez-vous ___ une ambulance ?", answers: ["appeler"], explain: "appeler une ambulance = einen Krankenwagen rufen" }
    ]
  },
  lille: {
    vocab: [
      { fr: "refuser poliment", de: "höflich ablehnen", ex: "Comment refuser poliment une invitation ?" },
      { fr: "faire connaissance", de: "sich kennenlernen", ex: "J’ai été ravi de faire votre connaissance." },
      { fr: "chaleureux", de: "herzlich", ex: "L’accueil était très chaleureux." },
      { fr: "un souvenir", de: "eine Erinnerung / ein Andenken", ex: "Nous garderons un très bon souvenir." },
      { fr: "raccompagner", de: "zurückbringen / begleiten", ex: "Je peux vous raccompagner à l’hôtel." },
      { fr: "garder contact", de: "in Kontakt bleiben", ex: "On garde contact, d’accord ?" }
    ],
    scaffolds: [
      { fr: "C’est gentil, mais nous avons déjà quelque chose de prévu.", de: "Das ist nett, aber wir haben bereits etwas vor." },
      { fr: "Nous avons passé une excellente soirée.", de: "Wir hatten einen ausgezeichneten Abend." },
      { fr: "Envoyez-nous un message si vous passez par chez nous.", de: "Schreiben Sie uns, falls Sie einmal bei uns in der Gegend sind." }
    ],
    cloze: [
      { prompt: "Merci de nous avoir ___.", answers: ["invités", "invitées", "invitees", "invites"], explain: "merci de nous avoir invités = danke für die Einladung" },
      { prompt: "J’espère qu’on se ___ bientôt.", answers: ["reverra"], explain: "on se reverra = wir werden uns wiedersehen" }
    ]
  },
  paris: {
    vocab: [
      { fr: "reformuler", de: "anders formulieren", ex: "Je vais essayer de reformuler." },
      { fr: "prendre la parole", de: "das Wort ergreifen", ex: "N’hésitez pas à prendre la parole." },
      { fr: "hésiter", de: "zögern", ex: "J’hésite parfois avant de répondre." },
      { fr: "faire une erreur", de: "einen Fehler machen", ex: "Ce n’est pas grave de faire une erreur." },
      { fr: "couramment", de: "fließend", ex: "Elle parle couramment français." },
      { fr: "le contexte", de: "der Zusammenhang", ex: "J’ai compris grâce au contexte." }
    ],
    scaffolds: [
      { fr: "Je vais essayer de le dire autrement.", de: "Ich versuche, es anders auszudrücken." },
      { fr: "Est-ce que vous pourriez me donner un exemple ?", de: "Könnten Sie mir ein Beispiel geben?" },
      { fr: "Je comprends l’idée générale, mais pas tous les détails.", de: "Ich verstehe die Grundidee, aber nicht alle Einzelheiten." }
    ],
    cloze: [
      { prompt: "Comment est-ce qu’on ___ ça en français ?", answers: ["dit"], explain: "comment est-ce qu’on dit … ? = wie sagt man …?" },
      { prompt: "Merci de parler moins ___.", answers: ["vite"], explain: "parler moins vite = langsamer sprechen" }
    ]
  }
};

travelModules.forEach(function (module) {
  const expansion = moduleExpansions[module.id];
  if (!expansion) return;
  module.vocab = module.vocab.concat(expansion.vocab);
  module.scaffolds = module.scaffolds.concat(expansion.scaffolds);
  module.cloze = expansion.cloze;
});

const stageThemes = {
  strasbourg: { landscape: "oldtown", label: "Altstadt am Rhein" },
  colmar: { landscape: "vineyard", label: "Weinberge im Elsass" },
  annecy: { landscape: "mountain", label: "Alpen und Bergsee" },
  lyon: { landscape: "city", label: "Großstadt an der Rhône" },
  avignon: { landscape: "provence", label: "Lavendelfelder der Provence" },
  marseille: { landscape: "coast", label: "Felsenküste am Mittelmeer" },
  nice: { landscape: "riviera", label: "Promenade an der Riviera" },
  toulouse: { landscape: "southwest", label: "Rote Stadt im Südwesten" },
  bordeaux: { landscape: "vineyard-dark", label: "Weinland an der Garonne" },
  nantes: { landscape: "atlantic", label: "Atlantikküste und Loire" },
  lille: { landscape: "north", label: "Nordfranzösische Stadtkulisse" },
  paris: { landscape: "paris", label: "Lichter der Hauptstadt" }
};

const conversationModules = {
  strasbourg: {
    choice: { prompt: "« Vous restez combien de temps ? »", options: ["Nous restons cinq jours.", "Je viens en train.", "Il fait très beau.", "La carte, s’il vous plaît."], answer: 0 },
    gap: { prompt: "Je m’___ Marie et je viens de Berlin.", answers: ["appelle"], explain: "Je m’appelle … = Ich heiße …" },
    typed: { prompt: "« D’où venez-vous ? » Répondez avec une phrase complète.", answerText: "Je viens d’Allemagne, de Cologne.", keywords: [["je viens de", "nous venons de"]], explain: "Eine vollständige Antwort beginnt zum Beispiel mit « Je viens de … »." }
  },
  colmar: {
    choice: { prompt: "« Vous avez fait bon voyage ? »", options: ["Oui, le trajet s’est bien passé.", "Oui, une table pour deux.", "Non, il faut une ordonnance.", "À gauche après le pont."], answer: 0 },
    gap: { prompt: "Le trajet s’est bien ___.", answers: ["passé", "passe"], explain: "se passer → le trajet s’est bien passé" },
    typed: { prompt: "« Comment êtes-vous venus ? » Répondez avec le moyen de transport.", answerText: "Nous sommes venus en train.", keywords: [["nous sommes venus", "nous sommes venues", "je suis venu", "je suis venue"], ["en train", "en voiture", "en avion", "en bus"]], explain: "Nenne die Anreise und das Verkehrsmittel in einem vollständigen Satz." }
  },
  annecy: {
    choice: { prompt: "« Vous cherchez quelque chose ? »", options: ["Oui, je cherche l’arrêt de bus.", "Oui, je voudrais une pommade.", "Oui, le steak saignant.", "Oui, nous restons trois nuits."], answer: 0 },
    gap: { prompt: "Pour aller au lac, continuez tout ___.", answers: ["droit"], explain: "tout droit = geradeaus" },
    typed: { prompt: "Fragen Sie vollständig, an welcher Haltestelle Sie aussteigen müssen.", answerText: "À quel arrêt faut-il descendre ?", keywords: [["a quel arret", "ou"], ["descendre"]], explain: "Die Schlüsselteile sind « à quel arrêt » und « descendre »." }
  },
  lyon: {
    choice: { prompt: "« La réservation est à quel nom ? »", options: ["Elle est au nom de Martin.", "Nous sommes venus en voiture.", "Je vais prendre le menu.", "Il y a des éclaircies."], answer: 0 },
    gap: { prompt: "J’ai une réservation ___ nom de Martin.", answers: ["au"], explain: "au nom de = auf den Namen" },
    typed: { prompt: "Fragen Sie vollständig, ob das Frühstück inbegriffen ist.", answerText: "Est-ce que le petit-déjeuner est compris ?", keywords: [["petit dejeuner"], ["compris", "inclus"]], explain: "Verwende « petit-déjeuner » und « compris » oder « inclus »." }
  },
  avignon: {
    choice: { prompt: "« Vous avez choisi ? »", options: ["Oui, je vais prendre le plat du jour.", "Oui, je suis arrivé hier.", "Oui, au troisième arrêt.", "Oui, depuis deux jours."], answer: 0 },
    gap: { prompt: "Pour moi, ce sera le poisson ___ légumes.", answers: ["avec"], explain: "avec légumes = mit Gemüse" },
    typed: { prompt: "Bestellen Sie vollständig ein vegetarisches Gericht und eine Karaffe Wasser.", answerText: "Je voudrais un plat végétarien et une carafe d’eau.", keywords: [["plat vegetarien"], ["carafe deau"]], explain: "Beide Wünsche gehören in eine vollständige Bestellung." }
  },
  marseille: {
    choice: { prompt: "« Depuis quand avez-vous mal ? »", options: ["Depuis deux jours.", "Deux fois par jour.", "Sans ordonnance.", "Au nom de Martin."], answer: 0 },
    gap: { prompt: "J’ai mal ___ la gorge depuis hier.", answers: ["à", "a"], explain: "avoir mal à la gorge = Halsschmerzen haben" },
    typed: { prompt: "Beschreiben Sie vollständig Kopfschmerzen, die Sie seit gestern haben.", answerText: "J’ai mal à la tête depuis hier.", keywords: [["jai mal a la tete", "jai un mal de tete"], ["depuis hier"]], explain: "Nenne die Beschwerde und die Dauer." }
  },
  nice: {
    choice: { prompt: "« Qu’est-ce que vous allez faire demain ? »", options: ["S’il fait beau, on va se baigner.", "Je voudrais porter plainte.", "Le billet est composté.", "Une chambre côté cour."], answer: 0 },
    gap: { prompt: "S’il fait beau, on va se ___.", answers: ["baigner"], explain: "se baigner = baden gehen" },
    typed: { prompt: "« Que ferez-vous s’il fait beau ? » Répondez avec un projet.", answerText: "S’il fait beau, nous allons visiter la vieille ville.", keywords: [["sil fait beau"], ["nous allons", "on va", "jirai", "nous irons"]], explain: "Verbinde die Wetterbedingung mit einem vollständigen Plan." }
  },
  toulouse: {
    choice: { prompt: "« Il vous en faut combien ? »", options: ["Je voudrais cinq cents grammes.", "Je descends au prochain arrêt.", "Nous restons une semaine.", "Il va pleuvoir."], answer: 0 },
    gap: { prompt: "Je voudrais cinq cents grammes ___ fromage.", answers: ["de"], explain: "Nach einer Mengenangabe steht de." },
    typed: { prompt: "Fragen Sie vollständig, ob Sie die Jacke in Größe M anprobieren können.", answerText: "Est-ce que je peux essayer cette veste en taille M ?", keywords: [["essayer"], ["taille m"], ["veste"]], explain: "Die Antwort braucht anprobieren, Jacke und Größe M." }
  },
  bordeaux: {
    choice: { prompt: "« Tu supportes quelle équipe ? »", options: ["Je supporte Bordeaux.", "Je prends un sirop.", "Je cherche le quai.", "Je voudrais l’addition."], answer: 0 },
    gap: { prompt: "Ils ont gagné deux ___ un.", answers: ["à", "a"], explain: "deux à un = zwei zu eins" },
    typed: { prompt: "« Tu as pensé quoi du match ? » Donnez votre avis en une phrase.", answerText: "À mon avis, les deux équipes ont bien joué.", keywords: [["a mon avis", "je pense que", "jai trouve que"]], explain: "Formuliere eine vollständige persönliche Meinung." }
  },
  nantes: {
    choice: { prompt: "« Qu’est-ce qui s’est passé ? »", options: ["On m’a volé mon portefeuille.", "Nous avons réservé une table.", "Il fait doux aujourd’hui.", "Je supporte cette équipe."], answer: 0 },
    gap: { prompt: "On m’a ___ mon téléphone.", answers: ["volé", "vole"], explain: "on m’a volé = mir wurde gestohlen" },
    typed: { prompt: "Bitten Sie vollständig darum, die Polizei zu rufen.", answerText: "Pouvez-vous appeler la police, s’il vous plaît ?", keywords: [["pouvez vous", "pourriez vous"], ["appeler"], ["police"]], explain: "Formuliere die Bitte höflich und vollständig." }
  },
  lille: {
    choice: { prompt: "« Vous voulez venir dîner chez nous ? »", options: ["Merci, avec plaisir !", "Un aller simple, merci.", "Je suis allergique.", "Tournez à droite."], answer: 0 },
    gap: { prompt: "Merci, c’est très gentil. Avec ___ !", answers: ["plaisir"], explain: "avec plaisir = sehr gern" },
    typed: { prompt: "Bedanken Sie sich vollständig für einen schönen Abend.", answerText: "Merci beaucoup, nous avons passé une excellente soirée.", keywords: [["merci"], ["soiree"]], explain: "Eine vollständige Antwort enthält Dank und den Abend." }
  },
  paris: {
    choice: { prompt: "« Vous avez compris ? »", options: ["Pas tout à fait. Pourriez-vous reformuler ?", "Oui, deux cafés en terrasse.", "Non, le train avait du retard.", "Oui, je prends cette pommade."], answer: 0 },
    gap: { prompt: "Si j’ai bien ___, je dois changer à Lyon.", answers: ["compris"], explain: "si j’ai bien compris = wenn ich richtig verstanden habe" },
    typed: { prompt: "Bitten Sie vollständig darum, langsamer zu wiederholen.", answerText: "Pourriez-vous répéter un peu plus lentement, s’il vous plaît ?", keywords: [["repeter"], ["lentement", "moins vite"]], explain: "Bitte höflich um Wiederholung und geringeres Sprechtempo." }
  }
};

travelModules.forEach(function (module) {
  module.conversation = conversationModules[module.id];
});

const grammarModules = [
  {
    id: "present", city: "Orléans", title: "Präsens & wichtige Verben", level: "A2 · Basis",
    summary: "Regelmäßige Verben sowie être, avoir, aller, faire und pouvoir.",
    theory: [
      { title: "Regelmäßige -er-Verben", text: "Bei parler: je parle, tu parles, il/elle parle, nous parlons, vous parlez, ils/elles parlent.", example: "Nous parlons un peu français. · Vous cherchez la gare ?" },
      { title: "Die Reise-Allrounder", text: "Lerne être, avoir, aller und faire als feste Reihen. Sie tauchen ständig auf.", example: "Je suis prêt. · Nous avons faim. · Vous allez bien ? · Il fait beau." }
    ],
    questions: [
      { prompt: "Nous ___ une réservation.", options: ["avons", "avez", "ont", "avoir"], answer: 0, explain: "Mit nous heißt avoir: nous avons." },
      { prompt: "Vous ___ où ce soir ?", options: ["allez", "allons", "va", "vont"], answer: 0, explain: "Mit vous heißt aller: vous allez." },
      { prompt: "Je ___ une table pour deux.", options: ["cherche", "cherches", "cherchons", "cherchez"], answer: 0, explain: "Die je-Form von chercher endet auf -e." },
      { prompt: "Il ___ très chaud aujourd’hui.", options: ["fait", "fais", "font", "faire"], answer: 0, explain: "Wetter wird mit il fait beschrieben." },
      { prompt: "Est-ce que tu ___ m’aider ?", options: ["peux", "peut", "pouvez", "pouvoir"], answer: 0, explain: "Mit tu heißt pouvoir: tu peux." }
    ]
  },
  {
    id: "questions", city: "Tours", title: "Fragen & höflich bitten", level: "A2 · Gespräch",
    summary: "Est-ce que, Fragewörter, Inversion und conditionnel de politesse.",
    theory: [
      { title: "Drei Wege zu fragen", text: "Alltag: Vous avez une table ? Neutral: Est-ce que vous avez une table ? Formeller: Avez-vous une table ?", example: "Où est la gare ? · Est-ce que le petit-déjeuner est compris ?" },
      { title: "Höfliche Wünsche", text: "Je voudrais und pourriez-vous sind Conditionnel-Formen. Sie machen Bitten freundlich.", example: "Je voudrais réserver. · Pourriez-vous répéter ?" }
    ],
    questions: [
      { prompt: "___ est-ce que le train part ?", options: ["Quand", "Combien", "Pourquoi de", "Quel"], answer: 0, explain: "Quand fragt nach dem Zeitpunkt." },
      { prompt: "Welche Bitte klingt am höflichsten?", options: ["Pourriez-vous m’aider ?", "Aide-moi.", "Tu aides.", "Aider ici."], answer: 0, explain: "Pourriez-vous …? ist eine sehr höfliche Bitte." },
      { prompt: "___ coûte cette chambre ?", options: ["Combien", "Comment", "Où", "Qui"], answer: 0, explain: "Combien fragt nach Menge oder Preis." },
      { prompt: "Bilde eine neutrale Frage.", options: ["Est-ce que vous acceptez la carte ?", "Vous acceptez la carte est.", "Acceptez la carte vous ?", "Que acceptez-vous carte ?"], answer: 0, explain: "Est-ce que + Aussagesatz ist zuverlässig und neutral." },
      { prompt: "___ se trouve la pharmacie ?", options: ["Où", "Quand", "Combien de", "Quel"], answer: 0, explain: "Où fragt nach einem Ort." }
    ]
  },
  {
    id: "articles", city: "Clermont-Ferrand", title: "Artikel, Mengen & Orte", level: "A2 · Genauigkeit",
    summary: "Bestimmte und Teilungsartikel, de nach Mengen, à/en/au bei Orten.",
    theory: [
      { title: "Teilungsartikel", text: "Für unbestimmte Mengen: du, de la, de l’, des. Nach einer Verneinung steht meist de.", example: "Je prends du fromage. · Je ne prends pas de dessert." },
      { title: "Länder und Städte", text: "Städte mit à, feminine Länder mit en, maskuline Länder mit au.", example: "à Paris · en France · au Portugal · aux Pays-Bas" }
    ],
    questions: [
      { prompt: "Je voudrais un kilo ___ tomates.", options: ["de", "des", "du", "les"], answer: 0, explain: "Nach Mengenangaben steht de." },
      { prompt: "Nous sommes ___ France.", options: ["en", "au", "à la", "aux"], answer: 0, explain: "Bei femininen Ländern steht en." },
      { prompt: "Je ne mange pas ___ viande.", options: ["de", "de la", "la", "une"], answer: 0, explain: "Nach ne … pas wird der Teilungsartikel zu de." },
      { prompt: "Ils vont ___ Bordeaux.", options: ["à", "en", "au", "du"], answer: 0, explain: "Bei Städten steht à." },
      { prompt: "Nous prenons ___ eau.", options: ["de l’", "du", "des", "de la"], answer: 0, explain: "Vor Vokal steht der Teilungsartikel de l’." }
    ]
  },
  {
    id: "pronouns", city: "Grenoble", title: "Pronomen y & en", level: "B1 · Fluss",
    summary: "Orte und Mengen ersetzen, Wiederholungen vermeiden.",
    theory: [
      { title: "y ersetzt Orte", text: "y ersetzt meist à + Ort. Es steht vor dem konjugierten Verb.", example: "Vous allez au marché ? Oui, j’y vais." },
      { title: "en ersetzt de + Sache/Menge", text: "Bei Mengen bleibt die Zahl oder Mengenangabe erhalten.", example: "Vous voulez du pain ? Oui, j’en veux. · J’en prends deux." }
    ],
    questions: [
      { prompt: "Vous allez à Paris ? Oui, j’___ vais demain.", options: ["y", "en", "le", "lui"], answer: 0, explain: "à Paris wird durch y ersetzt." },
      { prompt: "Tu veux du café ? Non, je n’___ veux pas.", options: ["en", "y", "le", "la"], answer: 0, explain: "du café wird durch en ersetzt." },
      { prompt: "Vous avez des chambres ? Oui, nous ___ avons deux.", options: ["en", "y", "les", "leur"], answer: 0, explain: "en ersetzt des chambres; deux bleibt stehen." },
      { prompt: "On va au restaurant. On ___ va à pied.", options: ["y", "en", "lui", "la"], answer: 0, explain: "au restaurant ist ein Ort und wird zu y." },
      { prompt: "Je parle de ce problème. J’___ parle à la réception.", options: ["en", "y", "le", "les"], answer: 0, explain: "de ce problème wird durch en ersetzt." }
    ]
  },
  {
    id: "passe", city: "Montpellier", title: "Passé composé", level: "A2/B1 · Rückblick",
    summary: "Über Anreise, Erlebnisse und abgeschlossene Handlungen sprechen.",
    theory: [
      { title: "avoir + participe passé", text: "Die meisten Verben bilden das passé composé mit avoir. -er wird zu -é, -ir oft zu -i.", example: "Nous avons visité Avignon. · J’ai fini mon repas." },
      { title: "Bewegung mit être", text: "Einige Bewegungsverben nutzen être; das Partizip passt sich an Geschlecht und Zahl an.", example: "Elle est arrivée. · Nous sommes partis tôt." }
    ],
    questions: [
      { prompt: "Nous ___ visité le musée.", options: ["avons", "sommes", "avez", "allons"], answer: 0, explain: "visiter bildet das passé composé mit avoir." },
      { prompt: "Marie est ___ hier soir.", options: ["arrivée", "arrivé", "arriver", "arrivés"], answer: 0, explain: "Mit Marie und être lautet die feminine Form arrivée." },
      { prompt: "Ils ___ partis à huit heures.", options: ["sont", "ont", "vont", "font"], answer: 0, explain: "partir bildet das passé composé mit être." },
      { prompt: "J’ai ___ le plat du jour.", options: ["pris", "prendu", "prendre", "prend"], answer: 0, explain: "Das Partizip von prendre ist pris." },
      { prompt: "Vous avez ___ bon voyage ?", options: ["fait", "faire", "fais", "faits"], answer: 0, explain: "Das Partizip von faire ist fait." }
    ]
  },
  {
    id: "imparfait", city: "Biarritz", title: "Imparfait & Erzählrahmen", level: "B1 · Erzählen",
    summary: "Wetter, Zustände und Gewohnheiten in der Vergangenheit beschreiben.",
    theory: [
      { title: "Bildung", text: "Nimm die nous-Form im Präsens, entferne -ons und ergänze -ais, -ais, -ait, -ions, -iez, -aient.", example: "nous parlons → je parlais · nous faisons → il faisait" },
      { title: "Imparfait oder passé composé?", text: "Imparfait liefert Hintergrund und Gewohnheiten; passé composé erzählt ein abgeschlossenes Ereignis.", example: "Il pleuvait quand nous sommes arrivés." }
    ],
    questions: [
      { prompt: "Quand nous étions à Nice, il ___ beau.", options: ["faisait", "a fait", "fait", "fera"], answer: 0, explain: "Eine Wetterbeschreibung im Hintergrund steht im imparfait." },
      { prompt: "Je ___ au café quand tu as appelé.", options: ["mangeais", "ai mangé", "mangerai", "mange"], answer: 0, explain: "Die laufende Hintergrundhandlung steht im imparfait." },
      { prompt: "Tous les étés, nous ___ en France.", options: ["allions", "sommes allés", "irons", "allons hier"], answer: 0, explain: "Eine frühere Gewohnheit steht im imparfait." },
      { prompt: "Le train ___ quand la panne a commencé.", options: ["roulait", "a roulé", "roule", "roulera"], answer: 0, explain: "Der Zug war bereits in Bewegung: Hintergrund im imparfait." },
      { prompt: "Imparfait von « avoir » mit vous:", options: ["aviez", "avez", "auriez", "avez eu"], answer: 0, explain: "Der Stamm ist av- und die vous-Endung -iez." }
    ]
  },
  {
    id: "future", city: "Rennes", title: "Zukunft & Pläne", level: "A2/B1 · Vorausblick",
    summary: "Futur proche, futur simple und Bedingungen mit si.",
    theory: [
      { title: "Futur proche", text: "aller im Präsens + Infinitiv drückt einen nahen oder festen Plan aus.", example: "Demain, nous allons visiter le château." },
      { title: "Futur simple", text: "Infinitiv + ai, as, a, ons, ez, ont. Nach si steht Präsens, im Hauptsatz oft Futur.", example: "S’il fait beau, nous irons à la plage." }
    ],
    questions: [
      { prompt: "Ce soir, je ___ dîner au restaurant.", options: ["vais", "va", "aller", "suis"], answer: 0, explain: "Futur proche: je vais + Infinitiv." },
      { prompt: "Demain, nous ___ à Paris.", options: ["arriverons", "arrivons hier", "sommes arriver", "arriverions si"], answer: 0, explain: "Futur simple mit nous endet auf -ons." },
      { prompt: "S’il pleut, on ___ le musée.", options: ["visitera", "visiterait hier", "a visiter", "visite passé"], answer: 0, explain: "Nach si + Präsens kann im Hauptsatz Futur stehen." },
      { prompt: "Vous ___ beau demain.", options: ["aurez", "avez eu", "avoir", "auront"], answer: 0, explain: "Das Futur simple von avoir hat den Stamm aur-." },
      { prompt: "Ils ___ partir tôt.", options: ["vont", "allez", "va", "sont"], answer: 0, explain: "Futur proche mit ils: ils vont partir." }
    ]
  },
  {
    id: "nuance", city: "Versailles", title: "Verneinung & Vergleiche", level: "B1 · Nuance",
    summary: "ne … plus/jamais/rien und Vergleiche mit plus, moins, aussi.",
    theory: [
      { title: "Mehr als nur ne … pas", text: "ne … plus = nicht mehr, ne … jamais = nie, ne … rien = nichts. Vor Vokal wird ne zu n’.", example: "Je ne fume plus. · Nous n’avons rien réservé." },
      { title: "Vergleichen", text: "plus/moins/aussi + Adjektiv + que. Bei Mengen: plus de / moins de.", example: "Lyon est plus grand que Colmar. · Il y a moins de monde." }
    ],
    questions: [
      { prompt: "Je ___ mange plus de viande.", options: ["ne", "pas", "rien", "jamais pas"], answer: 0, explain: "ne … plus umschließt das konjugierte Verb." },
      { prompt: "Cette chambre est ___ calme que l’autre.", options: ["plus", "beaucoup de", "très de", "mieux de"], answer: 0, explain: "plus + Adjektiv + que bildet den Vergleich." },
      { prompt: "Nous n’avons ___ compris.", options: ["rien", "jamais pas", "plus de", "personne de"], answer: 0, explain: "ne … rien bedeutet nichts." },
      { prompt: "Il y a ___ touristes en septembre.", options: ["moins de", "moins que", "aussi", "plus petit"], answer: 0, explain: "Vor einem Nomen steht moins de." },
      { prompt: "Je ne suis ___ allé à Marseille.", options: ["jamais", "rien", "plus de", "aucun de"], answer: 0, explain: "ne … jamais bedeutet nie." }
    ]
  }
];

const defaultState = {
  xp: 0,
  hearts: 5,
  streak: 1,
  completed: [],
  dialogueCompleted: [],
  grammarCompleted: [],
  dailyXp: 0,
  lastStudy: "",
  lessonsDone: 0
};

let state = loadState();
let currentView = "home";
let activeLesson = null;
let lessonTab = "vocab-a";
let quiz = null;
let learnFilter = "all";
let practiceModuleId = "all";
let deferredInstall = null;

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem("franceQuestState") || "{}");
    return Object.assign({}, defaultState, saved);
  } catch (error) {
    return Object.assign({}, defaultState);
  }
}

function saveState() {
  localStorage.setItem("franceQuestState", JSON.stringify(state));
  updateStats();
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayKey() {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
}

function recordStudy(xp) {
  const today = todayKey();
  if (state.lastStudy !== today) {
    state.streak = state.lastStudy === yesterdayKey() ? state.streak + 1 : 1;
    state.dailyXp = 0;
  }
  state.lastStudy = today;
  state.dailyXp += xp;
  state.xp += xp;
  saveState();
}

function updateStats() {
  document.getElementById("xpValue").textContent = state.xp;
  document.getElementById("heartsValue").textContent = state.hearts;
  document.getElementById("streakValue").textContent = state.streak;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (char) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

const stageIconNames = {
  strasbourg: "hello",
  colmar: "train",
  annecy: "compass",
  lyon: "hotel",
  avignon: "food",
  marseille: "pharmacy",
  nice: "sun",
  toulouse: "bag",
  bordeaux: "football",
  nantes: "alert",
  lille: "cheers",
  paris: "tower"
};

function uiIcon(name, className) {
  return '<svg class="ui-icon ' + escapeHtml(className || "") + '" aria-hidden="true" focusable="false"><use href="#icon-' + escapeHtml(name) + '"></use></svg>';
}

function stageIcon(module, className) {
  return uiIcon(stageIconNames[module.id] || "map", className || "stage-svg");
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(function () { toast.classList.remove("show"); }, 2300);
}

function launchCelebration(amount, finale) {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const layer = document.createElement("div");
  layer.className = "celebration-layer" + (finale ? " finale" : "");
  layer.setAttribute("aria-hidden", "true");
  const colors = ["#ffd83d", "#57a7ff", "#ff5f72", "#51d49a", "#c28cff", "#ffffff"];

  const ring = document.createElement("span");
  ring.className = "reward-ring";
  layer.appendChild(ring);

  for (let index = 0; index < amount; index += 1) {
    const angle = (Math.PI * 2 * index) / amount + Math.random() * 0.28;
    const distance = (finale ? 165 : 105) + Math.random() * (finale ? 190 : 105);
    const particle = document.createElement("i");
    const isCoin = index % 4 === 0;
    particle.className = isCoin ? "coin-particle" : "confetti-particle";
    particle.style.setProperty("--x", Math.cos(angle) * distance + "px");
    particle.style.setProperty("--y", Math.sin(angle) * distance + "px");
    particle.style.setProperty("--r", Math.round(Math.random() * 520 - 260) + "deg");
    particle.style.setProperty("--delay", Math.random() * 0.12 + "s");
    particle.style.setProperty("--color", colors[index % colors.length]);
    if (isCoin) particle.textContent = "★";
    layer.appendChild(particle);
  }

  const xp = document.createElement("strong");
  xp.className = "xp-burst";
  xp.textContent = finale ? "ÉTAPE GAGNÉE!" : "+10 XP";
  layer.appendChild(xp);
  document.body.appendChild(layer);
  requestAnimationFrame(function () { layer.classList.add("go"); });
  setTimeout(function () { layer.remove(); }, finale ? 1850 : 1250);
}

function celebrateCorrect() {
  launchCelebration(24, false);
}

function setView(view) {
  currentView = view;
  activeLesson = null;
  quiz = null;
  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.classList.toggle("active", item.dataset.view === view);
  });
  render();
  document.getElementById("app").focus({ preventScroll: true });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function isUnlocked(index) {
  if (index === 0) return true;
  return state.completed.includes(travelModules[index - 1].id);
}

function getNextModuleIndex() {
  const firstOpen = travelModules.findIndex(function (module) { return !state.completed.includes(module.id); });
  return firstOpen === -1 ? travelModules.length - 1 : firstOpen;
}

function dialogueIsComplete(moduleId) {
  return Array.isArray(state.dialogueCompleted) && state.dialogueCompleted.includes(moduleId);
}

function applyStageTheme() {
  let moduleId = travelModules[getNextModuleIndex()].id;
  if (activeLesson && activeLesson.module && stageThemes[activeLesson.module.id]) moduleId = activeLesson.module.id;
  else if (currentView === "practice" && practiceModuleId !== "all") moduleId = practiceModuleId;
  const theme = stageThemes[moduleId] || stageThemes.strasbourg;
  document.body.dataset.tourTheme = moduleId;
  document.body.dataset.landscape = theme.landscape;
}

function routeCard(module, index) {
  const complete = state.completed.includes(module.id);
  const unlocked = isUnlocked(index);
  const current = unlocked && !complete && index === getNextModuleIndex();
  const status = complete ? "✓" : current ? "🚴" : unlocked ? "›" : "🔒";
  const jersey = index % 4 === 0 ? "yellow" : index % 4 === 1 ? "green" : index % 4 === 2 ? "polka" : "white";
  return '<button class="route-card jersey-' + jersey + ' ' + (complete ? "completed " : "") + (current ? "current " : "") + (!unlocked ? "locked" : "") + '" data-module="' + module.id + '">' +
    '<span class="city-node"><i>' + (index + 1) + '</i><b>' + stageIcon(module, "stage-svg") + '</b></span>' +
    '<span class="route-copy"><small><span class="jersey-dot"></span> Étape ' + (index + 1) + ' · ' + module.city + '</small><strong>' + escapeHtml(module.title) + '</strong><p>' + escapeHtml(module.summary) + '</p><em>KM ' + module.km + '</em></span>' +
    '<span class="route-status">' + status + '</span></button>';
}

function renderHome() {
  const nextIndex = getNextModuleIndex();
  const next = travelModules[nextIndex];
  const progress = Math.round((state.completed.length / travelModules.length) * 100);
  const dailyPercent = Math.min(100, Math.round((state.dailyXp / 50) * 100));
  return '<section class="hero tour-hero">' +
    '<div class="hero-grid" aria-hidden="true"></div><div class="hero-glow" aria-hidden="true"></div>' +
    '<div class="tour-scenery" aria-hidden="true"><span class="tour-sun"></span><span class="mountain mountain-a"></span><span class="mountain mountain-b"></span><span class="tour-road"></span><span class="tour-cyclist">' + uiIcon("bike", "tour-bike-icon") + '</span></div>' +
    '<div class="hero-content"><p class="eyebrow"><span>GRAND TOUR</span> Linguistique · A2/B1</p>' +
    '<h1>Deine Tour.<br><span>Dein Französisch.</span></h1>' +
    '<p>12 Etappen. Echte Gespräche. Ein Ziel: Paris.</p>' +
    '<div class="race-hud"><span class="hud-jersey"><i></i></span><span><small>' + escapeHtml(stageThemes[next.id].label) + '</small><strong>' + (nextIndex + 1) + ' · ' + next.city + '</strong></span><b>' + next.km + ' KM</b></div>' +
    '<div class="hero-row"><button class="btn btn-primary btn-race" data-module="' + next.id + '"><span>Losfahren</span><b>→</b></button>' +
    '<div class="mini-progress"><small>' + state.completed.length + '/' + travelModules.length + ' ÉTAPPES</small><div class="progress-track"><div class="progress-fill" style="width:' + progress + '%"></div></div></div></div></div>' +
    '</section>' +
    '<div class="section-head"><div><span class="section-tag">TAGESWERTUNG</span><h2>Hol dir das Maillot jaune</h2><p>Ein kurzer Sprint hält die Serie am Leben.</p></div></div>' +
    '<div class="daily-card jersey-card"><span class="daily-icon"><i class="yellow-jersey-icon"></i></span><span class="daily-copy"><strong>' + (state.dailyXp >= 50 ? "Gelbes Trikot verteidigt!" : "50 XP bis zum gelben Trikot") + '</strong><small>' + state.dailyXp + ' von 50 XP heute · ' + uiIcon("flame", "micro-icon") + ' ' + state.streak + (state.streak === 1 ? " Tag" : " Tage") + '</small></span><span class="circle-progress" style="--value:' + dailyPercent + '%"><span>' + dailyPercent + '%</span></span></div>' +
    '<div class="section-head"><div><span class="section-tag">ROADBOOK · 2.895 KM</span><h2>Deine Tour-Route</h2><p>Jede Stadt bringt dich sprachlich näher nach Paris.</p></div><button data-view="learn">Alle Étapes</button></div>' +
    '<div class="route">' + travelModules.map(routeCard).join("") + '</div>';
}

function moduleCard(module, index) {
  const unlocked = isUnlocked(index);
  const complete = state.completed.includes(module.id);
  return '<button class="module-card ' + (!unlocked ? "locked" : "") + '" data-module="' + module.id + '">' +
    '<span class="module-icon">' + stageIcon(module, "stage-svg") + '</span><small>' + module.city + '</small><strong>' + escapeHtml(module.title) + '</strong>' +
    '<p>' + escapeHtml(module.summary) + '</p><span class="module-meta">' + (complete ? "✓ Geschafft" : unlocked ? module.vocab.length + " Wörter · " + module.scaffolds.length + " Scaffolds" : "🔒 Noch gesperrt") + '</span></button>';
}

function renderLearn() {
  const labels = { all: "Alle", alltag: "Unterwegs", service: "Service", freizeit: "Small Talk", finale: "Finale" };
  const filtered = travelModules.filter(function (module) { return learnFilter === "all" || module.category === learnFilter; });
  return '<h1 class="page-title">Reisethemen</h1><p class="page-lead">Jede Stadt besteht aus drei Mini-Étapes: Basiswortschatz, Aufbauwortschatz und Gesprächsgerüste. Im Sprint schreibst du anschließend selbst auf Französisch.</p>' +
    '<div class="filter-row">' + Object.keys(labels).map(function (key) { return '<button class="chip ' + (learnFilter === key ? "active" : "") + '" data-filter="' + key + '">' + labels[key] + '</button>'; }).join("") + '</div>' +
    '<div class="module-grid">' + filtered.map(function (module) { return moduleCard(module, travelModules.indexOf(module)); }).join("") + '</div>';
}

function renderPractice() {
  const selectedModule = travelModules.find(function (module) { return module.id === practiceModuleId; });
  const scopeLabel = selectedModule ? selectedModule.city : "alle Städte";
  const vocabCount = selectedModule ? selectedModule.vocab.length : travelModules.reduce(function (sum, module) { return sum + module.vocab.length; }, 0);
  const gapCount = selectedModule ? selectedModule.cloze.length : travelModules.reduce(function (sum, module) { return sum + module.cloze.length; }, 0);
  const dialogueCount = selectedModule ? 3 : travelModules.length * 3;
  return '<h1 class="page-title">Freies Training</h1><p class="page-lead">Übe jederzeit und ohne Einfluss auf deine aktuelle Etappe. Fehler kosten hier keine Herzen.</p>' +
    '<section class="practice-hero"><span class="practice-target">' + uiIcon("target", "hero-icon") + '</span><div><span class="stage-pill">MODE ENTRAÎNEMENT</span><h2>Unsicher? Fahr eine Extrarunde.</h2><p>Wähle eine Stadt oder mische die gesamte Tour.</p></div></section>' +
    '<label class="practice-select-label" for="practiceModule">Trainingsgebiet</label>' +
    '<div class="practice-select-wrap"><span>' + uiIcon("map", "select-icon") + '</span><select id="practiceModule" data-practice-select>' +
      '<option value="all"' + (practiceModuleId === "all" ? " selected" : "") + '>Gesamte Tour · alle Städte</option>' +
      travelModules.map(function (module) { return '<option value="' + module.id + '"' + (practiceModuleId === module.id ? " selected" : "") + '>' + module.city + ' · ' + escapeHtml(module.title) + '</option>'; }).join("") +
    '</select></div>' +
    '<div class="practice-scope">Auswahl: <strong>' + escapeHtml(scopeLabel) + '</strong></div>' +
    '<div class="practice-modes">' +
      '<button class="practice-mode vocab-mode" data-practice-mode="vocab"><span>' + uiIcon("chat", "mode-icon") + '</span><small>WORTSCHATZ</small><strong>Vokabel-Mix</strong><p>Auswahl und Deutsch → Französisch kombiniert.</p><em>' + vocabCount + ' Wörter verfügbar</em></button>' +
      '<button class="practice-mode gap-mode" data-practice-mode="gap"><span>' + uiIcon("pen", "mode-icon") + '</span><small>LÜCKEN</small><strong>Tour-Lückensprint</strong><p>Ergänze fehlende französische Wörter.</p><em>' + gapCount + ' Sätze verfügbar</em></button>' +
      '<button class="practice-mode dialogue-mode" data-practice-mode="dialogue"><span>' + uiIcon("target", "mode-icon") + '</span><small>DIALOG</small><strong>Antworttraining</strong><p>Geführt, ergänzt und schließlich frei geantwortet.</p><em>' + dialogueCount + ' Aufgaben verfügbar</em></button>' +
    '</div>';
}

function renderGrammar() {
  return '<h1 class="page-title">Grammatikpässe</h1><p class="page-lead">Die wichtigsten A2/B1-Phänomene in sinnvoller Reihenfolge – kurz erklärt und direkt angewendet.</p>' +
    '<section class="grammar-banner"><span class="stage-pill icon-label">' + uiIcon("puzzle", "micro-icon") + ' 8 Bergpässe</span><h2>Form gibt dir Freiheit.</h2><p>Die Grammatikroute läuft parallel zu deiner Reise. Alle Pässe sind jederzeit offen.</p></section>' +
    '<div class="grammar-list">' + grammarModules.map(function (module, index) {
      const done = state.grammarCompleted.includes(module.id);
      return '<button class="grammar-card" data-grammar="' + module.id + '"><span class="grammar-number">' + (done ? "✓" : index + 1) + '</span><span class="grammar-copy"><strong>' + escapeHtml(module.title) + '</strong><small>' + module.city + ' · ' + escapeHtml(module.summary) + '</small></span><span>' + (done ? "🏅" : "›") + '</span></button>';
    }).join("") + '</div>';
}

function renderProfile() {
  const routePercent = Math.round((state.completed.length / travelModules.length) * 100);
  const badges = [
    { icon: "hello", name: "Erster Kontakt", on: state.completed.length >= 1 },
    { icon: "flame", name: "3-Tage-Serie", on: state.streak >= 3 },
    { icon: "chat", name: "Gesprächsprofi", on: state.completed.length >= 5 },
    { icon: "puzzle", name: "Grammatik-Ass", on: state.grammarCompleted.length >= 4 },
    { icon: "bolt", name: "500 XP", on: state.xp >= 500 },
    { icon: "tower", name: "Paris erreicht", on: state.completed.includes("paris") }
  ];
  return '<h1 class="page-title">Dein Profil</h1><p class="page-lead">Deine Reise wird ausschließlich auf diesem Gerät gespeichert.</p>' +
    '<section class="profile-hero"><div class="avatar">' + uiIcon("bike", "avatar-icon") + '</div><h1>Voyageur·euse</h1><p>' + routePercent + '% der Strecke nach Paris geschafft</p></section>' +
    '<div class="profile-stats"><div class="profile-stat"><strong>' + state.xp + '</strong><small>Gesamt-XP</small></div><div class="profile-stat"><strong>' + state.streak + '</strong><small>Tage Serie</small></div><div class="profile-stat"><strong>' + state.lessonsDone + '</strong><small>Lektionen</small></div></div>' +
    '<div class="section-head"><div><h2>Abzeichen</h2><p>Neue Erfolge auf deiner Tour.</p></div></div>' +
    '<div class="badge-grid">' + badges.map(function (badge) { return '<div class="badge ' + (!badge.on ? "locked" : "") + '"><span>' + uiIcon(badge.icon, "badge-icon") + '</span><strong>' + badge.name + '</strong></div>'; }).join("") + '</div>' +
    '<div class="section-head"><div><h2>App</h2><p>Offline lernen und Fortschritt verwalten.</p></div></div>' +
    '<div class="settings">' +
      (deferredInstall ? '<div class="setting-row"><span><strong>Auf Smartphone installieren</strong><small>Wie eine normale App vom Homescreen starten.</small></span><button class="btn btn-blue" data-action="install">Installieren</button></div>' : '') +
      '<div class="setting-row"><span><strong>Dark Mode</strong><small>Augenfreundlich und immer aktiv.</small></span><span>🌙</span></div>' +
      '<div class="setting-row"><span><strong>Herzen auffüllen</strong><small>Kostenlos auf fünf Herzen zurücksetzen.</small></span><button class="btn btn-secondary" data-action="refill">+ ♥</button></div>' +
      '<div class="setting-row"><span><strong>Fortschritt zurücksetzen</strong><small>Löscht XP, Route und Abzeichen lokal.</small></span><button class="btn btn-danger" data-action="reset">Reset</button></div>' +
    '</div>';
}

function openTravelModule(id) {
  const index = travelModules.findIndex(function (module) { return module.id === id; });
  if (index < 0) return;
  if (!isUnlocked(index)) {
    showToast("Schließe zuerst " + travelModules[index - 1].city + " ab.");
    return;
  }
  activeLesson = { type: "travel", module: travelModules[index] };
  lessonTab = "vocab-a";
  quiz = null;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openGrammar(id) {
  const module = grammarModules.find(function (item) { return item.id === id; });
  if (!module) return;
  activeLesson = { type: "grammar", module: module };
  quiz = null;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderTravelLessonLegacy(module) {
  const content = lessonTab === "vocab"
    ? '<div class="lesson-note">💡 ' + escapeHtml(module.tip) + '</div><div class="vocab-list">' + module.vocab.map(function (item) {
        return '<article class="vocab-card"><div class="vocab-main"><strong lang="fr">' + escapeHtml(item.fr) + '</strong><span>' + escapeHtml(item.de) + '</span></div><p lang="fr">« ' + escapeHtml(item.ex) + ' »</p></article>';
      }).join("") + '</div>'
    : '<div class="lesson-note">🧱 Scaffolds sind Satzgerüste: Setze deine eigenen Angaben ein und du kannst sofort ein echtes Gespräch führen.</div>' + module.scaffolds.map(function (item) {
        return '<article class="scaffold-card"><strong lang="fr">' + escapeHtml(item.fr) + '</strong><p>' + escapeHtml(item.de) + '</p></article>';
      }).join("");
  return '<div class="detail-head"><button class="back-btn" data-action="back">←</button><div><span class="stage-pill">Etappe ' + (travelModules.indexOf(module) + 1) + ' · ' + module.city + '</span><h1><span class="title-stage-icon">' + stageIcon(module, "stage-svg") + '</span>' + escapeHtml(module.title) + '</h1><p>' + escapeHtml(module.summary) + '</p></div></div>' +
    '<div class="lesson-tabs"><button class="' + (lessonTab === "vocab" ? "active" : "") + '" data-tab="vocab">1 · Vokabeln</button><button class="' + (lessonTab === "scaffolds" ? "active" : "") + '" data-tab="scaffolds">2 · Satzgerüste</button></div>' +
    content + '<div class="lesson-footer"><button class="btn btn-blue btn-block" data-action="' + (lessonTab === "vocab" ? "show-scaffolds" : "start-travel-quiz") + '">' + (lessonTab === "vocab" ? "Weiter zu den Satzgerüsten" : "Spielrunde starten · +70 XP") + '</button></div>';
}

function renderTravelLesson(module) {
  const midpoint = Math.ceil(module.vocab.length / 2);
  const stages = {
    "vocab-a": { number: "1/3", jersey: "🟨", name: "Le Départ", subtitle: "Basiswortschatz für den schnellen Einstieg" },
    "vocab-b": { number: "2/3", jersey: "🟩", name: "L’Échappée", subtitle: "Aufbauwortschatz für genauere Gespräche" },
    "scaffolds": { number: "3/3", jersey: "🔴", name: "Le Peloton", subtitle: "Gesprächsgerüste für längere Antworten" }
  };
  const stage = stages[lessonTab] || stages["vocab-a"];
  const dialogueDone = dialogueIsComplete(module.id);
  let content = '<div class="mini-stage-intro"><span>' + stage.jersey + '</span><div><small>MINI-ÉTAPE ' + stage.number + '</small><strong>' + stage.name + '</strong><p>' + stage.subtitle + '</p></div></div>';

  if (lessonTab === "scaffolds") {
    content += '<div class="lesson-note">🧱 Setze eigene Angaben in die Satzgerüste ein. So kannst du sofort längere Gesprächsbeiträge bilden.</div>' + module.scaffolds.map(function (item, index) {
      return '<article class="scaffold-card"><span class="content-number">' + (index + 1) + '</span><strong lang="fr">' + escapeHtml(item.fr) + '</strong><p>' + escapeHtml(item.de) + '</p></article>';
    }).join("");
    content += '<section class="dialogue-panel ' + (dialogueDone ? "completed" : "") + '"><span class="dialogue-icon">' + uiIcon("chat", "dialogue-svg") + '</span><div><small>CONVERSATION CHALLENGE</small><strong>' + (dialogueDone ? "Dialogue geschafft" : "Vom Erkennen zum freien Sprechen") + '</strong><p>1 · Multiple Choice&nbsp;&nbsp;→&nbsp;&nbsp;2 · Lücke&nbsp;&nbsp;→&nbsp;&nbsp;3 · freie Antwort</p></div><b>' + (dialogueDone ? "✓" : "3") + '</b></section>';
  } else {
    const start = lessonTab === "vocab-b" ? midpoint : 0;
    const end = lessonTab === "vocab-b" ? module.vocab.length : midpoint;
    const words = module.vocab.slice(start, end);
    content += (lessonTab === "vocab-a"
      ? '<div class="lesson-note">💡 ' + escapeHtml(module.tip) + '</div>'
      : '<div class="lesson-note">🚴 Diese Wörter machen deine Antworten präziser. Sprich jeden Beispielsatz einmal laut.</div>') +
      '<div class="vocab-list">' + words.map(function (item, index) {
        return '<article class="vocab-card"><span class="content-number">' + (start + index + 1) + '</span><div class="vocab-main"><strong lang="fr">' + escapeHtml(item.fr) + '</strong><span>' + escapeHtml(item.de) + '</span></div><p lang="fr">« ' + escapeHtml(item.ex) + ' »</p></article>';
      }).join("") + '</div>';
  }

  const nextAction = lessonTab === "vocab-a" ? "show-vocab-b" : lessonTab === "vocab-b" ? "show-scaffolds" : dialogueDone ? "start-travel-quiz" : "start-dialogue";
  const nextLabel = lessonTab === "vocab-a" ? "Mini-Étape 2 · L’Échappée" : lessonTab === "vocab-b" ? "Mini-Étape 3 · Le Peloton" : dialogueDone ? "Finalen Sprint starten · bis zu 100 XP" : "Conversation Challenge starten · +40 XP";
  return '<div class="detail-head"><button class="back-btn" data-action="back">←</button><div><span class="stage-pill">Etappe ' + (travelModules.indexOf(module) + 1) + ' · ' + module.city + '</span><h1><span class="title-stage-icon">' + stageIcon(module, "stage-svg") + '</span>' + escapeHtml(module.title) + '</h1><p>' + escapeHtml(module.summary) + '</p></div></div>' +
    '<div class="lesson-total"><span>' + uiIcon("bike", "micro-icon") + ' 3 Mini-Étapes + Dialog</span><span>' + uiIcon("chat", "micro-icon") + ' ' + module.vocab.length + ' Wörter</span><span>' + uiIcon("puzzle", "micro-icon") + ' ' + module.scaffolds.length + ' Scaffolds</span></div>' +
    '<div class="lesson-tabs lesson-tabs-three"><button class="' + (lessonTab === "vocab-a" ? "active" : "") + '" data-tab="vocab-a">1 · Départ</button><button class="' + (lessonTab === "vocab-b" ? "active" : "") + '" data-tab="vocab-b">2 · Échappée</button><button class="' + (lessonTab === "scaffolds" ? "active" : "") + '" data-tab="scaffolds">3 · Peloton</button></div>' +
    content + '<div class="lesson-footer"><button class="btn btn-primary btn-block" data-action="' + nextAction + '">' + nextLabel + '</button></div>';
}

function renderGrammarLesson(module) {
  return '<div class="detail-head"><button class="back-btn" data-action="back">←</button><div><span class="stage-pill">Grammatikpass · ' + module.city + '</span><h1><span class="title-stage-icon grammar-title-icon">' + uiIcon("puzzle", "stage-svg") + '</span>' + escapeHtml(module.title) + '</h1><p>' + escapeHtml(module.level) + ' · ' + escapeHtml(module.summary) + '</p></div></div>' +
    module.theory.map(function (item) { return '<article class="theory-card"><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.text) + '</p><div class="example-box" lang="fr">' + escapeHtml(item.example) + '</div></article>'; }).join("") +
    '<div class="lesson-footer"><button class="btn btn-blue btn-block" data-action="start-grammar-quiz">Pass bezwingen · +60 XP</button></div>';
}

function optionSet(correct, pool) {
  const unique = [correct];
  pool.forEach(function (item) { if (!unique.includes(item) && unique.length < 4) unique.push(item); });
  const shift = correct.length % unique.length;
  const rotated = unique.slice(shift).concat(unique.slice(0, shift));
  return { options: rotated, answer: rotated.indexOf(correct) };
}

function buildTravelQuizLegacy(module) {
  const questions = [];
  [0, 2, 4].forEach(function (index) {
    const item = module.vocab[index];
    const set = optionSet(item.de, module.vocab.slice().reverse().map(function (entry) { return entry.de; }));
    questions.push({ prompt: "Was bedeutet „" + item.fr + "“?", hint: "Wähle die passende deutsche Bedeutung.", options: set.options, answer: set.answer, explain: item.fr + " = " + item.de });
  });
  const item = module.vocab[1];
  const reverseSet = optionSet(item.fr, module.vocab.map(function (entry) { return entry.fr; }).reverse());
  questions.splice(1, 0, { prompt: "Wie sagst du „" + item.de + "“?", hint: "Wähle den französischen Ausdruck.", options: reverseSet.options, answer: reverseSet.answer, explain: item.de + " = " + item.fr });
  const scaffold = module.scaffolds[2];
  const scaffoldSet = optionSet(scaffold.de, module.scaffolds.map(function (entry) { return entry.de; }).reverse());
  questions.push({ prompt: "Was leistet dieses Satzgerüst?", hint: scaffold.fr, options: scaffoldSet.options, answer: scaffoldSet.answer, explain: scaffold.de });
  const challengeCorrect = module.challenge.options[module.challenge.answer];
  const challengeSet = optionSet(challengeCorrect, module.challenge.options.slice().reverse());
  questions.push({ prompt: module.challenge.prompt, hint: "Wähle die natürlichste Antwort.", options: challengeSet.options, answer: challengeSet.answer, explain: "Genau – so passt die Antwort zur Situation." });
  return { kind: "travel", module: module, questions: questions, index: 0, score: 0, selected: null, checked: false };
}

function normalizeFrenchAnswer(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’']/g, "")
    .replace(/[.,!?;:«»"“”()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function isInputQuestion(question) {
  return question.type === "input" || question.type === "gap";
}

function isTypedAnswerCorrect(question, value) {
  const normalized = normalizeFrenchAnswer(value);
  if (question.keywords) {
    if (question.minWords && normalized.split(" ").filter(Boolean).length < question.minWords) return false;
    return question.keywords.every(function (group) {
      return group.some(function (keyword) {
        return normalized.includes(normalizeFrenchAnswer(keyword));
      });
    });
  }
  return (question.answers || [question.answerText]).some(function (answer) {
    return normalizeFrenchAnswer(answer) === normalized;
  });
}

function canCheckQuiz() {
  if (!quiz || quiz.checked) return false;
  const question = quiz.questions[quiz.index];
  return isInputQuestion(question) ? Boolean((quiz.typedAnswer || "").trim()) : quiz.selected !== null;
}

function buildTravelQuiz(module) {
  const questions = [];
  function addChoice(item) {
    const set = optionSet(item.de, module.vocab.slice().reverse().map(function (entry) { return entry.de; }));
    questions.push({ type: "choice", prompt: "Was bedeutet „" + item.fr + "“?", hint: "Wähle die passende deutsche Bedeutung.", options: set.options, answer: set.answer, explain: item.fr + " = " + item.de });
  }
  function addTyped(item) {
    questions.push({
      type: "input",
      prompt: "Schreibe auf Französisch: „" + item.de + "“",
      hint: "Tippe den französischen Ausdruck selbst. Akzente werden tolerant bewertet.",
      answers: item.answers || [item.fr],
      answerText: item.fr,
      explain: "Richtig heißt es: " + item.fr
    });
  }
  function addGap(cloze) {
    questions.push({
      type: "gap",
      prompt: cloze.prompt,
      hint: "Fülle die Lücke mit einem französischen Wort.",
      answers: cloze.answers,
      answerText: cloze.answers[0],
      explain: cloze.explain
    });
  }

  addChoice(module.vocab[0]);
  addTyped(module.vocab[8]);
  addChoice(module.vocab[5]);
  addGap(module.cloze[0]);
  addChoice(module.vocab[12]);
  addTyped(module.vocab[10]);
  addGap(module.cloze[1]);

  const scaffold = module.scaffolds[4];
  const scaffoldSet = optionSet(scaffold.de, module.scaffolds.map(function (entry) { return entry.de; }).reverse());
  questions.push({ type: "choice", prompt: "Was leistet dieses Satzgerüst?", hint: scaffold.fr, options: scaffoldSet.options, answer: scaffoldSet.answer, explain: scaffold.de });

  const challengeCorrect = module.challenge.options[module.challenge.answer];
  const challengeSet = optionSet(challengeCorrect, module.challenge.options.slice().reverse());
  questions.push({ type: "choice", prompt: module.challenge.prompt, hint: "Wähle die natürlichste Antwort.", options: challengeSet.options, answer: challengeSet.answer, explain: "Genau – so passt die Antwort zur Situation." });
  return { kind: "travel", module: module, questions: questions, index: 0, score: 0, selected: null, typedAnswer: "", correct: null, checked: false };
}

function buildDialogueQuestions(module) {
  const conversation = module.conversation;
  const correctChoice = conversation.choice.options[conversation.choice.answer];
  const choiceSet = optionSet(correctChoice, conversation.choice.options.slice().reverse());
  return [
    {
      type: "choice",
      prompt: conversation.choice.prompt,
      hint: "Runde 1 · Wähle zunächst die passendste Antwort.",
      options: choiceSet.options,
      answer: choiceSet.answer,
      explain: "Diese Antwort passt natürlich zur gestellten Frage."
    },
    {
      type: "gap",
      prompt: conversation.gap.prompt,
      hint: "Runde 2 · Ergänze die Antwort mit dem fehlenden französischen Wort.",
      answers: conversation.gap.answers,
      answerText: conversation.gap.answers[0],
      explain: conversation.gap.explain
    },
    {
      type: "input",
      prompt: conversation.typed.prompt,
      hint: "Runde 3 · Formuliere jetzt eine vollständige Antwort. Sinnvolle persönliche Varianten sind erlaubt.",
      answers: conversation.typed.answers || [conversation.typed.answerText],
      keywords: conversation.typed.keywords,
      minWords: conversation.typed.minWords || 4,
      answerText: conversation.typed.answerText,
      explain: conversation.typed.explain
    }
  ];
}

function buildDialogueQuiz(module) {
  return {
    kind: "dialogue",
    module: module,
    questions: buildDialogueQuestions(module),
    index: 0,
    score: 0,
    selected: null,
    typedAnswer: "",
    correct: null,
    checked: false
  };
}

function rotatedSample(items, count) {
  if (!items.length) return [];
  const offset = state.lessonsDone % items.length;
  const rotated = items.slice(offset).concat(items.slice(0, offset));
  return rotated.slice(0, Math.min(count, rotated.length));
}

function buildPracticeQuiz(mode) {
  const modules = practiceModuleId === "all"
    ? travelModules
    : travelModules.filter(function (module) { return module.id === practiceModuleId; });
  const practiceModule = {
    id: practiceModuleId,
    city: practiceModuleId === "all" ? "Gesamte Tour" : modules[0].city,
    title: mode === "vocab" ? "Vokabel-Mix" : mode === "gap" ? "Lückensprint" : "Antworttraining"
  };
  let questions = [];

  if (mode === "vocab") {
    const words = modules.reduce(function (all, module) { return all.concat(module.vocab); }, []);
    const selectedWords = rotatedSample(words, 8);
    selectedWords.forEach(function (item, index) {
      if (index % 2 === 0) {
        const set = optionSet(item.de, words.slice().reverse().map(function (entry) { return entry.de; }));
        questions.push({ type: "choice", prompt: "Was bedeutet „" + item.fr + "“?", hint: "Wähle die deutsche Bedeutung.", options: set.options, answer: set.answer, explain: item.fr + " = " + item.de });
      } else {
        questions.push({ type: "input", prompt: "Schreibe auf Französisch: „" + item.de + "“", hint: "Tippe den französischen Ausdruck.", answers: item.answers || [item.fr], answerText: item.fr, explain: "Richtig heißt es: " + item.fr });
      }
    });
  } else if (mode === "gap") {
    const gaps = modules.reduce(function (all, module) { return all.concat(module.cloze); }, []);
    questions = rotatedSample(gaps, practiceModuleId === "all" ? 8 : gaps.length).map(function (gap) {
      return { type: "gap", prompt: gap.prompt, hint: "Ergänze das fehlende französische Wort.", answers: gap.answers, answerText: gap.answers[0], explain: gap.explain };
    });
  } else {
    const dialogueQuestions = modules.reduce(function (all, module) { return all.concat(buildDialogueQuestions(module)); }, []);
    questions = rotatedSample(dialogueQuestions, practiceModuleId === "all" ? 9 : dialogueQuestions.length);
  }

  return {
    kind: "practice",
    practiceMode: mode,
    module: practiceModule,
    questions: questions,
    index: 0,
    score: 0,
    selected: null,
    typedAnswer: "",
    correct: null,
    checked: false
  };
}

function buildGrammarQuiz(module) {
  const questions = module.questions.map(function (question) {
    const correct = question.options[question.answer];
    const set = optionSet(correct, question.options.slice().reverse());
    return Object.assign({}, question, { type: "choice", options: set.options, answer: set.answer });
  });
  return { kind: "grammar", module: module, questions: questions, index: 0, score: 0, selected: null, typedAnswer: "", correct: null, checked: false };
}

function renderQuizLegacy() {
  const question = quiz.questions[quiz.index];
  const title = quiz.kind === "travel" ? quiz.module.city : quiz.module.title;
  return '<div class="detail-head"><button class="back-btn" data-action="quit-quiz">×</button><div><span class="stage-pill">' + (quiz.kind === "travel" ? "Etappen-Sprint" : "Grammatik-Sprint") + '</span><h1>' + escapeHtml(title) + '</h1><p>Frage ' + (quiz.index + 1) + ' von ' + quiz.questions.length + '</p></div></div>' +
    '<div class="quiz-progress">' + quiz.questions.map(function (_, index) { return '<span class="' + (index < quiz.index ? "done" : index === quiz.index ? "current" : "") + '"></span>'; }).join("") + '</div>' +
    '<span class="quiz-kicker">+10 XP bei richtiger Antwort</span><h2 class="quiz-title">' + escapeHtml(question.prompt) + '</h2><p class="quiz-hint">' + escapeHtml(question.hint || "Wähle die richtige Antwort.") + '</p>' +
    '<div class="option-list">' + question.options.map(function (option, index) {
      let klass = "";
      if (quiz.checked && index === question.answer) klass = "correct";
      else if (quiz.checked && index === quiz.selected && index !== question.answer) klass = "wrong";
      else if (!quiz.checked && index === quiz.selected) klass = "selected";
      return '<button class="option ' + klass + '" data-option="' + index + '" ' + (quiz.checked ? "disabled" : "") + '>' + escapeHtml(option) + '</button>';
    }).join("") + '</div>' +
    (quiz.checked ? '<div class="feedback ' + (quiz.selected === question.answer ? "good" : "bad") + '"><strong>' + (quiz.selected === question.answer ? '<span class="feedback-coin">★</span> Richtig! +10 XP' : "Fast! Ein Herz verloren.") + '</strong><br>' + escapeHtml(question.explain) + '</div>' : '') +
    '<div class="lesson-footer"><button class="btn ' + (quiz.checked ? "btn-blue" : "btn-secondary") + ' btn-block" data-action="' + (quiz.checked ? "next-question" : "check-answer") + '" ' + (quiz.selected === null ? "disabled" : "") + '>' + (quiz.checked ? (quiz.index === quiz.questions.length - 1 ? "Etappe abschließen" : state.hearts === 0 ? "Herzen auffüllen & weiter" : "Weiter") : "Antwort prüfen") + '</button></div>';
}

function renderQuiz() {
  const question = quiz.questions[quiz.index];
  const title = quiz.kind === "travel" || quiz.kind === "dialogue" ? quiz.module.city : quiz.module.title;
  const sprintLabel = quiz.kind === "travel" ? "Etappen-Sprint" : quiz.kind === "dialogue" ? "Conversation Challenge" : quiz.kind === "practice" ? "Freies Training" : "Grammatik-Sprint";
  const finishLabel = quiz.kind === "dialogue" ? "Dialogue abschließen" : quiz.kind === "practice" ? "Training abschließen" : "Etappe abschließen";
  const inputQuestion = isInputQuestion(question);
  let questionTitle = escapeHtml(question.prompt);
  if (question.type === "gap") questionTitle = questionTitle.replace("___", '<span class="gap-slot">•••</span>');

  let answerArea = "";
  if (inputQuestion) {
    const inputState = quiz.checked ? (quiz.correct ? "correct" : "wrong") : "";
    answerArea = '<div class="answer-entry ' + inputState + '"><label for="quizAnswer">Deine Antwort auf Französisch</label><div class="answer-input-wrap"><span>FR</span><input id="quizAnswer" data-quiz-input type="text" lang="fr" inputmode="text" enterkeyhint="done" autocomplete="off" autocapitalize="none" spellcheck="false" value="' + escapeHtml(quiz.typedAnswer || "") + '" placeholder="' + (question.type === "gap" ? "Fehlendes Wort …" : "Französischen Ausdruck tippen …") + '" ' + (quiz.checked ? "disabled" : "autofocus") + '></div>' +
      (quiz.checked && !quiz.correct ? '<small>Gesuchte Lösung: <b lang="fr">' + escapeHtml(question.answerText) + '</b></small>' : '') + '</div>';
  } else {
    answerArea = '<div class="option-list">' + question.options.map(function (option, index) {
      let klass = "";
      if (quiz.checked && index === question.answer) klass = "correct";
      else if (quiz.checked && index === quiz.selected && index !== question.answer) klass = "wrong";
      else if (!quiz.checked && index === quiz.selected) klass = "selected";
      return '<button class="option ' + klass + '" data-option="' + index + '" ' + (quiz.checked ? "disabled" : "") + '>' + escapeHtml(option) + '</button>';
    }).join("") + '</div>';
  }

  return '<div class="detail-head"><button class="back-btn" data-action="quit-quiz">×</button><div><span class="stage-pill">' + sprintLabel + '</span><h1>' + escapeHtml(title) + '</h1><p>Frage ' + (quiz.index + 1) + ' von ' + quiz.questions.length + '</p></div></div>' +
    '<div class="quiz-progress">' + quiz.questions.map(function (_, index) { return '<span class="' + (index < quiz.index ? "done" : index === quiz.index ? "current" : "") + '"></span>'; }).join("") + '</div>' +
    '<span class="quiz-kicker">' + (inputQuestion ? "✍️ SCHREIB-SPRINT" : "⚡ AUSWAHL-SPRINT") + ' · +10 XP</span><h2 class="quiz-title">' + questionTitle + '</h2><p class="quiz-hint">' + escapeHtml(question.hint || "Wähle die richtige Antwort.") + '</p>' +
    answerArea +
    (quiz.checked ? '<div class="feedback ' + (quiz.correct ? "good" : "bad") + '"><strong>' + (quiz.correct ? '<span class="feedback-coin">★</span> Richtig! +10 XP' : quiz.kind === "practice" ? "Noch nicht – die Lösung wird dir gezeigt." : "Fast! Ein Herz verloren.") + '</strong><br>' + escapeHtml(question.explain) + '</div>' : '') +
    '<div class="lesson-footer"><button class="btn ' + (quiz.checked ? "btn-primary" : "btn-secondary") + ' btn-block" data-action="' + (quiz.checked ? "next-question" : "check-answer") + '" ' + (!quiz.checked && !canCheckQuiz() ? "disabled" : "") + '>' + (quiz.checked ? (quiz.index === quiz.questions.length - 1 ? finishLabel : state.hearts === 0 && quiz.kind !== "practice" ? "Herzen auffüllen & weiter" : "Weiter") : "Antwort prüfen") + '</button></div>';
}

function finishQuiz() {
  const max = quiz.questions.length;
  const bonus = 10;
  const earned = quiz.score * 10 + bonus;
  const perfect = quiz.score === max;
  const module = quiz.module;
  const kind = quiz.kind;
  if (kind === "travel" && !state.completed.includes(module.id)) state.completed.push(module.id);
  if (kind === "dialogue") {
    if (!Array.isArray(state.dialogueCompleted)) state.dialogueCompleted = [];
    if (!state.dialogueCompleted.includes(module.id)) state.dialogueCompleted.push(module.id);
  }
  if (kind === "grammar" && !state.grammarCompleted.includes(module.id)) state.grammarCompleted.push(module.id);
  state.lessonsDone += 1;
  recordStudy(earned);
  quiz = { complete: true, kind: kind, module: module, score: quiz.score, max: max, earned: earned, perfect: perfect };
  render();
  setTimeout(function () { launchCelebration(48, true); }, 80);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderComplete() {
  const isParis = quiz.kind === "travel" && quiz.module.id === "paris";
  const isDialogue = quiz.kind === "dialogue";
  const isPractice = quiz.kind === "practice";
  const heading = isParis ? "Paris erreicht!" : isDialogue ? "Dialogue geschafft!" : isPractice ? "Training geschafft!" : quiz.perfect ? "Fantastique!" : "Etappe geschafft!";
  const description = isParis
    ? "Du hast deine Tour de France durch die Sprache vollendet. Jetzt heißt es: rausgehen und sprechen!"
    : isDialogue
      ? "Du hast eine Antwort erkannt, ergänzt und schließlich vollständig selbst formuliert. Der finale Etappen-Sprint ist jetzt frei."
      : isPractice
        ? "Diese Extrarunde verändert deine Etappe nicht. Du kannst sie jederzeit wiederholen oder ein anderes Thema wählen."
        : "Du hast neue Wörter und Strukturen für echte Gespräche verankert.";
  const buttonAction = isDialogue ? "complete-dialogue" : isPractice ? "complete-practice" : "complete-home";
  const buttonLabel = isDialogue ? "Zum finalen Etappen-Sprint" : isPractice ? "Weiter frei üben" : isParis ? "Meine Reise ansehen" : "Weiter auf der Route";
  const completeIcon = isParis ? "tower" : isDialogue ? "chat" : isPractice ? "target" : quiz.perfect ? "trophy" : "bike";
  return '<section class="complete-card"><div class="complete-badge">' + uiIcon(completeIcon, "complete-icon") + '</div><span class="stage-pill">' + escapeHtml(quiz.module.city || "Grammatik") + ' geschafft</span><h1>' + heading + '</h1><p>' + description + '</p>' +
    '<div class="reward-row"><div class="reward"><strong>+' + quiz.earned + '</strong><small>XP</small></div><div class="reward"><strong>' + quiz.score + '/' + quiz.max + '</strong><small>Richtig</small></div><div class="reward"><strong>' + state.streak + ' ' + uiIcon("flame", "micro-icon") + '</strong><small>Serie</small></div></div>' +
    '<button class="btn btn-primary btn-block" data-action="' + buttonAction + '">' + buttonLabel + '</button></section>';
}

function renderActiveLesson() {
  if (quiz && quiz.complete) return renderComplete();
  if (quiz) return renderQuiz();
  return activeLesson.type === "travel" ? renderTravelLesson(activeLesson.module) : renderGrammarLesson(activeLesson.module);
}

function render() {
  const app = document.getElementById("app");
  applyStageTheme();
  if (activeLesson) app.innerHTML = renderActiveLesson();
  else if (currentView === "home") app.innerHTML = renderHome();
  else if (currentView === "learn") app.innerHTML = renderLearn();
  else if (currentView === "practice") app.innerHTML = renderPractice();
  else if (currentView === "grammar") app.innerHTML = renderGrammar();
  else app.innerHTML = renderProfile();
  updateStats();
}

document.addEventListener("click", function (event) {
  const viewButton = event.target.closest("[data-view]");
  if (viewButton) {
    setView(viewButton.dataset.view);
    return;
  }
  const moduleButton = event.target.closest("[data-module]");
  if (moduleButton) {
    openTravelModule(moduleButton.dataset.module);
    return;
  }
  const grammarButton = event.target.closest("[data-grammar]");
  if (grammarButton) {
    openGrammar(grammarButton.dataset.grammar);
    return;
  }
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) {
    learnFilter = filterButton.dataset.filter;
    render();
    return;
  }
  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) {
    lessonTab = tabButton.dataset.tab;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const practiceButton = event.target.closest("[data-practice-mode]");
  if (practiceButton) {
    quiz = buildPracticeQuiz(practiceButton.dataset.practiceMode);
    activeLesson = { type: "practice", module: quiz.module };
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const optionButton = event.target.closest("[data-option]");
  if (optionButton && quiz && !quiz.checked) {
    quiz.selected = Number(optionButton.dataset.option);
    render();
    return;
  }
  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) return;
  const action = actionButton.dataset.action;
  if (action === "back" || action === "quit-quiz") {
    activeLesson = null;
    quiz = null;
    render();
    return;
  }
  if (action === "show-vocab-b") {
    lessonTab = "vocab-b";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "show-scaffolds") {
    lessonTab = "scaffolds";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "start-travel-quiz") {
    quiz = buildTravelQuiz(activeLesson.module);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "start-dialogue") {
    quiz = buildDialogueQuiz(activeLesson.module);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "start-grammar-quiz") {
    quiz = buildGrammarQuiz(activeLesson.module);
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "check-answer" && canCheckQuiz()) {
    const question = quiz.questions[quiz.index];
    const isCorrect = isInputQuestion(question)
      ? isTypedAnswerCorrect(question, quiz.typedAnswer)
      : quiz.selected === question.answer;
    quiz.checked = true;
    quiz.correct = isCorrect;
    if (isCorrect) quiz.score += 1;
    else if (quiz.kind !== "practice") {
      state.hearts = Math.max(0, state.hearts - 1);
      saveState();
    }
    render();
    if (isCorrect) celebrateCorrect();
    return;
  }
  if (action === "next-question") {
    if (state.hearts === 0 && quiz.kind !== "practice") {
      state.hearts = 5;
      saveState();
      showToast("Fünf neue Herzen – weiter geht’s!");
    }
    if (quiz.index >= quiz.questions.length - 1) finishQuiz();
    else {
      quiz.index += 1;
      quiz.selected = null;
      quiz.typedAnswer = "";
      quiz.correct = null;
      quiz.checked = false;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }
  if (action === "complete-home") {
    activeLesson = null;
    quiz = null;
    setView("home");
    return;
  }
  if (action === "complete-dialogue") {
    quiz = null;
    lessonTab = "scaffolds";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "complete-practice") {
    activeLesson = null;
    quiz = null;
    currentView = "practice";
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (action === "refill") {
    state.hearts = 5;
    saveState();
    showToast("Deine Herzen sind wieder voll.");
    render();
    return;
  }
  if (action === "reset") {
    if (window.confirm("Möchtest du wirklich deinen gesamten Lernfortschritt löschen?")) {
      state = Object.assign({}, defaultState);
      saveState();
      render();
      showToast("Deine Tour wurde neu gestartet.");
    }
    return;
  }
  if (action === "install" && deferredInstall) {
    deferredInstall.prompt();
    deferredInstall.userChoice.then(function () {
      deferredInstall = null;
      render();
    });
  }
});

document.addEventListener("change", function (event) {
  if (!event.target.matches("[data-practice-select]")) return;
  practiceModuleId = event.target.value;
  render();
});

document.addEventListener("input", function (event) {
  if (!event.target.matches("[data-quiz-input]") || !quiz || quiz.checked) return;
  quiz.typedAnswer = event.target.value;
  const checkButton = document.querySelector('[data-action="check-answer"]');
  if (checkButton) checkButton.disabled = !canCheckQuiz();
});

document.addEventListener("keydown", function (event) {
  if (event.key !== "Enter" || !event.target.matches("[data-quiz-input]")) return;
  const checkButton = document.querySelector('[data-action="check-answer"]');
  if (checkButton && !checkButton.disabled) {
    event.preventDefault();
    checkButton.click();
  }
});

window.addEventListener("beforeinstallprompt", function (event) {
  event.preventDefault();
  deferredInstall = event;
  if (currentView === "profile") render();
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./sw.js").catch(function () {});
  });
}

updateStats();
render();
