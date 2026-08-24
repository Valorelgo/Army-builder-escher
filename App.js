// app.js

const db = {
    // ===== PERSONNAGES =====
    characters: [
        {
            id: "char_reine_de_gang",
            name: "Reine de gang",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 3, I: 5, A: 3, Sv: '5+', Ld: 8, Cl: 8, Wil: 7, Int: 7 },
            type: ["Guerrier", "leader"],
            starting_xp: 61,
            starting_skill: "1 au choix dans les primaires",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "savant"],
            secondary_skills: ["combat", "tir"],
            cost: 135,
            tactics_cards: 2
        },
        {
            id: "char_matriarche",
            name: "Matriarche",
            stats: { M: '5"', WS: '3+', BS: '3+', S: 3, T: 3, W: 2, I: 5, A: 2, Sv: '5+', Ld: 7, Cl: 7, Wil: 6, Int: 7 },
            type: ["guerrier", "champion"],
            starting_xp: 37,
            starting_skill: "1 au choix dans les primaires",
            special_rules: ["Nimble"],
            primary_skills: ["agilité", "combat"],
            secondary_skills: ["savant"],
            cost: 100,
            tactics_cards: 1
        },
        {
            id: "char_death_maiden",
            name: "Death maiden",
            stats: { M: '6"', WS: '3+', BS: '3+', S: 3, T: 4, W: 2, I: 5, A: 3, Sv: '5+', Ld: 6, Cl: 8, Wil: 7, Int: 7 },
            type: ["guerrier", "champion", "solitaire"],
            starting_xp: 49,
            starting_skill: "1 au choix dans les primaires",
            special_rules: ["Nimble", "sang empoisonné : peut relancer les 1 pour les armes à toxine."],
            primary_skills: ["agilité", "combat"],
            secondary_skills: ["muscle"],
            cost: 130,
            tactics_cards: 1,
            allowed_weapons_exclusive: ["wpn_venom_claw"]
        },
        {
            id: "char_gang_sister",
            name: "Gang sister",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 6 },
            type: ["guerrier", "ganger", "spécialiste"],
            starting_xp: 13,
            starting_skill: "selon spécialité",
            special_rules: ["Nimble", "lourd (biceps saillant), artilleur (tir à la hanche), pistolero (pistolero), scout (grimper), sniper (tir de précision), bagarreur (berserker), medic (soin), tech (munitions)"],
            primary_skills: ["agilité"],
            secondary_skills: ["combat", "tir"],
            cost: 40
        },
        {
            id: "char_wyld_runner",
            name: "Wyld runner",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 5, Cl: 6, Wil: 5, Int: 5 },
            type: ["guerrier", "prospect"],
            starting_xp: 4,
            starting_skill: "grimper",
            special_rules: ["Nimble"],
            primary_skills: ["agilité"],
            secondary_skills: ["ruse"],
            cost: 30,
            allowed_weapons_exclusive: ["wpn_wyld_bow", "wpn_fouet"]
        },
        {
            id: "char_little_sister",
            name: "Little sister",
            stats: { M: '6"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 5, Cl: 6, Wil: 5, Int: 5 },
            type: ["guerrier", "prospect"],
            starting_xp: 1,
            starting_skill: "",
            special_rules: ["Nimble"],
            primary_skills: ["agilité"],
            secondary_skills: ["combat"],
            cost: 25
        },
        {
            id: "char_khimerix",
            name: "Khimerix",
            stats: { M: '6"', WS: '4+', BS: '4+', S: 4, T: 5, W: 4, I: 4, A: 3, Sv: '6+', Ld: 5, Cl: 6, Wil: 7, Int: 4 },
            type: ["guerrier", "bête", "brute"],
            starting_xp: 25,
            starting_skill: "régénération",
            special_rules: ["Nimble", "Ne peut acheter armes/matériel sauf upgrade."],
            primary_skills: ["muscle"],
            secondary_skills: ["agilité"],
            cost: 220,
            default_weapons: ["wpn_chemical_cloud", "wpn_talons"]
        },
        {
            id: "char_phyrr_cat",
            name: "Phyrr cat",
            stats: { M: '7"', WS: '3+', BS: '6+', S: 3, T: 3, W: 1, I: 5, A: 2, Sv: '6+', Ld: 5, Cl: 6, Wil: 6, Int: 5 },
            type: ["guerrier", "bête", "familier"],
            starting_xp: 13,
            starting_skill: "leash de 9\"",
            special_rules: ["Nimble", "Si tombe, réduire la hauteur de 3\"", "Rattaché à une figurine"],
            primary_skills: ["agilité"],
            secondary_skills: ["combat"],
            cost: 80,
            default_weapons: ["wpn_talons_cat"]
        },
        {
            id: "char_phelynx",
            name: "Phelynx",
            stats: { M: '6"', WS: '4+', BS: '6+', S: 2, T: 3, W: 1, I: 4, A: 2, Sv: '6+', Ld: 4, Cl: 6, Wil: 6, Int: 4 },
            type: ["guerrier", "bête", "familier"],
            starting_xp: 13,
            starting_skill: "leash de 3\"",
            special_rules: ["Nimble", "Rattaché à une figurine"],
            primary_skills: ["agilité"],
            secondary_skills: ["combat"],
            cost: 60,
            default_weapons: ["wpn_claws_cat"]
        },
        // ===== MERCENAIRES =====
        {
            id: "merc_hive_scum", name: "Hive scum",
            stats: { M: '5"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 3, A: 1, Sv: '6+', Ld: 6, Cl: 6, Wil: 6, Int: 6 },
            type: ["Guerrier", "ganger"], starting_xp: 0, cost: 30,
            special_rules: ["Armes/équipements pour hive scum max 60 pts.", "Ne gagne jamais d'expérience."]
        },
        {
            id: "merc_luthern_armbot", name: "Luthern armbot",
            stats: { M: '4"', WS: '3+', BS: '5+', S: 5, T: 5, W: 3, I: 2, A: 2, Sv: '4+', Ld: 6, Cl: 8, Wil: 6, Int: 5 },
            type: ["Guerrier", "brute"], starting_xp: 25, starting_skill: "Infiltration", primary_skills: ["Muscle"], secondary_skills: ["Combat"], cost: 230,
            special_rules: ["Post cycle : travailler sur territoires possédés."], default_weapons: ["wpn_griffes_tunnel"]
        },
        {
            id: "merc_jotunn_ogryn", name: "Jotunn Ogryn",
            stats: { M: '5"', WS: '4+', BS: '5+', S: 5, T: 5, W: 3, I: 3, A: 2, Sv: '5+', Ld: 7, Cl: 8, Wil: 6, Int: 5 },
            type: ["Guerrier", "brute"], starting_xp: 25, starting_skill: "coup de boule", primary_skills: ["Muscle"], secondary_skills: ["Combat"], cost: 160,
            special_rules: ["Ne peut jamais être activé en activation de groupe."], default_weapons: ["wpn_poing_augmetic", "wpn_poing_augmetic"]
        },
        {
            id: "merc_rogue_doc", name: "Rogue doc",
            stats: { M: '5"', WS: '5+', BS: '5+', S: 2, T: 3, W: 1, I: 3, A: 1, Sv: '6+', Ld: 6, Cl: 8, Wil: 6, Int: 7 },
            type: ["Guerrier", "hanger-on"], starting_xp: 13, starting_skill: "soin", primary_skills: ["Savant"], secondary_skills: ["Agilité"], cost: 90,
            special_rules: ["Peut accompagner un guerrier en escorte médicale ou mise en place de bioniques."],
            default_weapons: ["wpn_stub_gun"], default_equipment: ["eq_kit_medical", "eq_medicrane"]
        },
        {
            id: "merc_ammo_jack", name: "Ammo-jack",
            stats: { M: '5"', WS: '4+', BS: '3+', S: 3, T: 3, W: 1, I: 2, A: 1, Sv: '5+', Ld: 6, Cl: 7, Wil: 7, Int: 7 },
            type: ["Guerrier", "hanger-on"], starting_xp: 13, starting_skill: "Munitions", primary_skills: ["Tir"], secondary_skills: ["Savant"], cost: 100,
            special_rules: ["Post cycle overcharge : Une arme gagne +1 S et instable."],
            default_weapons: ["wpn_epee_energetique", "wpn_pompe_combat"]
        },
        {
            id: "merc_dome_runner", name: "Dome runner",
            stats: { M: '5"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 7, Wil: 7, Int: 7 },
            type: ["Guerrier", "hanger-on"], starting_xp: 13, starting_skill: "chute de chat et grimper", primary_skills: ["Agilité"], secondary_skills: ["Ruse"], cost: 50,
            special_rules: ["Déploiement : D3 alliés peuvent se déplacer de leur initiative avant T1."],
            default_weapons: ["wpn_stub_gun", "wpn_couteau_combat"]
        },
        {
            id: "merc_slopper", name: "Slopper",
            stats: { M: '4"', WS: '4+', BS: '4+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 7, Wil: 7, Int: 7 },
            type: ["Guerrier", "hanger-on", "soutien"], starting_xp: 13, primary_skills: ["Savant"], secondary_skills: ["Muscle"], cost: 45,
            special_rules: ["Post cycle : +20 crédits.", "1/partie : adversaire relance jet de blessures permanentes."],
            default_weapons: ["wpn_couteau_combat"]
        },
        {
            id: "merc_hive_watcher", name: "Hive watcher",
            stats: { M: '4"', WS: '5+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 7, Wil: 7, Int: 8 },
            type: ["Guerrier", "hanger-on", "soutien"], starting_xp: 13, starting_skill: "se cacher et grimper", primary_skills: ["Ruse"], secondary_skills: ["Agilité"], cost: 30,
            special_rules: ["Infiltration/renfort ennemis repoussés à +3\" des alliés."],
            default_weapons: ["wpn_laspistol"]
        },
        {
            id: "merc_rat_geant", name: "Rat géant",
            stats: { M: '5"', WS: '4+', BS: '5+', S: 3, T: 3, W: 1, I: 4, A: 1, Sv: '6+', Ld: 6, Cl: 7, Wil: 6, Int: 5 },
            type: ["guerrier", "bête", "familier"], starting_xp: 13, starting_skill: "Leash de 3\"", primary_skills: ["Agilité"], secondary_skills: ["Ruse"], cost: 45,
            special_rules: ["Leader/champion uniquement.", "Remplacé gratuitement si tué.", "Compte comme équipement"], default_weapons: ["wpn_morsure"]
        },
        {
            id: "merc_millisaur", name: "Millisaur",
            stats: { M: '6"', WS: '4+', BS: '5+', S: 3, T: 3, W: 2, I: 3, A: 2, Sv: '5+', Ld: 6, Cl: 6, Wil: 6, Int: 5 },
            type: ["guerrier", "bête", "familier"], starting_xp: 13, starting_skill: "leash de 6\"", primary_skills: ["Combat"], secondary_skills: ["Agilité"], cost: 95,
            special_rules: ["Leader/champion uniquement.", "Déplacement sous infranchissable.", "Compte comme équipement"], default_weapons: ["wpn_gueule_crocs"]
        },
        {
            id: "merc_ripperjack", name: "Ripperjack",
            stats: { M: '7"', WS: '4+', BS: '6+', S: 3, T: 3, W: 2, I: 4, A: 2, Sv: '6+', Ld: 6, Cl: 8, Wil: 5, Int: 6 },
            type: ["guerrier", "bête", "familier"], starting_xp: 13, starting_skill: "leash de 6\"", primary_skills: ["Muscle"], secondary_skills: ["Combat"], cost: 85,
            special_rules: ["Leader/champion uniquement.", "Ne peut assister/être assisté.", "Ennemi engagé avec test d'agilité pour fuir.", "Compte comme équipement"], default_weapons: ["wpn_dents"]
        }
    ],

    // ===== DICTIONNAIRE DES COMPETENCES =====
    skills: {
        agilite: [
            { id: "sk_chute_chat", name: "Chute de chat", desc: "Réduit le cran de distance verticale en cas de chute/saut. Test d'agilité pour ne pas être suppressed si non blessé/hors combat." },
            { id: "sk_grimper", name: "Grimper", desc: "Mouvement non divisé par deux en grimpant." },
            { id: "sk_esquive", name: "Esquive", desc: "Avant jet d'armure, sur un 6, ignore la blessure. Si gabarit, déplace de 2\" pour éviter." },
            { id: "sk_bond_prodigieux", name: "Bond prodigieux", desc: "Ignore les 2 premiers pouces de distance lors d'un saut (saut 4\" sans test)." },
            { id: "sk_jaillir", name: "Jaillir", desc: "Si suppressed, test d'agilité. Si réussi, n'est plus suppressed." },
            { id: "sk_sprint", name: "Sprint", desc: "Action double : déplacement = Mouvement + (2 x Initiative)." }
        ],
        muscle: [
            { id: "sk_charge_taureau", name: "Charge de taureau", desc: "Attaque de charge : l'arme gagne knockback (6+) et +1 en Force." },
            { id: "sk_biceps_saillants", name: "Biceps saillants", desc: "Braced shot : déplacement d'Initiative en pouces avant ou après. Arme lourde au close : peut déclarer arme secondaire non lourde." },
            { id: "sk_redoutable", name: "Redoutable", desc: "Condition fearsome." },
            { id: "sk_machoire_acier", name: "Machoire d'acier", desc: "Endurance +2 si touché par arme sans AP." },
            { id: "sk_nerfs_acier", name: "Nerfs d'acier", desc: "Si touché au tir, test de cool : si réussi, non suppressed." },
            { id: "sk_instoppable", name: "Instoppable", desc: "A l'activation, test de Willpower : si réussi, récupère 1 PV." }
        ],
        combat: [
            { id: "sk_berserker", name: "Berserker", desc: "Condition frenzy." },
            { id: "sk_maitre_combat", name: "Maitre du combat", desc: "Pas de malus d'interférence pour toucher. Peut toujours assister quel que soit le nb d'ennemis." },
            { id: "sk_coup_boule", name: "Coup de boule", desc: "Arme intégrée : engagé, F+1, L:1, attaque additionnelle (1)." },
            { id: "sk_coups_puissants", name: "Coups puissants", desc: "Arme lourde au close = +1 Force." },
            { id: "sk_pluie_coups", name: "Pluie de coups", desc: "Première attaque, si tjs engagé après, attaque additionnelle gratuite." },
            { id: "sk_combat_2_armes", name: "Combat à deux armes", desc: "Fait 2 attaques avec son arme secondaire au lieu d'une." }
        ],
        ruse: [
            { id: "sk_backstab", name: "Backstab", desc: "Armes close gagnent Backstab. Si déjà acquis, Force +2 au lieu de +1." },
            { id: "sk_contre_attaque", name: "Contre attaque", desc: "Peut faire une attaque additionnelle quand un ennemi l'attaque, au même rang d'initiative." },
            { id: "sk_coupe_gorge", name: "Coupe gorge", desc: "Relance son D6 de coup de grâce." },
            { id: "sk_infiltration", name: "Infiltration", desc: "Déploiement spécial : hors ligne de vue et à + de 9\" de tout ennemi." },
            { id: "sk_se_cacher", name: "Se cacher", desc: "Si suppressed, inciblable au-delà de la portée courte des ennemis." },
            { id: "sk_overwatch", name: "Overwatch", desc: "Interrompt une action ennemie avec un tir en perdant son marqueur ready." }
        ],
        savant: [
            { id: "sk_connecte", name: "Connecté", desc: "Visite le Trading Post avec 1 TP supplémentaire post-cycle (2 visites max)." },
            { id: "sk_recharge_rapide", name: "Recharge rapide", desc: "Recharge toutes ses armes d'un coup." },
            { id: "sk_volonte_fer", name: "Volonté de fer", desc: "Soustrait 1 aux tests de bottle check du gang." },
            { id: "sk_soin", name: "Soin", desc: "Action : un allié à 1\" seriously injured récupère 1 PV." },
            { id: "sk_mentor", name: "Mentor", desc: "Si un allié à 6\" gagne 1 XP, test de Ld : si réussi, gagne 1 XP." },
            { id: "sk_munitions", name: "Munitions", desc: "Action distribution : alliés à 6\" font test d'Int, si réussi -> recharge gratuite." }
        ],
        tir: [
            { id: "sk_tir_rapide", name: "Tir rapide", desc: "Peut faire 2 actions de tir pendant l'activation." },
            { id: "sk_pistolero", name: "Pistolero", desc: "Peut tirer avec 2 armes de tir (léger) sur cibles différentes." },
            { id: "sk_tir_hanche", name: "Tir à la hanche", desc: "Les armes de tir (non lourdes) gagnent le trait assaut." },
            { id: "sk_tireur_habile", name: "Tireur habile", desc: "+1 pour toucher les cibles entre portée courte et longue." },
            { id: "sk_tir_precision", name: "Tir de précision", desc: "Sur un 6 naturel pour toucher, ignore l'armure (sauf explosion/tir rapide)." },
            { id: "sk_tireur_elite", name: "Tireur d'élite", desc: "Aimed shot : +2 pour toucher au lieu de +1." }
        ],
        generique: [
            { id: "sk_hit_run", name: "Hit & run", desc: "Après action de combat, peut consolider (sortir de 1\") en finissant à +1\" des ennemis." },
            { id: "sk_inspirant", name: "Inspirant", desc: "Peut faire une action gratuite d'activation de groupe." },
            { id: "sk_juggernaut", name: "Juggernaut", desc: "Si touché au tir, suppressed uniquement si PV perdu ou effet du dé de blessure." },
            { id: "sk_regeneration", name: "Régénération", desc: "Action : mouvement puis 4+ = récupère 1 PV." },
            { id: "sk_leash", name: "Leash de X\"", desc: "Portée pour familiers pour ignorer le test de panique." }
        ]
    },

    // ===== ARMES =====
    weapons: [
        { id: "wpn_autogun", name: "Autogun", profiles: [{ name: "Unique", SR: '8"', LR: '24"', S: 3, AP: "-", L: 1, traits: "tir rapide (1)" }], cost_credits: 20, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_autopistol", name: "Autopistol", profiles: [{ name: "Unique", SR: '4"', LR: '12"', S: 3, AP: "-", L: 1, traits: "tir rapide (1), léger" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_heavy_stubber", name: "Heavy stubber", profiles: [{ name: "Unique", SR: '20"', LR: '40"', S: 4, AP: "-1", L: 1, traits: "tir rapide (2), lourd" }], cost_credits: 70, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_long_rifle", name: "Long rifle", profiles: [{ name: "Unique", SR: '24"', LR: '48"', S: 4, AP: "-1", L: 1, traits: "Knockback (6+)" }], cost_credits: 55, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_stub_gun", name: "Stub gun", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 3, AP: "-", L: 1, traits: "léger" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_boltgun", name: "Boltgun", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+)" }], cost_credits: 55, cost_tp: 2, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_bolt_pistol", name: "Bolt pistol", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+), léger" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_heavy_bolter", name: "Heavy bolter*", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 5, AP: "-2", L: 2, traits: "tir rapide (2), munitions (3+), lourd" }], cost_credits: 100, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_warpstorm_bolter", name: "Warpstorm bolter", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+), rare (4+), maudit" }], cost_credits: 65, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_lance_flamme", name: "Lance flamme", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-1", L: 1, traits: "Munitions (6+), flammes (5+), gabarit" }], cost_credits: 70, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_pist_lance_flamme", name: "Pistolet lance flamme", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "munitions (6+), flammes (5+), gabarit, léger" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_lance_flamme_lourd", name: "Lance flamme lourd", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 5, AP: "-2", L: 1, traits: "Munitions (6+), flammes (5+), gabarit, lourd" }], cost_credits: 95, cost_tp: 2, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grav_gun", name: "Grav gun", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-", L: 2, traits: "munitions (6+), explosion (3\"), graviton pulse" }], cost_credits: 50, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grav_pistol", name: "Grav pistol", profiles: [{ name: "Unique", SR: '4"', LR: '9"', S: "-", AP: "-", L: 2, traits: "munitions (6+), explosion (3\"), graviton pulse, léger" }], cost_credits: 40, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grenade_launcher", name: "Grenade launcher", profiles: [
            { name: "Frag grenades", SR: '6"', LR: '24"', S: 3, AP: "-", L: 1, traits: "Munitions (4+), explosion (3\"), Knockback (5+)" },
            { name: "krak grenades", SR: '6"', LR: '24"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+)" }
        ], cost_credits: 80, has_options: ["flash", "fumigene"], options_cost: 95, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_lasgun", name: "Lasgun", profiles: [{ name: "Unique", SR: '16"', LR: '24"', S: 3, AP: "-", L: 1, traits: "" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_laspistol", name: "Laspistol", profiles: [{ name: "Unique", SR: '8"', LR: '12"', S: 3, AP: "-", L: 1, traits: "léger" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_long_las", name: "Long Las", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 4, AP: "-", L: 1, traits: "" }], cost_credits: 40, cost_tp: 0, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fuseur", name: "Fuseur", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 8, AP: "-4", L: 3, traits: "Munitions (6+), dommages (3)" }], cost_credits: 140, cost_tp: 4, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_multifuseur", name: "Multifuseur", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 8, AP: "-4", L: 3, traits: "Munitions (6+), dommages (3), lourd" }], cost_credits: 150, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_canon_plasma", name: "Canon plasma", profiles: [{ name: "Unique", SR: '18"', LR: '36"', S: 6, AP: "-2", L: 2, traits: "Munitions (6+), explosion (3\"), Dommages (2), lourd, instable" }], cost_credits: 115, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fusil_plasma", name: "Fusil plasma", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), tir rapide(1), Dommages (2), instable" }], cost_credits: 85, cost_tp: 3, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_pistolet_plasma", name: "Pistolet plasma", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), tir rapide(1), léger, instable" }], cost_credits: 70, cost_tp: 3, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_couteau_lancer", name: "Couteau de lancer", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: "-", AP: "-", L: 1, traits: "Munitions (3+), toxine (4+)" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_canon_rad", name: "Canon rad *", profiles: [{ name: "Unique", SR: '16"', LR: '32"', S: 3, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\"), lourd, rad-phage" }], cost_credits: 55, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fusil_rad", name: "Fusil rad", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 3, AP: "-1", L: 1, traits: "Munitions (5+), Rad-phae, gabarit" }], cost_credits: 60, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_lance_harpon", name: "Lance harpon", profiles: [{ name: "Unique", SR: '6"', LR: '18"', S: 5, AP: "-3", L: 1, traits: "Munitions (5+), attirer" }], cost_credits: 80, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_cutter_laser", name: "Cutter laser", profiles: [{ name: "Unique", SR: '2"', LR: '4"', S: 9, AP: "-2", L: 2, traits: "Dommages (2), léger, tir unique" }], cost_credits: 80, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_laser_minage", name: "Laser de minage", profiles: [{ name: "Unique", SR: '10"', LR: '14"', S: 9, AP: "-3", L: 3, traits: "Munitions (5+), Dommages (2), lourd" }], cost_credits: 125, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_pompe_combat", name: "Fusil à pompe de combat", profiles: [
            { name: "Salve", SR: '4"', LR: '12"', S: 4, AP: "-", L: 1, traits: "Knockback (6+)" },
            { name: "Déchiquetant", SR: "T", LR: "-", S: 3, AP: "-", L: 1, traits: "Munitions (6+), tir rapide(1), déchiqueter (6+), gabarit" }
        ], cost_credits: 35, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_pompe_canon_scie", name: "Fusil à pompe à canon scié", profiles: [
            { name: "Dispersion", SR: '4"', LR: '8"', S: 2, AP: "-", L: 1, traits: "tir rapide (2), léger" },
            { name: "Concentré", SR: '4"', LR: '8"', S: 4, AP: "-", L: 1, traits: "Knockback (6+), léger" }
        ], cost_credits: 30, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_fusil_pompe", name: "Fusil à pompe", profiles: [
            { name: "Dispersion", SR: '4"', LR: '8"', S: 3, AP: "-", L: 1, traits: "tir rapide (2)" },
            { name: "Concentré", SR: '8"', LR: '16"', S: 4, AP: "-", L: 1, traits: "Knockback (5+)" }
        ], cost_credits: 35, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_pist_aiguille", name: "Pistolet à aiguille", profiles: [{ name: "Unique", SR: '4"', LR: '9"', S: "-", AP: "-", L: 1, traits: "Toxine (3+), léger" }], cost_credits: 25, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_fusil_aiguille", name: "Fusil à aiguille", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: "-", AP: "-1", L: 1, traits: "Toxine (3+)" }], cost_credits: 45, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_fusil_web", name: "Fusil web", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 5, AP: "-", L: "-", traits: "Munitions (6+), toile, gabarit" }], cost_credits: 65, cost_tp: 4, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_pistolet_web", name: "Pistolet web", profiles: [{ name: "Unique", SR: "T", LR: "-", S: 4, AP: "-", L: "-", traits: "munitions (6+), toile, gabarit, léger" }], cost_credits: 50, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_grenade_explo", name: "Grenade explosive", profiles: [{ name: "Unique", SR: "-", LR: '6"', S: 5, AP: "-1", L: 2, traits: "Munitions (5+), explosion (5\"), limité, Knockback (5+)" }], cost_credits: 60, cost_tp: 2, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_gaz", name: "Grenade à gaz asphyxiant", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: 1, traits: "Munitions (5+), explosion (3\"), limité, Gaz, toxine (3)" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_charge_demo", name: "Charge de démolition", profiles: [{ name: "Unique", SR: "-", LR: '6"', S: 6, AP: "-3", L: 3, traits: "Munitions (6+), explosion (5\"), limité, Dommage (2)" }], cost_credits: 85, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_frag", name: "Grenade frag", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 3, AP: "-", L: 1, traits: "Munitions (4+), explosion (3\"), limité, Knockback (6+)" }], cost_credits: 30, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true, counts_as_equip: true },
        { id: "wpn_grenade_inc", name: "Grenade incendiaire", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 3, AP: "-", L: 1, traits: "Munitions (5+), explosion (5\"), limité, flammes (5+)" }], cost_credits: 40, cost_tp: 2, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_krak", name: "Grenade krak", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 6, AP: "-2", L: 1, traits: "Munitions (4+), limité" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: true, is_hive_scum: true, counts_as_equip: true },
        { id: "wpn_grenade_phos", name: "Grenade au phosphore", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 4, AP: "-2", L: 2, traits: "Munitions (5+), explosion (3\"), limité, flammes (5+), instable" }], cost_credits: 65, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_photon", name: "Grenade à photon", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (5\"), flash, limité" }], cost_credits: 15, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_plasma", name: "Grenade à plasma", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 5, AP: "-1", L: 2, traits: "Munitions (4+), explosion (3\"), limité, dommages (2), instable" }], cost_credits: 70, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_rad", name: "Grenade rad", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: 2, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\"), limité, Rad-phage" }], cost_credits: 25, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false, counts_as_equip: true },
        { id: "wpn_grenade_fumi", name: "Grenades fumigènes", profiles: [{ name: "Unique", SR: "-", LR: '9"', S: "-", AP: "-", L: "-", traits: "Munitions (4+), explosion (3\"), limité, fumée" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true, counts_as_equip: true },
        
        // Corps à Corps / Melee
        { id: "wpn_hache_tron", name: "Hache tronçonneuse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee, déchiqueter (5+)" }], cost_credits: 20, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_epee_tron", name: "Epée tronçonneuse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee, déchiqueter (5+), parade" }], cost_credits: 20, cost_tp: 1, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_hache_nrj", name: "Hache énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-3", L: 1, traits: "Melee, brèche (5+)" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_gantelet_nrj", name: "Gantelet énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+3", AP: "-3", L: 2, traits: "Melee, brèche (6+), Dommage (2), commotion (5+), encombrant" }], cost_credits: 105, cost_tp: 3, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_marteau_nrj", name: "Marteau énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 2, traits: "Melee, brèche (6+), commotion (6+)" }], cost_credits: 40, cost_tp: 2, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_couteau_nrj", name: "Couteau énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 1, traits: "Melee, brèche (6+), backstab" }], cost_credits: 30, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_masse_nrj", name: "Masse énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-2", L: 1, traits: "Melee, brèche (6+), commotion (6+)" }], cost_credits: 45, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_epee_nrj", name: "Epée énergétique", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 1, traits: "melee, brèche (6+), parade" }], cost_credits: 40, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_hache", name: "Hache", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 1, traits: "Melee" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_couteau_combat", name: "Couteau de combat", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, backstab" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, is_hive_scum: true },
        { id: "wpn_fleau", name: "Fléau", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, Knockback (6+)" }], cost_credits: 10, cost_tp: 0, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_masse", name: "Masse", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, commotion (6+)" }], cost_credits: 20, cost_tp: 0, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_hache_2m", name: "Hache à deux mains", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-1", L: 2, traits: "Melee, Lourd, encombrant" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_marteau_2m", name: "Marteau à deux mains", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 3, traits: "Melee, Lourd, encombrant, commotion (6+)" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: true },
        { id: "wpn_servo_griffe", name: "Servo-griffe", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-", L: 2, traits: "Melee, encombrant" }], cost_credits: 40, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_baton_shock", name: "Baton shock", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "melee, parade, shock (6+)" }], cost_credits: 20, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_arme_hast_shock", name: "Arme d'hast shock", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+1", AP: "-", L: 1, traits: "Melee, shock (5+)" }], cost_credits: 25, cost_tp: 1, is_gang_weapon: false, is_hive_scum: false },
        { id: "wpn_fouet_shock", name: "Fouet shock", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, Knockback (6+), shock (6+)" }], cost_credits: 10, cost_tp: 1, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_couteau_stylet", name: "Couteau stylet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-", L: 1, traits: "Melee, Toxine (3+)" }], cost_credits: 25, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        { id: "wpn_epee_stylet", name: "Epée stylet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-1", L: 1, traits: "Melee, Parade, toxine (3+)" }], cost_credits: 45, cost_tp: 2, is_gang_weapon: true, is_hive_scum: false },
        
        // Armes spéciales / Escher Cutter / Autres
        { id: "wpn_cutter_heavy_stubbers", name: "Cutter heavy stubbers", profiles: [{ name: "Unique", SR: '20"', LR: '40"', S: 4, AP: "-1", L: 1, traits: "tir rapide (2), lourd, jumelé, arc (ligne centrale)" }], cost_credits: 10, is_gang_weapon: true, requires_equip: "eq_escher_cutter" },
        { id: "wpn_combi_bolter_needler", name: "Combi-bolter / Needler", profiles: [
            { name: "Bolter", SR: '12"', LR: '24"', S: 4, AP: "-1", L: 2, traits: "tir rapide (1), munitions (3+), combi, rare (4+)" },
            { name: "Needler", SR: '9"', LR: '18"', S: "-", AP: "-1", L: 1, traits: "Combi, toxine (3+)" }
        ], cost_credits: 70, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_cutter_grenade_launcher", name: "Cutter grenade launcher", profiles: [
            { name: "Frag grenades", SR: '6"', LR: '24"', S: 3, AP: "-", L: 1, traits: "tir rapide (1), munitions (4+), explosion (3\"), knockback (5+), arc (ligne centrale)" },
            { name: "krak grenades", SR: '6"', LR: '24"', S: 6, AP: "-2", L: 1, traits: "tir rapide (1), munitions (4), arc (ligne centrale)" }
        ], cost_credits: 0, is_gang_weapon: true, requires_equip: "eq_escher_cutter", note: "inclus dans escher cutter" },
        { id: "wpn_chemical_cloud", name: "Chemical cloud breath", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: 3, AP: "-1", L: 1, traits: "Munitions (4+), explosion (3\")" }], is_gang_weapon: true, default_for: "char_khimerix" },
        { id: "wpn_gaseous_eruption", name: "Gaseous eruption breath", profiles: [{ name: "Unique", SR: "T", LR: "-", S: "-", AP: "-", L: 1, traits: "Munitions (6+), toxine (3+), gabarit" }], cost_credits: 25, is_gang_weapon: true, upgrades_from: "wpn_chemical_cloud", specific_to: "char_khimerix" },
        { id: "wpn_cutter_plasma_guns", name: "Cutter plasma guns", profiles: [{ name: "Unique", SR: '12"', LR: '24"', S: 5, AP: "-2", L: 2, traits: "Munitions (6+), Dommages (2), tir rapide (1), jumelé, instable, arc (ligne centrale)" }], cost_credits: 15, is_gang_weapon: true, requires_equip: "eq_escher_cutter" },
        { id: "wpn_wyld_bow", name: "Wyld bow", profiles: [{ name: "Unique", SR: '9"', LR: '18"', S: 3, AP: "-", L: 1, traits: "assaut" }], cost_credits: 15, cost_tp: 0, is_gang_weapon: true, specific_to: "char_wyld_runner" },
        { id: "wpn_nightshade", name: "Nightshade chem-thrower", profiles: [{ name: "Unique", SR: "T", LR: "-", S: "-", AP: "-", L: 1, traits: "Munitions (6+), toxine (3+), gaz, gabarit" }], cost_credits: 95, cost_tp: 0, is_gang_weapon: true },
        { id: "wpn_claws_cat", name: "Claws", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-", L: 1, traits: "Melee, Toxine (3+)" }], is_gang_weapon: true, default_for: "char_phelynx" },
        { id: "wpn_razor_talons", name: "Razor-sharp talons", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-2", L: 3, traits: "Melee, déchirant (6+)" }], cost_credits: 25, is_gang_weapon: true, upgrades_from: "wpn_talons", specific_to: "char_khimerix" },
        { id: "wpn_talons", name: "Talons (Khimerix)", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 2, traits: "Melee" }], is_gang_weapon: true, default_for: "char_khimerix" },
        { id: "wpn_talons_cat", name: "Talons (Phyrr Cat)", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-1", L: 2, traits: "Melee" }], is_gang_weapon: true, default_for: "char_phyrr_cat" },
        { id: "wpn_fouet", name: "Fouet", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee, Knockback (6+)" }], cost_credits: 5, cost_tp: 0, is_gang_weapon: true, specific_to: "char_wyld_runner" },
        { id: "wpn_venom_claw", name: "Venom claw", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-2", L: 1, traits: "Melee, Toxine (3+), déchiqueter (5+)" }], cost_credits: 50, cost_tp: 0, is_gang_weapon: true, specific_to: "char_death_maiden" },
        
        // Armes Mercenaires
        { id: "wpn_armbot_grav", name: "Armbot grav cutter", profiles: [{ name: "Unique", SR: '6"', LR: '12"', S: "-", AP: "-", L: 2, traits: "Explosion (3\"), graviton pulse" }], is_merc_weapon: true },
        { id: "wpn_armbot_melta", name: "Armbot melta cutter", profiles: [{ name: "Unique", SR: '4"', LR: '8"', S: 6, AP: "-2", L: 2, traits: "Munitions (6+) dommages (2)" }], is_merc_weapon: true },
        { id: "wpn_storm_welder", name: "Storm Welder", profiles: [{ name: "Unique", SR: '8"', LR: '16"', S: 5, AP: "-", L: 1, traits: "Tir rapide (3), shock (6+), Instable" }], is_merc_weapon: true },
        { id: "wpn_poing_augmetic", name: "Poing augmetic", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "melee, knockback (6+)" }], is_merc_weapon: true },
        { id: "wpn_morsure", name: "Morsure", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 1, traits: "Melee" }], is_merc_weapon: true },
        { id: "wpn_gueule_crocs", name: "Gueule à crocs", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "-", AP: "-", L: 1, traits: "melee, toxine (4+)" }], is_merc_weapon: true },
        { id: "wpn_dents", name: "Dents", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S", AP: "-", L: 2, traits: "Melee" }], is_merc_weapon: true },
        { id: "wpn_arc_welder", name: "Arc welder", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S+2", AP: "-3", L: 2, traits: "Melee, flammes (5+)" }], is_merc_weapon: true },
        { id: "wpn_griffes_tunnel", name: "Griffes de tunnel", profiles: [{ name: "Unique", SR: "E", LR: "-", S: "S-1", AP: "-", L: 2, traits: "Melee, paire (2)" }], is_merc_weapon: true },
        { id: "wpn_spud_jacker", name: "Spud jacker", profiles: [{ name: "Unique", SR: "E", LR: "+", S: "S+1", AP: "-", L: 1, traits: "melee, knockback (6+), commotion (6+)" }], is_merc_weapon: true }
    ],

    // ===== EQUIPEMENTS (Armures, Perso, Accessoires) =====
    equipment: [
        { id: "eq_armure_cara_leg", name: "Armure carapace légère", type: "Armure", cost_credits: 100, cost_tp: 1, effect: "Améliore la sauvegarde de 1. Réduit l'initative de 1." },
        { id: "eq_armure_cara_lourde", name: "Armure carapace lourde", type: "Armure", cost_credits: 140, cost_tp: 3, effect: "Améliore la sauvegarde de 2. Réduit l'initiative de 2. Malus aux jets d'agilité de -1." },
        { id: "eq_champ_reflec", name: "Champ réfléchissant", type: "Armure", cost_credits: 50, cost_tp: 2, effect: "Sauvegarde invulnérable de 5+. Au 1er jet de 1, ne fonctionne plus.", is_gang: true },
        { id: "eq_combi_protec", name: "Combinaison de protection", type: "Armure", cost_credits: 10, cost_tp: 0, effect: "Immunisé flammes et rad-phage.", is_hive_scum: true },
        { id: "eq_mesh_armour", name: "Mesh armour", type: "Armure", cost_credits: 40, cost_tp: 0, effect: "Améliore sauvegarde de 1 au CàC.", is_gang: true },
        { id: "eq_nuage_reflec", name: "Nuage réfléchissant", type: "Armure", cost_credits: 25, cost_tp: 1, effect: "AP des armes las, plasma et fuseur = '-'" },
        
        { id: "eq_bio_booster", name: "Bio-booster", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "1ère fois blessé : réduit léthalité de 1 (si 0, jette 2 dés et choisis)." },
        { id: "eq_corde_descente", name: "Corde de descente", type: "Personnel", cost_credits: 10, cost_tp: 0, effect: "Action descendre : 12\" vertical, 3\" horizontal.", is_gang: true, is_hive_scum: true },
        { id: "eq_grav_chute", name: "Grav-chute", type: "Personnel", cost_credits: 30, cost_tp: 0, effect: "Chute sans dommage, jamais suppressed." },
        { id: "eq_kit_medical", name: "Kit médical", type: "Personnel", cost_credits: 20, cost_tp: 0, effect: "Soigne un allié, jette 2 dés de recovery et garde au choix.", is_gang: true },
        { id: "eq_lampe_frontale", name: "Lampe frontale", type: "Personnel", cost_credits: 15, cost_tp: 0, effect: "Visibilité +9\" mais toujours ciblable." },
        { id: "eq_lance_grappin", name: "Lance-grappin", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "Action grappin : déplace 12\" ligne droite, doit finir plus haut." },
        { id: "eq_lunettes_infra", name: "Lunettes à infra rouge", type: "Personnel", cost_credits: 35, cost_tp: 0, effect: "Visibilité +9\", voit dans fumée. Malus -2 init si munition flash.", is_gang: true, is_hive_scum: true },
        { id: "eq_stimm_slug", name: "Réserve de cartouche de stimm", type: "Personnel", cost_credits: 25, cost_tp: 0, effect: "1/bataille : +2 M, S, T. A la prochaîne activ : 1 = prend une blessure." },
        { id: "eq_respirateur", name: "Respirateur", type: "Personnel", cost_credits: 15, cost_tp: 0, effect: "Save 5+ invulnérable contre le gaz.", is_gang: true, is_hive_scum: true },
        { id: "eq_servo_partiel", name: "Servo-harnais partiel", type: "Personnel", cost_credits: 100, cost_tp: 2, effect: "+2 Force, +1 Endo. Malus -1 Mvt et Init." },
        { id: "eq_servo_total", name: "Servo-harnais total", type: "Personnel", cost_credits: 130, cost_tp: 3, effect: "Idem partiel sans malus. Incompatible servo-griffe." },
        { id: "eq_dirt_bike", name: "Dirt bike", type: "Personnel", cost_credits: 35, cost_tp: 0, effect: "Devient monté. M = 8\", Dash = 5\".", is_gang: true },
        { id: "eq_escher_cutter", name: "Escher cutter", type: "Personnel", cost_credits: 150, cost_tp: 0, effect: "Monté. M = 9\", Dash = 5\". Armé d'un cutter grenade launcher de base." },
        
        { id: "eq_medicrane", name: "Medicrane", type: "Personnel", cost_credits: 0, effect: "Figurine à 1\", T3 Sv6+. Soigne en action gratuite.", specific_to: "merc_rogue_doc" },
        
        { id: "eq_cristal_concen", name: "Cristal de concentration", type: "Accessoire", cost_credits: 25, cost_tp: 1, effect: "AP+1. Arme devient instable." },
        { id: "eq_hotshot", name: "Hotshot las pack", type: "Accessoire", cost_credits: 25, cost_tp: 1, effect: "Force +1" },
        { id: "eq_suspenseur", name: "Suspenseur", type: "Accessoire", cost_credits: 40, cost_tp: 0, effect: "Arme avec * compte pour 1 emplacement au lieu de 2." },
        { id: "eq_viseur", name: "Viseur", type: "Accessoire", cost_credits: 20, cost_tp: 0, effect: "Aimed shot : bonus +2 au lieu de +1." },
        { id: "eq_viseur_infra", name: "Viseur infra rouge", type: "Accessoire", cost_credits: 10, cost_tp: 0, effect: "Tire à travers fumée. Visibilité +9\"." },
        { id: "eq_viseur_laser", name: "Viseur laser", type: "Accessoire", cost_credits: 20, cost_tp: 1, effect: "Réduit bonus de couvert de 1 à portée courte.", is_gang: true },
        { id: "eq_viseur_longue", name: "Viseur longue portée", type: "Accessoire", cost_credits: 20, cost_tp: 1, effect: "Réduit bonus de couvert de 1 sur portée longue.", is_hive_scum: true }
    ],

    // ===== TRAITS DES ARMES =====
    weapon_traits: [
        { id: "trait_arc", name: "Arc (X)", desc: "Une arme avec ce trait a un champ de tir limité, indiqué par X" },
        { id: "trait_assaut", name: "Assaut", desc: "après que l'utilisateur a fait une action de dash, il peut tirer en action gratuite." },
        { id: "trait_attaques_add", name: "Attaques additionnels (X)", desc: "l'arme peut faire X attaques supplémentaires en plus des attaques normales. Uniquement pendant l'activation et si l'arme n'est pas choisie comme arme primaire ou secondaire" },
        { id: "trait_attirer", name: "Attirer", desc: "Si une figurine est touchée par une arme ayant ce trait mais pas mise hors de combat, l'attaquant peut essayer de l'attirer. Il lance un D6, et si cela dépasse la force de la cible, elle est attirée de D3\". Si elle rencontre une autre figurine, elle est attirée aussi. Si la cible finit dans les 1\" d'un de ses ennemis, elle est déplacée pour être engagée avec lui." },
        { id: "trait_auxilliaire", name: "Auxilliaire", desc: "Une arme avec ce trait ne peut qu'être attaché à une autre arme et jamais prise seule. Elle n'utilise pas d'emplacement d'arme." },
        { id: "trait_backstab", name: "Backstab", desc: "Cette arme gagne +1 en force si l'adversaire est engagé avec plus d'un ennemI." },
        { id: "trait_belier", name: "Bélier", desc: "une arme avec ce trait ne peut être utilisée que lors d'une charge." },
        { id: "trait_bouclier", name: "Bouclier", desc: "Si la figurine est équipé avec au moins une arme ayant ce trait, elle augmente sa sauvegarde de 1 contre les tirs." },
        { id: "trait_breche", name: "Brèche (X+)", desc: "Si le jet de blessure donne X ou +, il ne peut y avoir de jet d'armure." },
        { id: "trait_combi", name: "Combi", desc: "Quand on tire avec cette arme, le personnage peut choisir quel profil il utilise. Il peut aussi tirer avec les deux, mais avec une pénalité de -1 pour toucher." },
        { id: "trait_commotion", name: "Commotion (X+)", desc: "Si l'attaquant blesse son adversaire et que le jet de blessure est de X ou +, l'initiative de la cible baisse de 1 jusqu'à la fin de sa prochaine activation." },
        { id: "trait_dechiqueter", name: "Déchiqueter (X+)", desc: "Lors du jet de blessure avec cette arme, si le résultat est de X ou +, la léthalité de l'arme augmente de 1." },
        { id: "trait_dechirant", name: "Déchirant (X+)", desc: "Si le jet naturel d'une blessure avec cette arme est X ou plus, augmenter l'AP de 1." },
        { id: "trait_dommage", name: "Dommage (X)", desc: "Si un guerrier est blessé par cette arme, il perd X PV au lieu d'un. S'il faut faire un jet de dé de blessure, on ne lance que la léthalité de cette arme, quel que soit le nombre de PV perdu." },
        { id: "trait_encombrant", name: "Encombrant", desc: "Au corps à corps, les attaques avec cette arme se font avec une initiative de 1." },
        { id: "trait_explosion", name: "Explosion (3\"/5\")", desc: "Placer ule gabarit correspondant sur la cible du tir. Si la touche rate, le gabarit se déplace de D6\" dans la direction indiquée par le dé de dispersion. Si le dé de dispersion indique un hit et le dé une valeur de 1, le tir est annulé. Si l'arme a tir rapide, les touches supplémentaires font une dispersion centrée sur le premier gabarit." },
        { id: "trait_fiable", name: "Fiable", desc: "Une arme avec ce trait ignore le premier résultat à court de munitions obtenu à chaque round." },
        { id: "trait_flammes", name: "Flammes (X+)", desc: "Si le jet pour blesser donner X ou plus, on effectue une touche supplémentaire, même s'il n'y a pas de blessure. Faire un nouveau jet de blessure pour cette nouvelle touche, qui n'en génèrera pas de supplémentaire." },
        { id: "trait_flash", name: "Flash", desc: "Si une cible est touchée par une arme avec flash, on ne jette pas de jet de blessure, mais d'initiative. S'il est raté, la figurine subit la condition aveugle, ce qui enlève son token prêt. Si la figurine n'en a pas, elle n'en récupèrera pas de token prêt au prochain round. Si elle doit attaquer au corps à corps, elle ne touchera que sur 6+." },
        { id: "trait_fumee", name: "Fumée", desc: "Cette arme ne cible pas une figurine, mais un point sur le champ de bataille. Une fois la position du gabarit déterminée, une colonne de fumée s'élève à cet endroit, ce qui blocks les lignes de vue. A la phase de renfort, jeter un D6, la fumée reste en place sur un 5+. une cible touchée par le gabarit n'est pas suppressed." },
        { id: "trait_gabarit", name: "Gabarit", desc: "quand un tir est réalisé avec cette arme, placer le gabarit en larme. Toute figurine sous le gabarit est automatiquement touchée. Si cette arme est légère et utilisée au corps à corps, elle touche automatiquement, mais on ne place pas le gabarit. Si l'arme a aussi tir rapide, la cible la plus proche est touchée autant de fois que le dé de tir rapide l'indique, les autres ne sont touchés qu'un seule fois." },
        { id: "trait_gaz", name: "Gaz", desc: "un guerrier ne peut faire de jet d'armure contre les armes ayant ce trait.Les guerriers équipés d'un respirateur ont une sauvegarde invulnérable de 5+ contre ces armes." },
        { id: "trait_graviton_pulse", name: "Graviton pulse", desc: "Au lieu de lancer un jet de blessure, la cible doit faire un test de force. S'il est raté, la figurine subit une blessure sans sauvegarde. Puis on laisse le marqueur d'explosion en place." },
        { id: "trait_independant", name: "Indépendant", desc: "Le porteur de cette arme ne peut pas tirer avec? A la place, elle tire en même temps que son porteur, en pouvant avoir une autre cible. Elle touche toujours sur 4+." },
        { id: "trait_instable", name: "Instable", desc: "Si le jet pour toucher avec cette arme donne 1, ,le guerrier maniant cette arme subit une touche automatique avec le profil de l'arme. Si cette arme ne nécessite pas de jet de touche, un D6 est lancé tout de même." },
        { id: "trait_jumelee", name: "Jumelée", desc: "Lors d'un tir avec cette arme, le dé de tir rapide peut être relancé." },
        { id: "trait_knockback", name: "Knockback (X+)", desc: "si cette arme touche avec un résultat de X ou plus, la cible est repoussée de 1\", ce qui peut la faire tomber. Cela peut aussi sortir de l'engagement la cible. Si l'arme a aussi le trait explosion, jeter un dé pour chaque combattant touché. Sur un X ou +, elles sont repoussées depuis le centre du gabarit." },
        { id: "trait_lance", name: "Lance", desc: "Si le guerrier portant cette arme est monté, il ajoute +1 en force à ses atttaques de charge." },
        { id: "trait_lance_bombe", name: "Lance-bombe", desc: "La première touche de la partie avec cette arme est résolue avec son profil \",primed\" toutes les autres se feront avec son profil \"utilisé\"" },
        { id: "trait_leger", name: "Léger", desc: "Cette arme peut être utilsié en tant qu'arme primaire ou secondaire au corps à corps, mais elle ne pourra toujours faire qu'une seule attaque. Si cette arme a le trait souffle, elle touche automatiquement, mais on ne place pas le gabarit." },
        { id: "trait_limite", name: "Limité", desc: "Si cette arme tombe à court de munitions, elle ne peut plus être utilisée pour cette partie." },
        { id: "trait_lourd", name: "Lourd", desc: "Une arme avec ce trait ne peut tirer qu'en utilisant l'action braced shot. Une arme de corps à corps avec ce trait ne peut pas être utilisée en tant qu'arme secondaire, ou en même temps qu'une arme secondaire." },
        { id: "trait_maudit", name: "Maudit", desc: "un guerrier touché par une arme maudite doit réussir un test de willpower ou subir la condition insanity. Si le jet pour toucher était de 1, c'est l'attaquant qui doit faire ce test." },
        { id: "trait_melee", name: "Melee", desc: "cette arme ne peut être utilisée que quand on est engagé." },
        { id: "trait_munitions", name: "Munitions (X+)", desc: "après le tir avec cette arme, lancer un D6. Si le résultat est X+, rien ne se passe. Sinon, l'arme est à court de munition même sans le trait tir rapide. Si l'arme a aussi tir rapide et a un résultat plus de munitions, l'ame n'est plus utilisable cette partie." },
        { id: "trait_paire", name: "Paire (X)", desc: "Une arme avec ce trait ne peut jamais être utilisée en tant qu'arme secondaire, ou en même temps qu'une arme secondaire. Quand on attaque avec cette arme, on ajoute X attaques." },
        { id: "trait_parade", name: "Parade", desc: "Quand cette arme est utilisée en tant qu'arme primaire ou secondaire au corps à corps, la sauvegarde augmente de 1." },
        { id: "trait_power_pack", name: "Power pack", desc: "Une arme avec ce trait ne compte pas dans le nombre d'armes qu'un guerrier peut porter, mais on ne peut avoir plus de 2 armes avec ce trait." },
        { id: "trait_rad_phage", name: "Rad-phage", desc: "Quand un guerrier subit une blessure non sauvegardée d'une arme avec ce trait, il devient empoisonné aux radiations, ce qui baisse son endurance de 1." },
        { id: "trait_rare", name: "Rare (X+)", desc: "Lors de l'action de recharge de cette arme, il faut lancer un D6. Si le résultat est X ou plus, l'arme est rechargée, sinon elle reste à court de munitions, mais on peut retenter l'action plus tard." },
        { id: "trait_shock", name: "Shock (X+)", desc: "Lors du jet pour toucher avec cette arme, si le résultat est de X ou +, on considère que le jet de blessure donne 6." },
        { id: "trait_temeraire", name: "Téméraire", desc: "une arme avec ce trait peut toucher toute figurine en ligne de vue dans les 6\", même amie, à déterminer aléatoirement. Au corps à corps, il faut aussi déterminer aléatoirement quell guerrier engagé avec le porteur est touché, même un allié." },
        { id: "trait_tir_rapide", name: "Tir rapide (X)", desc: "Quand on tire avec cette arme, on ajoute le dé de tir rapide, qui indiquera le nombre de touches. Cette arme risque de tomber à court de munitions." },
        { id: "trait_tir_unique", name: "Tir unique", desc: "Cette arme ne peut tirer qu'une fois par partie, sans pouvoir être rechargée." },
        { id: "trait_toile", name: "Toile", desc: "On ne jette pas de sauvegarde contre cette arme, sauf invulnérable. Si un guerrier est blessé par cette arme, il ne perd pas de PV mais gagne la condition entoilé.  Il ne peut plus bouger et subit un malus de -1 pour toucher. A la fin de son activation, il peut faire un test de force pour annuler cet état." },
        { id: "trait_toxine", name: "Toxine (X+)", desc: "lors du jet de blessure avec cette arme, on ignore l'endurance de la cible, qui est blessée sur X et + à la place. Pour les véhicules, ils ne seront endommagés que sur des 6+." }
    ],

    // ===== CARTES TACTIQUES (18) =====
    tactics: [
        { id: "tac_point_blank_shot", name: "Point-blank shot", timing: "Quand un guerrier s'active, avant ses actions", effect: "Une des armes du guerrier qui n'a pas les traits explosions ou template gagne le trait léger." },
        { id: "tac_hidden_stash", name: "Hidden stash", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pendant son activation, ce guerrier peut faire gratuitement une action de recharge." },
        { id: "tac_suppressing_fire", name: "Suppressing fire", timing: "Quand un guerrier tire", effect: "La cible est suppressed même si elle n'est pas touchée. Les compétences ne peuvent empêcher le suppressed." },
        { id: "tac_burst_of_courage", name: "Burst of courage", timing: "Avant de faire un bottle check", effect: "Le test est automatiquement réussi." },
        { id: "tac_adrenaline_surge", name: "Adrenaline surge", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier peut faire une action additionnelle." },
        { id: "tac_desperate_effort", name: "Desperate effort", timing: "Juste avant de choisir quel guerrier va s'activer", effect: "Activer le guerrier comme s'il avait un marqueur prêt. À la fin de son activation, il est suppressed et subit une blessure qu'on ne peut sauvegarder ou empêcher." },
        { id: "tac_grenade_bouquet", name: "Grenade bouquet", timing: "Quand un guerrier tire avec une grenade ayant le trait explosion", effect: "Le guerrier résout 3 attaques ciblant le même ennemi. Elles dévient toutes et l'arme devient à court de munitions." },
        { id: "tac_quick_finish", name: "Quick finish", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier peut faire un coup de grâce en action gratuite." },
        { id: "tac_remorseless_killer", name: "Remorseless killer", timing: "Quand un guerrier fait un coup de grâce, avant de jeter les dés", effect: "L'ennemi est directement out of combat sans jet de dé." },
        { id: "tac_last_gap", name: "Last gap", timing: "Quand un guerrier reçoit l'état out of action", effect: "Le guerrier peut immédiatement faire un tir avant d'être retiré du terrain." },
        { id: "tac_thundering_charge", name: "Thundering charge", timing: "Quand un guerrier déclare une charge, avant de jeter le dé de distance", effect: "Lancer 2 dés et choisir lequel garder pour la distance de charge." },
        { id: "tac_chain_attack", name: "Chain attack", timing: "Quand un guerrier a résolu un combat et n'est plus engagé", effect: "Le guerrier peut immédiatement effectuer une charge gratuite même s'il a déjà chargé ce tour. La distance de charge sera de D6+2\"." },
        { id: "tac_opening_volley", name: "Opening volley", timing: "Avant le premier round et le jet de priorité", effect: "Un guerrier peut immédiatement effectuer un tir sans perdre son état prêt." },
        { id: "tac_you", name: "You !", timing: "Quand un guerrier s'active, avant ses actions", effect: "Désigner un guerrier ennemi, le guerrier aura +1 pour blesser cet ennemi pour toute la partie. Tant que l'ennemi est sur la table, le guerrier ne peut prendre que lui pour cible de ses actions." },
        { id: "tac_rapid_healing", name: "Rapid healing", timing: "Quand un guerrier s'active, avant ses actions", effect: "Le guerrier récupère immédiatement 1 PV perdu." },
        { id: "tac_reckless_attack", name: "Reckless attack", timing: "Quand un guerrier s'active, avant ses actions", effect: "Pour son activation, le guerrier a +1 à sa WS. Jusqu'à sa prochaine activation, il sera touché sur un 2+ au corps à corps." },
        { id: "tac_rapid_fire", name: "Rapid fire", timing: "Quand un guerrier s'active, avant ses actions", effect: "Durant son activation, ce guerrier peut faire une action de tir gratuitement (pas une en plus)." },
        { id: "tac_crossfire", name: "Crossfire", timing: "Quand un guerrier s'active, avant ses actions", effect: "Si ce guerrier fait une attaque de tir sur un ennemi qui a déjà été pris pour cible par un allié à ce round, le tir touche automatiquement." }
    ],

    // ===== TERRITOIRES (19) =====
    territories: [
        { id: "ter_settlement", name: "Settlement", income: 15, optionType: "discount_ganger", optionText: "Option : Recruter un ganger (-25 cr sur coût)", desc: "Revenu : 15 cr OU recruter un ganger pour 25 cr de moins." },
        { id: "ter_bullet_den", name: "Bullet den", income: 15, optionType: "discount_ammojack", optionText: "Option : Recruter un Ammo-jack (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Ammo-jack pour 30 cr de moins." },
        { id: "ter_rogue_doc_shop", name: "Rogue doc shop", income: 15, optionType: "discount_doc", optionText: "Option : Recruter un Rogue doc (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Rogue doc pour 30 cr de moins." },
        { id: "ter_mess_shack", name: "Mess Shack", income: 15, optionType: "discount_slopper", optionText: "Option : Recruter un Slopper (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Slopper pour 30 cr de moins." },
        { id: "ter_drinking_hole", name: "Drinking hole", income: 15, optionType: "discount_watcher", optionText: "Option : Recruter un Hive watcher (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Hive watcher pour 30 cr de moins." },
        { id: "ter_fence_hangout", name: "Fence hangout", income: 15, optionType: "discount_runner", optionText: "Option : Recruter un Dome runner (-30 cr sur coût)", desc: "Revenu : 15 cr OU recruter un Dome runner pour 30 cr de moins." },
        { id: "ter_bounty_den", name: "Bounty den", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_generatorium", name: "Generatorium", income: 15, passive: "+1 Réputation", desc: "Revenu : 15 cr. Passif : +1 Réputation tant que contrôlé." },
        { id: "ter_corpse_farm", name: "Corpse farm", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_tunnels", name: "Tunnels", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_tech_bazaar", name: "Tech bazaar", income: 15, passive: "+1 TP", desc: "Revenu : 15 cr. Passif : +1 TP au Trading Post." },
        { id: "ter_promethium_cache", name: "Promethium cache", income: 15, optionType: "items_suits", optionText: "Option : 3 Combinaisons de protection gratos", desc: "Revenu : 15 cr OU récupérer gratuitement 3 combinaisons de protection dans le Stash." },
        { id: "ter_collapsed_dome", name: "Collapsed dome", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_bone_shrine", name: "Bone shrine", income: 25, desc: "Revenu : 25 crédits." },
        { id: "ter_mine_workings", name: "Mine workings", income: 20, optionType: "items_respirators", optionText: "Option : 2 Respirateurs gratos", desc: "Revenu : 20 cr OU récupérer gratuitement 2 respirateurs dans le Stash." },
        { id: "ter_gambling_den", name: "Gambling den", income: 15, passive: "+1 Réputation", desc: "Revenu : 15 cr. Passif : +1 Réputation tant que contrôlé." },
        { id: "ter_synth_still", name: "Synth still", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_old_ruins", name: "Old ruins", income: 20, desc: "Revenu : 20 crédits." },
        { id: "ter_fighting_pit", name: "Fighting pit", income: 25, desc: "Revenu : 25 crédits." }
    ]
};

// ==========================================
// STATE MANAGEMENT & LOCAL STORAGE
// ==========================================
let appState = { view: 'menu', mode: null, editTarget: null };
let savedGangs = JSON.parse(localStorage.getItem('escherGangs')) || {};
let currentGang = null;
let tempFighter = null;

function saveGangs() {
    localStorage.setItem('escherGangs', JSON.stringify(savedGangs));
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

function calculateFighterCost(m) {
    const char = db.characters.find(c => c.id === m.charId);
    if (!char) return 0;
    let total = char.cost;
    
    m.weapons.forEach(w => {
        total += (w.cost_credits || 0);
        if (w.accessory) {
            total += (w.accessory.cost_credits || 0);
        }
    });
    
    m.equipment.forEach(e => {
        total += (e.cost_credits || 0);
    });
    
    return total;
}

function calculateGangRating(gang) {
    if (!gang || !gang.members) return 0;
    let rating = 0;
    gang.members.forEach(m => {
        m.totalCost = calculateFighterCost(m);
        rating += m.totalCost;
    });
    gang.rating = rating;
    return rating;
}

function updateTopBar() {
    if (currentGang) {
        document.getElementById('header-gang-name').innerText = currentGang.name;
        document.getElementById('ui-credits').innerText = currentGang.credits;
        document.getElementById('ui-rating').innerText = calculateGangRating(currentGang);
        document.getElementById('header-credits-rating').classList.remove('hidden');
    } else {
        document.getElementById('header-gang-name').innerText = "Escher Builder";
        document.getElementById('header-credits-rating').classList.add('hidden');
    }
}

// ==========================================
// UI ROUTING
// ==========================================
function navigate(view) {
    appState.view = view;
    const container = document.getElementById('main-content');
    updateTopBar();

    switch(view) {
        case 'menu': renderMenu(container); break;
        case 'gang-create': renderGangCreate(container); break;
        case 'gang-select': renderGangSelect(container); break;
        case 'gang-manage': renderGangManage(container); break;
        case 'fighter-edit': renderFighterEdit(container); break;
        case 'game-setup': renderGameSetup(container); break;
    }
}

// ==========================================
// VIEWS RENDERING
// ==========================================
function renderMenu(container) {
    currentGang = null;
    updateTopBar();
    container.innerHTML = `
        <div class="card" style="text-align:center;">
            <h2>Bienvenue dans le Sous-Monde</h2>
            <p>Sélectionnez une option :</p><br>
            <button onclick="navigate('gang-create')">Création de Gang</button><br>
            <button onclick="appState.mode='campaign'; navigate('gang-select')">Suivi de Gang (Campagne)</button><br>
            <button onclick="appState.mode='quick'; navigate('gang-select')">Partie Rapide</button><br>
            <hr style="border-color:var(--border-color); margin: 20px 0;">
            <button onclick="importGang()">Importer un gang (.json)</button>
        </div>
    `;
}

function renderGangCreate(container) {
    container.innerHTML = `
        <div class="card">
            <h2>Créer un nouveau gang Escher</h2>
            <input type="text" id="new-gang-name" placeholder="Nom du gang">
            <button onclick="createGang()">Créer</button>
            <button class="btn-danger" onclick="navigate('menu')">Annuler</button>
        </div>
    `;
}

function createGang() {
    const name = document.getElementById('new-gang-name').value.trim();
    if(!name) return alert("Nom requis.");
    if(savedGangs[name] && !confirm("Ce nom existe déjà. L'écraser ?")) return;
    
    currentGang = {
        name: name, credits: 1000, rating: 0, reputation: 1, members: [], stash: [], territories: [], tactics: [], isEstablished: false
    };
    savedGangs[name] = currentGang;
    saveGangs();
    appState.mode = 'campaign';
    navigate('gang-manage');
}

function renderGangSelect(container) {
    let html = `<div class="card"><h2>Sélectionner un gang</h2>`;
    if(Object.keys(savedGangs).length === 0) {
        html += `<p>Aucun gang sauvegardé.</p>`;
    } else {
        for(let name in savedGangs) {
            calculateGangRating(savedGangs[name]);
            html += `
                <div class="fighter-item">
                    <span><strong>${name}</strong> (Rating: ${savedGangs[name].rating})</span>
                    <div>
                        <button onclick="loadGang('${name}')">Gérer</button>
                        <button onclick="exportGang('${name}')">Export</button>
                        <button class="btn-danger" onclick="deleteGang('${name}')">X</button>
                    </div>
                </div>
            `;
        }
    }
    html += `<br><button class="btn-danger" onclick="navigate('menu')">Retour</button></div>`;
    container.innerHTML = html;
}

function loadGang(name) {
    currentGang = savedGangs[name];
    if (currentGang.isEstablished === undefined) {
        currentGang.isEstablished = true;
    }
    navigate('gang-manage');
}

// ==========================================
// GESTION ET AFFICHAGE DU GANG
// ==========================================


// 1. Vue de gestion avec le tableau de caractéristiques
// 2. Vue de gestion avec le tableau de caractéristiques (lecture seule)
function renderGangManage(container) {
    calculateGangRating(currentGang);
    updateTopBar();

    const statKeys = ['M', 'WS', 'BS', 'S', 'T', 'W', 'I', 'A', 'Sv', 'Ld', 'Cl', 'Wil', 'Int'];

    let html = `
        <div class="card">
            <h2>Gestion de Gang : ${currentGang.name}</h2>
            <button onclick="openRecruitModal()">+ Recruter un Combattant</button>
            <button onclick="openGangTacticsModal()">🎴 Cartes Tactiques (${(currentGang.tactics || []).length})</button>
            <button onclick="navigate('game-setup')">⚔️ Lancer une partie</button>
            <button onclick="if(typeof renderPostCycleView === 'function') { renderPostCycleView(document.getElementById('main-content')); }">🔄 Lancer un Post-Cycle</button>
            ${!currentGang.isEstablished ? `<button class="btn-cyan" onclick="finishGangCreation()">✅ Valider la création du gang</button>` : ''}
            <button onclick="exportGang('${currentGang.name}')">Export JSON</button>
            <button class="btn-danger" onclick="navigate('menu')">Menu Principal</button>
        </div>
        
        <div class="card">
            <h3>Membres du Gang (${currentGang.members.length})</h3>
    `;

    if (currentGang.members.length === 0) {
        html += `<p style="margin-top:10px;">Aucun membre recruté.</p>`;
    } else {
        currentGang.members.forEach((m, idx) => {
            let st = m.stats || {};
            
            html += `
            <div class="card" style="margin-top:10px; background:#181818; border:1px solid var(--border-color);">
                <div class="fighter-item" style="border:none; padding:0 0 10px 0;">
                    <div>
                        <strong>${m.customName || 'Sans nom'}</strong> (${m.charName})<br>
                        <small>Coût: ${m.totalCost}c | Type: ${(m.type || []).join(', ')}</small>
                    </div>
                    <div>
                        <button onclick="editFighter(${idx})">Équipement & Compétences</button>
                        <button class="btn-danger" onclick="removeFighter(${idx})">Licencier</button>
                    </div>
                </div>

                <!-- TABLEAU DES CARACTÉRISTIQUES (LECTURE SEULE) -->
                <div style="overflow-x:auto; background:#111; padding:8px; border-radius:4px; border:1px solid #333;">
                    <div style="display:flex; justify-content:space-between; gap:4px; text-align:center; min-width:600px;">
                        ${statKeys.map(key => `
                            <div style="flex:1; background:#1a1a1a; padding:6px 2px; border-radius:3px; border:1px solid #222;">
                                <small style="color:var(--accent-cyan); font-weight:bold; font-size:11px;">${key}</small>
                                <div style="font-weight:bold; font-size:13px; margin-top:2px; color:#fff;">${st[key] !== undefined ? st[key] : '-'}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>`;
        });
    }
    html += `</div>`;
    container.innerHTML = html;
}function finishGangCreation() {
    if (confirm("Valider la liste initiale et passer en mode Gestion de Gang (Campagne) ?")) {
        currentGang.isEstablished = true;
        saveGangs();
        renderGangManage(document.getElementById('main-content'));
    }
}

// ==========================================
// FIGHTER EDITING & RECRUITMENT
// ==========================================
function openRecruitModal() {
    let html = `<h3>Sélectionner le profil à recruter</h3>`;
    
    // RESTRICTION 2 : Masquer les mercenaires lors de la création de départ
    const showMercs = currentGang && currentGang.isEstablished;

    db.characters.forEach(c => {
        const isMerc = c.id.startsWith("merc_");
        if (isMerc && !showMercs) return; // Ne pas afficher les mercenaires au départ

        html += `
            <div class="fighter-item">
                <span><strong>${c.name}</strong> (${c.cost}c) ${isMerc ? '<small style="color:var(--accent-purple);">[Mercenaire/Hanger-on]</small>' : ''}</span>
                <button onclick="selectRecruitProfile('${c.id}')">Choisir</button>
            </div>
        `;
    });

    openModal("Recrutement", html);
}

function selectRecruitProfile(charId) {
    closeModal();
    const char = db.characters.find(c => c.id === charId);
    if (!char) return;

    let initSkills = [];
    if (char.starting_skill && char.starting_skill.trim() !== "" && !char.starting_skill.includes("choix") && !char.starting_skill.includes("selon")) {
        let match = null;
        for (let cat in db.skills) {
            let found = db.skills[cat].find(s => s.name.toLowerCase() === char.starting_skill.toLowerCase());
            if (found) { match = JSON.parse(JSON.stringify(found)); break; }
        }
        if (match) {
            initSkills.push(match);
        } else {
            initSkills.push({ id: "sk_start_" + generateId(), name: char.starting_skill, desc: "Compétence de départ" });
        }
    }

    tempFighter = {
        id: generateId(),
        charId: char.id,
        charName: char.name,
        customName: "",
        type: char.type,
        stats: JSON.parse(JSON.stringify(char.stats)),
        weapons: [],
        equipment: [],
        skills: initSkills,
        totalCost: char.cost
    };
    appState.editTarget = null;
    navigate('fighter-edit');
}

function editFighter(idx) {
    appState.editTarget = idx;
    tempFighter = JSON.parse(JSON.stringify(currentGang.members[idx]));
    navigate('fighter-edit');
}

function renderFighterEdit(container) {
    const m = tempFighter;
    m.totalCost = calculateFighterCost(m);

    let html = `
        <div class="card">
            <h2>${appState.editTarget === null ? 'Recruter' : 'Modifier'} ${m.charName}</h2>
            <label>Nom personnalisable :</label>
            <input type="text" value="${m.customName}" placeholder="Ex: Roxie Speed" oninput="tempFighter.customName = this.value">
            
            <h3>Armes Équipées (Max 3 emplacements)</h3>
            <div id="weapon-list">
                ${m.weapons.length === 0 ? '<p>Aucune arme.</p>' : m.weapons.map((w, i) => `
                    <div style="margin:8px 0; background:#181818; padding:8px; border-radius:4px;">
                        • <strong>${w.name}</strong> (${w.cost_credits||0}c)
                        ${w.accessory ? `<br><small style="color:var(--accent-cyan); margin-left:15px;">↳ Accessoire : ${w.accessory.name} (${w.accessory.cost_credits}c) <button class="btn-danger" style="padding:2px 6px; font-size:10px;" onclick="removeWeaponAccessory(${i})">Retirer accessoire</button></small>` : `<br><button style="padding:2px 6px; font-size:11px; margin-left:15px;" onclick="openWeaponAccessoryModal(${i})">+ Ajouter un accessoire</button>`}
                        <button class="btn-danger" style="float:right; padding:2px 6px; font-size:11px;" onclick="removeWeapon(${i})">Supprimer l'arme</button>
                        <div style="clear:both;"></div>
                    </div>
                `).join('')}
            </div>
            <button onclick="openWeaponSelectModal()">+ Ajouter une Arme</button>

            <h3 style="margin-top:15px;">Armures & Équipements (Hors accessoires d'armes)</h3>
            <div id="equip-list">
                ${m.equipment.length === 0 ? '<p>Aucun équipement.</p>' : m.equipment.map((e, i) => `
                    <div style="margin:5px 0;">• ${e.name} (${e.cost_credits||0}c) <button class="btn-danger" onclick="removeEquipment(${i})">X</button></div>
                `).join('')}
            </div>
            <button onclick="openEquipSelectModal()">+ Ajouter Armure / Équipement</button>

            <h3 style="margin-top:15px;">Compétences</h3>
            <div id="skills-list">
                ${m.skills.length === 0 ? '<p>Aucune compétence sélectionnée.</p>' : m.skills.map((s, i) => `
                    <div style="margin:5px 0;">• ${s.name} <button class="btn-danger" onclick="removeSkill(${i})">X</button></div>
                `).join('')}
            </div>
            <button onclick="openSkillModal()">Gérer les Compétences</button>

            <hr style="margin:20px 0; border-color:var(--border-color);">
            <p><strong>Coût Total du Combattant : ${m.totalCost} crédits</strong></p>
            <button onclick="saveFighter()">Valider et Enregistrer</button>
            <button class="btn-danger" onclick="navigate('gang-manage')">Annuler</button>
        </div>
    `;
    container.innerHTML = html;
}

// RESTRICTION 1 : Uniquement les armes de clan (is_gang_weapon === true)
// ==========================================
// SELECTION ET GESTION DES ARMES
// ==========================================
function openWeaponSelectModal() {
    let usedSlots = tempFighter.weapons.reduce((sum, w) => sum + (w.name.includes('*') ? 2 : 1), 0);
    let html = `<p>Emplacements utilisés : ${usedSlots} / 3</p><br>`;

    const isCampaign = currentGang && currentGang.isEstablished;

    if (isCampaign) {
        html += `<h4 style="color:var(--accent-cyan);">1. Réserve du Gang (Stash) :</h4>`;
        if (!currentGang.stash) currentGang.stash = [];

        let availableWeapons = currentGang.stash.filter(item => {
            let itemType = (typeof item === 'object' && item.type) ? item.type : 'Arme';
            return itemType === 'Arme';
        });

        if (availableWeapons.length === 0) {
            html += `<p style="color:#888; font-size:12px; margin-bottom:10px;">Aucune arme disponible dans la réserve.</p>`;
        } else {
            availableWeapons.forEach((stItem) => {
                let itemName = typeof stItem === 'string' ? stItem : stItem.name;
                let slotsNeeded = itemName.includes('*') ? 2 : 1;
                let isAvailable = (usedSlots + slotsNeeded <= 3);

                html += `
                    <div class="fighter-item ${!isAvailable ? 'disabled' : ''}">
                        <span><strong>${itemName}</strong> ${slotsNeeded === 2 ? '<em>(2 emplacements)</em>' : ''} <small style="color:#2ecc71;">(Réserve - 0 cr)</small></span>
                        ${isAvailable ? `<button class="btn-cyan" onclick="addWeaponFromStash('${itemName}')">Équiper (Stash)</button>` : '<small>Emplacements insuffisants</small>'}
                    </div>
                `;
            });
        }
        html += `<hr style="margin:15px 0; border-color:#333;"><h4 style="color:var(--accent-purple);">2. Acheter sur la Liste de Clan :</h4>`;
    }

    const availableWeapons = db.weapons.filter(w => w.is_gang_weapon === true && !w.is_merc_weapon);
    if (availableWeapons.length === 0) {
        html += `<p style="color:#888; font-size:12px;">Aucune arme de clan disponible.</p>`;
    } else {
        availableWeapons.forEach(w => {
            let slotsNeeded = w.name.includes('*') ? 2 : 1;
            let isAvailable = (usedSlots + slotsNeeded <= 3);
            html += `
                <div class="fighter-item ${!isAvailable ? 'disabled' : ''}">
                    <span>${w.name} (${w.cost_credits||0}c) ${slotsNeeded === 2 ? '<em>(2 emplacements)</em>' : ''}</span>
                    ${isAvailable ? `<button onclick="addWeapon('${w.id}')">${isCampaign ? 'Acheter' : 'Ajouter'}</button>` : '<small>Emplacements insuffisants</small>'}
                </div>
            `;
        });
    }

    openModal("Sélection d'Arme", html);
}

function addWeapon(wId) {
    const w = db.weapons.find(item => item.id === wId);
    let newWeapon = JSON.parse(JSON.stringify(w));
    newWeapon.accessory = null;
    tempFighter.weapons.push(newWeapon);
    closeModal();
    renderFighterEdit(document.getElementById('main-content'));
}

function addWeaponFromStash(itemName) {
    if (!currentGang || !currentGang.stash) return;

    let sIdx = currentGang.stash.findIndex(item => (typeof item === 'string' ? item : item.name) === itemName);
    if (sIdx >= 0) {
        currentGang.stash.splice(sIdx, 1);
        let foundDbW = db.weapons.find(w => w.name === itemName);
        let newWeapon = foundDbW ? JSON.parse(JSON.stringify(foundDbW)) : { name: itemName, cost_credits: 0 };
        newWeapon.accessory = null;
        newWeapon.fromStash = true;
        tempFighter.weapons.push(newWeapon);
        saveGangs();
    }
    closeModal();
    renderFighterEdit(document.getElementById('main-content'));
}

function removeWeapon(idx) {
    let w = tempFighter.weapons[idx];
    if (currentGang && currentGang.isEstablished) {
        if (!currentGang.stash) currentGang.stash = [];
        if (w.accessory) {
            currentGang.stash.push({ name: w.accessory.name, type: "Accessoire", cost: w.accessory.cost_credits || 0 });
        }
        currentGang.stash.push({ name: w.name, type: "Arme", cost: w.cost_credits || 0 });
        saveGangs();
    }
    tempFighter.weapons.splice(idx, 1);
    renderFighterEdit(document.getElementById('main-content'));
}

// ==========================================
// SELECTION ET GESTION DES ACCESSOIRES D'ARMES
// ==========================================
let currentWeaponIndexForAccessory = null;

function openWeaponAccessoryModal(wIdx) {
    currentWeaponIndexForAccessory = wIdx;
    const isCampaign = currentGang && currentGang.isEstablished;
    let html = `<h3>Sélectionner un accessoire pour l'arme</h3><br>`;

    if (isCampaign) {
        html += `<h4 style="color:var(--accent-cyan);">1. Réserve du Gang (Stash) :</h4>`;
        if (!currentGang.stash) currentGang.stash = [];
        let availableAccs = currentGang.stash.filter(item => {
            let itemType = (typeof item === 'object' && item.type) ? item.type : '';
            return itemType === 'Accessoire';
        });

        if (availableAccs.length === 0) {
            html += `<p style="color:#888; font-size:12px; margin-bottom:10px;">Aucun accessoire d'arme dans la réserve.</p>`;
        } else {
            availableAccs.forEach(stItem => {
                let itemName = typeof stItem === 'string' ? stItem : stItem.name;
                html += `
                    <div class="fighter-item">
                        <span><strong>${itemName}</strong> <small style="color:#2ecc71;">(Réserve - 0 cr)</small></span>
                        <button class="btn-cyan" onclick="attachAccessoryFromStash('${itemName}')">Équiper (Stash)</button>
                    </div>
                `;
            });
        }
        html += `<hr style="margin:15px 0; border-color:#333;"><h4 style="color:var(--accent-purple);">2. Acheter un Accessoire de Clan :</h4>`;
    }

    let accessories = db.equipment.filter(e => e.type === "Accessoire" && e.is_gang === true);
    if (accessories.length === 0) {
        html += `<p style="color:#888; font-size:12px;">Aucun accessoire disponible.</p>`;
    } else {
        accessories.forEach(acc => {
            html += `
                <div class="fighter-item">
                    <span><strong>${acc.name}</strong> (${acc.cost_credits}c) <br><small>${acc.effect || ''}</small></span>
                    <button onclick="attachAccessoryToWeapon('${acc.id}')">${isCampaign ? 'Acheter' : 'Équiper'}</button>
                </div>
            `;
        });
    }

    openModal("Accessoire d'arme", html);
}

function attachAccessoryToWeapon(accId) {
    const acc = db.equipment.find(item => item.id === accId);
    if (currentWeaponIndexForAccessory !== null) {
        tempFighter.weapons[currentWeaponIndexForAccessory].accessory = JSON.parse(JSON.stringify(acc));
    }
    closeModal();
    renderFighterEdit(document.getElementById('main-content'));
}

function attachAccessoryFromStash(accName) {
    if (!currentGang || !currentGang.stash) return;

    let sIdx = currentGang.stash.findIndex(item => (typeof item === 'string' ? item : item.name) === accName);
    if (sIdx >= 0 && currentWeaponIndexForAccessory !== null) {
        currentGang.stash.splice(sIdx, 1);
        let foundDbAcc = db.equipment.find(e => e.name === accName);
        let accObj = foundDbAcc ? JSON.parse(JSON.stringify(foundDbAcc)) : { name: accName, cost_credits: 0 };
        accObj.fromStash = true;
        tempFighter.weapons[currentWeaponIndexForAccessory].accessory = accObj;
        saveGangs();
    }
    closeModal();
    renderFighterEdit(document.getElementById('main-content'));
}

function removeWeaponAccessory(wIdx) {
    let acc = tempFighter.weapons[wIdx].accessory;
    if (acc && currentGang && currentGang.isEstablished) {
        if (!currentGang.stash) currentGang.stash = [];
        currentGang.stash.push({ name: acc.name, type: "Accessoire", cost: acc.cost_credits || 0 });
        saveGangs();
    }
    tempFighter.weapons[wIdx].accessory = null;
    renderFighterEdit(document.getElementById('main-content'));
}

// ==========================================
// SELECTION ET GESTION DES ARMURES & EQUIPEMENTS
// ==========================================
function openEquipSelectModal() {
    const isCampaign = currentGang && currentGang.isEstablished;
    let html = ``;

    if (isCampaign) {
        html += `<h4 style="color:var(--accent-cyan);">1. Réserve du Gang (Stash) :</h4>`;
        if (!currentGang.stash) currentGang.stash = [];
        let availableEquip = currentGang.stash.filter(item => {
            let itemType = (typeof item === 'object' && item.type) ? item.type : '';
            return itemType === 'Armure' || itemType === 'Équipement' || itemType === 'Personnel';
        });

        if (availableEquip.length === 0) {
            html += `<p style="color:#888; font-size:12px; margin-bottom:10px;">Aucun équipement disponible dans la réserve.</p>`;
        } else {
            availableEquip.forEach(stItem => {
                let itemName = typeof stItem === 'string' ? stItem : stItem.name;
                let itemType = (typeof stItem === 'object' && stItem.type) ? stItem.type : 'Matériel';
                html += `
                    <div class="fighter-item">
                        <span><strong>${itemName}</strong> <small style="color:#aaa;">(${itemType})</small> <small style="color:#2ecc71;">(Réserve - 0 cr)</small></span>
                        <button class="btn-cyan" onclick="addEquipmentFromStash('${itemName}')">Équiper (Stash)</button>
                    </div>
                `;
            });
        }
        html += `<hr style="margin:15px 0; border-color:#333;"><h4 style="color:var(--accent-purple);">2. Acheter sur la Liste de Clan :</h4>`;
    }

    let generalEquipments = db.equipment.filter(e => e.type !== "Accessoire" && e.is_gang === true);
    if (generalEquipments.length === 0) {
        html += `<p style="color:#888; font-size:12px;">Aucun équipement de clan disponible.</p>`;
    } else {
        generalEquipments.forEach(e => {
            html += `
                <div class="fighter-item">
                    <span>${e.name} (${e.cost_credits||0}c) - <small>${e.type}</small></span>
                    <button onclick="addEquipment('${e.id}')">${isCampaign ? 'Acheter' : 'Équiper'}</button>
                </div>
            `;
        });
    }

    openModal("Sélection Armure / Équipement", html);
}

function addEquipment(eId) {
    const e = db.equipment.find(item => item.id === eId);
    tempFighter.equipment.push(JSON.parse(JSON.stringify(e)));
    closeModal();
    renderFighterEdit(document.getElementById('main-content'));
}

function addEquipmentFromStash(itemName) {
    if (!currentGang || !currentGang.stash) return;

    let sIdx = currentGang.stash.findIndex(item => (typeof item === 'string' ? item : item.name) === itemName);
    if (sIdx >= 0) {
        currentGang.stash.splice(sIdx, 1);
        let foundDbE = db.equipment.find(e => e.name === itemName);
        let newE = foundDbE ? JSON.parse(JSON.stringify(foundDbE)) : { name: itemName, cost_credits: 0 };
        newE.fromStash = true;
        tempFighter.equipment.push(newE);
        saveGangs();
    }
    closeModal();
    renderFighterEdit(document.getElementById('main-content'));
}

function removeEquipment(idx) {
    let eq = tempFighter.equipment[idx];
    if (currentGang && currentGang.isEstablished) {
        if (!currentGang.stash) currentGang.stash = [];
        currentGang.stash.push({ name: eq.name, type: eq.type || "Équipement", cost: eq.cost_credits || 0 });
        saveGangs();
    }
    tempFighter.equipment.splice(idx, 1);
    renderFighterEdit(document.getElementById('main-content'));
}

// ==========================================
// GESTION DES COMPÉTENCES (CRÉATION)
// ==========================================
function openSkillModal() {
    if (!tempFighter) return;
    const char = db.characters.find(c => c.id === tempFighter.charId);
    if (!char) return;

    let types = (char.type || []).map(t => t.toLowerCase());

    let isLeaderOrChampion = types.includes("leader") || types.includes("champion");
    let isProspectOrBeast = types.includes("prospect") || types.includes("bête") || types.includes("bette");
    let isSpecialist = types.includes("spécialiste") || types.includes("specialiste");

    const norm = s => s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

    let primaryCats = (char.primary_skills || []).map(s => norm(s));
    let secondaryCats = (char.secondary_skills || []).map(s => norm(s));

    const specialistSkillIds = [
        "sk_biceps_saillants", "sk_tir_hanche", "sk_pistolero", "sk_grimper",
        "sk_tir_precision", "sk_berserker", "sk_soin", "sk_munitions"
    ];

    let html = `<div style="max-height:60vh; overflow-y:auto;">`;

    if (isProspectOrBeast) {
        html += `<p style="color:var(--accent-purple); padding:10px; background:#111; border-radius:5px; border:1px solid #333;">
            ⚠️ Les Prospects et Bêtes n'ont pas accès à la sélection de compétences à la création (uniquement leur compétence de départ).
        </p>`;
    } else if (isSpecialist) {
        html += `<p style="color:var(--accent-cyan); margin-bottom:10px;">
            🎯 <strong>Spécialiste :</strong> Choisissez 1 compétence parmi les 8 spécialités ci-dessous :
        </p>`;

        for (let cat in db.skills) {
            db.skills[cat].forEach(s => {
                if (specialistSkillIds.includes(s.id)) {
                    let isChecked = tempFighter.skills.some(sk => sk.id === s.id);
                    html += `
                        <div class="skill-checkbox-group" style="margin-bottom:8px; padding:6px; background:#181818; border-radius:4px; border:1px solid #333;">
                            <input type="checkbox" id="sk-${s.id}" ${isChecked ? 'checked' : ''} onchange="toggleSpecialistSkill('${s.id}', '${cat}')">
                            <label for="sk-${s.id}"><strong>${s.name}</strong> (${cat.toUpperCase()}) : ${s.desc}</label>
                        </div>
                    `;
                }
            });
        }
    } else {
        for (let cat in db.skills) {
            let catNorm = norm(cat);
            let isPrimary = primaryCats.includes(catNorm);
            let isSecondary = secondaryCats.includes(catNorm);
            
            let isAllowed = true;
            if (isLeaderOrChampion) {
                isAllowed = isPrimary || isSecondary;
            }

            html += `
                <div class="skill-category" style="margin-bottom:12px; ${isAllowed ? '' : 'opacity:0.35; pointer-events:none; filter:grayscale(1);'}">
                    <h4 style="margin-bottom:6px; color:${isPrimary ? 'var(--accent-cyan)' : (isSecondary ? 'var(--accent-purple)' : '#888')};">
                        Catégorie : ${cat.toUpperCase()} ${isPrimary ? '(Primaire)' : (isSecondary ? '(Secondaire)' : (isLeaderOrChampion ? '(Inaccessible)' : ''))}
                    </h4>
            `;

            db.skills[cat].forEach(s => {
                let isChecked = tempFighter.skills.some(sk => sk.id === s.id);
                html += `
                    <div class="skill-checkbox-group" style="margin-bottom:4px;">
                        <input type="checkbox" id="sk-${s.id}" ${isChecked ? 'checked' : ''} ${isAllowed ? '' : 'disabled'} onchange="toggleSkill('${cat}', '${s.id}')">
                        <label for="sk-${s.id}"><strong>${s.name}</strong> : ${s.desc}</label>
                    </div>
                `;
            });

            html += `</div>`;
        }
    }

    html += `</div><br><button class="btn" onclick="closeModal()">Fermer</button>`;
    openModal("Menu des Compétences (Création)", html);
}

function toggleSpecialistSkill(skillId, cat) {
    const skillObj = db.skills[cat].find(s => s.id === skillId);
    if (!skillObj) return;

    const specialistSkillIds = [
        "sk_biceps_saillants", "sk_tir_hanche", "sk_pistolero", "sk_grimper",
        "sk_tir_precision", "sk_berserker", "sk_soin", "sk_munitions"
    ];

    tempFighter.skills = tempFighter.skills.filter(s => !specialistSkillIds.includes(s.id));

    let checkbox = document.getElementById(`sk-${skillId}`);
    if (checkbox && checkbox.checked) {
        tempFighter.skills.push(JSON.parse(JSON.stringify(skillObj)));
    }

    openSkillModal();
}

function toggleSkill(cat, skillId) {
    const skillObj = db.skills[cat].find(s => s.id === skillId);
    const existingIdx = tempFighter.skills.findIndex(s => s.id === skillId);
    
    if (existingIdx >= 0) {
        tempFighter.skills.splice(existingIdx, 1);
    } else {
        tempFighter.skills.push(JSON.parse(JSON.stringify(skillObj)));
    }
}

function removeSkill(idx) {
    tempFighter.skills.splice(idx, 1);
    renderFighterEdit(document.getElementById('main-content'));
}

// ==========================================
// SAUVEGARDE ET RENVOI DU COMBATTANT
// ==========================================
function saveFighter() {
    if (!tempFighter.customName.trim()) return alert("Veuillez saisir un nom pour le combattant.");
    
    tempFighter.totalCost = calculateFighterCost(tempFighter);

    if (!currentGang.isEstablished) {
        // En création de gang initiale
        let oldCost = 0;
        if (appState.editTarget !== null) {
            oldCost = currentGang.members[appState.editTarget].totalCost;
        }
        let diff = tempFighter.totalCost - oldCost;
        if (currentGang.credits - diff < 0) return alert("Crédits insuffisants !");
        currentGang.credits -= diff;
    } else {
        // En campagne : calcul des crédits à prélever pour les éléments neufs (non issus de la réserve)
        let creditsToPay = 0;

        if (appState.editTarget === null) {
            // Recrutement d'un nouveau guerrier
            const charDef = db.characters.find(c => c.id === tempFighter.charId);
            creditsToPay += (charDef ? charDef.cost : 0);

            (tempFighter.weapons || []).forEach(w => {
                if (!w.fromStash) creditsToPay += (w.cost_credits || 0);
                if (w.accessory && !w.accessory.fromStash) creditsToPay += (w.accessory.cost_credits || 0);
            });
            (tempFighter.equipment || []).forEach(e => {
                if (!e.fromStash) creditsToPay += (e.cost_credits || 0);
            });
        } else {
            // Modification d'un guerrier existant
            let origFighter = currentGang.members[appState.editTarget];
            
            (tempFighter.weapons || []).forEach(w => {
                let wasOnOrig = (origFighter.weapons || []).some(ow => ow.name === w.name);
                if (!wasOnOrig && !w.fromStash) creditsToPay += (w.cost_credits || 0);
                if (w.accessory) {
                    let wasAccOnOrig = (origFighter.weapons || []).some(ow => ow.accessory && ow.accessory.name === w.accessory.name);
                    if (!wasAccOnOrig && !w.accessory.fromStash) creditsToPay += (w.accessory.cost_credits || 0);
                }
            });

            (tempFighter.equipment || []).forEach(e => {
                let wasOnOrig = (origFighter.equipment || []).some(oe => oe.name === e.name);
                if (!wasOnOrig && !e.fromStash) creditsToPay += (e.cost_credits || 0);
            });
        }

        if (creditsToPay > 0) {
            if (currentGang.credits < creditsToPay) {
                return alert(`Crédits insuffisants ! Requis : ${creditsToPay} cr | Disponibles : ${currentGang.credits} cr.`);
            }
            currentGang.credits -= creditsToPay;
        }
    }
    
    if (appState.editTarget === null) {
        currentGang.members.push(tempFighter);
    } else {
        currentGang.members[appState.editTarget] = tempFighter;
    }
    
    calculateGangRating(currentGang);
    saveGangs();
    navigate('gang-manage');
}

function removeFighter(idx) {
    if (!confirm("Voulez-vous vraiment licencier ce combattant ?")) return;
    const m = currentGang.members[idx];

    if (currentGang.isEstablished) {
        if (!currentGang.stash) currentGang.stash = [];
        (m.weapons || []).forEach(w => {
            if (w.accessory) {
                currentGang.stash.push({ name: w.accessory.name, type: "Accessoire", cost: w.accessory.cost_credits || 0 });
            }
            currentGang.stash.push({ name: w.name, type: "Arme", cost: w.cost_credits || 0 });
        });
        (m.equipment || []).forEach(e => {
            currentGang.stash.push({ name: e.name, type: e.type || "Équipement", cost: e.cost_credits || 0 });
        });
        alert(`Les équipements de ${m.customName} ont été remis dans la réserve de gang.`);
    } else {
        currentGang.credits += m.totalCost;
    }

    currentGang.members.splice(idx, 1);
    calculateGangRating(currentGang);
    saveGangs();
    renderGangManage(document.getElementById('main-content'));
}
// ==========================================
// MODALE & UTILS EXPORT
// ==========================================
function openModal(title, content) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerHTML = content;
    document.getElementById('modal-overlay').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    if (appState.view === 'fighter-edit') {
        renderFighterEdit(document.getElementById('main-content'));
    }
}

function exportGang(name) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(savedGangs[name], null, 2));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href", dataStr);
    dlAnchorElem.setAttribute("download", `Gang_${name.replace(/\s+/g, '_')}.json`);
    dlAnchorElem.click();
}

function importGang() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const gang = JSON.parse(event.target.result);
                savedGangs[gang.name] = gang;
                saveGangs();
                alert("Gang importé avec succès !");
                navigate('gang-select');
            } catch(err) { alert("Fichier JSON invalide."); }
        };
        reader.readAsText(file);
    };
    input.click();
}

function deleteGang(name) {
    if(confirm(`Êtes-vous sûr de vouloir supprimer définitivement le gang ${name} ?`)) {
        delete savedGangs[name];
        saveGangs();
        renderGangSelect(document.getElementById('main-content'));
    }
}

// ==========================================
// GESTION DES CARTES TACTIQUES (BUILDER)
// ==========================================
function openGangTacticsModal() {
    if (!currentGang) return;
    if (!currentGang.tactics) currentGang.tactics = [];

    let html = `<div style="max-height:60vh; overflow-y:auto;">
        <p><small>Sélectionnez les cartes attribuées au gang pour vos affrontements.</small></p>
        <hr style="margin:10px 0; border-color:#333;">
    `;

    (db.tactics || []).forEach(t => {
        let isSelected = currentGang.tactics.some(gt => (typeof gt === 'string' ? gt === t.id : gt.id === t.id));
        html += `
            <div style="border:1px solid #444; padding:10px; margin-bottom:8px; border-radius:6px; background:#111; display:flex; justify-content:space-between; align-items:center;">
                <div style="flex:1; padding-right:10px;">
                    <strong style="color:var(--accent-cyan); font-size:15px;">${t.name}</strong><br>
                    <small style="color:var(--accent-purple);"><strong>Timing :</strong> ${t.timing}</small><br>
                    <small style="color:#ccc;"><strong>Effet :</strong> ${t.effect}</small>
                </div>
                <button class="${isSelected ? 'btn-danger' : 'btn-cyan'}" style="padding:4px 10px; font-size:12px;" onclick="toggleGangTactic('${t.id}')">
                    ${isSelected ? 'Retirer' : 'Ajouter'}
                </button>
            </div>
        `;
    });

    html += `</div><br><button class="btn" onclick="if (typeof closeModal==='function') closeModal()">Fermer</button>`;
    openModal("🎴 Sélection des Cartes Tactiques", html);
}

function toggleGangTactic(tacticId) {
    if (!currentGang) return;
    if (!currentGang.tactics) currentGang.tactics = [];

    let tacObj = db.tactics.find(t => t.id === tacticId);
    if (!tacObj) return;

    let existingIdx = currentGang.tactics.findIndex(gt => (typeof gt === 'string' ? gt === tacticId : gt.id === tacticId));

    if (existingIdx >= 0) {
        currentGang.tactics.splice(existingIdx, 1);
    } else {
        currentGang.tactics.push(JSON.parse(JSON.stringify(tacObj)));
    }

    saveGangs();
    renderGangManage(document.getElementById('main-content'));
    openGangTacticsModal();
}

navigate('menu');
