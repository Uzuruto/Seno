const { Client, Util, MessageEmbed } = require("discord.js");
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
require("dotenv").config();
require("./server.js");
const bot = new Client({
  disableMentions: "all"
});
const client = new Client({
  disableMentions: "all"
});
const PREFIX = process.env.PREFIX;
const youtube = new YouTube(process.env.YTAPI_KEY);
const queue = new Map();
bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () => {
  console.log(`[READY] ${bot.user.tag} has been successfully booted up!`)
  const status = [`${bot.users.cache.size} Users || *help `]
  setInterval(() => bot.user.setActivity(status[Math.floor(Math.random() * status.length)], {type: "WATCHING"}), 10000)
  
  bot.user.setStatus("dnd"); 

console.log(`
[READY] ${bot.user.tag} has been successfully booted up!
${bot.users.cache.size} user's!
`);//online, dnd
});
  
  // prevent force disconnect affecting to guild queue
bot.on("voiceStateUpdate", (mold, mnew) => {
  if (!mold.channelID) return;
  if (!mnew.channelID && bot.user.id == mold.id) {
    const serverQueue = queue.get(mold.guild.id);
    if (serverQueue) queue.delete(mold.guild.id);
  }
});

bot.on("message", async message => {
  if (message.author.bot) return;
   let msg = message.content.toLowerCase();
  
  if (msg == `<@${bot.user.id}>` || msg == `<@!${bot.user.id}>`) {
        message.channel.send(`Hi **${message.author.username}**, My current prefix is: **\`*\`**`);
    }
}); 


