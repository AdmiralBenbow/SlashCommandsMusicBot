const { joinVoiceChannel, createAudioPlayer, createAudioResource, getVoiceConnection } = require('@discordjs/voice');
const radyo = {
    alem    : "http://scturkmedya.radyotvonline.com/stream/80/",
    cnnturk : "https://radiomap.eu/tr/play/cnn-turk",
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/",
    line    : "http://radioline.fm:8000/",
    JoyFm    : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3",
    fenomenturk : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
    show:   "http://46.20.3.229/",
    taksimclup: "http://cast1.taksim.fm:8016",
    eksen: "https://radioeksen.com/",
    acik: "https://acikradyo.com.tr/",
    superfm: "https://20133.live.streamtheworld.com/SUPER_FM_SC?/",
    slowturk: "https://radyo.duhnet.tv/ak_dtvh_slowturk?/",
    efkar: "https://playerservices.streamtheworld.com/api/livestream-redirect/SC008_SO1_SC?/"
}
module.exports = {
    name: "radyo",
    description: 'Radyo açmanızı sağlar',
    option: [
        {
            name: 'istasyon',
            description: 'Çalacağın radyo kanalı seç',
            type: 'string',
            require: true,
            choices: [ //seçenek 
                { name: 'alem', value: 'alemfm' },
              {name: 'Kral Pop', value: 'kralpop'},
              {name: 'LineFM', value: 'linefm'},
              {name: 'JoyFM', value: 'joyfm'},
              {name: 'Show', value: 'show'},
              {name: 'Slow Türk',value: 'slowturk'},
              {name: 'EfkarFM', value: 'efkarfm'}

             //code by viniel
              
              ],
          
        },
        {
            name:"bitir",
            description:"Çalan radyoyu sonlandırırsınız.",
            type:"string",
            require: false,
            choices: [
                {
                    name: 'bitir',
                    value: 'tmm'
                }
            ],
        },
      
    ],
	async execute(client, interaction) { //Kendi handlerinizde uyarlayın bu kısmı 

//alttakilere dokunmayın eğer sizde interaction.reply değil ise büyük ihtimal interaction.followUp olabilir.

if (!interaction.member.voice.channel) return interaction.reply("**Sana bağlanmam için ilk önce sesli bir kanala katılmalısın.**")
let channel = interaction.member.voice.channel;
const connection = joinVoiceChannel({
   channelId: channel.id,
   guildId: channel.guild.id,
   adapterCreator: channel.guild.voiceAdapterCreator,
   selfDeaf: false
})


console.log("asd");


      var seçenek = interaction.options._hoistedOptions[0].value
  
        if (seçenek === 'alemfm') {

        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.alem)

    await player.play(resource);
    connection.subscribe(player);
   interaction.reply("AlemFM Çalıyor 🎧")
    
      //codeshare.me

    } else if (seçenek === "kralpop") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.kralpop)

    await player.play(resource);
    connection.subscribe(player);
    interaction.reply("KralPop Çalıyor 🎧")

//codeshare ekibi
   
    } else if (seçenek === "linefm") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.line)

    await player.play(resource);
    connection.subscribe(player);
    interaction.reply("LineFM Çalıyor 🎧")  //code by viniel
      
    
    } else if (seçenek === "joyfm") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.JoyFm)

    await player.play(resource);
    connection.subscribe(player);
    interaction.reply("JoyFM Çalıyor 🎧") //code by viniel
      
      
    } else if (seçenek === "show") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.show)

    await player.play(resource);
    connection.subscribe(player);
    interaction.reply("Show Çalıyor 🎧") //code by viniel
      
      
      
    } else if (seçenek === "slowturk") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.slowturk)

    await player.play(resource);
    connection.subscribe(player);
    interaction.reply("Slow Türk Çalıyor 🎧") //code by viniel
      
      
    } else if (seçenek === "efkarfm") {
        const player = createAudioPlayer();
    const resource = createAudioResource(radyo.efkar)

    await player.play(resource);
    connection.subscribe(player);
    interaction.reply("EfkarFM Çalıyor 🎧") //code by viniel 
      
      
    } else if (seçenek === "tmm") {
    getVoiceConnection(`${interaction.guild.id}`).disconnect();
    interaction.reply("Başarılı! Ses kanalından ayrıldım")

    }
}
}