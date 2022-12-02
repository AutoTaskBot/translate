const infos = { premium: 'Per ulteriori informazioni su AutoTask premium, è possibile utilizzare il comando `/premium`.' };
module.exports = {
    interactionCreate: {
        error: 'Si è verificato un errore durante l\'esecuzione del comando...\nCodice di errore:\n',
        reported: 'L\'errore è stato segnalato ma potrebbe essere necessario il vostro aiuto per risolvere il problema.',
        join_support: 'Vai al server di supporto'
    },
    autotask: {
        only_web: 'Spiacente! La funzione AutoTask è disponibile solo nel tuo browser (è più bella e più comprensibile).\nPotete andare a configurare AutoTask qui:\n**https://www.zygocraft.com/autotask**',
        list: {
            notask: [
                'Non c\'è AutoTask sul tuo server',
                'con il parametro definiti',
                '...'
            ],
            no_action: 'Alcuna azione',
            all_events: 'Tutti gli eventi definiti sul server :'
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
        starting: 'un Concorso ha inizio !',
        winners: 'vincitore(i)',
        end: 'Fine:',
        hosted_by: 'Organizzato da',
        req_roles: 'Ruolo(i) richiesto',
        click_to_enter: 'Premi il pulsante "🎉" per entrare nel Concorso !',
        participants: 'partecipanti',
        started: 'Concorso lanciato !',
        success_launched: [
            'Il Concorso',
            'è stato lanciato nel salone',
            ' !'
        ],
        message: 'Messaggio del Concorso',
        guild_gw: 'Ecco i concorso del server',
        limit: 'Non posso visualizzare tutti i concorso a causa del limite di carattere di Discord.',
        no_gw: 'Non c\'è nessun concorso con queste impostazioni',
        id_incorrect: 'L\'identificativo dato non è registrato come messaggio di un concorso !',
        stopped: '**⚠️ Il Concorso è stato interrotto !*\n\nQuindi non c\'è nessun vincitore',
        ustopped: [
            'Il concorso per vincere',
            'è stato arrestato.\nNessun vincitore è stato scelto perché l\'opzione "vincitore" non è su `Vero`'
        ],
        not_found: 'Uhm... non trovo questo concorso nel mio database. Un bizzarro bug comunque...',
        already_in: 'Sei già iscritto in questo concorso !',
        see_msg: 'Vedere il messaggio',
        refused: 'Negato accesso al concorso',
        refused_: [
            '**Spiacenti, ma non puoi partecipare [questo concorso]',
            '.**\nDeve avere almeno un ruolo tra i seguenti(i):'
        ],
        success: 'Entrata nel Concorso accettata',
        success_: [
            '**La voce per [questo Concorso]',
            'è stata accettata! **\nBuona fortuna per vincere',
            '** !'
        ]
    },
    welcome: {
        roles: 'Autoroles :',
        noroles: 'Il n\'y a aucun autorole...',
        welcome: 'Benvenuto',
        welcome_to: 'Benvenuto a',
        th_member: '° membro !',
        channel_invisible: '⚠️ La stanza designata come la stanza di benvenuto viene rimossa o non riesco a vederlo',
        example: 'Puoi modificare la configurazione con il comando `/config welcome set` !\nEsempio di benvenuto proprio qui ⤵️.',
        config_welcome: 'Ecco la configurazione di benvenuto',
        channel: 'Sala di benvenuto :',
        bg_img: 'Immagine di sfondo :',
        see_embed_img: 'Vedere l\'immagine di embed',
        img_enabled: 'Immagine di benvenuto attivata :',
        yes: 'Sì',
        no: 'Non',
        enabled: 'Benvenuto attivato :',
        msg: 'Messaggio di benvenuto :',
        defined_edited: 'I parametri definiti nell\'ordine sono stati modificati !',
        open_form: 'Fai clic sul pulsante per aprire il modulo per modificare il messaggio di benvenuto.',
        show_form: 'Visualizzare il modulo',
        change_msg: 'Cambia il messaggio di benvenuto',
        msg: 'Messaggio di benvenuto',
        draft: 'Bozza e valori',
        vars: [
            'Queste sono tutte le variabili che puoi usare nel messaggio di benvenuto :\n\n{guild.name} : Nome del server | Es: "',
            '"\n{guild.id} : ID server | Es: "',
            '"\n{guild.icon} : L\'icona del server in URL | Es: "',
            '"\n\n{member.name} : Il nome degli utilizzatori | Es: "',
            '"\n{member.id} : L\'ID degli utilizzatori | Es: "',
            '" (per menzionarlo: "<@{member.id}>")\n{member.tag} : Il tag degli utilizzatori | Es: "',
            '"\n{member.avatar} : L\'avatar degli utilizzatori | Es: "',
            '"\n{member.createdAt} : estampille temporelle di quando il conto degli utilizzatorié creata | Es: "',
            '" (per mettere \'ci sono ... Giorni\': "<t:{member.createdAt}:R>" e per \'il ...\': "<t:{member.createdAt}>")'
        ],
        msg_changed: 'Il messaggio di benvenuto è stato ben definito !\nPuoi usare il comando `/config welcome get` per visualizzarlo.',
        ping30: 'Veuillez mentionner un rôle pour effectuer l\'action (vous avez 30 secondes)',
        noping: 'Le message ne contient pas de role mentionné... Veuillez réessayer.',
        timeout: 'Les 30 secondes sont écoulés ! Je n\'ai pas reçu de message contenant une mention de role...',
        alreadyauto: 'Le role est déjà un role automatique !',
        nowautorole: 'Le role spécifié est maintenant un role automatique !',
        notauto: 'Le role n\'est pas un role automatique !',
        anymoreauto: 'Le role spécifié n\'est plus un role automatique désormais !'
    },
    ticket: {
        this_channel: 'Il biglietto è stato creato in questo salone !',
        open_ticket: 'Aprire una fiera di assistenza',
        created: [
            'Il tuo salone di assistenza (ticket) è stato creato',
            ' !'
        ],
        here: 'ecco il tuo ticket !',
        from: 'Ticket della',
        for: 'Motivo :',
        close: 'Chiudere il ticket',
        closing: 'Chiudiamo il ticket tra 3 secondi...',
        closed: 'Ecco ! Il ticket è chiuso !',
        closed_by: [
            'Ticket chiuso da',
            'Che cosa vuoi fare?'
        ],
        author: 'Autore del ticket',
        reopen: 'Riaprire il ticket',
        delete: 'Eliminare il ticket',
        reopen_by: 'Ticket riaperto da',
        reopened: 'Il ticket è riaperto!',
        deleting: 'Cancellazione del ticket tra 5 secondi...',
        deleted_by: 'Ticket eliminato da'
    },
    modals: {
        limit: `Hai raggiunto il limite di 5 moduli per i server non premium (o di 25 per i server premium) !\n${ infos.premium }`,
        already_exists: [
            'Un modulo con il nome',
            'già esistente !'
        ],
        created: [
            'Un nuovo modulo è stato creato con il nome',
            ' !\nAggiungi campi con il comando </modals edit field-add:0> !'
        ],
        deleted: [
            'Il formulario',
            'è stata soppressa !'
        ],
        no_field: 'Nessun campo. Aggiungi con il comando </modals edit field-add:0> !',
        no_forms: 'Non ci sono moduli su questo server!\nAggiungi uno con il comando </modals create:0>',
        here: 'Ecco tutti i moduli con i loro campi !',
        type: 'Tipo:',
        short: 'corto',
        long: 'lungo',
        required: 'Obbligatoria:',
        yes: 'sì',
        no: 'non',
        min: 'Minimo:',
        max: 'Massimo:',
        placeholder: 'Placeholder:',
        no_modal: [
            'Nessun modulo con il nome',
            'non è stato trovato!'
        ],
        number: 'Numero:',
        one_form: 'Ecco i campi del modulo',
        no_field_: 'Non ci sono campi in questo modulo !',
        no_modal_: 'Nessun modulo con il nome !',
        open_modal: 'Aprire il modulo',
        sended: 'Il modulo è stato inviato!',
        name_changed: [
            'Il nome del modulo',
            'è stato modificato in',
            ' !\n\n**Riutilizzare ordinazione </modals send:0> per aggiornare il pulsante**'
        ],
        no_field_with_num: [
            'Nessun campo con il numero',
            'non è stato trovato...'
        ],
        deleted: 'Il campo è stato rimosso !',
        field_added: 'Il campo è stato aggiunto !',
        was_deleted: 'Il modulo richiesto è stato rimosso o non è più disponibile.',
        no_field_to_write: 'Il campo è stato aggiunto !',
        deleted: 'Il modulo è stato cancellato nel frattempo... Altrimenti è un errore anomalo :(',
        was_sended: 'Il modulo è stato inviato correttamente !',
        not_specified: 'Campo opzionale non compilato dall\'utente',
        to_log: [
            'Il membre',
            'ha appena inviato il modulo'
        ]
    },
    guildCreate: {
        pop: 'Pop !',
        tips: 'Grazie per avermi aggiunto a questo server !\nEcco alcuni consigli che puoi seguire per iniziare bene :\n- Configurare il bot con il comando `/config`\n- Creare biglietti con il comando `/tickets`\n- Creare moduli con il comando `/modals`\n\nE questa è solo una piccola parte di tutte le funzioni del bot !\n\nPotete anche vedere la Dashboard del bot qui : **https://www.zygocraft.com/dashboard** o unirsi al nostro Discord cliccando sul pulsante sottostante.',
        join_discord: 'Aderire al nostro Discord'
    },
    messageCreate: {
        uptime: 'Sono connesso dal',
        url_content: 'Contenuto del messaggio dell\'URL'
    },
    credits: {
        info: 'AutoTask è un bot utile per creare automazioni sul tuo server. Permette anche di fare Concorso, tickets, ect...',
        devs: 'Sviluppatori :',
        thx: 'Grazie a :',
        translators: 'Traduttori',
        staff: 'Personale'
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