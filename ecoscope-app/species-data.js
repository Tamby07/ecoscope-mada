// Base de données de densité du bois — extraite du Rapport final de catégorisation
// des bois de Madagascar (RAZAFIMAHATRATRA, MEDD, Mars 2025), Tableaux 12 et 13.
// 115 espèces : 71 (écorégion humide) + 44 (écorégion sèche).
// densite en g/cm3 (D12 : densité mesurée à 12% d'humidité).
const WOOD_DENSITY_DB = [
  {
    "vernaculaire": "Afoantignana",
    "scientifique": "_",
    "densite": 0.92,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Amaninombilahy",
    "scientifique": "Eremolaena sp.",
    "densite": 0.96,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ambora",
    "scientifique": "Tambourissa sp.",
    "densite": 0.7,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ambora esp1",
    "scientifique": "Tambourissa uapacifolia",
    "densite": 0.71,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ambora esp2",
    "scientifique": "Tambourissa religiosa",
    "densite": 0.66,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ampoly",
    "scientifique": "Vepris macruphylla",
    "densite": 0.9,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Anakaraky",
    "scientifique": "Pongamiopsis sp.",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Ankahatra",
    "scientifique": "Canthium sp.",
    "densite": 0.94,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Antervaratra beravina",
    "scientifique": "Potameia sp.",
    "densite": 0.92,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Antervaratra kely ravina",
    "scientifique": "Potameia sp.",
    "densite": 0.72,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Atamba",
    "scientifique": "Clerodendrum sp.",
    "densite": 0.71,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Beholitsy",
    "scientifique": "Crateva greveana",
    "densite": 0.63,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Bois de rose",
    "scientifique": "_",
    "densite": 0.99,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Bonara",
    "scientifique": "Albizia lebbeck",
    "densite": 0.74,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Dangoa",
    "scientifique": "Strychnos madagascariensis",
    "densite": 0.67,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Ditimena",
    "scientifique": "Abrahamia ditimena",
    "densite": 0.8,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Fagnazava",
    "scientifique": "Mystroxylon aethiopicum",
    "densite": 0.82,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Fandramanana",
    "scientifique": "Aphloia theiformis",
    "densite": 0.67,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Forofoky esp1",
    "scientifique": "Diospyros sp.",
    "densite": 0.99,
    "categorie": "Cat1 (très\nnoble)",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Gavoala, Hompa",
    "scientifique": "Eugenia goviala",
    "densite": 0.96,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hafomena",
    "scientifique": "Dombeya lucida",
    "densite": 0.64,
    "categorie": "Cat. IV",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hafotra",
    "scientifique": "Dombeya laurifolia",
    "densite": 0.61,
    "categorie": "Cat. IV",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Haronga",
    "scientifique": "Psorospermum androsaemifolium",
    "densite": 0.76,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Hazinina",
    "scientifique": "Symphonia sp.",
    "densite": 0.77,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hazokataky",
    "scientifique": "Viguieranthus alternans",
    "densite": 0.85,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Hazombalala",
    "scientifique": "Macphersonia gracile",
    "densite": 0.88,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Hazombato",
    "scientifique": "Bembicia axillaris",
    "densite": 0.94,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hazombatomena",
    "scientifique": "Bembicia uniflora",
    "densite": 0.9,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hazomboatango",
    "scientifique": "_",
    "densite": 1.05,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Hazompasika esp1",
    "scientifique": "Tannodia perreri",
    "densite": 0.61,
    "categorie": "Cat. IV",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hazompasika esp2",
    "scientifique": "Orfilea coriacea",
    "densite": 0.78,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hazondamokana",
    "scientifique": "Amyrea humbertii",
    "densite": 0.61,
    "categorie": "Cat. IV",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Helana",
    "scientifique": "Sarcolaena sp.",
    "densite": 0.96,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Hopy",
    "scientifique": "Rhus thouarsii",
    "densite": 0.53,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Kafeala",
    "scientifique": "Coffea sp.",
    "densite": 0.87,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Karabo",
    "scientifique": "Cordyla haraka",
    "densite": 0.98,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Katrafay",
    "scientifique": "Cedrelopsis grevei",
    "densite": 1.04,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Keliletaky",
    "scientifique": "Dodonaea viscosa",
    "densite": 0.87,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Kijy (Kija)",
    "scientifique": "Symphonia fasciculata",
    "densite": 0.68,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Kisaka",
    "scientifique": "Brachylaena perrieri",
    "densite": 0.96,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Kitata",
    "scientifique": "Bridelia pervilleana",
    "densite": 0.64,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Lalona esp1",
    "scientifique": "Pterophylla bojeriana",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Lalona esp2",
    "scientifique": "Pterophylla sp.",
    "densite": 0.97,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Lambigna",
    "scientifique": "Baudouinia fluggeiformis",
    "densite": 1.02,
    "categorie": "Cat1\n(grande\nvaleur)",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Lovainafy",
    "scientifique": "Dicraeopetalum sp.",
    "densite": 1.06,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Magnendraky",
    "scientifique": "Salvadoropsis sp.",
    "densite": 0.81,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Malaohazo",
    "scientifique": "_",
    "densite": 0.96,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Malaohazo, Mandravasarotra",
    "scientifique": "_",
    "densite": 0.94,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Mangarahara",
    "scientifique": "Stereospermum euphorioides",
    "densite": 0.96,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Matalazo",
    "scientifique": "Acridocarpus excelsus",
    "densite": 0.78,
    "categorie": "Cat. V",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Matsaky",
    "scientifique": "_",
    "densite": 0.88,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Menahihy",
    "scientifique": "Erythroxylum buxifolium",
    "densite": 0.78,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Menahihy esp1",
    "scientifique": "Erythroxylum sphaeranthum",
    "densite": 0.87,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Menahy",
    "scientifique": "Campylospermum deltoideum",
    "densite": 0.82,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Mendoravy",
    "scientifique": "Albizia boivinii",
    "densite": 0.71,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Moara",
    "scientifique": "Asteropeia sp.",
    "densite": 0.97,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Moara mainty",
    "scientifique": "Asteropeia micraster",
    "densite": 0.98,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nanto be ravina",
    "scientifique": "Faucherea sp.",
    "densite": 0.98,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nanto esp1",
    "scientifique": "Chrysophyllum aff. fenerivensis",
    "densite": 0.73,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nanto esp2",
    "scientifique": "Chrysophyllum sp.",
    "densite": 0.71,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nanto esp3",
    "scientifique": "Chrysophyllum sp.",
    "densite": 0.74,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nanto esp4",
    "scientifique": "Faucherea sp.",
    "densite": 1.01,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nanto madinidravina",
    "scientifique": "Mumisops sp.",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Nato, Sarikily",
    "scientifique": "Capurodendron microphyllum",
    "densite": 0.96,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Pepolahy",
    "scientifique": "Tabernaemontana coffeoides",
    "densite": 0.69,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Pikombalala",
    "scientifique": "Schizolaena rosea",
    "densite": 1.06,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Rahiny",
    "scientifique": "Cleistanthus sp.",
    "densite": 0.84,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ramy esp1",
    "scientifique": "Canarium oblongifolium",
    "densite": 0.68,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ramy fotsy",
    "scientifique": "Canarium aff. bullatum",
    "densite": 0.65,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Ramy mena",
    "scientifique": "Canarium aff. globosum",
    "densite": 0.75,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Reampy",
    "scientifique": "Brexiella ilicifolia",
    "densite": 0.77,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Relefo",
    "scientifique": "Strychnos diplotricha",
    "densite": 0.77,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Remeloky",
    "scientifique": "Diospyros tropophylla",
    "densite": 1.01,
    "categorie": "Cat1 (très\nnoble)",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Repiky",
    "scientifique": "Premna sp.",
    "densite": 0.79,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Rotra",
    "scientifique": "Syzygium emirnense",
    "densite": 0.82,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Rotra Be Ravina",
    "scientifique": "Syzygium bernieri",
    "densite": 0.78,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Rotra esp1",
    "scientifique": "Syzygium sp.",
    "densite": 0.81,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Rotra Mena",
    "scientifique": "Syzygium sp.",
    "densite": 0.84,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Sakoambanditsy",
    "scientifique": "Sclerocarya caffra",
    "densite": 0.42,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Sambalahy",
    "scientifique": "Albizia mainaea",
    "densite": 0.65,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Sary",
    "scientifique": "Cryptocarya sp.",
    "densite": 0.71,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Taikafotsy",
    "scientifique": "Hibiscus sp.",
    "densite": 0.64,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Taolandambo",
    "scientifique": "_",
    "densite": 0.83,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Tapika",
    "scientifique": "Cryptocarya sp.",
    "densite": 0.89,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Tavolo",
    "scientifique": "Cryptocarya crassifolia",
    "densite": 0.88,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Tavolopika",
    "scientifique": "Cryptocarya sp.",
    "densite": 0.86,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Tohiravy",
    "scientifique": "Phyllarthron humblotianum",
    "densite": 0.97,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Tsimahamasatsokina",
    "scientifique": "Memecylon sp.",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Tsingolofilo",
    "scientifique": "Gymnosporia polyacantha",
    "densite": 0.67,
    "categorie": "Cat. V",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Tsipatika",
    "scientifique": "Streblus dimepate",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Tsiramiramy",
    "scientifique": "Micronychia tsiramiramy",
    "densite": 0.63,
    "categorie": "Cat. IV",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Tsitake",
    "scientifique": "Abrahamia phillipsonii",
    "densite": 0.76,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Valanary",
    "scientifique": "Plagioscyphus jumellei",
    "densite": 0.78,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Valiandro",
    "scientifique": "Quivisianthe papinae",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Vaovy esp1",
    "scientifique": "Tetrapterocarpon sp.",
    "densite": 0.95,
    "categorie": "Cat. II",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Varo",
    "scientifique": "Ehretia cymosa",
    "densite": 0.75,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Varongy esp1",
    "scientifique": "Ocotea sp.",
    "densite": 0.82,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Varongy esp2",
    "scientifique": "Ocotea foveolata",
    "densite": 0.65,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Varongy esp3",
    "scientifique": "Ocotea racemosa",
    "densite": 0.71,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Varongy esp4",
    "scientifique": "Ocotea sp.",
    "densite": 0.78,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Varongy esp5",
    "scientifique": "Ocotea sp.",
    "densite": 0.78,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Varongy Ravimanga",
    "scientifique": "Ocotea sp.",
    "densite": 0.7,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Vintanona",
    "scientifique": "Calophyllum milvum",
    "densite": 0.67,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Voandelaky",
    "scientifique": "Melia azedarach",
    "densite": 0.64,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Voandrozana",
    "scientifique": "Schizolaena sp.",
    "densite": 1.02,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Voantalanina, Toalanana",
    "scientifique": "Hyperacanthus talangninia",
    "densite": 0.93,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Voapaka",
    "scientifique": "Uapaca sp.",
    "densite": 0.83,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Voapaka mena",
    "scientifique": "Uapaca thouarsii",
    "densite": 0.84,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Volily",
    "scientifique": "Byttneria voulily",
    "densite": 0.75,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Volivaza",
    "scientifique": "Hyperacanthus sofikomba",
    "densite": 0.68,
    "categorie": "Cat. III",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Vongo",
    "scientifique": "Garcinia verrucosa",
    "densite": 0.91,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Vongomena",
    "scientifique": "Mammea perrieri",
    "densite": 0.79,
    "categorie": "Cat. III",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Vory",
    "scientifique": "Broussonetia greveana",
    "densite": 0.57,
    "categorie": "Cat. IV",
    "ecoregion": "seche"
  },
  {
    "vernaculaire": "Votrovaona, vivaona",
    "scientifique": "Dilobeia thouarsii",
    "densite": 1.03,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  },
  {
    "vernaculaire": "Zahana",
    "scientifique": "Phyllarthron multiacticulatum",
    "densite": 1.01,
    "categorie": "Cat. II",
    "ecoregion": "humide"
  }
];
