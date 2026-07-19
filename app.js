function V(fr, de, ex) { return { fr: fr, de: de, ex: ex }; }
function S(fr, de) { return { fr: fr, de: de }; }

const travelModules = [
  {
    id: "barcelona", city: "Barcelona", icon: "hello", km: 0, category: "alltag",
    title: "Begrüßen & erster Small Talk", summary: "Ankommen, sich vorstellen und entspannt ins Gespräch kommen.",
    tip: "In Spanien eröffnet ein freundliches « Hola, buenos días » fast jede Begegnung. Mit usted bleibst du höflich.",
    vocab: [
      V("¡Hola!", "Hallo!", "¡Hola! ¿Qué tal?"), V("Buenos días", "Guten Morgen / Tag", "Buenos días, señora."),
      V("Encantado / Encantada", "Freut mich", "Me llamo Lena. Encantada."), V("me llamo", "ich heiße", "Me llamo David."),
      V("venir de", "aus … kommen", "Vengo de Alemania."), V("el viaje", "die Reise", "El viaje ha sido largo."),
      V("por primera vez", "zum ersten Mal", "Estamos aquí por primera vez."), V("quedarse", "bleiben / übernachten", "Nos quedamos cinco días."),
      V("recomendar", "empfehlen", "¿Puede recomendar un café?"), V("el barrio", "das Stadtviertel", "Este barrio es muy animado."),
      V("¿Qué tal el viaje?", "Wie war die Reise?", "Hola, ¿qué tal el viaje?"), V("desde", "seit / von … aus", "Estamos aquí desde ayer."),
      V("por supuesto", "natürlich", "Por supuesto, con mucho gusto."), V("hasta luego", "bis später", "Gracias, hasta luego.")
    ],
    scaffolds: [
      S("Me llamo … y vengo de …", "Ich heiße … und komme aus …"), S("Estamos en España durante … días.", "Wir sind für … Tage in Spanien."),
      S("Es nuestra primera vez en …", "Wir sind zum ersten Mal in …"), S("¿Y usted, vive aquí?", "Und Sie, wohnen Sie hier?"),
      S("¿Qué nos recomienda visitar?", "Was empfehlen Sie uns zu besichtigen?"), S("Nos quedamos aquí hasta …", "Wir bleiben hier bis …"),
      S("Si tiene una recomendación, me encantaría escucharla.", "Wenn Sie eine Empfehlung haben, höre ich sie gern.")
    ],
    challenge: { prompt: "« ¿Cuánto tiempo os quedáis? »", options: ["Nos quedamos cinco días.", "La cuenta, por favor.", "Me duele la cabeza.", "Gire a la izquierda."], answer: 0 },
    cloze: [
      { prompt: "Me ___ Clara y vengo de Berlín.", answers: ["llamo"], explain: "me llamo = ich heiße" },
      { prompt: "Estamos aquí ___ primera vez.", answers: ["por"], explain: "por primera vez = zum ersten Mal" }
    ]
  },
  {
    id: "valencia", city: "Valencia", icon: "hotel", km: 350, category: "service",
    title: "Anreise & Unterkunft", summary: "Von der Fahrt erzählen, reservieren und entspannt einchecken.",
    tip: "Für eine höfliche Bitte ist « Quisiera … » ein zuverlässiger Einstieg. In Spanien hört man auch oft « Me gustaría … ».",
    vocab: [
      V("el trayecto", "die Fahrt / Strecke", "El trayecto duró cuatro horas."), V("llegar", "ankommen", "Llegamos esta mañana."),
      V("salir", "abfahren / losfahren", "Salimos muy temprano."), V("el equipaje", "das Gepäck", "Nuestro equipaje está en el autobús."),
      V("el retraso", "die Verspätung", "El tren tuvo retraso."), V("la reserva", "die Reservierung", "La reserva está a nombre de Weber."),
      V("una habitación doble", "ein Doppelzimmer", "Hemos reservado una habitación doble."), V("disponible", "verfügbar", "¿Tiene una habitación disponible?"),
      V("incluido", "inbegriffen", "¿Está incluido el desayuno?"), V("la tarjeta de la habitación", "die Zimmerkarte", "Aquí tiene la tarjeta de la habitación."),
      V("el aire acondicionado", "die Klimaanlage", "El aire acondicionado no funciona."), V("ruidoso", "laut", "La habitación es un poco ruidosa."),
      V("registrarse", "einchecken", "Queremos registrarnos."), V("dejar la habitación", "das Zimmer verlassen", "Hay que dejar la habitación antes de las once.")
    ],
    scaffolds: [
      S("Hemos venido en coche / tren / autobús.", "Wir sind mit dem Auto / Zug / Bus gekommen."), S("El trayecto duró unas … horas.", "Die Fahrt dauerte ungefähr … Stunden."),
      S("Tengo una reserva a nombre de …", "Ich habe eine Reservierung auf den Namen …"), S("Quisiera una habitación para … noches.", "Ich hätte gern ein Zimmer für … Nächte."),
      S("¿Está incluido el desayuno?", "Ist das Frühstück inbegriffen?"), S("Hay un problema con …", "Es gibt ein Problem mit …"),
      S("¿A qué hora hay que dejar la habitación?", "Um wie viel Uhr muss man das Zimmer verlassen?")
    ],
    challenge: { prompt: "An der Rezeption fragt man nach deinem Namen.", options: ["La reserva está a nombre de Klein.", "Quiero el menú del día.", "Va a llover.", "Busco una farmacia."], answer: 0 },
    cloze: [
      { prompt: "Tengo una reserva ___ nombre de Ruiz.", answers: ["a"], explain: "a nombre de = auf den Namen" },
      { prompt: "¿Está ___ el desayuno?", answers: ["incluido", "incluida"], explain: "estar incluido = inbegriffen sein" }
    ]
  },
  {
    id: "alicante", city: "Alicante", icon: "sun", km: 520, category: "freizeit",
    title: "Wetter, Strand & Pläne", summary: "Über das Wetter plaudern und einen Tag am Meer planen.",
    tip: "Wetter wird oft unpersönlich beschrieben: hace sol, hace calor, hay viento oder está nublado.",
    vocab: [
      V("hace sol", "es ist sonnig", "Hoy hace mucho sol."), V("hace calor", "es ist heiß", "En agosto hace calor."),
      V("está nublado", "es ist bewölkt", "Esta mañana está nublado."), V("llover", "regnen", "Parece que va a llover."),
      V("hay viento", "es ist windig", "Hoy hay bastante viento."), V("la playa", "der Strand", "La playa está cerca."),
      V("el protector solar", "die Sonnencreme", "Necesito protector solar."), V("bañarse", "baden gehen", "Vamos a bañarnos."),
      V("la ola", "die Welle", "Las olas son muy grandes."), V("la sombra", "der Schatten", "Buscamos un sitio a la sombra."),
      V("el pronóstico", "die Wettervorhersage", "El pronóstico anuncia sol."), V("la temperatura", "die Temperatur", "La temperatura va a subir."),
      V("pasear", "spazieren", "Podemos pasear por el puerto."), V("alquilar", "mieten", "Queremos alquilar dos tumbonas.")
    ],
    scaffolds: [
      S("¿Qué tiempo va a hacer mañana?", "Wie wird das Wetter morgen?"), S("Si hace buen tiempo, vamos a …", "Wenn das Wetter gut ist, werden wir …"),
      S("Parece que va a llover por la tarde.", "Es sieht aus, als würde es nachmittags regnen."), S("¿Dónde podemos alquilar …?", "Wo können wir … mieten?"),
      S("¿Hay una playa tranquila cerca de aquí?", "Gibt es hier in der Nähe einen ruhigen Strand?"), S("Prefiero quedarme a la sombra porque …", "Ich bleibe lieber im Schatten, weil …"),
      S("Hace demasiado calor para …", "Es ist zu heiß, um …")
    ],
    challenge: { prompt: "« ¿Qué vais a hacer si hace sol? »", options: ["Vamos a ir a la playa.", "La reserva está a mi nombre.", "Necesito una receta.", "Hemos perdido el tren."], answer: 0 },
    cloze: [
      { prompt: "Hoy ___ mucho sol.", answers: ["hace"], explain: "hace sol = es ist sonnig" },
      { prompt: "Vamos a ___ en el mar.", answers: ["bañarnos", "banarnos"], explain: "vamos a bañarnos = wir gehen baden" }
    ]
  },
  {
    id: "granada", city: "Granada", icon: "compass", km: 860, category: "alltag",
    title: "Orientierung & Besichtigungen", summary: "Nach dem Weg fragen, Tickets kaufen und Sehenswürdigkeiten finden.",
    tip: "Mit « Perdone » oder « Disculpe » vor einer Frage klingst du sofort höflicher.",
    vocab: [
      V("todo recto", "geradeaus", "Siga todo recto."), V("girar", "abbiegen", "Gire a la derecha."),
      V("a la izquierda / derecha", "links / rechts", "Está a la izquierda."), V("el cruce", "die Kreuzung", "El cruce está junto al semáforo."),
      V("la parada", "die Haltestelle", "¿Dónde está la parada?"), V("un billete de ida y vuelta", "eine Hin- und Rückfahrkarte", "Un billete de ida y vuelta, por favor."),
      V("bajarse", "aussteigen", "Bájese en la tercera parada."), V("a pie", "zu Fuß", "Está a diez minutos a pie."),
      V("el mapa", "die Karte", "¿Tiene un mapa de la ciudad?"), V("lejos", "weit", "¿Está muy lejos?"),
      V("cerca", "in der Nähe", "La catedral está cerca."), V("perderse", "sich verirren", "Nos hemos perdido."),
      V("el horario", "die Öffnungszeit / der Fahrplan", "¿Cuál es el horario?"), V("la entrada", "die Eintrittskarte", "Tenemos entradas para las cuatro.")
    ],
    scaffolds: [
      S("Perdone, ¿cómo se va a …?", "Entschuldigung, wie kommt man zu …?"), S("¿Está lejos de aquí a pie?", "Ist es von hier zu Fuß weit?"),
      S("Quisiera dos entradas para …", "Ich hätte gern zwei Eintrittskarten für …"), S("¿En qué parada tenemos que bajarnos?", "An welcher Haltestelle müssen wir aussteigen?"),
      S("¿Puede indicármelo en el mapa?", "Können Sie es mir auf der Karte zeigen?"), S("¿A qué hora abre / cierra?", "Um wie viel Uhr öffnet / schließt es?"),
      S("Si le he entendido bien, seguimos todo recto.", "Wenn ich Sie richtig verstanden habe, gehen wir geradeaus weiter.")
    ],
    challenge: { prompt: "Du hast die Wegbeschreibung nicht verstanden.", options: ["¿Puede repetirlo más despacio?", "La cuenta, por favor.", "Tengo fiebre.", "¡Qué buen partido!"], answer: 0 },
    cloze: [
      { prompt: "Siga todo ___ y gire a la derecha.", answers: ["recto"], explain: "todo recto = geradeaus" },
      { prompt: "¿En qué parada tenemos que ___?", answers: ["bajarnos"], explain: "bajarse = aussteigen" }
    ]
  },
  {
    id: "malaga", city: "Málaga", icon: "food", km: 990, category: "service",
    title: "Restaurant & Café", summary: "Einen Tisch bekommen, bestellen, nachfragen und bezahlen.",
    tip: "Zum Bestellen passen « Quisiera … », « Para mí … » oder im Alltag auch « Voy a tomar … ».",
    vocab: [
      V("una mesa", "ein Tisch", "Una mesa para dos, por favor."), V("la carta", "die Speisekarte", "¿Nos trae la carta?"),
      V("el menú del día", "das Tagesmenü", "¿Qué incluye el menú del día?"), V("pedir", "bestellen", "¿Ya podemos pedir?"),
      V("el camarero / la camarera", "der Kellner / die Kellnerin", "El camarero viene enseguida."), V("beber", "trinken", "¿Qué quiere beber?"),
      V("el plato", "das Gericht", "Este plato lleva marisco."), V("el postre", "der Nachtisch", "De postre, una crema catalana."),
      V("sin gluten", "glutenfrei", "¿Tiene algo sin gluten?"), V("la cuenta", "die Rechnung", "La cuenta, por favor."),
      V("la propina", "das Trinkgeld", "¿Está incluida la propina?"), V("la terraza", "die Terrasse", "Preferimos sentarnos en la terraza."),
      V("reservar", "reservieren", "Quiero reservar una mesa."), V("riquísimo", "sehr lecker", "¡Está riquísimo!")
    ],
    scaffolds: [
      S("¿Tiene una mesa para … personas?", "Haben Sie einen Tisch für … Personen?"), S("Para mí, … y para beber …", "Für mich … und zum Trinken …"),
      S("¿Qué lleva este plato?", "Was ist in diesem Gericht enthalten?"), S("Soy alérgico / alérgica a …", "Ich bin allergisch gegen …"),
      S("¿Podría traerme …, por favor?", "Könnten Sie mir bitte … bringen?"), S("Todo estaba muy rico, gracias.", "Alles war sehr lecker, danke."),
      S("¿Podemos pagar por separado?", "Können wir getrennt bezahlen?")
    ],
    challenge: { prompt: "« ¿Ya han elegido? »", options: ["Sí, voy a tomar el menú del día.", "Sí, bajamos en la próxima parada.", "Sí, desde ayer.", "Sí, hace viento."], answer: 0 },
    cloze: [
      { prompt: "Para mí, ___ menú del día.", answers: ["el"], explain: "el menú del día = das Tagesmenü" },
      { prompt: "¿Nos trae la ___, por favor?", answers: ["cuenta"], explain: "la cuenta = die Rechnung" }
    ]
  },
  {
    id: "sevilla", city: "Sevilla", icon: "cheers", km: 1200, category: "freizeit",
    title: "Freizeit, Einladungen & Tapas", summary: "Pläne machen, Einladungen beantworten und gemeinsam ausgehen.",
    tip: "« ¿Te apetece …? » ist in Spanien eine sehr natürliche Einladung: Hast du Lust …?",
    vocab: [
      V("el tiempo libre", "die Freizeit", "¿Qué haces en tu tiempo libre?"), V("quedar", "sich verabreden", "¿Quedamos esta tarde?"),
      V("la invitación", "die Einladung", "Gracias por la invitación."), V("aceptar", "annehmen", "Acepto encantado."),
      V("rechazar", "ablehnen", "Lo siento, hoy no puedo."), V("el concierto", "das Konzert", "Hay un concierto en la plaza."),
      V("bailar", "tanzen", "¿Sabes bailar?"), V("ir de tapas", "Tapas essen gehen", "Queremos ir de tapas esta noche."),
      V("la entrada", "die Eintrittskarte", "Las entradas están agotadas."), V("empezar", "beginnen", "El espectáculo empieza a las nueve."),
      V("venir conmigo", "mit mir kommen", "¿Quieres venir conmigo?"), V("apetecer", "Lust haben", "¿Te apetece tomar algo?"),
      V("pasarlo bien", "Spaß haben", "Lo pasamos muy bien."), V("mañana por la noche", "morgen Abend", "Nos vemos mañana por la noche.")
    ],
    scaffolds: [
      S("¿Te apetece … esta noche?", "Hast du heute Abend Lust auf …?"), S("Sí, me encantaría. ¿A qué hora?", "Ja, sehr gern. Um wie viel Uhr?"),
      S("Lo siento, hoy no puedo porque …", "Tut mir leid, heute kann ich nicht, weil …"), S("¿Dónde quedamos?", "Wo treffen wir uns?"),
      S("¿Quieres venir con nosotros / nosotras?", "Möchtest du mit uns kommen?"), S("Gracias por la invitación, lo hemos pasado genial.", "Danke für die Einladung, wir hatten viel Spaß."),
      S("Podemos ver un espectáculo y después …", "Wir können eine Vorstellung ansehen und danach …")
    ],
    challenge: { prompt: "« ¿Te apetece ir a un concierto? »", options: ["Sí, me encantaría.", "Siga todo recto.", "Necesito una pomada.", "Medio kilo, por favor."], answer: 0 },
    cloze: [
      { prompt: "¿Te ___ tomar algo?", answers: ["apetece"], explain: "¿Te apetece …? = Hast du Lust …?" },
      { prompt: "¿Dónde ___ esta noche?", answers: ["quedamos"], explain: "quedar = sich verabreden" }
    ]
  },
  {
    id: "cordoba", city: "Córdoba", icon: "bag", km: 1340, category: "service",
    title: "Markt & Einkaufen", summary: "Mengen, Preise und Größen erfragen und regionale Produkte kaufen.",
    tip: "Nach Mengen folgt meist de: medio kilo de tomates, una botella de agua.",
    vocab: [
      V("el mercado", "der Markt", "El mercado abre a las ocho."), V("¿Cuánto cuesta?", "Wie viel kostet das?", "¿Cuánto cuesta este queso?"),
      V("la talla", "die Größe", "¿Lo tiene en la talla M?"), V("probarse", "anprobieren", "¿Puedo probarme esta camisa?"),
      V("barato", "günstig", "Es bonito y barato."), V("caro", "teuer", "Me parece demasiado caro."),
      V("un kilo", "ein Kilogramm", "Quiero un kilo de naranjas."), V("medio kilo", "ein halbes Kilogramm", "Medio kilo de tomates."),
      V("en efectivo", "bar", "Voy a pagar en efectivo."), V("con tarjeta", "mit Karte", "¿Puedo pagar con tarjeta?"),
      V("el recuerdo", "das Souvenir", "Busco un recuerdo pequeño."), V("las rebajas", "der Ausverkauf", "Ahora están de rebajas."),
      V("abierto", "geöffnet", "¿Está abierto por la tarde?"), V("el recibo", "der Kassenbon", "¿Me da el recibo?")
    ],
    scaffolds: [
      S("Quisiera … gramos de …", "Ich hätte gern … Gramm …"), S("¿Cuánto cuesta por kilo?", "Wie viel kostet es pro Kilo?"),
      S("¿Lo tiene en otro color / otra talla?", "Haben Sie es in einer anderen Farbe / Größe?"), S("¿Puedo probármelo?", "Kann ich es anprobieren?"),
      S("Me lo llevo.", "Ich nehme es."), S("Solo estoy mirando, gracias.", "Ich schaue mich nur um, danke."),
      S("¿Se puede pagar con tarjeta?", "Kann man mit Karte bezahlen?")
    ],
    challenge: { prompt: "Die Verkäuferin fragt nach der gewünschten Menge.", options: ["Medio kilo, por favor.", "En la próxima parada.", "Desde hace dos días.", "Ganaron dos a uno."], answer: 0 },
    cloze: [
      { prompt: "Quisiera medio kilo ___ tomates.", answers: ["de"], explain: "Nach Mengen steht de." },
      { prompt: "¿Puedo pagar ___ tarjeta?", answers: ["con"], explain: "pagar con tarjeta = mit Karte bezahlen" }
    ]
  },
  {
    id: "toledo", city: "Toledo", icon: "tower", km: 1690, category: "freizeit",
    title: "Kultur & Reiseerlebnisse", summary: "Sehenswürdigkeiten beschreiben und von Erlebnissen erzählen.",
    tip: "Für abgeschlossene Erlebnisse hörst du in Spanien häufig das pretérito indefinido: visitamos, vimos, nos gustó.",
    vocab: [
      V("el casco antiguo", "die Altstadt", "Paseamos por el casco antiguo."), V("el museo", "das Museum", "El museo cerró a las seis."),
      V("la visita guiada", "die Führung", "Hicimos una visita guiada."), V("la catedral", "die Kathedrale", "La catedral nos impresionó."),
      V("la historia", "die Geschichte", "La ciudad tiene mucha historia."), V("impresionante", "beeindruckend", "La vista fue impresionante."),
      V("descubrir", "entdecken", "Descubrimos un patio precioso."), V("hacer fotos", "Fotos machen", "Hicimos muchas fotos."),
      V("ya", "schon", "Ya hemos visto la plaza."), V("todavía no", "noch nicht", "Todavía no hemos visitado el museo."),
      V("ayer", "gestern", "Ayer fuimos a Toledo."), V("hemos visto", "wir haben gesehen", "Hemos visto una exposición."),
      V("me gustó", "es gefiel mir", "Me gustó mucho la visita."), V("merecer la pena", "sich lohnen", "La excursión merece la pena.")
    ],
    scaffolds: [
      S("Ayer visitamos … y después …", "Gestern besuchten wir … und danach …"), S("Lo que más me gustó fue …", "Am besten gefiel mir …"),
      S("Todavía no hemos visto …", "Wir haben … noch nicht gesehen."), S("Me pareció muy interesante porque …", "Ich fand es sehr interessant, weil …"),
      S("¿Merece la pena hacer la visita guiada?", "Lohnt sich die Führung?"), S("Nunca había visto algo así.", "So etwas hatte ich noch nie gesehen."),
      S("Recomendaría este lugar a …", "Ich würde diesen Ort … empfehlen.")
    ],
    challenge: { prompt: "« ¿Qué fue lo que más te gustó? »", options: ["Me gustó mucho la catedral.", "Quiero pagar con tarjeta.", "Tengo tos desde ayer.", "Gire en el cruce."], answer: 0 },
    cloze: [
      { prompt: "Ayer ___ una visita guiada.", answers: ["hicimos"], explain: "hacer → hicimos im pretérito indefinido" },
      { prompt: "Todavía no ___ visitado el museo.", answers: ["hemos"], explain: "hemos visitado = wir haben besucht" }
    ]
  },
  {
    id: "salamanca", city: "Salamanca", icon: "football", km: 1870, category: "freizeit",
    title: "Fußball & Café-Small-Talk", summary: "Über Teams, Spiele und Sportbegeisterung plaudern.",
    tip: "« ¿De qué equipo eres? » bedeutet wörtlich: Von welchem Team bist du? – eine sehr typische Fußballfrage.",
    vocab: [
      V("el partido", "das Spiel", "¿Viste el partido ayer?"), V("el equipo", "die Mannschaft", "Mi equipo juega hoy."),
      V("el aficionado / la aficionada", "der Fan", "Los aficionados cantan."), V("ganar", "gewinnen", "Ganaron tres a cero."),
      V("perder", "verlieren", "No merecían perder."), V("el empate", "das Unentschieden", "El partido terminó en empate."),
      V("el gol", "das Tor", "¡Qué gol tan bonito!"), V("el jugador / la jugadora", "der Spieler / die Spielerin", "Es una gran jugadora."),
      V("la liga", "die Liga", "La liga está muy igualada."), V("el estadio", "das Stadion", "El estadio estaba lleno."),
      V("jugar", "spielen", "Juegan muy bien juntos."), V("el resultado", "das Ergebnis", "¿Cuál fue el resultado?"),
      V("animar", "anfeuern", "Vamos a animar al equipo."), V("emocionante", "spannend", "Fue un partido emocionante.")
    ],
    scaffolds: [
      S("¿De qué equipo eres?", "Für welche Mannschaft bist du?"), S("¿Viste el partido de ayer?", "Hast du das gestrige Spiel gesehen?"),
      S("En mi opinión, … jugó mejor.", "Meiner Meinung nach spielte … besser."), S("El partido terminó … a …", "Das Spiel endete … zu …"),
      S("No sigo mucho el fútbol, pero …", "Ich verfolge Fußball nicht sehr, aber …"), S("¿Quién crees que va a ganar?", "Wer wird deiner Meinung nach gewinnen?"),
      S("Lo mejor del partido fue …", "Das Beste am Spiel war …")
    ],
    challenge: { prompt: "« ¿De qué equipo eres? »", options: ["Soy del Athletic.", "Necesito jarabe.", "Un billete de ida.", "La talla M."], answer: 0 },
    cloze: [
      { prompt: "El partido terminó dos ___ dos.", answers: ["a"], explain: "dos a dos = zwei zu zwei" },
      { prompt: "¿Quién crees que va a ___?", answers: ["ganar"], explain: "ganar = gewinnen" }
    ]
  },
  {
    id: "bilbao", city: "Bilbao", icon: "pharmacy", km: 2260, category: "service",
    title: "Apotheke & Gesundheit", summary: "Beschwerden beschreiben und Medikamente richtig verstehen.",
    tip: "Beschwerden formulierst du häufig mit « Me duele … » oder « Tengo … desde hace … ».",
    vocab: [
      V("la farmacia", "die Apotheke", "¿Hay una farmacia de guardia?"), V("el dolor de cabeza", "die Kopfschmerzen", "Tengo dolor de cabeza."),
      V("la tos", "der Husten", "Tengo mucha tos."), V("la fiebre", "das Fieber", "Tengo un poco de fiebre."),
      V("mareado / mareada", "schwindelig", "Estoy mareada."), V("la alergia", "die Allergie", "Soy alérgico a la penicilina."),
      V("la receta", "das Rezept", "¿Necesito receta?"), V("las pastillas", "die Tabletten", "Tome dos pastillas al día."),
      V("el jarabe", "der Hustensaft", "Este jarabe es para la tos."), V("la crema", "die Creme", "Aplique la crema aquí."),
      V("tomar", "einnehmen", "¿Cómo debo tomarlo?"), V("mejorar", "besser werden", "Espero que mejore pronto."),
      V("urgencias", "die Notaufnahme", "Tiene que ir a urgencias."), V("el seguro", "die Versicherung", "Tengo seguro de viaje.")
    ],
    scaffolds: [
      S("Me duele … desde hace … días.", "… tut mir seit … Tagen weh."), S("Tengo tos / fiebre / dolor de …", "Ich habe Husten / Fieber / …schmerzen."),
      S("¿Tiene algo para …?", "Haben Sie etwas gegen …?"), S("¿Necesito receta?", "Brauche ich ein Rezept?"),
      S("¿Cuántas veces al día debo tomarlo?", "Wie oft am Tag soll ich es einnehmen?"), S("Soy alérgico / alérgica a …", "Ich bin allergisch gegen …"),
      S("¿Hay algún efecto secundario?", "Gibt es Nebenwirkungen?")
    ],
    challenge: { prompt: "« ¿Desde cuándo tiene tos? »", options: ["Desde hace tres días.", "Dos veces al día.", "Sin receta.", "A nombre de Ruiz."], answer: 0 },
    cloze: [
      { prompt: "Me ___ la cabeza desde ayer.", answers: ["duele"], explain: "me duele la cabeza = ich habe Kopfschmerzen" },
      { prompt: "¿Cuántas veces al día debo ___?", answers: ["tomarlo", "tomarla"], explain: "tomarlo / tomarla = es einnehmen" }
    ]
  },
  {
    id: "zaragoza", city: "Zaragoza", icon: "alert", km: 2580, category: "service",
    title: "Panne, Probleme & Notfälle", summary: "Mit dem Bus liegen bleiben, Verlust melden und schnell Hilfe holen.",
    tip: "Die europaweite Notrufnummer 112 gilt auch in Spanien. « Necesito ayuda » ist der wichtigste Sofortsatz.",
    vocab: [
      V("la avería", "die Panne", "Tenemos una avería."), V("el neumático", "der Reifen", "Tenemos un neumático pinchado."),
      V("la gasolina", "das Benzin", "Nos hemos quedado sin gasolina."), V("el taller", "die Werkstatt", "¿Dónde hay un taller?"),
      V("la grúa", "der Abschleppwagen", "Necesitamos una grúa."), V("perder", "verlieren", "He perdido la cartera."),
      V("el móvil", "das Handy", "No encuentro mi móvil."), V("la policía", "die Polizei", "Voy a llamar a la policía."),
      V("el documento", "das Dokument", "Me han robado los documentos."), V("la ayuda", "die Hilfe", "Necesitamos ayuda."),
      V("la emergencia", "der Notfall", "Es una emergencia."), V("robar", "stehlen", "Me han robado la mochila."),
      V("la dirección", "die Adresse", "¿Cuál es la dirección exacta?"), V("llamar", "anrufen", "¿Puede llamar al 112?")
    ],
    scaffolds: [
      S("Nuestro autobús tiene una avería.", "Unser Bus hat eine Panne."), S("Nos hemos quedado sin gasolina.", "Uns ist das Benzin ausgegangen."),
      S("¿Puede llamar a una grúa?", "Können Sie einen Abschleppwagen rufen?"), S("He perdido / Me han robado …", "Ich habe … verloren / Mir wurde … gestohlen."),
      S("¿Dónde está la comisaría más cercana?", "Wo ist die nächste Polizeiwache?"), S("Necesito ayuda, es una emergencia.", "Ich brauche Hilfe, es ist ein Notfall."),
      S("Estamos en …, cerca de …", "Wir sind in …, in der Nähe von …")
    ],
    challenge: { prompt: "Euer VW-Bus kann nicht mehr weiterfahren.", options: ["Tenemos una avería y necesitamos una grúa.", "Queremos una mesa en la terraza.", "Hace mucho sol.", "El partido terminó en empate."], answer: 0 },
    cloze: [
      { prompt: "Nos hemos quedado ___ gasolina.", answers: ["sin"], explain: "quedarse sin = ohne etwas dastehen" },
      { prompt: "¿Puede llamar a una ___?", answers: ["grúa", "grua"], explain: "la grúa = der Abschleppwagen" }
    ]
  },
  {
    id: "madrid", city: "Madrid", icon: "trophy", km: 2890, category: "finale",
    title: "La Gran Meta", summary: "Alle Reisesituationen in einer gemischten Madrid-Challenge meistern.",
    tip: "Im echten Gespräch zählt Verständlichkeit mehr als Perfektion. Umschreibe, frage nach und bleib im Gespräch.",
    vocab: [
      V("la capital", "die Hauptstadt", "Madrid es la capital de España."), V("el metro", "die U-Bahn", "Vamos en metro."),
      V("la plaza", "der Platz", "Nos vemos en la plaza."), V("la recomendación", "die Empfehlung", "Gracias por la recomendación."),
      V("el tráfico", "der Verkehr", "Hay mucho tráfico."), V("lleno", "voll", "El museo está lleno."),
      V("quedar", "sich treffen", "Quedamos a las ocho."), V("el recuerdo", "die Erinnerung / das Souvenir", "Me llevo un bonito recuerdo."),
      V("regresar", "zurückkehren", "Regresamos mañana."), V("la despedida", "der Abschied", "Fue una despedida emocionante."),
      V("explicarlo de otra manera", "es anders erklären", "Voy a explicarlo de otra manera."), V("más despacio", "langsamer", "¿Puede hablar más despacio?"),
      V("si he entendido bien", "wenn ich richtig verstanden habe", "Si he entendido bien, cambiamos de línea."), V("atreverse", "sich trauen", "Hay que atreverse a hablar.")
    ],
    scaffolds: [
      S("Perdone, no lo he entendido del todo.", "Entschuldigung, ich habe es nicht ganz verstanden."), S("¿Puede repetirlo más despacio?", "Können Sie es langsamer wiederholen?"),
      S("Si he entendido bien, tengo que …", "Wenn ich richtig verstanden habe, muss ich …"), S("¿Cómo se dice … en español?", "Wie sagt man … auf Spanisch?"),
      S("Voy a intentar explicarlo de otra manera.", "Ich versuche, es anders zu erklären."), S("Entiendo la idea general, pero no todos los detalles.", "Ich verstehe die Grundidee, aber nicht alle Einzelheiten."),
      S("Ha sido un viaje inolvidable por España.", "Es war eine unvergessliche Reise durch Spanien.")
    ],
    challenge: { prompt: "Du hast eine Erklärung nicht sicher verstanden.", options: ["Si he entendido bien, tengo que cambiar de línea, ¿no?", "¿La propina está incluida?", "Soy de este equipo.", "Necesito una receta."], answer: 0 },
    cloze: [
      { prompt: "¿Puede hablar más ___?", answers: ["despacio"], explain: "más despacio = langsamer" },
      { prompt: "¿Cómo se ___ eso en español?", answers: ["dice"], explain: "¿Cómo se dice …? = Wie sagt man …?" }
    ]
  }
];

