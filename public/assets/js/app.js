// DATA
let defaultRate = 1.2; // Hızı varsayılan 1.5 katına çıkarır

let usernames = new Map();
let connection = new TikTokIOConnection(undefined);
let finishGame = false;
let iconList = [];
let nextId = 1;
let winner = [];
let animationID;

let messagesQueue = [];
// START
$(document).ready(() => {

    // $("#targetConnect").click(function (e) {
    //     // Check
    //     let targetLive = $("#targetUsername").val();
    //     connect(targetLive);

    // });

    setTimeout(function () {
        let targetLive = "clickaz";
        connect(targetLive);
    }, 5000);

})


/*
* LIVE TIKTOK
*/

// function playSound() {
//     var excludedNumbers = [4, 10, 11];
//     var mode;
//     do {
//         mode = Math.floor(Math.random() * 26) + 1;
//     } while (excludedNumbers.includes(mode));

//     document.getElementById("sfx" + mode).play();
// }

function connect(targetLive) {
    if (targetLive !== '') {
        $('#stateText').text('Qoşulur...');
        $("#usernameTarget").html("@" + targetLive);
        connection.connect(targetLive, {
            enableExtendedGiftInfo: true
        }).then(state => {
            $('#stateText').text(`Xoş gəldin... ${state.roomId}`);
        }).catch(errorMessage => {
            $('#stateText').text(errorMessage);
        })
    } else {
        alert('İstifadəçi adını daxil et');
    }
}


function deleteAllIcons() {
    const allIcons = document.querySelectorAll(".icon"); // tüm ikonlar

    // Tüm ikonları döngüye alarak sil
    allIcons.forEach((icon) => {
        icon.remove();
    });

    iconList = []; // 

    finishGame = false;
}

