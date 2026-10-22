// ==========================================
// BANCO GENERATIVO DE DATOS HISTÓRICOS (questions.js)
// Organizado por capítulos y tipos de juego
// ==========================================

const CHAPTER_DATA = {
 1: {
  id: 1,
  title: "Capítol 1: El segle XVIII – El segle de les Llums",
  desc: "Absolutisme borbònic, Decrets de Nova Planta, Despotisme Il·lustrat i la Il·lustració",
  color: "bg-yellow-500",
  available: true,
  timeline: [
    { id: "t0_1", text: "Guerra de Successió Espanyola", year: "???", icon: "fa-shield-halved", exp: "Conflicte internacional i civil després de la mort de Carles II sense descendència [1, 2]." },
    { id: "t0_2", text: "Decrets de Nova Planta", year: "???", icon: "fa-file-signature", exp: "Abolició dels furs i institucions de la Corona d'Aragó i imposició del model centralista de Castella [3]." },
    { id: "t0_3", text: "Reinat de Carles III", year: "???", icon: "fa-crown", exp: "Etapa de Despotisme Il·lustrat amb reformes econòmiques, educatives i d'infraestructures [4, 5]." },
    { id: "t0_4", text: "Independència dels Estats Units", year: "???", icon: "fa-flag", exp: "Nascuda de la insurrecció de les tretze colònies, crea la primera Constitució escrita de la història [6]." },
    { id: "t0_5", text: "Liberalització del comerç amb Amèrica", year: "???", icon: "fa-ship", exp: "Obertura comercial que va beneficiar l'exportació catalana de vins, aiguardents i indianes [3, 4]." }
  ],
  kahoot: [
    {
      type: 'classic',
      question: "Quin monarca borbònic va accedir al tron espanyol després de la Guerra de Successió?",
      options: [
        { text: "Felip V (Felip d'Anjou)", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Carles III", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Ferran VI", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Carles II", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Felip de Anjou (Felip V) es va instaurar com a monarca de la dinastia borbònica a Espanya [1, 2]."
    },
    {
      type: 'slider',
      question: "En quin any es va proclamar la Independència dels Estats Units d'Amèrica?",
      minYear: 1750, maxYear: 1800, targetYear: 1776,
      exp: "L'any 1776 les tretze colònies d'Amèrica del Nord es van independitzar [6]."
    },
    {
      type: 'multi',
      question: "Quins territoris van perdre els seus furs i institucions amb els Decrets de Nova Planta?",
      options: [
        { id: 'k0_1', text: "Catalunya", correct: true },
        { id: 'k0_2', text: "València", correct: true },
        { id: 'k0_3', text: "Aragó", correct: true },
        { id: 'k0_4', text: "País Basc", correct: false }
      ],
      exp: "Es van suprimir els furs de la Corona d'Aragó (Catalunya, Aragó, València i Mallorca), mentre que es van respectar els del País Basc i Navarra [3]."
    },
    {
      type: 'classic',
      question: "Quin era el lema característic del Despotisme Il·lustrat a Europa?",
      options: [
        { text: "Tot per al poble però sense el poble", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Llibertat, Igualtat, Fraternitat", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Déu, Pàtria, Rei i Furs", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "La sobirania resideix en la Nació", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Les monarquies del Despotisme Il·lustrat buscaven reformar l'administració sense modificar les bases de l'Antic Règim [7]."
    },
    {
      type: 'classic',
      question: "Quin pintor va realitzar l'obra 'La tardor o la verema' (1786-1787)?",
      options: [
        { text: "Francisco de Goya", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Jean-Honoré Fragonard", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Francisco Salzillo", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Ramon Martí i Alsina", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Goya va pintar 'La tardor o la verema' entre 1786 i 1787, conservat al Museu del Prado [8]."
    },
    {
      type: 'slider',
      question: "En quins anys va començar el reinat de Carles III a Espanya?",
      minYear: 1740, maxYear: 1800, targetYear: 1759,
      exp: "El reinat de Carles III, exponent del Despotisme Il·lustrat, va anar de 1759 a 1788 [5]."
    },
    {
      type: 'multi',
      question: "Quins productes exportava principalment la burgesia catalana a Amèrica al segle XVIII?",
      options: [
        { id: 'k0_5', text: "Vi i aiguardent", correct: true },
        { id: 'k0_6', text: "Teixits de cotó estampats (indianes)", correct: true },
        { id: 'k0_7', text: "Fruita seca", correct: true },
        { id: 'k0_8', text: "Argent i or", correct: false }
      ],
      exp: "Catalunya exportava vi, aiguardent, fruita seca i indianes, mentre importava sucre, cotó i cacau [4, 9]."
    },
    {
      type: 'classic',
      question: "Com es coneixia als comerciants retornats d'Amèrica amb capital per invertir a la indústria catalana?",
      options: [
        { text: "Indià", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Crioll", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Afrancesat", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Cacique", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La figura de l'indià amb capital repatriat va afavorir el trànsit cap a una economia industrial a Catalunya [4]."
    },
    {
      type: 'multi',
      question: "Quins filòsofs francesos van destacar dins del moviment de la Il·lustració segons les fonts?",
      options: [
        { id: 'k0_9', text: "Montesquieu", correct: true },
        { id: 'k0_10', text: "Voltaire", correct: true },
        { id: 'k0_11', text: "Rousseau", correct: true },
        { id: 'k0_12', text: "Adam Smith", correct: false }
      ],
      exp: "Montesquieu, Voltaire i Rousseau van ser tres grans pensadors de la Il·lustració [8]."
    },
    {
      type: 'classic',
      question: "Quines entitats es van crear per impulsar l'educació, l'agricultura i la indústria local al s. XVIII?",
      options: [
        { text: "Sociedades Económicas de Amigos del País", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Juntes de Defensa", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Gremis d'Artesans", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Tribunals de la Inquisició", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Les Sociedades Económicas de Amigos del País van ser creades per afavorir el desenvolupament econòmic i educatiu [10]."
    },
    {
      type: 'slider',
      question: "En quin any la revolució anglesa va posar fi a la monarquia absoluta d'Estuard?",
      minYear: 1650, maxYear: 1720, targetYear: 1689,
      exp: "L'any 1689 una revolució va instaurar la monarquia parlamentària amb la dinastia Orange [11]."
    },
    {
      type: 'classic',
      question: "Quina d'aquestes característiques NO pertanyia a la societat i economia de l'Antic Règim?",
      options: [
        { text: "Alta mobilitat social basada en els mèrits individuals", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Elevada natalitat i mortalitat", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Societat estamental i privilegis nobiliaris", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Predomini d'activitats agrícoles de subsistència", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La mobilitat social per mèrits era una idea defensada per la Il·lustració, enfront de la immobilitat estamental de l'Antic Règim [12, 13]."
    }
  ],
  xafarderia: {
    id: "segle18",
    title: "La Cort i la Societat del Segle XVIII",
    desc: "Organitza els actors i grups clau de l'època de les Llums i el Despotisme Il·lustrat.",
    center: "Carles III", centerRole: "Monarca Il·lustrat (1759-1788)", icon: "fa-crown", color: "bg-duoYellow text-slate-900",
    slots: [
      { id: "s1", label: "PRIMER BORBÓ", relation: "Instaura el centralisme i els Decrets de Nova Planta", correct: "Felip V", icon: "fa-scroll" },
      { id: "s2", label: "INSTITUCCIÓ REFORMISTA", relation: "Fomenta la instrucció, l'agricultura i la indústria", correct: "Sociedades Económicas", icon: "fa-book" },
      { id: "s3", label: "PENSADORS IL·LUSTRATS", relation: "Critiquen l'Antic Règim i defensen la Raó", correct: "Montesquieu, Voltaire i Rousseau", icon: "fa-lightbulb" },
      { id: "s4", label: "IMPULS CATALÀ", relation: "Inverteixen en la indústria de les indianes i el comerç", correct: "Comerciants i Indians", icon: "fa-ship" }
    ],
    chars: [
      { name: "Felip V", role: "Rei Centralista" },
      { name: "Sociedades Económicas", role: "" },
      { name: "Montesquieu, Voltaire i Rousseau", role: "" },
      { name: "Comerciants i Indians", role: "" }
    ]
  },
  boe: [
    { id: "b0_1", text: "«Queden abolits i sense efecte tots els furs, privilegis i costums de la Corona d'Aragó, reduint-se a les lleis de Castella.»", type: "absolutisme", sub: "Decrets de Nova Planta de Felip V", exp: "Va suposar la fi de les institucions pròpies de Catalunya i la Corona d'Aragó [3]." },
    { id: "b0_2", text: "«Establiment de les Sociedades Económicas de Amigos del País per fomentar l'educació primària, l'agricultura i les indústries.»", type: "moderat", sub: "Reformes de Carles III", exp: "Mesura del Despotisme Il·lustrat per modernitzar l'economia [10]." },
    { id: "b0_3", text: "«Concessió de la llibertat de comerç directe entre els ports peninsulars, inclòs el de Barcelona, i els territoris d'Amèrica.»", type: "progressista", sub: "Mesures econòmiques del s. XVIII", exp: "Impuls clau per a les exportacions catalanes de vi, aiguardent i indianes [3, 4]." },
    { id: "b0_4", text: "«Sostenim com a veritats evidents que tots els homes són creats iguals i dotats de drets inalienables com la vida i la llibertat.»", type: "progressista", sub: "Declaració d'Independència dels EUA (1776)", exp: "Aplicació de les idees de la Il·lustració en un text legislatiu [6]." },
    { id: "b0_5", text: "«Perquè no es pugui abusar del poder, cal que el poder aturi el poder mitjançant la divisió de poders.»", type: "progressista", sub: "Pensament Il·lustrat (Montesquieu)", exp: "Crítica a la monarquia absoluta pròpia de l'Antic Règim [8, 13]." }
  ],
  conecta: [
    { id: "c0_1", left: "Decrets de Nova Planta", right: "Fi de les lleis i institucions de la Corona d'Aragó", exp: "Instauració d'un sistema centralitzador i uniformista com el francés [3]." },
    { id: "c0_2", left: "Carles III", right: "Monarca representant del Despotisme Il·lustrat a Espanya", exp: "Va introduir reformes per modernitzar el país sense canviar l'absolutisme [4, 5]." },
    { id: "c0_3", left: "Indianes", right: "Teixits de cotó estampats produïts a Catalunya", exp: "Producte clau d'exportació cap als mercats d'Amèrica [3, 4]." },
    { id: "c0_4", left: "Montesquieu, Voltaire i Rousseau", right: "Filòsofs de la Il·lustració", exp: "Intel·lectuals que criticaven la societat estamental i defensaven la Raó [8, 14]." }
  ],
  veritat: [
    { id: "v0_1", statement: "Felip V va respectar les Corts i les lleis pròpies de Catalunya després de la Guerra de Successió.", isTrue: false, exp: "Fals! Va abolir els seus furs mitjançant els Decrets de Nova Planta [3]." },
    { id: "v0_2", statement: "Els furs del País Basc i Navarra van ser respectats després dels Decrets de Nova Planta.", isTrue: true, exp: "Veritat! Aquests furs no van ser suprimits [3]." },
    { id: "v0_3", statement: "El Despotisme Il·lustrat es defensava amb el lema 'Tot per al poble però sense el poble'.", isTrue: true, exp: "Veritat! Buscava afavorir la gestió sense donar poder polític al poble [7]." },
    { id: "v0_4", statement: "Durant el reinat de Carles III es va construir un sistema radial de camins amb centre a Madrid.", isTrue: true, exp: "Veritat! Per impulsar les comunicacions interiors [1]." },
    { id: "v0_5", statement: "La Independència dels Estats Units de 1776 va donar lloc a la primera Constitució escrita de la història.", isTrue: true, exp: "Veritat! Basada en el liberalisme i la Il·lustració [6]." },
    { id: "v0_6", statement: "La liberalització del comerç amb Amèrica no va beneficiar gens l'economia catalana.", isTrue: false, exp: "Fals! Va impulsar les exportacions d'indianes i aiguardents [3, 4]." },
    { id: "v0_7", statement: "La Il·lustració defensava la superstició i la intolerància religiosa com a bases de l'Estat.", isTrue: false, exp: "Fals! Promovia l'ús de la Raó i denunciava la superstició [13, 14]." },
    { id: "v0_8", statement: "Carles II va ser el darrer rei espanyol de la casa d'Àustria i va morir sense descendència.", isTrue: true, exp: "Veritat! Això va provocar la Guerra de Successió Espanyola [1, 2]." }
  ],
  motPerdut: {
    title: "El Segle XVIII i la Il·lustració",
    text: "La mort sense fills de ___ va desencadenar la Guerra de Successió. Posteriorment, els pensadors il·lustrats van confiar en la ___ per modernitzar la societat.",
    blanks: [
      { id: "m0_1", answer: "Carles II", options: ["Carles II", "Felip V", "Carles III"] },
      { id: "m0_2", answer: "Raó", options: ["Raó", "superstició", "tradició"] }
    ],
    exp: "La fi de la dinastia Àustria va portar els Borbons i les idees de la Il·lustració [1, 2, 13]."
  }
},
  2: {
  id: 2,
  title: "Capítol 2: Crisi de l'Antic Règim i Guerra del Francès (1808-1814)",
  desc: "Invasió Napoleònica, Guerra de la Independència, resistència popular i Corts de Cadis",
  color: "bg-duoGreen",
  available: true,
  timeline: [
    { id: "t1_1", text: "Tractat de Fontainebleau", year: "???", icon: "fa-file-signature", exp: "Permet el pas de les tropes de Napoleó per Espanya cap a Portugal." },
    { id: "t1_2", text: "Motí d'Aranjuez", year: "???", icon: "fa-hand-fist", exp: "Caiguda de Manuel Godoy i abdicació forçada de Carles IV en Ferran VII." },
    { id: "t1_3", text: "Aixecament del 2 de Maig i Abdicacions de Baiona", year: "???", icon: "fa-fire-flame-curved", exp: "Revolta popular a Madrid i cessió forçada de la corona a Josep I Bonaparte." },
    { id: "t1_4", text: "Batalla de Bailèn", year: "???", icon: "fa-shield-halved", exp: "Primera gran derrota de l'exèrcit napoleònic a camp obert a Europa." },
    { id: "t1_5", text: "Setge de Girona", year: "???", icon: "fa-fort-awesome", exp: "Resistència heroica i tres setges consecutius que van devastar la ciutat de Girona." },
    { id: "t1_6", text: "Convocatòria de les Corts de Cadis", year: "???", icon: "fa-building-columns", exp: "La Junta Suprema Central convoca reunió de diputats liberals i absolutistes a Cadis." },
    { id: "t1_7", text: "Promulgació de 'La Pepa'", year: "???", icon: "fa-scroll", exp: "Aprovació de la primera Constitució liberal d'Espanya el dia de Sant Josep." },
    { id: "t1_8", text: "Tractat de Valençay", year: "???", icon: "fa-handshake", exp: "Napoleó reconeix Ferran VII com a rei d'Espanya i retira les seves tropes." }
  ],
  kahoot: [
    {
      type: 'classic',
      question: "Quin tractat va permetre l'entrada de l'exèrcit de Napoleó a Espanya el 1807?",
      options: [
        { text: "Tractat de Fontainebleau", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Tractat de Valençay", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Conveni de Vergara", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Pau de Basilea", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El Tractat de Fontainebleau (1807) va autoritzar les tropes franceses a creuar Espanya per envair Portugal."
    },
    {
      type: 'slider',
      question: "En quin any es va promulgar 'La Pepa' a les Corts de Cadis?",
      minYear: 1800, maxYear: 1820, targetYear: 1812,
      exp: "La Constitució de Cadis es va promulgar el 19 de març de 1812."
    },
    {
      type: 'multi',
      question: "Quines són característiques clau de la Constitució de Cadis de 1812?",
      options: [
        { id: 'k1_1', text: "Sobirania Nacional", correct: true },
        { id: 'k1_2', text: "Monarquia Absoluta", correct: false },
        { id: 'k1_3', text: "Divisió de Poders", correct: true },
        { id: 'k1_4', text: "Confessionalitat Catòlica", correct: true }
      ],
      exp: "La Pepa defensava la Sobirania Nacional, la Divisió de Poders i mantenia el Catolicisme com a religió oficial."
    },
    {
      type: 'classic',
      question: "Com es coneixia popularment la Constitució de Cadis de 1812?",
      options: [
        { text: "La Pepa", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "La Gloriosa", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "La Pragmàtica", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "La Sanfaina", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Es va anomenar popularment 'La Pepa' perquè es va promulgar la diada de Sant Josep (19 de març)."
    },
    {
      type: 'classic',
      question: "Quin fet del març de 1808 va provocar la caiguda de Godoy i l'abdicació de Carles IV?",
      options: [
        { text: "Motí d'Aranjuez", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Aixecament del 2 de Maig", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Pronunciament de Riego", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Batalla d'Alcolea", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El Motí d'Aranjuez (març de 1808) va forçar la destitució de Godoy i la renúncia de Carles IV en el seu fill Ferran VII."
    },
    {
      type: 'slider',
      question: "En quin any va convocar la Junta Suprema Central les Corts de Cadis?",
      minYear: 1805, maxYear: 1815, targetYear: 1810,
      exp: "Les Corts se van convocar el 1810 davant l'avanç de l'ocupació francesa."
    },
    {
      type: 'multi',
      question: "Quines formes de resistència va utilitzar la població espanyola contra els francesos?",
      options: [
        { id: 'k1_5', text: "Organització en Juntes locals i provincials", correct: true },
        { id: 'k1_6', text: "Tàctica de la guerrilla", correct: true },
        { id: 'k1_7', text: "Setges urbans com Saragossa i Girona", correct: true },
        { id: 'k1_8', text: "Aliança militar amb la Santa Aliança", correct: false }
      ],
      exp: "La població va combatre mitjançant la guerrilla, la resistència en setges urbans i la creació de juntes patriòtiques."
    },
    {
      type: 'classic',
      question: "Quin tractat signat el 1813 va restaurar Ferran VII com a rei legítim d'Espanya?",
      options: [
        { text: "Tractat de Valençay", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Tractat de Fontainebleau", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Pau de Basilea", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Tractat de Utrecht", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Amb el Tractat de Valençay (1813), Napoleó va reconèixer Ferran VII com a rei i va retirar el seu exèrcit."
    },
    {
      type: 'multi',
      question: "Quins grups o posicionaments polítics van existir a Espanya durant la Guerra del Francès?",
      options: [
        { id: 'k1_9', text: "Afrancesats (reformistes il·lustrats)", correct: true },
        { id: 'k1_10', text: "Patriotes absolutistes (servils)", correct: true },
        { id: 'k1_11', text: "Patriotes liberals", correct: true },
        { id: 'k1_12', text: "Carlins furs i religió", correct: false }
      ],
      exp: "Durant la guerra van destacar els afrancesats i el bàndol patriota (dividit entre absolutistes i liberals)."
    },
    {
      type: 'slider',
      question: "En quin any va tenir lloc el devastador setge de Girona pintat per Ramon Martí i Alsina?",
      minYear: 1800, maxYear: 1815, targetYear: 1809,
      exp: "El 1809 Girona va patir el seu tercer setge, provocant la mort de prop del 50% de la població civil."
    },
    {
      type: 'classic',
      question: "Com es coneixia als espanyols il·lustrats que van donar suport al govern de Josep I Bonaparte?",
      options: [
        { text: "Afrancesats", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Servils", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Liberalistes", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Emigrats", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Els afrancesats veien en Josep I la possibilitat de modernitzar Espanya sense excessos revolucionaris."
    },
    {
      type: 'classic',
      question: "Quina va ser la primera gran derrota a camp obert de l'exèrcit napoleònic a Europa (juliol 1808)?",
      options: [
        { text: "Batalla de Bailèn", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Batalla d'Alcolea", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Derrota de Trafalgar", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Guerra Gran", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La Batalla de Bailèn (juliol de 1808) va aturar temporalment l'avanç francès i va obligar Josep I a fugir de Madrid."
    }
  ],
  xafarderia: {
    id: "josep1",
    title: "L'Espanya Napoleònica de Josep I",
    desc: "Organitza el cercle de suport i oposició del germà de Napoleó Bonaparte.",
    center: "Josep I Bonaparte", centerRole: "Rei 'Pepe Botella' (1808-1813)", icon: "fa-user-ninja", color: "bg-duoBlue",
    slots: [
      { id: "s1", label: "GERMÀ EMPERADOR", relation: "Li entrega la corona d'Espanya a Baiona", correct: "Napoleó Bonaparte", icon: "fa-crown" },
      { id: "s2", label: "GENERAL SUPREM", relation: "Comanda la repressió de Madrid el 2 de Maig", correct: "Joaquim Murat", icon: "fa-horse" },
      { id: "s3", label: "SUPORT INTEL·LECTUAL", relation: "Espanyols il·lustrats que recolzen el règim", correct: "Afrancesats", icon: "fa-book" },
      { id: "s4", label: "OPOSICIÓ POPULAR", relation: "S'organitzen en juntes de defensa i guerrilles", correct: "Patriotes Espanyols", icon: "fa-flag" }
    ],
    chars: [
      { name: "Napoleó Bonaparte", role: "" },
      { name: "Joaquim Murat", role: "" },
      { name: "Afrancesats", role: "" },
      { name: "Patriotes Espanyols", role: "" }
    ]
  },
  boe: [
    { id: "b1", text: "«La sobirania resideix essencialment en la Nació, de la qual emanen tots els poders de l'Estat.»", type: "progressista", sub: "Corts de Cadis (1812)", exp: "La sobirania nacional és l'eix fonamental del liberalisme." },
    { id: "b2", text: "«Queda restablert el Sant Ofici de la Inquisició i anul·lada tota l'obra de les Corts de Cadis.»", type: "absolutisme", sub: "Decret de 1814", exp: "Ferran VII va restaurar les institucions de l'Antic Règim." },
    { id: "b3", text: "«Espanyols: la vostra religió, la vostra independència i la vostra integritat seran conservades.»", type: "moderat", sub: "Estatut de Baiona (1808)", exp: "Carta atorgada per Josep I amb caràcter reformista moderat." },
    { id: "b4", text: "«Molts dels espanyols més il·lustres s'havien posat del costat de Josep Bonaparte... La Inquisició s'havia d'abolir.»", type: "moderat", sub: "J. M. Blanco White (1808)", exp: "Testimoni del pensament afrancesat que buscava reformes sense revolució." },
    { id: "b5", text: "«S'aboleixen els senyorius jurisdiccionals, els privilegis feudals i la Inquisició a tot el territori.»", type: "progressista", sub: "Decrets de les Corts de Cadis (1810-1812)", exp: "Mesures legislatives per desmantellar les estructures feudals de l'Antic Règim." }
  ],
  conecta: [
    { id: "c1", left: "Afrancesats", right: "Espanyols il·lustrats que recolzaven Josep I", exp: "Buscaven la modernització d'Espanya mitjançant les reformes napoleòniques." },
    { id: "c2", left: "Guerrilles", right: "Lluita de la població civil armada contra els francesos", exp: "Tàctica de petits atacs ràpids en terreny conegut." },
    { id: "c3", left: "La Pepa", right: "Constitució de Cadis de 1812", exp: "Primera constitució liberal espanyola." },
    { id: "c4", left: "Junta Suprema Central", right: "Govern patriota coordinat durant la guerra", exp: "Assumí el poder en absència del rei Ferran VII." }
  ],
  veritat: [
    { id: "v1_1", statement: "Napoleó va posar el seu germà Josep I com a rei d'Espanya el 1808.", isTrue: true, exp: "Exacte, després de les Abdicacions de Baiona." },
    { id: "v1_2", statement: "La Constitució de Cadis establia la llibertat total de religió.", isTrue: false, exp: "Fals! Declarava la religió catòlica com l'única oficial i permesa." },
    { id: "v1_3", statement: "La Batalla de Bailèn (1808) va ser una victòria francesa.", isTrue: false, exp: "Fals! Va ser la primera gran derrota napoleònica a Europa." },
    { id: "v1_4", statement: "El Tractat de Fontainebleau de 1807 va permetre l'entrada de l'exèrcit francès per envair Portugal.", isTrue: true, exp: "Veritat! Va ser signat per Godoy i Napoleó." },
    { id: "v1_5", statement: "Girona va patir tres setges devastadors durant la Guerra del Francès.", isTrue: true, exp: "Veritat! El setge de 1809 va comportar la mort de prop del 50% de la població civil." },
    { id: "v1_6", statement: "Els afrancesats eren absolutistes que s'oposaven a qualsevol reforma política.", isTrue: false, exp: "Fals! Eren il·lustrats que veien en Josep I la via per reformar Espanya." },
    { id: "v1_7", statement: "La Constitució de 1812 reconeixia la sobirania nacional i la divisió de poders.", isTrue: true, exp: "Veritat! Eren els eixos centrals de l'Estat liberal." },
    { id: "v1_8", statement: "El Tractat de Valençay de 1813 va posar fi a la guerra i va retornar la corona a Ferran VII.", isTrue: true, exp: "Veritat! Napoleó va reconèixer la derrota i va restituir el rei." }
  ],
  motPerdut: {
    title: "Text de les Corts de Cadis",
    text: "Les Corts generals i extraordinàries de la Nació espanyola decreten que la ___ resideix en la Nació i la religió oficial serà la ___.",
    blanks: [
      { id: "m1_1", answer: "sobirania", options: ["sobirania", "monarquia", "dictadura"] },
      { id: "m1_2", answer: "catòlica", options: ["catòlica", "protestant", "laica"] }
    ],
    exp: "La Constitució de 1812 proclamava la sobirania nacional i la confessionalitat catòlica de l'Estat."
  }
},
3: {
  id: 3,
  title: "Capítol 3: La construcció de l'Estat Liberal (1833-1874)",
  desc: "Regències, Regnat d'Isabel II, Desamortitzacions, Moderats vs Progressistes i Sexenni Democràtic",
  color: "bg-duoPurple",
  available: true,
  timeline: [
    { id: "t3_1", text: "Primera Guerra Carlina i Conveni de Bergara", year: "???", icon: "fa-shield-halved", exp: "Conflicte dinàstic i ideològic entre isabelins (liberals) i carlins; acaba amb el pacte entre Espartero i Maroto que manté els furs bascos." },
    { id: "t3_2", text: "Desamortització de Mendizábal i Constitució de 1837", year: "???", icon: "fa-coins", exp: "Expropiació de béns de l'Església per finançar la guerra i aprovació d'una Constitució de caràcter progressista." },
    { id: "t3_3", text: "Creació de la Guàrdia Civil i Dècada Moderada", year: "???", icon: "fa-user-shield", exp: "Fundació de la Guàrdia Civil pel General Narváez per mantenir l'ordre públic al camp i iniciar el domini moderat." },
    { id: "t3_4", text: "Inauguració del primer ferrocarril peninsular", year: "???", icon: "fa-train", exp: "Obertura de la línia Barcelona-Mataró promoguda per Miquel Biada." },
    { id: "t3_5", text: "La Vicalvarada i inici del Bienni Progressista", year: "???", icon: "fa-bolt", exp: "Pronunciament d'O'Donnell que porta Espartero al poder i obre una etapa de reformes profundes." },
    { id: "t3_6", text: "Llei de Ferrocarrils, Desamortització de Madoz i Vaga General", year: "???", icon: "fa-industry", exp: "Aprovació de la legislació econòmica clau i primera vaga general a Espanya (origina a Barcelona per les selfactines)." },
    { id: "t3_7", text: "La Gloriosa Revolució i exili d'Isabel II", year: "???", icon: "fa-flag", exp: "Pronunciament de Topete, Prim i Serrano, batalla d'Alcolea i destronament de la reina Isabel II." },
    { id: "t3_8", text: "Proclamació de la Primera República Espanyola", year: "???", icon: "fa-building-columns", exp: "Les Corts proclamen la República davant l'abdicació d'Amadeu de Savoia; patirà una forta inestabilitat i el cantonalisme." }
  ],
  kahoot: [
    {
      type: 'classic',
      question: "Quin militar progressista va ser regent d'Espanya (1840-1843) i va ordenar el bombardeig de Barcelona el 1842?",
      options: [
        { text: "Baldomero Espartero", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Ramón María Narváez", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Leopoldo O'Donnell", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Joan Prim", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Espartero va governar de forma autoritària i va bombardejar Barcelona el 1842 per sufocar una insurrecció contra la seva política lliurecanvista."
    },
    {
      type: 'slider',
      question: "En quin any es va inaugurar la primera línia de ferrocarril peninsular entre Barcelona i Mataró?",
      minYear: 1830, maxYear: 1870, targetYear: 1848,
      exp: "La línia Barcelona-Mataró va ser inaugurada el 1848, impulsada per Miquel Biada."
    },
    {
      type: 'multi',
      question: "Quines característiques definien el Partit Moderat durant el regnat d'Isabel II?",
      options: [
        { id: 'k3_1', text: "Sobirania compartida entre el Rei i les Corts", correct: true },
        { id: 'k3_2', text: "Sufragi universal masculí", correct: false },
        { id: 'k3_3', text: "Sufragi censatari molt restringit", correct: true },
        { id: 'k3_4', text: "Confessionalitat catòlica de l'Estat", correct: true }
      ],
      exp: "Els moderats defensaven la sobirania compartida, el sufragi censatari restringit i l'Estat confessional catòlic (Constitució de 1845)."
    },
    {
      type: 'classic',
      question: "Quin cos de seguretat va fundar el General Narváez el 1844 per mantenir l'ordre públic al camp?",
      options: [
        { text: "Guàrdia Civil", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Milícia Nacional", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Mossos d'Esquadra", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Sometent", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La Guàrdia Civil va ser creada el 1844 sota el govern moderat de Narváez per garantir la protecció de la propietat privada i l'ordre rural."
    },
    {
      type: 'slider',
      question: "En quin any va tenir lloc la primera Vaga General a Espanya, originada a Barcelona per l'ús de les selfactines?",
      minYear: 1840, maxYear: 1870, targetYear: 1855,
      exp: "L'any 1855 es va produir la primera vaga general a Espanya com a reacció de la classe obrera a la introducció de noves filadores automàtiques."
    },
    {
      type: 'classic',
      question: "Quin ministre progressista va impulsar la llei de desamortització general de béns comunals i municipals el 1855?",
      options: [
        { text: "Pascual Madoz", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Juan de Dios Mendizábal", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Laureà Figuerola", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Práxedes Mateo Sagasta", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Pascual Madoz va aprovar el 1855 la desamortització civil que va privatitzar béns municipals i comunals per finançar el ferrocarril."
    },
    {
      type: 'multi',
      question: "Quins grups polítics d'oposició van signar el Pacte d'Ostende el 1866 per destronar Isabel II?",
      options: [
        { id: 'k3_5', text: "Progressistes", correct: true },
        { id: 'k3_6', text: "Demòcrates", correct: true },
        { id: 'k3_7', text: "Carlins", correct: false },
        { id: 'k3_8', text: "Partit Moderat", correct: false }
      ],
      exp: "El Pacte d'Ostende (1866) va ser una aliança entre progressistes i demòcrates (a la qual s'afegiria la Unió Liberal) per posar fi a la monarquia isabelina."
    },
    {
      type: 'slider',
      question: "En quin any es va promulgar la Constitució democràtica del Sexenni que reconeixia el sufragi universal masculí?",
      minYear: 1860, maxYear: 1880, targetYear: 1869,
      exp: "La Constitució de 1869 va establir per primer cop a Espanya el sufragi universal masculí per a majors de 25 anys i una àmplia declaració de drets."
    },
    {
      type: 'classic',
      question: "Quin príncep italià va regnar com a monarca constitucional a Espanya durant el Sexenni Democràtic (1870-1873)?",
      options: [
        { text: "Amadeu de Savoia", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Lluís Felip d'Orleans", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Leopold de Hohenzollern", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Víctor Manuel II", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Amadeu de Savoia, fill del rei unificador d'Itàlia Víctor Manuel II, va ser triat per les Corts com a rei constitucional el 1870."
    },
    {
      type: 'classic',
      question: "Com es va anomenar el moviment insurreccional republicà radical de 1873 que proclamava cantons independents?",
      options: [
        { text: "Cantonalisme", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Carlisme", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Ludisme", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Bullangues", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El cantonalisme va ser una revolta dels republicans federals intransigents per construir l'estat federal des de baix."
    },
    {
      type: 'slider',
      question: "En quin any el pronunciament del general Martínez Campos a Sagunt va posar fi a la República i va restaurar els Borbons?",
      minYear: 1865, maxYear: 1880, targetYear: 1874,
      exp: "El desembre de 1874 el cop de Martínez Campos va proclamar Alfons XII rei d'Espanya."
    },
    {
      type: 'multi',
      question: "Quins conflictes armats simultanis van patir els governs durant el Sexenni Democràtic (1868-1874)?",
      options: [
        { id: 'k3_9', text: "Primera Guerra de Cuba (Guerra dels Deu Anys)", correct: true },
        { id: 'k3_10', text: "Tercera Guerra Carlina", correct: true },
        { id: 'k3_11', text: "Insurrecció Cantonalista", correct: true },
        { id: "k3_12", text: "Guerra Gran", correct: false }
      ],
      exp: "El Sexenni va estar marcat per la inestabilitat provocada per la guerra a Cuba, la revolta carlina i el cantonalisme."
    }
  ],
  xafarderia: {
    id: "isabel2",
    title: "Els Generals de la Cort d'Isabel II",
    desc: "Relaciona els espadons i polítics principals del regnat d'Isabel II i el Sexenni Democràtic.",
    center: "Isabel II", centerRole: "Reina dels Espanyols (1833-1868)", icon: "fa-gem", color: "bg-duoPurple",
    slots: [
      { id: "s1", label: "GENERAL PROGRESSISTA", relation: "Regent d'Espanya i impulsor del lliurecanvisme", correct: "Baldomero Espartero", icon: "fa-award" },
      { id: "s2", label: "GENERAL MODERAT", relation: "Home fort de la Dècada Moderada i creador de la Guàrdia Civil", correct: "Ramón Mª Narváez", icon: "fa-shield" },
      { id: "s3", label: "LÍDER CENTRISTA", relation: "Fundador de la Unión Liberal i cap de la Vicalvarada", correct: "Leopoldo O'Donnell", icon: "fa-bolt" },
      { id: "s4", label: "GENERAL REVOLUCIONARI", relation: "Líder de 'La Gloriosa' que va buscar un nou rei constitucional", correct: "Joan Prim", icon: "fa-flag" }
    ],
    chars: [
      { name: "Baldomero Espartero", role: "" },
      { name: "Ramón Mª Narváez", role: "" },
      { name: "Leopoldo O'Donnell", role: "" },
      { name: "Joan Prim", role: "" }
    ]
  },
  boe: [
    { id: "b3_1", text: "«La potestat de fer les lleis resideix en les Corts reunides amb el Rei. La sobirania és compartida i la religió catòlica és l'oficial de l'Estat.»", type: "moderat", sub: "Constitució de 1845", exp: "El liberalisme moderat imposa la sobirania compartida entre la Corona i les Corts." },
    { id: "b3_2", text: "«S'estableix el sufragi universal masculí per a tots els ciutadans majors de 25 anys i la llibertat de culte i de premsa.»", type: "progressista", sub: "Constitució democràtica de 1869", exp: "Text fonamental del Sexenni Democràtic que reconeix una ampli ventall de llibertats individuals." },
    { id: "b3_3", text: "«Sa Majestat la Reina Regent convoca la reunió d'Estaments del Regne mitjançant aquesta Carta Atorgada.»", type: "moderat", sub: "Estatut Reial de 1834", exp: "Text de transició moderada concedit per Maria Cristina sense reconèixer la sobirania nacional." },
    { id: "b3_4", text: "«Es declaren en estat de venda tots els béns comunals dels ajuntaments i del clergat per finançar el ferrocarril.»", type: "progressista", sub: "Llei de Desamortització de Madoz (1855)", exp: "Privatització de terres comunals municipals durant el Bienni Progressista." },
    { id: "b3_5", text: "«¡Viva España con honra y sin Borbones! Abajo la tiranía i viva la libertad.»", type: "progressista", sub: "Proclama de la Revolució de 1868 (La Gloriosa)", exp: "Manifest insurreccional signat per Topete, Prim i Serrano que va forçar l'exili d'Isabel II." }
  ],
  conecta: [
    { id: "c3_1", left: "Desamortització de Madoz (1855)", right: "Expropiació i subhasta pública de béns comunals i municipals", exp: "Va buscar recursos per a la Hisenda i finançar la xarxa ferroviària." },
    { id: "c3_2", left: "Abrazo de Vergara (1839)", right: "Pau entre Espartero i Maroto que posa fi a la 1a Guerra Carlina", exp: "Va incloure el compromís de mantenir els furs bascos." },
    { id: "c3_3", left: "Selfactines", right: "Novetes màquines filadores que van originar la Vaga General de 1855", exp: "La protesta obrera a Barcelona va destruir aquestes màquines per por a l'atur." },
    { id: "c3_4", left: "Cantonalisme", right: "Moviment insurreccional de 1873 per implantar la república federal des de baix", exp: "Proclamava cantons independents a ciutats com Cartagena o Màlaga." }
  ],
  veritat: [
    { id: "v3_1", statement: "La Constitució de 1869 va introduir per primer cop a Espanya el sufragi universal masculí.", isTrue: true, exp: "Veritat! Reconeixia el dret a vot a tots els homes majors de 25 anys." },
    { id: "v3_2", statement: "El Conveni de Bergara (1839) va comportar la pèrdua immediata de tots els furs bascos.", isTrue: false, exp: "Fals! El pacte establia la recomanació de mantenir els furs bascos." },
    { id: "v3_3", statement: "La primera línia de ferrocarril a la península va ser la de Madrid-Aranjuez el 1848.", isTrue: false, exp: "Fals! La primera va ser Barcelona-Mataró (1848); Madrid-Aranjuez va ser el 1851." },
    { id: "v3_4", statement: "Durant la Dècada Moderada (1844-1854) es va crear la Guàrdia Civil i es va signar el Concordat de 1851.", isTrue: true, exp: "Veritat! Totes dues van ser mesures clau de l'etapa moderada de Narváez." },
    { id: "v3_5", statement: "Espartero era un general moderat que va reprimir la Vicalvarada de 1854.", isTrue: false, exp: "Fals! Espartero era el líder del Partit Progressista i va assumir el govern del Bienni Progressista." },
    { id: "v3_6", statement: "El Pacte d'Ostende de 1866 tenia com a objectiu destronar Isabel II i democratitzar el país.", isTrue: true, exp: "Veritat! Signat per progressistes i demòcrates a Bèlgica." },
    { id: "v3_7", statement: "Amadeu de Savoia va comptar amb el suport unànime de tots els partits polítics espanyols.", isTrue: false, exp: "Fals! S'hi van oposar carlins, republicans, moderats alfonsins i l'Església." },
    { id: "v3_8", statement: "La Primera República Espanyola (1873-1874) va tenir 4 presidents diferents en menys d'un any.", isTrue: true, exp: "Veritat! Figueras, Pi i Margall, Salmerón i Castelar van succeir-se ràpidament." }
  ],
  motPerdut: {
    title: "La Desamortització i el Ferrocarril",
    text: "Amb la Llei de Ferrocarrils de 1855 i la desamortització de ___, els liberals buscaven recaptar fons per a la Hisenda i fomentar el desenvolupament de la xarxa ___.",
    blanks: [
      { id: "m3_1", answer: "Madoz", options: ["Madoz", "Mendizábal", "Narváez"] },
      { id: "m3_2", answer: "ferroviària", options: ["ferroviària", "agrària", "colonial"] }
    ],
    exp: "La desamortització civil de Madoz (1855) va privatitzar terrenys comunals per finançar la construcció del ferrocarril a Espanya."
  }
},
4: {
  id: 4,
  title: "Capítol 4: El sistema polític de la Restauració Borbònica (1875-1898)",
  desc: "Sistema Canovista, Constitució de 1876, Bipartidisme, Turnisme, Caciquisme i Forces d'Oposició",
  color: "bg-amber-600",
  available: true,
  timeline: [
    { id: "t4_1", text: "Manifest de Sandhurst i cop de Martínez Campos", year: "1874", icon: "fa-scroll", exp: "Alfons XII promet una monarquia constitucional i d'ordre; el pronunciament de Sagunt restaura la dinastia borbònica." },
    { id: "t4_2", text: "Constitució de 1876 i fi de la 3a Guerra Carlina", year: "1876", icon: "fa-building-columns", exp: "Text doctrinari de Cánovas amb sobirania compartida; paral·lelament es derrota militarment el carlisme." },
    { id: "t4_3", text: "Llei Electoral censatària i Concerts Econòmics bascos", year: "1878", icon: "fa-file-signature", exp: "Aprovació del sufragi restrictiu i concessió d'autonomia fiscal al País Basc després de l'abolició foral." },
    { id: "t4_4", text: "Fundació del PSOE per Pablo Iglesias", year: "1879", icon: "fa-users", exp: "Naixement del Partit Socialista Obrer Espanyol a Madrid com a organització de classe." },
    { id: "t4_5", text: "Mort d'Alfons XII i Pacte del Pardo", year: "1885", icon: "fa-crown", exp: "Acord entre Cánovas i Sagasta per consolidar el torn pacífic i protegir la regència de Maria Cristina." },
    { id: "t4_6", text: "Llei d'Associacions i legalització de la UGT", year: "1887-1888", icon: "fa-handshake", exp: "Permet la legalització dels sindicats i partits obrers; escissió integrista del carlisme (Partido Católico Nacional)." },
    { id: "t4_7", text: "Aprovació del Sufragi Universal Masculí", year: "1890", icon: "fa-check-to-slot", exp: "El govern liberal de Sagasta aprova el dret a vot masculí, tot i que el caciquisme en neutralitza l'eficàcia." },
    { id: "t4_8", text: "Fundació de la Unió Republicana", year: "1893", icon: "fa-landmark", exp: "Coalició de les forces republicanes encapçalada per Nicolás Salmerón que aconsegueix representació parlamentària." }
  ],
  kahoot: [
    {
      type: 'classic',
      question: "Qui va ser el principal dissenyador i arquitecte del sistema polític de la Restauració Borbònica?",
      options: [
        { text: "Antonio Cánovas del Castillo", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Práxedes Mateo Sagasta", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Emilio Castelar", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Manuel Ruiz Zorrilla", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Cánovas del Castillo va dissenyar la Constitució de 1876 i el sistema de bipartidisme basat en el model britànic."
    },
    {
      type: 'slider',
      question: "En quin any es va promulgar la Constitució doctrinària que va establir la sobirania compartida entre el Rei i les Corts?",
      minYear: 1865, maxYear: 1890, targetYear: 1876,
      exp: "La Constitució de 1876 va establir les bases legals del règim canovista, mantenint-se en vigor fins al 1923."
    },
    {
      type: 'multi',
      question: "Quines eren característiques doctrinals de la Constitució de 1876?",
      options: [
        { id: 'k4_1', text: "Sobirania compartida entre el Rei i les Corts", correct: true },
        { id: 'k4_2', text: "Confessionalitat catòlica de l'Estat amb tolerància privada", correct: true },
        { id: 'k4_3', text: "Corts bicamerals (Congrés i Senat)", correct: true },
        { id: 'k4_4', text: "Sufragi universal femení", correct: false }
      ],
      exp: "La Constitució de 1876 negava la sobirania nacional pura, atorgava ampli poder al Rei i establia un Estat confessional catòlic."
    },
    {
      type: 'classic',
      question: "Com s'anomenava el procés mitjançant el qual el Ministeri de Governació assignava prèviament les llistes de candidats que havien de guanyar les eleccions?",
      options: [
        { text: "Encasellat", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Caciquisme", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Tupinada / Pucherazo", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Civilisme", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "L'encasellat consistia a 'encaixar' els candidats afins al govern que havia de guanyar les eleccions des de Madrid."
    },
    {
      type: 'slider',
      question: "En quin any van acordar Cánovas i Sagasta el Pacte del Pardo per protegir la regència de Maria Cristina d'Habsburg?",
      minYear: 1875, maxYear: 1895, targetYear: 1885,
      exp: "A la mort d'Alfons XII el 1885, el Pacte del Pardo va garantir la continuïtat del règim i el traspàs pacífic del poder al Partit Liberal."
    },
    {
      type: 'classic',
      question: "Quin líder del Partit Liberal-Fusionista va aprovar el restabliment del Sufragi Universal masculí l'any 1890?",
      options: [
        { text: "Práxedes Mateo Sagasta", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Antonio Cánovas del Castillo", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Francisco Silvela", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Emilio Castelar", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Sagasta va introduir el sufragi universal masculí el 1890, tot i que el caciquisme en va limitar la capacitat de canvi real."
    },
    {
      type: 'multi',
      question: "Quines pràctiques eren habituals en la tupinada o 'pucherazo' per adulterar els resultats electorals?",
      options: [
        { id: 'k4_5', text: "Falsificació del cens incloent electors difunts", correct: true },
        { id: 'k4_6', text: "Coacció, amenaces i compra de vots als districtes rurals", correct: true },
        { id: 'k4_7', text: "Manipulació i canvi d'urnes o actes electorals", correct: true },
        { id: 'k4_8', text: "Control per observadors internacionals", correct: false }
      ],
      exp: "La tupinada o pucherazo abastava les trampes utilitzades pels cacics i governadors civils per assegurar l'elecció del candidat establert."
    },
    {
      type: 'classic',
      question: "Quina organització política socialista va ser fundada a Madrid l'any 1879 per Pablo Iglesias?",
      options: [
        { text: "PSOE (Partit Socialista Obrer Espanyol)", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "UGT (Unió General de Treballadors)", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "FTRE (Federació de Treballadors de la Regió Espanyola)", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Partit Republicà Federal", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El PSOE es va fundar clandestinament el 1879 com a partit d'orientació marxista en defensa de la classe treballadora."
    },
    {
      type: 'slider',
      question: "En quin any es va aprovar la Llei d'Associacions que va permetre la legalització dels sindicats i partits obrers?",
      minYear: 1880, maxYear: 1895, targetYear: 1887,
      exp: "La Llei d'Associacions de 1887 aprovada pels liberals va permetre l'activitat legal d'organitzacions com la UGT (1888)."
    },
    {
      type: 'classic',
      question: "Com es coneixia el mecanisme polític d'alternança pacífica en el govern entre el Partit Conservador i el Partit Liberal?",
      options: [
        { text: "Torn pacífic", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Pacte Federal", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Bipartidisme obert", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Regeneració parlamentària", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El torn pacífic evitava la necessitat de pronunciaments militars fent alternar conservadors i liberals en el poder."
    },
    {
      type: 'multi',
      question: "Quines forces polítiques es trobaven marginades o excloses del sistema dinàstic de la Restauració?",
      options: [
        { id: 'k4_9', text: "Republicans (federals, unitaris, radicals)", correct: true },
        { id: 'k4_10', text: "Carlins i integristes", correct: true },
        { id: 'k4_11', text: "Socialistes i anarquistes", correct: true },
        { id: 'k4_12', text: "Partido Liberal-Conservador", correct: false }
      ],
      exp: "Tots els grups fora dels dos partits dinàstics (conservadors i liberals) quedaven marginats del poder."
    },
    {
      type: 'classic',
      question: "Quin dirigent del Partit Republicà Possibilista va acceptar participar en les institucions del règim de la Restauració?",
      options: [
        { text: "Emilio Castelar", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Francesc Pi i Margall", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Nicolás Salmerón", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Manuel Ruiz Zorrilla", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Emilio Castelar va liderar els possibilistes, defensant l'entrada a les institucions de la monarquia borbònica."
    }
  ],
  xafarderia: {
    id: "restauracio",
    title: "L'Oligarquia i el Turnisme de la Restauració",
    desc: "Organitza els actors del sistema polític dissenyat per Cánovas del Castillo i el poder local.",
    center: "Alfons XII", centerRole: "Rei 'El Pacificador' (1875-1885)", icon: "fa-crown", color: "bg-amber-600 text-white",
    slots: [
      { id: "s1", label: "LÍDER CONSERVADOR", relation: "Arquitecte del sistema, el civilisme i la Constitució de 1876", correct: "Cánovas del Castillo", icon: "fa-shield" },
      { id: "s2", label: "LÍDER LIBERAL", relation: "Pacta el torn pacífic i aprova el Sufragi Universal el 1890", correct: "Mateo Sagasta", icon: "fa-handshake" },
      { id: "s3", label: "REINA REGENT", relation: "Assumeix la regència a la mort del rei (1885-1902)", correct: "Maria Cristina d'Habsburg", icon: "fa-gem" },
      { id: "s4", label: "PODER LOCAL RURAL", relation: "Controla i coacciona el vot als districtes agraris", correct: "El Cacique", icon: "fa-user-tie" }
    ],
    chars: [
      { name: "Cánovas del Castillo", role: "Partido Conservador" },
      { name: "Mateo Sagasta", role: "Partido Liberal" },
      { name: "Maria Cristina d'Habsburg", role: "Reina Regent" },
      { name: "El Cacique", role: "Poder Local Rural" }
    ]
  },
  boe: [
    { id: "b4_1", text: "«En virtut de l'espontània i solemne abdicació de la meva augusta mare... jo sóc l'únic representant del dret monàrquic a Espanya. Només el restabliment de la monarquia constitucional pot posar fi a l'opressió i incertesa.»", type: "moderat", sub: "Manifest de Sandhurst (Alfons de Borbó, 1874)", exp: "Manifest on Alfons XII es presenta com un monarca liberal, constitucional i d'ordre." },
    { id: "b4_2", text: "«La potestat de fer les lleis resideix en les Corts amb el Rei. Les Corts es componen de dos Cossos Colegisladors: el Senat i el Congrés dels Diputats. La religió Catòlica és la de l'Estat.»", type: "moderat", sub: "Constitució de 1876", exp: "Text fonamental del liberalisme doctrinari basat en la sobirania compartida." },
    { id: "b4_3", text: "«Vengo en admitir la dimisión de D. Antonio Cánovas del Castillo... y vengo en nombrar Presidente de mi Consejo de Ministros a D. Práxedes Mateo Sagasta.»", type: "moderat", sub: "Gaceta de Madrid - Pacte del Pardo (1885)", exp: "Decret oficial que exemplifica el funcionament del torn pacífic entre conservadors i liberals." },
    { id: "b4_4", text: "«Entre nosaltres regna la farsa en tota la seva nuesa... Només hi ha un sol elector: el ministre de Governació. Ell prepara, executa i consuma les eleccions... per mitjà de la resurrecció dels morts.»", type: "progressista", sub: "La Campana de Gràcia (Crítica al frau electoral)", exp: "Denúncia de les pràctiques d'adulteració electoral, l'encasellat i el pucherazo." },
    { id: "b4_5", text: "«Defensa del catolicisme, del furisme i de l'autoritat del pretendent carlí, acceptant el nou ordre social però oposant-se a la democràcia liberal.»", type: "absolutisme", sub: "Acta de Loredan - Reorganització carlina (1886)", exp: "Programa redactat per Vázquez de Mella per adaptar el carlisme com a partit d'oposició." }
  ],
  conecta: [
    { id: "c4_1", left: "Encasellat", right: "Assignació prèvia dels candidats a diputat des del Ministeri de Governació", exp: "Llistes de candidats afins al govern confeccionades abans de la votació." },
    { id: "c4_2", left: "Tupinada / Pucherazo", right: "Conjunt de trampes electorals per adulterar el resultat a les urnes", exp: "Incloïa la manipulació d'urnes, la coacció i l'ús de vots de persones mortes." },
    { id: "c4_3", left: "Concerts Econòmics (1878)", right: "Autonomia fiscal atorgada a les províncies basques després de l'abolició foral", exp: "Sistema de pagament anual fix a l'administració central mantingut després de 1876." },
    { id: "c4_4", left: "Pacte del Pardo (1885)", right: "Acord d'alternança pactada entre Cánovas i Sagasta a la mort d'Alfons XII", exp: "Va protegir la regència de Maria Cristina i la continuïtat del règim." }
  ],
  veritat: [
    { id: "v4_1", statement: "La Constitució de 1876 establia la sobirania nacional absoluta i la separació estricta entre Església i Estat.", isTrue: false, exp: "Fals! Establia la sobirania compartida (Rei/Corts) i la confessionalitat catòlica de l'Estat." },
    { id: "v4_2", statement: "En el sistema del turnisme, el rei cridava l'oposició a formar govern i posteriorment es convocaven eleccions per assegurar-ne la majoria.", isTrue: true, exp: "Veritat! El govern fabricava la seva pròpia majoria parlamentària mitjançant l'encasellat i el frau electoral." },
    { id: "v4_3", statement: "El sufragi universal masculí es va restablir l'any 1890 sota el govern liberal de Sagasta.", isTrue: true, exp: "Veritat! Aprovat el 1890, tot i que el caciquisme en limità l'eficàcia democratitzadora." },
    { id: "v4_4", statement: "Després de la derrota de 1876, el carlisme va desaparèixer completament de la vida política espanyola.", isTrue: false, exp: "Fals! Es va reorganitzar com a partit d'oposició (Partit Tradicionalista) i va patir escissions com la del Partido Católico Nacional de Nocedal." },
    { id: "v4_5", statement: "El Partit Socialista Obrer Espanyol (PSOE) va ser fundat per Pablo Iglesias l'any 1879 a Madrid.", isTrue: true, exp: "Veritat! Fundat el 1879 com a partit de classe d'orientació marxista." },
    { id: "v4_6", statement: "El caciquisme exercia la seva principal influència en els grans nuclis urbans industrialitzats.", isTrue: false, exp: "Fals! S'exercia principalment en els districtes rurals i agraris, molt més fàcils de manipular." },
    { id: "v4_7", statement: "La Llei d'Associacions de 1887 va permetre la legalització de sindicats i organitzacions obreres com la UGT.", isTrue: true, exp: "Veritat! Va permetre el desenvolupament legal del moviment obrer." },
    { id: "v4_8", statement: "Cánovas del Castillo buscava evitar l'intervencionisme militar (pronunciaments) establint la supremacia del poder civil.", isTrue: true, exp: "Veritat! El civilisme era un dels pilars fonamentals del disseny canovista." }
  ],
  motPerdut: {
    title: "El Bipartidisme i l'Alternança Pacífica",
    text: "El sistema canovista es basava en el torn pacífic entre el Partit Conservador i el Partit ___, garantit mitjançant l'___ des del Ministeri de Governació.",
    blanks: [
      { id: "m4_1", answer: "Liberal", options: ["Liberal", "Carlista", "Republicà"] },
      { id: "m4_2", answer: "encasellat", options: ["encasellat", "sufragi lliure", "pronunciament"] }
    ],
    exp: "L'encasellat i el pucherazo o tupinada garantien l'alternança establerta entre els dos partits dinàstics."
  }
},
5: {
  id: 5,
  title: "Capítol 5: La Guerra d'Ultramar (1868-1898)",
  desc: "Insurreccions a Cuba i Filipines, la resposta espanyola, les quintes, la intervenció dels EUA i el conflicte bélic",
  color: "bg-blue-800",
  available: true,
  timeline: [
    { id: "t5_1", text: "Guerra dels Deu Anys i Pau de Zanjón", year: "1868-1878", icon: "fa-shield-halved", exp: "Primer gran conflicte independentista a Cuba; es tanca amb la promesa no complerta d'autonomia i amnistia." },
    { id: "t5_2", text: "La Guerra Chiquita", year: "1879", icon: "fa-fire", exp: "Nou intent d'insurrecció cubana frustrat ràpidament per la manca d'armament i suport." },
    { id: "t5_3", text: "Abolició definitiva de l'esclavitud a Cuba", year: "1886", icon: "fa-handshake-angle", exp: "El govern liberal de Sagasta decreta la fi de l'esclavitud a l'illa, mesura retardada per la pressió dels latifundistes." },
    { id: "t5_4", text: "Aranzel Cánovas i creixement de la tensió amb els EUA", year: "1891", icon: "fa-coins", exp: "L'increment de tarifes aranzelàries als productes no peninsulars perjudica el comerç entre Cuba i els EUA." },
    { id: "t5_5", text: "Fundació de la Liga Filipina i del Partido Revolucionario Cubano", year: "1892-1893", icon: "fa-users", exp: "José Rizal organitza el moviment reformista filipí i José Martí encapçala l'independentisme cubà." },
    { id: "t5_6", text: "Inici del 'Grito de Baire' i aixecament del Katipunan", year: "1895-1896", icon: "fa-burst", exp: "Comença la darrera Guerra d'Independència a Cuba i la rebel·lió a Filipines; execució de José Rizal el 1896." },
    { id: "t5_7", text: "Politica de 'Reconcentració' de Weyler i Autonomia de 1897", year: "1896-1897", icon: "fa-tent-arrow-down-to-line", exp: "Dura repressió de Weyler aïllant camperols; el 1897 el general Blanco decreta tardanament l'autonomia de Cuba." },
    { id: "t5_8", text: "Explosió de l'USS Maine i derrotes de Cavite i Santiago", year: "1898", icon: "fa-ship", exp: "L'explosió del cuirassat americà a l'Havana actua de pretext per a la intervenció dels EUA i la desfeta militar espanyola." }
  ],
  kahoot: [
    {
      type: 'classic',
      question: "Quin tractat signat el 1878 va posar fi a la Guerra dels Deu Anys a Cuba prometent amnistia, representació a les Corts i reformes polítiques?",
      options: [
        { text: "Pau de Zanjón", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Tractat de París", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Conveni de Bergara", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Pau de Basilea", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La Pau de Zanjón (1878) va incloure la promesa d'autonomia i la fi de l'esclavitud, tot i que l'incompliment d'aquestes reformes va mantenir el descontentament."
    },
    {
      type: 'slider',
      question: "En quin any va fundar José Martí el 'Partido Revolucionario Cubano' per organitzar la lluita per la independència?",
      minYear: 1885, maxYear: 1898, targetYear: 1893,
      exp: "José Martí va fundar el Partido Revolucionario Cubano el 1893 per unificar els diferents cabdills i aconseguir el reconeixement exterior."
    },
    {
      type: 'multi',
      question: "Quines eren les principals reivindicacions del 'Partido Autonomista' crioll a Cuba després de 1878?",
      options: [
        { id: 'k5_1', text: "Autonomia política i administrativa per a l'illa", correct: true },
        { id: 'k5_2', text: "Llibertat de comerç i reformes econòmiques", correct: true },
        { id: 'k5_3', text: "Representació parlamentària a les Corts espanyoles", correct: true },
        { id: 'k5_4', text: "Manteniment estricte de l'esclavitud i del proteccionisme", correct: false }
      ],
      exp: "El Partido Autonomista (format per criolls) demanava autonomia i llibertat comercial, enfront de la Unión Constitucional (peninsulars latifundistes)."
    },
    {
      type: 'classic',
      question: "Quina mesura econòmica aprovada pel govern espanyol el 1891 va agreujar el conflicte en perjudicar les exportacions de sucre cubà als EUA?",
      options: [
        { text: "Aranzel Cánovas (pujada de tarifes aranzelàries)", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Llei de Desamortització de Madoz", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Supressió del Concordat", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Impost del Tancament de Caixes", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "L'aranzel de 1891 impedia la lliure entrada de productes nord-americans a Cuba, provocation la protesta del president McKinley i l'amenaça de tancar el mercat al sucre cubà."
    },
    {
      type: 'slider',
      question: "En quin any va tenir lloc el 'Grito de Baire', l'aixecament generalitzat que va donar inici a la darrera Guerra d'Independència cubana?",
      minYear: 1888, maxYear: 1898, targetYear: 1895,
      exp: "El 'Grito de Baire' (febrer de 1895) va iniciar la insurrecció armada organitzada per José Martí."
    },
    {
      type: 'classic',
      question: "Quin general espanyol va aplicar a Cuba la polèmica tàctica de la 'reconcentració' de camperols, provocant una altíssima mortalitat civil?",
      options: [
        { text: "Valeriano Weyler", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Arsenio Martínez Campos", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Ramón Blanco", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Camilo Polavieja", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El general Weyler va obligar la població rural a recloure's en poblacions tancades per aïllar els rebels, causant fam i epidèmies."
    },
    {
      type: 'multi',
      question: "Quines causes explicaven l'altíssima mortalitat entre els soldats espanyols enviats a combatre a la Guerra d'Ultramar?",
      options: [
        { id: 'k5_5', text: "Impacte de malalties tropicals com la febre groga i la malària", correct: true },
        { id: 'k5_6', text: "Mal aprovisionament, galetes fets a malbé i manca de pertrets", correct: true },
        { id: 'k5_7', text: "Llevat de nois joves sense entrenament ni preparació militar", correct: true },
        { id: 'k5_8', text: "Ús massiu d'aviació de combat per part dels insurgents", correct: false }
      ],
      exp: "La majoria de les baixes espanyoles no van ser per combat directe, sinó per les penoses condicions d'higiene, alimentació i les malalties tropicals."
    },
    {
      type: 'classic',
      question: "Com es podia evitar el servei militar obligatori (les quintes) en l'exèrcit espanyol a finals del segle XIX?",
      options: [
        { text: "Pagant la redempció en metàl·lic (1.500 pessetes)", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Demostrant coneixements d'anglès", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Inscrivint-se al Partit Conservador", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Acreditant la condició de propietari d'indianes", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La redempció en metàl·lic (1.500 pessetes) permetia a les famílies riques lliurar els seus fills de la guerra, provocant la indignació de les classes populars."
    },
    {
      type: 'slider',
      question: "En quin any es va produir la insurrecció a les Filipines encapçalada per l'organització radical Katipunan i l'execució de José Rizal?",
      minYear: 1890, maxYear: 1900, targetYear: 1896,
      exp: "El 1896 la rebel·lió es va estendre per la província de Manila i el govern espanyol va condemnar a mort el reformista José Rizal."
    },
    {
      type: 'classic',
      question: "Quin esdeveniment febrer de 1898 al port de l'Havana va servir de pretext directe als EUA per declarar la guerra a Espanya?",
      options: [
        { text: "Explosió del cuirassat USS Maine", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Hundiment del creuer Vizcaya", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Batalla naval de Cavite", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Aixecament del Katipunan", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "L'explosió de l'USS Maine (260 morts) va ser utilitzada per la premsa nord-americana ('periodisme groc') per culpar Espanya i exigir la intervenció."
    },
    {
      type: 'multi',
      question: "Quina va ser l'actitud dels diferents sectors socials i polítics a Catalunya davant la Guerra de Cuba?",
      options: [
        { id: 'k5_9', text: "El Foment del Treball i les elits econòmiques van defensar l'espanyolitat per protegir el mercat colonial", correct: true },
        { id: 'k5_10', text: "Les classes populars es van oposar a la guerra pel xoc social del sistema de quintes", correct: true },
        { id: 'k5_11', text: "Republicans federals (Pi i Margall) i socialistes (Pablo Iglesias) es van oposar al conflicte", correct: true },
        { id: 'k5_12', text: "Tots els partits catalans van donar suport incondicional a la reconcentració de Weyler", correct: false }
      ],
      exp: "Mentre les elits burgeses defensaven els seus interessos comercials, les classes populars i l'esquerra denunciaven el sacrifici injust dels soldats."
    },
    {
      type: 'classic',
      question: "Quines dues grans derrotes navals d'Espanya el 1898 van decidir el resultat de la Guerra Hispano-Nord-americana?",
      options: [
        { text: "Cavite (Filipines) i Santiago de Cuba", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Trafalgar i Bailèn", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Alcolea i Sagunt", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Luchana i Manila", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La destrucció de l'esquadra espanyola a Cavite (maig 1898) i a Santiago de Cuba (juliol 1898) va obligar Espanya a demanar l'armistici."
    }
  ],
  xafarderia: {
    id: "ultramar",
    title: "Els Protagonistes de la Guerra d'Ultramar",
    desc: "Identifica els líders militars, polítics i independentistes del conflicte a Cuba, Filipines i els EUA.",
    center: "José Martí", centerRole: "Líder de la Independència Cubana (1853-1895)", icon: "fa-flag", color: "bg-red-700 text-white",
    slots: [
      { id: "s1", label: "GENERAL DE LA RECONCENTRACIÓ", relation: "Aplica la tàctica de recloure camperols en poblacions aïllades", correct: "Valeriano Weyler", icon: "fa-skull" },
      { id: "s2", label: "GENERAL DE L'AUTONOMIA", relation: "Decreta el 1897 el sufragi universal i l'autogovern cubà", correct: "Ramón Blanco", icon: "fa-scroll" },
      { id: "s3", label: "REFORMISTA FILIPÍ", relation: "Fundador de la Liga Filipina executat per les autoritats el 1896", correct: "José Rizal", icon: "fa-book" },
      { id: "s4", label: "PRESIDENT NORD-AMERICÀ", relation: "Envia l'ultimàtum i aprova la intervenció militar dels EUA", correct: "William McKinley", icon: "fa-building-flag" }
    ],
    chars: [
      { name: "Valeriano Weyler", role: "General Espanyol" },
      { name: "Ramón Blanco", role: "General Conciliador" },
      { name: "José Rizal", role: "Intel·lectual Filipí" },
      { name: "William McKinley", role: "President dels EUA" }
    ]
  },
  boe: [
    { id: "b5_1", text: "«Queda concedida una àmplia amnistia als insurgents, l'abolició progressiva de l'esclavitud i la promès d'atorgar a Cuba la mateixa representació a les Corts i autonomia que a Puerto Rico.»", type: "moderat", sub: "Pau de Zanjón (1878)", exp: "Acord d'armistici negociat pel general Martínez Campos per posar fi a la Guerra dels Deu Anys." },
    { id: "b5_2", text: "«Tots els habitants del camp hauran de reconcentrar-se en els pobles ocupats per les tropes en el terme de vuit dies. Passat el termini, tot individu que es trobi al camp serà considerat rebel.»", type: "absolutisme", sub: "Bando de Reconcentració del General Weyler (1896)", exp: "Mesura de guerra dràstica per tallar els subministraments i el suport rural als mambisos independentistes." },
    { id: "b5_3", text: "«Da tristeza comprobar en qué estado llegan las expediciones españolas. Son chavales de quince y dieciséis años que nunca han empuñado un fusil... El reclutamiento es forzoso, no han podido pagar las mil quinientas pesetas de la redención.»", type: "progressista", sub: "Manuel Leguineche / Testimoni de les Quintes", exp: "Denúncia de la desigualtat social del sistema de lleves que enviava només els joves de les classes populars a la guerra." },
    { id: "b5_4", text: "«El mal estado de la tropa se debe en parte a la dieta: galletas mohosas, cuerpos podridos... El insecto claviger, portador de la malaria, mortificaba a los soldados en la manigua. Santiago Ramón y Cajal levantaba acta de los peligros que acechaban.»", type: "progressista", sub: "Santiago Ramón y Cajal (Doctor Militar a Cuba)", exp: "Relat d'un metge militar sobre el deliri, la malària i les condicions insalubres que van delmar l'exèrcit espanyol." },
    { id: "b5_5", text: "«Se decreta l'Autonomia de la Illa de Cuba: s'estableix la igualtat de drets polítics entre insulars i peninsulars, l'autonomia aranzelària i el sufragi universal masculí.»", type: "progressista", sub: "Reial Decret d'Autonomia (General Ramón Blanco, 1897)", exp: "Intents desesperats de reforma del govern liberal de Sagasta per frenar la intervenció imminent dels EUA." }
  ],
  conecta: [
    { id: "c5_1", left: "Reconcentració de Weyler", right: "Aïllament forçós de camperols en poblacions tancades", exp: "Tàctica militar repressiva que va causar milers de morts per fam i epidèmies." },
    { id: "c5_2", left: "Katipunan", right: "Organització clandestina radical que va iniciar la insurrecció armada a Filipines", exp: "Grup independentista filipí que es va oposar al domini espanyol el 1896." },
    { id: "c5_3", left: "Sistema de Quintes", right: "Reclutament forçós obligatori del qual només s'eximien les classes altes pagant 1.500 pessetes", exp: "Generà un profund sentiment antimilitarista entre la població treballadora." },
    { id: "c5_4", left: "Cuirassat USS Maine", right: "Va explotar al port de l'Havana el febrer de 1898 servint de pretext als EUA per declarar la guerra", exp: "L'esdeveniment va ser utilitzat per la premsa groga nord-americana per justificar la intervenció." }
  ],
  veritat: [
    { id: "v5_1", statement: "La Pau de Zanjón (1878) va posar fi a la Guerra dels Deu Anys prometent l'abolició de l'esclavitud i reformes autònomes.", isTrue: true, exp: "Veritat! Signat per Martínez Campos, tot i que moltes promeses no es van complir." },
    { id: "v5_2", statement: "La Guerra Chiquita (1879) va aconseguir la independència immediata de Cuba gràcies al suport dels EUA.", isTrue: false, exp: "Fals! Va ser una insurrecció ràpidament derrotada per la falta d'armament i suport." },
    { id: "v5_3", statement: "L'aranzel de 1891 imposat per Espanya dificultava el comerç entre Cuba i els EUA, principal comprador del sucre cubà.", isTrue: true, exp: "Veritat! Aquesta mesura proteccionista va provocar la protesta formal del president McKinley." },
    { id: "v5_4", statement: "El general Valeriano Weyler va pacificar Cuba el 1896 decretant l'autonomia immediata i el lliure comerç.", isTrue: false, exp: "Fals! Weyler va aplicar la dura tàctica de la reconcentració; l'autonomia la va decretar el general Ramón Blanco el 1897." },
    { id: "v5_5", statement: "Les classes populars peninsulars s'oposaven a la guerra a causa de la injustícia de les quintes i l'altíssima mortalitat per malalties.", isTrue: true, exp: "Veritat! Els joves pobres no podien pagar la redempció de 1.500 pessetes i morien massivament de febre groga i malària." },
    { id: "v5_6", statement: "José Rizal va liderar el grup armat extremista Katipunan des de l'inici de la rebel·lió a Filipines.", isTrue: false, exp: "Fals! Rizal va fundar la Liga Filipina (de caràcter reformista i pacífic); el Katipunan era l'organització radical insurreccional." },
    { id: "v5_7", statement: "L'explosió del cuirassat USS Maine al port de l'Havana el febrer de 1898 va servir de pretext directe als EUA per a la intervenció militar.", isTrue: true, exp: "Veritat! La premsa nord-americana va acusar Espanya i el president McKinley va enviar l'ultimàtum." },
    { id: "v5_8", statement: "La burgesia industrial catalana es va oposar a la Guerra de Cuba des del primer moment per solidaritat amb els rebels.", isTrue: false, exp: "Fals! Al començament entitats com Foment del Treball defensaven l'espanyolitat de l'illa per mantenir el mercat reservat als seus teixits." }
  ],
  motPerdut: {
    title: "La Insurrecció i la Intervenció dels EUA",
    text: "L'any 1895 el 'Grito de Baire' va iniciar la guerra a Cuba organitzada per José Martí. La dura repressió del general ___ i la posterior explosió del cuirassat ___ van accelerar la intervenció militar dels Estats Units.",
    blanks: [
      { id: "m5_1", answer: "Weyler", options: ["Weyler", "Martínez Campos", "Espartero"] },
      { id: "m5_2", answer: "Maine", options: ["Maine", "Cavite", "Vizcaya"] }
    ],
    exp: "La reconcentració de Weyler i l'enigmàtica explosió de l'USS Maine a l'Havana el 1898 van desencadenar la intervenció directa dels EUA."
  }
},
6: {
  id: 6,
  title: "Capítol 6: El Desastre del 98 i el Regeneracionisme (1898-1902)",
  desc: "Conseqüències morals, econòmiques i polítiques de la pèrdua de les colònies, el Regeneracionisme i la Generació del 98",
  color: "bg-stone-700",
  available: true,
  timeline: [
    { id: "t6_1", text: "Tractat de París i impacte del 'Desastre'", year: "1898", icon: "fa-dumpster-fire", exp: "Espanya assumeix la pèrdua de Cuba, Puerto Rico i Filipines, desencadenant una profunda crisi moral i ideològica." },
    { id: "t6_2", text: "Publicació de l'Oda a Espanya de Joan Maragall", year: "1898", icon: "fa-scroll", exp: "El poeta català expressa el dolor pel sacrifici inútil dels joves i el distanciament respecte a la política centralista." },
    { id: "t6_3", text: "Manifest Regeneracionista del General Polavieja", year: "1898-1899", icon: "fa-pen-to-square", exp: "Intent de reforma de l'administració pública i descentralització des del govern conservador de Silvela." },
    { id: "t6_4", text: "Reforma fiscal de Villaverde i Tancament de Caixes", year: "1899", icon: "fa-store-slash", exp: "Vaga de tributs dels comerciants de Barcelona, encapçalada per l'alcalde Bartomeu Robert, contra els impostos de la guerra." },
    { id: "t6_5", text: "Venda de les darreres illes del Pacífic a Alemanya", year: "1899", icon: "fa-earth-oceania", exp: "Espanya ven les illes Marianes, Carolines i Palau a l'Imperi Alemany, posant fi definitivament a l'imperi colonial." },
    { id: "t6_6", text: "Repatriació de capitals i reconversió econòmica", year: "1900", icon: "fa-vault", exp: "El retorn dels capitals colonials finança la creació de nous bancs i la modernització industrial a la Península." },
    { id: "t6_7", text: "Publicació d'Oligarquía y Caciquismo de Joaquín Costa", year: "1901", icon: "fa-book-open", exp: "Obra cabdal del Regeneracionisme que proposa la reforma educativa i agrària sota el lema 'Escola i Rebost'." },
    { id: "t6_8", text: "Consolidació de la Generació del 98 i del catalanisme polític", year: "1901-1902", icon: "fa-brain", exp: "Intel·lectuals (Unamuno, Baroja, Machado) i forces com la Lliga Regionalista emergeixen com a alternativa al buit del 98." }
  ],
  kahoot: [
    {
      type: 'classic',
      question: "Quina va ser la naturalesa principal de la crisi generada a Espanya arran de la pèrdua de les darreres colònies l'any 1898?",
      options: [
        { text: "Una crisi moral, ideològica i de prestigi internacional", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Un col·lapse econòmic permanent i fallida immediata de l'Estat", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Una revolució social immediata que va destronar la monarquia", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Una invasió militar immediata per part de les potències europees", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El Desastre del 98 va ser fonamentalment una crisi moral i de destrucció del mite de l'imperi, presentant Espanya com una 'nació moribunda'."
    },
    {
      type: 'slider',
      question: "En quin any es va produir el 'Tancament de Caixes', la vaga de tributs dels comerciants de Barcelona contra la puja d'impostos de la postguerra?",
      minYear: 1890, maxYear: 1905, targetYear: 1899,
      exp: "El Tancament de Caixes va tenir lloc el 1899 com a protesta contra la Reforma Fiscal del ministre Fernández Villaverde."
    },
    {
      type: 'multi',
      question: "Quines van ser les principals conseqüències econòmiques immediates del Desastre del 98 a la Península?",
      options: [
        { id: 'k6_1', text: "Pèrdua dels mercats reservats per als teixits catalans i la farina castellana", correct: true },
        { id: 'k6_2', text: "Devaluació de la peseta i fort deute de guerra", correct: true },
        { id: 'k6_3', text: "Encariment dels productes importats", correct: true },
        { id: 'k6_4', text: "Hiperinflació irrecuperable durant dècades", correct: false }
      ],
      exp: "La pèrdua dels mercats coloniar va afectar exportacions clau i va augmentar el deute, tot i que la Hisenda es va recuperar ràpidament a mitjà termini."
    },
    {
      type: 'classic',
      question: "Quin intel·lectual regeneracionista va encunyar el famós lema «Escola i Rebost» per defensar la modernització educativa i agrària?",
      options: [
        { text: "Joaquín Costa", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Miguel de Unamuno", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Francisco Giner de los Ríos", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Joan Maragall", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "Joaquín Costa va ser el màxim exponent del Regeneracionisme, reclamant alfabetització ('escola') i desenvolupament econòmic/agrari ('rebost')."
    },
    {
      type: 'slider',
      question: "En quin any va vendre el govern espanyol a l'Imperi Alemany les darreres possessions insulars del Pacífic (Carolines, Marianes i Palau)?",
      minYear: 1895, maxYear: 1905, targetYear: 1899,
      exp: "L'any 1899, incapacitada per defensar-les, Espanya va vendre els arxipèlags del Pacífic a Alemanya."
    },
    {
      type: 'classic',
      question: "Quin general i ministre de la Guerra del govern de Silvela va redactar un Manifest el 1898 proposant reformes regeneracionistes i certa descentralització?",
      options: [
        { text: "Camilo Polavieja", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Valeriano Weyler", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Arsenio Martínez Campos", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Fernando Primo de Rivera", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El general Camilo Polavieja va impulsar un intent regeneracionista des del govern conservador, tot i que va fracassar al cap de pocs mesos."
    },
    {
      type: 'multi',
      question: "Quins grups polítics de l'oposició van intensificar les seves crítiques contra l'exèrcit i el sistema dinàstic arran del Desastre del 98?",
      options: [
        { id: 'k6_5', text: "Republicans", correct: true },
        { id: 'k6_6', text: "Socialistes", correct: true },
        { id: 'k6_7', text: "Nacionalistes i catalanistes", correct: true },
        { id: 'k6_8', text: "Partit Liberal-Conservador", correct: false }
      ],
      exp: "Les forces de l'oposició van utilitzar la derrota colonial per denunciar la corrupció del tornisme i la ineficàcia de l'exèrcit."
    },
    {
      type: 'classic',
      question: "Quin nom rep el grup literari d'intel·lectuals (Baroja, Unamuno, Machado, Azorín) que va analitzar amb pessimitme el 'problema d'Espanya'?",
      options: [
        { text: "Generació del 98", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Generació del 27", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Noucentisme", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Krausistes de la Restauració", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La Generació del 98 va reflexionar sobre l'endarreriment històric d'Espanya i la necessitat d'una regeneració cultural i moral."
    },
    {
      type: 'slider',
      question: "En quin any va escriure Joan Maragall el seu famós poema 'Oda a Espanya', denunciant la sang abocada inútilment a les guerres colonials?",
      minYear: 1890, maxYear: 1905, targetYear: 1898,
      exp: "Joan Maragall va escriure l'Oda a Espanya l'any 1898 com a reacció directa al Desastre i al retorn dels soldats indisposats."
    },
    {
      type: 'classic',
      question: "Quina institució pedagògica fundada per Francisco Giner de los Ríos el 1876 va ser el referent educatiu del moviment regeneracionista?",
      options: [
        { text: "Institución Libre de Enseñanza", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "Residencia de Estudiantes", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "Ateneu Barcelonès", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "Escola del Treball", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "La Institución Libre de Enseñanza (basada en el krausisme) va defensar la modernització pedagògica i científica davant el dogmatisme."
    },
    {
      type: 'multi',
      question: "Quins efectes positius va tenir la repatriació de capitals colonials sobre l'economia peninsular a principis del segle XX?",
      options: [
        { id: 'k6_9', text: "Creació de nous bancs i entitats financeres", correct: true },
        { id: 'k6_10', text: "Finançament de noves indústries i empreses", correct: true },
        { id: 'k6_11', text: "Reducció del deute públic i moderació de la inflació", correct: true },
        { id: 'k6_12', text: "Abolició de tots els impostos directes", correct: false }
      ],
      exp: "La repatriació de capitals repatriats pels 'indians' i empresaris va permetre una ràpida recuperació financera i la renovació del teixit productiu."
    },
    {
      type: 'classic',
      question: "Quina conseqüència política clau va derivar de la protesta del Tancament de Caixes a Catalunya l'any 1899?",
      options: [
        { text: "El viratge de la burgesia catalana cap al catalanisme polític organitzat", color: "bg-duoGreen hover:bg-green-600 border-duoGreenDark text-white", correct: true },
        { text: "L'abrogació de la Constitució de 1876 a tot l'Estat", color: "bg-duoBlue hover:bg-blue-600 border-duoBlueDark text-white", correct: false },
        { text: "La proclamació immediata de la República Catalana", color: "bg-duoRed hover:bg-red-600 border-duoRedDark text-white", correct: false },
        { text: "El retorn de les lleis de la Corona d'Aragó", color: "bg-duoYellow hover:bg-amber-500 border-duoYellowDark text-slate-900", correct: false }
      ],
      exp: "El desengany amb els partits dinàstics va fer que la burgesia catalana apostés per noves opcions autonomistes com la Lliga Regionalista (1901)."
    }
  ],
  xafarderia: {
    id: "desastre98",
    title: "La Reacció Intel·lectual i Política al Desastre del 98",
    desc: "Identifica els actors que van analitzar i protestar davant la pèrdua de l'imperi colonial.",
    center: "Joaquín Costa", centerRole: "Líder del Regeneracionisme", icon: "fa-lightbulb", color: "bg-stone-700 text-white",
    slots: [
      { id: "s1", label: "REFORMISTA MILITAR", relation: "Promou un manifest regeneracionista i descentralitzador el 1898", correct: "Camilo Polavieja", icon: "fa-pen-to-square" },
      { id: "s2", label: "PEDAGOG KRAUSISTA", relation: "Fundador de la Institución Libre de Enseñanza per modernitzar la cultura", correct: "Giner de los Ríos", icon: "fa-graduation-cap" },
      { id: "s3", label: "POETA CATALÀ", relation: "Denuncia el sacrifici inútil dels joves a l'Oda a Espanya", correct: "Joan Maragall", icon: "fa-feather" },
      { id: "s4", label: "ALCALDE PROTESTATARI", relation: "Encapçala la vaga de tributs del Tancament de Caixes a Barcelona", correct: "Bartomeu Robert", icon: "fa-building-user" }
    ],
    chars: [
      { name: "Camilo Polavieja", role: "General Reformista" },
      { name: "Giner de los Ríos", role: "Pedagog de la ILE" },
      { name: "Joan Maragall", role: "Poeta i Intel·lectual" },
      { name: "Bartomeu Robert", role: "Alcalde de Barcelona" }
    ]
  },
  boe: [
    { id: "b6_1", text: "«Tres són els components d'aquest sistema ruïnós: els oligarques, els cacics i el governador civil. Cal desfer aquesta farsa, cal escola i despensa per regenerar la Nació.»", type: "progressista", sub: "Joaquín Costa - Oligarquía y Caciquismo (1901)", exp: "Anàlisi central del Regeneracionisme denunciant que el frau electoral impedeix la modernització d'Espanya." },
    { id: "b6_2", text: "«Es fa necessària una regeneració política, la reforma de l'administració pública i una certa descentralització administrativa que retorni la vitalitat a les províncies.»", type: "moderat", sub: "General Camilo Polavieja - Manifest de 1898", exp: "Proposta de reforma des del sector conservador per evitar la fallida total del règim després de la derrota." },
    { id: "b6_3", text: "«On són els barcos? On són els fills? Pregunta-ho al Ponent i a l'ona brava: tot ho perderes, no tens ningú. Espanya, Espanya, retorna en tu... Adeu, Espanya!»", type: "progressista", sub: "Joan Maragall - Oda a Espanya (1898)", exp: "Poema insígnia de la intel·lectualitat catalana denunciant el sacrifici inútil de les quintes i el tancament d'etapa." },
    { id: "b6_4", text: "«Els militars van desenvolupar un fort sentiment corporatiu, atribuint la responsabilitat del Desastre als polítics i convencent-se que havien de tenir més protagonisme en la vida pública, mentre augmentava l'antimilitarisme popular.»", type: "progressista", sub: "Anàlisi de les conseqüències militars del 98", exp: "Explicació del naixement del sentiment corporatiu militar i la tensió amb la societat civil." },
    { id: "b6_5", text: "«Davant la nova pujada d'impostos sobre les indústries i el comerç decretada per la Hisenda estatal, els gremis de Barcelona decideixen donar-se de baixa dels patens i tancar les caixes.»", type: "progressista", sub: "Actes de la protesta del Tancament de Caixes (1899)", exp: "Resolució de la burgesia i comerciants de Barcelona per negar-se a pagar el deute acumulat per la guerra." }
  ],
  conecta: [
    { id: "c6_1", left: "Joaquín Costa", right: "Líder del Regeneracionisme que va encunyar 'Escola i Rebost'", exp: "Defensava reformes agràries i educatives urgents per superar la crisi." },
    { id: "c6_2", left: "Tancament de Caixes (1899)", right: "Vaga de tributs a Barcelona contra els impostos de la guerra", exp: "Resposta fiscal organitzada pels gremis i l'alcalde Bartomeu Robert." },
    { id: "c6_3", left: "Generació del 98", right: "Grup d'intel·lectuals que analitzaven el 'problema d'Espanya'", exp: "Autors com Unamuno, Baroja o Machado caracteritzats pel seu pessimisme i crítica." },
    { id: "c6_4", left: "Institución Libre de Enseñanza", right: "Centre d'innovació pedagògica d'inspiració krausista", exp: "Fundada per Giner de los Ríos per formar elit cultural moderna i científica." }
  ],
  veritat: [
    { id: "v6_1", statement: "El Desastre del 98 va provocar la col·lapse definitiva i immediata de l'economia peninsular sense possibilitat de recuperació.", isTrue: false, exp: "Fals! Hi va haver una ràpida recuperació financera gràcies a la repatriació de capitals colonials i la baixa inflació." },
    { id: "v6_2", statement: "L'exèrcit espanyol va culpar la classe política civil de la derrota del 98, augmentant el seu sentiment corporatiu i intervenionista.", isTrue: true, exp: "Veritat! Els militars van acusar els polítics de manca de mitjans i van reaccionar enfront de les crítiques de l'antimilitarisme." },
    { id: "v6_3", statement: "El moviment del Regeneracionisme proposava conquerir noves colònies a Àfrica com a principal solució als mals d'Espanya.", isTrue: false, exp: "Fals! Proposava la modernització interna, la reforma de l'ensenyament i el desenvolupament econòmic ('Escola i Rebost')." },
    { id: "v6_4", statement: "L'any 1899 Espanya va vendre les illes Marianes, Carolines i Palau a l'Imperi Alemany.", isTrue: true, exp: "Veritat! Davant la impossibilitat de mantenir-les, es va signar la venda de les darreres illes del Pacífic." },
    { id: "v6_5", statement: "El Tancament de Caixes de 1899 va ser un insurrecció armada organitzada pels camperols d'Andalusia.", isTrue: false, exp: "Fals! Va ser una protesta fiscal pacífica dels comerciants i gremis de Barcelona." },
    { id: "v6_6", statement: "L'Oda a Espanya de Joan Maragall criticava el sacrifici inútil dels joves en les guerres colonials.", isTrue: true, exp: "Veritat! El poema reflectia el sentiment de la societat catalana enfront de la tragèdia de les quintes." },
    { id: "v6_7", statement: "El general Polavieja va aconseguir transformar profundament les estructures de l'Estat canovista.", isTrue: false, exp: "Fals! El seu projecte va rebre l'oposició de la mateixa oligarquia i les seves reformes van ser mínimes." },
    { id: "v6_8", statement: "El Desastre del 98 va impulsar el creixement del catalanisme polític davant la incapacitat de regeneració dels partits dinàstics.", isTrue: true, exp: "Veritat! El fracàs de la regeneració estatal va portar la burgesia catalana cap a opcions autonomistes com la Lliga Regionalista." }
  ],
  motPerdut: {
    title: "El Desastre del 98 i el Regeneracionisme",
    text: "La pèrdua de les colònies va generar una profunda crisi ___ i de prestigi. Per superar l'endarreriment del país, intel·lectuals com Joaquín Costa van impulsar el ___, demanant reformes educatives i agràries.",
    blanks: [
      { id: "m6_1", answer: "moral", options: ["moral", "financera", "militar"] },
      { id: "m6_2", answer: "regeneracionisme", options: ["regeneracionisme", "carlisme", "absolutisme"] }
    ],
    exp: "El Desastre del 98 va fer palesa la feblesa del país i va afavorir el desenvolupament del moviment regeneracionista."
  }
},
};

// Funció d'extracció d'elements aleatoris
function getRandomItems(array, count) {
  if (!array || array.length === 0) return [];
  const shuffled = [...array].sort(() => Math.random() - 0.5);
  return count ? shuffled.slice(0, count) : shuffled;
}

// Interfície pública accessible globalment
window.QuestionBank = {
  getChapter: function(chapterId) {
    return CHAPTER_DATA[chapterId] || null;
  },
  getTimeline: function(chapterId, count = 5) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? getRandomItems(chap.timeline, count) : [];
  },
  getKahoot: function(chapterId, count = 3) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? getRandomItems(chap.kahoot, count) : [];
  },
  getXafarderia: function(chapterId) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? chap.xafarderia : null;
  },
  getBOE: function(chapterId, count = 2) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? getRandomItems(chap.boe, count) : [];
  },
  getConecta: function(chapterId, count = 4) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? getRandomItems(chap.conecta, count) : [];
  },
  getVeritat: function(chapterId, count = 3) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? getRandomItems(chap.veritat, count) : [];
  },
  getMotPerdut: function(chapterId) {
    const chap = CHAPTER_DATA[chapterId];
    return chap ? chap.motPerdut : null;
  },
  getRandomItems: getRandomItems,
  CHAPTER_DATA: CHAPTER_DATA
};