/* Vollständige Satzübersetzungen: Jede Vokabelkarte ist ohne Vorwissen verständlich. */
const beginnerExampleTranslations = {
  barcelona: [
    "Hallo! Wie geht es?", "Guten Morgen, meine Dame.", "Ich heiße Lena. Freut mich.", "Ich heiße David.",
    "Ich komme aus Deutschland.", "Die Reise war lang.", "Wir sind zum ersten Mal hier.", "Wir bleiben fünf Tage.",
    "Können Sie ein Café empfehlen?", "Dieses Viertel ist sehr lebendig.", "Hallo, wie war die Reise?", "Wir sind seit gestern hier.",
    "Natürlich, sehr gern.", "Danke, bis später."
  ],
  valencia: [
    "Die Fahrt dauerte vier Stunden.", "Wir sind heute Morgen angekommen.", "Wir sind sehr früh losgefahren.", "Unser Gepäck ist im Bus.",
    "Der Zug hatte Verspätung.", "Die Reservierung läuft auf den Namen Weber.", "Wir haben ein Doppelzimmer reserviert.", "Haben Sie ein Zimmer frei?",
    "Ist das Frühstück inbegriffen?", "Hier ist Ihre Zimmerkarte.", "Die Klimaanlage funktioniert nicht.", "Das Zimmer ist ein wenig laut.",
    "Wir möchten einchecken.", "Man muss das Zimmer vor elf Uhr verlassen."
  ],
  alicante: [
    "Heute ist es sehr sonnig.", "Im August ist es heiß.", "Heute Morgen ist es bewölkt.", "Es sieht so aus, als würde es regnen.",
    "Heute ist es ziemlich windig.", "Der Strand ist in der Nähe.", "Ich brauche Sonnencreme.", "Wir gehen baden.",
    "Die Wellen sind sehr groß.", "Wir suchen einen Platz im Schatten.", "Die Wettervorhersage kündigt Sonne an.", "Die Temperatur wird steigen.",
    "Wir können am Hafen spazieren gehen.", "Wir möchten zwei Sonnenliegen mieten."
  ],
  granada: [
    "Gehen Sie immer geradeaus.", "Biegen Sie rechts ab.", "Es ist auf der linken Seite.", "Die Kreuzung ist neben der Ampel.",
    "Wo ist die Haltestelle?", "Eine Hin- und Rückfahrkarte, bitte.", "Steigen Sie an der dritten Haltestelle aus.", "Es ist zehn Minuten zu Fuß entfernt.",
    "Haben Sie einen Stadtplan?", "Ist es sehr weit?", "Die Kathedrale ist in der Nähe.", "Wir haben uns verirrt.",
    "Wie sind die Öffnungszeiten?", "Wir haben Eintrittskarten für vier Uhr."
  ],
  malaga: [
    "Einen Tisch für zwei, bitte.", "Bringen Sie uns die Speisekarte?", "Was ist im Tagesmenü enthalten?", "Können wir schon bestellen?",
    "Der Kellner kommt sofort.", "Was möchten Sie trinken?", "Dieses Gericht enthält Meeresfrüchte.", "Zum Nachtisch eine Crema Catalana.",
    "Haben Sie etwas Glutenfreies?", "Die Rechnung, bitte.", "Ist das Trinkgeld inbegriffen?", "Wir möchten lieber auf der Terrasse sitzen.",
    "Ich möchte einen Tisch reservieren.", "Es ist ausgesprochen lecker!"
  ],
  sevilla: [
    "Was machst du in deiner Freizeit?", "Treffen wir uns heute Nachmittag?", "Danke für die Einladung.", "Ich nehme sehr gern an.",
    "Tut mir leid, heute kann ich nicht.", "Auf dem Platz findet ein Konzert statt.", "Kannst du tanzen?", "Wir möchten heute Abend Tapas essen gehen.",
    "Die Eintrittskarten sind ausverkauft.", "Die Vorstellung beginnt um neun Uhr.", "Möchtest du mit mir kommen?", "Hast du Lust, etwas trinken zu gehen?",
    "Wir hatten sehr viel Spaß.", "Wir sehen uns morgen Abend."
  ],
  cordoba: [
    "Der Markt öffnet um acht Uhr.", "Wie viel kostet dieser Käse?", "Haben Sie es in Größe M?", "Kann ich dieses Hemd anprobieren?",
    "Es ist schön und günstig.", "Es erscheint mir zu teuer.", "Ich möchte ein Kilo Orangen.", "Ein halbes Kilo Tomaten.",
    "Ich werde bar bezahlen.", "Kann ich mit Karte bezahlen?", "Ich suche ein kleines Souvenir.", "Jetzt ist Schlussverkauf.",
    "Ist es nachmittags geöffnet?", "Geben Sie mir bitte den Kassenbon?"
  ],
  toledo: [
    "Wir spazierten durch die Altstadt.", "Das Museum schloss um sechs Uhr.", "Wir machten eine Führung.", "Die Kathedrale hat uns beeindruckt.",
    "Die Stadt hat viel Geschichte.", "Die Aussicht war beeindruckend.", "Wir entdeckten einen wunderschönen Innenhof.", "Wir machten viele Fotos.",
    "Wir haben den Platz schon gesehen.", "Wir haben das Museum noch nicht besucht.", "Gestern fuhren wir nach Toledo.", "Wir haben eine Ausstellung gesehen.",
    "Die Führung gefiel mir sehr.", "Der Ausflug lohnt sich."
  ],
  salamanca: [
    "Hast du gestern das Spiel gesehen?", "Meine Mannschaft spielt heute.", "Die Fans singen.", "Sie gewannen drei zu null.",
    "Sie hatten es nicht verdient zu verlieren.", "Das Spiel endete unentschieden.", "Was für ein schönes Tor!", "Sie ist eine großartige Spielerin.",
    "Die Liga ist sehr ausgeglichen.", "Das Stadion war voll.", "Sie spielen sehr gut zusammen.", "Wie war das Ergebnis?",
    "Wir werden die Mannschaft anfeuern.", "Es war ein spannendes Spiel."
  ],
  bilbao: [
    "Gibt es eine Apotheke mit Notdienst?", "Ich habe Kopfschmerzen.", "Ich habe starken Husten.", "Ich habe etwas Fieber.",
    "Mir ist schwindelig.", "Ich bin allergisch gegen Penicillin.", "Brauche ich ein Rezept?", "Nehmen Sie zwei Tabletten am Tag.",
    "Dieser Hustensaft ist gegen Husten.", "Tragen Sie die Creme hier auf.", "Wie soll ich es einnehmen?", "Ich hoffe, dass es bald besser wird.",
    "Sie müssen in die Notaufnahme gehen.", "Ich habe eine Reiseversicherung."
  ],
  zaragoza: [
    "Wir haben eine Panne.", "Wir haben einen platten Reifen.", "Uns ist das Benzin ausgegangen.", "Wo gibt es eine Werkstatt?",
    "Wir brauchen einen Abschleppwagen.", "Ich habe meine Geldbörse verloren.", "Ich finde mein Handy nicht.", "Ich werde die Polizei anrufen.",
    "Meine Dokumente wurden gestohlen.", "Wir brauchen Hilfe.", "Es ist ein Notfall.", "Mein Rucksack wurde gestohlen.",
    "Wie lautet die genaue Adresse?", "Können Sie die 112 anrufen?"
  ],
  madrid: [
    "Madrid ist die Hauptstadt Spaniens.", "Wir fahren mit der U-Bahn.", "Wir sehen uns auf dem Platz.", "Danke für die Empfehlung.",
    "Es gibt viel Verkehr.", "Das Museum ist voll.", "Wir treffen uns um acht Uhr.", "Ich nehme eine schöne Erinnerung mit.",
    "Wir kehren morgen zurück.", "Es war ein bewegender Abschied.", "Ich werde es auf eine andere Art erklären.", "Können Sie langsamer sprechen?",
    "Wenn ich richtig verstanden habe, steigen wir in eine andere Linie um.", "Man muss sich trauen zu sprechen."
  ]
};

