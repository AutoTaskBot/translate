const infos = { premium: 'Para obtener más información sobre AutoTask premium, puede usar el comando `/premium`.' };
module.exports = {
    interactionCreate: {
        error: 'Ocurrió un error al ejecutar el comando...\nCódigo de error:',
        reported: 'Se informa el error, pero es posible que necesitemos su ayuda para resolver el problema.',
        join_support: 'Ir al servidor de soporte'
    },
    autotask: {
        only_web: 'Lo siento! La función AutoTask solo está disponible en su navegador (es más hermoso y más fácil de entender).\nPuede ir a configurar AutoTask aquí mismo: **https://www.zygocraft.com/autotask**',
        list: {
            notask: [
                'No hay AutoTask en su servidor',
                'con el parámetro definido',
                '...'
            ],
            no_action: 'Sin acción',
            all_events: 'Todos los eventos definidos en el servidor:'
        }
    },
    giveaway: {
        end_: {
            ended_tada: '**🎉 Giveaway terminé ! 🎉**',
            ended_gift: '**🎁 Giveaway terminé ! 🎁**',
            winners: 'gagnant(s) !',
            winner_list: 'Gagnant(s):',
            not_determinated: 'gagnant(s) n\'ont/n\'a pas été déterminé(s) car il n\'y a pas eu assez de participants...',
            see_winners: 'Voir le(s) gagnant(s)'
        },
        starting: 'un Giveaway commence !',
        winners: 'gagnant(s)',
        end: 'Fin:',
        hosted_by: 'Organisé par',
        req_roles: 'Role(s) requis',
        click_to_enter: 'Appuyez sur le bouton "🎉" pour entrer dans le giveaway !',
        participants: 'participants',
        started: 'Giveaway lancé !',
        success_launched: [
            'Le giveaway',
            'a bien été lancé dans le salon',
            ' !'
        ],
        message: 'Message du giveaway',
        guild_gw: 'Voici les giveaways du serveurs',
        limit: 'Je ne peux pas afficher tous les giveaways a cause de la limite de caractère de Discord.',
        no_gw: 'Il n\'y a aucun giveaway avec ces paramètres',
        id_incorrect: 'L\'identifiant donné n\'est pas enregistré en temps que message d\'un giveaway !',
        stopped: '**⚠️ Le Giveaway a été arrété !**\n\nIl n\'y a donc aucun vainqueur',
        ustopped: [
            'Le giveaway pour gagner',
            'a été arrété.\nAucun gagnant n\'a été choisi car l\'option "gagnant" n\'est pas sur `Vrai`'
        ],
        not_found: 'Uhm... Je ne trouve pas ce giveaway dans ma base de données. Un bug bizare quand même...',
        already_in: 'Tu es déjà inscrit dans ce giveaway !',
        see_msg: 'Voir le message',
        refused: 'Entrée dans le giveaway refusée',
        refused_: [
            '**Désolé mais vous ne pouvez pas rejoindre [ce giveaway]',
            '.**\nVous devez avoir au moins un role parmis le(s) suivant(s):'
        ],
        success: 'Entrée dans le giveaway acceptée',
        success_: [
            '**L\'entrée pour [ce giveaway]',
            'a été acceptée !**\nBonne chance pour gagner',
            '** !'
        ]
    },
    welcome: {
        roles: 'Autoroles :',
        noroles: 'Il n\'y a aucun autorole...',
        welcome: 'Bienvenue',
        welcome_to: 'Bienvenue sur',
        th_member: 'e membre !',
        channel_invisible: '⚠️ Le salon désigné comme le salon de bienvenue est soit supprimé, soit je ne peux pas le voir',
        example: 'Vous pouvez modifier la configuration avec la commande `/config welcome set` !\nExemple de bienvenue juste ici ⤵️.',
        config_welcome: 'Voici la configuration de bienvenue',
        channel: 'Salon de bienvenue :',
        bg_img: 'Image en fond :',
        see_embed_img: 'Voir l\'image de l\'embed',
        img_enabled: 'Image de bienvenue activé :',
        yes: 'Oui',
        no: 'Non',
        enabled: 'Bienvenue activé :',
        msg: 'Message de bienvenue :',
        defined_edited: 'Les paramètres définis dans la commande ont bien été modifiés !',
        open_form: 'Clique sur le bouton pour ouvrir le formulaire pour modifier le message de bienvenue.',
        show_form: 'Afficher le formulaire',
        change_msg: 'Changer le message de bienvenue',
        msg: 'Message de bienvenue',
        draft: 'Brouillon et valeurs',
        vars: [
            'Voici toutes les variables que vous pouvez utiliser dans le message de bienvenue :\n\n{guild.name} : Nom du serveur | Ex: "',
            '"\n{guild.id} : ID du serveur | Ex: "',
            '"\n{guild.icon} : L\'icon du serveur en URL | Ex: "',
            '"\n\n{member.name} : Le pseudo de l\'utilisateur | Ex: "',
            '"\n{member.id} : L\'ID de l\'utilisateur | Ex: "',
            '" (pour le mentionner: "<@{member.id}>")\n{member.tag} : Le tag de l\'utilisateur | Ex: "',
            '"\n{member.avatar} : L\'avatar de l\'utilisateur | Ex: "',
            '"\n{member.createdAt} : Timestamp de quand le compte de l\'utilisateur a été crée | Ex: "',
            '" (pour mettre \'il y a .. jours\': "<t:{member.createdAt}:R>" et pour \'le ..\': "<t:{member.createdAt}>")'
        ],
        msg_changed: 'Le message de bienvenue a bien été définit !\nVous pouvez utiliser la commande `/config welcome get` pour le voir.',
        ping30: 'Veuillez mentionner un rôle pour effectuer l\'action (vous avez 30 secondes)',
        noping: 'Le message ne contient pas de role mentionné... Veuillez réessayer.',
        timeout: 'Les 30 secondes sont écoulés ! Je n\'ai pas reçu de message contenant une mention de role...',
        alreadyauto: 'Le role est déjà un role automatique !',
        nowautorole: 'Le role spécifié est maintenant un role automatique !',
        notauto: 'Le role n\'est pas un role automatique !',
        anymoreauto: 'Le role spécifié n\'est plus un role automatique désormais !'
    },
    ticket: {
        this_channel: 'Le ticket a été crée dans ce salon !',
        open_ticket: 'Ouvrir un ticket',
        created: [
            'Votre ticket a été crée',
            ' !'
        ],
        here: 'voici votre ticket !',
        from: 'Ticket de',
        for: 'Motif:',
        close: 'Fermer le ticket',
        closing: 'Fermeture du ticket dans 3 secondes...',
        closed: 'Et voilà ! Le ticket est fermé !',
        closed_by: [
            'Ticket fermé par',
            'Que voulez vous faire ?'
        ],
        author: 'Auteur du ticket',
        reopen: 'Réouvrir le ticket',
        delete: 'Supprimer le ticket',
        reopen_by: 'Ticket réouvert par',
        reopened: 'Le ticket est réouvert !',
        deleting: 'Suppression du ticket dans 5 secondes...',
        deleted_by: 'Ticket supprimé par'
    },
    modals: {
        limit: `Vous avez atteint la limite des 5 formulaires pour les serveurs non premium (ou de 25 pour si votre serveur est premium) !\n${ infos.premium }`,
        already_exists: [
            'Un formulaire avec le nom',
            'existe déjà !'
        ],
        created: [
            'Un nouveau formulaire a été crée avec le nom',
            ' !\nAjoutez des champs avec la commande </modals edit field-add:0> !'
        ],
        deleted: [
            'Le formulaire',
            'a été supprimé !'
        ],
        no_field: 'Aucun champ. Ajoutez en avec la commande </modals edit field-add:0> !',
        no_forms: 'Il n\'y a aucun formulaire sur ce serveur !\nAjoutez en un avec la commande </modals create:0>',
        here: 'Voici tous les formulaires avec leurs champs !',
        type: 'Type:',
        short: 'court',
        long: 'long',
        required: 'Obligatoire:',
        yes: 'oui',
        no: 'non',
        min: 'Minimum:',
        max: 'Maximum:',
        placeholder: 'Placeholder:',
        no_modal: [
            'Aucun formulaire avec le nom',
            'n\'a été trouvé !'
        ],
        number: 'Numéro:',
        one_form: 'Voici les champs du formulaire',
        no_field_: 'Il n\'y a aucun champ dans ce formulaire !',
        no_modal_: 'Il n\'y a aucun formulaire avec ce nom !',
        open_modal: 'Ouvrir le formulaire',
        sended: 'Le formulaire a été envoyé !',
        name_changed: [
            'Le nom du formulaire',
            'a été changé en',
            ' !\n\n**Réutilisez la commande </modals send:0> pour mettre a jour le bouton**'
        ],
        no_field_with_num: [
            'Aucun champ avec le numero',
            'n\'a été trouvé...'
        ],
        deleted: 'Le champ a bien été supprimé !',
        field_added: 'Le champ a bien été ajouté !',
        was_deleted: 'Le formulaire demandé à été supprimé ou il n\'est plus disponnible.',
        no_field_to_write: 'Le formulaire a été modifé et n\'a plus aucun champ a remplir !',
        deleted: 'Le formulaire a été supprimé entre temps... Ou sinon c\'est une erreur anormale :(',
        was_sended: 'Votre formulaire a bien été envoyé !',
        not_specified: 'Champ optionnel non rempli par l\'utilisateur',
        to_log: [
            'Le membre',
            'vient d\'envoyer le formulaire'
        ]
    },
    guildCreate: {
        pop: 'Pop !',
        tips: 'Merci de m\'avoir ajouté a ce serveur !\nVoici quelques conseils que vous pouvez suivre pour bien commencer :\n- Configurer le bot avec la commande `/config`\n- Créer des tickets avec la commande `/tickets`\n- Créer des formulaires avec la commande `/modals`\n\nEt ce n\'est qu\'une petite partie de toutes les fonctions du bot !\n\nVous pouvez également voir le dashboard du bot ici : **https://www.zygocraft.com/dashboard** ou rejoindre notre Discord en cliquant sur le bouton en dessous.',
        join_discord: 'Rejoindre notre Discord'
    },
    messageCreate: {
        uptime: 'Je suis connecté depuis le',
        url_content: 'Contenu du message de l\'URL'
    },
    credits: {
        info: 'AutoTask est un bot utile pour créer des automatisations sur votre serveur. Il permet également de faire des giveaways, tickets, ect...',
        devs: 'Développeurs :',
        thx: 'Merci aux :',
        translators: 'Traducteurs',
        staff: 'Staff'
    },
    help: { goto: 'Vous retrouverez toute l\'aide nésséssaire sur notre page de support avec le lien ci dessous :' },
    role: {
        unexisting: 'Le rôle demandé n\'existe plus !',
        has: 'Ce bouton est en "ajout de rôle" uniquement et vous avez déjà le rôle !',
        added: [
            'Et voilà ! Le rôle <@&',
            '> vous as été ajouté !'
        ],
        hasnt: 'Ce bouton retire des rôles uniquement et vous n\'avez pas le rôle !',
        removed: [
            'Et voilà ! Le rôle <@&',
            '> vous as été retiré !'
        ]
    },
    counter: {
        no: 'Il n\'y a pas de compteurs sur ce serveur !',
        cntrs: 'Compteurs sur ce serveur',
        counter: 'compteur',
        limit: 'Vous avez atteint la limite de 5 compteurs pour ce serveur ! Si vous voulez en créer plus, essayez AutoTask premium.',
        invalid: 'Le format ne contient pas `{count}`. Ça va être remplacé avec le vrai nombre. Merci de réessayer mais en ajoutant ceci a votre format.',
        already: 'Ce salon est déjà un compteur ! Supprimez le des compteurs avec la commande `/counter remove` et réutilisez cette commande.',
        created: 'Un nouveau compteur a été crée !\nLes compteurs sont mis à jour toutes les 10 minutes (pour éviter le ratelimit).',
        notcounter: 'Ce salon n\'est pas un compteur ! Récupérez tous les compteurs avec la commande `/counter get`.',
        removed: 'Ce salon n\'est plus un compteur désormais !'
    },
    reactionrole: {
        invalid: 'Je ne peux pas donner ce rôle car mon rôle est en dessous de celui-ci. Merci de glisser mon rôle tout en haut pour être sur que je puisse donner tous les rôles.',
        done: 'Le réaction rôle a été crée !'
    },
    privateroom: {
        current: 'Configuration actuel des PrivateRooms',
        chn: 'Salon de PrivateRoom :',
        notconfig: 'non configuré',
        enabled: 'Activé :',
        yes: 'oui',
        no: 'non',
        permanent: 'Salons permanents :',
        noperm: 'aucun salon permanent',
        setchan: 'Le salon des PrivateRooms est maintenant',
        setenabled: 'Le système des PrivateRooms est maintenant',
        already: 'Ce salon est déjà un salon permanent !',
        permadd: 'Un nouveau salon permanent a été ajouté ! Récupérez tous les salons permanents avec la command `/privateroom get` !',
        notperm: 'Ce salon n\'est pas un salon permanent. Vous ne pouvez pas l\'enlever !',
        removed: 'Le salon permanent a été retiré !',
        notconfirm: 'Confirmation sur Faux, je ne réinitialise pas les salons permanents.',
        reset: 'Tous les salons sont maintenant ephémères ! (quand quelqu\'un quitte un de ces salons et qu\'ils sont vides, ils sont supprimés. Si vous ne voulez pas qu\'ils soient supprimés, ajoutez les dans la liste des salons permanents)',
        enabled: 'activé',
        disabled: 'désactivé'
    },
    clear: { del: 'messages ont été supprimés !' },
    log: {
        channel_created: 'Salon crée',
        channel_name: 'Nom du salon:',
        channel_id: 'ID du salon:',
        category: 'Categorie:',
        no_category: 'aucune categorie',
        position: 'Position:',
        channel_mention: 'Mention du salon:',
        channel_deleted: 'Salon supprimé',
        emoji_created: 'Emoji crée',
        emoji_name: 'Nom de l\'emoji:',
        emoji_deleted: 'Emoji supprimé',
        member_joined: 'Un utilisateur a rejoins',
        member_uname: 'Nom d\'utilisateur & tag:',
        member_id: 'ID du membre:',
        account_created: 'Compte crée:',
        bot: 'Bot:',
        true: 'oui',
        false: 'non',
        member_leaved: 'Un membre a quitté',
        joined: 'Rejoins:',
        invite_created: 'Invitation créee',
        invite_url: 'URL de l\'invitation:',
        invite_author: 'Auteur de l\'invitation:',
        invite_maxuse: 'Utilisation maximal:',
        infinite: 'infini',
        invite_maxtime: 'Temps de l\'invitation:',
        invite_deleted: 'Invitation supprimé',
        invite_uses: 'Utilisations:',
        message_deleted: 'Message supprimé',
        message_author: 'Auteur du message:',
        message_channel: 'Salon du message:',
        message_content: 'Contenu du message',
        message_bulkdeleted: 'Message Bulk supprimé',
        bot_deleted: 'Un bot a supprimé',
        messages_in: 'messages dans',
        message_edited: 'Message modifié',
        role_created: 'Role crée',
        role_name: 'Nom du role:',
        role_id: 'ID du Role:',
        role_mention: 'Mention du role:',
        role_deleted: 'Role supprimé',
        sticker_created: 'Sticker crée',
        sticker_name: 'Nom du sticker:',
        sticker_deleted: 'Sticker supprimé',
        thread_created: 'Thread crée',
        thread_name: 'Nom du thread:',
        thread_id: 'ID du thread:',
        channel: 'Salon:',
        thread_deleted: 'Thread supprimé'
    },
    get_message_date: {
        sended: 'Envoyé:',
        edited: 'Modifié:',
        never_edited: 'jamais modifié'
    },
    end_giveaway: {
        not_saved: 'Ce message n\'est pas enregistré en tant que message de Giveaway!',
        ended: 'Giveaway terminé!'
    },
    user_info: {
        here: 'Here are the infos of the member',
        userid: 'ID de l\'utilisateur',
        username: 'Nom d\'utilisateur',
        udiscrim: 'Tag de l\'utilisateur',
        join: 'A rejoins le serveur le',
        created: 'A crée son compte le',
        status: 'Status',
        dontstatus: 'Cet utilisateur n\'a pas de status',
        avatarurl: 'URL de l\'avatar',
        clickhere: 'Clique ici pour voir l\'avatar de l\'utilisateur'
    }
};