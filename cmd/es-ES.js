module.exports = {
    autotask: {
        name: 'autotask',
        description: 'Gère toutes les automatisations du serveur'
    },
    config: {
        name: 'config',
        description: 'Modifie des paramètres du bot pour ce serveur',
        welcome_name: 'bienvenue',
        welcome_description: 'Configure le message de bienvenue du serveur',
        welcome_get_name: 'récupérer',
        welcome_get_description: 'Vous donnes la configuration actuelle de bienvenue avec un exemple',
        welcome_set_name: 'définir',
        welcome_set_description: 'Change une valeur ou plusieurs valeurs de bienvenue',
        welcome_set_channel_name: 'salon',
        welcome_set_channel_description: 'Change le salon de bienvenue',
        welcome_set_background_name: 'fond',
        welcome_set_background_description: 'L\'image de fond de bienvenue',
        welcome_set_enabled_name: 'activé',
        welcome_set_enabled_description: 'Est ce que le module de bienvenue est activé ?',
        welcome_set_img_enabled_name: 'img_activé',
        welcome_set_img_enabled_description: 'Est ce que une image de bienvenue est envoyé ?',
        welcome_set_msg_name: 'définir_msg',
        welcome_set_msg_description: 'Change le message de bienvenue',
        autorole_name: 'roleauto',
        autorole_description: 'Ajoutez des roles qui sont donnés au nouveaux membres',
        autorole_action_name: 'action',
        autorole_action_description: 'Selectionnez quelque chose a faire avec les roles automatiques',
        autorole_action_add: 'Ajouter',
        autorole_action_remove: 'Supprimer'
    },
    credits: {
        name: 'crédits',
        description: 'Vous donnes les crédits de AutoTask'
    },
    giveaway: {
        name: 'giveaway',
        description: 'Gère les giveaways du serveur avec toutes les sous-commandes !',
        create_name: 'créer',
        create_description: 'Crée un giveaway avec pleins d\'options !',
        create_prize_name: 'prix',
        create_prize_description: 'Le prix du/des gagnant(s)',
        create_winners_name: 'gagnants',
        create_winners_description: 'Le nombre de gagnants pour ce giveaway',
        create_time_name: 'temps',
        create_time_description: 'Le temps en minute du giveaway',
        create_channel_name: 'salon',
        create_channel_description: 'Le salon du giveaway (non précisé = dans ce salon)',
        create_host_name: 'organisateur',
        create_host_description: 'Qui organise ce giveaway ? (non précisé = vous)',
        create_ping_name: 'mention',
        create_ping_description: 'Le role qui va être mentionné lorsque le giveaway commence',
        create_required_roles_name: 'roles_requis',
        create_required_roles_description: 'Liste tous les rôles qui sont requis pour rentrer dans le giveaway (@role1 @role2...)',
        create_bonus_roles_name: 'roles_bonus',
        create_bonus_roles_description: 'Liste tous les rôles qui donnent des entrées bonus (@role1 2 @role2 1...)',
        create_multiple_win_name: 'victoire_multiple',
        create_multiple_win_description: 'Est ce qu\'une personne peut gagner plusieurs fois (avec les entrées bonus) (par défaut = non)',
        list_name: 'liste',
        list_description: 'Vous donnes tous les giveaways du serveur',
        list_channel_name: 'salon',
        list_channel_description: 'Le salon où les giveaways doivent être',
        list_host_name: 'organisateur',
        list_host_description: 'Qui a organisé les giveaways recherchés',
        end_name: 'fin',
        end_description: 'Arrête un giveaway en cours avec ou sans gagnants',
        end_message_id_name: 'id_message',
        end_message_id_description: 'L\'identifiant du message du giveawa',
        end_winners_name: 'gagnants',
        end_winners_description: 'Choisir le(s) gagnant(s) ?'
    },
    modals: {
        name: 'formulaires',
        description: 'Toutes les commandes avec les formulaires',
        create_name: 'créer',
        create_description: 'Crée un nouveau formulaire avec un nom unique',
        create_name_name: 'nom',
        create_name_description: 'Le nom du formulaire qui doit être unique',
        create_channel_name: 'salon',
        create_channel_description: 'Le salon dans lequel les réponses vont être envoyés',
        delete_name: 'supprimer',
        delete_description: 'Supprime un de vos formulaires',
        delete_name_name: 'nom',
        delete_name_descritpion: 'Le nom du formulaire à supprimer',
        list_name: 'liste',
        list_description: 'Vous donnes tous les formulaires de ce serveur',
        info_name: 'info',
        info_description: 'Vous donnes tous les champs d\'un des formulaires',
        info_name_name: 'nom',
        info_name_description: 'Le nom du formulaire',
        send_name: 'envoyer',
        send_description: 'Envoie un message avec un bouton qui ouvre le formulaire',
        send_name_name: 'nom',
        send_name_description: 'Le nom du formulaire',
        send_message_name: 'message',
        send_message_description: 'Le message à envoyer',
        edit_name: 'modifier',
        edit_description: 'Modifie un des formulaires',
        edit_name_name: 'nom',
        edit_name_description: 'Changer le nom d\'un formulaire',
        edit_name_name_name: 'nom',
        edit_name_name_description: 'Le nom du formulaire',
        edit_name_newname_name: 'nouveau_nom',
        edit_name_newname_description: 'Le nouveau nom du formulaire',
        edit_field_remove_name: 'supprimer-champ',
        edit_field_remove_description: 'Supprime un champ d\'un formulaire',
        edit_field_remove_name_name: 'nom',
        edit_field_remove_name_description: 'Le nom du formulaire',
        edit_field_remove_number_name: 'numéro',
        edit_field_remove_number_description: 'Le numero du champ a supprimer (voir /modal info)',
        edit_field_add_name: 'ajouter-champ',
        edit_field_add_description: 'Ajoute un champ a un formulaire',
        edit_field_add_name_name: 'nom',
        edit_field_add_name_description: 'Le nom du formulaire',
        edit_field_add_fname_name: 'nom_champ',
        edit_field_add_fname_description: 'Le nom du nouveau champ',
        edit_field_add_type_name: 'type',
        edit_field_add_type_description: 'Le type du champ',
        edit_field_add_type_choice_short: 'Court',
        edit_field_add_type_choice_long: 'Long',
        edit_field_add_required_name: 'requis',
        edit_field_add_required_description: 'Est ce que ce champ est requis ?',
        edit_field_add_placeholder_name: 'placeholder',
        edit_field_add_placeholder_description: 'Un petit texte d\'information',
        edit_field_add_min_name: 'min',
        edit_field_add_min_description: 'Le nombre de caractères au minimum',
        edit_field_add_max_name: 'max',
        edit_field_add_max_description: 'Le nombre de caractères au maximum'
    },
    tickets: {
        name: 'tickets',
        description: 'Toutes les commandes avec les tickets',
        create_name: 'créer',
        create_description: 'Crée un ticket',
        create_name_name: 'nom',
        create_name_description: 'Le nom du ticket',
        create_description_name: 'description',
        create_description_description: 'La description du ticket',
        create_category_name: 'catégorie',
        create_category_description: 'La catégorie où le ticket va être crée'
    },
    help: {
        name: 'aide',
        description: 'Pour avoir de l\'aide pour toutes les commandes et plus.'
    },
    counter: {
        name: 'compteur',
        description: 'Gère les compteurs du serveur',
        get_name: 'récupérer',
        get_description: 'Récupère tous les compteurs du serveur',
        create_name: 'créer',
        create_description: 'Créer un nouveau compteur dans le serveur',
        create_channel_name: 'salon',
        create_channel_description: 'Le salon du compteur',
        create_format_name: 'format',
        create_format_description: '({count} est la variable) Le format du compteur',
        create_type_name: 'type',
        create_type_description: 'Le type du compteur',
        create_type_choice_member: 'Compteur de membres (utilisateurs + bots)',
        create_type_choice_user: 'Compteur d\'utilisateurs',
        create_type_choice_bot: 'Compteur de bots',
        create_type_choice_channel: 'Compteur de salons',
        create_type_choice_role: 'Compteur de roles',
        remove_name: 'supprimer',
        remove_description: 'Supprime un compteur du serveur',
        remove_channel_name: 'salon',
        remove_channel_description: 'Le salon du compteur a supprimer'
    },
    reactionrole: {
        name: 'reactionrole',
        description: 'Gère des boutons qui une fois cliqué donne un role a l\'utilisateur',
        create_name: 'créer',
        create_description: 'Gère des boutons qui une fois cliqué donne un role a l\'utilisateur',
        create_message_name: 'message',
        create_message_description: 'Le contenu du message pour le réaction role',
        create_label_name: 'label',
        create_label_description: 'Le texte sur le bouton',
        create_role_name: 'role',
        create_role_description: 'Le role qui est donné/enlevé/basculer',
        create_type_name: 'type',
        create_type_description: 'Le type du réaction role',
        create_type_choice_add: 'Ajouter',
        create_type_choice_remove: 'Enlever',
        create_type_choice_toggle: 'Basculer'
    },
    privateroom: {
        name: 'salonprivé',
        description: 'Créer des salons privés quand quelqu\'un rejoinds un salon vocal !',
        get_name: 'récupérer',
        get_description: 'Vous donne la configuation du privateroom',
        setchannel_name: 'définirsalon',
        setchannel_description: 'Définis le salon des privaterooms',
        setchannel_channel_name: 'salon',
        setchannel_channel_description: 'Le nouveau salon des privaterooms',
        setenabled_name: 'définiractivé',
        setenabled_description: 'Définis si le système est activé ou non',
        setenabled_enabled_name: 'activé',
        setenabled_enabled_description: 'Est-ce que le système des privaterooms est activé ?',
        permanent_name: 'permanent',
        permanent_description: 'Gère les salons permanants',
        permanent_add_name: 'ajouter',
        permanent_add_description: 'Ajoute un salon permanant (pas supprimé quand il est vide)',
        permanent_add_channel_name: 'salon',
        permanent_add_channel_description: 'Le salon a ajouter',
        permanent_remove_name: 'enlever',
        permanent_remove_description: 'Enlever un salon permanant (supprimé quand il est vide)',
        permanent_remove_channel_name: 'salon',
        permanent_remove_channel_description: 'Le salon a retirer',
        permanent_reset_name: 'réinitialiser',
        permanent_reset_description: 'Retire tous les salons permanants du système priateroom',
        permanent_reset_confirmation_name: 'confirmation',
        permanent_reset_confirmation_description: 'Merci de confirmer l\'action.'
    },
    clear: {
        name: 'clear',
        description: 'Supprime un certain nombre de messages dans un salon',
        number_name: 'nombre',
        number_description: 'Le nombre de messages a supprimer'
    },
    get_message_date: { name: 'Récupérer La Date Du Message' },
    end_giveaway: { name: 'Terminer Le Giveaway' },
    user_info: { name: 'Info De L\'Utilisateur' },
    poll: {
        name: 'sondage',
        description: 'Crée des sondages pour poser des questions à votre communauté',
        create_name: 'créer',
        create_description: 'Crée un nouveau sondage sur votre serveur !',
        create_question_name: 'question',
        create_question_description: 'La question a poser. C\'est le titre de l\'embed',
        create_choices_name: 'choix',
        create_choices_description: 'Les choix séparés par "; ". Example: "Un; Deux; Trois".',
        create_results_name: 'resultats',
        create_results_description: 'Affiche les résultats en live sur l\'embed ?',
        create_time_name: 'temps',
        create_time_description: 'Le durée du sondage. Example: "4d5h12m" => d: jours, h: heures, m: minutes. Max 7 jours',
        create_description_name: 'description',
        create_description_description: 'Une description plus détaillé de votre sondage.',
        create_single_name: 'unique',
        create_single_description: 'Autorise les utilisateurs a choisir plus d\'une option',
        create_channel_name: 'salon',
        create_channel_description: 'Le salon du sondage',
        create_req_role_name: 'role_requis',
        create_req_role_description: 'Un rôle requis pour répondre au sondage'
    },
    hangman: {
        name: 'pendu',
        description: 'Joue au jeu du pendu. Propose des lettres et trouve le mot secret !',
        lang_name: 'langue',
        lang_description: 'La langue du mot secret',
        lang_en: 'Anglais',
        lang_fr: 'Français'
    }
};