travelModules.forEach(function (module) {
  const translations = beginnerExampleTranslations[module.id] || [];
  module.vocab.forEach(function (item, index) {
    item.exDe = translations[index] || item.de;
  });
});

/* Vier zusätzliche Lückensätze je Stadt: zusammen 72 statt bisher 24. */
const clozeExpansion = {
  barcelona: [
    { prompt: "Buenos ___, señora.", answers: ["días", "dias"], explain: "buenos días = guten Morgen / guten Tag" },
    { prompt: "Vengo ___ Alemania.", answers: ["de"], explain: "venir de = aus einem Ort kommen" },
    { prompt: "Nos quedamos cinco ___.", answers: ["días", "dias"], explain: "cinco días = fünf Tage" },
    { prompt: "Gracias, hasta ___.", answers: ["luego"], explain: "hasta luego = bis später" }
  ],
  valencia: [
    { prompt: "Nuestro ___ está en el autobús.", answers: ["equipaje"], explain: "el equipaje = das Gepäck" },
    { prompt: "¿Tiene una habitación ___?", answers: ["disponible"], explain: "disponible = verfügbar / frei" },
    { prompt: "El aire acondicionado no ___.", answers: ["funciona"], explain: "no funciona = funktioniert nicht" },
    { prompt: "Queremos ___.", answers: ["registrarnos"], explain: "registrarse = einchecken" }
  ],
  alicante: [
    { prompt: "Hoy hace mucho ___.", answers: ["sol"], explain: "hace sol = es ist sonnig" },
    { prompt: "Parece que va a ___.", answers: ["llover"], explain: "va a llover = es wird regnen" },
    { prompt: "Buscamos un sitio a la ___.", answers: ["sombra"], explain: "a la sombra = im Schatten" },
    { prompt: "Queremos ___ dos tumbonas.", answers: ["alquilar"], explain: "alquilar = mieten" }
  ],
  granada: [
    { prompt: "Gire a la ___.", answers: ["derecha"], explain: "a la derecha = rechts" },
    { prompt: "Un billete de ida y ___.", answers: ["vuelta"], explain: "ida y vuelta = Hin- und Rückfahrt" },
    { prompt: "Nos hemos ___.", answers: ["perdido"], explain: "perderse → nos hemos perdido" },
    { prompt: "¿Tiene un ___ de la ciudad?", answers: ["mapa"], explain: "el mapa = die Karte / der Stadtplan" }
  ],
  malaga: [
    { prompt: "Una mesa para ___, por favor.", answers: ["dos"], explain: "para dos = für zwei" },
    { prompt: "¿Nos trae la ___?", answers: ["carta"], explain: "la carta = die Speisekarte" },
    { prompt: "La ___, por favor.", answers: ["cuenta"], explain: "la cuenta = die Rechnung" },
    { prompt: "¡Está ___!", answers: ["riquísimo", "riquisimo"], explain: "riquísimo = ausgesprochen lecker" }
  ],
  sevilla: [
    { prompt: "¿Quedamos esta ___?", answers: ["tarde"], explain: "esta tarde = heute Nachmittag" },
    { prompt: "Gracias por la ___.", answers: ["invitación", "invitacion"], explain: "la invitación = die Einladung" },
    { prompt: "¿Quieres venir ___?", answers: ["conmigo"], explain: "conmigo = mit mir" },
    { prompt: "Nos vemos mañana por la ___.", answers: ["noche"], explain: "mañana por la noche = morgen Abend" }
  ],
  cordoba: [
    { prompt: "¿Cuánto ___ este queso?", answers: ["cuesta"], explain: "¿Cuánto cuesta? = Wie viel kostet es?" },
    { prompt: "¿Puedo ___ esta camisa?", answers: ["probarme"], explain: "probarse = anprobieren" },
    { prompt: "Voy a pagar en ___.", answers: ["efectivo"], explain: "en efectivo = bar" },
    { prompt: "¿Me da el ___?", answers: ["recibo"], explain: "el recibo = der Kassenbon" }
  ],
  toledo: [
    { prompt: "Hicimos una visita ___.", answers: ["guiada"], explain: "una visita guiada = eine Führung" },
    { prompt: "Ya hemos ___ la plaza.", answers: ["visto"], explain: "hemos visto = wir haben gesehen" },
    { prompt: "Todavía no hemos ___ el museo.", answers: ["visitado"], explain: "todavía no = noch nicht" },
    { prompt: "La excursión merece la ___.", answers: ["pena"], explain: "merecer la pena = sich lohnen" }
  ],
  salamanca: [
    { prompt: "Mi equipo ___ hoy.", answers: ["juega"], explain: "jugar → juega" },
    { prompt: "Ganaron tres a ___.", answers: ["cero"], explain: "tres a cero = drei zu null" },
    { prompt: "El partido terminó en ___.", answers: ["empate"], explain: "el empate = das Unentschieden" },
    { prompt: "¿Cuál fue el ___?", answers: ["resultado"], explain: "el resultado = das Ergebnis" }
  ],
  bilbao: [
    { prompt: "Tengo dolor de ___.", answers: ["cabeza"], explain: "dolor de cabeza = Kopfschmerzen" },
    { prompt: "Tome dos pastillas al ___.", answers: ["día", "dia"], explain: "al día = pro Tag" },
    { prompt: "Este jarabe es para la ___.", answers: ["tos"], explain: "la tos = der Husten" },
    { prompt: "Tiene que ir a ___.", answers: ["urgencias"], explain: "urgencias = die Notaufnahme" }
  ],
  zaragoza: [
    { prompt: "Tenemos un neumático ___.", answers: ["pinchado"], explain: "un neumático pinchado = ein platter Reifen" },
    { prompt: "He perdido la ___.", answers: ["cartera"], explain: "la cartera = die Geldbörse" },
    { prompt: "Voy a llamar a la ___.", answers: ["policía", "policia"], explain: "la policía = die Polizei" },
    { prompt: "Es una ___.", answers: ["emergencia"], explain: "una emergencia = ein Notfall" }
  ],
  madrid: [
    { prompt: "Madrid es la ___ de España.", answers: ["capital"], explain: "la capital = die Hauptstadt" },
    { prompt: "Nos vemos en la ___.", answers: ["plaza"], explain: "la plaza = der Platz" },
    { prompt: "Regresamos ___.", answers: ["mañana", "manana"], explain: "mañana = morgen" },
    { prompt: "¿Puede hablar más ___?", answers: ["despacio"], explain: "más despacio = langsamer" }
  ]
};

