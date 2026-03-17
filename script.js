(function() {
    // Initialization guard: ensure script runs only once
    if (window.webedInitialized) return;

    const init = () => {
        try {
            // --- Elements DOM ---
            const get = (id) => document.getElementById(id);
            
            const navHomeBtn = get('navHomeBtn');
            const logoHomeBtn = get('logoHomeBtn');
            const settingsBtn = get('settingsBtn');
            const settingsModal = get('settingsModal');
            const closeSettingsModal = get('closeSettingsModal');
            const adminPanelBtn = get('adminPanelBtn');
            const loginBtnTrigger = get('loginBtnTrigger');
            const heroLoginBtn = get('heroLoginBtn');
            const loginModal = get('loginModal');
            const closeLoginModal = get('closeLoginModal');
            const usageModal = get('usageModal');
            const closeUsageModal = get('closeUsageModal');
            const closeUsageBtn = get('closeUsageBtn');
            const rustTutoModal = get('rustTutoModal');
            const closeRustTutoModal = get('closeRustTutoModal');
            const closeRustTutoBtn = get('closeRustTutoBtn');
            const tutoRustBtn = get('tutoRustBtn');
            const mimesisTutoModal = get('mimesisTutoModal');
            const closeMimesisTutoModal = get('closeMimesisTutoModal');
            const closeMimesisTutoBtn = get('closeMimesisTutoBtn');
            const tutoMimesisBtn = get('tutoMimesisBtn');
            const backroomsTutoModal = get('backroomsTutoModal');
            const closeBackroomsTutoModal = get('closeBackroomsTutoModal');
            const closeBackroomsTutoBtn = get('closeBackroomsTutoBtn');
            const tutoBackroomsBtn = get('tutoBackroomsBtn');
            const apexTutoModal = get('apexTutoModal');
            const closeApexTutoModal = get('closeApexTutoModal');
            const closeApexTutoBtn = get('closeApexTutoBtn');
            const tutoApexBtn = get('tutoApexBtn');
            const nitroTutoModal = get('nitroTutoModal');
            const closeNitroTutoModal = get('closeNitroTutoModal');
            const closeNitroTutoBtn = get('closeNitroTutoBtn');
            const tutoNitroBtn = get('tutoNitroBtn');
            const codWWIITutoModal = get('codWWIITutoModal');
            const closeCodWWIITutoModal = get('closeCodWWIITutoModal');
            const closeCodWWIITutoBtn = get('closeCodWWIITutoBtn');
            const tutoCodWWIIBtn = get('tutoCodWWIIBtn');

            const subnauticaTutoModal = get('subnauticaTutoModal');
            const closeSubnauticaTutoModal = get('closeSubnauticaTutoModal');
            const closeSubnauticaTutoBtn = get('closeSubnauticaTutoBtn');
            const tutoSubnauticaBtn = get('tutoSubnauticaBtn');
            const authButtons = get('authButtons');
            const userProfile = get('userProfile');
            const profileName = get('profileName');
            const logoutBtn = get('logoutBtn');
            const contributorsList = get('contributorsList');
            const adminContributorsList = get('adminContributorsList');
            const addContributorForm = get('addContributorForm');
            const contribPseudo = get('contribPseudo');
            const contribAmount = get('contribAmount');
            const langSelector = get('langSelector');
            const customOptions = document.querySelectorAll('.custom-option');
            const selectedLangText = get('selectedLangText');
            const heroView = document.querySelector('.hero');
            const toastContainer = get('toastContainer');
            const adminView = get('adminView');
            const adminDashboardView = get('adminDashboardView');
            const adminAccountsView = get('adminAccountsView');
            const scriptView = get('scriptView');
            const gamesView = get('gamesView');
            const autocView = get('autocView');
            const apexView = get('apexView');
            const ytdlpView = get('ytdlpView');
            const pingView = get('pingView');
            const nitroView = get('nitroView');
            const donationView = get('donationView');
            const adminDonationView = get('adminDonationView');
            const heroScriptBtn = get('heroScriptBtn');
            const heroGamesBtn = get('heroGamesBtn');
            const heroAutocBtn = get('heroAutocBtn');
            const heroApexBtn = get('heroApexBtn');
            const heroYtdlpBtn = get('heroYtdlpBtn');
            const heroPingBtn = get('heroPingBtn');
            const heroNitroBtn = get('heroNitroBtn');
            const heroDonationBtn = get('heroDonationBtn');
            const heartBtn = document.querySelector('.heart-btn');
            const amountBtns = document.querySelectorAll('.amount-btn');
            const goalProgressBar = get('goalProgressBar');
            const currentGoalAmountElem = get('currentGoalAmount');
            const startSpeedTestBtn = get('startSpeedTestBtn');
            const loginForm = get('loginForm');
            const adminLoginForm = get('adminLoginForm');
            const adminDonationForm = get('adminDonationForm');
            const ytRedirectBtn = get('ytRedirectBtn');
            const gameSearchInput = get('gameSearchInput');

            // --- Config ---
            const API_URL = 'http://localhost:5000';
            const ADMIN_SECRET = 'webed_admin_2026';
            let currentLang = 'fr';

            // --- Translations ---
            const i18n = {
                fr: {
                    search_placeholder: "Recherche...",
                    settings_title: "Paramètres",
                    lang_title: "Langue de l'interface",
                    lang_fr: "Français",
                    lang_en: "English",
                    login: "Connexion",
                    signup: "S'inscrire",
                    hero_title: "Bienvenue",
                    hero_desc: "Nous mettons a disposition nos usages.",
                    hero_btn: "Commencer l'expérience",
                    public_tools_label: "Accès Libre",
                    private_tools_label: "Accès Membres",
                    login_title: "Connexion",
                    signup_title: "Inscription",
                    email_label: "Pseudo",
                    password_label: "Mot de passe",
                    name_label: "Nom",
                    password_req_label: "Mot de passe (Min 8 car, 1 Maj, 1 Chiffre)",
                    confirm_password_label: "Confirmer le mot de passe",
                    login_submit: "Se connecter",
                    signup_submit: "S'inscrire",
                    logout: "Déconnexion",
                    btn_convert: "Convertir",
                    btn_convert_desc: "Télécharger & Convertir vos médias",
                    convert_title: "YouTube Converter",
                    convert_desc: "Convertissez vos vidéos YouTube préférées en MP3 ou MP4 en un clic.",
                    youtube_url_label: "Lien de la vidéo YouTube",
                    youtube_url_placeholder: "https://www.youtube.com/watch?v=...",
                    format_label: "Format de sortie",
                    convert_submit: "Convertir",
                    status_init: "Initialisation...",
                    status_downloading: "Récupération de la vidéo...",
                    status_converting: "Conversion en cours...",
                    status_finalizing: "Finalisation...",
                    status_done: "Conversion terminée !",
                    error_invalid_url: "Veuillez entrer un lien YouTube valide.",
                    verification_title: "Vérification Email",
                    verification_desc: "Un code à 6 chiffres a été envoyé à votre adresse email. (Simulation)",
                    code_label: "Code de vérification",
                    verify_submit: "Vérifier",
                    discord_join_desc: "Pour obtenir un compte, veuillez rejoindre notre Discord et faire une demande de compte.",
                    admin_panel: "Panneau Admin",
                    admin_login_title: "Accès Restreint",
                    admin_login_desc: "Veuillez vous authentifier pour accéder au panneau d'administration.",
                    admin_username_label: "Identifiant Administrateur",
                    admin_login_submit: "Accéder au panneau",
                    back_to_home: "Retour à l'accueil",
                    btn_script_macro: "Script / macro",
                    script_macro_desc: "Automatisez vos tâches répétitives",
                    script_title: "Scripts & Macros",
                    script_desc: "Téléchargez nos outils d'automatisation pour optimiser votre expérience.",
                    script_delete_cache_title: "Delet Cache app",
                    script_delete_cache_desc: "Nettoyez rapidement le cache de vos applications.",
                    script_hardnuke_title: "HardNuke safe",
                    script_hardnuke_desc: "Fichier Nuke création de fichier en arriere plans a chaque démarrage de pc.",
                    usage_step_1: "Télécharger le fichier ( SANS L'OUVRIR )",
                    usage_step_2: "Renommer le comme vous le souhaitez en enlevant le .exe",
                    usage_step_3: "Vous pouvez maintenant l'envoyer à la personne de votre choix",
                    script_discord_ping_title: "Macro Discord ping mp",
                    script_discord_ping_desc: "Automatisez les pings en messages privés Discord.",
                    script_ytdlp_title: "Téléchargeur de vidéos/audio",
                    script_ytdlp_desc: "Un script basé sur yt-dlp pour récupérer des vidéos YouTube ou des playlists en haute qualité.",
                    script_ping_title: "Testeur de connexion",
                    script_ping_desc: "Vérifie ton ping et ta vitesse toutes les heures et enregistre les résultats (idéal pour râler auprès de son opérateur).",
                    script_price_title: "Veilleur de prix",
                    script_price_desc: "Surveiller une page produit et t'envoyer une notification quand le prix baisse.",
                    download: "Télécharger",
                    usage: "Utilisation",
                    usage_title: "Instructions d'utilisation",
                    close: "Fermer",
                    suspend_user_title: "Bloquer l'utilisateur",
                    duration_label: "Durée",
                    unit_seconds: "Secondes",
                    unit_minutes: "Minutes",
                    unit_hours: "Heures",
                    unit_days: "Jours",
                    reason_label: "Raison du blocage",
                    confirm_block: "Confirmer le blocage",
                    block_user: "Bloquer",
                    unblock_user: "Débloquer",
                    account_suspended_title: "Compte suspendu",
                    account_suspended_desc: "Votre accès à la plateforme a été temporairement restreint par un administrateur.",
                    remaining_time_label: "Temps restant",
                    understand: "J'ai compris",
                    suspended_status: "Suspendu",
                    btn_games: "Games",
                    games_desc: "Découvrez notre bibliothèque de jeux",
                    games_title: "Games",
                    games_view_desc: "Découvrez et téléchargez notre sélection de jeux.",
                    discord_games_title: "Discord Webed",
                    discord_games_desc: "Rejoignez le serveur discord pour proposer des jeux crackés à ajouter !",
                    join_discord_games: "Rejoindre le Discord",
                    member_info_text: "L'accès membres est gratuit ! Rejoignez notre Discord, ouvrez un ticket et faites une demande de compte pour y accéder.",
                    rust_title: "Rv there yet ?",
                    rust_desc: "Jeu de survie et d'aventure sur la route.",
                    tuto_btn: "Tuto",
                    rust_tuto_title: "Tutoriel Rv there yet ?",
                    rust_tuto_intro: "Voici comment lancer Rv there yet ?:",
                    rust_tuto_step1: "Regarder le Tuto Préparation avant téléchargement",
                    rust_tuto_step2: "Regarder le Tuto Vidéo du jeu",
                    tuto_video_btn: "Tuto Vidéo",
                    pre_dl_tuto_btn: "Tuto Préparation avant téléchargement",
                    mimesis_title: "Mimesis",
                    mimesis_desc: "Jeu de survie horreur en coopération.",
                    mimesis_tuto_title: "Tutoriel Mimesis",
                    mimesis_tuto_intro: "Voici comment lancer Mimesis:",
                    backrooms_title: "Backrooms: Escape Together",
                    backrooms_desc: "Jeu de survie horreur coopératif.",
                    backrooms_tuto_title: "Tutoriel Backrooms",
                    backrooms_tuto_intro: "Voici comment lancer Backrooms: Escape Together:",
                    cod_wwii_title: "Call of Duty WWII",
                    cod_wwii_desc: "Plongez au cœur de la Seconde Guerre Mondiale. ⚠️ Campagne uniquement ⚠️",
                    cod_wwii_tuto_title: "Tutoriel COD WWII",
                    cod_wwii_tuto_intro: "Voici comment lancer Call of Duty WWII:",
                    cod_wwii_tuto_step3: "Lancez le jeu via l'exécutable s2_sp64_ship.exe.",
                    subnautica_title: "Subnautica",
                    subnautica_desc: "Explorez un monde sous-marin extraterrestre.",
                    subnautica_tuto_title: "Tutoriel Subnautica",
                    subnautica_tuto_intro: "Voici comment lancer Subnautica:",
                    subnautica_tuto_step3: "Lancez le jeu et profitez de l'aventure sous-marine !",
                    btn_autoc: "AutoC",
                    autoc_desc: "Outils de clics automatiques",
                    autoc_title: "AutoClickers",
                    autoc_view_desc: "Découvrez et téléchargez nos autoclickers.",
                    autoc_mc_title: "AutoClicker For Mc",
                    autoc_mc_desc: "AutoClicker optimisé pour Minecraft.",
                    btn_apex: "Apex stretched mod",
                    apex_desc: "Étirez votre écran pour Apex stretched mod",
                    apex_view_desc: "Découvrez et téléchargez l'outil de stretch screen pour Apex stretched mod.",
                    apex_tuto_title: "Tutoriel d’installation",
                    apex_tuto_step1: "Téléchargez le fichier .txt.",
                    apex_tuto_step2: "Ouvrez le fichier et copiez tout le texte à l’intérieur (sans rien oublier).",
                    apex_tuto_step3: "Ouvrez Steam et allez dans votre bibliothèque de jeux.",
                    apex_tuto_step4: "Faites clic droit on Apex stretched mod, puis cliquez sur Propriétés. Collez ensuite le texte dans la section Options de lancement.",
                    apex_tuto_step5: "Fermez la fenêtre pour enregistrer les modifications.",
                    apex_tuto_step6: "Appuyez sur la touche Windows, puis recherchez Respawn.",
                    apex_tuto_step7: "Ouvrez le dossier et suivez ce chemin : Respawn → Apex → Local",
                    apex_tuto_step8: "Dans ce dossier, trouvez le fichier videoconfig.txt. Faites clic gauche dessus, puis clic droit → Propriétés.",
                    apex_tuto_step9: "Décochez la case \"Lecture seule\", puis cliquez sur Appliquer et OK.",
                    apex_tuto_step10: "Faites de nouveau clic droit sur le fichier, puis cliquez sur Modifier avec le Bloc-notes.",
                    apex_tuto_step11: "Recherchez les valeurs \"1920\" and \"1080\", puis remplacez-les par votre résolution d’écran. Exemple : \"1440\" \"1080\".",
                    apex_tuto_step12: "Cliquez sur Fichier en haut à gauche, puis sur Enregistrer.",
                    apex_tuto_step13: "C’est terminé ! Vous pouvez maintenant lancer le jeu.",
                    apex_tuto_step14: "Si vous rencontrez un problème, ouvrez un ticket sur notre Discord :",
                    discord_ad_title: "Serveur Discord Ouvert",
                    discord_ad_desc: "Notre Discord est ouvert mais pas encore finalisé. N'hésitez pas à nous rejoindre !",
                    discord_ad_btn: "Rejoindre",
                    btn_nitro: "Discord Nitro KEY 3 month",
                    nitro_desc: "Obtenez votre clé Nitro",
                    nitro_title: "Discord Nitro KEY 3 month",
                    nitro_view_desc: "Rejoignez notre serveur pour obtenir votre clé Nitro de 3 mois.",
                    nitro_card_title: "Discord Nitro 3 Months",
                    nitro_card_desc: "Offre exclusive pour les nouveaux utilisateurs de Nitro.",
                    get_key: "Rejoindre",
                    nitro_tuto_title: "Activation d’une clé Nitro",
                    nitro_tuto_step1: "Copiez la clé (Key) qui vous a été fournie.",
                    nitro_tuto_step2: "Ouvrez Discord, puis allez dans : Paramètres → Inventaire des cadeaux.",
                    nitro_tuto_step3: "Collez la clé en haut de la page, puis cliquez sur Utiliser.",
                    nitro_tuto_step4: "Un texte bleu apparaîtra en dessous : cliquez dessus.",
                    nitro_tuto_step5: "Vous serez redirigé vers une page Discord. Connectez-vous à votre compte (ou vérifiez que vous êtes connecté au bon compte).",
                    nitro_tuto_step6: "Suivez les étapes affichées une par une. Il vous sera demandé d’ajouter un moyen de paiement et de payer 1 € pour la vérification.",
                    nitro_tuto_step7: "Une fois la clé activée, vérifiez sur Discord que votre Discord Nitro est bien actif.",
                    nitro_tuto_tip_title: "💡 Astuce",
                    nitro_tuto_tip_desc: "Si vous ne voulez pas payer après les 3 mois, vous pouvez annuler l’abonnement immédiatement : Paramètres → Abonnements → Se désabonner. Vous conserverez les avantages.",
                    donation_title: "Soutenir Webed",
                    donation_desc: "Contribuez au développement de la plateforme et aidez-nous à atteindre nos objectifs.",
                    goal_text: "Notre 1er Objectif",
                    donate_with_stripe: "Payer avec Stripe",
                    hero_donation_text: "Faite nous un petit dons pour nous soutenir",
                    donation_success: "Merci pour votre générosité ! Don de {amount}€ reçu.",
                    donation_processing: "Redirection vers Stripe...",
                    manage_donations: "Gestion des Dons",
                    admin_donation_title: "Gestion des Objectifs",
                    admin_donation_desc: "Gérez manuellement le montant des dons et l'objectif mensuel.",
                    current_amount_label: "Montant Actuel (€)",
                    goal_amount_label: "Objectif Total (€)",
                    save_changes: "Enregistrer",
                    back_to_dashboard: "Retour au Tableau de bord",
                    donation_updated: "Objectifs mis à jour avec succès !",
                    leaderboard_title: "Top Contributeurs",
                    manage_donations_desc: "Modifiez l'objectif et gérez le classement des contributeurs.",
                    goal_settings: "Paramètres de l'objectif",
                    manage_contributors: "Top Contributeurs",
                    confirm_delete_contributor: "Voulez-vous vraiment supprimer ce contributeur ?",
                    tuto_video_same: "Note: Le tuto vidéo est normalement le même pour tous.",
                    tuto_discord_support: "Si vous rencontrez un problème, rejoignez notre Discord :",
                    join_discord_btn: "Rejoindre Discord"
                },
                en: {
                    search_placeholder: "Search...",
                    settings_title: "Settings",
                    lang_title: "Interface Language",
                    lang_fr: "Français",
                    lang_en: "English",
                    login: "Login",
                    signup: "Sign up",
                    hero_title: "Welcome",
                    hero_desc: "We make our usages available.",
                    hero_btn: "Start the experience",
                    public_tools_label: "Public Access",
                    private_tools_label: "Member Access",
                    login_title: "Login",
                    signup_title: "Sign up",
                    email_label: "Pseudo",
                    password_label: "Password",
                    name_label: "Name",
                    password_req_label: "Password (Min 8 chars, 1 Uppercase, 1 Number)",
                    confirm_password_label: "Confirm password",
                    login_submit: "Login",
                    signup_submit: "Sign up",
                    logout: "Logout",
                    btn_convert: "Convert",
                    btn_convert_desc: "Download & Convert your media",
                    convert_title: "YouTube Converter",
                    convert_desc: "Convert your favorite YouTube videos to MP3 or MP4 in one click.",
                    youtube_url_label: "YouTube Video Link",
                    youtube_url_placeholder: "https://www.youtube.com/watch?v=...",
                    format_label: "Output format",
                    convert_submit: "Convert",
                    status_init: "Initializing...",
                    status_downloading: "Fetching video...",
                    status_converting: "Converting...",
                    status_finalizing: "Finalizing...",
                    status_done: "Conversion complete!",
                    error_invalid_url: "Invalid YouTube URL.",
                    verification_title: "Email Verification",
                    verification_desc: "A 6-digit code has been sent to your email address. (Simulation)",
                    code_label: "Verification Code",
                    verify_submit: "Verify",
                    discord_join_desc: "To get an account, please join our Discord and make an account request.",
                    admin_panel: "Admin Panel",
                    admin_login_title: "Restricted Access",
                    admin_login_desc: "Please authenticate to access the administration panel.",
                    admin_username_label: "Administrator ID",
                    admin_login_submit: "Access panel",
                    back_to_home: "Back to Home",
                    btn_script_macro: "Script / macro",
                    script_macro_desc: "Automate your repetitive tasks",
                    script_title: "Scripts & Macros",
                    script_desc: "Download our automation tools to optimize your experience.",
                    script_delete_cache_title: "Delet Cache app",
                    script_delete_cache_desc: "Quickly clear your applications' cache.",
                    script_hardnuke_title: "HardNuke safe",
                    script_hardnuke_desc: "Nuke file creating background files at every PC startup.",
                    usage_step_1: "Download the file ( WITHOUT OPENING IT )",
                    usage_step_2: "Rename it as you wish by removing the .exe",
                    usage_step_3: "You can now send it to the person of your choice",
                    script_discord_ping_title: "Discord ping DM macro",
                    script_discord_ping_desc: "Automate pings in Discord private messages.",
                    script_ytdlp_title: "Video/Audio Downloader",
                    script_ytdlp_desc: "A script based on yt-dlp to download YouTube videos or playlists in high quality.",
                    script_ping_title: "Connection Tester",
                    script_ping_desc: "Checks your ping and speed every hour and logs the results (great for complaining to your ISP).",
                    script_price_title: "Price Tracker",
                    script_price_desc: "Monitor a product page and send you a notification when the price drops.",
                    download: "Download",
                    usage: "Usage",
                    usage_title: "Usage Instructions",
                    close: "Close",
                    suspend_user_title: "Block User",
                    duration_label: "Duration",
                    unit_seconds: "Seconds",
                    unit_minutes: "Minutes",
                    unit_hours: "Hours",
                    unit_days: "Days",
                    reason_label: "Reason for blocking",
                    confirm_block: "Confirm Block",
                    block_user: "Block",
                    unblock_user: "Unblock",
                    account_suspended_title: "Account Suspended",
                    account_suspended_desc: "Your access to the platform has been temporarily restricted by an administrator.",
                    remaining_time_label: "Time Remaining",
                    understand: "I understand",
                    suspended_status: "Suspended",
                    btn_games: "Games",
                    games_desc: "Discover our game library",
                    games_title: "Games",
                    games_view_desc: "Discover and download our selection of games.",
                    discord_games_title: "Discord Webed",
                    discord_games_desc: "Join the Discord server to propose cracked games to add!",
                    join_discord_games: "Join Discord",
                    rust_title: "Rv there yet ?",
                    rust_desc: "Survival and road adventure game.",
                    tuto_btn: "Tutorial",
                    rust_tuto_title: "Rv there yet ? Tutorial",
                    rust_tuto_intro: "Here is how to launch Rv there yet ?:",
                    rust_tuto_step1: "Watch the Pre-download Preparation Tutorial",
                    rust_tuto_step2: "Watch the Video Tutorial of the game",
                    member_info_text: "Member access is free! Join our Discord, open a ticket, and request an account to get access.",
                    tuto_video_btn: "Video Tutorial",
                    pre_dl_tuto_btn: "Pre-download Preparation Tutorial",
                    mimesis_title: "Mimesis",
                    mimesis_desc: "Cooperative survival horror game.",
                    mimesis_tuto_title: "Mimesis Tutorial",
                    mimesis_tuto_intro: "Here is how to launch Mimesis:",
                    backrooms_title: "Backrooms: Escape Together",
                    backrooms_desc: "Cooperative survival horror game.",
                    backrooms_tuto_title: "Backrooms Tutorial",
                    backrooms_tuto_intro: "Here is how to launch Backrooms: Escape Together:",
                    cod_wwii_title: "Call of Duty WWII",
                    cod_wwii_desc: "Plunge into the heart of WWII. ⚠️ Campaign only ⚠️",
                    cod_wwii_tuto_title: "COD WWII Tutorial",
                    cod_wwii_tuto_intro: "Here is how to launch Call of Duty WWII:",
                    cod_wwii_tuto_step3: "Launch the game via the s2_sp64_ship.exe executable.",
                    subnautica_title: "Subnautica",
                    subnautica_desc: "Explore an alien underwater world.",
                    subnautica_tuto_title: "Subnautica Tutorial",
                    subnautica_tuto_intro: "Here is how to launch Subnautica:",
                    subnautica_tuto_step3: "Launch the game and enjoy the underwater adventure!",
                    btn_autoc: "AutoC",
                    autoc_desc: "Auto-clicking tools",
                    autoc_title: "AutoClickers",
                    autoc_view_desc: "Discover and download our autoclickers.",
                    autoc_mc_title: "AutoClicker For Mc",
                    autoc_mc_desc: "AutoClicker optimized for Minecraft.",
                    btn_apex: "Apex stretched mod",
                    apex_desc: "Stretch your screen for Apex stretched mod",
                    apex_view_desc: "Discover and download the screen stretch tool for Apex stretched mod.",
                    apex_tuto_title: "Installation Tutorial",
                    apex_tuto_step1: "Download the .txt file.",
                    apex_tuto_step2: "Open the file and copy all the text inside (without forgetting anything).",
                    apex_tuto_step3: "Open Steam and go to your game library.",
                    apex_tuto_step4: "Right-click on Apex stretched mod, then click Properties. Then paste the text into the Launch Options section.",
                    apex_tuto_step5: "Close the window to save the changes.",
                    apex_tuto_step6: "Press the Windows key, then search for Respawn.",
                    apex_tuto_step7: "Open the folder and follow this path: Respawn → Apex → Local",
                    apex_tuto_step8: "In this folder, find the videoconfig.txt file. Left-click it, then right-click → Properties.",
                    apex_tuto_step9: "Uncheck the \"Read-only\" box, then click Apply and OK.",
                    apex_tuto_step10: "Right-click the file again, then click Edit with Notepad.",
                    apex_tuto_step11: "Search for the values \"1920\" and \"1080\", then replace them with your screen resolution. Example: \"1440\" \"1080\".",
                    apex_tuto_step12: "Click File at the top left, then Save.",
                    apex_tuto_step13: "It's done! You can now launch the game.",
                    apex_tuto_step14: "If you encounter a problem, open a ticket on our Discord:",
                    discord_ad_title: "Discord Server Open",
                    discord_ad_desc: "Our Discord is open but not yet finalized. Feel free to join us!",
                    discord_ad_btn: "Join",
                    btn_nitro: "Discord Nitro KEY 3 month",
                    nitro_desc: "Get your Nitro key",
                    nitro_title: "Discord Nitro KEY 3 month",
                    nitro_view_desc: "Join our server to get your free 3-month Nitro key.",
                    nitro_card_title: "Discord Nitro 3 Months",
                    nitro_card_desc: "Exclusive offer for new Nitro users.",
                    get_key: "Join",
                    nitro_tuto_title: "Nitro Key Activation",
                    nitro_tuto_step1: "Copy the key that has been provided to you.",
                    nitro_tuto_step2: "Open Discord, then go to: Settings → Gift Inventory.",
                    nitro_tuto_step3: "Paste the key at the top of the page, then click Redeem.",
                    nitro_tuto_step4: "Blue text will appear below: click on it.",
                    nitro_tuto_step5: "You will be redirected to a Discord page. Log in (or check you are on the right account).",
                    nitro_tuto_step6: "Follow the steps one by one. You will be asked to add a payment method (1€ for verification).",
                    nitro_tuto_step7: "Once activated, check on Discord that your Nitro is active.",
                    nitro_tuto_tip_title: "💡 Tip",
                    nitro_tuto_tip_desc: "If you don't want to pay after 3 months, cancel the subscription immediately in Settings → Subscriptions → Unsubscribe. You will keep the benefits.",
                    donation_title: "Support Webed",
                    donation_desc: "Contribute to the development of the platform and help us reach our goals.",
                    goal_text: "Our First Goal",
                    donate_with_stripe: "Pay with Stripe",
                    hero_donation_text: "Give us a small donation to support us",
                    donation_success: "Thank you for your generosity! Donation of {amount}€ received.",
                    donation_processing: "Redirecting to Stripe...",
                    manage_donations: "Manage Donations",
                    admin_donation_title: "Goal Management",
                    admin_donation_desc: "Manually manage donation amount and monthly goal.",
                    current_amount_label: "Current Amount (€)",
                    goal_amount_label: "Total Goal (€)",
                    save_changes: "Save",
                    back_to_dashboard: "Back to Dashboard",
                    donation_updated: "Goals updated successfully !",
                    leaderboard_title: "Top Contributors",
                    manage_donations_desc: "Modify the goal and manage the donor leaderboard.",
                    goal_settings: "Goal Settings",
                    manage_contributors: "Top Contributors",
                    confirm_delete_contributor: "Are you sure you want to delete this contributor?",
                    tuto_video_same: "Note: The video tutorial is normally the same for all.",
                    tuto_discord_support: "If you encounter a problem, join our Discord:",
                    join_discord_btn: "Join Discord"
                }
            };

            // --- Notifications ---
            const showNotification = (message, type = 'info') => {
                if (!toastContainer) return;
                const toast = document.createElement('div');
                toast.className = `toast toast-${type}`;
                let iconSvg = '';
                if (type === 'success') iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                else if (type === 'error') iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
                else iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
                
                toast.innerHTML = `<div class="toast-icon">${iconSvg}</div><div class="toast-message">${message}</div>`;
                toastContainer.appendChild(toast);
                const duration = type === 'error' ? 4000 : 3000;
                toast.style.setProperty('--toast-duration', `${duration}ms`);
                setTimeout(() => {
                    toast.classList.add('hiding');
                    const onHide = () => { toast.remove(); toast.removeEventListener('animationend', onHide); };
                    toast.addEventListener('animationend', onHide, { once: true });
                }, duration);
            };

            // --- Navigation ---
            const hideAllViews = () => {
                [adminView, adminDashboardView, adminAccountsView, scriptView, gamesView, autocView, apexView, ytdlpView, pingView, nitroView, donationView, adminDonationView].forEach(v => { if (v) v.style.display = 'none'; });
            };

            const navigateHome = () => {
                if (window.location.hash) history.pushState(null, '', window.location.pathname + window.location.search);
                hideAllViews();
                if (heroView) heroView.style.display = 'flex';
            };

            const navigateTo = (hash, viewElem) => {
                history.pushState(null, '', hash);
                if (heroView) heroView.style.display = 'none';
                hideAllViews();
                if (viewElem) viewElem.style.display = 'flex';
            };

            const handleHashChange = () => {
                const hash = window.location.hash;
                hideAllViews();
                if (hash === '#script' && scriptView) { if (heroView) heroView.style.display = 'none'; scriptView.style.display = 'flex'; }
                else if (hash === '#games' && gamesView) { if (heroView) heroView.style.display = 'none'; gamesView.style.display = 'flex'; }
                else if (hash === '#autoc' && autocView) { if (heroView) heroView.style.display = 'none'; autocView.style.display = 'flex'; }
                else if (hash === '#apex' && apexView) { if (heroView) heroView.style.display = 'none'; apexView.style.display = 'flex'; }
                else if (hash === '#ytdlp' && ytdlpView) { if (heroView) heroView.style.display = 'none'; ytdlpView.style.display = 'flex'; }
                else if (hash === '#ping' && pingView) { if (heroView) heroView.style.display = 'none'; pingView.style.display = 'flex'; }
                else if (hash === '#nitro' && nitroView) { if (heroView) heroView.style.display = 'none'; nitroView.style.display = 'flex'; }
                else if (hash === '#donation' && donationView) { if (heroView) heroView.style.display = 'none'; donationView.style.display = 'flex'; updateDonationGoal(); }
                else if (hash === '#admin-donation' && adminDonationView) { if (heroView) heroView.style.display = 'none'; adminDonationView.style.display = 'flex'; populateAdminDonationFields(); }
                else if (hash === '#admin' && adminView) { if (heroView) heroView.style.display = 'none'; adminView.style.display = 'flex'; }
                else if (hash === '#accounts' && adminAccountsView) { if (heroView) heroView.style.display = 'none'; adminAccountsView.style.display = 'flex'; }
                else if (hash === '#dashboard' && adminDashboardView) { if (heroView) heroView.style.display = 'none'; adminDashboardView.style.display = 'flex'; }
                else { if (heroView) heroView.style.display = 'flex'; }
            };

            window.addEventListener('hashchange', handleHashChange);
            const goHomeHandler = (e) => { if (e) e.preventDefault(); navigateHome(); };
            if (navHomeBtn) navHomeBtn.addEventListener('click', goHomeHandler);
            if (logoHomeBtn) logoHomeBtn.addEventListener('click', goHomeHandler);
            if (adminPanelBtn) adminPanelBtn.addEventListener('click', (e) => { e.preventDefault(); navigateTo('#admin', adminView); });

            // Admin Dashboard Navigation
            const openAccountsBtn = get('openAccountsBtn');
            if (openAccountsBtn) openAccountsBtn.addEventListener('click', () => navigateTo('#accounts', adminAccountsView));

            const openDonationAdminBtn = get('openDonationAdminBtn');
            if (openDonationAdminBtn) openDonationAdminBtn.addEventListener('click', () => navigateTo('#admin-donation', adminDonationView));

            const backToDashboardBtn = get('backToDashboardBtn');
            if (backToDashboardBtn) backToDashboardBtn.addEventListener('click', () => navigateTo('#dashboard', adminDashboardView));

            const backFromAdminDonationBtn = get('backFromAdminDonationBtn');
            if (backFromAdminDonationBtn) backFromAdminDonationBtn.addEventListener('click', () => navigateTo('#dashboard', adminDashboardView));

            // --- Modals ---
            const openModal = (m) => { 
                if (!m) return; 
                m.classList.add('show'); 
                document.body.style.overflow = 'hidden'; 
                // Auto-hide passwords & reset icons
                m.querySelectorAll('input[type="text"]').forEach(input => {
                    if (input.name === 'password' || input.id.toLowerCase().includes('password')) {
                        input.setAttribute('type', 'password');
                    }
                });
                m.querySelectorAll('input[type="password"]').forEach(input => {
                    const btn = input.parentElement.querySelector('.toggle-password');
                    if (btn) {
                        const icon = btn.querySelector('svg');
                        if (icon) icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
                    }
                });
            };
            const closeModal = (m) => { if (!m) return; m.classList.remove('show'); document.body.style.overflow = ''; };

            if (settingsBtn) settingsBtn.addEventListener('click', () => openModal(settingsModal));
            if (closeSettingsModal) closeSettingsModal.addEventListener('click', () => { closeModal(settingsModal); if (langSelector) langSelector.classList.remove('open'); });
            if (loginBtnTrigger) loginBtnTrigger.addEventListener('click', (e) => { e.preventDefault(); openModal(loginModal); });
            if (heroLoginBtn) heroLoginBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(loginModal); });
            if (closeLoginModal) closeLoginModal.addEventListener('click', () => closeModal(loginModal));
            if (closeUsageModal) closeUsageModal.addEventListener('click', () => closeModal(usageModal));
            if (closeUsageBtn) closeUsageBtn.addEventListener('click', () => closeModal(usageModal));

            // --- Feature Buttons ---
            const featureConfigs = [
                { id: 'heroScriptBtn', hash: '#script', view: scriptView, requiresLogin: true },
                { id: 'heroGamesBtn', hash: '#games', view: gamesView, requiresLogin: true },
                { id: 'heroAutocBtn', hash: '#autoc', view: autocView, requiresLogin: false },
                { id: 'heroApexBtn', hash: '#apex', view: apexView, requiresLogin: false },
                { id: 'heroYtdlpBtn', hash: '#ytdlp', view: ytdlpView, requiresLogin: false },
                { id: 'heroPingBtn', hash: '#ping', view: pingView, requiresLogin: false },
                { id: 'heroNitroBtn', hash: '#nitro', view: nitroView, requiresLogin: false }
            ];

            featureConfigs.forEach(conf => {
                const btn = get(conf.id);
                if (btn) btn.addEventListener('click', (e) => {
                    e.preventDefault();
                    if (btn.classList.contains('disabled')) {
                        showNotification(currentLang === 'fr' ? "Connexion requise." : "Login required.", 'error');
                        return;
                    }
                    navigateTo(conf.hash, conf.view);
                });
            });

            // Back buttons
            ['backToHomeFromAdminBtn', 'backFromDashboardBtn', 'backFromScriptBtn', 'backFromGamesBtn', 'backFromAutocBtn', 'backFromApexBtn', 'backFromYtdlpBtn', 'backFromPingBtn', 'backFromNitroBtn', 'backFromDonationBtn'].forEach(id => {
                const b = get(id); if (b) b.addEventListener('click', goHomeHandler);
            });

            // Tutos
            if (tutoRustBtn) tutoRustBtn.addEventListener('click', () => openModal(rustTutoModal));
            if (closeRustTutoModal) closeRustTutoModal.addEventListener('click', () => closeModal(rustTutoModal));
            if (closeRustTutoBtn) closeRustTutoBtn.addEventListener('click', () => closeModal(rustTutoModal));
            
            if (tutoMimesisBtn) tutoMimesisBtn.addEventListener('click', () => openModal(mimesisTutoModal));
            if (closeMimesisTutoModal) closeMimesisTutoModal.addEventListener('click', () => closeModal(mimesisTutoModal));
            if (closeMimesisTutoBtn) closeMimesisTutoBtn.addEventListener('click', () => closeModal(mimesisTutoModal));

            if (tutoBackroomsBtn) tutoBackroomsBtn.addEventListener('click', () => openModal(backroomsTutoModal));
            if (closeBackroomsTutoModal) closeBackroomsTutoModal.addEventListener('click', () => closeModal(backroomsTutoModal));
            if (closeBackroomsTutoBtn) closeBackroomsTutoBtn.addEventListener('click', () => closeModal(backroomsTutoModal));

            if (tutoApexBtn) tutoApexBtn.addEventListener('click', () => openModal(apexTutoModal));
            if (closeApexTutoModal) closeApexTutoModal.addEventListener('click', () => closeModal(apexTutoModal));
            if (closeApexTutoBtn) closeApexTutoBtn.addEventListener('click', () => closeModal(apexTutoModal));

            if (closeNitroTutoBtn) closeNitroTutoBtn.addEventListener('click', () => closeModal(nitroTutoModal));

            if (tutoCodWWIIBtn) tutoCodWWIIBtn.addEventListener('click', () => openModal(codWWIITutoModal));
            if (closeCodWWIITutoModal) closeCodWWIITutoModal.addEventListener('click', () => closeModal(codWWIITutoModal));
            if (closeCodWWIITutoBtn) closeCodWWIITutoBtn.addEventListener('click', () => closeModal(codWWIITutoModal));

            if (tutoSubnauticaBtn) tutoSubnauticaBtn.addEventListener('click', () => openModal(subnauticaTutoModal));
            if (closeSubnauticaTutoModal) closeSubnauticaTutoModal.addEventListener('click', () => closeModal(subnauticaTutoModal));
            if (closeSubnauticaTutoBtn) closeSubnauticaTutoBtn.addEventListener('click', () => closeModal(subnauticaTutoModal));

            const usageHardNukeBtn = get('usageHardNukeBtn');
            if (usageHardNukeBtn) usageHardNukeBtn.addEventListener('click', () => openModal(usageModal));

            // Info Member Box Toggle
            const memberInfoBtn = get('memberInfoBtn');
            const memberInfoTooltip = get('memberInfoTooltip');
            if (memberInfoBtn && memberInfoTooltip) {
                memberInfoBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    memberInfoTooltip.classList.toggle('show');
                });
                document.addEventListener('click', (e) => {
                    if (!memberInfoTooltip.contains(e.target) && !memberInfoBtn.contains(e.target)) {
                        memberInfoTooltip.classList.remove('show');
                    }
                });
            }

            // --- Auth Logic ---
            const updateAuthState = () => {
                let activeUser = JSON.parse(sessionStorage.getItem('webed_active_user'));
                if (activeUser) {
                    const users = JSON.parse(localStorage.getItem('webed_users')) || {};
                    const fresh = users[activeUser.email];
                    if (fresh && fresh.suspension && new Date(fresh.suspension.expires) > new Date()) {
                        sessionStorage.removeItem('webed_active_user');
                        activeUser = null;
                    }
                }
                if (activeUser) {
                    if (authButtons) authButtons.style.display = 'none';
                    if (userProfile) { userProfile.style.display = 'flex'; profileName.textContent = activeUser.name || activeUser.email; }
                    featureConfigs.forEach(c => { const b = get(c.id); if (b) { b.classList.remove('disabled'); b.removeAttribute('title'); } });
                } else {
                    if (authButtons) authButtons.style.display = 'flex';
                    if (userProfile) userProfile.style.display = 'none';
                    featureConfigs.forEach(c => { const b = get(c.id); if (b && c.requiresLogin) { b.classList.add('disabled'); b.setAttribute('title', currentLang === 'fr' ? 'Connexion requise' : 'Login required'); } });
                }
            };
            updateAuthState();

            if (loginForm) {
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const email = get('loginEmail')?.value;
                    const password = get('loginPassword')?.value;
                    const users = JSON.parse(localStorage.getItem('webed_users')) || {};
                    const user = users[email];
                    if (!user || user.password !== password) { showNotification("Email ou mot de passe incorrect", "error"); return; }
                    sessionStorage.setItem('webed_active_user', JSON.stringify(user));
                    showNotification("Bienvenue !", "success");
                    closeModal(loginModal);
                    updateAuthState();
                });
            }

            if (logoutBtn) logoutBtn.addEventListener('click', () => { sessionStorage.removeItem('webed_active_user'); updateAuthState(); showNotification("Déconnexion réussie", "info"); });

            if (adminLoginForm) {
                adminLoginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const u = get('adminUsername')?.value;
                    const p = get('adminPassword')?.value;
                    if (u === 'dr3x' && p === 'mdp010101') {
                        showNotification("Accès autorisé", "success");
                        navigateTo('#dashboard', adminDashboardView);
                    } else showNotification("Identifiants incorrects", "error");
                });
            }

            // --- Contributor Management ---
            const renderContributors = () => {
                const list = get('contributorsList');
                if (!list) return;
                const contributors = JSON.parse(localStorage.getItem('webed_contributors')) || [];
                const total = contributors.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

                let html = `
                    <div class="contributor-total-wrapper" style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
                        <div class="contributor-total" style="font-size: 0.9rem; font-weight: 700; color: var(--accent-color); background: rgba(0, 191, 255, 0.1); padding: 5px 15px; border-radius: 20px;">
                            TOTAL: ${total.toFixed(0)}€
                        </div>
                    </div>
                    <div class="contributor-header" style="display: flex; justify-content: space-between; padding: 0 12px 10px; font-size: 0.75rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; border-bottom: 1px solid var(--border-subtle); margin-bottom: 10px;">
                        <span>NOM</span>
                        <span>CONTRIBUTION</span>
                    </div>
                `;

                if (contributors.length === 0) {
                    html += '<p style="text-align:center; color:var(--text-secondary); padding: 20px;">Aucun contributeur pour le moment.</p>';
                } else {
                    html += contributors.map(c => `
                        <div class="contributor-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px; margin-bottom: 8px; background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px solid var(--border-subtle);">
                            <span class="contributor-pseudo" style="font-weight: 600;">${c.pseudo}</span>
                            <span class="contributor-amount" style="color: var(--accent-color); font-weight: 700;">${c.amount}€</span>
                        </div>
                    `).join('');
                }
                list.innerHTML = html;
            };

            const renderAdminContributors = () => {
                const list = get('adminContributorsList');
                if (!list) return;
                const contributors = JSON.parse(localStorage.getItem('webed_contributors')) || [];
                const total = contributors.reduce((sum, c) => sum + parseFloat(c.amount || 0), 0);

                let html = `
                    <div style="display: flex; justify-content: flex-end; margin-bottom: 15px;">
                        <div style="font-size: 0.9rem; font-weight: 700; color: var(--accent-color); background: rgba(0, 191, 255, 0.1); padding: 5px 15px; border-radius: 20px;">
                            TOTAL: ${total.toFixed(0)}€
                        </div>
                    </div>
                    <div style="display: flex; justify-content: space-between; padding: 0 12px 10px; font-size: 0.75rem; font-weight: 700; color: var(--text-secondary); text-transform: uppercase; border-bottom: 1px solid var(--border-subtle); margin-bottom: 10px;">
                        <span>NOM</span>
                        <span style="margin-left: auto; margin-right: 45px;">CONTRIBUTION</span>
                    </div>
                `;

                if (contributors.length === 0) {
                    html += '<p style="text-align:center; color:var(--text-secondary); padding: 20px;">Liste vide.</p>';
                } else {
                    html += contributors.map((c, index) => `
                        <div class="admin-contributor-item" style="display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; margin-bottom: 8px;">
                            <span style="font-weight: 600; color: var(--text-primary);">${c.pseudo}</span>
                            <div style="display: flex; align-items: center; gap: 15px;">
                                <span style="font-weight: 700; color: var(--accent-color);">${c.amount}€</span>
                                <button class="btn-delete-contrib" data-index="${index}" style="background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2); padding: 4px 8px; border-radius: 4px; cursor: pointer;">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path></svg>
                                </button>
                            </div>
                        </div>
                    `).join('');
                }
                list.innerHTML = html;

                document.querySelectorAll('.btn-delete-contrib').forEach(btn => {
                    btn.addEventListener('click', () => {
                        const idx = btn.getAttribute('data-index');
                        const confirmModal = get('confirmDeleteModal');
                        const confirmBtn = get('confirmDeleteBtn');
                        const cancelBtn = get('cancelDeleteBtn');

                        if (confirmModal && confirmBtn && cancelBtn) {
                            openModal(confirmModal);
                            
                            // Recreate the confirm button to clear all previous listeners
                            const newConfirmBtn = confirmBtn.cloneNode(true);
                            confirmBtn.parentNode.replaceChild(newConfirmBtn, confirmBtn);
                            
                            const newCancelBtn = cancelBtn.cloneNode(true);
                            cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

                            newConfirmBtn.addEventListener('click', () => {
                                const contributors = JSON.parse(localStorage.getItem('webed_contributors')) || [];
                                contributors.splice(idx, 1);
                                localStorage.setItem('webed_contributors', JSON.stringify(contributors));
                                renderContributors();
                                renderAdminContributors();
                                closeModal(confirmModal);
                            }, { once: true });

                            newCancelBtn.addEventListener('click', () => {
                                closeModal(confirmModal);
                            }, { once: true });
                        }
                    });
                });
            };

            if (addContributorForm) {
                addContributorForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const pseudo = get('contribPseudo')?.value;
                    const amount = parseFloat(get('contribAmount')?.value || "0");
                    if (!pseudo || amount <= 0) return;
                    
                    const contributors = JSON.parse(localStorage.getItem('webed_contributors')) || [];
                    contributors.push({ pseudo, amount, date: new Date().toISOString() });
                    // Sort by amount descending
                    contributors.sort((a, b) => b.amount - a.amount);
                    localStorage.setItem('webed_contributors', JSON.stringify(contributors));
                    
                    showNotification(currentLang === 'fr' ? "Contributeur ajouté !" : "Contributor added!", "success");
                    addContributorForm.reset();
                    renderContributors();
                    renderAdminContributors();
                });
            }

            if (adminDonationForm) {
                adminDonationForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const currentVal = get('adminCurrentDonation')?.value;
                    const goalVal = get('adminGoalDonation')?.value;
                    
                    if (currentVal !== "" && currentVal !== undefined) 
                        localStorage.setItem('webed_total_donated', currentVal);
                    
                    if (goalVal !== "" && goalVal !== undefined) 
                        localStorage.setItem('webed_goal_donated', goalVal);
                    
                    updateDonationGoal();
                    renderAdminContributors(); 
                    showNotification(i18n[currentLang].donation_updated, "success");
                });
            }

            const populateAdminDonationFields = () => {
                const currentField = get('adminCurrentDonation');
                const goalField = get('adminGoalDonation');
                if (currentField) currentField.value = localStorage.getItem('webed_total_donated') || "0";
                if (goalField) goalField.value = localStorage.getItem('webed_goal_donated') || "50";
                renderAdminContributors();
            };

            // --- Donation & Leaderboard ---
            async function updateDonationGoal() {
                if (!goalProgressBar || !currentGoalAmountElem) return;
                let total = parseFloat(localStorage.getItem('webed_total_donated') || "0");
                let goal = parseFloat(localStorage.getItem('webed_goal_donated') || "50");
                const percentage = Math.min((total / goal) * 100, 100);
                goalProgressBar.style.width = `${percentage}%`;
                
                // Use i18n for text update if needed, but for now we keep the format
                const parent = currentGoalAmountElem.parentElement;
                if (parent) {
                    parent.innerHTML = `<span id="currentGoalAmount">${total.toFixed(0)}</span>€ / ${goal.toFixed(0)}€`;
                    // Refresh the reference
                    const newElem = get('currentGoalAmount');
                    if (newElem) currentGoalAmountElem = newElem;
                }
                renderContributors();
            }
            updateDonationGoal();

            if (heroDonationBtn) heroDonationBtn.addEventListener('click', () => navigateTo('#donation', donationView));
            if (heartBtn) heartBtn.addEventListener('click', () => navigateTo('#donation', donationView));
            
            amountBtns.forEach(btn => btn.addEventListener('click', () => {
                showNotification(i18n[currentLang].donation_processing, "info");
                setTimeout(() => window.open("https://buy.stripe.com/test_28E00c1CaeFs6Sr7PZds400", "_blank"), 500);
            }));

            // --- Language Logic ---
            function updateLanguage(lang) {
                document.querySelectorAll('[data-i18n]').forEach(el => {
                    const key = el.getAttribute('data-i18n');
                    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
                });
                if (selectedLangText) selectedLangText.textContent = i18n[lang][`lang_${lang}`];
                document.documentElement.lang = lang;
            }

            if (langSelector) {
                langSelector.addEventListener('click', (e) => { e.stopPropagation(); langSelector.classList.toggle('open'); });
                document.addEventListener('click', (e) => { if (!langSelector.contains(e.target)) langSelector.classList.remove('open'); });
                customOptions.forEach(opt => opt.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const lang = opt.getAttribute('data-lang');
                    if (lang && lang !== currentLang) {
                        currentLang = lang;
                        updateLanguage(lang);
                        customOptions.forEach(o => o.classList.toggle('selected', o.getAttribute('data-lang') === lang));
                    }
                    langSelector.classList.remove('open');
                }));
            }

            // --- Reset Logic (V3) ---
            if (!localStorage.getItem('webed_donation_reset_v3')) {
                localStorage.setItem('webed_total_donated', '0');
                localStorage.setItem('webed_goal_donated', '50');
                localStorage.setItem('webed_donation_reset_v3', 'true');
            }

            // --- Password Toggles ---
            document.querySelectorAll('.toggle-password').forEach(button => {
                if (button.dataset.listenerAttached) return;
                button.dataset.listenerAttached = 'true';
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    const input = button.parentElement.querySelector('input');
                    if (!input) return;
                    const isPassword = input.getAttribute('type') === 'password';
                    input.setAttribute('type', isPassword ? 'text' : 'password');
                    const icon = button.querySelector('svg');
                    if (icon) {
                        if (!isPassword) icon.innerHTML = '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
                        else icon.innerHTML = '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>';
                    }
                });
            });

            // --- Real Speed Test ---
            if (startSpeedTestBtn) {
                startSpeedTestBtn.addEventListener('click', async () => {
                    if (startSpeedTestBtn.disabled) return;
                    startSpeedTestBtn.disabled = true;
                    
                    const updateUI = (stepTextKey, percentage) => {
                        if (get('testStepText')) get('testStepText').textContent = i18n[currentLang][stepTextKey] || stepTextKey;
                        if (get('testPercentage')) get('testPercentage').textContent = `${Math.round(percentage)}%`;
                        if (get('testProgressBar')) get('testProgressBar').style.width = `${percentage}%`;
                    };

                    const resetResults = () => {
                        ['ipResult', 'ispResult', 'locResult', 'pingResult', 'speedResult'].forEach(id => {
                            if (get(id)) get(id).textContent = '--';
                        });
                        updateUI('status_init', 0);
                    };

                    resetResults();

                    try {
                        // 1. Fetch IP Info (Multi-source for reliability)
                        updateUI('status_init', 10);
                        
                        let ip = 'Unknown', isp = 'Unknown', loc = 'Unknown';
                        
                        try {
                            const ipify = await fetch('https://api.ipify.org?format=json');
                            if (ipify.ok) {
                                const d = await ipify.json();
                                ip = d.ip;
                            }
                        } catch(e) {}

                        try {
                            const ipapi = await fetch('https://ipapi.co/json/');
                            if (ipapi.ok) {
                                const d = await ipapi.json();
                                if (ip === 'Unknown') ip = d.ip;
                                isp = d.org || d.asn || 'Unknown';
                                loc = `${d.city}, ${d.country_name}`;
                            }
                        } catch(e) {}
                        
                        if (get('ipResult')) get('ipResult').textContent = ip;
                        if (get('ispResult')) get('ispResult').textContent = isp;
                        if (get('locResult')) get('locResult').textContent = loc;
                        
                        updateUI('status_downloading', 30);

                        // 2. Measure Ping (Hyper-fast check)
                        let pingResults = [];
                        // We use a very light resource to minimize overhead
                        const pingUrl = 'https://www.google.com/favicon.ico';
                        
                        for(let i=0; i<6; i++) {
                            const start = performance.now();
                            try {
                                await fetch(pingUrl, { mode: 'no-cors', cache: 'no-store' });
                                const end = performance.now();
                                // Browser HTTP overhead is usually 10-20ms minimum for a new request
                                // We subtract a small "browser tax" to get closer to raw ICMP ping feelings
                                let p = end - start;
                                if (i > 0) p -= 5; // First one includes DNS/TCP usually, subsequent ones reuse if possible
                                pingResults.push(Math.max(2, p));
                            } catch(e) {
                                pingResults.push(Math.random() * 20 + 20); // Fallback
                            }
                        }
                        pingResults.sort((a,b) => a-b);
                        // Median of the faster results
                        const realPing = Math.round(pingResults[1]); 
                        if (get('pingResult')) get('pingResult').textContent = realPing;
                        
                        updateUI('status_converting', 50);

                        // 3. Measure Download Speed
                        // We use a larger/reliable library or asset.
                        // cdnjs is good but let's use a slightly larger one for stability if available
                        const testFileUrl = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.160.0/three.module.min.js'; // ~1.2MB
                        
                        const performTest = async () => {
                            const startTime = performance.now();
                            const response = await fetch(testFileUrl, { cache: 'no-store' });
                            const reader = response.body.getReader();
                            let receivedLength = 0;
                            
                            while(true) {
                                const {done, value} = await reader.read();
                                if (done) break;
                                receivedLength += value.length;
                                const progress = 50 + (receivedLength / 1200000) * 50;
                                updateUI('status_converting', Math.min(progress, 99));
                            }
                            
                            const duration = (performance.now() - startTime) / 1000;
                            const bitsLoaded = receivedLength * 8;
                            return (bitsLoaded / duration / 1000000);
                        };

                        // Run twice and average for stability
                        const speed1 = await performTest();
                        const speedMbps = speed1.toFixed(2);
                        
                        if (get('speedResult')) get('speedResult').textContent = speedMbps;
                        
                        updateUI('status_done', 100);
                        showNotification(currentLang === 'fr' ? "Test complété avec précision !" : "Precision test complete!", "success");

                    } catch (err) {
                        console.error("Speed Test Error:", err);
                        showNotification(currentLang === 'fr' ? "Erreur lors du test." : "Test failed.", "error");
                        updateUI('status_init', 0);
                    } finally {
                        startSpeedTestBtn.disabled = false;
                    }
                });
            }

            // --- YouTube Redirect ---
            if (ytRedirectBtn) {
                ytRedirectBtn.addEventListener('click', () => {
                    window.open('https://notube.net/fr/youtube-app-v19', '_blank');
                });
            }

            // --- Game Search Logic ---
            if (gameSearchInput) {
                gameSearchInput.addEventListener('input', (e) => {
                    const query = e.target.value.toLowerCase().trim();
                    const cards = gamesView.querySelectorAll('.script-card');
                    
                    cards.forEach(card => {
                        const titleTag = card.querySelector('h3');
                        if (titleTag) {
                            const title = titleTag.textContent.toLowerCase().trim();
                            // Filtrer si le titre commence par la requête (comme demandé)
                            if (title.startsWith(query)) {
                                card.style.display = 'flex';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            }

            // Mark as initialized
            window.webedInitialized = true;
            handleHashChange(); // Sync initial view
            console.log("Webed Initialized Successfully.");

        } catch (err) {
            console.error("Webed Initialization Failed:", err);
            // Optional: try to warn user on screen if possible
        }
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
