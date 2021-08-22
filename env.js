module.exports = useEnv;

var env = {
    META_TITLE: process.env.META_TITLE,
    META_DESCRIPTION: process.env.META_DESCRIPTION,
    META_AUTHOR: process.env.META_AUTHOR,
    THEME: process.env.THEME,
    FAVICON_URL: process.env.FAVICON_URL,
    AVATAR_URL: process.env.AVATAR_URL,
    AVATAR_ALT: process.env.AVATAR_ALT,
    AVATAR_2X_URL: process.env.AVATAR_2X_URL,
    NAME: process.env.NAME,
    BIO: process.env.BIO,
    GITHUB: process.env.GITHUB,
    TWITTER: process.env.TWITTER,
    MASTODON: process.env.MASTODON,
    MICRO_BLOG: process.env.MICRO_BLOG,
    INSTAGRAM: process.env.INSTAGRAM,
    FACEBOOK: process.env.FACEBOOK,
    FACEBOOK_MESSENGER: process.env.FACEBOOK_MESSENGER,
    LINKED_IN: process.env.LINKED_IN,
    YOUTUBE: process.env.YOUTUBE,
    DISCORD: process.env.DISCORD,
    TWITCH: process.env.TWITCH,
    PRODUCT_HUNT: process.env.PRODUCT_HUNT,
    SNAPCHAT: process.env.SNAPCHAT,
    SPOTIFY: process.env.SPOTIFY,
    REDDIT: process.env.REDDIT,
    MEDIUM: process.env.MEDIUM,
    PINTEREST: process.env.PINTEREST,
    TIKTOK: process.env.TIKTOK,
    EMAIL: process.env.EMAIL,
    EMAIL_TEXT: process.env.EMAIL_TEXT,
    EMAIL_ALT: process.env.EMAIL_ALT,
    EMAIL_ALT_TEXT: process.env.EMAIL_ALT_TEXT,
    SOUND_CLOUD: process.env.SOUND_CLOUD,
    FIGMA: process.env.FIGMA,
    KIT: process.env.KIT,
    TELEGRAM: process.env.TELEGRAM,
    TUMBLR: process.env.TUMBLR,
    STEAM: process.env.STEAM,
    VIMEO: process.env.VIMEO,
    WORDPRESS: process.env.WORDPRESS,
    GOODREADS: process.env.GOODREADS,
    SKOOB: process.env.SKOOB,
    LETTERBOXD: process.env.LETTERBOXD,
    FOOTER: process.env.FOOTER,

}

