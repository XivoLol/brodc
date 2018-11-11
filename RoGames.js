const {Client, RichEmbed} = require('discord.js');
const client = new Client();
const fs = require('fs');
client.on('ready', function(){
    var ms = 10000 ;
    var setGame = [`r!inv On ${client.guilds.size} Servers`,`r!help-games ${client.users.size} Users`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/KiNg66S`);
    }, ms);

});
client.on('ready', () => {
  console.log('---------------');
  console.log(' Bot Is Online')
  console.log('---------------')
});

client.on('ready', () => {
console.log('Unknown Team');
});
    client.on('message', message => {


    if (message.author.bot) return;
     if (message.content === "r!help-games") {
		 message.reply('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`**
__~~Ro Bot~~__ By: Unknown
╔[❖════════════❖]╗
      Games
╚[❖════════════❖]╝

╔[❖════════════❖]╗
  Games Commands
╚[❖════════════❖]╝

 ❖ فكك ➾  لعبة فكك

 ❖ عواصم ➾  لعبة عواصم
 
 ❖ ركب ➾  لعبة ركب

 ❖ تحدي ➾ لعبة تحدي

 ❖ لغز ➾ لعبة لغز

 ❖ ايموجي ➾ لعبة ايموجي
 
 ❖ اعلام ➾ لعبة اعلام

 ❖ انمي ➾ لعبة انمي

 ❖ لاعب ➾ لعبة كرة القدم

 ❖ مثل ➾ لعبة مثل
  
 ❖ نقاطي ➾ لمعرفة نقاطك

**`);

    }
});

client.on('message', message => {



    if (message.author.bot) return;
     if (message.content === "r!inv") {
		 message.reply('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`**
 
بامكانك دعوة البوت من هنا

https://goo.gl/b1Rmdn

Server Support : https://goo.gl/wAm5w2
**`);

    }
});










let points = JSON.parse(fs.readFileSync('points.json', 'utf8'));
client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = {points : 0}
    if (message.content == 'نقاطي'){
        var embed = new RichEmbed()
        .setAuthor(message.author.username,message.author.avatarURL)
        .addField(`نقاطك : ${points[message.author.id].points}`,'RoBot Games',   true)
        .setColor('RANDOM')
        .setFooter('RoBot Games', client.user.avatarURL);
        message.channel.sendEmbed(embed)
    };
    if (message.content == "فكك") {    
        var x = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];
        var x2 = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** فكك الكلمة الآتية :${x[x3]}, لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
            if (message.content == "ايموجي") {    
        var x = ['ضفدع', 'طيارة', 'تفاحة', 'الزق', 'مئة في المئة', 'مدرسة', 'اللايك' , 'روبوت' , 'كرة القدم' , 'البوكس' , 'قلب اخضر' , 'فيس يضحك'];
        var x2 = ['🐸', '✈', '🍎', '💩', '💯', '🏫', '👍', '🤖', '⚽', '👊', '💚', '😂'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** جيبلي الايموجي الآتي : ${x[x3]} , لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
                if (message.content == "اعلام") {    
        var x = ['الصين', 'البحرين', 'الهند', 'المانيا', 'اليونان', 'فنلندا', 'كوريا الشمالية' , 'العراق' , 'فلسطين' , 'باكستان' , 'البرتغال' , 'المغرب'];
        var x2 = ['🇨🇳', '🇧🇭', '🇨🇳', '🇩🇪', '🇬🇷', '🇫🇮', '🇰🇵', '🇮🇶', '🇵🇸', '🇵🇰', '🇵🇹', '🇲🇦'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** جيبلي العلم الآتي : ${x[x3]} , لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	    if (message.content == "ركب") {    
        var x = ['ض ف د ع', 'ط ي ا ر ة', 'ر ع و د ي', 'ت ف ك ي ك', 'ت ج ر ب ة', 'م د ر س ة', 'م ع ل م', 'ن ق ا ط', 'ا ك س ي ف و', 'م ك و ه', 'ه ك و ن ا م ط ا ط ا', 'ا ك س ي ف و ذ ا ب ي س ت'];
		var x2 = ['ضفدع', 'طيارة', 'رعودي', 'تفكيك', 'تجربة', 'مدرسة', 'معلم' , 'نقاط' , 'اكسيفو' , 'مكوه' , 'هكونا مطاطا' , 'اكسيفو ذا بيست'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** ركب الكلمة  الآتية :${x[x3]}, لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	    if (message.content == "رياضيات") {    
        var x = ['50×50', '1000000×1', '89×10', '90×5', '30×3', '10×10', '1000×1000', '44,5+44,5'];
		var x2 = ['2500', '1000000', '890', '450', '90', '100', '1000000' , '89'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** احسب الارقام  الآتية :${x[x3]}, لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	
  if (message.content == "عواصم") {
        var x = ['اليمن', 'مصر', 'الجزائر', 'السعودية', 'الصومال', 'العراق' , 'الامارات' , 'سوريا' , 'المغرب'];
        var x2 = ['صنعاء', 'القاهرة', 'الجزائر', 'الرياض', 'الخرطوم', 'بغداد', 'ابو ظبي','دمشق ','الر باط'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** ماهي عاصمة :${x[x3]}, لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1, 
                time : 10000, 
                errors : ['time'] 
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
    if (message.content == "لغز") {
        var x = ['كلي ثقوب ومع ذلك أحفظ الماء فمن أكون ؟', 'ما هو الشيء الذي يمشي و يقف وليس له أرجـل ؟', 'ما هو الشئ الذي يرفع اثقال ولا يقدر يرفع مسمار ؟', 'يسمع بلا أذن ويتكلم بلا لسان فما هو ؟', 'ماهو الشيء الذي يكتب و لا يقرأ ؟', 'ماهو الشيء الذي يكون اخضر في الارض واسود في السوق واحمــر في البيت ؟', 'عائلة مؤلفة من 6 بنات وأخ لكل منهن، فكم عدد أفراد العائلة ؟', 'يتحرك دائماً حواليك لكنك لاتراه فما هو ؟' ,'ما هو البليون ؟'];
        var x2 = ['الاسفنج', 'الساعة', 'البحر', 'التلفون', 'العمر', 'الشاي', 'سبعة اشخاص' ,'الهواء' ,'الف مليون'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** حل اللغز الأتي :${x[x3]}, لديك 10 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 10000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **') 
               message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
	    if (message.content == "مثل") {    
        var x = ['القرد في عين امو', 'إذا كبر أبنك فعامله ك', 'فرخ البط', 'الابن سر', 'في سعة الاخلاق كنوز', 'الحسود لا   ', 'الصديق وقت' , 'التعاون أساس' , 'للذكاء حدود لكن لا حدود'];
        var x2 = ['غزال', 'اخ', 'عوام', 'ابيه', 'الارزاق', 'يسود', 'الضيق', 'النجاح', 'للغباء'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** اكمل المثل الآتي :${x[x3]}, لديك  25 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    })
  if (message.content == "تحدي") {    
        var x = ['ف ض ع د', 'ص ش خ', 'ة د ا ر ج', 'ا ر ي ة س', 'ي ت ب', 'ئ ا ع ل ة', ' ا ش ي', 'ن ح و ي ا', 'س د و ي ك ر د', 'ر ط ي ا ة' , 'ن ح ز ل و', 'ك ا ف ي س و'];
        var x2 = ['ضفدع', 'شخص', 'دراجة', 'سيارة', 'بيت', 'عائلة', 'شاي', 'حيوان', 'ديسكورد', 'طيارة', 'حلزون', 'اكسيفو'];
        var x3 = Math.floor(Math.random()*x.length)
                message.reply(`** عدل الكلمة  الآتية :${x[x3]}, لديك 25 ثواني**`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 25000,
                errors : ['time']
            })
        r.catch(() => {
            return message.reply('**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch: **')
                    message.channel.sendEmbed(embed)
        })
        r.then(s=> {

            points[message.author.id].points +=1
                    message.reply(`**✅  كفوو والله يا شنب اجابتك صحيحه**`);
               message.channel.sendEmbed(embed)
        })
        })
    }
    fs.writeFile('points.json', JSON.stringify(points), (err) => {
        if (err) console.error(err);
    });
    client.on('message', message => {
  if (message.author.bot) return;


if(!message.channel.guild) return;

if (!points[message.author.id]) points[message.author.id] = {
	points: 0,
  wins: 0,
  loses: 0,
  };
if (message.content.startsWith('انمي')) {

const type = require('./anime.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 20  ثواني لتخمن الانمي**').then(msg => {

   const embed = new RichEmbed()
 .setColor("RANDOM")
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
 .setThumbnail(message.author.avatarURL)     
 .addField(`**RoBot Games**`,` **${item.type}**`)
 .setFooter(`ستكسب 1 نقطة`)

msg.channel.send(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 20000, errors: ['time'] })
        .then((collected) => {
        message.reply(`${collected.first().author} ✅ **كفوو والله يا شنب اجابتك صحيحه**`); ////هنا يقوله اجابتك صحيحه وعلامة صح وهيك تبي تعدلها علي راحتك
		console.log(`[Typing] ${collected.first().author} typed the word.`);
			let userData = points[collected.first().author.id];
userData.wins += 1 
userData.points += 1; 

          })

          .catch(collected => {
points[message.author.id].loses += 1;

            message.reply(`**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch:**`); ////هنا يقوله تم الانتهاء من الوقت لما ما يجاوب والوقت يخلص تبي تعدلها علي راحتك
			console.log('[Typing] Error: No one type the word.');

		})
	})
    })
points[message.author.id].game += 1; 


}
fs.writeFile("./points.jsmn",JSON.stringify(points), function(err){
    if (err) console.log(err);
  })
});

client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 0,
  };
if (message.content.startsWith('لاعب')) { ////هنا الامر الي بتكتبه ويعطيك الصوره والكلام بس الامر لازم تحط معه البرفكس اللي بتحطه فوق
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));////هنا الرساله ذي اذا احد دخل الخاص حق البوت وسوي *لاعب يقوله ما ينفع بس في السيرفرات

const type = require('./player/player.json');
const item = type[Math.floor(Math.random() * type.length)];
const filter = response => {
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.reply('**لديك 20 ثانيه لتعرف ما اسم اللاعب **').then(msg => { ////هادي الرساله اللي يكتبها يقوله لديك 15 ثانيه تبي تعدلها  علي راحتك

msg.channel.sendFile(`${item.image}`).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 20000, errors: ['time'] })
        .then((collected) => {
        message.reply(`${collected.first().author} ✅ **كفوو والله يا شنب اجابتك صحيحه**`); ////هنا يقوله اجابتك صحيحه وعلامة صح وهيك تبي تعدلها علي راحتك
        console.log(`[Typing] ${collected.first().author} typed the word.`);////هون بيكتبلك في الكونسل ايدي الشخص اللي كتب االاجابه صحيحه
            let userData = points[message.author.id];
            userData.points++;
          })
          .catch(collected => {
            message.reply(`**تم الانتهاء من الوقت  حظ اوفر المره القادمه :stopwatch:**`); ////هنا يقوله تم الانتهاء من الوقت لما ما يجاوب والوقت يخلص تبي تعدلها علي راحتك
            console.log('[Typing] Error: No one type the word.');
          })
        })
    })
}
});
    }).login('Your Bot Token')