travelModules.forEach(function (module) {
  module.cloze = module.cloze.concat(clozeExpansion[module.id] || []);
});

const stageThemes = {
  barcelona: { landscape: "mediterranean-city", label: "Mosaike am Mittelmeer" },
  valencia: { landscape: "orange-groves", label: "Orangenhaine und Küste" },
  alicante: { landscape: "beach", label: "Palmenstrand der Costa Blanca" },
  granada: { landscape: "sierra", label: "Alhambra vor der Sierra Nevada" },
  malaga: { landscape: "coast", label: "Sonnenküste Andalusiens" },
  sevilla: { landscape: "andalusia", label: "Tapas-Abend in Sevilla" },
  cordoba: { landscape: "patio", label: "Patios und maurische Bögen" },
  toledo: { landscape: "meseta", label: "Goldene Hügel der Meseta" },
  salamanca: { landscape: "university", label: "Sandstein und Plaza Mayor" },
  bilbao: { landscape: "atlantic", label: "Grüne Atlantikküste" },
  zaragoza: { landscape: "desert", label: "Weite Landschaft am Ebro" },
  madrid: { landscape: "madrid", label: "Lichter der Gran Vía" }
};

const conversationModules = {
  barcelona: {
    choice: { prompt: "« ¿Cuánto tiempo os quedáis? »", options: ["Nos quedamos cinco días.", "Venimos en tren.", "Hace mucho sol.", "La carta, por favor."], answer: 0 },
    gap: { prompt: "Me ___ Marta y vengo de Colonia.", answers: ["llamo"], explain: "Me llamo … = Ich heiße …" },
    typed: { prompt: "« ¿De dónde vienes? » Responde con una frase completa.", answerText: "Vengo de Alemania, de Colonia.", keywords: [["vengo de", "venimos de"]], explain: "Eine vollständige Antwort beginnt zum Beispiel mit « Vengo de … »" }
  },
  valencia: {
    choice: { prompt: "« ¿A qué nombre está la reserva? »", options: ["Está a nombre de Martin.", "Voy a tomar paella.", "Está nublado.", "En la tercera parada."], answer: 0 },
    gap: { prompt: "Tengo una reserva ___ nombre de Martin.", answers: ["a"], explain: "a nombre de = auf den Namen" },
    typed: { prompt: "Frage vollständig, ob das Frühstück inbegriffen ist.", answerText: "¿Está incluido el desayuno?", keywords: [["desayuno"], ["incluido", "incluida"]], explain: "Verwende desayuno und incluido." }
  },
  alicante: {
    choice: { prompt: "« ¿Qué vais a hacer mañana? »", options: ["Si hace sol, vamos a bañarnos.", "Necesito una grúa.", "Una talla más grande.", "Está a mi nombre."], answer: 0 },
    gap: { prompt: "Si hace buen tiempo, vamos a la ___.", answers: ["playa"], explain: "la playa = der Strand" },
    typed: { prompt: "« ¿Qué harás si hace sol? » Responde con un plan.", answerText: "Si hace sol, voy a pasear por la playa.", keywords: [["si hace sol", "si hace buen tiempo"], ["voy a", "vamos a", "ire", "iremos"]], explain: "Verbinde Wetter und Plan in einem Satz." }
  },
  granada: {
    choice: { prompt: "« ¿Busca algo? »", options: ["Sí, busco la parada de autobús.", "Sí, necesito jarabe.", "Sí, la cuenta.", "Sí, una habitación doble."], answer: 0 },
    gap: { prompt: "Siga todo ___ y gire a la izquierda.", answers: ["recto"], explain: "todo recto = geradeaus" },
    typed: { prompt: "Frage vollständig, an welcher Haltestelle ihr aussteigen müsst.", answerText: "¿En qué parada tenemos que bajarnos?", keywords: [["en que parada", "donde"], ["bajarnos", "bajar"]], explain: "Wichtig sind parada und bajarse." }
  },
  malaga: {
    choice: { prompt: "« ¿Ya han elegido? »", options: ["Sí, voy a tomar el menú del día.", "Sí, gire a la derecha.", "Sí, desde ayer.", "Sí, hemos perdido la llave."], answer: 0 },
    gap: { prompt: "Para mí, ___ menú del día.", answers: ["el"], explain: "el menú del día = das Tagesmenü" },
    typed: { prompt: "Bestelle vollständig ein vegetarisches Gericht und eine Flasche Wasser.", answerText: "Quisiera un plato vegetariano y una botella de agua.", keywords: [["plato vegetariano"], ["botella de agua"]], explain: "Beide Wünsche gehören in die Bestellung." }
  },
  sevilla: {
    choice: { prompt: "« ¿Te apetece ir de tapas esta noche? »", options: ["Sí, me encantaría.", "Medio kilo, por favor.", "Tengo dolor de cabeza.", "Siga todo recto."], answer: 0 },
    gap: { prompt: "¿Dónde ___ esta noche?", answers: ["quedamos"], explain: "quedar = sich verabreden" },
    typed: { prompt: "Nimm eine Einladung vollständig an und frage nach der Uhrzeit.", answerText: "Sí, me encantaría. ¿A qué hora quedamos?", keywords: [["me encantaria", "con mucho gusto"], ["a que hora"]], explain: "Nimm an und frage nach der Uhrzeit." }
  },
  cordoba: {
    choice: { prompt: "« ¿Cuánto quiere? »", options: ["Medio kilo, por favor.", "En la próxima parada.", "Desde hace dos días.", "Ganaron dos a uno."], answer: 0 },
    gap: { prompt: "Quisiera medio kilo ___ tomates.", answers: ["de"], explain: "Nach Mengenangaben steht de." },
    typed: { prompt: "Frage vollständig, ob du die Jacke in Größe M anprobieren kannst.", answerText: "¿Puedo probarme esta chaqueta en la talla M?", keywords: [["probarme"], ["talla m"], ["chaqueta"]], explain: "Nenne Anprobieren, Jacke und Größe M." }
  },
  toledo: {
    choice: { prompt: "« ¿Qué fue lo que más te gustó? »", options: ["Me gustó mucho la catedral.", "Voy a pagar con tarjeta.", "Me duele la garganta.", "Baje en la tercera parada."], answer: 0 },
    gap: { prompt: "Ayer ___ una visita guiada.", answers: ["hicimos"], explain: "hacer → hicimos" },
    typed: { prompt: "Erzähle in einem vollständigen Satz, was dir am besten gefiel.", answerText: "Lo que más me gustó fue la catedral.", keywords: [["me gusto", "me ha gustado"], ["catedral", "museo", "visita", "casco antiguo"]], explain: "Nenne dein persönliches Highlight." }
  },
  salamanca: {
    choice: { prompt: "« ¿De qué equipo eres? »", options: ["Soy del Athletic.", "Necesito una receta.", "Una mesa para dos.", "Está incluido."], answer: 0 },
    gap: { prompt: "El partido terminó dos ___ uno.", answers: ["a"], explain: "dos a uno = zwei zu eins" },
    typed: { prompt: "« ¿Qué te pareció el partido? » Da tu opinión.", answerText: "En mi opinión, los dos equipos jugaron bien.", keywords: [["en mi opinion", "creo que", "me parecio"]], explain: "Formuliere eine vollständige Meinung." }
  },
  bilbao: {
    choice: { prompt: "« ¿Desde cuándo le duele? »", options: ["Desde hace dos días.", "Dos veces al día.", "Sin receta.", "A nombre de Martin."], answer: 0 },
    gap: { prompt: "Me ___ la cabeza desde ayer.", answers: ["duele"], explain: "me duele la cabeza = ich habe Kopfschmerzen" },
    typed: { prompt: "Beschreibe vollständig Husten und Fieber seit gestern.", answerText: "Tengo tos y fiebre desde ayer.", keywords: [["tengo"], ["tos"], ["fiebre"], ["desde ayer"]], explain: "Nenne beide Beschwerden und die Dauer." }
  },
  zaragoza: {
    choice: { prompt: "« ¿Qué ha pasado? »", options: ["Tenemos una avería y necesitamos ayuda.", "Queremos reservar una mesa.", "Hace buen tiempo.", "Soy del Real Madrid."], answer: 0 },
    gap: { prompt: "Necesitamos una ___ para el autobús.", answers: ["grúa", "grua"], explain: "la grúa = der Abschleppwagen" },
    typed: { prompt: "Bitte vollständig darum, die Polizei anzurufen.", answerText: "¿Puede llamar a la policía, por favor?", keywords: [["puede", "podria"], ["llamar"], ["policia"]], explain: "Bitte höflich um den Anruf bei der Polizei." }
  },
  madrid: {
    choice: { prompt: "« ¿Lo ha entendido? »", options: ["No del todo. ¿Puede repetirlo?", "Sí, dos cafés.", "No, el autobús se averió.", "Sí, estas pastillas."], answer: 0 },
    gap: { prompt: "Si he entendido ___, tengo que cambiar de línea.", answers: ["bien"], explain: "si he entendido bien = wenn ich richtig verstanden habe" },
    typed: { prompt: "Bitte vollständig darum, langsamer zu wiederholen.", answerText: "¿Puede repetirlo más despacio, por favor?", keywords: [["repetir"], ["mas despacio", "lentamente"]], explain: "Bitte höflich um Wiederholung und geringeres Tempo." }
  }
};

const conversationGuides = {
  barcelona: { choice: "Wie lange bleibt ihr?", gap: "Ich heiße Marta und komme aus Köln.", typed: "Woher kommst du? Antworte mit einem vollständigen Satz." },
  valencia: { choice: "Auf welchen Namen läuft die Reservierung?", gap: "Ich habe eine Reservierung auf den Namen Martin.", typed: "Frage: Ist das Frühstück inbegriffen?" },
  alicante: { choice: "Was werdet ihr morgen machen?", gap: "Wenn das Wetter gut ist, gehen wir an den Strand.", typed: "Was wirst du tun, wenn es sonnig ist? Antworte mit einem Plan." },
  granada: { choice: "Suchen Sie etwas?", gap: "Gehen Sie immer geradeaus und biegen Sie links ab.", typed: "Frage: An welcher Haltestelle müssen wir aussteigen?" },
  malaga: { choice: "Haben Sie schon gewählt?", gap: "Für mich das Tagesmenü.", typed: "Bestelle ein vegetarisches Gericht und eine Flasche Wasser." },
  sevilla: { choice: "Hast du Lust, heute Abend Tapas essen zu gehen?", gap: "Wo treffen wir uns heute Abend?", typed: "Nimm die Einladung an und frage nach der Uhrzeit." },
  cordoba: { choice: "Wie viel möchten Sie?", gap: "Ich hätte gern ein halbes Kilo Tomaten.", typed: "Frage, ob du die Jacke in Größe M anprobieren kannst." },
  toledo: { choice: "Was hat dir am besten gefallen?", gap: "Gestern machten wir eine Führung.", typed: "Erzähle, was dir am besten gefallen hat." },
  salamanca: { choice: "Für welche Mannschaft bist du?", gap: "Das Spiel endete zwei zu eins.", typed: "Wie fandest du das Spiel? Formuliere deine Meinung." },
  bilbao: { choice: "Seit wann tut es Ihnen weh?", gap: "Mein Kopf tut seit gestern weh.", typed: "Beschreibe Husten und Fieber seit gestern." },
  zaragoza: { choice: "Was ist passiert?", gap: "Wir brauchen einen Abschleppwagen für den Bus.", typed: "Bitte darum, die Polizei anzurufen." },
  madrid: { choice: "Haben Sie es verstanden?", gap: "Wenn ich richtig verstanden habe, muss ich die Linie wechseln.", typed: "Bitte darum, es langsamer zu wiederholen." }
};

function dialogueSet(choicePrompt, choiceDe, choiceOptions, gapPrompt, gapDe, gapAnswers, gapExplain, typedPrompt, typedDe, answerText, keywords, typedExplain) {
  return {
    choice: { prompt: choicePrompt, promptDe: choiceDe, options: choiceOptions, answer: 0 },
    gap: { prompt: gapPrompt, promptDe: gapDe, answers: gapAnswers, explain: gapExplain },
    typed: { prompt: typedPrompt, promptDe: typedDe, answerText: answerText, keywords: keywords, minWords: 4, explain: typedExplain }
  };
}