function useEnv(document) {
    console.log(env);
    var metalTitleEl = document.getElementById('meta-title');
    if (env.META_TITLE) {
        metalTitleEl.textContent = env.META_TITLE;
    } else {
        metalTitleEl.remove()
    }

    var metalDescriptionEl = document.getElementById('meta-description');
    if (env.META_DESCRIPTION) {
        metalDescriptionEl.content = env.META_DESCRIPTION;
    } else {
        metalDescriptionEl.remove()
    }

    var metaAuthorEl = document.getElementById('meta-author');
    if (env.META_AUTHOR) {
        metaAuthorEl.content = env.META_AUTHOR;
    } else {
        metaAuthorEl.remove()
    }

    var themeEl = document.getElementById('theme');
    if (env.THEME && env.THEME.toLocaleLowerCase() === 'dark') {
        themeEl.href = 'css/skeleton-dark.css';
    } else {
        themeEl.href = 'css/skeleton-light.css';
    }

    var faviconEl = document.getElementById('favicon');
    if (env.FAVICON_URL) {
        faviconEl.href = env.FAVICON_URL;
    }

    var avatarEl = document.getElementById('avatar');
    if (env.AVATAR_URL) {
        avatarEl.src = env.AVATAR_URL;
        avatarEl.alt = env.AVATAR_ALT;
        avatarEl.srcset = env.AVATAR_2X_URL + ' 2x';
    } else {
        avatarEl.remove()
    }

    var nameEl = document.getElementById('name');
    if (env.NAME) {
        nameEl.innerHTML = env.NAME;
    } else {
        nameEl.remove()
    }

    var bioEl = document.getElementById('bio');
    if (env.BIO) {
        bioEl.innerHTML = env.BIO;
    } else {
        bioEl.remove()
    }

    var githubEl = document.getElementById('github');
    if (env.GITHUB) {
        githubEl.href = env.GITHUB;
    } else {
        githubEl.nextElementSibling.remove()
        githubEl.remove()
    }

    var twitterEl = document.getElementById('twitter');
    if (env.TWITTER) {
        twitterEl.href = env.TWITTER;
    } else {
        twitterEl.nextElementSibling.remove()
        twitterEl.remove()
    }

    var mastodonEl = document.getElementById('mastodon');
    if (env.MASTODON) {
        mastodonEl.href = env.MASTODON;
    } else {
        mastodonEl.nextElementSibling.remove()
        mastodonEl.remove()
    }

    var microblogEl = document.getElementById('microblog');
    if (env.MICRO_BLOG) {
        microblogEl.href = env.MICRO_BLOG;
    } else {
        microblogEl.nextElementSibling.remove()
        microblogEl.remove()
    }

    var instagramEl = document.getElementById('instagram');
    if (env.INSTAGRAM) {
        instagramEl.href = env.INSTAGRAM;
    } else {
        instagramEl.nextElementSibling.remove()
        instagramEl.remove()
    }

    var facebookEl = document.getElementById('facebook');
    if (env.FACEBOOK) {
        facebookEl.href = env.FACEBOOK;
    } else {
        facebookEl.nextElementSibling.remove()
        facebookEl.remove()
    }

    var facebookMessengerEl = document.getElementById('facebook-messenger');
    if (env.FACEBOOK_MESSENGER) {
        facebookMessengerEl.href = env.FACEBOOK_MESSENGER;
    } else {
        facebookMessengerEl.nextElementSibling.remove()
        facebookMessengerEl.remove()
    }


    var linkedInEl = document.getElementById('linkedin');
    if (env.LINKED_IN) {
        linkedInEl.href = env.LINKED_IN;
    } else {
        linkedInEl.nextElementSibling.remove()
        linkedInEl.remove()
    }


    var youTubeEl = document.getElementById('youtube');
    if (env.YOUTUBE) {
        youTubeEl.href = env.YOUTUBE;
    } else {
        youTubeEl.nextElementSibling.remove()
        youTubeEl.remove()
    }


    var discordEl = document.getElementById('discord');
    if (env.DISCORD) {
        discordEl.href = env.DISCORD;
    } else {
        discordEl.nextElementSibling.remove()
        discordEl.remove()
    }


    var twitchEl = document.getElementById('twitch');
    if (env.TWITCH) {
        twitchEl.href = env.TWITCH;
    } else {
        twitchEl.nextElementSibling.remove()
        twitchEl.remove()
    }

    var productHunEl = document.getElementById('producthunt');
    if (env.PRODUCT_HUNT) {
        productHunEl.href = env.PRODUCT_HUNT;
    } else {
        productHunEl.nextElementSibling.remove()
        productHunEl.remove()
    }

    var snapchatEl = document.getElementById('snapchat');
    if (env.SNAPCHAT) {
        snapchatEl.href = env.SNAPCHAT;
    } else {
        snapchatEl.nextElementSibling.remove()
        snapchatEl.remove()
    }

    var spotifyEl = document.getElementById('spotify');
    if (env.SPOTIFY) {
        spotifyEl.href = env.SPOTIFY;
    } else {
        spotifyEl.nextElementSibling.remove()
        spotifyEl.remove()
    }

    var redditEl = document.getElementById('reddit');
    if (env.REDDIT) {
        redditEl.href = env.REDDIT;
    } else {
        redditEl.nextElementSibling.remove()
        redditEl.remove()
    }


    var mediumEl = document.getElementById('medium');
    if (env.MEDIUM) {
        mediumEl.href = env.MEDIUM;
    } else {
        mediumEl.nextElementSibling.remove()
        mediumEl.remove()
    }


    var pinterestEl = document.getElementById('pinterest');
    if (env.PINTEREST) {
        pinterestEl.href = env.PINTEREST;
    } else {
        pinterestEl.nextElementSibling.remove()
        pinterestEl.remove()
    }

    var tiktokEl = document.getElementById('tiktok');
    if (env.TIKTOK) {
        tiktokEl.href = env.TIKTOK;
    } else {
        tiktokEl.nextElementSibling.remove()
        tiktokEl.remove()
    }

    var emailEl = document.getElementById('email');
    if (env.EMAIL) {
        emailEl.innerHTML = env.EMAIL_TEXT || env.EMAIL
        emailEl.href = 'mailto:' + env.EMAIL;
    } else {
        emailEl.nextElementSibling.remove()
        emailEl.remove()
    }


    var emailAltEl = document.getElementById('email-alt');
    if (env.EMAIL_ALT) {
        emailAltEl.innerHTML = env.EMAIL_ALT_TEXT || env.EMAIL_ALT
        emailAltEl.href = 'mailto:' + env.EMAIL_ALT;
    } else {
        emailAltEl.nextElementSibling.remove()
        emailAltEl.remove()
    }

    var soundCloudEl = document.getElementById('soundcloud');
    if (env.SOUND_CLOUD) {
        soundCloudEl.href = env.SOUND_CLOUD;
    } else {
        soundCloudEl.nextElementSibling.remove()
        soundCloudEl.remove()
    }


    var figmaEl = document.getElementById('figma');
    if (env.FIGMA) {
        figmaEl.href = env.FIGMA;
    } else {
        figmaEl.nextElementSibling.remove()
        figmaEl.remove()
    }


    var kitEl = document.getElementById('kit');
    if (env.KIT) {
        kitEl.href = env.KIT;
    } else {
        kitEl.nextElementSibling.remove()
        kitEl.remove()
    }


    var telegramEl = document.getElementById('telegram');
    if (env.TELEGRAM) {
        telegramEl.href = env.TELEGRAM;
    } else {
        telegramEl.nextElementSibling.remove()
        telegramEl.remove()
    }

    var temblrEl = document.getElementById('tumblr');
    if (env.TUMBLR) {
        temblrEl.href = env.TUMBLR;
    } else {
        temblrEl.nextElementSibling.remove()
        temblrEl.remove()
    }


    var steamEl = document.getElementById('steam');
    if (env.STEAM) {
        steamEl.href = env.STEAM;
    } else {
        steamEl.nextElementSibling.remove()
        steamEl.remove()
    }


    var vimeoEl = document.getElementById('vimeo');
    if (env.VIMEO) {
        vimeoEl.href = env.VIMEO;
    } else {
        vimeoEl.nextElementSibling.remove()
        vimeoEl.remove()
    }


    var wordpressEl = document.getElementById('wordpress');
    if (env.WORDPRESS) {
        wordpressEl.href = env.WORDPRESS;
    } else {
        wordpressEl.nextElementSibling.remove()
        wordpressEl.remove()
    }

    var goodreadsEl = document.getElementById('goodreads');
    if (env.GOODREADS) {
        goodreadsEl.href = env.GOODREADS;
    } else {
        goodreadsEl.nextElementSibling.remove()
        goodreadsEl.remove()
    }

    var skoobEl = document.getElementById('skoob');
    if (env.SKOOB) {
        skoobEl.href = env.SKOOB;
    } else {
        skoobEl.nextElementSibling.remove()
        skoobEl.remove()
    }

    var letterboxdEl = document.getElementById('letterboxd');
    if (env.LETTERBOXD) {
        letterboxdEl.href = env.LETTERBOXD;
    } else {
        letterboxdEl.nextElementSibling.remove()
        letterboxdEl.remove();
    }

    var footerEl = document.getElementById('footer');
    if (env.FOOTER) {
        footerEl.innerHTML = env.FOOTER;
    } else {
        footerEl.remove()
    }

    return document;
}


