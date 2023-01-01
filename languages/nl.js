const language = {
    loadevent: "Speler event geladen",
    loadcmd: "Command geladen",
    ready: " successvol verbonden.",
    loadslash: "Applicatie [/] commando's succesvol herladen .",
    error1: "De Bot Token die je in je project hebt ingevoerd is onjuist of de 'Intents' van je Bot zijn UIT!",
    error2: "Stel de bot token in token.js of in je .env bestand in voor jou project!",
    loadclientevent: "Client event geladen",
    embed1: "Je moet de <@&{djRole}>(DJ) rol op deze server hebben ingesteld om dit commando te kunnen gebruiken. Gebruikers zonder deze rol kunnen de {cmdMAP} niet gebruiken",
    message1: "Je bent niet verbonden met een audiokanaal. ❌",
    message2: "Je zit niet in hetzelfde audiokanaal als ik. ❌",
    message3: "Ik mis permissie",
    msg4: "Er ging iets fout",
    msg5: "Er speelt momenteel geen muziek. ❌",
    msg6: "Bewaar muziek",
    msg7: "Schrijf de naam van de afspeellijst.",
    msg8: "Dit nummer wordt live gestreamd, geen gegevens om de duur ervan te geven. 🎧",
    msg9: "**✅ Succes:** Tijdstip bijgewerkt.",
    msg10: "Je hebt nog geen afspeellijst met deze naam. ❌",
    msg11: "Deze muziek staat al in deze afspeellijst. ❌",
    msg12: "toegevoegd aan je muziek afspeellijst.",
   error3: "Error met laden van application [/] commands: ",
   error4: "WAARSCHUWING: Het ziet er naar uit dat je geen MongoDB URL hebt geschreven? Als je geen geldige mongodb url invult in het config.js bestand, zal je de bot niet kunnen gebruiken.",
   msg13: `🎵 Nu aan het spelen: **{track?.title}** -> Kanaal: **{queue?.connection.channel.name}** 🎧`,
   msg14: "De lijst is leeg. Je kunt nog wat muziek spelen, doei... ✅",
   msg15: "Ik heb de verbinding verbroken omdat er niemand meer in mijn kanaal is. ❌",
   msg16: "Ik heb problemen om verbinding te maken met het stem kanaal. Alsof iemand mijn verbinding verbroken heeft? Ik ben erg verdrietig. 😔",
   msg17: "Er is geen vorig nummer! ❌",
   msg18: "Nu aan het spelen **{queue.previousTracks[1].title}**. ✅",
   msg19: " Bot statistieken",
   msg20: "Hervers",
   msg21: "**Je tijd is om!**",
   msg22: "**✅ Gegevens bijgewerkt**",
   msg23: "De lijst is leeg. ❌",
   msg24: "De lijst is zojuist leeggemaakt. 🗑️",
   msg26: "Als je geen DJ rol specificeert, zul je het commando niet kunnen gebruiken!",
   msg25: "De DJ rol is succesvol ingesteld op <@&{role}>.",
   msg27: "De DJ rol is successvol verwijderd.",
   msg28: "De DJ rol is nog niet ingesteld.",
   msg29: `Voer een geldige filternaam in.❌\n{filters}`,
   msg30: `Ik kon geen filter vinden met die naam. ❌\n{filters}`,
   msg31: `Toegepast: **{filter}**, Filterstatus: **{status}** **Opgelet, als de muziek lang is, kan de filtertoepassingstijd dienovereenkomstig langer zijn.**`,
   msg32: "Het is tijd om naar muziek te luisteren op je discord server met een volledig gratis en geavanceerde interface. Muziek bot die het afspelen van muziek op vele platformen ondersteunt die je server een speciaal gevoel zal geven.",
   msg33: "Bot Commandos",
   msg34: "Je hebt hier al een actief commando. ❌",
   msg35: "Wachtrij",
   msg36: "Nu muziek aan het spelen",
   msg37: "Stop herhalen",
   msg38: "Herhaal Systeem",
   msg39: `**Hoe zit het met het maken van een keuze?**
   * **Queue:** Zet de wachtrij op herhalen.
   ** **Now Playing Music:** Herhaalt het huidige nummer.
   > **Close Loop:** Stop het herhalen.`,
   msg40: "wachtrij op herhalen modus",
   msg41: "Er is iets fout gegaan. ❌",
   msg42: "Nu spelende muziek met herhaal modus",
   msg43: "Herhaal modus is al inactief. ❌",
   msg44: `Herhaal modus **Gesloten** 🔁`,
   msg45: "Tijd is op",
   msg46: "Herhaal Systeem - Beéindigd",
   msg47: 'Bewaar afspeellijst',
   msg48: "muziek gepauseert! ✅",
   msg49: `Bericht Ping`,
   msg50: `Bericht Latency`,
   msg51: `API Latency`,
   msg52: `Er is geen afspeellijst. ❌`,
   msg53: `Je hebt geen toestemming om deze afspeellijst af te spelen. ❌`,
   msg54: `Je hebt nog geen muziek met deze naam. ❌`,
   msg55: `Ik kan je voicekanaal niet joinen. ❌`,
   msg56: `Afspeellijst geladen... ✅`,
   msg57: `<@{interaction.member.id}>, **{music_filter.length}** muzieknummers toegevoegd aan de wachtrij. ✅`,
   msg58: `Er is geen afspeellijst met deze naam. ❌`,
   msg59: `Schrijf de naam van het nummer dat u wilt zoeken. ❌`,
   msg60: `Geen resultaten gevonden! ❌`,
   msg61: "Muziek(s) laden... 🎧",
   msg62: "naamlijst toegevoegd aan de afspeellijst. ✅",
   msg63: `De wachtrij is leeg. ❌`,
   msg64: "Server Muziek Lijst",
   msg65: "Momenteel aan het spelen",
   msg66: "Aangevraagd door",
   msg67: "Pagina",
   msg68: `De commandoprocessor is geannuleerd. ✅`,
   msg69: `Server Muziek Lijst - Tijd is over!`,
   msg70: `Je tijd om dit commando te gebruiken is voorbij, je kunt \`/queue\` typen om het commando opnieuw te gebruiken.`,
   msg71: `Er is iets misgegaan. Het is alsof je nog nooit de muziek hebt gestopt.`,
   msg72: "Muzieknummer hervat! ✅",
   msg73: `Voer een geldige naam voor het liedje in. ❌`,
   msg74: `Geen zoekresultaten gevonden! ❌`,
   msg75: "Gezochte muziek",
   msg76: "Kies een nummer van **1** tot **{maxTracks.length}** ⬇️",
   msg77: `Muziek zoeken geannuleert. ✅`,
   msg78: `Laden... 🎧`,
   msg79: "Toegevoegd aan de wachtrij. ✅",
   msg80: `NUmmer zoektijd over ❌`,
   msg81: "Annuleren",
   msg82: `Het nummer dat u hebt ingevoerd is hoger dan het aantal nummers in de wachtrij. ❌`,
   msg83: "Nummer overgeslagen ✅",
   msg84: `Dit nummer wordt live gestreamd, geen gegevens over hoe lang dit nummer duurt om weer te geven. 🎧`,
   msg85: `Muziek gestopt. Tot de volgende keer. ✅`,
   msg86: "Update",
   msg87: `Huidig volume: **{queue.volume}** 🔊**Om het volume te veranderen, typ een getal tussen \`1\` en \`{maxVol}\.**`,
   msg88: `Het volume dat u wilt wijzigen is al het huidige volume ❌`,
   msg89: `**Typ een getal tussen \`1\` en \`{maxVol}\` om het volume te veranderen.** ❌`,
   msg90: "Volume bijgewerkt:",
   msg91: `Schrijf de naam van de afspeellijst die u wilt maken. ❌`,
   msg92: `Er bestaat al een afspeellijst met deze naam. ❌`, 
   msg93: `Je kunt niet meer dan 30 afspeellijsten hebben. ❌`,
   msg94: "Afspeellijst maken... 🎧",
   msg95: "Afspeellijst gemaakt! 🎧",
   msg96: `Je hebt nog geen afspeellijst met deze naam. ❌`,
   msg97: "Afspeellijst verwijderen... 🎧",
   msg98: "Afspeellijst verwijderd! 🎧",
   msg99: `Schrijf de naam van het nummer dat je wil zoeken. ❌`,
   msg100: `Noteer de naam van de afspeellijst waaraan je de muziek aan wil toevoegen. ❌`,
   msg101: `Je kunt niet meer dan {max_music} nummers hebben in een afspeellijst. ❌`,
   msg102: "Nummer(s) aan het laden... 🎧",
   msg103: "Alle muziek toegevoegd aan uw afspeellijst! 🎧",
   msg104: `Deze muziek staat al in deze afspeellijst. ❌`,
   msg105: "toegevoegd aan de afspeellijst! 🎧",
   msg106: `Schrijf de naam van de afspeellijst waarven je de muziek wil verwijderen. ❌`,
   msg107: `Je hebt nog geen muziek met deze naam. ❌`,
   msg108: "Muziek verwijderen... 🎧",
   msg109: "Muziek verwijderd! 🎧",
   msg110: "Schrijf de naam van de afspeellijst die u wilt zoeken. ❌",
   msg111: `Je hebt geen muziek in deze afspeellijst. ❌`,
   msg112: "Top Openbare Afspeellijsten",
   msg113: `Uw tijd om dit commando te gebruiken is verstreken, u kunt \`/playlist top\` typen om het commando opnieuw te gebruiken.`,
   msg114: `Er is geen publieke afspeellijst. ❌`,
   msg115: "Your Playlists",
   msg116: `muzieken`,
   msg117: `Je hebt geen afspeellijst. ❌`,
   msg118: "Je tijd om dit commando te gebruiken is verstreken, je kan \`/playlist list {name}\` typen om het commando opnieuw te gebruiken.",
   msg119: "Gebruik het commando **/play playlist <list-name>** om deze afspeellijsten te beluisteren.\nTyp **/playlist list <list-name>** om de muziek in een lijst te zien.",
   msg120: "Gelieve een tekstkanaal te specificeren.",
   msg121: "<#{channel}> toegevoegd aan de lijst met kanalen voor het gebruik van commando's, nu kan het bot-commando alleen worden gebruikt op de kanalen in de lijst.",
   msg122: "Er zijn nog geen gegevens geregistreerd.",
   msg123: "<#{channel}> verwijderd uit de lijst met opdrachtgebruikskanalen.",
   msg124: "Dit kanaal staat al op de commando gebruik kanaal lijst.",
   msg125: "Dit kanaal is geen tekstkanaal",
   msg126: "❌ Hier is een lijst van kanalen waar je de commandos kunt gebruiken: {channel_filter}",
   msg127: "Commando niet gedefinieert.",
   error7: "Probeer deze command later opnieuw. Mogelijke bug gemeld aan botontwikkelaars.",
   msg128: "Je mute me terwijl de muziek speelde. Daarom ben ik gestopt met de muziek. Als je me unmute ga ik verder. 😔",
   msg129: "Spelen",
   msg130: "Schrijf A.U.B een geldig nummer.",
   msg131: "om de opdrachten in de lijst te gebruiken, moet je op de bot stemmen.",
   msg132: "Er is nog geen muziek gestopt.",
   msg133: "Ik heb de volgorde in de afspeellijst verprutst.",
   msg134: "Onjuist gebruik. Voorbeeld: `5:50` | `1:12:43`",
   msg135: "Speeltijd is succesvol ingesteld op {queue.formattedCurrentTime}",
   msg136: "Automatisch afspelen is nu ingeschakeld. Ik ga vanaf nu willekeurige muziek aanzetten.",
   msg137: "Automatisch afspelen is momenteel uitgeschakeld.",
   }
   module.exports = language;
   
