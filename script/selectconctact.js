var discord = document.querySelector('ul .discord')
var email = document.querySelector('ul .e-mail')

var discord_show = document.querySelector('.avatar-dc');
var discord_show_nick = document.querySelector('.nickname-dc');
var email_show = document.querySelector('.avatar-email');
var email_show_nick = document.querySelector('.nickname-email');

discord.addEventListener("click", () => {

    discord_show.style.display = 'block';
    email_show.style.display = 'none';
    discord_show_nick.style.display = 'block';
    email_show_nick.style.display = 'none';
    discord.style.color = 'white';
    email.style.color = null;


    // discord_show.style.visibility = 'visible';
    // email_show.style.visibility = 'hidden';
    // discord_show_nick.style.visibility = 'visible';
    // email_show_nick.style.visibility = 'hidden';
});

email.addEventListener("click", () => {

    discord_show.style.display = 'none';
    email_show.style.display = 'block';
    discord_show_nick.style.display = 'none';
    email_show_nick.style.display = 'block';
    discord.style.color = null;
    email.style.color = 'white';

    // discord_show.style.visibility = 'hidden';
    // email_show.style.visibility = 'visible';
    // discord_show_nick.style.visibility = 'hidden';
    // email_show_nick.style.visibility = 'visible';
});