const MESSAGES = {
    COMMANDS: {
        CONFIGURATION: {
            AUTHCHANNEL: {
                name: 'authchannel',
                aliases: ['authchannel'],
                category: 'configuration',
                description: 'Définis le salon qui recevra le message de vérification pour entrer dans le serveur',
                cooldown: 120,
                usage: 'exemple: **?authchannel <id_du_salon>**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            AUTHIMAGE: {
                name: 'authimage',
                aliases: ['authimage'],
                category: 'configuration',
                description: 'Définis une image différente pour le message de bienvenue',
                cooldown: 120,
                usage: 'exemple: **?authimage https://cdn.discordapp.com/attachments/650256233542189056/813809378327003176/hello.gif**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            AUTHMESSAGE: {
                name: 'authmessage',
                aliases: ['authmessage'],
                category: 'configuration',
                description: 'Définis une image différente pour le message de bienvenue',
                cooldown: 120,
                usage: 'exemple: **?authmessage Bienvenue sur.... Veuillez réagir ci-dessous pour accéder au reste du serveur**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            AUTHROLE: {
                name: 'authrole',
                aliases: ['authrole', ],
                category: 'configuration',
                description: 'Enregistre l\ID du Rôle \'Vérifié\'',
                cooldown: 120,
                usage: 'exemple: **?authrole 809197368267898931**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            LOGSCHANNEL: {
                name: 'setlogs',
                aliases: ['setuplogs', 'slogs', 'lsetup'],
                category: 'configuration',
                description: 'Enregistre l\ID du Channel souhaité pour les Logs',
                cooldown: 120,
                usage: 'exemple: **?logs 809197368267898931**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            MUTECHANNEL: {
                name: 'setmute',
                aliases: ['setupmute', 'smute', 'msetup'],
                category: 'configuration',
                description: 'Enregistre l\ID du Channel souhaité pour les personnes mute, assurez vous que le role `muted` se trouve au dessus des rôles que vous souhaitez rendre muet, pour le créer faîtes ?mute une première fois.**',
                cooldown: 120,
                usage: 'exemple: **?setMute 809197368267898931**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
        },
        GAMES: {
            DICE: {
                name: 'dice',
                aliases: ['dé', 'de', '421'],
                category: 'games',
                description: 'Lance 3 dé aléatoirement',
                cooldown: 10,
                usage: '',
                permissions: false,
                args: false,
            },
        },
        MISCELLANEOUS: {
            SAY: {
                name: 'say',
                aliases: ['repeat', 'rep'],
                category: 'miscellaneous',
                description: 'Répète le message d\'un utilisateur',
                cooldown: 30,
                usage: 'exemple: **?say Hello World**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            PING: {
                name: 'ping',
                aliases: ['ping'],
                category: 'miscellaneous',
                description: 'Renvoie le ping de la personne executant la commande',
                cooldown: 30,
                usage: '',
                isUserAdmin: false,
                permissions: false,
                args: false,
            },
            HELP: {
                name: 'help',
                aliases: ['help'],
                category: 'miscellaneous',
                description: 'Vous envoie toute l\'aide nécessaire de toutes les commandes disponibles avec le bot 蛇喰 夢子, mais ça tu le sais déjà ^^',
                cooldown: 10,
                usage: 'exemple: **?say Hello World**',
                isUserAdmin: false,
                permissions: true,
                args: false,
            },
        },
        MODERATION: {
            BAN: {
                name: 'ban',
                aliases: ['ban'],
                category: 'moderation',
                description: 'Banni l\'utilisateur mentionné',
                cooldown: 1,
                usage: 'exemple: **?ban @user**',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },
            KICK: {
                name: 'kick',
                aliases: ['kick'],
                category: 'moderation',
                description: 'Kick un utilisateur mentionné',
                cooldown: 1,
                usage: 'exemple: **?kick @user**',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },
            MUTE: {
                name: 'mute',
                aliases: ['mute'],
                category: 'moderation',
                description: 'Mute un utilisateur mentionné',
                cooldown: 1,
                usage: 'exemple: **?mute @user <time> <reason>**',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },
            PRUNE: {
                name: 'prune',
                aliases: ['prune', 'uclear'],
                category: 'moderation',
                description: 'Supprime un nombre spécifié de messages sur un utilisateur précis dans le salon où la commande est réalisée',
                cooldown: 5,
                usage: 'exemple: **?prune <amount> <user_id>**',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },
            PURGE: {
                name: 'purge',
                aliases: ['purge', 'clear'],
                category: 'moderation',
                description: 'Supprime un nombre spécifié de messages dans le salon où la commande est réalisée',
                cooldown: 5,
                usage: 'exemple: **?purge <amount>**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            UNBAN: {
                name: 'unban',
                aliases: ['unban'],
                category: 'moderation',
                description: 'Débanni l\'utilisateur mentionné',
                cooldown: 1,
                usage: 'exemple: **?unban <user_id>**',
                isUserAdmin: false,
                permissions: true,
                args: true,
            },
            UNMUTE: {
                name: 'unmute',
                aliases: ['unmute'],
                category: 'moderation',
                description: 'Démute un utilisateur mentionné',
                cooldown: 1,
                usage: 'exemple: **?unmute @user <time> <reason>**',
                isUserAdmin: true,
                permissions: true,
                args: true,
            },
        },
        REACTIONS: {
            AUTH: {
                name: 'auth',
                aliases: ['auth', 'auth'],
                category: 'reactions',
                description: 'Envoie un message de vérification avec une réaction sur le serveur',
                cooldown: 10,
                usage: 'exemple: **?authmessage **',
                isUserAdmin: false,
                permissions: true,
                args: false,
            },
        },
    }
}

exports.MESSAGES = MESSAGES