bot.on("message", async message => {
  // eslint-disable-line
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;

  const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
  const searchString = args.slice(1).join(" ");
  const url = args[1] ? args[1].replace(/<(.+)>/g, "$1") : "";
  const serverQueue = queue.get(message.guild.id);

  const command = args.shift().toLowerCase();

  if (command == "invite" || command == "inv") {
    message.channel.send({
      embed: {
        description:
          "Bot invite link is [Here](https://discord.com/oauth2/authorize?client_id=750625570563424307&scope=bot&permissions=1110584646)"
      }
    });
  }
  bot.on('message', async message => {
         const swearWords = ['help me','i need help','can someone help me?,please can someone help me','please help me','guys help']
          if(swearWords.some(word => message.content.includes(word)) ) {
const embed = new MessageEmbed()
.setColor('GREEN')
.setDescription("Want help?,dm a staff or the owner,Want help with the bot?,type '*help or *cmd'")
           message.member.send(embed)
         }})
       if(command === "cute" ) {
const embed = new MessageEmbed()               
                .setDescription("Im so cute")
                .setTitle('UwU')
 
                .setTimestamp()
                .setImage('https://media.giphy.com/media/BejdfvEt6eoV2/giphy.gif')
            message.channel.send(embed);
      }

 if (command === "introduction" || command === "int") {
    const helpembed = new MessageEmbed()
      .setColor("RANDOM")
.setDescription("Hello,my name is Seno,i was made in 10th september,thanks for using me!,also my owner is called Uzuruto,he's a youtuber that has more than 3500 subs,don't forget to vote for me if u like my work,i'll always be useful 😁")
      .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    message.channel.send(helpembed);
 };
    if (command === "blush") {
    
    var blush = [
  "https://cdn.weeb.sh/images/B14JM8Qw-.gif",
  "https://cdn.weeb.sh/images/B1jfzIXDZ.gif",
  "https://cdn.weeb.sh/images/rkXur1ncz.gif"
];
    var rand = blush[Math.floor(Math.random() * blush.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Blush! UwU**'`)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} Use gif command`)
  }
  if(command == "craft") {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Do it yourself,i dont have minecraft")
    message.channel.send(embed);
  }
  if(command == "mine") {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("nah i'll not do that u can do it yourself,why are u relying on me bad person :rage:  ")
    message.channel.send(embed);
  }
  if(command == "joke") {
    const embed = new MessageEmbed()
    .setColor("YELLOW")
    .setDescription("There's something called Google,u can google it")
    message.channel.send(embed);
  }
if(command == "restart") {
  if(!message.author.id == "548957986622799900" || message.author.id != "548957986622799900") return message.channel.send("You're not my owner");
  message.channel.send(":thumbsup: Restarting...").then(() => require("child_process").exec("refresh"));
}
  if (command === "stats" || command === "st") {
    message.channel.send(
      `**${bot.users.cache.size}** Users!\n**${bot.guilds.cache.size}** Servers!`
    );
  }
  if(command == "serverinfo") {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Server name: **${message.guild.name}**\nTotal members: **${message.guild.memberCount}**\nServer Owner: **${message.guild.owner}**\nRoles: **${message.guild.roles.cache.size}**`)
    message.channel.send(embed);
	}
    if(command == "server-info") {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`Server name: **${message.guild.name}**\nTotal members: **${message.guild.memberCount}**\nServer Owner: **${message.guild.owner}**\nRoles: **${message.guild.roles.cache.size}**`)
    message.channel.send(embed);
	}
  if (command === "test") {
    message.channel.send("i'm working sir.")
  }
  
  if (command == "meme" || command == "dankmeme" || command == "memes") {
  const randomPuppy = require('random-puppy');
        const subReddits = ["dankmeme", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Here's a meme,**memer** XD`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed);  
  }
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.hasPermission("ADMINISTRATOR")) {
return message.reply("Sorry, you don't have permissions to use this!");
}
      
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

  }

bot.on("message", async message => {
    if(message.author.bot || message.channel.type === "dm") return;


    //args system that is very required!!!!
    let messageArray = message.content.split(" ")
    let args = messageArray.slice(1);

    let cmd = messageArray[0];

    if(cmd === "*ban") {
        let toBan = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!")
        const reason = args[1] || "There was no reason!";

        toBan.ban({
            reason: reason
        })
        message.channel.send(`${toBan} has been banned from the server!\nReason: ${reason}`)
    }

    if(cmd === "*unban") {
        let toBan = await bot.users.fetch(args[0])

        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You need permissions!") 
        if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("Bot need permissions!") 

        const reason = args[1] || "There was no reason!";

        message.guild.members.unban(toBan, reason)

        message.channel.send(`${toBan} has been unbanned from the server!`)
    }

})
  if (command === "kiss") {
    
var hug = [
  "https://cdn.weeb.sh/images/SJ8I2Tuv-.gif",
  "https://cdn.weeb.sh/images/B1yv36_PZ.gif",
  "https://cdn.weeb.sh/images/rkFSiEedf.gif"
]
    var user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) {
      return message.reply("Tag someone")
    }
    var rand = hug[Math.floor(Math.random() * hug.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Kisses :kiss: ** ${user.username} :heart: '`)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} Use gif command`)
    
  }
   if (command === "bite") {
    
var bite = [
  "https://cdn.weeb.sh/images/rJAlbgXsb.gif",
  "https://cdn.weeb.sh/images/ByWuR1q1M.gif"
]
    var user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) {
      return message.reply("Tag someone")
    }
    var rand = bite[Math.floor(Math.random() * bite.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Bite** ${user.username} >_<  '`)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} Use gif command`)
    
  }
   if (command === "kill") {
    
var kill = [
  "https://cdn.weeb.sh/images/BJO2j1Fv-.gif",
  "https://cdn.weeb.sh/images/r11as1tvZ.gif",
  "https://cdn.weeb.sh/images/B1VnoJFDZ.gif",
  "https://cdn.weeb.sh/images/B1qosktwb.gif"
];
    var kata = [
      "OMG x_x",
      "oh my",
      "Savage!"
    ]
    var user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) {
      return message.reply("Tag someone")
    }
    var rand = kill[Math.floor(Math.random() * kill.length)]
        var say = kata[Math.floor(Math.random() * kata.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Killed** ${user.username} | ${say}`)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} Use gif command`)
  }
   if (command === "hug") {
    
var hug = [
  "https://cdn.weeb.sh/images/SyQ0_umD-.gif",
  "https://cdn.weeb.sh/images/H1ui__XDW.gif",
  "https://cdn.weeb.sh/images/BkFnJsnA-.gif"
]
    var user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) {
      return message.reply("Tag someone")
    }
    var rand = hug[Math.floor(Math.random() * hug.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Hug** ${user.username} UwU'`)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} Use gif command`)
    
  }
    if (command === "dance") {
    
var dance = [
  "https://cdn.weeb.sh/images/H1pi_I7Pb.gif",
  "https://cdn.weeb.sh/images/HyejRdLXvW.gif",
  "https://cdn.weeb.sh/images/S1HvWlF4M.gif"
];
    var rand = dance[Math.floor(Math.random() * dance.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Dance! :dancer: **'`)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} Use gif command`)
  }
   if(command === "clear") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.messages.fetch({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
    message.channel.send(`I cleared **${deleteCount}** message!`).then(m => m.delete({
      timeout: 5000
    }))
  }
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Pong");
    m.edit(`Pong! Your ping is ${m.createdTimestamp - message.createdTimestamp}ms. Bot's ping is ${Math.round(bot.ws.ping)}ms`);
  }
   if (command === "pat") {
    
    var cry = [
  "https://cdn.weeb.sh/images/H1s5hx0Bf.gif",
  "https://cdn.weeb.sh/images/B1SOzCV0W.gif",
  "https://cdn.weeb.sh/images/r1BlektwW.gif",
  "https://cdn.weeb.sh/images/BkaRWA4CZ.gif"
];
    var user = message.mentions.users.first() || client.users.cache.get(args[0]);
    if(!user) {
      return message.reply("Tag someone")
    }
    var rand = cry[Math.floor(Math.random() * cry.length)]
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`${message.author.username}'s **Pat** ${user.username} | UwU <3 `)
    .setImage(rand)
    message.channel.send(embed)
    console.log(`${message.author.username} use gif command`)
  }
if (command === "say") {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
if (command == "avatar" || command == "av") {
const user = message.mentions.users.first() || message.author;

    const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setAuthor(user.username + ' Avatar', user.displayAvatarURL())
.setImage(user.displayAvatarURL({ size: 4096, dynamic: true }))
.setDescription(`[Click here if the image not show](${user.displayAvatarURL()})`)
.setColor("RANDOM")

message.channel.send(embed)
  }

 if (command === "help" || command === "cmd") {
    const helpembed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle("**Prefix is** *")
    .setDescription(`Hi **${message.author.username}** I hope you're having a great time!`)
    .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .setDescription("* **helpmusic for music commands!**:notes: \n\n* **helpmod for moderation commands!**:red_circle: \n\n* **helpmemes for memes commands!**:rofl: \n\n* **helpfun for fun commands**:sweat_smile: \n\n* ** helpother for other commands** :star_struck: ")
        
    .addField("Bot's support server :computer:  ", "*Invite Link is*: [Here](https://discord.gg/ZTgcuhghBD)")

    .addField("Add the bot to your server! :robot:  ", "*Bot link is*: [Here](https://discord.com/oauth2/authorize?client_id=750625570563424307&scope=bot&permissions=1110584646)")
    .setTimestamp()   
    message.channel.send(helpembed);
    }
if (command == "helpmusic") {
  const helpembed1 = new MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Welcome back **${message.author.username}** I hope you're having a great time!`)
  .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
  .addField("**Music:notes:**", ` 
   \`join\`,\`play [title/url]\`
   \`search [title]\`,\`skip\`
   \`stop\`,\`pause\`
   \`nowplaying\`,\`queue\`
   \`volume\`,\`resume\``)
      .setTimestamp()   
  message.channel.send(helpembed1);
}
  if (command == "helpmod") {
  const helpembed2 = new MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Welcome back **${message.author.username}** I hope you're having a great time!`)
  .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
  .addField("**Moderation:red_circle:**", ` 
\`kick\`,\`ban\` 
\`warn\`,\`clear\`
\`mute\`,\`serverinfo\``)
      .setTimestamp()   
  message.channel.send(helpembed2);
}
    if (command == "helpmemes") {
  const helpembed3 = new MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Welcome back **${message.author.username}** I hope you're having a great time!`)
  .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .addField("Memes:rofl:",`
\`meme\`,\`memes\`,\`dankmeme\``)
      .setTimestamp()   
  message.channel.send(helpembed3);
}
      if (command == "helpfun") {
  const helpembed4 = new MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Welcome back **${message.author.username}** I hope you're having a great time!`)
  .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
.addField("Fun:sweat_smile:  ", `
\`kill\`,\`blush\`,\`mine\`
\`hug\`,\`bite\`,\`joke\`
\`kiss\`,\`dance\`,\`craft\`
\`pat\`,\`cute\`,\`say\``)
      .setTimestamp()   
  message.channel.send(helpembed4);
}
  
        if (command == "helpother") {
  const helpembed4 = new MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Welcome back **${message.author.username}** I hope you're having a great time!`)
  .setAuthor(bot.user.tag, bot.user.displayAvatarURL())
    .addField("Other Commands:star_struck:", `  
\`introduction\`,\`invite\`
\`stats\`,\`avatar\`
\`ping\``)
      .setTimestamp()   
  message.channel.send(helpembed4);
          
}
  
  
    if (command === "join" || command === "j") {
    const voiceChannel = message.member.voice.channel;
    var connection = await voiceChannel.join();
    message.reply("Succes join the voice channel")
  }
  if (command === "play" || command === "p") {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to play a music!"
            }
        });
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`CONNECT`** permission to proceed!"
                }
            });
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`SPEAK`** permission to proceed!"
                }
            });
        }
        if (!url || !searchString) return message.channel.send({
            embed: {
                color: "RED",
                description: "Please input link/title to play music"
            }
        });
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
                }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    var video = await youtube.getVideoByID(videos[0].id);
                    if (!video) return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  I could not obtain any search results"
                        }
                    });
                } catch (err) {
                    console.error(err);
                    return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  I could not obtain any search results"
                        }
                    });
                }
            }
            return handleVideo(video, message, voiceChannel);
        }
    }
    if (command === "search" || command === "sc") {
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to play a music!"
            }
        });
        const permissions = voiceChannel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`CONNECT`** permission to proceed!"
                }
            });
        }
        if (!permissions.has("SPEAK")) {
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: "Sorry, but I need a **`SPEAK`** permission to proceed!"
                }
            });
        }
        if (!url || !searchString) return message.channel.send({
            embed: {
                color: "RED",
                description: "Please input link/title to search music"
            }
        });
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `✅  **|**  Playlist: **\`${playlist.title}\`** has been added to the queue`
                }
            });
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    let embedPlay = new MessageEmbed()
                        .setColor("BLUE")
                        .setAuthor("Search results", message.author.displayAvatarURL())
                        .setDescription(`${videos.map(video2 => `**\`${++index}\`  |**  ${video2.title}`).join("\n")}`)
                        .setFooter("Please choose one of the following 10 results, this embed will auto-deleted in 15 seconds");
                    // eslint-disable-next-line max-depth
                    message.channel.send(embedPlay).then(m => m.delete({
                        timeout: 15000
                    }))
                    try {
                        var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
                            max: 1,
                            time: 15000,
                            errors: ["time"]
                        });
                    } catch (err) {
                        console.error(err);
                        return message.channel.send({
                            embed: {
                                color: "RED",
                                description: "The song selection time has expired in 15 seconds, the request has been canceled."
                            }
                        });
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return message.channel.send({
                        embed: {
                            color: "RED",
                            description: "🆘  **|**  I could not obtain any search results"
                        }
                    });
                }
            }
            response.delete();
            return handleVideo(video, message, voiceChannel);
        }

    } else if (command === "skip" || command === "s") {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to skip a music!"
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing that I could skip for you"
            }
        });
              serverQueue.connection.dispatcher.end("[runCmd] Skip command has been used");
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: "⏭️  **|**  Skipping..."
            }
        });

    } else if (command === "stop") {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry but you need to be in a voice channel to play music!"
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing that I could stop for you"
            }
        });
        serverQueue.songs = [];
              serverQueue.connection.dispatcher.end("[runCmd] Stop command has been used");
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: "⏹️  **|**  Deleting queues and stopping the song..."
            }
        });

    } else if (command === "volume" || command === "vol") {
        if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: "RED",
                description: "I'm sorry, but you need to be in a voice channel to set a volume!"
            }
        });
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
        if (!args[1]) return message.channel.send({
            embed: {
                color: "BLUE",
                description: `The current volume is: **\`${serverQueue.volume}%\`**`
            }
        });
        if (isNaN(args[1]) || args[1] > 100) return message.channel.send({
            embed: {
                color: "RED",
                description: "Volume only can be set in a range of **\`1\`** - **\`100\`**"
            }
        });
        serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolume(args[1] / 100);
        return message.channel.send({
            embed: {
                color: "GREEN",
                description: `I set the volume to: **\`${args[1]}%\`**`
            }
        });

    } else if (command === "nowplaying" || command === "np") {
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
        return message.channel.send({
            embed: {
                color: "BLUE",
                description: `🎶  **|**  Now Playing: **\`${serverQueue.songs[0].title}\`**`
            }
        });

    } else if (command === "queue" || command === "q") {

        let songsss = serverQueue.songs.slice(1)
        
        let number = songsss.map(
            (x, i) => `${i + 1} - ${x.title}`
        );
        number = chunk(number, 5);

        let index = 0;
        if (!serverQueue) return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
        let embedQueue = new MessageEmbed()
            .setColor("BLUE")
            .setAuthor("Song queue", message.author.displayAvatarURL())
            .setDescription(number[index].join("\n"))
            .setFooter(`• Now Playing: ${serverQueue.songs[0].title} | Page ${index + 1} of ${number.length}`);
        const m = await message.channel.send(embedQueue);

        if (number.length !== 1) {
            await m.react("⬅");
            await m.react("🛑");
            await m.react("➡");
            async function awaitReaction() {
                const filter = (rect, usr) => ["⬅", "🛑", "➡"].includes(rect.emoji.name) &&
                    usr.id === message.author.id;
                const response = await m.awaitReactions(filter, {
                    max: 1,
                    time: 30000
                });
                if (!response.size) {
                    return undefined;
                }
                const emoji = response.first().emoji.name;
                if (emoji === "⬅") index--;
                if (emoji === "🛑") m.delete();
                if (emoji === "➡") index++;

                if (emoji !== "🛑") {
                    index = ((index % number.length) + number.length) % number.length;
                    embedQueue.setDescription(number[index].join("\n"));
                    embedQueue.setFooter(`Page ${index + 1} of ${number.length}`);
                    await m.edit(embedQueue);
                    return awaitReaction();
                }
            }
            return awaitReaction();
        }

    } else if (command === "pause") {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: "⏸  **|**  Pausing..."
                }
            });
        }
        return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        
        });

    } else if (command === "resume" || command === "r") {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: "▶  **|**  Resuming..."
                }
            });
        }
        return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
    } else if (command === "loop" || command === "l") {
        if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Repeat mode is **\`${serverQueue.loop === true ? "enabled" : "disabled"}\`**`
                }
            });
        };
        return message.channel.send({
            embed: {
                color: "RED",
                description: "There is nothing playing"
            }
        });
    }
});