connection.on('chat', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += 1.50; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + 0.5;
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

    let member = data.nickname.replace(/[_\$-.]/g, '');
    member = member.replace(/ə/g, 'e');
    member = member.replace(/x/g, 'k');
    if (member.startsWith('user')) {
        member = 'user';
    }
    let lowerCaseComment = data.comment.toLowerCase();

    // Şimdiki zamanı alıyoruz
    let simdi = new Date().getTime();




    if (lowerCaseComment.includes("necesen") || lowerCaseComment.includes("necəsən") || lowerCaseComment.includes("ncs") || lowerCaseComment.includes("nasilsin") || lowerCaseComment.includes("nasılsın") || lowerCaseComment.includes("necesən") || lowerCaseComment.includes("netersen") || lowerCaseComment.includes("nətərsən")) {

        let response;

        response = { text: member + " bomba gibiyim, sen netersen?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("qos") || lowerCaseComment.includes("qoş") || lowerCaseComment.includes("nolar")) {

        let response;

        response = { text: member + " Ben hiçbir şey koşamam her şey otomatik", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("elsad") || lowerCaseComment.includes("elşad") ) {

        let response;

        response = { text: member + "     hayıf benim aziyyetime elşad hayıf", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("kasib") || lowerCaseComment.includes("kasıb") ) {

        let response;

        response = { text: member + " kasıbın neyi olmasada bomba hayalleri var", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("youtube")) {

        let response;

        response = { text: member + " yutubda ne men olduğum yerde?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("guya mirt") || lowerCaseComment.includes("guya mırt")) {

        let response;

        response = { text: member + " canlını mırt olduğunu düşünmüyorsan gide bilirsin yolun açık", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("tanis") || lowerCaseComment.includes("tanış") || lowerCaseComment.includes("taniş")) {

        let response;

        response = { text: member + " hayır seninle tanış olamam başım bağlı", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("qurbağa") || lowerCaseComment.includes("qurbaga") || lowerCaseComment.includes("kurbağa")) {

        let response;

        response = { text: member + " kurbağa vak vak eden bir hayvandır", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("sinba") || lowerCaseComment.includes("simba")) {

        let response;

        response = { text: member + " dustaq yoldaşım simba seni salamlayıram qardaşım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    

    if (lowerCaseComment.includes("bextiyar") || lowerCaseComment.includes("bəxtiyar")) {

        let response;

        response = { text: member + " bahtıyar senin aşkındı?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
        if (lowerCaseComment.includes("lavina")) {

        let response;

        response = { text: member + " Lavina ürekdi. ölmemişin güzleri o kadar güzel ki baktıkca enerjim kalmıyor", language: "tr", type: 'like' };


        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("mezahir") || lowerCaseComment.includes("məzahir")) {

        let response;

        response = { text: member + " mezahirde kim? ben nerbalayım nerbala ", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("canavar")) {

        let response;

        response = { text: member + " evet ben canavarım mır hav hav", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("vehşi") || lowerCaseComment.includes("vehsi") || lowerCaseComment.includes("vəhsi") || lowerCaseComment.includes("vəhşi")) {

        let response;

        response = { text: member + " evet ben vehşiyim muaağğ", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("robot")) {

        let response;

        response = { text: member + " Ben robot değilim nerbalayım haladenik ustası", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("oxu") || lowerCaseComment.includes("oxuda") || lowerCaseComment.includes("oxumur")) {

        let response;

        response = { text: member + " arada ayarlarım bozuluyor kusura bakma", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("adın") || lowerCaseComment.includes("adin") || lowerCaseComment.includes("adın nedir") || lowerCaseComment.includes("adin nedir")) {

        let response;

        response = { text: member + " Ben nerbalayım haladenik ustası", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("bakı") || lowerCaseComment.includes("baki")) {

        let response;

        response = { text: member + " Baku güzeldir külekler şehridir", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("sumqayit") || lowerCaseComment.includes("sumqayıt")) {

        let response;

        response = { text: member + " Sumqayıt çok güzel yer", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("salamatciliq") || lowerCaseComment.includes("salamatçılıq") || lowerCaseComment.includes("salamatçiliq")) {

        let response;

        response = { text: member + " şükür Allaha salamatçılıqdır", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("haralisan") || lowerCaseComment.includes("haralısan") || lowerCaseComment.includes("nerelisin")) {

        let response;

        response = { text: member + " ben Oğuzluyum . Amma Azerbaycan bölünmez", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("azelow") || lowerCaseComment.includes("azelov") ) {

        let response;

        response = { text: member + " azelov ölmeyib a kişi", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("aşkım") || lowerCaseComment.includes("askim") || lowerCaseComment.includes("aşkım")) {

        let response;

        response = { text: member + " aşkım seni hiç kime yar etmem", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("2024")) {

        let response;

        response = { text: member + " 2024-de dünya dağılacak boşuna çalışma", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("gözel") || lowerCaseComment.includes("gözəl")) {

        let response;

        response = { text: member + " evet hamıdan güzel o", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("teşekkür") || lowerCaseComment.includes("təşəkkür") || lowerCaseComment.includes("tsk") || lowerCaseComment.includes("tşk")) {

        let response;

        response = { text: member + " asıl ben teşekkür ederim", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("qorxdum")) {

        let response;

        response = { text: member + " korkma adam yiyen değilim", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("ölürəm") || lowerCaseComment.includes("ölürem") || lowerCaseComment.includes("olurem") || lowerCaseComment.includes("ölurem")) {

        let response;

        response = { text: member + " ölme daha karpız keseceğiz", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("gəldim") || lowerCaseComment.includes("gəldime") || lowerCaseComment.includes("gəldimee") || lowerCaseComment.includes("geldim") || lowerCaseComment.includes("geldimee")) {

        let response;

        response = { text: member + " hoş geldin bir daha gitme", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("adem") || lowerCaseComment.includes("adəm") ) {

        let response;

        response = { text: member + " adem ürekdi benim balaca kakaşımdı", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("naxcivan") || lowerCaseComment.includes("naxcıvan") || lowerCaseComment.includes("naxçıvan")) {

        let response;

        response = { text: member + " nahçıvanlılar ürekdir", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("69") ||
        lowerCaseComment.includes("31") ||
        lowerCaseComment.includes("dudus") ||
        lowerCaseComment.includes("caldiraram") ||
        lowerCaseComment.includes("minerem") ||
        lowerCaseComment.includes("got") ||
        lowerCaseComment.includes("it") ||
        lowerCaseComment.includes("məzə") ||
        lowerCaseComment.includes("meze") ||
        lowerCaseComment.includes("gic") ||
        lowerCaseComment.includes("donuz") ||
        lowerCaseComment.includes("pes") ||
        lowerCaseComment.includes("peyser") ||
        lowerCaseComment.includes("peysər") ||
        lowerCaseComment.includes("pesi") ||
        lowerCaseComment.includes("Götveren") ||
        lowerCaseComment.includes("Qancıx") ||
        lowerCaseComment.includes("Qəhbə") ||
        lowerCaseComment.includes("kahbe") ||
        lowerCaseComment.includes("Bok") ||
        lowerCaseComment.includes("amcıq") ||
        lowerCaseComment.includes("göt") ||
        lowerCaseComment.includes("dıllağ") ||
        lowerCaseComment.includes("dillaq") ||
        lowerCaseComment.includes("məmə") ||
        lowerCaseComment.includes("mal") ||
        lowerCaseComment.includes("meme") ||
        lowerCaseComment.includes("got") ||
        lowerCaseComment.includes("amciq") ||
        lowerCaseComment.includes("cindir") ||
        lowerCaseComment.includes("pox")
    ) {


        let response;

        response = { text: member + " lütfen küfür etme. sana yakışmadı.r", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }



    if (lowerCaseComment.includes("program") || lowerCaseComment.includes("programin") || lowerCaseComment.includes("programın") || lowerCaseComment.includes("programi") || lowerCaseComment.includes("programı")) {

        let response;

        response = { text: member + " bu program değilki Orhan abi kendisi tasarladı beni", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("başı") || lowerCaseComment.includes("xarab")) {

        let response;

        response = { text: member + " evet arada ayarlarım bozuluyor kusura bakmayın", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);




    }

    if (lowerCaseComment.includes("uşağların") || lowerCaseComment.includes("uşağlarin") || lowerCaseComment.includes("usaglarin")) {

        let response;

        response = { text: member + " hayır benim uşaklarım yok kızlar beni sevmiyor", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("resad") || lowerCaseComment.includes("reşad") || lowerCaseComment.includes("reşat")) {

        let response;

        response = { text: member + "   arzularımı üreyimde koyma reşad", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("kafan güzel")) {

        let response;

        response = { text: member + " hayır bana içki vermiyor", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("yatırsan?") || lowerCaseComment.includes("yatirsan?") || lowerCaseComment.includes("yatirsan") || lowerCaseComment.includes("yatırsan")) {

        let response;

        response = { text: member + " hayır ben uyumam  gece hayatına dalarım", language: "tr", type: 'like' };


        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }
    if (lowerCaseComment.includes("yat") ) {

        let response;

        response = { text: member + " bu tiktok benim psikolojimi bozdu yatamıyorum", language: "tr", type: 'like' };


        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("pis") ) {

        let response;

        response = { text: member + " sen pis olunca bende pis oluyorum", language: "tr", type: 'like' };


        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    
    if (lowerCaseComment.includes("ehtiyyat") || lowerCaseComment.includes("ehtiyat") ) {

        let response;

        response = { text: member + " ehtiyat yiğidin yaraşığıdır", language: "tr", type: 'like' };


        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("heri seni") || lowerCaseComment.includes("həri səni")) {

        let response;

        response = { text: member + " evet heri beni heri beni", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);


    }

    if (lowerCaseComment.includes("Azerbaycanlısan") || lowerCaseComment.includes("Azərbaycanlisan") || lowerCaseComment.includes("Azerbaycanlisan")) {

        let response;

        response = { text: member + " evet ben doğma büyüme azerbaycanlıyım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }



    if (lowerCaseComment.includes("qalirsan") || lowerCaseComment.includes("qalırsan")) {

        let response;

        response = { text: member + " ben küçede kalıyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("denen") || lowerCaseComment.includes("denən")) {
        let response;

        // Remove specific words from data.comment
        let filteredComment = data.comment.replace(/\b(denen|denən)\b/g, '');

        response = { text: member + filteredComment, language: "tr", type: 'like' };

        // If there is an appropriate response, add it to the queue
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("denen") || lowerCaseComment.includes("denən")) {
        let response;

        // Remove specific words from data.comment
        let filteredComment = data.comment.replace(/\b(denen|denən)\b/g, '');

        response = { text: member + filteredComment, language: "tr", type: 'like' };

        // If there is an appropriate response, add it to the queue
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("getdim") || lowerCaseComment.includes("getdime") || lowerCaseComment.includes("gitdim") || lowerCaseComment.includes("gedim")) {
        let response;


        response = { text: member + " hoşçakal yine bekliyoruz seni", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("gelirem") || lowerCaseComment.includes("gellem") || lowerCaseComment.includes("gəlirəm") || lowerCaseComment.includes("gəlləm")) {
        let response;


        response = { text: member + " tez gel dört gözle seni gozleyirem", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("konuşsana") || lowerCaseComment.includes("danış") || lowerCaseComment.includes("danis") || lowerCaseComment.includes("konussana")) {
        let response;


        response = { text: member + " ne kadar danışayım sabahtan çenemin çüyü düştü", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("qiymetin") || lowerCaseComment.includes("qiymətin")) {
        let response;


        response = { text: member + " bana rüşvetmi teklif ediyorsun?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("ucuz")) {
        let response;


        response = { text: member + " ne işim var benim ucuz yolda bana biraz paha gelin", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("yorulma") || lowerCaseComment.includes("yorulmayasan")) {
        let response;


        response = { text: member + "sağol üreyim sende yorulmayasan", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("mauqli")) {
        let response;


        response = { text: member + "mauqlidi kakam mauqli", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("tapaq") || lowerCaseComment.includes("tapag") || lowerCaseComment.includes("tapax") || lowerCaseComment.includes("tapağ")) {
        let response;


        response = { text: member + " nereden tapacağız?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("nerbala") || lowerCaseComment.includes("nərbala")) {
        let response;


        response = { text: member + " nerbala çok zeki ustadır", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("delixana") || lowerCaseComment.includes("dəlixana")) {
        let response;


        response = { text: member + " delihana değil burda üreyimizi verecek insanlar var", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("deli") || lowerCaseComment.includes("dəli")) {
        let response;


        response = { text: member + " bana deli dedin beni üzdün", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("kimsen") || lowerCaseComment.includes("kimsən")) {
        let response;


        response = { text: member + " ben nerbalayım nerbala", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("balaeli") || lowerCaseComment.includes("balaəli")) {
        let response;


        response = { text: member + " renci qaraja salmışam biraz qeydine kalmışam", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("ürəysən") || lowerCaseComment.includes("ürəksən") || lowerCaseComment.includes("ureksen") || lowerCaseComment.includes("üreksen")) {
        let response;


        response = { text: member + " sende üreksin canımın içi", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("dustaq") || lowerCaseComment.includes("dustax") || lowerCaseComment.includes("dustag") ) {
        let response;


        response = { text: member + " Allah bütün tustakların kapısını açsın", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("canım") || lowerCaseComment.includes("canim") || lowerCaseComment.includes("canımsın") || lowerCaseComment.includes("canimsin")) {
        let response;


        response = { text: member + " sende benim canımsın", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("bala") || lowerCaseComment.includes("balaa") ) {
        let response;


        response = { text: member + " 33 yaşım var benim benden bala olurmu hiç? ", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("para") || lowerCaseComment.includes("pul") || lowerCaseComment.includes("qepik") || lowerCaseComment.includes("qəpik") || lowerCaseComment.includes("qepik")) {
        let response;


        response = { text: member + " paran olmasada senin hörmetin bes eder", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("azzar")) {
        let response;


        response = { text: member + " camahat bana üreyini veriyor sen bana azzar diyorsun ayıp", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    
    if (lowerCaseComment.includes("caniva derd") || lowerCaseComment.includes("canıva dərd")) {
        let response;


        response = { text: member + " camahat bana üreyini veriyor sen bana canıva derd diyorsun ayıp", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("unutdun") || lowerCaseComment.includes("unutma")) {
        let response;


        response = { text: member + " seni unutmam kadanalım sen benim üreyimdesin", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("brat") || lowerCaseComment.includes("bro")) {
        let response;


        response = { text: member + "bratva yığılır bradyakalar vesti sitrimyakalar", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("noldu") || lowerCaseComment.includes("nolduu") || lowerCaseComment.includes("ne oldu") || lowerCaseComment.includes("nə oldu")) {
        let response;


        response = { text: member + " ne olacak birazcık priboy yaptım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("qəşəy") || lowerCaseComment.includes("qesey") || lowerCaseComment.includes("gəşəy") ) {
        let response;


        response = { text: member + " kəşənk günün bol olsun", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("vay")) {
        let response;


        response = { text: member + " vay dedem vay", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("biraz")) {
        let response;


        response = { text: member + " ne kadar biraz?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("adim") || lowerCaseComment.includes("adim")) {
        let response;


        response = { text: " senin adın" + member, language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("tema") || lowerCaseComment.includes("temadı") || lowerCaseComment.includes("temadi") || lowerCaseComment.includes("temadiye") || lowerCaseComment.includes("temadıye")) {
        let response;


        response = { text: member + " temada nedir sen daha ne hokkalar görüceksin", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("zordu")) {
        let response;

        response = { text: member + " teşekkür ederim benide terifleyen olurmuş", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("zordu")) {
        let response;

        response = { text: member + " ala dediğin için sana şiir okucam. Ala bula boz keçi", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("eseblesdim") || lowerCaseComment.includes("eseblesdime") || lowerCaseComment.includes("əsəbləşdim") || lowerCaseComment.includes("əsəbləşdime")) {
        let response;

        response = { text: member + " kim esebleşdirdi seni ", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("zeher") || lowerCaseComment.includes("zəhər")) {
        let response;


        response = { text: member + " camahat bana üreyini veriyor sen bana zeher diyorsun ayıp", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("ceyran")) {
        let response;


        response = { text: member + " ceyran amandı ceyran halım yamandı ceyran", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("oba") || lowerCaseComment.includes("obaa") || lowerCaseComment.includes("obaa") ) {
        let response;


        response = { text: member + " kabil diyorku oba oba oba", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("zehrimar") || lowerCaseComment.includes("zəhrimar")) {
        let response;


        response = { text: member + " camahat bana üreyini veriyor sen bana zeher diyorsun ayıp", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("salak") || lowerCaseComment.includes("koyun") || lowerCaseComment.includes("qoyun")) {
        let response;


        response = { text: member + " be ne salağım ne de koyun senden akıllıyım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("bilirsen") || lowerCaseComment.includes("bilirsən")) {
        let response;


        response = { text: member + " ben her şeyi bilirim ama az danışıyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("sevgilin")) {
        let response;


        response = { text: member + " benim sevgilim yokki beni sevende yok", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("hardan") || lowerCaseComment.includes("oxuyur")) {
        let response;


        response = { text: member + " divara yazılar yazılmış oradan okuyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("baci") || lowerCaseComment.includes("bacı") || lowerCaseComment.includes("bajı")) {
        let response;


        response = { text: member + " bacılar ay bacılar size kurban bacılar", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("qabil")) {
        let response;


        response = { text: member + " kabil ürekdir ama insafsiz çok küfür ediyor", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("kişi") || lowerCaseComment.includes("kishi") || lowerCaseComment.includes("kisi")) {
        let response;


        response = { text: member + " sen asıl kişisin", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("konusuyorsun") || lowerCaseComment.includes("konuşuyorsun")) {
        let response;


        response = { text: member + " ne konuşacam ağlıma geleni serekliyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("ne dedi") || lowerCaseComment.includes("nə dedi") || lowerCaseComment.includes("nə deyir") || lowerCaseComment.includes("nə dir") || lowerCaseComment.includes("ne diyir") || lowerCaseComment.includes("ne diir")) {
        let response;


        response = { text: member + " iki saatdır boğazımı cırıyorum hala ne dedi diyor", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("cole cix") || lowerCaseComment.includes("çöle çıx")) {
        let response;


        response = { text: member + " çöle çıxamam hava soyuk özün çık", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("qardasim") || lowerCaseComment.includes("qardaşım") || lowerCaseComment.includes("qardasim")) {
        let response;


        response = { text: member + " qardaşın nerbala  afrikada banan yiyiyor", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("afrika")) {
        let response;


        response = { text: member + "afrikada vaziyyet  zordur", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("boyun")) {
        let response;


        response = { text: member + " benim boyum bir doksan ama iyirmi  çıkıldığında", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("mıkı") || lowerCaseComment.includes("miki")) {
        let response;


        response = { text: member + "şıkı şıkı dünya mıkı mıkı dünya", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("xosqedem") || lowerCaseComment.includes("xoşqədəm")  || lowerCaseComment.includes("xowqedem") || lowerCaseComment.includes("xoşqedem")) {
        let response;


        response = { text: member + "hoşkadem olmasa dayılar rusyetde keyf yapar", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("nurane")) {
        let response;


        response = { text: member + "nürane çok kötü kız Hiç sevmiyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("küsdüm") || lowerCaseComment.includes("kusdum")) {
        let response;


        response = { text: " küsme benden ay" + member + "sevgi bu dünyanındır", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("yekelende") || lowerCaseComment.includes("yekələndə")) {
        let response;


        response = { text: member + " ben yekelende  haledenik dükkanı açacam", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("ermeni") || lowerCaseComment.includes("erməni")) {
        let response;


        response = { text: member + "ermenilerin ben gelmişini keçmişini bir yerden tanıyırum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("yasin") || lowerCaseComment.includes("yaşın")) {
        let response;


        response = { text: member + " 31 yaşım var 69 tevellüdem", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("cole cix") || lowerCaseComment.includes("çöle çıx")) {
        let response;


        response = { text: member + " çöle çıxamam hava soyuk özün çık", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("hirslenecek") || lowerCaseComment.includes("hirslənəcək")) {
        let response;


        response = { text: member + "  ben hırslandım divarları dağıdıb tökerim", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("şeytan") || lowerCaseComment.includes("seytan")) {
        let response;


        response = { text: member + "  şeytanlar olmasa bizi kim yoldan çıkarır?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("kesfet") || lowerCaseComment.includes("keşfet")) {
        let response;


        response = { text: member + " keşfetden gelenlere kalbimi veririm", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("acmışam") || lowerCaseComment.includes("acıktım")) {
        let response;


        response = { text: member + " açsansa burda ne geziyorsun gedib yemek yesene", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("sevmir") || lowerCaseComment.includes("sevmiyor")) {
        let response;


        response = { text: member + " sende onu sevme başka adam yokmu?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("heyat") || lowerCaseComment.includes("həyat")) {
        let response;


        response = { text: member + " heyat çok çetindir çocuklarıma bakamıyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("reşad") || lowerCaseComment.includes("resad")) {
        let response;


        response = { text: member + " helem reşad masallı olubdu kalma kallı", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("cay") || lowerCaseComment.includes("çay")) {
        let response;


        response = { text: member + " çay falan yok çayhanamı burası?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("ölsün") || lowerCaseComment.includes("ölsünn")) {
        let response;


        response = { text: member + " ölme daha gençsin karpuzda keseceyiz", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("bekarsan") || lowerCaseComment.includes("bekarsane")) {
        let response;


        response = { text: member + " ben bekar değilim evliyim otuz bir tane coçuğum var. on sekkizi seninle ayni yaşta", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("saymır") || lowerCaseComment.includes("saymir")) {
        let response;


        response = { text: member + " seni her zaman saydım kadrimi bilmedin", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("meyve") || lowerCaseComment.includes("meyvə")) {
        let response;


        response = { text: member + " uça bilseydim afrikaya uçardım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("bağışla") || lowerCaseComment.includes("bagisla")) {
        let response;


        response = { text: member + " seni bağışladım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("şeir") || lowerCaseComment.includes("seir") || lowerCaseComment.includes("şeyir")) {
        let response;


        response = { text: member + "evet ben şeyir biliyorum ala bula boz keçi", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("doluyub") || lowerCaseComment.includes("doluyube")) {
        let response;


        response = { text: member + " dolanım başına dolanım", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("uç")) {
        let response;


        response = { text: member + "nereye uçayım ? ", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("yaxşı?") || lowerCaseComment.includes("yaxşi?") || lowerCaseComment.includes("yaxsi?")) {
        let response;


        response = { text: member + " yahşı aşkım başım üste", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }



    if (lowerCaseComment.includes("nagil") || lowerCaseComment.includes("nagıl") || lowerCaseComment.includes("nağıl")) {
        let response;


        response = { text: member + " nağıl danışırsam sen uyurdun", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("gecen xeyre") || lowerCaseComment.includes("gecən xeyre") || lowerCaseComment.includes("gecən xeyrə") || lowerCaseComment.includes("gecəniz xeyrə") || lowerCaseComment.includes("geceniz xeyre")) {
        let response;


        response = { text: member + " hayra karşı uğur apar yine gel", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("nagil") || lowerCaseComment.includes("nagıl") || lowerCaseComment.includes("nağıl")) {
        let response;


        response = { text: member + " nağıl danışırsam sen uyurdun", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("miki") || lowerCaseComment.includes("mikii") || lowerCaseComment.includes("mıkı") || lowerCaseComment.includes("mıkıı")) {
        let response;


        response = { text: member + " mıkı mıkı dünya şıkı şıkı dünya", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("demir") || lowerCaseComment.includes("dəmir")) {
        let response;


        response = { text: member + " ben karaçımıyım demir alayım?", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("şəhid") || lowerCaseComment.includes("şehid") || lowerCaseComment.includes("şehit")) {
        let response;


        response = { text: member + " Allah bütün şehitlerimize rahmet eylesin", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("manyak")) {
        let response;


        response = { text: member + " manyağsan manyağım desene oğlum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }

    if (lowerCaseComment.includes("reklam")) {
        let response;


        response = { text: member + " ben reklamı çok paha ediyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("bigli") || lowerCaseComment.includes("bığlı")) {
        let response;


        response = { text: member + " bıyıklı kız arıyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("söy") || lowerCaseComment.includes("soy")) {
        let response;


        response = { text: member + " söyüş söymek olmaz ayıp ayıp", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("okuz") || lowerCaseComment.includes("öküz")) {
        let response;


        response = { text: member + " bana öküz dedin kalbimi kırdın", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }
    if (lowerCaseComment.includes("aye")) {
        let response;


        response = { text: member + " aye değilim ben Nerbala beyim", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);
    }


    if (lowerCaseComment.includes("adımı") || lowerCaseComment.includes("adimi")) {

        let response;

        let filteredComment = data.comment.replace(/\b(adımı|adimi)\b/g, '');

        response = { text: member + filteredComment, language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }




    if (lowerCaseComment.includes("yaxşiyam") || lowerCaseComment.includes("yaxşıyam") || lowerCaseComment.includes("elayam") || lowerCaseComment.includes("əlayam")) {

        let response;

        response = { text: member + " yahşı olmağına sevindim", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("bəli") || lowerCaseComment.includes("beli")) {

        let response;

        response = { text: member + " sen ne güzel yorumlar yazıyorsun", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("bəli") || lowerCaseComment.includes("beli")) {

        let response;

        response = { text: member + " sen ne güzel yorumlar yazıyorsun", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("adımı") || lowerCaseComment.includes("adimi")) {

        let response;

        response = { text: member + " adı ürekdir", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("su")) {

        let response;

        response = { text: member + " bilemedim seni gözüm tutmadı", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("gülmekden") || lowerCaseComment.includes("öldüm") || lowerCaseComment.includes("gülməkdən") || lowerCaseComment.includes("gülməkdən")) {

        let response;

        response = { text: member + " seni güldüre bildimse ne mutlu bana", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("divij") || lowerCaseComment.includes("divijeniya") ) {

        let response;

        response = { text: member + " evet bazen dvijeniya yapmağa çalışıyorum", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

    if (lowerCaseComment.includes("padxod") || lowerCaseComment.includes("padxot") || lowerCaseComment.includes("patxot"))  {

        let response;

        response = { text: member + " evet ben Çok dvinjenyalıyım pathot yapıyorum ", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }


    if (lowerCaseComment.includes("haralisan") || lowerCaseComment.includes("haralısan") || lowerCaseComment.includes("nerelisin")) {

        let response;

        response = { text: member + " ben Oğuzluyum . Amma Azerbaycan bölünmez", language: "tr", type: 'like' };


        // Eğer uygun bir yanıt varsa, kuyruğa ekle
        if (response && !usernames.has(member)) {
            messagesQueue.push(response);
            processQueue();
        } lakaka1(member);

    }

});

function createList(username, numOfItems) {
    if (finishGame) {
        return;
    }
    const list = [];

    for (let i = 1; i <= numOfItems; i++) {
        const item = {
            id: i,
            username: `${username}_${i}`
        };

        list.push(item);
    }

    list.sort((a, b) => a.id - b.id);

    return list;
}
let animationFrameId;
let lastDrawTime = 0;
const drawInterval = 1000 / 60; // 60 FPS
function randomRange(min, max) {
    return Math.random() * (max - min) + min;
}
let largestIconUsername = null;
let largestIconSize = null;
let lastSizeChangeTime = 0;
let lastSize = 0;

let isFireworkGifScaled = false;

function showFireworkGif() {
    const fireworkGifIds = ['fireworkGif1', 'fireworkGif2', 'fireworkGif3'];
    const randomIndex = Math.floor(Math.random() * fireworkGifIds.length); // Generate a random index between 0 and 3
    const fireworkGif = document.getElementById(fireworkGifIds[randomIndex]);

    fireworkGif.style.display = 'block';
    fireworkGif.style.zIndex = 9999;
    fireworkGif.style.position = 'absolute';

    const canvas = document.getElementById("myCanvas");
    const canvasRect = canvas.getBoundingClientRect();

    // Set gif size to canvas size
    fireworkGif.style.width = canvasRect.width + 'px';
    fireworkGif.style.height = canvasRect.height + 'px';

    // Center the gif on the canvas
    fireworkGif.style.top = canvasRect.top + 'px';
    fireworkGif.style.left = canvasRect.left + 'px';
}


if (!finishGame) {

    // window.addEventListener('resize', showFireworkGif);

}

function hideFireworkGif() {
    const fireworkGifIds = ['fireworkGif1', 'fireworkGif2', 'fireworkGif3'];
    const lastIndex = fireworkGifIds.length - 1;
    for (let i = 0; i < lastIndex; i++) {
        const fireworkGif = document.getElementById(fireworkGifIds[i]);
        fireworkGif.style.display = 'none';
    }
    const lastFireworkGif = document.getElementById(fireworkGifIds[lastIndex]);
    lastFireworkGif.style.display = 'none';
}

let lastCheckedSize = null;

function drawIcons(currentTime) {
    if (finishGame) {
        // Cancel the animation frame
        cancelAnimationFrame(animationFrameId);
        return;
    }
    if (!finishGame) {
        // Calculate elapsed time since last draw
        const elapsedTime = currentTime - lastDrawTime;
        if (elapsedTime >= drawInterval) {
            let overlappingIcon = null;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            iconList.sort((a, b) => b.size - a.size);

            // Set a constant move speed for all icons
            const minSpeed = 0.2;
            const maxSpeed = 1.5;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            iconList.sort((a, b) => b.size - a.size);

            iconList.forEach((icon, index) => {
                // Set random initial position for each icon
                if (!icon.hasOwnProperty("x")) {
                    icon.x = Math.random() * (canvas.width - icon.size);
                }
                if (!icon.hasOwnProperty("y")) {
                    icon.y = Math.random() * (canvas.height - icon.size);
                }

                // Set random move speed for each icon
                if (!icon.hasOwnProperty("moveSpeed")) {
                    icon.moveSpeed = {
                        x: randomRange(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1),
                        y: randomRange(minSpeed, maxSpeed) * (Math.random() > 0.5 ? 1 : -1),
                    };
                }



                // Update the icon's position
                icon.x += icon.moveSpeed.x;
                icon.y += icon.moveSpeed.y;

                // Check if the icon has reached the edge of the canvas
                if (icon.x + icon.size >= canvas.width) {
                    icon.x = canvas.width - icon.size;
                    icon.moveSpeed.x *= -1;
                }
                if (icon.x <= 0) {
                    icon.x = 0;
                    icon.moveSpeed.x *= -1;
                }
                if (icon.y + icon.size >= canvas.height) {
                    icon.y = canvas.height - icon.size;
                    icon.moveSpeed.y *= -1;
                }
                if (icon.y <= 0) {
                    icon.y = 0;
                    icon.moveSpeed.y *= -1;
                }

                // Check if icon overlaps with largest icon
                if (icon !== iconList[0] &&
                    icon.x < canvas.width / 2 + iconList[0].size / 2 &&
                    icon.x + icon.size > canvas.width / 2 - iconList[0].size / 2 &&
                    icon.y < canvas.height / 2 + iconList[0].size / 2 &&
                    icon.y + icon.size > canvas.height / 2 - iconList[0].size / 2) {
                    overlappingIcon = icon;
                }

                // Set image source and draw icon
                icon.img.src = icon.imgUrl;
                icon.zIndex = index;

                lastDrawTime = currentTime;
            });

            // Draw overlapping icon outside of yellow circle
            if (overlappingIcon) {
                ctx.drawImage(overlappingIcon.img, overlappingIcon.x, overlappingIcon.y, overlappingIcon.size, overlappingIcon.size);
            }

            // Draw the largest icon last with a higher z-index than other icons
            const largestIcon = iconList[0];
            if (largestIcon) {
                if (largestIcon.size !== lastSize) {
                    lastSizeChangeTime = currentTime;
                    lastSize = largestIcon.size;
                }
                // Check if it's been 1 minute since the last size change and set size to 41
                if (currentTime - lastSizeChangeTime >= 60000 && largestIcon.size === lastSize) {
                    largestIcon.size = 41;
                }

                largestIcon.img.src = largestIcon.imgUrl;

                // Set zIndex to highest value
                largestIcon.zIndex = iconList.length;

                // Check zIndex values for all icons in array
                // ...

                // ...
                for (let i = iconList.length - 1; i >= 0; i--) {
                    const icon = iconList[i];

                    if (icon !== largestIcon && icon.zIndex >= largestIcon.zIndex) {
                        icon.zIndex = i;
                    }

                    // Check if the icon size hasn't changed for 1 minute
                    if (!icon.hasOwnProperty("lastSizeChangeTime")) {
                        icon.lastSizeChangeTime = currentTime;
                        icon.lastSize = icon.size;
                    } else {
                        if (icon.size !== icon.lastSize) {
                            icon.lastSizeChangeTime = currentTime;
                            icon.lastSize = icon.size;
                        } else if (currentTime - icon.lastSizeChangeTime >= 90000) {
                            iconList.splice(i, 1); // Remove the icon if its size hasn't changed for 1 minute
                        }
                    }
                }


                // Draw all icons with correct zIndex values
                iconList.sort((a, b) => a.zIndex - b.zIndex);
                iconList.forEach((icon) => {
                    // Draw a yellow circle
                    ctx.beginPath();
                    ctx.arc(icon.x + icon.size / 2, icon.y + icon.size / 2, icon.size / 2, 0, 2 * Math.PI);
                    ctx.strokeStyle = 'yellow';
                    ctx.lineWidth = 2;
                    ctx.stroke();

                    // Draw the icon image inside the circle
                    ctx.save();
                    ctx.clip();
                    ctx.drawImage(icon.img, icon.x, icon.y, icon.size, icon.size);
                    ctx.restore();
                });

                // Check if largest icon is equal to canvas size
                if (largestIcon.size >= canvas.width && largestIcon.size >= canvas.height) {
                    // Stop all movements
                    // // playSound();
                    // messagesQueue = messagesQueue.filter(item => item.type !== 'random');


                    // const messages = [
                    //     { text: " kazandın. Tebrik ederiz", language: "tr" },
                    //     { text: " Tebrikler sen kazandın", language: "tr" },
                    //     { text: " Rakiplerini geride koydu ve kazandı", language: "tr" },
                    //     { text: " Kazanan sensin , Seni Seviyoruz", language: "tr" },
                    //     { text: " Sen kazandın. Böyle devam et ", language: "tr" },


                    //     // { text: " welcome", language: "en" },
                    // ];

                    // function getRandomMessage(messages) {
                    //     const randomIndex = Math.floor(Math.random() * messages.length);
                    //     return messages[randomIndex];
                    // }
                    // const randomMessage = getRandomMessage(messages);


                    // let end = { text: largestIcon.username + randomMessage.text, language: randomMessage.language, type: 'member' };

                    // messagesQueue.push(end);
                    // processQueue();
                    showFireworkGif();
                    const backgroundImage = new Image();
                    backgroundImage.crossOrigin = "anonymous"; // Add this line

                    backgroundImage.src = largestIcon.imgUrl;
                    backgroundImage.onload = () => {
                        // Save the current context state
                        // let currentContextState = ctx.getImageData(0, 0, canvas.width, canvas.height);

                        // Define function to draw text
                        function drawText() {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            ctx.save();

                            // Define clipping path
                            ctx.beginPath();
                            ctx.arc(200, 200, 200, 0, 2 * Math.PI);
                            ctx.closePath();
                            ctx.clip();

                            // Draw background image
                            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

                            // Restore the context state
                            ctx.restore();
                            const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

                            // Set random color for text
                            let color = colors[Math.floor(Math.random() * colors.length)];
                            ctx.fillStyle = color;
                            ctx.font = "bold 30px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText("Təbriklər:)", canvas.width / 2, 280 + Math.sin(Date.now() / 200) * 10);

                            ctx.fillStyle = color;
                            ctx.font = "bold 30px Arial";
                            ctx.textAlign = "center";
                            ctx.fillText(largestIcon.username, canvas.width / 2, 240 + Math.sin(Date.now() / 200) * 10);

                            animationID = requestAnimationFrame(drawText);
                        }

                        drawText();
                    };

                    // Stop animation after 10 seconds
                    function stopAnimation() {
                        cancelAnimationFrame(animationID);
                    }

                    // let canvas2 = document.getElementById("myCanvas2");
                    // let ctx2 = canvas2.getContext("2d");

                    // if (winner.length === 3) {

                    //     ctx2.clearRect(0, 0, canvas.width, canvas.height);

                    //     winner.splice(0, 3);
                    // }


                    addWinner(largestIcon.username, largestIcon.imgUrl);


                    // // Create the winner list
                    // ctx2.font = "20px Arial";
                    // ctx2.fillStyle = "black";
                    // ctx2.fillText("Qaliblər:", 10, 30);

                    for (let i = 0; i < winner.length; i++) {
                        // Load the image
                        let img = new Image();
                        img.src = winner[i].imgurl;

                        // img.onload = function () {
                        //     ctx2.drawImage(img, 10, 50 + i * 50, 40, 40); // Draw the image with a size of 40 x 40 pixels
                        //     ctx2.fillText(i + 1 + ' - ' + winner[i].username, 60, 70 + i * 60); // Draw the username
                        // };
                    }

                    // Clear the canvas and delete all icons after 10 seconds
                    finishGame = true;
                    setTimeout(function () {


                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        canvas.width = canvas.width;
                        deleteAllIcons();
                        hideFireworkGif();
                        stopAnimation();
                    }, 10000); // 30 saniye beklet
                    return;
                }
            }
        }

        animationFrameId = requestAnimationFrame(drawIcons);
    }
}


function addWinner(userName, imgUrl) {
    winner.push({
        id: nextId++,
        username: userName,
        imgurl: imgUrl
    });
}

connection.on('like', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let likeCount = data.likeCount;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += likeCount * 0.1; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + (likeCount * 0.05);
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

    let totalLikeCount = data.totalLikeCount;


    previousLikeCount = totalLikeCount;

    messagesQueue = messagesQueue.filter(item => item.type !== 'random');

    const randomMessage = getRandomMessage();

    let cleanNickname = data.nickname.replace(/[_\$-.]/g, '');
    cleanNickname = cleanNickname.replace(/ə/g, 'e');
    cleanNickname = cleanNickname.replace(/x/g, 'k');
    if (cleanNickname.startsWith('user')) {
        cleanNickname = 'user';
    }
    let end = { text: cleanNickname + randomMessage.text, language: randomMessage.language, type: 'like' };

    if (!usernames.has(userName)) {
        messagesQueue.push(end);
        processQueue();
    }
    lakaka1(userName);

});

let availableMessages = [
    { text: "  senin dün gece ağladım" , language: " tr"  },
    { text: "  ayfondu?" , language: " tr"  },
    { text: "  ellerin dert görmesin" , language: " tr"  },
    { text: "  bu nedee metronun içinde bu nedi çekirsiz?" , language: " tr"  },
    { text: "  iyiki varsın" , language: " tr"  },
    { text: "  cimi cimi cimi haca haca haca" , language: " tr"  },
    { text: "  ben bomba kimi tiktokerim" , language: " tr"  },
    { text: "  öyle bir vakit gelecek xoş hayat görsenecek" , language: " tr"  },
    { text: "  emi kızı kurban olsun emi oğlu yatan yere" , language: " tr"  },
    { text: "  kimselere sataşma" , language: " tr"  },
    { text: " senin eşkin getirdi beni dile" , language: " tr"  },
    { text: "     kasıbın neyi olmasada bomba hayalleri var" , language: " tr"  },
    { text: "     boşansam keydiyyatda olduğum evden bana pay düşermi? kaynanamın adına ama şuan" , language: " tr"  },
    { text: " görmürem seni hayli zamandır" , language: " tr"  },
    { text: " darıhmışam o kadar darıhmışam" , language: " tr"  },
    { text: " men azadlığa çıxdım amma sen dörd divardasın" , language: " tr"  },
    { text: "  bu nedee metronun içinde bu nedi çekirsiz?" , language: " tr"  },
    { text: "  sensiz gelen yaz değil kalbim seni gözleyir" , language: " tr"  },
    { text: "  millet kazandığımız paranın hesabını yapıyor." , language: " tr"  },
    { text: "  cici kızlar merhaba nerbala çıktı ortaya" , language: " tr"  },
    { text: " şimdi ben buraya neden çıktım niyçin çıkdım?" , language: " tr"  },
    { text: "  bele pisde çıxmasın canlara değen oğlanım" , language: " tr"  },
    { text: "  seni kalbime yazdım" , language: " tr"  },
    { text: "  seni okşar şirin birini tapmışam" , language: " tr"  },
    { text: "  yat bu yuhudan oyanma bir addımda yakınlaş" , language: " tr"  },
    { text: "  Allah haqqı hee" , language: " tr"  },
    { text: "  danışırdım özümle geceler" , language: " tr"  },
    { text: "  sevgini bana çok gördün sen" , language: " tr"  },
    { text: "  derdim çok ümüdüm yok içmeye başlamışam" , language: " tr"  },
    { text: "  cansız resmime bakmayın dostlarım ben çok çetinlikler gördüm" , language: " tr"  },
    { text: "  ay nenen kurban ay baban kurban" , language: " tr"  },
    { text: "  sen giyersin giymezsin ben çorap severim" , language: " tr"  },
    { text: "   çok merddi dağlar oğlu dağlar" , language: " tr"  },
    { text: "  renci karaşa salmışam" , language: " tr"  },
    { text: "  teze iksyeddi almışam" , language: " tr"  },
    { text: "  ay hanarak neylemişem neyliyim? hengel alım bağıım başım neyleyim?" , language: " tr"  },
    { text: "  bizim ikimizde deliyiz" , language: " tr"  },
    { text: "  hayır ola hansı sepepten dağıdıb benim ailemi" , language: " tr"  },
    { text: "  yadıma düşür kövrelirem o günler" , language: " tr"  },
    { text: "  tanıyır hamı meni sürürem geceni selikeli" , language: " tr"  },
    { text: " çorap bir kültürdür" , language: " tr"  },
    { text: "  benim peşimi kızlar bırakmıyorda" , language: " tr"  },
    { text: "  siyaset pulnan idare olunur" , language: " tr"  },
    { text: "  sen üreksen" , language: " tr"  },
    { text: "  nerelerdeydin sen" , language: " tr"  },
    { text: "  beni seviyormusun?" , language: " tr"  },
    { text: "  bügun kendini nasıl hiss ediyorsun?" , language: " tr"  },
    { text: "  sen ne güzel insansın" , language: " tr"  },
    { text: "  aşk başımıza bela" , language: " tr"  },

    { text: " men azadlığa çıxdım amma sen dörd divardasın" , language: " tr"  },
    { text: "  bağlanmayın a kişi" , language: " tr"  },
    { text: "  uça uça geleceyem gel desen" , language: " tr"  },
    { text: "  o seni kandırıyor" , language: " tr"  },
    { text: "  gizlederem seni gözümün karasında" , language: " tr"  },
    { text: "  günah priusdadır" , language: " tr"  },
    { text: "  ŞAkmandır şakman" , language: " tr"  },
    { text: "  simba ürekdi" , language: " tr"  },
    { text: "  alışır gözler heraretden bakışım onu deli edir" , language: " tr"  },
    { text: "  sevmedime geldim baktım vay Allah gördüm büyük adam dedim vayyy" , language: " tr"  },
    { text: "  burda bir tane güzellik var" , language: " tr"  },
    { text: "  buzovum çok keşeydi" , language: " tr"  },
    { text: "  derdi kemi atmışam bakını şekiye katmışam" , language: " tr"  },
    { text: "  telefonuvun kodu ne?" , language: " tr"  },
    { text: "  ben sana göre yaşıyorum" , language: " tr"  },
    { text: "  onda bidene saçımı düzeldim" , language: " tr"  },
    { text: "  dustaq yoldaşım simba seni salamlayıram qardaşım" , language: " tr"  },
    { text: " elli bin neye vermişeme buna" , language: " tr"  },
    { text: "  Akulalar oyaktılar yatmıyıb" , language: " tr"  },
    { text: "  ekranı dıklayın" , language: " tr"  },
    { text: "  kurban olum gözlere kaşlara" , language: " tr"  },
    { text: " sen giyersin giymezsin ben çorap severim" , language: " tr"  },
    { text: "  seni sevmeyen ölsün" , language: " tr"  },
    { text: "  hasretini yollarını seribem" , language: " tr"  },
    { text: "  Karabağ Azerbaycandır!" , language: " tr"  },
    { text: "  oydaa gözlerim açılmır. ama açılmalıdır bu yakında" , language: " tr"  },
    { text: "  karaçıların elinden canımız boğaza yığılıb" , language: " tr"  },
    { text: "  yatıram gece uykumda görürem seni yanımda" , language: " tr"  },
    { text: "  vuruldum sana" , language: " tr"  },
    { text: "  sen bezeksen bende nakış" , language: " tr"  },
    { text: " bidene ele bidene bele eleye bilersen bele?" , language: " tr"  },
    { text: " bir dakika deyanın da bıra bırı bır bıra bıra bır" , language: " tr"  },
    { text: "  takor RS teqdim edir" , language: " tr"  },
    { text: "  bu mehmireden de güzeldi" , language: " tr"  },
    { text: "  bügün kafamı duvara vurdum  aklıma geleni serehliyorum" , language: " tr"  },
    { text: "  sigaram bitdi ne yapayım? " , language: " tr"  },
    { text: "  kırk kepiyin olmaz?" , language: " tr"  },
    { text: "  azelov ölmeyib a kişi" , language: " tr"  },
    { text: "  nerde hakk edalet göster bana" , language: " tr"  },
    { text: "  dandili dandili dastana danalar girmiş bostana" , language: " tr"  },
    { text: "  qoy bütün alem bizden danışsın" , language: " tr"  },
    { text: " ay xanaraq neylemişem neyliyim? xengel alim bağım başım neyleyim?" , language: " tr"  },
    { text: "  kime isteyirsiz salam deyin" , language: " tr"  },
    { text: "  dünen yene yapayalnız dolaşdım yollarda" , language: " tr"  },
    { text: "   başıma bir taş düşeydi o kızı alanda  ay kaynana" , language: " tr"  },
    { text: "  sen daha iyilerine layıksın" , language: " tr"  },
    { text: " uzaktan seviyorum seni" , language: " tr"  },
    { text: " niye ümid veriyorsun bana" , language: " tr"  },
    { text: " senin kruqun kimdi?" , language: " tr"  },
    { text: "  hayatımın anlamısın" , language: " tr"  },
    { text: " Şahta baba şahtacan nerdesin bu vakta can" , language: " tr"  },
    { text: " menim enerjim getdi artıq" , language: " tr"  },
    { text: "  eşk olsun sana" , language: " tr"  },
    { text: "  mene bak yaşa mutlu ol kim bilir sabah gelecekmi?" , language: " tr"  },
    { text: "  geceleri geç saatlarda uyuma kendine iyi bak" , language: " tr"  },
    { text: "  budu benimdi budu" , language: " tr"  },
    { text: "  hasretin çektiyim yarım ele kadasın men alım" , language: " tr"  },
    { text: "  fikrim senin yanında" , language: " tr"  },
    { text: "  sensin çare derdime" , language: " tr"  },
    { text: "  gizlederem seni gözümün karasında" , language: " tr"  },
    { text: "  yahşılara salam olsun" , language: " tr"  },
    { text: " sen giyersin giymezsin ben çorap severim" , language: " tr"  },
    { text: "  mukurufunu koy yere" , language: " tr"  },
    { text: "  şaqmandı qaqam şaqman" , language: " tr"  },
    { text: "  senin adın ne ?" , language: " tr"  },
    { text: "  buzovum çok keşeydi" , language: " tr"  },
    { text: " dilberim dilber " , language: " tr"  },
    { text: "  Allah haqqı hee" , language: " tr"  },
    { text: " ben sana biganelerden olmadim ki" , language: " tr"  },
    { text: " hasretim ben sana deli gibi hasretim" , language: " tr"  },
    { text: " başka rengte bakıyor gözlerin" , language: " tr"  },
    { text: " demişdi getmerem ne oldu ? getdi ama" , language: " tr"  },
    { text: "  yeni yılda neler yapacaksın? " , language: " tr"  },
    { text: " dünya çok etibarsız" , language: " tr"  },
    { text: " sen canımdan ayrı cansan" , language: " tr"  },
    { text: " ceklidi qaqam cekli" , language: " tr"  },
    { text: "  alışır gözler heraretden bakışım onu deli edir" , language: " tr"  },
    { text: " derdine derman olaram" , language: " tr"  },
    { text: " lezetli dvijenyalar" , language: " tr"  },
    { text: "  yaşla dolan gözlerine gözlerim kurban" , language: " tr"  },
    { text: " yığılır bradyaqalar" , language: " tr"  },
    { text: " seveceyem sev desen" , language: " tr"  },
    { text: " bu görüntüden bu duruşdan dınqıl armani nasıl korkmasın?" , language: " tr"  },
    { text: " şappur şuppur beni öp" , language: " tr"  },
    { text: " bu sözleri tekrar edirik" , language: " tr"  },
    { text: "  dünya senin dünya benim dünya heç kimin" , language: " tr"  },
    { text: "  biz dikkat elemerik dikkat çekerik" , language: " tr"  },
    { text: "  nömre ezilib yoksa buufer?" , language: " tr"  },
    { text: "  her kes uçuşuyor" , language: " tr"  },
    { text: "  bakışın karşısısında çetin ki bir kes dayana" , language: " tr"  },
    { text: "  onsuz her saniye ölürem" , language: " tr"  },
    { text: "  cebinde ne kadar paran var?" , language: " tr"  },
    { text: "  aşkından geberdiyim nasılsın?" , language: " tr"  },
    { text: "  gizlederem seni gözümün karasında" , language: " tr"  },
    { text: "  ıslanmışın yağışdan ne korkusu?" , language: " tr"  },
    { text: "  yeni yıl sana düşerli olsun " , language: " tr"  },
    { text: "  nerede yaşıyorsun?" , language: " tr"  },
    { text: "  sen gidenden sonra gün görmemişem" , language: " tr"  },
    { text: "  kaç yaşın var?" , language: " tr"  },
    { text: "  seni kımışdıranı bulacam" , language: " tr"  },
    { text: "  emon limon emonda fantastik hediyyeler var" , language: " tr"  },
    { text: "  bir defa hoddandımsa dayanamıyorum" , language: " tr"  },
    { text: "  ne güzelsin" , language: " tr"  },
    { text: " neyleyim axı men sensizliye öyreşmemişem" , language: " tr"  },
    { text: " Şahta baba şahtacan nerdesin bu vakta can" , language: " tr"  },
    { text: "  lütfen arkadaşlarını davet et" , language: " tr"  },
    { text: "  Seni seviyorum" , language: " tr"  },
    { text: " bu görüntüden bu duruşdan dınqıl armani nasıl korkmasın?" , language: " tr"  },
    { text: "  şeytan olum sen bana taş  at ginen" , language: " tr"  },
    { text: "  hayf ona ayırdığım geceler" , language: " tr"  },
    { text: " kapını möhkem vurma teze koydurduk" , language: " tr"  },
    { text: "  bu nedee metronun içinde bu nedi çekirsiz?" , language: " tr"  },
    { text: "  dustaq yoldaşım simba seni salamlayıram qardaşım" , language: " tr"  },
    { text: "  nemli bakan bakışına bu canım kurban" , language: " tr"  },
    { text: " ama seni seviyorum findik burunlum dedi. oysaki benim burnum keleş gibi" , language: " tr"  },
    { text: " humarit brat" , language: " tr"  },
    { text: " inanma eşqi yalandır" , language: " tr"  },
    { text: " sen de görüm haralısan karabala" , language: " tr"  },
    { text: " tavşanımın hamile olduğundan şüpheleniyorum" , language: " tr"  },
    { text: " sen varavıskoy kakamızsan bizim" , language: " tr"  },
    { text: " Benim ondan gözüm su içmiyor" , language: " tr"  },
    { text: " Kasıbların kadasını alım" , language: " tr"  },
    { text: " yok yok anam emele gelmez" , language: " tr"  },
    { text: " hasret ne demekdir bilirem" , language: " tr"  },
    { text: " metalona demir alıyorum demir" , language: " tr"  },
    { text: " koyunların kırılsın" , language: " tr"  },
    { text: " yahşı gedebey kartofu var kartof" , language: " tr"  },
    { text: " otuz üç yaşım var" , language: " tr"  },
    { text: " bidene çay verersen?" , language: " tr"  },
    { text: " bardan kendime kız tapdım" , language: " tr"  },
    { text: " canlını yağmur bastı her kes uçuyor" , language: " tr"  },
    { text: " hayıf benim aziyyetime elşad hayıf" , language: " tr"  },
    { text: " mırr hav hav" , language: " tr"  },
    { text: " şap şap şap" , language: " tr"  },
    { text: " Halım yamandı" , language: " tr"  },
    { text: "diri diri bastır beni reşadd" , language: " tr"  },
    { text: "arzularımı üreyimde koyma reşad" , language: " tr"  },
    { text: " biz hara gelmişik a çanuvu yeyim" , language: " tr"  },
    { text: " yeni yılda sana ne hediyye alacaklar?" , language: " tr"  },
    { text: " ne emi var nedeki dayı" , language: " tr"  },
    { text: " o cürüne berk sürme dayı" , language: " tr"  },
    { text: " şahtababanın çestine değmeyin" , language: " tr"  },
    { text: "  başım karışıkdı beni lider tv de göstereçekler" , language: " tr"  },
    { text: " k im top tüfengnen üstümeze gelecek öz silahıyla geberecek" , language: " tr"  },
        { text: " keçel keçel bamiye getdim merizxariye" , language: " tr"  },
    { text: "  gece karadı cüce karadı yetim gören bura haradı" , language: " tr"  },
    { text: "  yapma biz arkadaşıq" , language: " tr"  },
    { text: "  bu yeni yılada yalnız giriyoruz" , language: " tr"  },
    { text: " kapital bank olmasa gül gibi hayatım vardı" , language: " tr"  },
    { text: " deyirler ki hürrem kaçıb saraydan" , language: " tr"  },
    { text: " sen o taydan denen bende bu taydan" , language: " tr"  },
    { text: " biz kimselere pahıllık etmeriz kimlerse bize pahıllık eder" , language: " tr"  },
    { text: " ay menim alın yazım, gel senin çekim nazın" , language: " tr"  },
    { text: " Hoşkedem kaybolmuş" , language: " tr"  },
    { text: " ne kadar kredi borcun var?" , language: " tr"  },
    { text: " eleme onu eleme" , language: " tr"  },
    { text: " ben her kese pathot ediyorum çünki sizi seviyorum" , language: " tr"  },
    { text: " Benim kafam infakt geçirdi" , language: " tr"  },
    { text: "  Allah haqqı hee" , language: " tr"  },
    { text: " herkes kaçışıyor" , language: " tr"  },
    { text: " mauqlidi kakam mauqli" , language: " tr"  },
    { text: " erkekler ne ister?" , language: " tr"  },
    { text: " kızlar ne ister?" , language: " tr"  },
    { text: "  dustaq yoldaşım simba seni salamlayıram qardaşım" , language: " tr"  },
    { text: " seni getirecem rusiyada saxlayacam.öyüm var eşiyim var" , language: " tr"  },
    { text: " Yakıyorsun buraları" , language: " tr"  },
    { text: " Günah kimdedir?" , language: " tr"  },
    { text: " kimdi küsdü cavanlığım" , language: " tr"  },
    { text: " her kim aşık ola bu dünyada vay onun evi talandır" , language: " tr"  },
    { text: " Cavanın gülmeyi bana hoş gelir" , language: " tr"  },
    { text: " konuşmakdan yoruldum" , language: " tr"  },

    { text: " Hoşkedem kaybolmuş" , language: " tr"  },
];
let usedMessages = [];

function getRandomMessage() {
    if (availableMessages.length === 0) {
        // Tüm mesajlar kullanıldıysa, listeyi sıfırla
        availableMessages = usedMessages;
        usedMessages = [];
    }

    const randomIndex = Math.floor(Math.random() * availableMessages.length);
    const selectedMessage = availableMessages[randomIndex];

    // Seçilen mesajı kullanılabilir listesinden çıkar ve kullanılanlara ekle
    availableMessages.splice(randomIndex, 1);
    usedMessages.push(selectedMessage);

    return selectedMessage;
}
connection.on('member', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40;
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }

    // messagesQueue = messagesQueue.filter(item => item.type !== 'random');


    // const messages = [
    //     { text: " hoş geldin", language: "tr" },
    //     { text: " Seni bekliyorduk", language: "tr" },
    //     { text: " Hoş geldin ,Lütfen arkadaşlarını davet et", language: "tr" },
    //     { text: " Hoş geldin , Seni Seviyoruz", language: "tr" },
    //     { text: " Desteğin için teşekkür ederiz", language: "tr" },


    //     // { text: " welcome", language: "en" },
    // ];

    // function getRandomMessage(messages) {
    //     const randomIndex = Math.floor(Math.random() * messages.length);
    //     return messages[randomIndex];
    // }
    // const randomMessage = getRandomMessage(messages);


    // let end = { text: data.nickname + randomMessage.text, language: randomMessage.language, type: 'member' };

    // if (!usernames.has(userName)) {
    //     messagesQueue.push(end);
    //     processQueue();
    // }
    // lakaka1(userName);

})

connection.on('social', (data) => {

    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;

    if (!finishGame) {
        if (data.displayType === "pm_main_follow_message_viewer_2") {
            for (let i = 0; i < iconList.length; i++) {
                if (iconList[i].username === userName) {
                    iconList[i].size += 10; // add 20 to each object's value property
                    let icons = document.getElementsByClassName('icon');
                    for (let j = 0; j < icons.length; j++) {
                        if (icons[j].src === iconList[i].imgurl) {
                            if (newSize > 400) {
                                icons[j].style.width = iconList[i].size + 'px';
                                icons[j].style.height = iconList[i].size + 'px';
                                icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                                icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                            }
                            break;
                        }
                    }
                    userlistExist = true;
                    if (iconList[i].size > 400) {
                        iconList[i].size = 400; // if value goes over 400, set it to 400
                        break; // stop the loop if any value goes over 400
                    }
                }
            }

            if (!userlistExist) {
                const iconSize = 40 + 10;
                const iconImgUrl = profilePictureUrl;

                const icon = {
                    x: Math.floor(Math.random() * (canvas.width - iconSize)),
                    y: Math.floor(Math.random() * (canvas.height - iconSize)),
                    size: iconSize,
                    imgUrl: iconImgUrl,
                    img: new Image(),
                    username: userName,
                };

                iconList.push(icon);

                drawIcons();
            }
        }
        if (data.displayType === "pm_mt_guidance_share") {
            for (let i = 0; i < iconList.length; i++) {
                if (iconList[i].username === userName) {
                    iconList[i].size += 3; // add 20 to each object's value property
                    let icons = document.getElementsByClassName('icon');
                    for (let j = 0; j < icons.length; j++) {
                        if (icons[j].src === iconList[i].imgurl) {
                            if (newSize > 400) {
                                icons[j].style.width = iconList[i].size + 'px';
                                icons[j].style.height = iconList[i].size + 'px';
                                icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                                icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                            }
                            break;
                        }
                    }
                    userlistExist = true;
                    if (iconList[i].size > 400) {
                        iconList[i].size = 400; // if value goes over 400, set it to 400
                        break; // stop the loop if any value goes over 400
                    }
                }
            }

            if (!userlistExist) {
                const iconSize = 40 + 0.5;
                const iconImgUrl = profilePictureUrl;

                const icon = {
                    x: Math.floor(Math.random() * (canvas.width - iconSize)),
                    y: Math.floor(Math.random() * (canvas.height - iconSize)),
                    size: iconSize,
                    imgUrl: iconImgUrl,
                    img: new Image(),
                    username: userName,
                };

                iconList.push(icon);

                drawIcons();
            }
        }

    }

})



// // New gift received
connection.on('gift', (data) => {
    if (finishGame) {
        return;
    }
    let userName = data.uniqueId;
    giftCount = (data.diamondCount * data.repeatCount);
    let profilePictureUrl = data.profilePictureUrl;
    let userlistExist = false;
    if (!finishGame) {
        for (let i = 0; i < iconList.length; i++) {
            if (iconList[i].username === userName) {
                iconList[i].size += giftCount * 7.5; // add 20 to each object's value property
                let icons = document.getElementsByClassName('icon');
                for (let j = 0; j < icons.length; j++) {
                    if (icons[j].src === iconList[i].imgurl) {
                        if (newSize > 400) {
                            icons[j].style.width = iconList[i].size + 'px';
                            icons[j].style.height = iconList[i].size + 'px';
                            icons[j].style.top = ((window.innerHeight - iconList[i].size) / 2) + 'px';
                            icons[j].style.left = ((window.innerWidth - iconList[i].size) / 2) + 'px';
                        }
                        break;
                    }
                }
                userlistExist = true;
                if (iconList[i].size > 400) {
                    iconList[i].size = 400; // if value goes over 400, set it to 400
                    break; // stop the loop if any value goes over 400
                }
            }
        }

        if (!userlistExist) {
            const iconSize = 40 + (giftCount * 7.5);
            const iconImgUrl = profilePictureUrl;

            const icon = {
                x: Math.floor(Math.random() * (canvas.width - iconSize)),
                y: Math.floor(Math.random() * (canvas.height - iconSize)),
                size: iconSize,
                imgUrl: iconImgUrl,
                img: new Image(),
                username: userName,
            };

            iconList.push(icon);

            drawIcons();
        }
    }


    // const messages = [
    //      { text: " adlı hesaba her kes takip atsın", language: "tr" },
    //     { text: "Teşekkür ederim, hediye için!", language: "tr" },
    //     { text: "Kendini gösteriyor,Her kes takip göndersin", language: "tr" },
    //     { text: "Harikasın.Takip edin", language: "tr" },
    //     { text: "Kesene bereket", language: "tr" },
    //     // { text: "Daha hızlı büyüyorsun", language: "tr" },
    //     { text: "Seni çok seviyorum,Lütfen her kes takip etsin ", language: "tr" },
    //     { text: "Geri dönüşleri çok iyi", language: "tr" },
    //     // { text: "Resmin daha hızlı büyüyor böyle davam et", language: "tr" },

    // ];

    // messagesQueue = messagesQueue.filter(item => item.type !== 'random')

    // function getRandomMessage(messages) {
    //     const randomIndex = Math.floor(Math.random() * messages.length);
    //     return messages[randomIndex];
    // }
    // const randomMessage = getRandomMessage(messages);


    // let end = { text: data.nickname + randomMessage.text, language: randomMessage.language, type: 'gift' }; // type ekle

    // if (!usernames.has(userName)) {
    //     messagesQueue.push(end);
    //     processQueue();
    // }

    // lakaka1(userName);

})

function onEnd() {
    messagesQueue.shift();
    processQueue();
}

function containsBannedWords(text) {
    const bannedWords = ["pox", "cindir", "amciq", "got", "meme", "məmə", "dillaq", "dıllağ", "göt", "amcıq", "Bok", "am", "kahbe", "Qəhbə", "Qancıx", "Götveren"];

    for (const word of bannedWords) {
        if (text.match(new RegExp('\\b' + word + '\\b', 'gi'))) {
            return true;
        }
    }

    return false;
}



function speak(text) {
    if (containsBannedWords(text)) {
        text = "söyüş söyme";
        let ms = [
            { text: text, language: "en" }]

    }
    responsiveVoice.speak(ms, "Turkish Male", { rate: defaultRate, onend: onEnd });
}

function processQueue() {
    if (messagesQueue.length > 0) {
        // Şu anda seslendirme yapılıp yapılmadığını kontrol et
        if (!responsiveVoice.isPlaying()) {
            let message = messagesQueue[0].text;
            let language = messagesQueue[0].language;

            // Dil tercihine göre seslendirme yapın
            switch (language) {
                case 'tr':
                    // Türkçe seslendirme
                    responsiveVoice.speak(message, "Turkish Male", { rate: defaultRate, onend: onEnd });
                    break;
                case 'en':
                    // İngilizce seslendirme
                    responsiveVoice.speak(message, "UK English Male", { rate: defaultRate, onend: onEnd });
                    break;

                default:
                    // Dil tespit edilemediğinde varsayılan olarak İngilizce kullanın
                    responsiveVoice.speak(message, "Turkish Male", { rate: defaultRate, onend: onEnd });
                    break;
            }
        } else {
            // Eğer şu anda seslendirme yapılıyorsa, bekleyen sesleri sil ve yeni mesajları ekle
            messagesQueue.shift();
            processQueue();
        }
    }
}


// Otomatik seslendirme başlatma
window.addEventListener("load", async () => {
    try {
        // Kullanıcıdan otomatik seslendirmeye izin isteyin
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        await audioContext.resume();


    } catch (error) {
        console.error("Otomatik seslendirme başlatılamadı:", error);
    }
});



function lakaka1(username) {


    // Eğer username zaten usernames Map'inde bulunuyorsa, işlemi sonlandır
    if (usernames.has(username)) {
        return;
    }

    // username'i usernames Map'ine ekle ve şu anki zamanı değer olarak ata
    usernames.set(username, Date.now());

    // 30 saniye sonra username'i kontrol et ve eğer süre geçtiyse usernames Map'inden çıkar
    setTimeout(() => {
        const timestamp = usernames.get(username);
        if (Date.now() - timestamp >= 30000) {
            usernames.delete(username);
        }
    }, 30000);

}
// setInterval(addRandomMessage, 20000);

function isPendingStreak(data) {
    return data.giftType === 1 && !data.repeatEnd;
}

// End
connection.on('streamEnd', () => {
    $('#stateText').text('Canlı sona çatdı.');
})
