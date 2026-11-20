window.QuestionBank = window.QuestionBank || {};
window.QuestionBank.TRIMESTER_DATA = window.QuestionBank.TRIMESTER_DATA || {};

// Substitució/afegit exclusiu del Trimestre 2
window.QuestionBank.TRIMESTER_DATA[1] = {
  id: 2,
  shortTitle: "La Restauració Borbònica i el Catalanisme",
  title: "Trimestre 2: El Sistema de la Restauració, la Crisi del 98 i el Catalanisme Polític (1875–1923)",
  desc: "El sistema canovista, el bipartidisme i el caciquisme, la Guerra d'Ultramar i el Desastre del 98, el Regeneracionisme i els orígens i evolució del catalanisme polític i altres nacionalismes estatals.",
  color: "bg-duoBlue",
  available: true,

  // =======================================================================
  // EXERCICI 1: DUES FONTS TEXTUALS REALS (SENSE IMATGES I NO REPETIDES)
  // =======================================================================
  ex1_fonts: [
    {
      id: "t2_f1",
      font1: {
        type: "text",
        title: "Constitució de la Monarquia Espanyola de 1876",
        author: "Corts Generals de la Restauració",
        year: "30 de juny de 1876",
        content: "Art. 11. La religió Catòlica, Apostòlica i Romana és la de l'Estat. La Nació s'obliga a mantenir el culte i els seus ministres. Ningú no serà molestat en territori espanyol per les seves opinions religioses [...]. Art. 18. La potestat de fer les lleis rau en les Corts amb el Rei. Art. 19. Les Corts estan compostes de dos Cossos Colegisladors, iguals en facultats: el Senat i el Congrés dels Diputats.",
        modelAnswer: "La Font 1 és un text jurídic constitucional aprovat el 1876 que constitueix la base del sistema polític de la Restauració canovista. Estableix la sobirania compartida entre el Rei i les Corts, un parlament bicameral i la confessionalitat catòlica de l'Estat amb una tolerància religiosa restringida.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Constitució de 1876 / Cánovas", weight: 1.5, terms: ["constituci", "1876", "canovas", "restauracio"] },
            { label: "Sobirania compartida (Rei i Corts)", weight: 1.5, terms: ["sobirania compartida", "rei i corts", "potestat", "poder moderador"] },
            { label: "Confessionalitat catòlica / Bicameralisme", weight: 1, terms: ["catolica", "religio", "senat", "congres", "bicameral"] }
          ],
          forbiddenTerms: [
            { terms: ["segona republica", "1931", "franco"], reason: "Aquest text és la Constitució de 1876, no del segle XX." }
          ]
        }
      },
      font2: {
        type: "text",
        title: "Lo Catalanisme (Fragment sobre el regionalisme i el centralisme)",
        author: "Valentí Almirall",
        year: "1886",
        content: "El nostre regionalisme no és pas una doctrina d'odi ni de destrucció, sinó una força de vida i de regeneració. L'Estat centralista, imposat per la dinastia borbònica, ha reduït les regions a la passivitat i ha paralitzat el desenvolupament d'Espanya. Catalunya, que manté la seva llengua, el seu dret i el seu esperit industrial, necessita autonomia per gestionar els seus propis afers i impulsar la modernització de tot l'Estat.",
        modelAnswer: "La Font 2 és un text assagístic de Valentí Almirall publicat a 'Lo Catalanisme' (1886), obra cabdal del catalanisme polític progressista. Almirall hi denuncia el centralisme borbònic com a factor d'endarreriment i defensa el regionalisme i l'autogovern com a eines de modernització per a Catalunya i Espanya.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Valentí Almirall / Lo Catalanisme (1886)", weight: 1.5, terms: ["almirall", "lo catalanisme", "1886"] },
            { label: "Crítica al centralisme borbònic", weight: 1.5, terms: ["centralisme", "borbonic", "estat centralista", "endarreriment"] },
            { label: "Catalanisme progressista / Autonomia", weight: 1, terms: ["regionalisme", "autonomia", "modernitzacio", "dret civil", "llengua"] }
          ]
        }
      },
      commonModelAnswer: "Ambdues fonts mostren el debat polític essencial del darrer terç del segle XIX a Espanya: mentre la Font 1 reflecteix el model d'Estat liberal conservador, centralista i unitari dissenyat per Cánovas del Castillo sota la Constitució de 1876, la Font 2 exposa la resposta del catalanisme polític inicial (Almirall), que criticava aquest centralisme unificador i en reclamava la descentralització i l'autogovern regional.",
      commonEval: {
        minWords: 12,
        clusters: [
          { label: "Model centralista de la Restauració vs Catalanisme", weight: 1.5, terms: ["centralisme", "restauracio", "catalanisme", "model d'estat"] },
          { label: "Debat sobre l'organització territorial", weight: 1.5, terms: ["organitzacio territorial", "autonomia", "unitarisme", "1876", "almirall"] }
        ]
      }
    },
    {
      id: "t2_f2",
      font1: {
        type: "text",
        title: "Tractat de Pau de París (Extracte oficial)",
        author: "Representants d'Espanya i dels Estats Units d'Amèrica",
        year: "10 de desembre de 1898",
        content: "Art. 1. Espanya renuncia a tot dret de sobirania i propietat sobre Cuba. [...] Art. 2. Espanya cedeix als Estats Units l'illa de Puerto Rico i les altres illes que estan actualment sota la seva sobirania a les Índies Occidentals, i l'illa de Guam a l'arxipèlag de les Marianes o Lladres. Art. 3. Espanya cedeix als Estats Units l'arxipèlag conegut per les Illes Filipines...",
        modelAnswer: "La Font 1 és el Tractat de Pau de París (1898), document diplomàtic internacional que certifica la derrota militar espanyola davant els EUA i la liquidació de l'imperi colonial espanyol amb la cessió de Cuba, Puerto Rico, Filipines i Guam.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Tractat de París / 1898", weight: 1.5, terms: ["tractat de paris", "pau de paris", "1898"] },
            { label: "Pèrdua de les colònies (Cuba, Filipines, Puerto Rico)", weight: 1.5, terms: ["cuba", "filipines", "puerto rico", "guam", "cessio", "perdua"] },
            { label: "Derrota enfront dels Estats Units", weight: 1, terms: ["estats units", "eua", "derrota", "imperi"] }
          ]
        }
      },
      font2: {
        type: "text",
        title: "Reconstitució i europeïtzació d'Espanya",
        author: "Joaquín Costa",
        year: "1900",
        content: "Cal tancar amb doble clau el sepulcre del Cid per tal que no torni a cabalcar [...]. La pèrdua de les colònies no ha estat un accident, sinó el resultat inevitable d'un règim polític corromput, governat per una oligarquia de cacics i polítics incompetents. Espanya necessita un canvi radical: menys glòries passades i més 'escola i rebost'. Cal regenerar el país mitjançant l'educació, la millora de l'agricultura i la fi del frau electoral.",
        modelAnswer: "La Font 2 és un text assagístic del pensador regeneracionista Joaquín Costa (1900). Hi fa una crítica acèrbica del sistema de la Restauració, denunciant l'oligarquia i el caciquisme com a culpables del Desastre del 98, i proposa la regeneració del país mitjançant l'educació i el desenvolupament econòmic ('escola i rebost').",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Joaquín Costa / Regeneracionisme", weight: 1.5, terms: ["joaquin costa", "regeneracionis", "1900"] },
            { label: "Escola i rebost / Crítica al caciquisme", weight: 1.5, terms: ["escola i rebost", "caciquisme", "oligarquia", "corrupcio"] },
            { label: "Conseqüències del Desastre del 98", weight: 1, terms: ["desastre del 98", "perdua de les meves meves colonies", "sepulcre del cid"] }
          ]
        }
      },
      commonModelAnswer: "Ambdues fonts s'emmarquen en el Desastre del 98: la Font 1 n'és la causa jurídica i diplomàtica directa (la pèrdua de l'imperi colonial a París), mentre que la Font 2 reflecteix l'impacte ideològic i moral que la pèrdua de les colònies va generar en la societat espanyola, donant origen al moviment regeneracionista de Joaquín Costa.",
      commonEval: {
        minWords: 12,
        clusters: [
          { label: "Crisi i Desastre del 98", weight: 1.5, terms: ["desastre del 98", "crisi del 98", "1898", "colonies"] },
          { label: "Sorgiment del Regeneracionisme", weight: 1.5, terms: ["regeneracionis", "costa", "reforma", "pessimisme"] }
        ]
      }
    },
    {
      id: "t2_f3",
      font1: {
        type: "text",
        title: "Manifest de Montecristi",
        author: "José Martí i Máximo Gómez (Partido Revolucionario Cubano)",
        year: "25 de març de 1895",
        content: "La guerra no és el trencament capritxós de la pau, sinó el producte de la incapacitat d'Espanya per satisfer les demandes d'autonomia i llibertat dels cubans. No fem la guerra contra l'espanyol, sinó contra el sistema colonial de la metròpoli que ens nega el comerç lliure, ens sotmet a impostos abusius i ens tracta com a súbdits de segona. La revolució busca la independència absoluta de Cuba.",
        modelAnswer: "La Font 1 és el Manifest de Montecristi (1895), redactat per José Martí i Máximo Gómez en nom del Partido Revolucionario Cubano. Justifica l'inici de la guerra d'independència cubana (Grito de Baire) per la modèstia de les reformes espanyoles i el mantingut espoli colonial.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "José Martí / Partido Revolucionario Cubano", weight: 1.5, terms: ["jose marti", "partido revolucionario cubano", "1895"] },
            { label: "Insurrecció / Independència de Cuba / Grito de Baire", weight: 1.5, terms: ["independencia", "guerra de cuba", "grito de baire", "montecristi"] },
            { label: "Crítica al domini colonial espanyol", weight: 1, terms: ["metropoli", "espoli", "impostos", "comerç lliure"] }
          ]
        }
      },
      font2: {
        type: "text",
        title: "Reial Decret de Concessió de l'Autonomia a Cuba i Puerto Rico",
        author: "Govern Liberal de Práxedes Mateo Sagasta",
        year: "25 de novembre de 1897",
        content: "El Govern de Sa Majestat decreta: El govern de l'illa de Cuba se regirà per un Parlament insular compost d'una Cambra de Representants i un Consell Administratiu [...]. Es reconeix als insulars la igualtat de drets polítics amb els peninsulars, l'autonomia aranzelària i la facultat de fixar les despeses i ingressos de l'administració local.",
        modelAnswer: "La Font 2 és el Reial Decret d'Autonomia aprovat pel govern liberal de Sagasta el novembre de 1897. Concedia un règim d'autogovern parlamentari, igualtat de drets i autonomia duanera a Cuba en un intent desesperat d'aturar la guerra d'independència.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Decret d'Autonomia de 1897 / Sagasta", weight: 1.5, terms: ["autonomia", "1897", "sagasta", "decret"] },
            { label: "Parlament insular / Autonomia aranzelària", weight: 1.5, terms: ["parlament insular", "igualtat de drets", "aranzel", "autogovern"] },
            { label: "Intent de pacificació tardà", weight: 1, terms: ["tardà", "pacificacio", "ramon blanco", "reforma"] }
          ]
        }
      },
      commonModelAnswer: "Ambdues fonts analitzen el conflicte colonial a Cuba durant la darrera dècada del segle XIX: mentre la Font 1 reflecteix la determinació de l'independentisme cubà (Martí) de lluitar per la sobirana absoluta davant els incompliments de la metròpoli, la Font 2 palesa la reacció tardana de l'Estat espanyol (Sagasta), que va decretar l'autonomia de l'illa el 1897 quan el procés d'emancipació ja era irreversible.",
      commonEval: {
        minWords: 12,
        clusters: [
          { label: "Guerra d'Ultramar / Conflicte cubà", weight: 1.5, terms: ["guerra d'ultramar", "cuba", "conflicte colonial"] },
          { label: "Independentisme vs Autonomisme tardà", weight: 1.5, terms: ["independentisme", "autonomia", "1895", "1897", "marti", "sagasta"] }
        ]
      }
    },
    {
      id: "t2_f4",
      font1: {
        type: "text",
        title: "La Tradició Catalana",
        author: "Josep Torras i Bages (Bisbe de Vic)",
        year: "1892",
        content: "Catalunya serà cristiana o no serà. La reconstitució de la nostra pàtria no s'ha de cercar en les teories estrangeres ni en el liberalisme laic que destrueix les famílies i les tradicions, sinó en l'esperit del nostre poble, guardat per l'Església al llarg dels segles. El Dret Civil català, la família pairal i la fe catòlica són els pilars inamovibles sobre els quals s'ha de basar la vida regional de Catalunya.",
        modelAnswer: "La Font 1 és un fragment de 'La Tradició Catalana' (1892) del bisbe Torras i Bages, text fundacional del catalanisme conservador i d'arrel catòlica (Vigatanisme). Defensa una Catalunya basada en la religió, la família tradicional, el dret civil i la història medieval.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Torras i Bages / Vigatanisme", weight: 1.5, terms: ["torras i bages", "vigatanisme", "1892"] },
            { label: "Catalanisme conservador i catòlic", weight: 1.5, terms: ["cristiana", "esglesia", "catolic", "tradicio", "conservador"] },
            { label: "Dret Civil català / Família pairal", weight: 1, terms: ["dret civil", "familia pairal", "patria"] }
          ]
        }
      },
      font2: {
        type: "text",
        title: "Article a la revista 'Bizkaitarra'",
        author: "Sabino Arana Goiri",
        year: "1894",
        content: "Euskalerria és la terra dels bascos, d'una raça única que ha mantingut la seva llengua, les seves costums i la seva fe catòlica intactes des de temps immemorials. L'abolició dels furs el 1876 i l'arribada massiva d'immigrants espanyols (maketos) amenacen de destruir la nostra identitat nacional. Bizkaia ha de recuperar la seva independència absoluta i expulsar la influència de la societat liberal i laica d'Espanya.",
        modelAnswer: "La Font 2 és un article de Sabino Arana publicat a 'Bizkaitarra' (1894), origen del nacionalisme basc. Arana hi argumenta la defensa de la raça basca, la religió i els furs històrics enfront de la centralització borbònica i la immigració ('maketos'), defensant posicions independentistes.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Sabino Arana / Nacionalisme basc", weight: 1.5, terms: ["sabino arana", "pnb", "bizkaitarra", "1894"] },
            { label: "Defensa dels furs / Raça basca / Religió", weight: 1.5, terms: ["furs", "raça", "religio", "maketos", "euskadi"] },
            { label: "Rebuig a l'Estat liberal centralista", weight: 1, terms: ["independencia", "centralisme", "immigracio"] }
          ]
        }
      },
      commonModelAnswer: "Ambdues fonts reflecteixen el naixement dels nacionalismes perifèrics de caràcter conservador a la darreria del segle XIX (el catalanisme catòlic de Torras i Bages i el nacionalisme basc de Sabino Arana). Tots dos corrents van sorgir com a reacció a l'Estat liberal centralista, fonamentant la identitat nacional en la religió catòlica, la llengua, la història i la defensa de les institucions o drets tradicionals.",
      commonEval: {
        minWords: 12,
        clusters: [
          { label: "Nacionalismes perifèrics conservadors (Catalanisme i Basquisme)", weight: 1.5, terms: ["nacionalisme", "catalanisme", "basquisme", "conservador"] },
          { label: "Reacció al centralisme liberal / Defensa de la tradició", weight: 1.5, terms: ["tradicio", "catolicisme", "furs", "centralisme", "1892", "1894"] }
        ]
      }
    },
    {
      id: "t2_f5",
      font1: {
        type: "text",
        title: "Manifest de la Candidatura dels Quatre Presidents",
        author: "Unió Regionalista i Centre Nacional Català",
        year: "Abril de 1901",
        content: "Ens adrecem als electors de Barcelona superant les velles diferències dels partits dinàstics. La nostra candidatura, integrada pel Dr. Robert, Domènech i Montaner, Albert Rusiñol i Sebastià Torras, no busca honors personals sinó portar a les Corts de Madrid la veu de la Catalunya autèntica. Volem la regeneració de la vida pública, l'autonomia administrativa i econòmica, i la protecció del nostre treball industrial davant un govern central que ens ignora.",
        modelAnswer: "La Font 1 és el manifest de la Candidatura dels Quatre Presidents (1901) per a les eleccions a Corts per Barcelona. Va unar regionalistes i catalanistes en una coalició regeneracionista que va guanyar a Barcelona, derrotant el tornisme i conduint a la fundació de la Lliga Regionalista.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Candidatura dels Quatre Presidents / 1901", weight: 1.5, terms: ["quatre presidents", "1901", "dr robert", "domenech i montaner"] },
            { label: "Victòria a Barcelona / Ruptura del torn dinàstic", weight: 1.5, terms: ["barcelona", "dinastics", "torn", "eleccions"] },
            { label: "Regeneracionisme / Naixement de la Lliga Regionalista", weight: 1, terms: ["lliga regionalista", "autonomia", "regeneracio"] }
          ]
        }
      },
      font2: {
        type: "text",
        title: "Discurs sobre la unitat de la Pàtria a les Corts Generals",
        author: "Antonio Cánovas del Castillo",
        year: "6 de juny de 1888",
        content: "Nacions com la nostra, formades per la història i consolidades pel sacrifici de segles, no es poden trencar ni qüestionar per particularismes regionals. La sobirania d'Espanya és una i indivisible; no hi ha més que una Pàtria, una llengua oficial i unes solament Corts sobiranes a Madrid. Admetre la descentralització política o l'autonomia d'algunes províncies seria l'inici de la dissolució de la Nació Espanyola.",
        modelAnswer: "La Font 2 és un discurs parlamentari d'Antonio Cánovas del Castillo (1888) en què defensa amb vehemència el model d'Estat unitari i centralista. Rebutja radicalment qualsevol concessió d'autonomia o reconeixement de les particularitats regionals per considerar-les una amenaça a la unitat de la Pàtria.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Cánovas del Castillo / Unitarisme", weight: 1.5, terms: ["canovas", "unitarisme", "1888", "canovista"] },
            { label: "Defensa del centralisme i la sobirania única", weight: 1.5, terms: ["centralisme", "sobirania indivisible", "unitat de la patria", "madrid"] },
            { label: "Rebuig radical a l'autonomia regional", weight: 1, terms: ["rebuig", "autonomia", "particularismes", "dissolucio"] }
          ]
        }
      },
      commonModelAnswer: "Ambdues fonts il·lustren el xoc frontal entre la concepció unificadora de l'Estat de la Restauració i l'emergència electoral del catalanisme polític a principis del segle XX: mentre Cánovas del Castillo (Font 2) defensava l'Estat centralista i indivisible, la victòria de la Candidatura dels Quatre Presidents el 1901 (Font 1) va demostrar l'esgotament del torn dinàstic a Barcelona i la irrupció de la Lliga Regionalista com a força parlamentària.",
      commonEval: {
        minWords: 12,
        clusters: [
          { label: "Xoc entre Centralisme Canovista i Catalanisme Electoral", weight: 1.5, terms: ["xoc", "centralisme", "canovas", "catalanisme", "electoral"] },
          { label: "Esgotament del torn dinàstic i sorgiment de la Lliga (1901)", weight: 1.5, terms: ["1901", "quatre presidents", "lliga regionalista", "torn dinastic"] }
        ]
      }
    },
    {
      id: "t2_f6",
      font1: {
        type: "text",
        title: "Discurs de fundació del Partit Nacionalista Basc",
        author: "Sabino Arana Goiri (a la seu de 'Euskeldun Batzokija')",
        year: "31 de juliol de 1895",
        content: "Avui fundem el Partit Nacionalista Basc per defensar la terra d'Euskadi. La nostra causa no és un simple regionalisme ni una petició de favors a Madrid; és el reconeixement que el poble basc és una nació independent per la seva raça, la seva llengua (l'euskera), la seva religió i les seves lleis històriques. Hem de treballar per l'autogovern total i per despertar la consciència del nostre poble.",
        modelAnswer: "La Font 1 és el discurs pronuncia per Sabino Arana el 1895 en fundar el Partit Nacionalista Basc (PNB). Hi proclama la nació basca ('Euskadi') com una entitat pròpia definida per la raça, la llengua, la religió i els furs, reclamant la independència o un autogovern plenament sobiranista.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Sabino Arana / Fundació del PNB (1895)", weight: 1.5, terms: ["sabino arana", "pnb", "1895", "fundacio"] },
            { label: "Concepció de la nació basca (Euskadi)", weight: 1.5, terms: ["euskadi", "raça", "euskera", "religio", "furs"] },
            { label: "Reivindicació d'independència / autogovern", weight: 1, terms: ["independencia", "autogovern", "sobirania"] }
          ]
        }
      },
      font2: {
        type: "text",
        title: "Discurs a l'Asamblea General de la Región Gallega",
        author: "Manuel Murguía",
        year: "1887",
        content: "Galícia no és una província anònima d'Espanya, sinó una regió amb una història, una llengua i una cultura pròpies que provenen dels nostres avantpassats celtes. L'abandonament econòmic, l'emigració massiva dels nostres pagesos i el centralisme de Madrid ens estan destruint. Demanem el dret d'organitzar-nos autònomament i d'aprovar un projecte de Constitució per a l'Estat Galaic dins de la col·lectivitat espanyola.",
        modelAnswer: "La Font 2 és un discurs de Manuel Murguía durant l'Assemblea General de la Regió Gallega (1887). Murguía, figura clau del galleguisme polític i cultural (Rexurdimento), denuncia el centralisme i la misèria econòmica que provoca l'emigració, i reclama un estatut d'autogovern per a Galícia.",
        eval: {
          minWords: 12,
          clusters: [
            { label: "Manuel Murguía / Galleguisme / Rexurdimento", weight: 1.5, terms: ["murguia", "galleguisme", "rexurdimento", "1887"] },
            { label: "Denúncia de l'emigració i l'endarreriment", weight: 1.5, terms: ["emigracio", "endarreriment", "pagesos", "centralisme"] },
            { label: "Projecte d'Estatut / Autonomia galaica", weight: 1, terms: ["estat galaic", "autonomia", "llengua gallega"] }
          ]
        }
      },
      commonModelAnswer: "Ambdues fonts palesen la pluralitat de moviments nacionalistes i regionalistes perifèrics que es van desenvolupar a Espanya a finals del segle XIX en resposta al model d'Estat centralista de la Restauració: la Font 1 mostra la variant basca (PNB de Sabino Arana, basat en la raça, la fe i els furs), mentre que la Font 2 reflecteix el galleguisme (Murguía), centrat en la recuperació cultural, la denúncia de l'emigració i la petició d'autogovern regional.",
      commonEval: {
        minWords: 12,
        clusters: [
          { label: "Pluralitat de nacionalismes perifèrics (Basc i Gallec)", weight: 1.5, terms: ["nacionalismes", "basc", "gallec", "pluralitat"] },
          { label: "Oposició al centralisme unificador de la Restauració", weight: 1.5, terms: ["centralisme", "restauracio", "autonomia", "1887", "1895"] }
        ]
      }
    },
    {
    id: "t2_f_guerra_frances",
    font1: {
      type: "image",
      title: "El context de les Abdicacions de Baiona",
      imageUrl: "https://i.ibb.co/HWQBPjR/image.png",
      modelAnswer: "La Font 1 és un gravat que mostra el clima de revolta popular (Motí d'Aranjuez) i inestabilitat prèvia a les abdicacions de Baiona (1808), on Napoleó va forçar Carles IV i Ferran VII a cedir el tron espanyol al seu germà, Josep I Bonaparte.",
      eval: {
        minWords: 12,
        clusters: [
          { label: "Crisi de la monarquia borbònica", weight: 1.5, terms: ["baiona", "abdicacions", "carles iv", "ferran vii", "napoleo"] },
          { label: "Inestabilitat i canvi de dinastia", weight: 1, terms: ["motí", "revolta popular", "josep i", "bonaparte", "buit de poder"] }
        ]
      }
    },
    font2: {
      type: "image",
      title: "Els afusellaments del 3 de maig",
      imageUrl: "https://i.ibb.co/fz6nGGx3/image.png",
      modelAnswer: "La Font 2 és la cèlebre pintura de Goya sobre els afusellaments del 3 de maig de 1808. Representa de forma dramàtica la brutal repressió de l'exèrcit francès contra la població de Madrid que s'havia alçat el dia abans, fet que va encendre la metxa de la guerra.",
      eval: {
        minWords: 12,
        clusters: [
          { label: "Goya i el 3 de maig", weight: 1.5, terms: ["goya", "3 de maig", "afusellaments", "madrid"] },
          { label: "Inici de la Guerra del Francès", weight: 1.5, terms: ["guerra del francès", "repressio", "2 de maig", "aixecament", "exèrcit francès"] }
        ]
      }
    },
    commonModelAnswer: "Ambdues fonts il·lustren les causes i el detonant de la Guerra del Francès (1808-1814): mentre la Font 1 mostra la crisi política i el buit de poder de la monarquia borbònica (abdicacions de Baiona) que va permetre l'ocupació francesa, la Font 2 reflecteix la sagnant resposta popular (l'alçament de Madrid) davant d'aquesta invasió napoleònica.",
    commonEval: {
      minWords: 15,
      clusters: [
        { label: "Guerra del Francès (1808-1814)", weight: 1.5, terms: ["guerra del francès", "ocupacio francesa", "invasió", "napoleònica"] },
        { label: "Crisi política i resposta popular", weight: 1.5, terms: ["buit de poder", "crisi", "alçament", "revolta", "poble"] }
      ]
    }
  },
  {
    id: "t2_f_crisi_98",
    font1: {
      type: "image",
      title: "La destrucció del cuirassat Maine",
      imageUrl: "https://i.ibb.co/TxPbS3HH/image.png",
      modelAnswer: "La Font 1 il·lustra l'explosió i enfonsament del vaixell estatunidenc USS Maine al port de l'Havana el febrer de 1898. Els Estats Units van responsabilitzar Espanya de l'incident, utilitzant-lo com a pretext (casus belli) per declarar-li la guerra.",
      eval: {
        minWords: 12,
        clusters: [
          { label: "Explosió del Maine", weight: 1.5, terms: ["maine", "explosio", "havana", "1898", "cuirassat"] },
          { label: "Casus belli / Guerra hispano-estatunidenca", weight: 1.5, terms: ["estats units", "casus belli", "pretext", "excusa", "declaracio de guerra"] }
        ]
      }
    },
    font2: {
      type: "image",
      title: "El Tancament de Caixes a Barcelona",
      imageUrl: "https://i.ibb.co/6RkKcZcF/image.png",
      modelAnswer: "La Font 2 és una sàtira sobre el Tancament de Caixes de 1899 a Barcelona. Retrata la protesta fiscal de la burgesia, comerciants i gremis catalans, que es van negar a pagar els nous impostos imposats pel ministre Villaverde per costejar el deute del Desastre del 98.",
      eval: {
        minWords: 12,
        clusters: [
          { label: "Tancament de Caixes (1899)", weight: 1.5, terms: ["tancament de caixes", "1899", "barcelona", "burgesia", "gremis"] },
          { label: "Protesta contra els impostos", weight: 1.5, terms: ["impostos", "rebuig", "villaverde", "protesta fiscal", "contribucions", "deute"] }
        ]
      }
    },
    commonModelAnswer: "Ambdues fonts s'emmarquen dins la Crisi del 98: la Font 1 assenyala el detonant del conflicte bèl·lic (l'incident del Maine) que va portar Espanya a perdre Cuba enfront dels Estats Units, mentre que la Font 2 en mostra les conseqüències econòmiques immediates a la Península, on l'intent de recaptar impostos per pagar el deute de guerra va generar una revolta fiscal a Catalunya (Tancament de Caixes).",
    commonEval: {
      minWords: 15,
      clusters: [
        { label: "Desastre del 98 i pèrdua de colònies", weight: 1.5, terms: ["crisi del 98", "desastre del 98", "pèrdua de les colònies", "cuba"] },
        { label: "Impacte econòmic i polític", weight: 1.5, terms: ["guerra", "deute", "conseqüències economiques", "detonant", "protesta"] }
      ]
    }
  },
  {
    id: "t2_f_corts_cadis",
    font1: {
      type: "image",
      title: "Proclamació de la Constitució de 1812",
      imageUrl: "https://i.ibb.co/C3DXnjw4/image.png",
      modelAnswer: "La Font 1 és una pintura que il·lustra la solemne i festiva promulgació de la Constitució de 1812 ('La Pepa') a Cadis, enmig de l'ocupació francesa del país. Destaca els valors de Pàtria i Llibertat i el suport dels diputats liberals i militars.",
      eval: {
        minWords: 12,
        clusters: [
          { label: "Corts de Cadis / Constitució de 1812", weight: 1.5, terms: ["corts de cadis", "constitució", "1812", "la pepa"] },
          { label: "Promulgació pública", weight: 1, terms: ["promulgació", "celebracio", "llibertat", "guerra del francès"] }
        ]
      }
    },
    font2: {
      type: "text",
      title: "Constitució Política de la Monarquia Espanyola",
      author: "Corts de Cadis",
      year: "19 de març de 1812",
      content: "Art. 1. La Nació espanyola és la reunió de tots els espanyols d'ambdós hemisferis. Art. 3. La sobirania resideix essencialment en la Nació, i per tant pertany a aquesta exclusivament el dret d'establir les seves lleis fonamentals. [...] Art. 14. El Govern de la Nació espanyola és una Monarquia moderada hereditària. Art. 15. La potestat de fer les lleis resideix en les Corts amb el Rei.",
      modelAnswer: "La Font 2 és un recull d'articles de la Constitució de 1812, el primer text constitucional d'Espanya. Hi formula els principis bàsics del liberalisme polític: defineix la nació com a subjecte de dret, instaura la sobirania nacional, i estableix una monarquia moderada amb divisió de poders i sobirania legislativa compartida.",
      eval: {
        minWords: 12,
        clusters: [
          { label: "Sobirania Nacional", weight: 1.5, terms: ["sobirania nacional", "nació", "lleis fonamentals"] },
          { label: "Liberalisme / Monarquia moderada", weight: 1.5, terms: ["liberalisme", "divisio de poders", "monarquia moderada", "corts amb el rei"] }
        ],
        forbiddenTerms: [
          { terms: ["republica"], reason: "La Constitució de 1812 estableix una monarquia, no pas una república." }
        ]
      }
    },
    commonModelAnswer: "Ambdues fonts analitzen la primera revolució liberal a Espanya (les Corts de Cadis): mentre la Font 1 il·lustra l'esperit ciutadà i el moment històric de la lectura de la primera Carta Magna (1812) durant la Guerra del Francès, la Font 2 n'exposa el marc ideològic fonamental (sobirania nacional i limitació del poder reial) dissenyat per liquidar l'Antic Règim i l'absolutisme.",
    commonEval: {
      minWords: 15,
      clusters: [
        { label: "Revolució Liberal i trencament amb l'absolutisme", weight: 1.5, terms: ["revolució liberal", "antic règim", "absolutisme", "liberal"] },
        { label: "Bases de l'Estat Constitucional", weight: 1.5, terms: ["estat constitucional", "carta magna", "sobirania", "marc ideològic"] }
      ]
    }
  },
  ],

  // =======================================================================
  // EXERCICI 2: SITUACIONS HISTÒRIQUES AMB PARAULES 100% OBLIGATÒRIES
  // =======================================================================
  ex2_situacions: [
    {
      id: "t2_s1",
      title: "El disseny del sistema polític de la Restauració (1874–1876)",
      situation: "Et trobes a Madrid el 1876. Després del pronunciament de Martínez Campos a Sagunt i el retorn de la monarquia borbònica, Cánovas del Castillo està enllestint la nova Constitució. Explica com s'ha estructurat el nou règim per garantir l'estabilitat i evitar la intromissió militar.",
      mandatoryWords: [
        { display: "Cánovas del Castillo", variants: ["canovas del castillo", "canovas"] },
        { display: "Sobirania compartida", variants: ["sobirania compartida"] },
        { display: "Bipartidisme", variants: ["bipartidisme"] },
        { display: "Torn pacífic", variants: ["torn pacific", "torn"] }
      ],
      clusters: [
        { label: "Restauració dels Borbons (Alfons XII / Sandhurst)", weight: 1, terms: ["alfons xii", "sandhurst", "borbons", "monarquia"] },
        { label: "Alternança entre Conservadors i Liberals", weight: 1, terms: ["conservadors", "liberals", "sagasta", "alternança"] },
        { label: "Subordinació de l'exèrcit al poder civil (Civilisme)", weight: 1, terms: ["civilisme", "exercit", "poder civil", "militar"] }
      ],
      forbiddenTerms: [
        { terms: ["segona republica", "franco", "primo de rivera"], reason: "Aquests conceptes no pertanyen a l'inici de la Restauració (1875-1876)." }
      ],
      modelAnswer: "Antonio Cánovas del Castillo va dissenyar el sistema de la Restauració borbònica basat en la Constitució de 1876, que establia la sobirania compartida entre el Rei i les Corts. Per garantir l'estabilitat política, va implantar un sistema de bipartidisme on el Partit Conservador i el Partit Liberal s'alternaven en el govern mitjançant el torn pacífic, aconseguint imposar el civilisme i neutralitzar els pronunciaments militars."
    },
    {
      id: "t2_s2",
      title: "El funcionament intern de la corrupció electoral i el caciquisme",
      situation: "Ets un periodista crític de l'oposició a finals del segle XIX. Vols denunciar en un article d'investigació com s'aconsegueixen sempre els resultats electorals desitjats pel Ministeri de la Governació en els districtes rurals.",
      mandatoryWords: [
        { display: "Caciquisme", variants: ["caciquisme", "cacics"] },
        { display: "Encasellat", variants: ["encasellat", "encasillado"] },
        { display: "Tupinada", variants: ["tupinada", "pucherazo"] },
        { display: "Governador Civil", variants: ["governador civil", "governaddors civils"] }
      ],
      clusters: [
        { label: "Control de les llistes per Madrid / Ministeri", weight: 1, terms: ["ministeri", "governacio", "llistes", "candidats"] },
        { label: "Coacció, compra de vots i vot de difunts", weight: 1, terms: ["coaccio", "compra de vots", "morts", "difunts", "cens"] },
        { label: "Domini social i econòmic del cacic rural", weight: 1, terms: ["rural", "favors", "pressio", "ajuntaments"] }
      ],
      forbiddenTerms: [
        { terms: ["democracia neta", "sufragi lliure real"], reason: "Les eleccions de la Restauració eren completament fraudulentes." }
      ],
      modelAnswer: "El torn pacífic funcionava de dalt a baix: quan el rei canviava de govern, el Ministeri de la Governació elaborava l'encasellat amb la llista de diputats que havien de sortir escollits. El Governador Civil transmitia aquestes directrius als cacics locals, els quals, mitjançant el control social i econòmic dels districtes rurals, asseguraven la victòria aplicant la tupinada (compra de vots, alteració de censos amb morts i coacció)."
    },
    {
      id: "t2_s3",
      title: "L'esclat de la Guerra de Cuba i la intervenció dels Estats Units (1895–1898)",
      situation: "Ets un corresponsal de premsa a l'Havana el febrer de 1898. L'insurrecció cubana s'ha anat agreujant malgrat la dura repressió, i l'explosió d'un vaixell de guerra nord-americà al port serveix de detonant per a la guerra hispano-nord-americana.",
      mandatoryWords: [
        { display: "Grito de Baire", variants: ["grito de baire", "1895"] },
        { display: "José Martí", variants: ["jose marti", "marti"] },
        { display: "Cuirassat Maine", variants: ["maine", "cuirassat maine"] },
        { display: "Pau de París", variants: ["pau de paris", "tractat de paris"] }
      ],
      clusters: [
        { label: "Inici de la revolta colonial (1895)", weight: 1, terms: ["insurreccio", "partido revolucionario cubano", "revolució"] },
        { label: "Estratègia de reconcentració de Weyler", weight: 1, terms: ["weyler", "reconcentracio", "repressio", "martinez campos"] },
        { label: "Entrada dels EUA i signatura de la pau (1898)", weight: 1, terms: ["estats units", "eua", "santiago", "cavite", "1898"] }
      ],
      forbiddenTerms: [
        { terms: ["pau de zanjon 1898"], reason: "La Pau de Zanjón va ser el 1878, la de 1898 va ser la Pau de París." }
      ],
      modelAnswer: "La guerra d'independència cubana va esclatar el 1895 amb el Grito de Baire, organitzat per José Martí des del Partido Revolucionario Cubano. Després del fracàs de la brutal repressió del general Weyler, la misteriosa explosió del cuirassat Maine al port de l'Havana el 1898 va servir de pretext als EUA per declarar la guerra a Espanya. La ràpida derrota naval espanyola va culminar amb la signatura de la Pau de París (1898), on Espanya va renunciar a Cuba, Puerto Rico i Filipines."
    },
    {
      id: "t2_s4",
      title: "La Crisi del 98 i el moviment Regeneracionista",
      situation: "Et trobes a Barcelona la tardor de 1899. La pèrdua de les colònies ha provocat un fort pessimisme moral, un augment de la pressió fiscal sobre el comerç català i el sorgiment de propostes de regeneració política.",
      mandatoryWords: [
        { display: "Joaquín Costa", variants: ["joaquín costa", "costa"] },
        { display: "Escola i rebost", variants: ["escola i rebost"] },
        { display: "Generació del 98", variants: ["generacio del 98", "generacion del 98"] },
        { display: "Tancament de Caixes", variants: ["tancament de caixes", "1899"] }
      ],
      clusters: [
        { label: "Pessimisme i crisi moral / 'Nació moribunda'", weight: 1, terms: ["crisi moral", "pessimisme", "nacio moribunda", "imperi"] },
        { label: "Protesta fiscal dels gremis de Barcelona (1899)", weight: 1, terms: ["vaga d'impostos", "gremis", "dr robert", "alcalde"] },
        { label: "Necessitat de reformes profundes en educació i economia", weight: 1, terms: ["educacio", "agricultura", "modernitzacio", "institucion libre"] }
      ],
      forbiddenTerms: [
        { terms: ["caiguda immediata de la monarquia"], reason: "El sistema de la Restauració va sobreviure a la crisi del 98." }
      ],
      modelAnswer: "La pèrdua de l'imperi va provocar una profunda crisi moral i el sorgiment de la Generació del 98, un grup d'intel·lectuals que analitzaven el 'problema d'Espanya'. El principal ideòleg del regeneracionisme va ser Joaquín Costa, qui reclamava deixar enrere les glòries passades i prioritzar l' 'escola i rebost' (educació i desenvolupament econòmic). A Catalunya, l'augment d'impostos per pagar el deute de la guerra va desencadenar el Tancament de Caixes (1899), una vaga fiscal de comerciants que va acostar la burgesia al catalanisme."
    },
    {
      id: "t2_s5",
      title: "Els orígens del catalanisme polític progressista: Valentí Almirall",
      situation: "Ets un intel·lectual catalanista l'any 1885. Després d'anys de treball des de la premsa i les associacions culturals, has participat en la redacció d'un document unitari per entregar al rei Alfons XII denunciar el centralisme.",
      mandatoryWords: [
        { display: "Valentí Almirall", variants: ["valenti almirall", "almirall"] },
        { display: "Centre Català", variants: ["centre catala", "1882"] },
        { display: "Memorial de Greuges", variants: ["memorial de greuges", "1885"] },
        { display: "Lo Catalanisme", variants: ["lo catalanisme", "1886"] }
      ],
      clusters: [
        { label: "Ruptura amb el republicanisme federal", weight: 1, terms: ["federalisme", "pi i margall", "diari catala"] },
        { label: "Defensa del dret civil i el proteccionisme econòmic", weight: 1, terms: ["dret civil", "proteccionisme", "aranzels", "industria"] },
        { label: "Primeres iniciatives del catalanisme polític", weight: 1, terms: ["congres catalanista", "autonomia", "regionalisme"] }
      ],
      forbiddenTerms: [
        { terms: ["bases de manresa almirall"], reason: "Les Bases de Manresa (1892) van ser redactades per la Unió Catalanista, no per Almirall." }
      ],
      modelAnswer: "Valentí Almirall va trencar amb el republicanisme federal de Pi i Margall per fundar el Centre Català (1882), la primera organització del catalanisme polític. Almirall va ser l'impulsor del Memorial de Greuges (1885), el primer document de protesta de la societat civil catalana entregat al rei Alfons XII en defensa del dret civil i la indústria, i el 1886 va publicar 'Lo Catalanisme', on va teoritzar el regionalisme com a eina de modernització."
    },
    {
      id: "t2_s6",
      title: "La consolidació del catalanisme conservador i el naixement de la Lliga Regionalista",
      situation: "Et trobes a Barcelona l'any 1901. El catalanisme conservador ha anant creixent des de la redacció del primer programa d'autogovern el 1892 i ara s'organitza com un partit modern capaç de competir a les eleccions.",
      mandatoryWords: [
        { display: "Bases de Manresa", variants: ["bases de manresa", "1892"] },
        { display: "Unió Catalanista", variants: ["unio catalanista"] },
        { display: "Enric Prat de la Riba", variants: ["enric prat de la riba", "prat de la riba"] },
        { display: "Lliga Regionalista", variants: ["lliga regionalista", "1801"] }
      ],
      clusters: [
        { label: "Projecte d'autogovern tradicionalista (1892)", weight: 1, terms: ["corts catalanes", "llengua oficial", "sufragi caps de casa"] },
        { label: "Creació de diaris de referència (La Veu de Catalunya)", weight: 1, terms: ["la veu de catalunya", "premsa"] },
        { label: "Victòria electoral i fundació del partit (1901)", weight: 1, terms: ["quatre presidents", "1901", "candidatura", "burgesia"] }
      ],
      forbiddenTerms: [
        { terms: ["psoe", "partit radical lerroux"], reason: "La Lliga Regionalista era el partit de la burgesia catalanista conservadora." }
      ],
      modelAnswer: "L'any 1892, la Unió Catalanista va aprovar les Bases de Manresa, un document fonamental redactat per Enric Prat de la Riba que reclamava la plena sobirania interior per a Catalunya. Després del Desastre del 98 i el desencís amb els partits dinàstics, el sector conservador i industrial es va unificar el 1901 per fundar la Lliga Regionalista, el primer partit catalanista de masses, liderat per Prat de la Riba i Francesc Cambó."
    }
  ],

  // =======================================================================
  // EXERCICI 3: DESENVOLUPAMENT DE TEMES LLARGS (PAU)
  // =======================================================================
  ex3_temes: [
    {
      id: "t2_t1",
      title: "El sistema polític de la Restauració canovista: fonaments, funcionament i oposició (1875–1898)",
      prompt: "Desenvolupa les característiques de l'ordre polític creat per Cánovas del Castillo, el seu funcionament real i les forces polítiques que en van quedar excloses.",
      guidingPoints: [
        "El Manifest de Sandhurst, el retorn dels Borbons i la Constitució de 1876.",
        "El bipartidisme (Conservadors i Liberals), el torn pacífic i el civilisme.",
        "El mecanisme del frau electoral: caciquisme, encasellat i tupinada.",
        "L'oposició al sistema: carlisme, republicanisme, moviment obrer i nacionalismes."
      ],
      clusters: [
        { label: "Constitució de 1876 i Sobirania Compartida", weight: 1.5, terms: ["constituci de 1876", "sobirania compartida", "canovas", "sandhurst", "poder moderador"] },
        { label: "Bipartidisme (Cánovas/Sagasta) i Civilisme", weight: 1.5, terms: ["bipartidisme", "partit conservador", "partit liberal", "sagasta", "torn pacific", "civilisme"] },
        { label: "Mecanisme del Frau Electoral i Caciquisme", weight: 1.5, terms: ["caciquisme", "encasellat", "tupinada", "governador civil", "pucherazo", "corrupcio"] },
        { label: "Forces d'oposició marginades", weight: 1.5, terms: ["carlisme", "republicanisme", "psoe", "ugt", "anarquisme", "catalanisme", "pnb"] }
      ],
      modelOutline: "1) Introducció: El pronunciament de Sagunt (1874) i el disseny canovista exposat al Manifest de Sandhurst per restaurar Alfons XII. 2) La Constitució de 1876: sobirania compartida entre Rei i Corts, bicameralisme, confessionalitat i declaració de drets. 3) El funcionament real: alternança pactada (Pacte del Pardo, 1885) entre el Partit Conservador (Cánovas) i el Partit Liberal (Sagasta) basada en el civilisme. 4) La corrupció electoral: el Ministeri de la Governació feia l'encasellat, els governadors civils el transmetien i els cacics locals l'executaven amb tupinades. 5) L'oposició marginada: carlins (divisió de Nocedal), republicans (Unió Republicana), el moviment obrer (anarquisme i creació del PSOE/UGT) i els nacionalismes perifèrics."
    },
    {
      id: "t2_t2",
      title: "La Guerra d'Ultramar i la Crisi del 98: de les revoltes colonials a la Pau de París",
      prompt: "Analitza l'evolució dels conflictes colonials a Cuba i Filipines, la intervenció dels Estats Units i la resolució del conflicte.",
      guidingPoints: [
        "Els antecedents a Cuba: Pau de Zanjón (1878), Guerra Chiquita (1879) i l'Aranzel de 1891.",
        "L'insurrecció de 1895: José Martí, el Grito de Baire i les estratègies militars (Weyler vs Blanco).",
        "El conflicte a Filipines: Liga Filipina (José Rizal) i Katipunan.",
        "La intervenció dels EUA (explosió del Maine), les batalles navals i el Tractat de París (1898)."
      ],
      clusters: [
        { label: "Insurrecció cubana (Martí / Grito de Baire / Reconcentració)", weight: 1.5, terms: ["jose marti", "grito de baire", "1895", "weyler", "reconcentracio", "ramon blanco", "autonomia 1897"] },
        { label: "Insurrecció a Filipines (Rizal / Katipunan)", weight: 1.5, terms: ["filipines", "jose rizal", "liga filipina", "katipunan", "manila"] },
        { label: "Intervenció dels EUA i incident del Maine", weight: 1.5, terms: ["estats units", "maine", "mckinley", "periodisme groc", "santiago", "cavite"] },
        { label: "Tractat de París de 1898 i venda de colònies de 1899", weight: 1.5, terms: ["pau de paris", "1898", "cessio", "cuba", "filipines", "puerto rico", "alemanya"] }
      ],
      modelOutline: "1) Antecedents: Incompliment de la Pau de Zanjón (1878) i l'impacte de l'Aranzel de 1891 que va perjudicar el comerç amb els EUA. 2) La Guerra de Cuba (1895-1898): fons del Partido Revolucionario Cubano per José Martí i esclat del Grito de Baire (1895). Duresa del general Weyler (reconcentració) i concessió tardana de l'autonomia el 1897 per Ramón Blanco. 3) Filipines: activisme de José Rizal (Liga Filipina) i insurrecció del Katipunan (1896). 4) Guerra Hispanonord-americana (1898): pretext de l'explosió del cuirassat Maine, derrotes navals ràpides a Cavite i Santiago de Cuba. 5) Pau de París (desembre de 1898): cessió de Cuba, Puerto Rico, Filipines i Guam als EUA; venda de les Marianes, Carolines i Palau a Alemanya el 1899."
    },
    {
      id: "t2_t3",
      title: "Les conseqüències del Desastre del 98 i el Regeneracionisme",
      prompt: "Explica l'impacte polític, social, ideològic i militar de la pèrdua de les darreres colònies i les propostes de reforma regeneracionistes.",
      guidingPoints: [
        "La crisi moral i ideològica: el pessimisme i la destrucció del mite de l'imperi.",
        "L'impacte en l'exèrcit: desenvolupament de l'antimilitarisme i el corporativisme militar.",
        "El pensament regeneracionista: Joaquín Costa ('escola i rebost') i la Generació del 98.",
        "Els intents de reforma política (govern Silvela-Polavieja) i la protesta del Tancament de Caixes (1899)."
      ],
      clusters: [
        { label: "Crisi moral i pessimisme ideològic", weight: 1.5, terms: ["crisi moral", "pessimisme", "nacio moribunda", "destruccio del mite"] },
        { label: "Antimilitarisme vs Corporativisme militar", weight: 1.5, terms: ["antimilitarisme", "quintes", "corporativisme", "redencio en metal·lic", "militar"] },
        { label: "Joaquín Costa i la Generació del 98", weight: 1.5, terms: ["joaquín costa", "escola i rebost", "generacio del 98", "unamuno", "baroja", "machado"] },
        { label: "Intent reformista i Tancament de Caixes (1899)", weight: 1.5, terms: ["silvela", "polavieja", "tancament de caixes", "1899", "vaga d'impostos", "villaverde"] }
      ],
      modelOutline: "1) Introducció: El 1898 no va provocar la caiguda immediata de la monarquia, però va causar un trauma ideològic i social. 2) Conseqüències morals i militars: sentiment de 'nació moribunda' en un context europeu imperialista. L'exèrcit va ser acusat del desastre (antimilitarisme popular per les quintes desiguals), reacció corporativa i intervencionista dels militars. 3) El Regeneracionisme: origen en la Institución Libre de Enseñanza. Joaquín Costa denuncia l'oligarquia i el caciquisme i reclama 'escola i rebost'. Anàlisi literària de la Generació del 98 (Unamuno, Baroja, Machado). 4) La gestió política: govern conservador de Silvela i el general Polavieja (1899). La reforma fiscal de Villaverde provoca el Tancament de Caixes a Barcelona (1899), acostant la burgesia catalana al catalanisme polític."
    },
    {
      id: "t2_t4",
      title: "Els orígens i l'evolució del catalanisme polític (1833–1901)",
      prompt: "Analitza el procés de formació de la identitat catalana contemporània, des de la Renaixença cultural fins a la consolidació electoral de la Lliga Regionalista.",
      guidingPoints: [
        "Els antecedents: la Renaixença cultural, l'anticentralisme (bullangues) i el federalisme.",
        "El catalanisme progressista de Valentí Almirall: Centre Català, Memorial de Greuges (1885) i 'Lo Catalanisme'.",
        "El catalanisme conservador: la Lliga de Catalunya, el Vigatanisme, la Unió Catalanista i les Bases de Manresa (1892).",
        "La maduració electoral: el Tancament de Caixes (1899), la Candidatura dels Quatre Presidents i la fundació de la Lliga Regionalista (1901)."
      ],
      clusters: [
        { label: "Renaixença i Federalisme (Pi i Margall)", weight: 1.5, terms: ["renaixença", "jocs florals", "bullangues", "federalisme", "pi i margall", "pacte de tortosa"] },
        { label: "Valentí Almirall (Centre Català / Memorial de Greuges)", weight: 1.5, terms: ["almirall", "centre catala", "memorial de greuges", "1885", "lo catalanisme"] },
        { label: "Catalanisme Conservador (Torras i Bages / Bases de Manresa)", weight: 1.5, terms: ["vigatanisme", "torras i bages", "unio catalanista", "bases de manresa", "1892", "prat de la riba"] },
        { label: "Candidatura dels Quatre Presidents i Lliga Regionalista (1901)", weight: 1.5, terms: ["tancament de caixes", "quatre presidents", "1901", "lliga regionalista", "cambo", "dr robert"] }
      ],
      modelOutline: "1) Antecedents (1833-1874): La Renaixença cultural (Aribau, Jocs Florals) i les primeres protestes anticentralistes (bullangues, rebuig a les quintes) connectades amb el republicanisme federal de Pi i Margall. 2) El catalanisme polític progressista: Valentí Almirall funda el Centre Català (1882), redacta el Memorial de Greuges (1885) entregat a Alfons XII i publica 'Lo Catalanisme' (1886). 3) El catalanisme conservador: escissió de la Lliga de Catalunya (1887), influència del Vigatanisme de Torras i Bages ('La Tradició Catalana'). La Unió Catalanista aprova les Bases de Manresa (1892), primer projecte d'autogovern tradicionalista definit per Prat de la Riba. 4) La maduració i irrupció electoral (1899-1901): El Tancament de Caixes acosta els industrials al catalanisme. El 1901, la victòria de la Candidatura dels Quatre Presidents porta a la fundació de la Lliga Regionalista (Prat de la Riba, Cambó)."
    },
    {
      id: "t2_t5",
      title: "El desenvolupament del moviment obrer a l'Espanya de la Restauració: anarquisme i socialisme",
      prompt: "Explica la implantació i evolució dels corrents socialista i anarquista durant el període de la Restauració Borbònica.",
      guidingPoints: [
        "La introducció de la Primera Internacional i la divisió entre marxistes i anarquistes.",
        "El socialisme: fundació del PSOE (1879) i la UGT (1888), implantació territorial i la Llei d'associacions de 1887.",
        "L'anarquisme: tendències (anarcocol·lectivisme, acció directa/atemptats) i la repressió estatal.",
        "Les reivindicacions laborals: la festivitat de l'Primer de Maig i la lluita per la jornada de 8 hores."
      ],
      clusters: [
        { label: "Socialisme marxista (PSOE, UGT, Pablo Iglesias)", weight: 1.5, terms: ["psoe", "1879", "ugt", "1888", "pablo iglesias", "el socialista", "cases del poble"] },
        { label: "Implantació socialista i Llei d'associacions de 1887", weight: 1.5, terms: ["madrid", "biscaia", "asturies", "llei d'associacions", "1887", "clandestinitat"] },
        { label: "Anarquisme (Acció Directa / Anarcocol·lectivisme)", weight: 1.5, terms: ["anarquisme", "acció directa", "atemptats", "anarcocol·lectivisme", "catalunya", "andalusia"] },
        { label: "Reivindicacions laborals i Primer de Maig", weight: 1.5, terms: ["primer de maig", "1890", "jornada de 8 hores", "vagues", "ii internacional"] }
      ],
      modelOutline: "1) Introducció: L'impacte de la I Internacional a Espanya i la posterior divisió de la classe treballadora. 2) El Socialisme marxista: Fundació del PSOE per Pablo Iglesias a Madrid (1879) i creació del sindicat UGT a Barcelona (1888). La Llei d'associacions de 1887 permet la seva legalització. Estratègia gradualista i electoralista amb implantació a Madrid, Biscaia i Astúries, organitzats en Cases del Poble. 3) L'Anarquisme: Corrent majoritari a Catalunya i Andalusia. Divisió entre l'anarcocol·lectivisme sindicalista i la tendència d'acció directa o 'propaganda pel fet' (atemptats terroristes als anys 90), resolts amb una duríssima repressió estatal (processos de Montjuïc). 4) Reivindicacions globals: celebració del Primer de Maig des de 1890 organitzat per la II Internacional per reclamar la jornada de 8 hores."
    },
    {
      id: "t2_t6",
      title: "Els nacionalismes perifèrics i regionalismes a l'Espanya de la Restauració: País Basc, Galícia i altres territoris",
      prompt: "Analitza l'emergència dels moviments nacionalistes i regionalistes fora de Catalunya com a reacció al model d'Estat centralista de la Restauració.",
      guidingPoints: [
        "El nacionalisme basc: l'abolició dels furs (1876), els concerts econòmics (1878), Sabino Arana i la fundació del PNB (1895).",
        "El galleguisme: el Rexurdimento cultural, l'endarreriment econòmic, l'emigració i l'Asamblea de 1887 (Murguía).",
        "Altres manifestacions regionalistes: València, Aragó i Andalusia.",
        "La resposta de l'Estat centralista davant la diversitat territorial."
      ],
      clusters: [
        { label: "Nacionalisme Basc (Sabino Arana / PNB / Furs)", weight: 1.5, terms: ["sabino arana", "pnb", "1895", "euskadi", "furs", "concerts economics", "maketos"] },
        { label: "Galleguisme (Rexurdimento / Murguía / Brañas)", weight: 1.5, terms: ["galleguisme", "rexurdimento", "rosalia de castro", "murguia", "brañas", "1887", "emigracio"] },
        { label: "Altres Regionalismes (València, Aragó, Andalusia)", weight: 1.5, terms: ["valencianisme", "blasco ibañez", "aragonesisme", "joaquín costa", "andalusisme", "republicanisme federal"] },
        { label: "Reacció unificadora de l'Estat Borbònic", weight: 1.5, terms: ["centralisme", "unitarisme", "estat borbonic", "uniformitzacio"] }
      ],
      modelOutline: "1) Context: Rebuig al centralisme uniformitzador dels governs liberals borbònics. 2) El Nacionalisme Basc: Provocat per l'abolició dels furs (1876) després de la 3a Guerra Carlina i la concessió dels concerts econòmics (1878). La industrialització i immigració massiva van portar Sabino Arana a crear el PNB (1895), defensant la raça, la llengua, la fe catòlica i els drets forals (posicions inicialment independentistes que es van moderar). 3) El Galleguisme: Més feble i tardà a causa del domini de la noblesa i la feblesa de la burgesia. Origen cultural en el Rexurdimento (Rosalía de Castro). Manuel Murguía i Alfredo Brañas impulsen l'Asamblea de 1887 i el projecte de Constitució per a l'Estat Galaic com a resposta a l'endarreriment i l'emigració. 4) Altres moviments: València (Jocs Florals, Blasco Ibáñez), Aragó (defensa del dret civil, Joaquín Costa) i Andalusia (lligat al republicanisme federal)."
    }
  ],

  // =======================================================================
  // EXERCICI 4: TEST ABC AMB PENALITZACIÓ (-0.5p PER ERROR)
  // =======================================================================
  ex4_abc: [
    {
      id: "t2_abc1",
      statement: "El Manifest de Sandhurst (desembre de 1874), redactat per Cánovas del Castillo i signat pel futur rei Alfons XII, proposava:",
      options: {
        a: "La restauració de la monarquia absoluta d'estil tradicional i carlí.",
        b: "Una monarquia constitucional, catòlica i de tarannà liberal moderat.",
        c: "La proclamació d'una República Federal presidida per la dinastia Borbó."
      },
      correct: "b",
      exp: "El manifest prometia un règim monàrquic constitucional, d'ordre i liberal moderat per superar la inestabilitat del Sexenni."
    },
    {
      id: "t2_abc2",
      statement: "Quin esdeveniment militar va accelerar el retorn dels Borbons el desembre de 1874?",
      options: {
        a: "El pronunciament del general Arsenio Martínez Campos a Sagunt.",
        b: "L'aixecament de les tropes del general Joan Prim a Reus.",
        c: "La conquesta militar de la ciutat d'Estella per les tropes carlines."
      },
      correct: "a",
      exp: "El pronunciament de Martínez Campos a Sagunt va proclamar Alfons XII rei d'Espanya avançant-se als plans civils de Cánovas."
    },
    {
      id: "t2_abc3",
      statement: "Segons la Constitució de 1876, la sobirania residia:",
      options: {
        a: "Exclusivament en el Poble Espanyol mitjançant sufragi universal.",
        b: "Compartida entre el Rei i les Corts Generals.",
        c: "Únicament en la persona del Monarca per dret diví."
      },
      correct: "b",
      exp: "La Constitució de 1876 és una mostra del liberalisme doctrinari que atorgava la sobirania compartida al Rei i les Corts."
    },
    {
      id: "t2_abc4",
      statement: "Com va quedar regulat el sufragi electoral en la Llei Electoral de 1878 durant el govern conservador?",
      options: {
        a: "Es va mantenir el sufragi universal masculí aprovat el 1869.",
        b: "Es va restablir el sufragi censatari molt restringit als grans contribuents.",
        c: "Es va aprovar el sufragi universal directament per a homes i dones."
      },
      correct: "b",
      exp: "El 1878 els conservadors van tornar al sufragi censatari, on només votava un 5% de la població masculina més rica."
    },
    {
      id: "t2_abc5",
      statement: "Quin partit polític liderava Práxedes Mateo Sagasta durant la Restauració?",
      options: {
        a: "El Partit Liberal-Conservador.",
        b: "El Partit Liberal-Fusionista.",
        c: "El Partit Democràtic Posibilista."
      },
      correct: "b",
      exp: "Sagasta va encapçalar el Partit Liberal (o Liberal Fusionista), que agrupava antics progressistes, unionistes i democràtes moderats."
    },
    {
      id: "t2_abc6",
      statement: "Què va ser el Pacte del Pardo (1885)?",
      options: {
        a: "Un acord entre Espanya i els Estats Units per evitar la guerra colonial a Cuba.",
        b: "Un pacte entre Cánovas i Sagasta per donar suport a la regència de Maria Cristina i garantir el torn pacífic després de la mort d'Alfons XII.",
        c: "Un tractat secret entre carlins i integristes per unificar l'extrema dreta espanyola."
      },
      correct: "b",
      exp: "Davant la mort prematura d'Alfons XII el 1885, els dos líders dinàstics van pactar la continuïtat del tornisme per protegir la monarquia."
    },
    {
      id: "t2_abc7",
      statement: "L'any 1890, sota el govern liberal de Sagasta, es va aprovar una mesura política clau. Quina va ser?",
      options: {
        a: "La reintroducció de la Inquisició i de la censura prèvia.",
        b: "L'aprovació del sufragi universal masculí per als majors de 25 anys.",
        c: "La concessió de la independència immediata a les Filipines."
      },
      correct: "b",
      exp: "El govern liberal de Sagasta va reintroduir el sufragi universal masculí el 1890, tot i que el caciquisme en va neutralitzar l'efecte democràtic."
    },
    {
      id: "t2_abc8",
      statement: "En el llenguatge polític de la Restauració, què era l' 'encasellat' (encasillado)?",
      options: {
        a: "El procés d'engressament forçós dels reclutes sense recursos per anar a Cuba.",
        b: "La confecció de la llista de candidats que havien de sortir elegits a cada districte, realitzada des del Ministeri de la Governació.",
        c: "El recompte de vots manuals realitzat el dia de les eleccions municipals."
      },
      correct: "b",
      exp: "L'encasellat era la casella o grella que el ministre omplia assignant cada escó al candidat oficialista pactat abans de votar."
    },
    {
      id: "t2_abc9",
      statement: "Quina funció tenien els 'cacics' en el sistema electoral de la Restauració?",
      options: {
        a: "Supervisar la netedat democràtica del sufragi en nom de les Corts.",
        b: "Garantir els vots pactats als districtes locals mitjançant el suborn, la coacció i el xantatge econòmic.",
        c: "Organitzar la resistència armada contra els governs liberals de Madrid."
      },
      correct: "b",
      exp: "Els cacics eren notables locals (propietaris, advocats) que dominaven la població rural i garantien el resultat manipulant les urnes."
    },
    {
      id: "t2_abc10",
      statement: "Com es coneixia popularment el conjunt de trampes electorals (falsificació de censos, destrucció de paperetes, vot de morts)?",
      options: {
        a: "Bullanga.",
        b: "Tupinada (o pucherazo).",
        c: "Jamància."
      },
      correct: "b",
      exp: "La tupinada o 'pucherazo' era la manipulació directa i il·legal de les urnes i les actes d'escrutini."
    },
    {
      id: "t2_abc11",
      statement: "Quin va ser el comportament de l'exèrcit respecte a la política durant la primera etapa de la Restauració?",
      options: {
        a: "Va continuar fent pronunciaments militars continus cada dos o tres anys.",
        b: "Es va establir el principi de 'civilisme', subordinant el poder militar al poder civil.",
        c: "L'exèrcit va ser dissolt i sustituït completament per la Milícia Nacional."
      },
      correct: "b",
      exp: "Cánovas va aconseguir allunyar els militars de la política directa (civilisme), atorgant-los un elevat pressupost i autonomia interna."
    },
    {
      id: "t2_abc12",
      statement: "Quin dirigent carlí va signar un manifest el 1875 reconeixent Alfons XII com a rei i posant fi a la lluita armada?",
      options: {
        a: "Ramón Cabrera.",
        b: "Cándido Nocedal.",
        c: "Manuel Vázquez de Mella."
      },
      correct: "a",
      exp: "El general Ramón Cabrera va acceptar la política de pacificació d'Alfons XII i va demanar als carlins integrar-se a la legalitat."
    },
    {
      id: "t2_abc13",
      statement: "L'any 1888, Ramón Nocedal va protagonitzar una escissió del carlisme per fundar una nova força política d'extrema dreta. Quina va ser?",
      options: {
        a: "La Lliga Regionalista.",
        b: "El Partido Católico Nacional (Integristes).",
        c: "La Unió Republicana."
      },
      correct: "b",
      exp: "Nocedal va fundar el partit integrista rebutjant qualsevol participació en el sistema liberal i acusant els carlins moderats de touesa."
    },
    {
      id: "t2_abc14",
      statement: "On es va fundar el Partido Socialista Obrero Español (PSOE) l'any 1879 i sota el lideratge de qui?",
      options: {
        a: "A Barcelona, per Valentí Almirall.",
        b: "A Madrid, per Pablo Iglesias Posse.",
        c: "A Bilbao, per Sabino Arana."
      },
      correct: "b",
      exp: "Pablo Iglesias va fundar el PSOE en una casa de menjars de Madrid el 2 de maig de 1879."
    },
    {
      id: "t2_abc15",
      statement: "Quin sindicat d'orientació socialista va ser creat l'any 1888 a Barcelona?",
      options: {
        a: "La Confederació Nacional del Treball (CNT).",
        b: "La Unión General de Trabajadores (UGT).",
        c: "La Solidaritat Obrera."
      },
      correct: "b",
      exp: "La UGT va ser fundada el 1888 com a organització de la classe treballadora vinculada al PSOE."
    },
    {
      id: "t2_abc16",
      statement: "Quina llei aprovada pel govern liberal el 1887 va permetre la legalització dels sindicats i partits obrers a Espanya?",
      options: {
        a: "La Llei de Premsa.",
        b: "La Llei d'Associacions.",
        c: "La Llei del Jurat."
      },
      correct: "b",
      exp: "La Llei d'Associacions de 1887 va treure el PSOE i les associacions obreres de la clandestinitat."
    },
    {
      id: "t2_abc17",
      statement: "Quines eren les principals zones d'implantació territorial del socialisme espanyol a finals del segle XIX?",
      options: {
        a: "Catalunya i Andalusia.",
        b: "Madrid, Biscaia i Astúries.",
        c: "Galícia, Aragó i València."
      },
      correct: "b",
      exp: "El PSOE i la UGT van tenir el seu nucli fort en les zones mineres i industrials de Madrid, el País Basc (Biscaia) i Astúries."
    },
    {
      id: "t2_abc18",
      statement: "Quina pau va posar fi a la Guerra dels Deu Anys a Cuba l'any 1878?",
      options: {
        a: "La Pau de Zanjón.",
        b: "El Tractat de París.",
        c: "El Compromís de Casp."
      },
      correct: "a",
      exp: "El general Martínez Campos va signar la Pau de Zanjón (1878), prometent amnistia, abolició de l'esclavitud i reformes polítiques."
    },
    {
      id: "t2_abc19",
      statement: "Com es va anomenar el breu intent d'insurrecció cubana que va esclatar l'any 1879 degut al retard de les reformes promesa?",
      options: {
        a: "Guerra Chiquita.",
        b: "Grito de Baire.",
        c: "Setmana Tràgica."
      },
      correct: "a",
      exp: "La Guerra Chiquita (1879) va fracassar ràpidament per la manca d'armament i la superioritat de l'exèrcit espanyol."
    },
    {
      id: "t2_abc20",
      statement: "L'any 1886, el govern de la metròpoli va aprovar finalment una mesura social molt reclamada a Cuba. Quina va ser?",
      options: {
        a: "La independència de l'illa.",
        b: "L'abolició definitiva de l'esclavitud.",
        c: "El comerç lliure sense cap tipus d'aranzel amb els Estats Units."
      },
      correct: "b",
      exp: "L'esclavitud a Cuba va ser definitivament abolida l'any 1886 sota el govern de Sagasta."
    },
    {
      id: "t2_abc21",
      statement: "Quin va ser l'impacte de la Tarifa Aranzelària aprovada per Espanya l'any 1891 a Cuba?",
      options: {
        a: "Va afavorir les exportacions cubanes cap a Llatinoamèrica.",
        b: "Va encarir les importacions de productes no espanyols, perjudicant el comerç amb els EUA i indignant els productors cubans.",
        c: "Va suprimir tots els impostos duaners entre Cuba i els Estats Units."
      },
      correct: "b",
      exp: "L'aranzel proteccionista de 1891 va obligar Cuba a comprar productes espanyols cars i va provocar amenaces de represàlies dels EUA."
    },
    {
      id: "t2_abc22",
      statement: "Qui va fundar el Partido Revolucionario Cubano (PRC) l'any 1893 amb l'objectiu d'aconseguir la independència de l'illa?",
      options: {
        a: "José Martí.",
        b: "Antonio Maceo.",
        c: "Máximo Gómez."
      },
      correct: "a",
      exp: "El poeta i polític José Martí va unificar l'independentisme cubà fundant el PRC des de l'exili."
    },
    {
      id: "t2_abc23",
      statement: "Quin fet va marcar l'inici de la gran insurrecció independentista cubana de 1895?",
      options: {
        a: "El Grito de Baire.",
        b: "L'atemptat del carrer del Turco.",
        c: "L'explosió del cuirassat Maine."
      },
      correct: "a",
      exp: "El 24 de febrer de 1895 va tenir lloc l'aixecament generalitzat conegut com el Grito de Baire."
    },
    {
      id: "t2_abc24",
      statement: "Quina estratègia militar va aplicar el general Valeriano Weyler a Cuba a partir de 1896 per aïllar els rebels?",
      options: {
        a: "Una política de negociació i pactes amb els criolls.",
        b: "La política de reconcentració de la població rural en poblats fortificats.",
        c: "La concessió immediata de l'autonomia aranzelària."
      },
      correct: "b",
      exp: "Weyler va forçar els camperols a reconcentrar-se a les ciutats per evitar que ajudessin la guerrilla, causant milers de morts per fam i malalties."
    },
    {
      id: "t2_abc25",
      statement: "A les Filipines, quina organització fundada per José Rizal el 1892 reclamava reformes polítiques de caràcter pacífic?",
      options: {
        a: "El Katipunan.",
        b: "La Liga Filipina.",
        c: "El Partit Autonomista."
      },
      correct: "b",
      exp: "José Rizal va fundar la Liga Filipina defensant posicions reformistes i no violentes abans de ser executat el 1896."
    },
    {
      id: "t2_abc26",
      statement: "Com es deia l'organització secreta radical filipina que va liderar la insurrecció armada el 1896?",
      options: {
        a: "Katipunan.",
        b: "Grito de Manila.",
        c: "Unió Constitució."
      },
      correct: "a",
      exp: "El Katipunan, liderat per Andrés Bonifacio, va promoure la revolta armada independentista a Filipines."
    },
    {
      id: "t2_abc27",
      statement: "Quin va ser el pretext utilitzat pels Estats Units per intervenir militarment i declarar la guerra a Espanya el 1898?",
      options: {
        a: "L'execució del general Martínez Campos a l'Havana.",
        b: "La misteriosa explosió del cuirassat USS Maine al port de l'Havana.",
        c: "L'atac de la marina espanyola a la ciutat de Nova York."
      },
      correct: "b",
      exp: "L'explosió del Maine el febrer de 1898, atribuïda falsament a Espanya per la premsa groga nord-americana, va iniciar el conflicte."
    },
    {
      id: "t2_abc28",
      statement: "En quina batalla naval decisiva de juliol de 1898 la flota nord-americana va destruir completament l'esquadra espanyola a Cuba?",
      options: {
        a: "Batalla de Cavite.",
        b: "Batalla de Santiago de Cuba.",
        c: "Batalla de Trafalgar."
      },
      correct: "b",
      exp: "L'esquadra de l'almirall Cervera va ser aniquilada en sortir del port de Santiago de Cuba el 3 de juliol de 1898."
    },
    {
      id: "t2_abc29",
      statement: "A quina potència imperialista va vendre Espanya les darreres colònies del Pacífic (Marianes, Carolines i Palau) l'any 1899?",
      options: {
        a: "A la Gran Bretanya.",
        b: "A Alemanya.",
        c: "Al Japó."
      },
      correct: "b",
      exp: "Incapaç de defensar-les, Espanya va vendre els darrers illots del Pacífic a l'Imperi Alemany el 1899 per 25 milions de marques."
    },
    {
      id: "t2_abc30",
      statement: "Com funcionava el sistema de reclutament militar ('quintes') a Espanya durant la Guerra d'Ultramar?",
      options: {
        a: "Tots els joves sense excepció anaven obligatòriament al front.",
        b: "Les classes riques podien evitar anar a la guerra pagant la 'redenció en metàl·lic' (1.500 ptes), enviant-hi només les classes populars.",
        c: "L'exèrcit colonial estava format exclusivament per soldats professionals voluntaris."
      },
      correct: "b",
      exp: "La redenció en metàl·lic permetia a les famílies benestants lliurar els fills de la guerra, provocant un fort antimilitarisme popular."
    },
    {
      id: "t2_abc31",
      statement: "Qui va ser el principal representant del Regeneracionisme espanyol, autor del lema 'Escola i rebost'?",
      options: {
        a: "Joaquín Costa.",
        b: "Francisco Giner de los Ríos.",
        c: "Valentí Almirall."
      },
      correct: "a",
      exp: "Joaquín Costa va ser la figura central del regeneracionisme, defensant la necessitat de millorar l'educació i el camp espanyol."
    },
    {
      id: "t2_abc32",
      statement: "Quina institució pedagògica fundada el 1876 per Francisco Giner de los Ríos defensava una renovació científica i laica inspirada en el Krausisme?",
      options: {
        a: "La Institución Libre de Enseñanza (ILE).",
        b: "L'Ateneu Barcelonès.",
        c: "La Real Academia de la Historia."
      },
      correct: "a",
      exp: "La Institución Libre de Enseñanza va ser el focus intel·lectual més important de renovació pedagògica i científica a Espanya."
    },
    {
      id: "t2_abc33",
      statement: "Què va ser el 'Tancament de Caixes' esdevingut a Barcelona la tardor de 1899?",
      options: {
        a: "Un tancament de les caixes d'estalvis per fallida financera derivada de la pèrdua de Cuba.",
        b: "Una protesta fiscal dels comerciants i industrials que es van negar a pagar els nous impostos del govern de la Restauració.",
        c: "Una vaga general convocada pel sindicat UGT per exigir la jornada de 8 hores."
      },
      correct: "b",
      exp: "Encapçalat per l'alcalde Dr. Robert, els comerciants de Barcelona van donar de baixa els seus negocis per no pagar l'impost de guerra de Villaverde."
    },
    {
      id: "t2_abc34",
      statement: "Quin poema emblemàtic de Joan Maragall escrit el 1898 expressava el dolor i el distanciament de Catalunya envers la política colonial espanyola?",
      options: {
        a: "La Pàtria.",
        b: "Oda a Espanya ('Escolta, Espanya...').",
        c: "Els Segadors."
      },
      correct: "b",
      exp: "A l' 'Oda a Espanya', Maragall criticava el sacrifici inútil de joves i la passivitat d'una Espanya ancorada en glòries mortes."
    },
    {
      id: "t2_abc35",
      statement: "Quin va ser el primer diari escrit íntegrament en català, fundat per Valentí Almirall l'any 1879?",
      options: {
        a: "La Veu de Catalunya.",
        b: "Diari Català.",
        c: "La Renaixensa."
      },
      correct: "b",
      exp: "Valentí Almirall va fundar el 'Diari Català' el 1879 com a òrgan de difusió del catalanisme."
    },
    {
      id: "t2_abc36",
      statement: "Quin document presentat directament al rei Alfons XII l'any 1885 és considerat el primer manifest conjunt de la societat civil catalana?",
      options: {
        a: "Les Bases de Manresa.",
        b: "El Memorial de Greuges.",
        c: "El Missatge a la Reina Regent."
      },
      correct: "b",
      exp: "El Memorial de Greuges (1885) reclamava la defensa del dret civil català i el proteccionisme per a la indústria."
    },
    {
      id: "t2_abc37",
      statement: "Quin corrent del catalanisme, liderat per Torras i Bages, defensava una Catalunya tradicional basada en la fe catòlica i la família pairal?",
      options: {
        a: "El Federalisme.",
        b: "El Vigatanisme.",
        c: "El Catorzisme."
      },
      correct: "b",
      exp: "El Vigatanisme va ser el corrent catalanista conservador i d'arrel clerical articulat al voltant del bisbat de Vic."
    },
    {
      id: "t2_abc38",
      statement: "Quin era l'objectiu principal de les 'Bases de Manresa' aprovades per la Unió Catalanista l'any 1892?",
      options: {
        a: "Establir un programa de reformes socialistes per a la classe obrera.",
        b: "Fixar les bases per a una Constitució Regional Catalana amb plena autonomia interior i oficialitat de la llengua.",
        c: "Demandar la proclamació de la República Espanyola."
      },
      correct: "b",
      exp: "Les Bases de Manresa (1892) establien l'oficialitat de la llengua catalana, Corts pròpies i la reserva de càrrecs als naturals de la terra."
    },
    {
      id: "t2_abc39",
      statement: "Quina candidatura va aconseguir una històrica victòria electoral a Barcelona l'any 1901 trenca el dominis dels partits dinàstics?",
      options: {
        a: "La Candidatura dels Quatre Presidents.",
        b: "La Unió Republicana.",
        c: "El Bloc d'Esquerres."
      },
      correct: "a",
      exp: "La Candidatura dels Quatre Presidents (Dr. Robert, Domènech i Montaner, Rusiñol i Torras) va guanyar a Barcelona el 1901 i va originar la Lliga Regionalista."
    },
    {
      id: "t2_abc40",
      statement: "Qui va ser el principal teòric de la Lliga Regionalista, autor de l'obra 'La Nacionalitat Catalana' (1906)?",
      options: {
        a: "Francesc Cambó.",
        b: "Enric Prat de la Riba.",
        c: "Valentí Almirall."
      },
      correct: "b",
      exp: "Enric Prat de la Riba va ser el pensador clau del catalanisme conservador i posterior primer president de la Mancomunitat."
    },
    {
      id: "t2_abc41",
      statement: "Quin moviment cultural de redescobriment de la llengua i la literatura gallega es va desenvolupar durant el segle XIX (Rosalía de Castro)?",
      options: {
        a: "O'Rexurdimento.",
        b: "La Renaixença.",
        c: "El Foralisme."
      },
      correct: "a",
      exp: "O'Rexurdimento va ser el moviment de recuperació cultural i lingüística de Galícia equivalent a la Renaixença catalana."
    },
    {
      id: "t2_abc42",
      statement: "Quin nom va encunyar Sabino Arana l'any 1895 per designar la pàtria o terra dels bascos?",
      options: {
        a: "Bizkaia.",
        b: "Euskadi.",
        c: "Euskal Herria."
      },
      correct: "b",
      exp: "Sabino Arana va crear el terme 'Euskadi' per definir el país dels qui se senten bascos des de la perspectiva del PNB."
    }
  ]
};
window.QuestionBank.TRIMESTER_DATA[2] = {
  id: 2,
  shortTitle: "Trimestre 2",
  title: "Trimestre 2 (Properament)",
  desc: "Contingut en preparació.",
  color: "bg-duoOrange",
  available: false
};

window.QuestionBank.TRIMESTER_DATA[3] = {
  id: 3,
  shortTitle: "Trimestre 3",
  title: "Trimestre 3 (Properament)",
  desc: "Contingut en preparació.",
  color: "bg-duoPurple",
  available: false
};