/* Zwei weitere Alltagsszenarien pro Stadt: drei Dialoge mit je drei Runden. */
const conversationExpansion = {
  barcelona: [
    dialogueSet(
      "« ¿Es vuestra primera vez en Barcelona? »", "Seid ihr zum ersten Mal in Barcelona?",
      ["Sí, estamos aquí por primera vez.", "No, la cuenta, por favor.", "Hace mucho viento.", "Necesito una receta."],
      "¿Puede ___ un café tranquilo?", "Können Sie ein ruhiges Café empfehlen?", ["recomendar"], "recomendar = empfehlen",
      "« ¿Cuánto tiempo os quedáis? » Responde con duración y alojamiento.", "Wie lange bleibt ihr? Antworte mit Dauer und Unterkunft.",
      "Nos quedamos cinco días en un hotel del centro.", [["nos quedamos"], ["dias", "semanas"], ["hotel", "apartamento"]], "Nenne Dauer und Unterkunft."
    ),
    dialogueSet(
      "« ¿De dónde venís? »", "Woher kommt ihr?",
      ["Venimos de Alemania.", "Vamos a la playa.", "Dos entradas, por favor.", "Está incluido."],
      "Este ___ es muy animado.", "Dieses Viertel ist sehr lebendig.", ["barrio"], "el barrio = das Stadtviertel",
      "Stell dich mit Name, Herkunft und einem Reisedetail vor.", "Nenne deinen Namen, deine Herkunft und ein Reisedetail.",
      "Me llamo Mia, vengo de Alemania y estoy aquí por primera vez.", [["me llamo"], ["vengo de", "venimos de"], ["primera vez", "dias", "viaje"]], "Verbinde drei Informationen in einer kurzen Vorstellung."
    )
  ],
  valencia: [
    dialogueSet(
      "« ¿Tiene una reserva? »", "Haben Sie eine Reservierung?",
      ["Sí, a nombre de Schneider.", "Sí, hace mucho sol.", "No, medio kilo.", "En la tercera parada."],
      "¿Está ___ el desayuno?", "Ist das Frühstück inbegriffen?", ["incluido", "incluida"], "estar incluido = inbegriffen sein",
      "Melde zwei Probleme im Zimmer.", "Beschreibe, dass das Zimmer laut ist und die Klimaanlage nicht funktioniert.",
      "La habitación es ruidosa y el aire acondicionado no funciona.", [["habitacion"], ["ruidosa", "ruidoso"], ["aire acondicionado"], ["no funciona"]], "Nenne beide Probleme vollständig."
    ),
    dialogueSet(
      "« ¿Cómo fue el trayecto? »", "Wie war die Fahrt?",
      ["Fue largo; duró cuatro horas.", "La cuenta está incluida.", "Me duele la cabeza.", "Quiero una talla M."],
      "Nuestro ___ está en el autobús.", "Unser Gepäck ist im Bus.", ["equipaje"], "el equipaje = das Gepäck",
      "Frage nach der Uhrzeit für den Check-out.", "Um wie viel Uhr muss man das Zimmer verlassen?",
      "¿A qué hora hay que dejar la habitación?", [["a que hora"], ["dejar"], ["habitacion"]], "Frage mit a qué hora nach dem Zeitpunkt."
    )
  ],
  alicante: [
    dialogueSet(
      "« ¿Qué tiempo hace hoy? »", "Wie ist das Wetter heute?",
      ["Hace sol, pero hay viento.", "Tengo una reserva.", "Una mesa para dos.", "Ganaron tres a cero."],
      "Parece que va a ___.", "Es sieht so aus, als würde es regnen.", ["llover"], "va a llover = es wird regnen",
      "Beschreibe das Wetter und einen passenden Plan.", "Verbinde Wetter und Tagesplan.",
      "Hace sol, así que vamos a pasear por el puerto.", [["hace sol", "hace calor", "esta nublado"], ["vamos a", "voy a"], ["pasear", "playa", "banarnos"]], "Nenne Wetter und eine passende Aktivität."
    ),
    dialogueSet(
      "« ¿Dónde prefieres sentarte? »", "Wo möchtest du lieber sitzen?",
      ["A la sombra, por favor.", "A nombre de Martin.", "En efectivo.", "Desde ayer."],
      "Necesito protector ___.", "Ich brauche Sonnencreme.", ["solar"], "protector solar = Sonnencreme",
      "Frage, wo ihr zwei Sonnenliegen mieten könnt.", "Wo können wir zwei Sonnenliegen mieten?",
      "¿Dónde podemos alquilar dos tumbonas?", [["donde"], ["alquilar"], ["dos tumbonas"]], "Nutze dónde, alquilar und dos tumbonas."
    )
  ],
  granada: [
    dialogueSet(
      "« ¿Solo ida o ida y vuelta? »", "Nur Hinfahrt oder Hin- und Rückfahrt?",
      ["Ida y vuelta, por favor.", "Una mesa para dos.", "Hace calor.", "Con receta."],
      "Bájese en la tercera ___.", "Steigen Sie an der dritten Haltestelle aus.", ["parada"], "la parada = die Haltestelle",
      "Frage, wie weit die Kathedrale zu Fuß entfernt ist.", "Wie weit ist die Kathedrale zu Fuß?",
      "¿Está muy lejos la catedral a pie?", [["esta"], ["lejos"], ["catedral"], ["a pie"]], "Verbinde Entfernung, Ziel und a pie."
    ),
    dialogueSet(
      "« ¿Dónde está la catedral? »", "Wo ist die Kathedrale?",
      ["Siga recto y gire a la derecha.", "Está riquísimo.", "Tengo fiebre.", "Salimos temprano."],
      "Gire a la ___.", "Biegen Sie links ab.", ["izquierda"], "a la izquierda = links",
      "Bitte um einen Stadtplan und frage nach den Öffnungszeiten.", "Bitte um einen Stadtplan und frage nach den Öffnungszeiten.",
      "¿Tiene un mapa de la ciudad? ¿Cuál es el horario?", [["mapa"], ["ciudad"], ["horario"]], "Stelle beide Fragen vollständig."
    )
  ],
  malaga: [
    dialogueSet(
      "« ¿Para cuántas personas? »", "Für wie viele Personen?",
      ["Una mesa para dos, por favor.", "Dos pastillas al día.", "A la izquierda.", "Desde ayer."],
      "¿Nos trae la ___?", "Bringen Sie uns die Speisekarte?", ["carta"], "la carta = die Speisekarte",
      "Reserviere für heute Abend einen Tisch auf der Terrasse.", "Reserviere einen Tisch auf der Terrasse für heute Abend.",
      "Quisiera reservar una mesa en la terraza para esta noche.", [["reservar"], ["mesa"], ["terraza"], ["esta noche"]], "Nenne Reservierung, Tisch, Terrasse und Zeitpunkt."
    ),
    dialogueSet(
      "« ¿Algo de postre? »", "Möchten Sie etwas zum Nachtisch?",
      ["Sí, una crema catalana.", "Sí, un mapa de la ciudad.", "Sí, una grúa.", "Sí, la talla M."],
      "¿Está incluida la ___?", "Ist das Trinkgeld inbegriffen?", ["propina"], "la propina = das Trinkgeld",
      "Frage nach einem glutenfreien Gericht und anschließend nach der Rechnung.", "Frage nach etwas Glutenfreiem und nach der Rechnung.",
      "¿Tiene algo sin gluten? La cuenta, por favor.", [["sin gluten"], ["cuenta"]], "Formuliere beide Wünsche."
    )
  ],
  sevilla: [
    dialogueSet(
      "« ¿Quieres venir conmigo al concierto? »", "Möchtest du mit mir zum Konzert kommen?",
      ["Sí, me encantaría.", "La cuenta, por favor.", "Gire a la derecha.", "Necesito jarabe."],
      "El espectáculo ___ a las nueve.", "Die Vorstellung beginnt um neun Uhr.", ["empieza"], "empezar → empieza",
      "Lehne eine Einladung freundlich ab und nenne einen Grund.", "Lehne freundlich ab und nenne einen Grund.",
      "Lo siento, esta noche no puedo porque ya tengo planes.", [["lo siento"], ["no puedo"], ["porque"]], "Nutze eine Entschuldigung, Ablehnung und Begründung."
    ),
    dialogueSet(
      "« ¿Te apetece tomar algo? »", "Hast du Lust, etwas trinken zu gehen?",
      ["Sí, con mucho gusto.", "Medio kilo de tomates.", "Está nublado.", "Un billete de vuelta."],
      "Nos vemos mañana por la ___.", "Wir sehen uns morgen Abend.", ["noche"], "mañana por la noche = morgen Abend",
      "Lade jemanden zum Tapasessen ein und frage nach einer Uhrzeit.", "Lade zum Tapasessen ein und frage nach der Uhrzeit.",
      "¿Quieres ir de tapas conmigo? ¿A qué hora quedamos?", [["ir de tapas"], ["conmigo"], ["a que hora"]], "Verbinde Einladung und Zeitfrage."
    )
  ],
  cordoba: [
    dialogueSet(
      "« ¿Qué talla necesita? »", "Welche Größe benötigen Sie?",
      ["La talla M, por favor.", "Un kilo de naranjas.", "A las nueve.", "Desde hace dos días."],
      "¿Puedo ___ esta camisa?", "Kann ich dieses Hemd anprobieren?", ["probarme"], "probarse = anprobieren",
      "Frage nach der Größe M und nach dem Preis.", "Haben Sie es in Größe M und wie viel kostet es?",
      "¿Lo tiene en la talla M? ¿Cuánto cuesta?", [["talla m"], ["cuanto cuesta"]], "Stelle beide Fragen nacheinander."
    ),
    dialogueSet(
      "« ¿Cuánto quiere? »", "Wie viel möchten Sie?",
      ["Un kilo de naranjas, por favor.", "Todo recto.", "Una habitación doble.", "Me duele la cabeza."],
      "Voy a pagar con ___.", "Ich werde mit Karte bezahlen.", ["tarjeta"], "con tarjeta = mit Karte",
      "Bestelle ein halbes Kilo Tomaten und bitte um den Kassenbon.", "Bestelle Tomaten und bitte um den Kassenbon.",
      "Quisiera medio kilo de tomates. ¿Me da el recibo?", [["medio kilo"], ["tomates"], ["recibo"]], "Nenne Menge, Produkt und Kassenbon."
    )
  ],
  toledo: [
    dialogueSet(
      "« ¿Ya habéis visitado el museo? »", "Habt ihr das Museum schon besucht?",
      ["Todavía no, pero iremos esta tarde.", "Sí, con tarjeta.", "No, necesito una receta.", "Sí, hace viento."],
      "Ayer ___ a Toledo.", "Gestern fuhren wir nach Toledo.", ["fuimos"], "ir → fuimos im indefinido",
      "Erzähle, dass dich die Kathedrale beeindruckt hat.", "Sage, dass die Kathedrale dich beeindruckt hat.",
      "La catedral me impresionó mucho.", [["catedral"], ["me impresiono", "nos impresiono"]], "Nenne Sehenswürdigkeit und Eindruck."
    ),
    dialogueSet(
      "« ¿Mereció la pena la excursión? »", "Hat sich der Ausflug gelohnt?",
      ["Sí, fue impresionante.", "No, está incluido.", "Sí, dos pastillas.", "No, a la izquierda."],
      "Hicimos muchas ___.", "Wir machten viele Fotos.", ["fotos"], "hacer fotos = Fotos machen",
      "Beschreibe Altstadt und Museum in zwei kurzen Aussagen.", "Beschreibe zwei Stationen eures Besuchs.",
      "Paseamos por el casco antiguo y visitamos el museo.", [["casco antiguo"], ["museo"], ["visitamos", "hemos visitado"]], "Nenne beide Orte und passende Aktivitäten."
    )
  ],
  salamanca: [
    dialogueSet(
      "« ¿Quién ganó el partido? »", "Wer hat das Spiel gewonnen?",
      ["Mi equipo ganó tres a cero.", "El desayuno está incluido.", "Quiero medio kilo.", "Está cerca."],
      "El estadio estaba ___.", "Das Stadion war voll.", ["lleno"], "lleno = voll",
      "Sage, dass das Spiel spannend war und beide Teams gut spielten.", "Bewerte Spiel und Mannschaften.",
      "Fue un partido emocionante y los dos equipos jugaron bien.", [["partido emocionante"], ["equipos"], ["jugaron bien"]], "Nenne Spannung und Leistung beider Teams."
    ),
    dialogueSet(
      "« ¿De qué equipo eres? »", "Für welche Mannschaft bist du?",
      ["Soy del Athletic.", "Soy alérgico a la penicilina.", "Soy una mesa para dos.", "Soy a la derecha."],
      "Vamos a ___ al equipo.", "Wir werden die Mannschaft anfeuern.", ["animar"], "animar = anfeuern",
      "Nenne das Ergebnis und eine Spielerin, die dir gefallen hat.", "Nenne Ergebnis und Lieblingsspielerin.",
      "El resultado fue dos a uno y me gustó mucho la portera.", [["resultado"], ["dos a uno", "tres a cero", "empate"], ["me gusto"]], "Verbinde Ergebnis und persönliche Meinung."
    )
  ],
  bilbao: [
    dialogueSet(
      "« ¿Tiene fiebre? »", "Haben Sie Fieber?",
      ["Sí, tengo un poco de fiebre.", "Sí, una mesa para dos.", "No, ida y vuelta.", "Sí, con tarjeta."],
      "Tome dos ___ al día.", "Nehmen Sie zwei Tabletten am Tag.", ["pastillas"], "las pastillas = die Tabletten",
      "Sage, dass du gegen Penicillin allergisch bist.", "Informiere über deine Penicillinallergie.",
      "Soy alérgico a la penicilina.", [["alergico", "alergica"], ["penicilina"]], "Nenne die Allergie eindeutig."
    ),
    dialogueSet(
      "« ¿Cómo debo tomarlo? »", "Wie soll ich es einnehmen?",
      ["Dos veces al día después de comer.", "En la tercera parada.", "Con una talla M.", "Desde Alemania."],
      "Aplique la crema ___.", "Tragen Sie die Creme hier auf.", ["aquí", "aqui"], "aquí = hier",
      "Frage, ob du für den Hustensaft ein Rezept brauchst.", "Brauche ich für diesen Hustensaft ein Rezept?",
      "¿Necesito una receta para este jarabe?", [["necesito"], ["receta"], ["jarabe"]], "Frage mit receta und jarabe."
    )
  ],
  zaragoza: [
    dialogueSet(
      "« ¿Qué problema tienen? »", "Welches Problem haben Sie?",
      ["Tenemos un neumático pinchado.", "Queremos una crema catalana.", "Hace mucho sol.", "El museo está lleno."],
      "Nos hemos quedado sin ___.", "Uns ist das Benzin ausgegangen.", ["gasolina"], "quedarse sin gasolina = kein Benzin mehr haben",
      "Bitte um einen Abschleppwagen und nenne eure genaue Adresse.", "Bitte um einen Abschleppwagen und nenne den Standort.",
      "Necesitamos una grúa. Estamos en la calle Mayor, número diez.", [["necesitamos"], ["grua"], ["estamos en"]], "Nenne Hilfe und genauen Standort."
    ),
    dialogueSet(
      "« ¿Qué le han robado? »", "Was wurde Ihnen gestohlen?",
      ["Me han robado los documentos.", "Me han reservado una mesa.", "Me han incluido el desayuno.", "Me han gustado las tapas."],
      "No encuentro mi ___.", "Ich finde mein Handy nicht.", ["móvil", "movil"], "el móvil = das Handy",
      "Melde einen gestohlenen Rucksack und bitte um einen Anruf bei der Polizei.", "Melde den Diebstahl und bitte um die Polizei.",
      "Me han robado la mochila. ¿Puede llamar a la policía?", [["robado"], ["mochila"], ["llamar"], ["policia"]], "Nenne Gegenstand und gewünschte Hilfe."
    )
  ],
  madrid: [
    dialogueSet(
      "« ¿Puede repetirlo? »", "Können Sie es wiederholen?",
      ["Por supuesto, más despacio.", "Por supuesto, medio kilo.", "Sí, un jarabe.", "No, el estadio."],
      "Voy a explicarlo de otra ___.", "Ich werde es anders erklären.", ["manera"], "de otra manera = auf eine andere Art",
      "Sage, dass du nicht alles verstanden hast, und bitte um Wiederholung.", "Erkläre das Verständnisproblem und bitte um Wiederholung.",
      "No lo he entendido del todo. ¿Puede repetirlo más despacio?", [["no lo he entendido"], ["repetir"], ["mas despacio"]], "Verbinde Rückmeldung und höfliche Bitte."
    ),
    dialogueSet(
      "« ¿Cuándo regresáis? »", "Wann kehrt ihr zurück?",
      ["Regresamos mañana.", "Regresamos con tarjeta.", "Regresamos dos pastillas.", "Regresamos a la sombra."],
      "Ha sido un viaje ___.", "Es war eine unvergessliche Reise.", ["inolvidable"], "inolvidable = unvergesslich",
      "Verabschiede dich und sage, was dir an Madrid gefallen hat.", "Verabschiede dich mit einer positiven Erinnerung.",
      "Me ha encantado Madrid. Gracias por todo y hasta luego.", [["madrid"], ["me ha encantado", "me gusto"], ["gracias"], ["hasta luego", "adios"]], "Nenne positiven Eindruck, Dank und Abschied."
    )
  ]
};

travelModules.forEach(function (module) {
  module.conversation = conversationModules[module.id];
  const guide = conversationGuides[module.id] || {};
  ["choice", "gap", "typed"].forEach(function (kind) {
    if (module.conversation[kind]) module.conversation[kind].promptDe = guide[kind] || "";
  });
  module.conversations = [module.conversation].concat(conversationExpansion[module.id] || []);
});

