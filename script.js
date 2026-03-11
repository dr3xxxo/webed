document.addEventListener('DOMContentLoaded', () => {
    // --- Elements DOM ---
    const navHomeBtn = document.getElementById('navHomeBtn');
    const logoHomeBtn = document.getElementById('logoHomeBtn');

    // Modals & Paramètres
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsModal = document.getElementById('closeSettingsModal');
    const adminPanelBtn = document.getElementById('adminPanelBtn');

    // Modals Auth
    const loginBtnTrigger = document.getElementById('loginBtnTrigger');
    const heroLoginBtn = document.getElementById('heroLoginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');

    // Usage Modal
    const usageModal = document.getElementById('usageModal');
    const closeUsageModal = document.getElementById('closeUsageModal');
    const closeUsageBtn = document.getElementById('closeUsageBtn');

    // Rust Tuto Modal
    const rustTutoModal = document.getElementById('rustTutoModal');
    const closeRustTutoModal = document.getElementById('closeRustTutoModal');
    const closeRustTutoBtn = document.getElementById('closeRustTutoBtn');
    const tutoRustBtn = document.getElementById('tutoRustBtn');

    const authButtons = document.getElementById('authButtons');
    const userProfile = document.getElementById('userProfile');
    const profileName = document.getElementById('profileName');
    const logoutBtn = document.getElementById('logoutBtn');

    // Auth State Variables
    let currentAuthAction = null; // 'login' or 'signup'
    let pendingUser = null;

    // Custom Select Langues
    const langSelector = document.getElementById('langSelector');
    const customOptions = document.querySelectorAll('.custom-option');
    const selectedLangText = document.getElementById('selectedLangText');

    // --- Dictionnaire des traductions ---
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
            // Nouveaux termes pour l'authentification
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
            btn_games: "Games",
            games_desc: "Découvrez notre bibliothèque de jeux",
            games_title: "Games",
            games_view_desc: "Découvrez et téléchargez notre sélection de jeux.",
            discord_games_title: "Discord Webed",
            discord_games_desc: "Rejoignez le serveur discord pour proposer des jeux crackés à ajouter !",
            join_discord_games: "Rejoindre le Discord",
            rust_title: "RV There Yet?",
            rust_desc: "Jeu de survie et d'aventure sur la route.",
            tuto_btn: "Tuto",
            rust_tuto_title: "Tutoriel RV There Yet?",
            rust_tuto_intro: "Voici comment lancer RV There Yet?:",
            rust_tuto_step1: "Regarder le Tuto Préparation avant téléchargement",
            rust_tuto_step2: "Regarder le Tuto Vidéo du jeu",
            tuto_video_btn: "Tuto Vidéo",
            pre_dl_tuto_btn: "Tuto Préparation avant téléchargement",
            btn_autoc: "AutoC",
            autoc_desc: "Outils de clics automatiques",
            autoc_title: "AutoClickers",
            autoc_view_desc: "Découvrez et téléchargez nos autoclickers.",
            autoc_mc_title: "AutoClicker For Mc",
            autoc_mc_desc: "AutoClicker optimisé pour Minecraft."
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
            // Nouveaux termes pour l'authentification
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
            select_server: "Select a download server:",
            fallback_msg: "Widget not showing? Use a backup link:",
            savefrom_title: "SaveFrom.net Engine:",
            btn_games: "Games",
            games_desc: "Discover our game library",
            games_title: "Games",
            games_view_desc: "Discover and download our selection of games.",
            discord_games_title: "Discord Webed",
            discord_games_desc: "Join the Discord server to propose cracked games to add!",
            join_discord_games: "Join Discord",
            rust_title: "RV There Yet?",
            rust_desc: "Survival and road adventure game.",
            tuto_btn: "Tutorial",
            rust_tuto_title: "RV There Yet? Tutorial",
            rust_tuto_intro: "Here is how to launch RV There Yet?:",
            rust_tuto_step1: "Watch the Pre-download Preparation Tutorial",
            rust_tuto_step2: "Watch the Video Tutorial of the game",
            tuto_video_btn: "Video Tutorial",
            pre_dl_tuto_btn: "Pre-download Preparation Tutorial",
            btn_autoc: "AutoC",
            autoc_desc: "Auto-clicking tools",
            autoc_title: "AutoClickers",
            autoc_view_desc: "Discover and download our autoclickers.",
            autoc_mc_title: "AutoClicker For Mc",
            autoc_mc_desc: "AutoClicker optimized for Minecraft.",
            ytdlp_view_desc: "Download YouTube videos or playlists in high quality using yt-dlp.",
            ping_view_desc: "Check your ping and test your network automatically."
        }
    };

    let currentLang = 'fr'; // Langue par défaut

    // --- LOGIQUE DES NOTIFICATIONS (TOASTS) ---
    const toastContainer = document.getElementById('toastContainer');

    function showNotification(message, type = 'info') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;

        // Icônes SVG selon le type
        let iconSvg = '';
        if (type === 'success') {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        } else if (type === 'error') {
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`;
        } else {
            // info
            iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
        }

        toast.innerHTML = `
            <div class="toast-icon">${iconSvg}</div>
            <div class="toast-message">${message}</div>
        `;

        toastContainer.appendChild(toast);

        // Durée selon le type (les erreurs restent un peu plus longtemps)
        const duration = type === 'error' ? 4000 : 3000;

        // Appliquer la durée d'animation css dynamiquement à la barre de progression
        toast.style.setProperty('--toast-duration', `${duration}ms`);
        // Note: Le CSS par défaut a 'linear forwards' pour l'animation 'shrinkProgress', 
        // on l'écrase dynamiquement si besoin (optionnel), mais on peut s'en passer en fixant direct.
        const progressBar = toast.animate([
            { width: '100%' },
            { width: '0%' }
        ], {
            duration: duration,
            easing: 'linear',
            pseudoElement: '::after'
        });

        // Supprimer après délai
        setTimeout(() => {
            toast.classList.add('hiding');
            toast.addEventListener('animationend', () => {
                toast.remove();
            }, { once: true });
        }, duration);
    }

    // --- Bouton Accueil dans la Navbar ---
    const goHomeHandler = (e) => {
        if (e) e.preventDefault();
        navigateHome();
    };

    if (navHomeBtn) {
        navHomeBtn.addEventListener('click', goHomeHandler);
    }

    if (logoHomeBtn) {
        logoHomeBtn.addEventListener('click', goHomeHandler);
    }

    const heroView = document.querySelector('.hero');
    const heroScriptBtn = document.getElementById('heroScriptBtn');
    const heroGamesBtn = document.getElementById('heroGamesBtn');
    const heroAutocBtn = document.getElementById('heroAutocBtn');
    const heroYtdlpBtn = document.getElementById('heroYtdlpBtn');
    const heroPingBtn = document.getElementById('heroPingBtn');
    const adminView = document.getElementById('adminView');
    const adminDashboardView = document.getElementById('adminDashboardView');
    const adminAccountsView = document.getElementById('adminAccountsView');
    const scriptView = document.getElementById('scriptView');
    const backToHomeFromAdminBtn = document.getElementById('backToHomeFromAdminBtn');
    const backFromDashboardBtn = document.getElementById('backFromDashboardBtn');
    const openAccountsBtn = document.getElementById('openAccountsBtn');
    const backToDashboardBtn = document.getElementById('backToDashboardBtn');
    const backFromScriptBtn = document.getElementById('backFromScriptBtn');
    const accountsListContainer = document.getElementById('accountsListContainer');

    const gamesView = document.getElementById('gamesView');
    const backFromGamesBtn = document.getElementById('backFromGamesBtn');

    const autocView = document.getElementById('autocView');
    const backFromAutocBtn = document.getElementById('backFromAutocBtn');

    const ytdlpView = document.getElementById('ytdlpView');
    const backFromYtdlpBtn = document.getElementById('backFromYtdlpBtn');

    const pingView = document.getElementById('pingView');
    const backFromPingBtn = document.getElementById('backFromPingBtn');

    function hideAllAdminViews() {
        if (adminView) adminView.style.display = 'none';
        if (adminDashboardView) adminDashboardView.style.display = 'none';
        if (adminAccountsView) adminAccountsView.style.display = 'none';
        if (scriptView) scriptView.style.display = 'none';
        if (gamesView) gamesView.style.display = 'none';
        if (autocView) autocView.style.display = 'none';
        if (ytdlpView) ytdlpView.style.display = 'none';
        if (pingView) pingView.style.display = 'none';
    }

    function navigateHome() {
        if (window.location.hash) {
            // Restore clean URL without the #
            history.pushState(null, '', window.location.pathname + window.location.search);
        }
        hideAllAdminViews();
        if (heroView) heroView.style.display = 'flex';
    }

    function navigateTo(hash, viewElem) {
        history.pushState(null, '', hash);
        if (heroView) heroView.style.display = 'none';
        hideAllAdminViews();
        if (viewElem) viewElem.style.display = 'flex';
    }

    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        hideAllAdminViews();

        if (hash === '#script' && scriptView) {
            if (heroView) heroView.style.display = 'none';
            scriptView.style.display = 'flex';
        } else if (hash === '#games' && gamesView) {
            if (heroView) heroView.style.display = 'none';
            gamesView.style.display = 'flex';
        } else if (hash === '#autoc' && autocView) {
            if (heroView) heroView.style.display = 'none';
            autocView.style.display = 'flex';
        } else if (hash === '#ytdlp' && ytdlpView) {
            if (heroView) heroView.style.display = 'none';
            ytdlpView.style.display = 'flex';
        } else if (hash === '#ping' && pingView) {
            if (heroView) heroView.style.display = 'none';
            pingView.style.display = 'flex';
        } else if (hash === '#admin' && adminView) {
            if (heroView) heroView.style.display = 'none';
            adminView.style.display = 'flex';
        } else if (hash === '#accounts' && adminAccountsView) {
            if (heroView) heroView.style.display = 'none';
            adminAccountsView.style.display = 'flex';
        } else if (hash === '#dashboard' && adminDashboardView) {
            if (heroView) heroView.style.display = 'none';
            adminDashboardView.style.display = 'flex';
        } else {
            if (heroView) heroView.style.display = 'flex';
        }
    });

    window.addEventListener('load', () => {
        if (window.location.hash) {
            window.dispatchEvent(new Event('hashchange'));
        }
    });

    if (adminPanelBtn) {
        adminPanelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#admin', adminView);
        });
    }

    const goBack = (e) => {
        if (e) e.preventDefault();
        navigateHome();
    };

    if (backToHomeFromAdminBtn) backToHomeFromAdminBtn.addEventListener('click', goBack);
    if (backFromDashboardBtn) backFromDashboardBtn.addEventListener('click', goBack);

    if (openAccountsBtn) {
        openAccountsBtn.addEventListener('click', () => {
            renderAccountsList();
            navigateTo('#accounts', adminAccountsView);
        });
    }

    if (backToDashboardBtn) {
        backToDashboardBtn.addEventListener('click', () => {
            navigateTo('#dashboard', adminDashboardView);
        });
    }

    function renderAccountsList() {
        if (!accountsListContainer) return;

        const users = JSON.parse(localStorage.getItem('webed_users')) || {};

        const adminName = currentLang === 'fr' ? "Administrateur" : "Administrator";
        const adminRole = "Admin";
        const userRole = currentLang === 'fr' ? "Utilisateur" : "User";
        const suspendedText = i18n[currentLang].suspended_status;

        let html = `
            <div class="account-item">
                <div class="account-info">
                    <span class="account-name">${adminName}</span>
                    <span class="account-email">admin</span>
                </div>
                <div class="account-role role-admin">${adminRole}</div>
            </div>
        `;

        for (const email in users) {
            const user = users[email];
            const userName = user.name || (currentLang === 'fr' ? 'Utilisateur' : 'User');
            const isSuspended = user.suspension && new Date(user.suspension.expires) > new Date();

            html += `
                <div class="account-item" style="flex-direction: row; align-items: center; gap: 12px;">
                    <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
                        <div class="account-info" style="width: 100%; display: flex; justify-content: space-between; align-items: center;">
                            <span class="account-name">${userName}</span>
                            <div class="account-role role-user ${isSuspended ? 'status-suspended' : ''}">${isSuspended ? suspendedText : userRole}</div>
                        </div>
                        <div class="account-details" style="font-size: 0.75rem; color: var(--text-secondary); opacity: 0.8;">
                            <span>pseudo : ${user.email}</span> | <span>Mots de passe : ${user.password}</span>
                        </div>
                    </div>
                    <div class="account-actions">
                        ${isSuspended ?
                    `<button class="btn-unblock-user" onclick="window.unblockUser('${user.email}')">${i18n[currentLang].unblock_user}</button>` :
                    `<button class="btn-block-user" onclick="window.openSuspensionModal('${user.email}')">${i18n[currentLang].block_user}</button>`
                }
                    </div>
                </div>
             `;
        }

        accountsListContainer.innerHTML = html;
    }

    // Modal Handling for Suspension
    const suspensionModal = document.getElementById('suspensionModal');
    const suspensionNoticeModal = document.getElementById('suspensionNoticeModal');
    const suspensionForm = document.getElementById('suspensionForm');
    const closeSuspensionModal = document.getElementById('closeSuspensionModal');
    const closeSuspensionNoticeBtn = document.getElementById('closeSuspensionNoticeBtn');

    window.openSuspensionModal = (email) => {
        document.getElementById('suspendUserEmail').value = email;
        openModal(suspensionModal);
    };

    if (closeSuspensionModal) closeSuspensionModal.addEventListener('click', () => closeModal(suspensionModal));
    if (closeSuspensionNoticeBtn) closeSuspensionNoticeBtn.addEventListener('click', () => closeModal(suspensionNoticeModal));

    if (suspensionForm) {
        suspensionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('suspendUserEmail').value;
            const durationValue = parseInt(document.getElementById('suspensionDuration').value);
            const unit = document.getElementById('suspensionUnit') ? document.getElementById('suspensionUnit').value : 'hours';
            const reason = document.getElementById('suspensionReason').value;

            const users = JSON.parse(localStorage.getItem('webed_users')) || {};
            if (users[email]) {
                const expiryDate = new Date();

                if (unit === 'seconds') {
                    expiryDate.setSeconds(expiryDate.getSeconds() + durationValue);
                } else if (unit === 'minutes') {
                    expiryDate.setMinutes(expiryDate.getMinutes() + durationValue);
                } else if (unit === 'hours') {
                    expiryDate.setHours(expiryDate.getHours() + durationValue);
                } else if (unit === 'days') {
                    expiryDate.setDate(expiryDate.getDate() + durationValue);
                }

                users[email].suspension = {
                    expires: expiryDate.toISOString(),
                    reason: reason
                };

                localStorage.setItem('webed_users', JSON.stringify(users));
                showNotification(currentLang === 'fr' ? "Utilisateur bloqué avec succès." : "User blocked successfully.", 'success');
                closeModal(suspensionModal);
                renderAccountsList();
                suspensionForm.reset();
            }
        });
    }

    window.unblockUser = (email) => {
        const users = JSON.parse(localStorage.getItem('webed_users')) || {};
        if (users[email]) {
            delete users[email].suspension;
            localStorage.setItem('webed_users', JSON.stringify(users));
            showNotification(currentLang === 'fr' ? "Utilisateur débloqué." : "User unblocked.", 'success');
            renderAccountsList();
        }
    };

    function openModal(modal) {
        if (!modal) return;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        if (!modal) return;
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Paramètres
    settingsBtn.addEventListener('click', () => {
        openModal(settingsModal);
    });

    closeSettingsModal.addEventListener('click', () => {
        closeModal(settingsModal);
        langSelector.classList.remove('open');
    });

    // Authentification
    if (loginBtnTrigger) {
        loginBtnTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    if (heroLoginBtn) {
        heroLoginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(loginModal);
        });
    }

    if (heroScriptBtn) {
        heroScriptBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#script', scriptView);
            showNotification(currentLang === 'fr' ? "Mode Script / macro Ouvert !" : "Script / macro Mode Opened!", 'success');
        });
    }

    if (heroGamesBtn) {
        heroGamesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#games', gamesView);
            showNotification(currentLang === 'fr' ? "Games Ouvert !" : "Games Mode Opened!", 'success');
        });
    }

    if (heroYtdlpBtn) {
        heroYtdlpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#ytdlp', ytdlpView);
            showNotification(currentLang === 'fr' ? "YT-DLP Ouvert !" : "YT-DLP Mode Opened!", 'success');
        });
    }

    if (heroPingBtn) {
        heroPingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('#ping', pingView);
            showNotification(currentLang === 'fr' ? "Testeur de Ping Ouvert !" : "Ping Tester Mode Opened!", 'success');
        });
    }

    if (heroAutocBtn) {
        heroAutocBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (heroAutocBtn.classList.contains('disabled')) {
                showNotification(currentLang === 'fr' ? "Connexion requise pour accéder à AutoC." : "Login required to access AutoC.", 'error');
                return;
            }
            navigateTo('#autoc', autocView);
            showNotification(currentLang === 'fr' ? "AutoC Ouvert !" : "AutoC Mode Opened!", 'success');
        });
    }

    if (backFromScriptBtn) {
        backFromScriptBtn.addEventListener('click', goBack);
    }

    if (backFromGamesBtn) {
        backFromGamesBtn.addEventListener('click', goBack);
    }

    if (backFromAutocBtn) {
        backFromAutocBtn.addEventListener('click', goBack);
    }

    if (backFromYtdlpBtn) {
        backFromYtdlpBtn.addEventListener('click', goBack);
    }

    if (backFromPingBtn) {
        backFromPingBtn.addEventListener('click', goBack);
    }

    // --- YT Downloader Logic ---
    const ytRedirectBtn = document.getElementById('ytRedirectBtn');

    if (ytRedirectBtn) {
        ytRedirectBtn.addEventListener('click', () => {
            window.open('https://notube.net/fr/youtube-app-v102', '_blank');
        });
    }

    // --- Ping & Speedtest Logic ---
    const startSpeedTestBtn = document.getElementById('startSpeedTestBtn');
    const pingResult = document.getElementById('pingResult');
    const speedResult = document.getElementById('speedResult');
    const ipResult = document.getElementById('ipResult');
    const ispResult = document.getElementById('ispResult');
    const locResult = document.getElementById('locResult');
    const testStepText = document.getElementById('testStepText');
    const testPercentage = document.getElementById('testPercentage');
    const testProgressBar = document.getElementById('testProgressBar');

    if (startSpeedTestBtn) {
        startSpeedTestBtn.addEventListener('click', async () => {
            pingResult.innerText = '...';
            speedResult.innerText = '...';
            startSpeedTestBtn.disabled = true;
            
            // Initialization
            testProgressBar.style.width = '10%';
            testPercentage.innerText = '10%';
            testStepText.innerText = currentLang === 'fr' ? 'Recherche d\'IP...' : 'Fetching IP...';
            testProgressBar.style.background = 'linear-gradient(90deg, #3b82f6, #10b981)';
            
            // Fetch IP Info
            try {
                const ipRes = await fetch('https://ipapi.co/json/');
                if (!ipRes.ok) throw new Error('ipapi.co failed');
                const ipData = await ipRes.json();
                if (ipData && ipData.ip) {
                    ipResult.innerText = ipData.ip || 'Inconnu';
                    ispResult.innerText = ipData.org || ipData.asn || 'Inconnu';
                    locResult.innerText = `${ipData.city || ''}, ${ipData.country_name || ''}`;
                } else {
                    throw new Error('Invalid data');
                }
            } catch(e) {
                try {
                    // Fallback to ipinfo.io
                    const ipRes2 = await fetch('https://ipinfo.io/json');
                    const ipData2 = await ipRes2.json();
                    if (ipData2 && ipData2.ip) {
                        ipResult.innerText = ipData2.ip || 'Inconnu';
                        ispResult.innerText = ipData2.org || 'Inconnu';
                        locResult.innerText = `${ipData2.city || ''}, ${ipData2.country || ''}`;
                    } else {
                        throw new Error('Invalid data');
                    }
                } catch(e2) {
                    try {
                        // Fallback to ipwho.is
                        const ipRes3 = await fetch('https://ipwho.is/');
                        const ipData3 = await ipRes3.json();
                        if (ipData3 && ipData3.success) {
                            ipResult.innerText = ipData3.ip || 'Inconnu';
                            ispResult.innerText = ipData3.connection?.isp || ipData3.connection?.org || 'Inconnu';
                            locResult.innerText = `${ipData3.city || ''}, ${ipData3.country || ''}`;
                        } else {
                            throw new Error('Invalid data');
                        }
                    } catch(e3) {
                        ipResult.innerText = 'Erreur';
                        ispResult.innerText = 'Erreur';
                        locResult.innerText = 'Erreur';
                    }
                }
            }
            
            testProgressBar.style.width = '40%';
            testPercentage.innerText = '40%';
            testStepText.innerText = currentLang === 'fr' ? 'Test du Ping...' : 'Testing Ping...';
            
            // Test Ping
            let pingTimes = [];
            for (let i = 0; i < 3; i++) {
                const start = performance.now();
                try {
                    await fetch(`https://cloudflare.com/cdn-cgi/trace?t=${new Date().getTime()}`, { mode: 'no-cors' });
                    const end = performance.now();
                    pingTimes.push(end - start);
                } catch (e) {
                    // ignore
                }
            }
            const avgPing = pingTimes.length > 0 ? Math.round(pingTimes.reduce((a, b) => a + b) / pingTimes.length) : 'Err';
            pingResult.innerText = avgPing;
            
            testProgressBar.style.width = '70%';
            testPercentage.innerText = '70%';
            testStepText.innerText = currentLang === 'fr' ? 'Test de débit...' : 'Testing Speed...';
            
            // Test Speed (Téléchargement de ~10MB)
            const downloadSize = 10000000;
            const speedStart = performance.now();
            try {
                const response = await fetch(`https://speed.cloudflare.com/__down?bytes=${downloadSize}`);
                await response.blob(); 
                const speedEnd = performance.now();
                const durationSec = (speedEnd - speedStart) / 1000;
                const bitsLoaded = downloadSize * 8;
                const bps = bitsLoaded / durationSec;
                const mbps = (bps / 1024 / 1024).toFixed(2);
                speedResult.innerText = mbps;
            } catch (e) {
                 speedResult.innerText = 'Err';
            }
            
            testProgressBar.style.width = '100%';
            testPercentage.innerText = '100%';
            testStepText.innerText = currentLang === 'fr' ? 'Test terminé' : 'Test finished';
            
            startSpeedTestBtn.disabled = false;
        });
    }

    if (closeLoginModal) closeLoginModal.addEventListener('click', () => closeModal(loginModal));
    if (closeUsageModal) closeUsageModal.addEventListener('click', () => closeModal(usageModal));
    if (closeUsageBtn) closeUsageBtn.addEventListener('click', () => closeModal(usageModal));

    if (tutoRustBtn) tutoRustBtn.addEventListener('click', () => openModal(rustTutoModal));
    if (closeRustTutoModal) closeRustTutoModal.addEventListener('click', () => closeModal(rustTutoModal));
    if (closeRustTutoBtn) closeRustTutoBtn.addEventListener('click', () => closeModal(rustTutoModal));

    // Fermer les modales en cliquant à l'extérieur
    [settingsModal, loginModal, usageModal, rustTutoModal].forEach(modal => {
        if (!modal) return;
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
                if (modal === settingsModal) {
                    langSelector.classList.remove('open');
                }
            }
        });
    });

    // --- Toggle Mot de passe ---
    document.querySelectorAll('.toggle-password').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = btn.previousElementSibling;
            if (input && input.tagName === 'INPUT') {
                if (input.type === 'password') {
                    input.type = 'text';
                    // Modification visuelle optionnelle de l'oeil : transparence ou couleur pour montrer le changement
                    btn.style.color = 'var(--text-primary)';
                } else {
                    input.type = 'password';
                    btn.style.color = '';
                }
            }
        });
    });

    // --- Logique du Custom Select (Menu déroulant langues) ---

    // Toggle le menu déroulant
    langSelector.addEventListener('click', (e) => {
        langSelector.classList.toggle('open');
        e.stopPropagation(); // Évite que le clic ne ferme immédiatement
    });

    // Fermer le select si on clique ailleurs dans la page (ou la modale)
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('open');
        }
    });

    // Changement de langue via les options
    customOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const selectedLang = option.getAttribute('data-lang');

            e.stopPropagation();

            if (selectedLang !== currentLang) {
                // Mettre à jour la classe "selected"
                customOptions.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.setAttribute('aria-selected', 'false');
                });

                option.classList.add('selected');
                option.setAttribute('aria-selected', 'true');

                // Appliquer les traductions globales sur la page (cela mettra aussi à jour le sélecteur)
                updateLanguage(selectedLang);
                currentLang = selectedLang;
            }

            // Fermer le dropdown
            langSelector.classList.remove('open');
        });
    });

    // --- Fonction de mise à jour des textes globaux ---
    function updateLanguage(lang) {
        // Mettre à jour les textes normaux via l'attribut data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (i18n[lang] && i18n[lang][key]) {
                el.textContent = i18n[lang][key];
            }
        });

        // Mettre à jour les placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (i18n[lang] && i18n[lang][key]) {
                el.setAttribute('placeholder', i18n[lang][key]);
            }
        });

        // Mettre à jour le texte du sélecteur de langue lui-même s'il existe
        if (selectedLangText && i18n[lang][`lang_${lang}`]) {
            selectedLangText.textContent = i18n[lang][`lang_${lang}`];
        }

        const autocBtn = document.getElementById('heroAutocBtn');
        if (autocBtn && autocBtn.classList.contains('disabled')) {
            autocBtn.setAttribute('title', lang === 'fr' ? 'Connexion requise' : 'Login required');
        }

        // Mettre à jour l'attribut lang du tag HTML
        document.documentElement.lang = lang;
    }

    // Initialisation au lancement
    updateLanguage(currentLang);

    // =========================================
    // AUTHENTICATION LOGIC (Mock Email & LocalStorage)
    // =========================================

    // Initialisation d'un utilisateur par défaut si inexistant
    let currentUsers = JSON.parse(localStorage.getItem('webed_users')) || {};
    if (!currentUsers['user1']) {
        currentUsers['user1'] = { name: 'user1', email: 'user1', password: 'user12345' };
        localStorage.setItem('webed_users', JSON.stringify(currentUsers));
    }

    // 1. Initial State Check
    function updateAuthState() {
        let activeUser = JSON.parse(sessionStorage.getItem('webed_active_user'));

        // Fetch fresh copy from localStorage to ensure suspension data is up to date
        if (activeUser) {
            const users = JSON.parse(localStorage.getItem('webed_users')) || {};
            const freshUser = users[activeUser.email];
            if (freshUser) {
                activeUser = freshUser;
                // Check suspension
                if (activeUser.suspension) {
                    const expiry = new Date(activeUser.suspension.expires);
                    if (expiry > new Date()) {
                        sessionStorage.removeItem('webed_active_user');
                        activeUser = null; // Forces logout flow below

                        // Show suspension notice
                        const noticeReason = document.getElementById('noticeReason');
                        const noticeRemaining = document.getElementById('noticeRemaining');
                        if (noticeReason) noticeReason.textContent = activeUser.suspension.reason;
                        if (noticeRemaining) {
                            const now = new Date();
                            const diff = expiry - now;
                            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                            const minutes = Math.floor((diff / 1000 / 60) % 60);

                            let timeString = '';
                            if (currentLang === 'fr') {
                                if (days > 0) timeString += `${days} jour(s) `;
                                if (hours > 0) timeString += `${hours} heure(s) `;
                                timeString += `${minutes} minute(s)`;
                            } else {
                                if (days > 0) timeString += `${days} day(s) `;
                                if (hours > 0) timeString += `${hours} hour(s) `;
                                timeString += `${minutes} minute(s)`;
                            }
                            noticeRemaining.textContent = timeString;
                        }

                        const suspensionNoticeModal = document.getElementById('suspensionNoticeModal');
                        if (suspensionNoticeModal) {
                            // Ensure it's active instead of display flex, wait for DOM fully
                            setTimeout(() => openModal(suspensionNoticeModal), 100);
                        }
                    }
                }
            }
        }

        if (activeUser) {
            if (authButtons) authButtons.style.display = 'none';
            if (userProfile) {
                userProfile.style.display = 'flex';
                profileName.textContent = activeUser.name || activeUser.email.split('@')[0];
            }
            if (adminPanelBtn) adminPanelBtn.style.display = 'inline-block';
            if (heroAutocBtn) {
                heroAutocBtn.classList.remove('disabled');
                heroAutocBtn.removeAttribute('title');
            }
            if (heroYtdlpBtn) {
                heroYtdlpBtn.classList.remove('disabled');
                heroYtdlpBtn.removeAttribute('title');
            }
            if (heroPingBtn) {
                heroPingBtn.classList.remove('disabled');
                heroPingBtn.removeAttribute('title');
            }
        } else {
            if (authButtons) authButtons.style.display = 'flex';
            if (userProfile) userProfile.style.display = 'none';
            if (adminPanelBtn) adminPanelBtn.style.display = 'inline-block';
            if (heroAutocBtn) {
                heroAutocBtn.classList.add('disabled');
                heroAutocBtn.setAttribute('title', currentLang === 'fr' ? 'Connexion requise' : 'Login required');
            }
        }
    }
    updateAuthState(); // Run on load

    // 2. Utils
    // verification utils removed

    // 3. Form Submissions
    const loginForm = document.getElementById('loginForm');
    const adminLoginForm = document.getElementById('adminLoginForm');

    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', (e) => {
            // Restore preventDefault to stop page reload in SPA
            e.preventDefault();

            const username = document.getElementById('adminUsername').value;
            const password = document.getElementById('adminPassword').value;

            // Identifiants administrateur de test
            if (username === 'dr3x' && password === 'mdp010101') {
                showNotification(currentLang === 'fr' ? "Bienvenue, Administrateur !" : "Welcome, Administrator!", 'success');
                hideAllAdminViews();
                if (adminDashboardView) adminDashboardView.style.display = 'flex';
                adminLoginForm.reset();
            } else {
                showNotification(currentLang === 'fr' ? "Identifiants administrateur incorrects." : "Incorrect administrator credentials.", 'error');
            }
        });
    }



    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            // Restore preventDefault to stop page reload in SPA
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            // Check user
            const users = JSON.parse(localStorage.getItem('webed_users')) || {};
            const user = users[email];

            if (!user || user.password !== password) {
                alert(currentLang === 'fr' ? "Pseudo ou mot de passe incorrect." : "Incorrect pseudo or password.");
                return;
            }

            // Check for suspension
            if (user.suspension) {
                const expiry = new Date(user.suspension.expires);
                if (expiry > new Date()) {
                    // Show suspension notice
                    document.getElementById('noticeReason').textContent = user.suspension.reason;
                    const noticeRemaining = document.getElementById('noticeRemaining');
                    if (noticeRemaining) {
                        const now = new Date();
                        const diff = expiry - now;
                        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                        const minutes = Math.floor((diff / 1000 / 60) % 60);

                        let timeString = '';
                        if (currentLang === 'fr') {
                            if (days > 0) timeString += `${days} jour(s) `;
                            if (hours > 0) timeString += `${hours} heure(s) `;
                            timeString += `${minutes} minute(s)`;
                        } else {
                            if (days > 0) timeString += `${days} day(s) `;
                            if (hours > 0) timeString += `${hours} hour(s) `;
                            timeString += `${minutes} minute(s)`;
                        }
                        noticeRemaining.textContent = timeString || "Expiré / Expired";
                    }

                    // Fermer la modal de login d'abord
                    closeModal(loginModal);
                    // Ouvrir la modal de suspension ensuite
                    setTimeout(() => openModal(suspensionNoticeModal), 50);
                    return;
                }
            }

            // Valid credentials, login directly
            sessionStorage.setItem('webed_active_user', JSON.stringify(user));
            showNotification(currentLang === 'fr' ? "Authentification réussie !" : "Authentication successful!", 'success');

            closeModal(loginModal);
            updateAuthState();

            // Cleanup
            if (loginForm) loginForm.reset();
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            sessionStorage.removeItem('webed_active_user');
            updateAuthState();
            showNotification(currentLang === 'fr' ? "Vous avez été déconnecté." : "You have been logged out.", 'info');
        });
    }

    // --- Logique du bouton Utilisation HardNuke ---
    const usageHardNukeBtn = document.getElementById('usageHardNukeBtn');
    if (usageHardNukeBtn) {
        usageHardNukeBtn.addEventListener('click', () => {
            openModal(usageModal);
        });
    }

});
