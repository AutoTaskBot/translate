const infos = { premium: 'Для отримання додаткової інформації про AutoTask premium ви можете скористатися командою `/premium`.' };
module.exports = {
    interactionCreate: {
        error: 'Під час виконання команди сталася помилка...\nКод помилки:',
        reported: 'Про помилку повідомлено, але нам може знадобитися ваша допомога, щоб розв\'язати проблему.',
        join_support: 'Перейдіть на сервер підтримки'
    },
    autotask: {
        only_web: 'Вибачте! Функція AutoTask доступна лише у вашому браузері (вона красивіша та зрозуміліша). Ви можете налаштувати AutoTask прямо тут: **https://www.zygocraft.com/autotask**',
        list: {
            notask: [
                'На вашому сервері немає AutoTask',
                'із визначеним параметром',
                '...'
            ],
            no_action: 'Ніяких дій',
            all_events: 'Усі події, визначені на сервері:'
        }
    },
    giveaway: {
        end_: {
            ended_tada: '**🎉 Розіграш закінчився! 🎉**',
            ended_gift: '**🎁 Розіграш закінчився! 🎁**',
            winners: 'переможці!',
            winner_list: 'Переможці:',
            not_determinated: 'переможців не визначено через недостатню кількість учасників...',
            see_winners: 'Переглянути переможців'
        },
        starting: 'розіграш розпочинається!',
        winners: 'переможці',
        end: 'Кінець:',
        hosted_by: 'Організовано',
        req_roles: 'Необхідно роль(-і)',
        click_to_enter: 'Натисніть кнопку "🎉", щоб взяти участь у розіграші!',
        participants: 'учасників',
        started: 'Розіграш розпочато!',
        success_launched: [
            'Розіграш',
            'успішно запущено на каналі',
            ' !'
        ],
        message: 'Повідомлення з роздачі',
        guild_gw: 'Ось розіграші на сервері',
        limit: 'Я не можу показати всі розіграші через обмеження кількості символів Discord.',
        no_gw: 'З цими налаштуваннями роздача не проводиться',
        id_incorrect: 'Наданий ідентифікатор не зберігається як повідомлення про роздачу!',
        stopped: '**⚠️ Розіграш було припинено!**\n\nТому переможця немає',
        ustopped: [
            'Розіграш, щоб виграти',
            'було зупинено. Переможця не вибрано, оскільки для параметра "Переможець" не встановлено значення "Правда"'
        ],
        not_found: 'Гм... Я не можу знайти цей розіграш у своїй базі даних. Хоча дивна помилка...',
        already_in: 'Ви вже зареєстровані в цьому розіграші!',
        see_msg: 'Подивитися повідомлення',
        refused: 'Участь у розіграші заборонено',
        refused_: [
            '**Вибачте, але ви не можете приєднатися до [цього розіграшу]',
            '.**\nВи повинні мати принаймні одну з наступних ролей:'
        ],
        success: 'Участь у розіграші прийнято',
        success_: [
            '**Заявку на [цей розіграш]',
            'прийнято!**\nУспіхів у виграші',
            '**!'
        ]
    },
    welcome: {
        roles: 'Autoroles :',
        noroles: 'Il n\'y a aucun autorole...',
        welcome: 'Вітаю вас',
        welcome_to: 'Ласкаво просимо до',
        th_member: 'учаснику!',
        channel_invisible: '⚠️ Канал, призначений як канал привітання, або було видалено, або я його не бачу',
        example: 'Ви можете змінити конфігурацію за допомогою команди `/config welcome set`!\nВітальний приклад прямо тут ⤵️.',
        config_welcome: 'Ось вітальна конфігурація',
        channel: 'Канал для привітання:',
        bg_img: 'Фонове зображення:',
        see_embed_img: 'Перегляньте зображення вставки',
        img_enabled: 'Зображення привітання увімкнено:',
        yes: 'Так',
        no: 'Ні',
        enabled: 'Привітання увімкнено:',
        msg: 'Вітальне повідомлення:',
        defined_edited: 'Параметри, визначені в команді, змінено!',
        open_form: 'Натисніть кнопку, щоб відкрити модуль вікно для редагування вітального повідомлення.',
        show_form: 'Показати модуль',
        change_msg: 'Змінити вітальне повідомлення',
        msg: 'Вітальне повідомлення',
        draft: 'Проєкт і значення',
        vars: [
            'Ось усі змінні, які можна використовувати у вітальному повідомленні:\n\n{guild.name}: Ім’я сервера | Приклад: "',
            '"\n {guild.id}: ID сервера | Приклад: "',
            '"\n {guild.icon}: значок сервера в URL | Приклад: "',
            '"\n\n {member.name}: Псевдонім користувача | Приклад: "',
            '"\n{member.id}: Ідентифікатор користувача | Приклад: "',
            '"(щоб згадати його: "<@{member.id}>")\n{member.tag}: тег користувача | Приклад: "',
            '"\n{member.avatar}: аватар користувача | Приклад: "',
            '"\n{member.createdAt}: Мітка часу створення облікового запису користувача | Приклад: "',
            '" (щоб поставити "...днів тому": "<t:{member.createdAt}:R>" і для "...": "<t:{member.createdAt}>")'
        ],
        msg_changed: 'Вітальне повідомлення визначено!\nВи можете скористатися командою `/config welcome get`, щоб побачити це.',
        ping30: 'Veuillez mentionner un rôle pour effectuer l\'action (vous avez 30 secondes)',
        noping: 'Le message ne contient pas de role mentionné... Veuillez réessayer.',
        timeout: 'Les 30 secondes sont écoulés ! Je n\'ai pas reçu de message contenant une mention de role...',
        alreadyauto: 'Le role est déjà un role automatique !',
        nowautorole: 'Le role spécifié est maintenant un role automatique !',
        notauto: 'Le role n\'est pas un role automatique !',
        anymoreauto: 'Le role spécifié n\'est plus un role automatique désormais !'
    },
    ticket: {
        this_channel: 'Квиток створено на цьому каналі!',
        open_ticket: 'Відкрити квиток',
        created: [
            'Ваш квиток створено',
            '!'
        ],
        here: 'ось ваш квиток!',
        from: 'Квиток на',
        for: 'Причина:',
        close: 'Закрити квиток',
        closing: 'Закриття квитка через 3 секунди...',
        closed: 'Ось і ми! Квиток закрито!',
        closed_by: [
            'Квиток закрито',
            'Що ви хочете робити?'
        ],
        author: 'Автор квитка',
        reopen: 'Повторно відкрити квиток',
        delete: 'Видалити квиток',
        reopen_by: 'Квиток повторно відкрито',
        reopened: 'Квиток знову відкривається!',
        deleting: 'Видалення квитка через 5 секунд...',
        deleted_by: 'Квиток видалено'
    },
    modals: {
        limit: `Ви досягли ліміту в 5 форм для серверів не преміум-класу (або 25, якщо ваш сервер преміум-класу)!\n${ infos.premium }`,
        already_exists: [
            'Модуль з назвою',
            'вже існує!'
        ],
        created: [
            'Було створено новий модуль варіант із назвою',
            '!\nДодайте поля за допомогою команди </modals edit field-add:0>!'
        ],
        deleted: [
            'Модуль',
            'було видалено!'
        ],
        no_field: 'Без полів. Додайте трохи за допомогою команди </modals edit field-add:0>!',
        no_forms: 'На цьому сервері немає модулів!\nДодайте їх за допомогою команди </modals create:0>',
        here: 'Ось і всі модулі зі своїми полями!',
        type: 'Тип:',
        short: 'короткий',
        long: 'довгий',
        required: 'Необхідно:',
        yes: 'так',
        no: 'ні',
        min: 'Мінімум:',
        max: 'Максимум:',
        placeholder: 'Заповнювач:',
        no_modal: [
            'Без модуля з назвою',
            'знайдено!'
        ],
        number: 'Номер:',
        one_form: 'Ось поля модуля',
        no_field_: 'У цьому модулі немає полів!',
        no_modal_: 'Немає модуля з такою назвою!',
        open_modal: 'Відкрити модуль',
        sended: 'Модуль надіслано!',
        name_changed: [
            'Назву модуля',
            'було змінено на',
            '!\n\n**Використайте команду </modals send:0> знову, щоб оновити кнопку**'
        ],
        no_field_with_num: [
            'Немає поля з номером',
            'було знайдено...'
        ],
        deleted: 'Поле видалено!',
        field_added: 'Поле додано!',
        was_deleted: 'Запитуваний модуль був видалений або більше не доступний.',
        no_field_to_write: 'Модуль було змінено, і більше немає полів для заповнення!',
        deleted: 'Тим часом модуль було видалено... Або це ненормальна помилка :(',
        was_sended: 'Ваш модуль надіслано!',
        not_specified: 'Додаткове поле не заповнене користувачем',
        to_log: [
            'Користувач',
            'щойно надіслав модуль'
        ]
    },
    guildCreate: {
        pop: 'Поп!',
        tips: 'Дякую, що додали мене на цей сервер!\nОсь кілька порад, якими ви можете скористатися, щоб розпочати роботу:\n- Налаштуйте бота за допомогою команди `/config`\n- Створіть квитки за допомогою команди `/tickets`\n- Створіть модулі за допомогою команди `/modals`\n\nІ це лише мала частина всіх функцій бота!\n\nВи також можете переглянути інформаційну панель бота тут: **https://www.zygocraft.com/dashboard** або приєднатися до нашого серверу Discord, натиснувши кнопку нижче.',
        join_discord: 'Приєднатися до нашого серверу Discord'
    },
    messageCreate: {
        uptime: 'Я в онлайні з',
        url_content: 'Вміст повідомлення URL'
    },
    credits: {
        info: 'AutoTask — корисний бот для створення автоматизації на вашому сервері. Це також дозволяє створювати розіграші, квитки тощо...',
        devs: 'Розробники:',
        thx: 'Подяка:',
        translators: 'Перекладачі',
        staff: 'Персонал'
    },
    help: { goto: 'Ви знайдете необхідну допомогу на нашій сторінці довідки за посиланням нижче:' },
    role: {
        unexisting: 'Потрібну роль видалено!',
        has: 'Ця кнопка доступна лише для «додавання ролі», і у вас уже є роль!',
        added: [
            'Ось вам! <@&',
            '> роль додано до ваших ролей!'
        ],
        hasnt: 'Ця кнопка лише видаляє ролі, і ви не маєте ролі!',
        removed: [
            'Ось вам! <@&',
            '> роль видалена з ваших ролей!'
        ]
    },
    counter: {
        no: 'На цьому сервері немає лічильників!',
        cntrs: 'Лічильники на цьому сервері',
        counter: 'лічильник',
        limit: 'Ви досягли ліміту в 5 лічильників для цього сервера! Якщо вам потрібно більше лічильників, спробуйте AutoTask premium.',
        invalid: 'Формат не містить `{count}`. Його буде замінено реальним підрахунком. Спробуйте ще раз, але додайте це у форматі.',
        already: 'Цей канал вже є лічильником! Спочатку видаліть його за допомогою команди `/counter remove`, а потім повторно скористайтеся цією командою.',
        created: 'Створено новий лічильник!\nЛічильники оновлюються кожні 10 хвилин (щоб уникнути обмеження швидкості).',
        notcounter: 'Цей канал не є лічильником! Отримайте всі лічильники за допомогою команди `/counter get`.',
        removed: 'Цей канал більше не лічильник!'
    },
    reactionrole: {
        invalid: 'Я не можу дати цю роль, тому що моя роль під цією роллю. Будь ласка, перемістіть мою роль угору, щоб переконатися, що я можу давати ролі.',
        done: 'Роль реакції створена!'
    },
    privateroom: {
        current: 'Поточна конфігурація приватної кімнати',
        chn: 'Канал приватної кімнати:',
        notconfig: 'не налаштовано',
        enabled: 'Увімкнено:',
        yes: 'так',
        no: 'ні',
        permanent: 'Постійні канали:',
        noperm: 'немає постійних каналів',
        setchan: 'Канал приватних кімнат тепер налаштовано на',
        setenabled: 'Система приватної кімнати зараз',
        already: 'Цей канал вже постійний!',
        permadd: 'Додано новий постійний канал! Перевірте весь список за допомогою команди `/privateroom get`!',
        notperm: 'Цей канал не є постійним. Ви не можете видалити це!',
        removed: 'Постійний канал видалено!',
        notconfirm: 'Підтвердження на false, я не скидаю постійні канали.',
        reset: 'Усі постійні канали тепер ефемерні! (коли хтось залишає один із цих каналів і є порожні, вони видаляються. Якщо ви не хочете, щоб вони були видалені, додайте їх до постійних каналів)',
        enabled: 'увімкнено',
        disabled: 'вимкнено'
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