const grammarModules = [
  {
    id: "ser-estar-hay", city: "Barcelona", title: "ser, estar & hay", level: "A2 · Grundlage", summary: "Eigenschaften, Zustände und das Vorhandensein unterscheiden.",
    theory: [
      { title: "ser oder estar?", text: "ser beschreibt Identität und typische Eigenschaften; estar beschreibt Ort und momentanen Zustand.", example: "Soy alemán. · Barcelona es grande. · Estoy cansado. · El hotel está aquí." },
      { title: "hay", text: "hay bedeutet es gibt und verändert sich nicht nach Singular oder Plural.", example: "Hay una farmacia. · Hay muchos bares." }
    ],
    questions: [
      { prompt: "Madrid ___ la capital de España.", options: ["es", "está", "hay", "son"], answer: 0, explain: "Eine dauerhafte Zuordnung steht mit ser." },
      { prompt: "La farmacia ___ al lado del hotel.", options: ["está", "es", "hay", "son"], answer: 0, explain: "Ein Ort wird mit estar angegeben." },
      { prompt: "En esta calle ___ tres restaurantes.", options: ["hay", "están", "es", "son"], answer: 0, explain: "hay bedeutet es gibt." },
      { prompt: "Hoy nosotros ___ cansados.", options: ["estamos", "somos", "hay", "estáis"], answer: 0, explain: "Ein momentaner Zustand steht mit estar." },
      { prompt: "Las tapas ___ típicas de España.", options: ["son", "están", "hay", "es"], answer: 0, explain: "Eine typische Eigenschaft steht mit ser." }
    ]
  },
  {
    id: "presente", city: "Valencia", title: "Präsens & Reiseverben", level: "A2 · Basis", summary: "Regelmäßige, wichtige unregelmäßige und reflexive Verben.",
    theory: [
      { title: "Drei Verbgruppen", text: "-ar: hablo, -er: como, -ir: vivo. Die Endungen zeigen die Person.", example: "Hablamos español. · Comemos aquí. · Vivís en Madrid." },
      { title: "Wichtige Unregelmäßige", text: "tener, ir, hacer, poder, querer und venir brauchst du auf jeder Reise.", example: "Tengo una reserva. · Voy al centro. · ¿Puede ayudarme?" }
    ],
    questions: [
      { prompt: "Nosotros ___ una reserva.", options: ["tenemos", "tienen", "tenéis", "tener"], answer: 0, explain: "tener mit nosotros: tenemos." },
      { prompt: "¿Vosotros ___ al centro?", options: ["vais", "van", "vamos", "ir"], answer: 0, explain: "ir mit vosotros: vais." },
      { prompt: "Yo ___ una mesa para dos.", options: ["quiero", "quiere", "queremos", "queréis"], answer: 0, explain: "querer mit yo: quiero." },
      { prompt: "Ella se ___ a las ocho.", options: ["levanta", "levanto", "levantáis", "levantar"], answer: 0, explain: "Reflexiv mit ella: se levanta." },
      { prompt: "¿Usted ___ ayudarme?", options: ["puede", "puedes", "podéis", "puedo"], answer: 0, explain: "usted verwendet die dritte Person: puede." }
    ]
  },
  {
    id: "preguntas", city: "Alicante", title: "Fragen & höflich bitten", level: "A2 · Gespräch", summary: "Fragewörter, tú/usted/vosotros und höfliche Wünsche.",
    theory: [
      { title: "Fragewörter", text: "qué, dónde, cuándo, cómo, cuánto und por qué tragen einen Akzent.", example: "¿Dónde está la estación? · ¿Cuánto cuesta?" },
      { title: "Höflichkeit", text: "quisiera, me gustaría und podría sind freundlich. usted nutzt die Form der dritten Person.", example: "Quisiera reservar. · ¿Podría repetirlo?" }
    ],
    questions: [
      { prompt: "¿___ cuesta esta habitación?", options: ["Cuánto", "Dónde", "Quién", "Cuándo"], answer: 0, explain: "Cuánto fragt nach dem Preis." },
      { prompt: "Welche Bitte ist am höflichsten?", options: ["¿Podría ayudarme?", "Ayúdame.", "Tú ayudas.", "Ayudar aquí."], answer: 0, explain: "¿Podría …? ist eine höfliche Bitte." },
      { prompt: "¿___ está la parada?", options: ["Dónde", "Cuánto", "Qué de", "Cuál de"], answer: 0, explain: "Dónde fragt nach dem Ort." },
      { prompt: "Usted ___ aquí, ¿verdad?", options: ["vive", "vives", "vivís", "vivo"], answer: 0, explain: "usted verwendet die dritte Person Singular." },
      { prompt: "Vosotros ___ de Alemania.", options: ["sois", "son", "somos", "eres"], answer: 0, explain: "ser mit vosotros: sois." }
    ]
  },
  {
    id: "articulos", city: "Granada", title: "Artikel, Mengen & Orte", level: "A2 · Genauigkeit", summary: "Genus, Plural, Mengenangaben und wichtige Ortspräpositionen.",
    theory: [
      { title: "Artikel und Genus", text: "el/la und los/las richten sich nach Genus und Zahl. Einige Wörter wie el mapa sind Ausnahmen.", example: "el mercado · la playa · los museos · las calles" },
      { title: "Orte und Mengen", text: "Nach Mengen steht de. Für Bewegung zu Orten nutzt man oft a, für Position en.", example: "medio kilo de tomates · Voy a Madrid. · Estoy en Madrid." }
    ],
    questions: [
      { prompt: "Quisiera medio kilo ___ naranjas.", options: ["de", "del", "las", "unas"], answer: 0, explain: "Nach einer Mengenangabe steht de." },
      { prompt: "Vamos ___ la playa.", options: ["a", "en", "de", "por de"], answer: 0, explain: "Bewegung zu einem Ziel: ir a." },
      { prompt: "Estamos ___ Valencia.", options: ["en", "a", "del", "para de"], answer: 0, explain: "Position in einem Ort: estar en." },
      { prompt: "___ mapa está en la mochila.", options: ["El", "La", "Los", "Una"], answer: 0, explain: "mapa ist trotz -a maskulin: el mapa." },
      { prompt: "Busco ___ farmacias abiertas.", options: ["unas", "un", "una", "el"], answer: 0, explain: "farmacias ist feminin Plural: unas." }
    ]
  },
  {
    id: "pronombres", city: "Málaga", title: "Pronomen & gustar", level: "A2/B1 · Sprachfluss", summary: "Objekte ersetzen und Vorlieben natürlich ausdrücken.",
    theory: [
      { title: "Direkte und indirekte Pronomen", text: "lo/la/los/las ersetzen direkte Objekte; le/les stehen oft für Personen. Vor lo/la wird le zu se.", example: "La cuenta, ¿me la trae? · Se lo doy al camarero." },
      { title: "gustar", text: "Bei gustar bestimmt die Sache die Verbform: me gusta + Singular/Infinitiv, me gustan + Plural.", example: "Me gusta viajar. · Me gustan las tapas." }
    ],
    questions: [
      { prompt: "Las entradas, ¿___ puede traer?", options: ["me las", "me los", "le la", "se le"], answer: 0, explain: "entradas ist feminin Plural: las; für mich: me las." },
      { prompt: "A mí ___ gustan las tapas.", options: ["me", "te", "le", "nos"], answer: 0, explain: "a mí entspricht me; bei tapas steht gustan im Plural." },
      { prompt: "Nos ___ las playas tranquilas.", options: ["gustan", "gusta", "gustamos", "gustáis"], answer: 0, explain: "playas ist Plural, daher gustan." },
      { prompt: "Doy el mapa a Ana. ___ doy.", options: ["Se lo", "Le lo", "La le", "Lo se"], answer: 0, explain: "le + lo wird zu se lo." },
      { prompt: "¿Conoces el museo? Sí, ___ conozco.", options: ["lo", "le", "la", "se"], answer: 0, explain: "museo ist maskulin Singular: lo." }
    ]
  },
  {
    id: "pasados", city: "Sevilla", title: "Pretérito perfecto & indefinido", level: "A2/B1 · Rückblick", summary: "Heutige Erfahrungen und abgeschlossene Ereignisse erzählen.",
    theory: [
      { title: "Pretérito perfecto", text: "haber + Partizip verbindet Vergangenes oft mit der Gegenwart: hoy, esta semana, ya, todavía no.", example: "Hoy hemos visitado el museo. · Todavía no he comido." },
      { title: "Pretérito indefinido", text: "Für klar abgeschlossene Zeiträume: ayer, el año pasado. Häufige Formen: fui, hice, tuve, vi.", example: "Ayer fuimos a Córdoba. · La visita duró dos horas." }
    ],
    questions: [
      { prompt: "Hoy ___ visitado la catedral.", options: ["hemos", "fuimos", "somos", "habíamos"], answer: 0, explain: "hoy verbindet man in Spanien oft mit dem perfecto." },
      { prompt: "Ayer nosotros ___ al museo.", options: ["fuimos", "hemos ido", "vamos", "íbamos siempre"], answer: 0, explain: "ayer ist abgeschlossen: fuimos." },
      { prompt: "¿Ya ___ la paella?", options: ["has probado", "probaste ayer", "pruebas", "probar"], answer: 0, explain: "ya + Erfahrung: has probado." },
      { prompt: "El viaje ___ cuatro horas.", options: ["duró", "ha durar", "duraba una vez", "dura ayer"], answer: 0, explain: "Abgeschlossene Dauer: duró." },
      { prompt: "Indefinido von hacer mit yo:", options: ["hice", "he hecho", "hacía", "hago"], answer: 0, explain: "hacer im indefinido mit yo: hice." }
    ]
  },
  {
    id: "imperfecto", city: "Córdoba", title: "Imperfecto & Erzählrahmen", level: "B1 · Erzählen", summary: "Wetter, Gewohnheiten und laufende Situationen in der Vergangenheit.",
    theory: [
      { title: "Bildung", text: "-ar: hablaba; -er/-ir: comía, vivía. Unregelmäßig sind nur era, iba und veía.", example: "Hacía calor. · Íbamos a la playa cada día." },
      { title: "Hintergrund oder Ereignis?", text: "Imperfecto beschreibt Rahmen und Gewohnheit; indefinido setzt das abgeschlossene Ereignis.", example: "Llovía cuando llegamos." }
    ],
    questions: [
      { prompt: "Cuando llegamos, ___ mucho calor.", options: ["hacía", "hizo", "hace", "hará"], answer: 0, explain: "Wetter als Hintergrund steht im imperfecto." },
      { prompt: "De niño, siempre ___ a España.", options: ["iba", "fui una vez", "voy", "he ido hoy"], answer: 0, explain: "Eine frühere Gewohnheit: iba." },
      { prompt: "Yo ___ cuando sonó el teléfono.", options: ["dormía", "dormí", "duermo", "dormiré"], answer: 0, explain: "Die laufende Hintergrundhandlung steht im imperfecto." },
      { prompt: "Imperfecto von ser mit nosotros:", options: ["éramos", "fuimos", "somos", "seríamos"], answer: 0, explain: "ser ist unregelmäßig: éramos." },
      { prompt: "La plaza ___ llena de gente.", options: ["estaba", "estuvo de repente", "está ayer", "estará"], answer: 0, explain: "Eine Zustandsbeschreibung im Erzählrahmen: estaba." }
    ]
  },
  {
    id: "futuro", city: "Toledo", title: "Pläne, Zukunft & Imperativ", level: "A2/B1 · Unterwegs", summary: "Vorhaben ausdrücken und Anweisungen verstehen.",
    theory: [
      { title: "ir a und futuro", text: "ir a + Infinitiv ist der häufigste konkrete Plan. Das futuro simple nutzt den Infinitiv plus Endung.", example: "Vamos a visitar Toledo. · Mañana saldremos temprano." },
      { title: "Imperativ", text: "Wegbeschreibungen und Hinweise stehen oft im Imperativ. Höfliches usted: gire, siga, espere.", example: "Siga todo recto. · Gire a la derecha. · No entre." }
    ],
    questions: [
      { prompt: "Mañana nosotros ___ visitar Madrid.", options: ["vamos a", "van a", "vais", "hemos"], answer: 0, explain: "Plan mit nosotros: vamos a." },
      { prompt: "El año que viene ___ a España.", options: ["volveré", "volví", "volvía", "he volver"], answer: 0, explain: "Futuro simple mit yo: volveré." },
      { prompt: "Höflicher Imperativ von girar mit usted:", options: ["gire", "gira", "girad", "giras"], answer: 0, explain: "usted-Imperativ: gire." },
      { prompt: "No ___ aquí, por favor.", options: ["aparque", "aparca usted", "aparcó", "aparcará"], answer: 0, explain: "Verneinter usted-Imperativ: no aparque." },
      { prompt: "Si hace sol, ___ a la playa.", options: ["iremos", "fuimos", "íbamos ayer", "hemos ir"], answer: 0, explain: "Nach si + Präsens kann Futur folgen." }
    ]
  },
  {
    id: "por-para-subjuntivo", city: "Madrid", title: "por, para & erster Subjuntivo", level: "B1 · Nuance", summary: "Grund, Zweck, Ziel und wichtige Wunschformen unterscheiden.",
    theory: [
      { title: "por oder para?", text: "por nennt oft Grund, Weg, Austausch oder Dauer; para nennt Ziel, Zweck, Empfänger oder Frist.", example: "Gracias por la ayuda. · Este regalo es para Ana. · Salimos para Madrid." },
      { title: "Subjuntivo nach Wunsch", text: "Nach espero que, quiero que oder es importante que folgt häufig Subjuntivo.", example: "Espero que haga buen tiempo. · Quiero que vengas." }
    ],
    questions: [
      { prompt: "Gracias ___ su ayuda.", options: ["por", "para", "a", "de para"], answer: 0, explain: "Der Grund des Dankes steht mit por." },
      { prompt: "Este billete es ___ Madrid.", options: ["para", "por", "de por", "en"], answer: 0, explain: "Das Ziel steht mit para." },
      { prompt: "Paseamos ___ el casco antiguo.", options: ["por", "para", "a", "hasta de"], answer: 0, explain: "Bewegung durch einen Ort: por." },
      { prompt: "Espero que ___ buen tiempo.", options: ["haga", "hace", "hará seguro", "hacer"], answer: 0, explain: "Nach espero que steht Subjuntivo: haga." },
      { prompt: "Quiero que tú ___ conmigo.", options: ["vengas", "vienes", "vendrás", "venir"], answer: 0, explain: "Nach quiero que steht Subjuntivo: vengas." }
    ]
  }
];

const grammarExampleTranslations = {
  "ser-estar-hay": [
    "Ich bin Deutscher. · Barcelona ist groß. · Ich bin müde. · Das Hotel ist hier.",
    "Es gibt eine Apotheke. · Es gibt viele Bars."
  ],
  presente: [
    "Wir sprechen Spanisch. · Wir essen hier. · Ihr lebt in Madrid.",
    "Ich habe eine Reservierung. · Ich gehe ins Zentrum. · Können Sie mir helfen?"
  ],
  preguntas: [
    "Wo ist der Bahnhof? · Wie viel kostet es?",
    "Ich würde gern reservieren. · Könnten Sie es wiederholen?"
  ],
  articulos: [
    "der Markt · der Strand · die Museen · die Straßen",
    "ein halbes Kilo Tomaten · Ich fahre nach Madrid. · Ich bin in Madrid."
  ],
  pronombres: [
    "Die Rechnung – bringen Sie sie mir? · Ich gebe es dem Kellner.",
    "Ich reise gern. · Ich mag Tapas."
  ],
  pasados: [
    "Heute haben wir das Museum besucht. · Ich habe noch nicht gegessen.",
    "Gestern fuhren wir nach Córdoba. · Die Führung dauerte zwei Stunden."
  ],
  imperfecto: [
    "Es war heiß. · Wir gingen jeden Tag an den Strand.",
    "Es regnete, als wir ankamen."
  ],
  futuro: [
    "Wir werden Toledo besichtigen. · Morgen werden wir früh losfahren.",
    "Gehen Sie immer geradeaus. · Biegen Sie rechts ab. · Gehen Sie nicht hinein."
  ],
  "por-para-subjuntivo": [
    "Danke für die Hilfe. · Dieses Geschenk ist für Ana. · Wir fahren nach Madrid los.",
    "Ich hoffe, dass das Wetter gut wird. · Ich möchte, dass du kommst."
  ]
};

