// ==========================================
// BANCO GENERATIVO DE DATOS HISTÓRICOS (questions.js)
// Organizado por capítulos y tipos de juego
// ==========================================

const CHAPTER_DATA = {
 1: {
  id: 1,
  title: "Capítol 1: El segle XVIII – El segle de les Llums",
  desc: "Absolutisme borbònic, Decrets de Nova Planta, Despotisme Il·lustrat i la Il·lustració",
  color: "bg-duoYellow",
  available: true,
  timeline: [
    { id: "t0_1", text: "Guerra de Successió Espanyola", year: "1701-1714", icon: "fa-shield-halved", exp: "Conflicte internacional i civil després de la mort de Carles II sense descendència [1, 2]." },
    { id: "t0_2", text: "Decrets de Nova Planta", year: "1707-1716", icon: "fa-file-signature", exp: "Abolició dels furs i institucions de la Corona d'Aragó i imposició del model centralista de Castella [3]." },
    { id: "t0_3", text: "Reinat de Carles III", year: "1759-1788", icon: "fa-crown", exp: "Etapa de Despotisme Il·lustrat amb reformes econòmiques, educatives i d'infraestructures [4, 5]." },
    { id: "t0_4", text: "Independència dels Estats Units", year: "1776", icon: "fa-flag", exp: "Nascuda de la insurrecció de les tretze colònies, crea la primera Constitució escrita de la història [6]." },
    { id: "t0_5", text: "Liberalització del comerç amb Amèrica", year: "1778", icon: "fa-ship", exp: "Obertura comercial que va beneficiar l'exportació catalana de vins, aiguardents i indianes [3, 4]." }
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
      { name: "Sociedades Económicas", role: "Entitat Reformista" },
      { name: "Montesquieu, Voltaire i Rousseau", role: "Filòsofs Il·lustrats" },
      { name: "Comerciants i Indians", role: "Elit Econòmica Catalana" }
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
    { id: "t1_1", text: "Tractat de Fontainebleau", year: "1807", icon: "fa-file-signature", exp: "Permet el pas de les tropes de Napoleó per Espanya cap a Portugal." },
    { id: "t1_2", text: "Motí d'Aranjuez", year: "Març 1808", icon: "fa-hand-fist", exp: "Caiguda de Manuel Godoy i abdicació forçada de Carles IV en Ferran VII." },
    { id: "t1_3", text: "Aixecament del 2 de Maig i Abdicacions de Baiona", year: "Maig 1808", icon: "fa-fire-flame-curved", exp: "Revolta popular a Madrid i cessió forçada de la corona a Josep I Bonaparte." },
    { id: "t1_4", text: "Batalla de Bailèn", year: "Juliol 1808", icon: "fa-shield-halved", exp: "Primera gran derrota de l'exèrcit napoleònic a camp obert a Europa." },
    { id: "t1_5", text: "Setge de Girona", year: "1809", icon: "fa-fort-awesome", exp: "Resistència heroica i tres setges consecutius que van devastar la ciutat de Girona." },
    { id: "t1_6", text: "Convocatòria de les Corts de Cadis", year: "1810", icon: "fa-building-columns", exp: "La Junta Suprema Central convoca reunió de diputats liberals i absolutistes a Cadis." },
    { id: "t1_7", text: "Promulgació de 'La Pepa'", year: "1812", icon: "fa-scroll", exp: "Aprovació de la primera Constitució liberal d'Espanya el dia de Sant Josep." },
    { id: "t1_8", text: "Tractat de Valençay", year: "1813", icon: "fa-handshake", exp: "Napoleó reconeix Ferran VII com a rei d'Espanya i retira les seves tropes." }
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
      { name: "Napoleó Bonaparte", role: "Emperador Francès" },
      { name: "Joaquim Murat", role: "Mariscal Francès" },
      { name: "Afrancesats", role: "Elit Il·lustrada" },
      { name: "Patriotes Espanyols", role: "Resistència Popular" }
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
    { id: "t3_1", text: "Primera Guerra Carlina i Conveni de Bergara", year: "1833-1840", icon: "fa-shield-halved", exp: "Conflicte dinàstic i ideològic entre isabelins (liberals) i carlins; acaba amb el pacte entre Espartero i Maroto que manté els furs bascos." },
    { id: "t3_2", text: "Desamortització de Mendizábal i Constitució de 1837", year: "1836-1837", icon: "fa-coins", exp: "Expropiació de béns de l'Església per finançar la guerra i aprovació d'una Constitució de caràcter progressista." },
    { id: "t3_3", text: "Creació de la Guàrdia Civil i Dècada Moderada", year: "1844", icon: "fa-user-shield", exp: "Fundació de la Guàrdia Civil pel General Narváez per mantenir l'ordre públic al camp i iniciar el domini moderat." },
    { id: "t3_4", text: "Inauguració del primer ferrocarril peninsular", year: "1848", icon: "fa-train", exp: "Obertura de la línia Barcelona-Mataró promoguda per Miquel Biada." },
    { id: "t3_5", text: "La Vicalvarada i inici del Bienni Progressista", year: "1854", icon: "fa-bolt", exp: "Pronunciament d'O'Donnell que porta Espartero al poder i obre una etapa de reformes profundes." },
    { id: "t3_6", text: "Llei de Ferrocarrils, Desamortització de Madoz i Vaga General", year: "1855", icon: "fa-industry", exp: "Aprovació de la legislació econòmica clau i primera vaga general a Espanya (origina a Barcelona per les selfactines)." },
    { id: "t3_7", text: "La Gloriosa Revolució i exili d'Isabel II", year: "1868", icon: "fa-flag", exp: "Pronunciament de Topete, Prim i Serrano, batalla d'Alcolea i destronament de la reina Isabel II." },
    { id: "t3_8", text: "Proclamació de la Primera República Espanyola", year: "1873-1874", icon: "fa-building-columns", exp: "Les Corts proclamen la República davant l'abdicació d'Amadeu de Savoia; patirà una forta inestabilitat i el cantonalisme." }
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
      { name: "Baldomero Espartero", role: "Líder Progressista" },
      { name: "Ramón Mª Narváez", role: "Líder Moderat" },
      { name: "Leopoldo O'Donnell", role: "Unión Liberal" },
      { name: "Joan Prim", role: "General Revolucionari" }
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