async function handleVideo(video, message, voiceChannel, playlist) {
    const serverQueue = queue.get(message.guild.id);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 100,
            playing: true,
            loop: false
        };
        queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`[ERROR] I could not join the voice channel, because: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: `I could not join the voice channel, because: **\`${error}\`**`
                }
            });
        }
    } else {
        serverQueue.songs.push(song);
        if (playlist) return;
        else return message.channel.send({
            embed: {
                color: "GREEN",
                description: `✅  **|**  **\`${song.title}\`** has been added to the queue`
            }
        });
    }
    return;
}

function chunk(array, chunkSize) {
    const temp = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        temp.push(array.slice(i, i + chunkSize));
    }
    return temp;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

 if (!song) {
        serverQueue.voiceChannel.leave();
        return queue.delete(guild.id);
    }

  
      const dispatcher = serverQueue.connection.play(ytdl(song.url))
        .on("finish", () => {
            const shiffed = serverQueue.songs.shift();
            if (serverQueue.loop === true) {
                serverQueue.songs.push(shiffed);
            };
            play(guild, serverQueue.songs[0]);
        })
        .on("error", error => console.error(error));
    dispatcher.setVolume(serverQueue.volume / 100);

      serverQueue.textChannel.send({
        embed: {
            color: "BLUE",
            description: `🎶  **|**  Start Playing: **\`${song.title}\`**`
        }
    });
}
  
var modBot = require('discord-moderator-bot')

modBot(process.env.BOT_TOKEN, process.env.PREFIX)



bot.login(process.env.BOT_TOKEN);

process.on("unhandledRejection", (reason, promise) => {
    try {
        console.error("Unhandled Rejection at: ", promise, "reason: ", reason.stack || reason);
    } catch {
        console.error(reason);
    }
});

process.on("uncaughtException", err => {
    console.error(`Caught exception: ${err}`);
    process.exit(1);
  });