grammarModules.forEach(function (module) {
  const translations = grammarExampleTranslations[module.id] || [];
  module.theory.forEach(function (item, index) {
    item.exampleDe = translations[index] || "";
  });
});

const defaultState = {
  xp: 0,
  hearts: 5,
  streak: 1,
  completed: [],
  dialogueCompleted: [],
  grammarCompleted: [],
  dailyXp: 0,
  lastStudy: "",
  lessonsDone: 0,
  contentVersion: 5
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
    const saved = JSON.parse(localStorage.getItem("vamosRoadtripState") || "{}");
    const merged = Object.assign({}, defaultState, saved);
    if (saved.contentVersion !== defaultState.contentVersion) {
      merged.dialogueCompleted = [];
      merged.contentVersion = defaultState.contentVersion;
    }
    return merged;
  } catch (error) {
    return Object.assign({}, defaultState);
  }
}

function saveState() {
  localStorage.setItem("vamosRoadtripState", JSON.stringify(state));
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
  barcelona: "hello",
  valencia: "hotel",
  alicante: "sun",
  granada: "compass",
  malaga: "food",
  sevilla: "cheers",
  cordoba: "bag",
  toledo: "tower",
  salamanca: "football",
  bilbao: "pharmacy",
  zaragoza: "alert",
  madrid: "trophy"
};

function uiIcon(name, className) {
  return '<svg class="ui-icon retro-icon icon-' + escapeHtml(name) + ' ' + escapeHtml(className || "") + '" aria-hidden="true" focusable="false"><use href="#icon-' + escapeHtml(name) + '"></use></svg>';
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
  const colors = ["#ffcc3f", "#d93b4c", "#ff8f4e", "#f45d91", "#51d6c3", "#a970ff"];

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
  const theme = stageThemes[moduleId] || stageThemes.barcelona;
  document.body.dataset.tourTheme = moduleId;
  document.body.dataset.landscape = theme.landscape;
}

function routeCard(module, index) {
  const complete = state.completed.includes(module.id);
  const unlocked = isUnlocked(index);
  const current = unlocked && !complete && index === getNextModuleIndex();
  const status = complete ? "✓" : current ? uiIcon("bus", "route-bus-icon") : unlocked ? "›" : "🔒";
  const accent = index % 4 === 0 ? "sun" : index % 4 === 1 ? "agave" : index % 4 === 2 ? "coral" : "violet";
  return '<button class="route-card accent-' + accent + ' ' + (complete ? "completed " : "") + (current ? "current " : "") + (!unlocked ? "locked" : "") + '" data-module="' + module.id + '">' +
    '<span class="city-node"><i>' + (index + 1) + '</i><b>' + stageIcon(module, "stage-svg") + '</b></span>' +
    '<span class="route-copy"><small><span class="route-dot"></span> Parada ' + (index + 1) + ' · ' + module.city + '</small><strong>' + escapeHtml(module.title) + '</strong><p>' + escapeHtml(module.summary) + '</p><em>KM ' + module.km + '</em></span>' +
    '<span class="route-status">' + status + '</span></button>';
}

function renderHome() {
  const nextIndex = getNextModuleIndex();
  const next = travelModules[nextIndex];
  const progress = Math.round((state.completed.length / travelModules.length) * 100);
  const dailyPercent = Math.min(100, Math.round((state.dailyXp / 50) * 100));
  return '<section class="hero tour-hero">' +
    '<div class="hero-grid" aria-hidden="true"></div><div class="hero-glow" aria-hidden="true"></div>' +
    '<div class="tour-scenery" aria-hidden="true"><span class="tour-sun"></span><span class="mountain mountain-a"></span><span class="mountain mountain-b"></span><span class="tour-road"></span><span class="tour-cyclist">' + uiIcon("bus", "tour-bike-icon") + '</span></div>' +
    '<div class="hero-content"><p class="eyebrow"><span>VAMOS ROADTRIP</span> Español · A2/B1</p>' +
    '<h1>Dein Roadtrip.<br><span>Dein Spanisch.</span></h1>' +
    '<p>12 Stopps. Echte Gespräche. Mit dem VW-Bus bis Madrid.</p>' +
    '<div class="race-hud"><span class="hud-motto">' + uiIcon("cocktail", "hud-cocktail-icon") + '</span><span><small>' + escapeHtml(stageThemes[next.id].label) + '</small><strong>' + (nextIndex + 1) + ' · ' + next.city + '</strong></span><b>' + next.km + ' KM</b></div>' +
    '<div class="hero-row"><button class="btn btn-primary btn-race" data-module="' + next.id + '"><span>¡Vámonos!</span><b>→</b></button>' +
    '<div class="mini-progress"><small>' + state.completed.length + '/' + travelModules.length + ' STOPPS</small><div class="progress-track"><div class="progress-fill" style="width:' + progress + '%"></div></div></div></div></div>' +
    '</section>' +
    '<div class="section-head"><div><span class="section-tag">TAGESZIEL · ¡SALUD!</span><h2>Mix dir den Sunset-Cocktail</h2><p>Eine kleine Extrarunde bringt Farbe ins Glas und hält deine Serie am Leben.</p></div></div>' +
    '<div class="daily-card cocktail-card"><span class="daily-icon">' + uiIcon("cocktail", "daily-cocktail-icon") + '</span><span class="daily-copy"><strong>' + (state.dailyXp >= 50 ? "Sunset-Cocktail gemixt!" : "50 XP bis zum Sunset-Cocktail") + '</strong><small>' + state.dailyXp + ' von 50 XP heute · ' + uiIcon("flame", "micro-icon") + ' ' + state.streak + (state.streak === 1 ? " Tag" : " Tage") + '</small></span><span class="circle-progress" style="--value:' + dailyPercent + '%"><span>' + dailyPercent + '%</span></span></div>' +
    '<div class="section-head"><div><span class="section-tag">ROADBOOK · 2.890 KM</span><h2>Deine Bus-Route</h2><p>Jeder Stopp bringt dich sprachlich näher nach Madrid.</p></div><button data-view="learn">Alle Stopps</button></div>' +
    '<div class="route">' + travelModules.map(routeCard).join("") + '</div>';
}

function moduleCard(module, index) {
  const unlocked = isUnlocked(index);
  const complete = state.completed.includes(module.id);
  return '<button class="module-card ' + (!unlocked ? "locked" : "") + '" data-module="' + module.id + '">' +
    '<span class="module-icon">' + stageIcon(module, "stage-svg") + '</span><small>' + module.city + '</small><strong>' + escapeHtml(module.title) + '</strong>' +
    '<p>' + escapeHtml(module.summary) + '</p><span class="module-meta">' + (complete ? "✓ Geschafft" : unlocked ? module.vocab.length + " Wörter · " + module.cloze.length + " Lücken · 3 Dialoge" : "🔒 Noch gesperrt") + '</span></button>';
}

function renderLearn() {
  const labels = { all: "Alle", alltag: "Unterwegs", service: "Service", freizeit: "Small Talk", finale: "Finale" };
  const filtered = travelModules.filter(function (module) { return learnFilter === "all" || module.category === learnFilter; });
  return '<h1 class="page-title">Reisethemen</h1><p class="page-lead">Jeder Stopp führt durch zwei lückenlose Vokabeletappen, Satzgerüste, sechs Lückensätze und drei Dialogszenarien. Im Vertiefungssprint wird anschließend jedes Lernwort aktiv abgefragt.</p>' +
    '<div class="filter-row">' + Object.keys(labels).map(function (key) { return '<button class="chip ' + (learnFilter === key ? "active" : "") + '" data-filter="' + key + '">' + labels[key] + '</button>'; }).join("") + '</div>' +
    '<div class="module-grid">' + filtered.map(function (module) { return moduleCard(module, travelModules.indexOf(module)); }).join("") + '</div>';
}

function renderPractice() {
  const selectedModule = travelModules.find(function (module) { return module.id === practiceModuleId; });
  const scopeLabel = selectedModule ? selectedModule.city : "alle Städte";
  const vocabCount = selectedModule ? selectedModule.vocab.length : travelModules.reduce(function (sum, module) { return sum + module.vocab.length; }, 0);
  const gapCount = selectedModule ? selectedModule.cloze.length : travelModules.reduce(function (sum, module) { return sum + module.cloze.length; }, 0);
  const dialogueCount = selectedModule
    ? selectedModule.conversations.length * 3
    : travelModules.reduce(function (sum, module) { return sum + module.conversations.length * 3; }, 0);
  return '<h1 class="page-title">Freies Training</h1><p class="page-lead">Übe jederzeit und ohne Einfluss auf deinen aktuellen Stopp. Fehler kosten hier keine Herzen.</p>' +
    '<section class="practice-hero"><span class="practice-target">' + uiIcon("flower", "hero-icon") + '</span><div><span class="stage-pill">MODO PRÁCTICA</span><h2>Unsicher? Dreh eine Extrarunde.</h2><p>Wähle eine Stadt oder mische den gesamten Roadtrip.</p></div></section>' +
    '<label class="practice-select-label" for="practiceModule">Trainingsgebiet</label>' +
    '<div class="practice-select-wrap"><span>' + uiIcon("map", "select-icon") + '</span><select id="practiceModule" data-practice-select>' +
      '<option value="all"' + (practiceModuleId === "all" ? " selected" : "") + '>Gesamter Roadtrip · alle Städte</option>' +
      travelModules.map(function (module) { return '<option value="' + module.id + '"' + (practiceModuleId === module.id ? " selected" : "") + '>' + module.city + ' · ' + escapeHtml(module.title) + '</option>'; }).join("") +
    '</select></div>' +
    '<div class="practice-scope">Auswahl: <strong>' + escapeHtml(scopeLabel) + '</strong></div>' +
    '<div class="practice-modes">' +
      '<button class="practice-mode vocab-mode" data-practice-mode="vocab"><span>' + uiIcon("chat", "mode-icon") + '</span><small>WORTSCHATZ</small><strong>Vokabel-Mix</strong><p>Erkennen, erinnern und selbst auf Spanisch schreiben.</p><em>' + vocabCount + ' Wörter · bis zu 24 pro Mix</em></button>' +
      '<button class="practice-mode gap-mode" data-practice-mode="gap"><span>' + uiIcon("pen", "mode-icon") + '</span><small>LÜCKEN</small><strong>Roadtrip-Lückensprint</strong><p>Ergänze fehlende spanische Wörter im Kontext.</p><em>' + gapCount + ' Sätze · dreifacher Umfang</em></button>' +
      '<button class="practice-mode dialogue-mode" data-practice-mode="dialogue"><span>' + uiIcon("target", "mode-icon") + '</span><small>DIALOG</small><strong>Antworttraining</strong><p>Drei Situationen je Stadt: geführt, ergänzt und frei.</p><em>' + dialogueCount + ' Aufgaben verfügbar</em></button>' +
    '</div>';
}

function renderGrammar() {
  return '<h1 class="page-title">Grammatik-Werkstatt</h1><p class="page-lead">Die wichtigsten spanischen A2/B1-Phänomene in sinnvoller Reihenfolge – kurz erklärt und direkt angewendet.</p>' +
    '<section class="grammar-banner"><span class="stage-pill icon-label">' + uiIcon("flower", "micro-icon") + ' ' + grammarModules.length + ' Roadtrip-Labs</span><h2>Mach deinen Bus sprachlich fit.</h2><p>Die Grammatikroute läuft parallel zur Reise. Alle Werkstätten sind jederzeit offen.</p></section>' +
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
    { icon: "trophy", name: "Madrid erreicht", on: state.completed.includes("madrid") }
  ];
  return '<h1 class="page-title">Dein Profil</h1><p class="page-lead">Deine Reise wird ausschließlich auf diesem Gerät gespeichert.</p>' +
    '<section class="profile-hero"><div class="avatar">' + uiIcon("bus", "avatar-icon") + '</div><h1>Roadtripper</h1><p>' + routePercent + '% der Strecke nach Madrid geschafft</p></section>' +
    '<div class="profile-stats"><div class="profile-stat"><strong>' + state.xp + '</strong><small>Gesamt-XP</small></div><div class="profile-stat"><strong>' + state.streak + '</strong><small>Tage Serie</small></div><div class="profile-stat"><strong>' + state.lessonsDone + '</strong><small>Lektionen</small></div></div>' +
    '<div class="section-head"><div><h2>Roadtrip-Patches</h2><p>Neue Erfolge für deinen Bus.</p></div></div>' +
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
        return '<article class="vocab-card"><div class="vocab-main"><strong lang="es">' + escapeHtml(item.fr) + '</strong><span>' + escapeHtml(item.de) + '</span></div><p lang="es">« ' + escapeHtml(item.ex) + ' »</p><div class="example-translation"><small>GANZER SATZ AUF DEUTSCH</small><span>' + escapeHtml(item.exDe) + '</span></div></article>';
      }).join("") + '</div>'
    : '<div class="lesson-note">🧱 Scaffolds sind Satzgerüste: Setze deine eigenen Angaben ein und du kannst sofort ein echtes Gespräch führen.</div>' + module.scaffolds.map(function (item) {
        return '<article class="scaffold-card"><strong lang="es">' + escapeHtml(item.fr) + '</strong><p>' + escapeHtml(item.de) + '</p></article>';
      }).join("");
  return '<div class="detail-head"><button class="back-btn" data-action="back">←</button><div><span class="stage-pill">Stopp ' + (travelModules.indexOf(module) + 1) + ' · ' + module.city + '</span><h1><span class="title-stage-icon">' + stageIcon(module, "stage-svg") + '</span>' + escapeHtml(module.title) + '</h1><p>' + escapeHtml(module.summary) + '</p></div></div>' +
    '<div class="lesson-tabs"><button class="' + (lessonTab === "vocab" ? "active" : "") + '" data-tab="vocab">1 · Vokabeln</button><button class="' + (lessonTab === "scaffolds" ? "active" : "") + '" data-tab="scaffolds">2 · Satzgerüste</button></div>' +
    content + '<div class="lesson-footer"><button class="btn btn-blue btn-block" data-action="' + (lessonTab === "vocab" ? "show-scaffolds" : "start-travel-quiz") + '">' + (lessonTab === "vocab" ? "Weiter zu den Satzgerüsten" : "Spielrunde starten · +70 XP") + '</button></div>';
}

function renderTravelLesson(module) {
  const midpoint = Math.ceil(module.vocab.length / 2);
  const stages = {
    "vocab-a": { number: "1/3", mood: "🌞", name: "Arrancamos", subtitle: "Basiswortschatz für den schnellen Start" },
    "vocab-b": { number: "2/3", mood: "🌻", name: "En la carretera", subtitle: "Aufbauwortschatz für genauere Gespräche" },
    "scaffolds": { number: "3/3", mood: "✌️", name: "Parada libre", subtitle: "Gesprächsgerüste für längere Antworten" }
  };
  const stage = stages[lessonTab] || stages["vocab-a"];
  const dialogueDone = dialogueIsComplete(module.id);
  let content = '<div class="mini-stage-intro"><span>' + stage.mood + '</span><div><small>MINI-TRIP ' + stage.number + '</small><strong>' + stage.name + '</strong><p>' + stage.subtitle + '</p></div></div>';

  if (lessonTab === "scaffolds") {
    content += '<div class="lesson-note">🧱 Jedes vollständige spanische Satzgerüst steht direkt über seiner deutschen Bedeutung. Setze danach deine eigenen Angaben ein.</div>' + module.scaffolds.map(function (item, index) {
        return '<article class="scaffold-card"><span class="content-number">' + (index + 1) + '</span><strong lang="es">' + escapeHtml(item.fr) + '</strong><p>' + escapeHtml(item.de) + '</p></article>';
    }).join("");
    content += '<section class="dialogue-panel ' + (dialogueDone ? "completed" : "") + '"><span class="dialogue-icon">' + uiIcon("chat", "dialogue-svg") + '</span><div><small>CONVERSATION CHALLENGE</small><strong>' + (dialogueDone ? "3 Diálogos geschafft" : "Drei Situationen, drei Schwierigkeitsstufen") + '</strong><p>3 Szenarien · jeweils Multiple Choice → Lücke → freie Antwort</p></div><b>' + (dialogueDone ? "✓" : "9") + '</b></section>';
  } else {
    const start = lessonTab === "vocab-b" ? midpoint : 0;
    const end = lessonTab === "vocab-b" ? module.vocab.length : midpoint;
    const words = module.vocab.slice(start, end);
    content += '<div class="vocab-range"><strong>Wörter ' + (start + 1) + '–' + end + ' von ' + module.vocab.length + '</strong><span>Kein Vorwissen nötig: Jeder Beispielsatz wird vollständig übersetzt.</span></div>' +
      (lessonTab === "vocab-a"
      ? '<div class="lesson-note">💡 ' + escapeHtml(module.tip) + '</div>'
      : '<div class="lesson-note">🌻 Die Nummerierung läuft lückenlos weiter. Sprich den spanischen Satz laut und lies danach seine komplette Bedeutung.</div>') +
      '<div class="vocab-list">' + words.map(function (item, index) {
        return '<article class="vocab-card"><span class="content-number">' + (start + index + 1) + '</span><div class="vocab-main"><strong lang="es">' + escapeHtml(item.fr) + '</strong><span>' + escapeHtml(item.de) + '</span></div><p lang="es">« ' + escapeHtml(item.ex) + ' »</p><div class="example-translation"><small>GANZER SATZ AUF DEUTSCH</small><span>' + escapeHtml(item.exDe) + '</span></div></article>';
      }).join("") + '</div>';
  }

  const nextAction = lessonTab === "vocab-a" ? "show-vocab-b" : lessonTab === "vocab-b" ? "show-scaffolds" : dialogueDone ? "start-travel-quiz" : "start-dialogue";
  const nextLabel = lessonTab === "vocab-a" ? "Mini-Trip 2 · En la carretera" : lessonTab === "vocab-b" ? "Mini-Trip 3 · Parada libre" : dialogueDone ? "Vertiefungssprint starten · kompletter Wortschatz" : "3 Conversation Challenges starten · bis zu 100 XP";
  return '<div class="detail-head"><button class="back-btn" data-action="back">←</button><div><span class="stage-pill">Stopp ' + (travelModules.indexOf(module) + 1) + ' · ' + module.city + '</span><h1><span class="title-stage-icon">' + stageIcon(module, "stage-svg") + '</span>' + escapeHtml(module.title) + '</h1><p>' + escapeHtml(module.summary) + '</p></div></div>' +
    '<div class="lesson-total"><span>' + uiIcon("bus", "micro-icon") + ' 3 Mini-Trips + 3 Dialoge</span><span>' + uiIcon("pen", "micro-icon") + ' ' + module.vocab.length + ' vollständig erklärte Wörter</span><span>' + uiIcon("flower", "micro-icon") + ' ' + module.cloze.length + ' Lückensätze</span></div>' +
    '<div class="lesson-tabs lesson-tabs-three"><button class="' + (lessonTab === "vocab-a" ? "active" : "") + '" data-tab="vocab-a">1 · Arrancamos</button><button class="' + (lessonTab === "vocab-b" ? "active" : "") + '" data-tab="vocab-b">2 · Carretera</button><button class="' + (lessonTab === "scaffolds" ? "active" : "") + '" data-tab="scaffolds">3 · Parada libre</button></div>' +
    content + '<div class="lesson-footer"><button class="btn btn-primary btn-block" data-action="' + nextAction + '">' + nextLabel + '</button></div>';
}

function renderGrammarLesson(module) {
  return '<div class="detail-head"><button class="back-btn" data-action="back">←</button><div><span class="stage-pill">Grammatik-Werkstatt · ' + module.city + '</span><h1><span class="title-stage-icon grammar-title-icon">' + uiIcon("flower", "stage-svg") + '</span>' + escapeHtml(module.title) + '</h1><p>' + escapeHtml(module.level) + ' · ' + escapeHtml(module.summary) + '</p></div></div>' +
    module.theory.map(function (item) { return '<article class="theory-card"><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.text) + '</p><div class="example-box" lang="es">' + escapeHtml(item.example) + '</div><div class="example-translation grammar-example-translation"><small>AUF DEUTSCH</small><span>' + escapeHtml(item.exampleDe) + '</span></div></article>'; }).join("") +
    '<div class="lesson-footer"><button class="btn btn-blue btn-block" data-action="start-grammar-quiz">Werkstatt-Challenge starten · +60 XP</button></div>';
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
  questions.splice(1, 0, { prompt: "Wie sagst du „" + item.de + "“?", hint: "Wähle den spanischen Ausdruck.", options: reverseSet.options, answer: reverseSet.answer, explain: item.de + " = " + item.fr });
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
      prompt: "Schreibe auf Spanisch: „" + item.de + "“",
      hint: "Tippe den spanischen Ausdruck selbst. Akzente werden tolerant bewertet.",
      answers: item.answers || [item.fr],
      answerText: item.fr,
      explain: "Richtig heißt es: " + item.fr
    });
  }
  function addGap(cloze) {
    questions.push({
      type: "gap",
      prompt: cloze.prompt,
      hint: "Fülle die Lücke mit einem spanischen Wort.",
      answers: cloze.answers,
      answerText: cloze.answers[0],
      explain: cloze.explain
    });
  }

  module.vocab.forEach(function (item, index) {
    if (index % 2 === 0) addChoice(item);
    else addTyped(item);
  });
  module.cloze.forEach(addGap);

  [1, 4, 6].forEach(function (index) {
    const scaffold = module.scaffolds[index];
    const scaffoldSet = optionSet(scaffold.de, module.scaffolds.map(function (entry) { return entry.de; }).reverse());
    questions.push({ type: "choice", prompt: "Was bedeutet dieses Satzgerüst?", hint: scaffold.fr, options: scaffoldSet.options, answer: scaffoldSet.answer, explain: scaffold.de });
  });

  const challengeCorrect = module.challenge.options[module.challenge.answer];
  const challengeSet = optionSet(challengeCorrect, module.challenge.options.slice().reverse());
  questions.push({ type: "choice", prompt: module.challenge.prompt, hint: "Wähle die natürlichste Antwort.", options: challengeSet.options, answer: challengeSet.answer, explain: "Genau – so passt die Antwort zur Situation." });
  return { kind: "travel", module: module, questions: questions, index: 0, score: 0, selected: null, typedAnswer: "", correct: null, checked: false };
}

function buildDialogueQuestions(module) {
  const conversations = module.conversations || [module.conversation];
  return conversations.reduce(function (all, conversation, scenarioIndex) {
    const correctChoice = conversation.choice.options[conversation.choice.answer];
    const choiceSet = optionSet(correctChoice, conversation.choice.options.slice().reverse());
    const scenario = "Szenario " + (scenarioIndex + 1) + "/" + conversations.length;
    return all.concat([
      {
        type: "choice",
        prompt: conversation.choice.prompt,
        hint: scenario + " · Runde 1 · Wähle die passendste Antwort.",
        support: conversation.choice.promptDe,
        options: choiceSet.options,
        answer: choiceSet.answer,
        explain: "Diese Antwort passt natürlich zur gestellten Frage."
      },
      {
        type: "gap",
        prompt: conversation.gap.prompt,
        hint: scenario + " · Runde 2 · Ergänze das fehlende spanische Wort.",
        support: conversation.gap.promptDe,
        answers: conversation.gap.answers,
        answerText: conversation.gap.answers[0],
        explain: conversation.gap.explain
      },
      {
        type: "input",
        prompt: conversation.typed.prompt,
        hint: scenario + " · Runde 3 · Formuliere eine vollständige Antwort.",
        support: conversation.typed.promptDe,
        answers: conversation.typed.answers || [conversation.typed.answerText],
        keywords: conversation.typed.keywords,
        minWords: conversation.typed.minWords || 4,
        answerText: conversation.typed.answerText,
        explain: conversation.typed.explain
      }
    ]);
  }, []);
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
    city: practiceModuleId === "all" ? "Gesamter Roadtrip" : modules[0].city,
    title: mode === "vocab" ? "Vokabel-Mix" : mode === "gap" ? "Lückensprint" : "Antworttraining"
  };
  let questions = [];

  if (mode === "vocab") {
    const words = modules.reduce(function (all, module) { return all.concat(module.vocab); }, []);
    const selectedWords = rotatedSample(words, practiceModuleId === "all" ? 24 : words.length);
    selectedWords.forEach(function (item, index) {
      if (index % 2 === 0) {
        const set = optionSet(item.de, words.slice().reverse().map(function (entry) { return entry.de; }));
        questions.push({ type: "choice", prompt: "Was bedeutet „" + item.fr + "“?", hint: "Wähle die deutsche Bedeutung.", options: set.options, answer: set.answer, explain: item.fr + " = " + item.de });
      } else {
        questions.push({ type: "input", prompt: "Schreibe auf Spanisch: „" + item.de + "“", hint: "Tippe den spanischen Ausdruck.", answers: item.answers || [item.fr], answerText: item.fr, explain: "Richtig heißt es: " + item.fr });
      }
    });
  } else if (mode === "gap") {
    const gaps = modules.reduce(function (all, module) { return all.concat(module.cloze); }, []);
    questions = rotatedSample(gaps, practiceModuleId === "all" ? 24 : gaps.length).map(function (gap) {
      return { type: "gap", prompt: gap.prompt, hint: "Ergänze das fehlende spanische Wort.", answers: gap.answers, answerText: gap.answers[0], explain: gap.explain };
    });
  } else {
    const dialogueQuestions = modules.reduce(function (all, module) { return all.concat(buildDialogueQuestions(module)); }, []);
    questions = rotatedSample(dialogueQuestions, practiceModuleId === "all" ? 27 : dialogueQuestions.length);
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
  return '<div class="detail-head"><button class="back-btn" data-action="quit-quiz">×</button><div><span class="stage-pill">' + (quiz.kind === "travel" ? "Stopp-Sprint" : "Grammatik-Sprint") + '</span><h1>' + escapeHtml(title) + '</h1><p>Frage ' + (quiz.index + 1) + ' von ' + quiz.questions.length + '</p></div></div>' +
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
    '<div class="lesson-footer"><button class="btn ' + (quiz.checked ? "btn-blue" : "btn-secondary") + ' btn-block" data-action="' + (quiz.checked ? "next-question" : "check-answer") + '" ' + (quiz.selected === null ? "disabled" : "") + '>' + (quiz.checked ? (quiz.index === quiz.questions.length - 1 ? "Stopp abschließen" : state.hearts === 0 ? "Herzen auffüllen & weiter" : "Weiter") : "Antwort prüfen") + '</button></div>';
}

function renderQuiz() {
  const question = quiz.questions[quiz.index];
  const title = quiz.kind === "travel" || quiz.kind === "dialogue" ? quiz.module.city : quiz.module.title;
  const sprintLabel = quiz.kind === "travel" ? "Stopp-Sprint" : quiz.kind === "dialogue" ? "Conversation Challenge" : quiz.kind === "practice" ? "Freies Training" : "Grammatik-Sprint";
  const finishLabel = quiz.kind === "dialogue" ? "Diálogo abschließen" : quiz.kind === "practice" ? "Training abschließen" : "Stopp abschließen";
  const inputQuestion = isInputQuestion(question);
  let questionTitle = escapeHtml(question.prompt);
  if (question.type === "gap") questionTitle = questionTitle.replace("___", '<span class="gap-slot">•••</span>');

  let answerArea = "";
  if (inputQuestion) {
    const inputState = quiz.checked ? (quiz.correct ? "correct" : "wrong") : "";
    answerArea = '<div class="answer-entry ' + inputState + '"><label for="quizAnswer">Deine Antwort auf Spanisch</label><div class="answer-input-wrap"><span>ES</span><input id="quizAnswer" data-quiz-input type="text" lang="es" inputmode="text" enterkeyhint="done" autocomplete="off" autocapitalize="none" spellcheck="false" value="' + escapeHtml(quiz.typedAnswer || "") + '" placeholder="' + (question.type === "gap" ? "Fehlendes Wort …" : "Spanischen Ausdruck tippen …") + '" ' + (quiz.checked ? "disabled" : "autofocus") + '></div>' +
      (quiz.checked && !quiz.correct ? '<small>Gesuchte Lösung: <b lang="es">' + escapeHtml(question.answerText) + '</b></small>' : '') + '</div>';
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
    (question.support ? '<p class="quiz-support"><b>Sprachhilfe:</b> ' + escapeHtml(question.support) + '</p>' : '') +
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
  const isMadrid = quiz.kind === "travel" && quiz.module.id === "madrid";
  const isDialogue = quiz.kind === "dialogue";
  const isPractice = quiz.kind === "practice";
  const heading = isMadrid ? "¡Madrid erreicht!" : isDialogue ? "¡Diálogo geschafft!" : isPractice ? "Training geschafft!" : quiz.perfect ? "¡Fantástico!" : "Stopp geschafft!";
  const description = isMadrid
    ? "Du hast deinen Sprach-Roadtrip durch Spanien vollendet. Jetzt heißt es: Bus parken, aussteigen und sprechen!"
    : isDialogue
      ? "Du hast eine Antwort erkannt, ergänzt und schließlich vollständig selbst formuliert. Der finale Stopp-Sprint ist jetzt frei."
      : isPractice
        ? "Diese Extrarunde verändert deinen Stopp nicht. Du kannst sie jederzeit wiederholen oder ein anderes Thema wählen."
        : "Du hast neue Wörter und Strukturen für echte Gespräche verankert.";
  const buttonAction = isDialogue ? "complete-dialogue" : isPractice ? "complete-practice" : "complete-home";
  const buttonLabel = isDialogue ? "Zum finalen Stopp-Sprint" : isPractice ? "Weiter frei üben" : isMadrid ? "Meinen Roadtrip ansehen" : "Weiter auf der Route";
  const completeIcon = isMadrid ? "trophy" : isDialogue ? "chat" : isPractice ? "flower" : quiz.perfect ? "trophy" : "bus";
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
      showToast("Dein Roadtrip wurde neu gestartet.");
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
