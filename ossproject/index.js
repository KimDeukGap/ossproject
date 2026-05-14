let totalRounds = 0;
let currentRound = 1;
let maxRound = 0;
let availableQuestions = [];
let timeLeft = 7;
let countdown;
let score = 0; // 점수 저장

// 이미지와 정답 매칭 배열
const questions = [
    // 콘솔게임
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyNTAxMjFfOTcg/MDAxNzM3NDY5NTc1NjIy.-5Ch_GkaGk8f_gu38G64F4ZSMpBUrckvLV7Md8Iblmkg.64geqU9XL5jpb7At4Uh67FS6xx3rLlL0jYOQMUmz__wg.JPEG/image.JPEG?type=w800", answer: ["마리오", "슈퍼마리오"]},
    { img: "https://cdn.eyesmag.com/content/uploads/posts/2024/11/08/2-7e76f15a-ecee-42da-a76e-5600bbae2b41.jpg", answer: "젤다의전설"},
    { img: "https://i.namu.wiki/i/n9cJkqc7f6-70zrZfGX6cpfPv5HWakQrqzWEgTfFRCfRo_iGaUzgGVnAlY0CRQ-eSZKdoe_foicfOCq9qUwg_w.webp", answer: "메트로이드" },
    { img: "https://i.namu.wiki/i/uKv91PAbQzefb1N38cjFPUCqqRJgKgRg10n8BtK2nHPrPtehbaLlt63dZw0eNfrih6ZXYC89eRz6f8gN79EgGA.webp", answer: ["스플래툰", "스플레툰"]},
    { img: "https://i.namu.wiki/i/wXGU6DZbHowc6IB0GYPJpcmdDkLO3TW3MHzjg63jcTJvIzaBKhYqR0l9toBMHTv2OSU4eFKfPOlfrSQpymDJlA.webp", answer: "별의커비"},
    { img: "https://i.namu.wiki/i/KXeK4nhtmO69HJFBFhW42CeSZJCCHQ0Tsb8Wlcutdv03WQy1wbF0mgASU43f7b_uR_qtD_YmH3mxp0UxgUkjeQ.webp", answer: ["포켓몬", "포캣몬"]},
    { img: "https://sm.ign.com/ign_kr/gallery/s/smash-bros/smash-bros-switch-every-fighter-revealed_5euv.jpg", answer: ["스매시브라더스","스메시브라더스"] },
    { img: "https://blog.kakaocdn.net/dn/m3POB/btsKLvUBFLv/8SBNHhKbzkMNTvygRBief0/img.png", answer: "피그민" },
    { img: "https://i.namu.wiki/i/oU0avPQmlPv0p13BPnuEqyzmtGl9SoTArdKVYpb1r5CYXrpUjEqtiurvlFDjpXdOMyDXwIFYpz0x3PgtS92_8A.webp", answer: "동물의숲"},
    { img: "https://i.namu.wiki/i/q1MDWyzDOj1xectkNnkmaHFH9MWanNG1FpE1VFS3g5LKkY_gZlvlGDU2o0YURAus9_hKKOyoZD_koahnh-K_jA.webp", answer: "동키콩" },
    { img: "https://cdn.gamemeca.com/gmdb/g000/41/01/233303.jpg", answer: "레이튼교수와이상한마을" },
    { img: "https://i.namu.wiki/i/pCqdc_gEkNPEpRh2Xe8XnR8EsT0fyYHUSM6OmHGyMr06qvs8q9hpAnJWs_vkYwTn9dKPChxjbJ3Oa2od23zWZw.webp", answer: "요괴워치"},
    { img: "https://i.namu.wiki/i/Fnkpg6KVcMtctMyh3BBSUp4wt-orGTmg7yPnghBrypidhHP5TcKgk74Kvz7cqFMGGyl70YfPPiBZDSNZuyRkUA.webp", answer: "드래곤퀘스트"},
    { img: "https://search.pstatic.net/sunny/?src=https%3A%2F%2Fi3.ruliweb.com%2Fori%2F21%2F07%2F20%2F17ac467b44f433d.jpg", answer: ["파이널판타지", "파판"]},
    { img: "https://www.esquirekorea.co.kr/resources_old/online/org_online_image/eq/e36adf07-43e4-469b-ab81-0780f56fe63d.jpg", answer: ["스파이더맨게임", "스파이더맨"]},
    { img: "https://cdn.fetv.co.kr/news/photo/202412/182588_1_126.jpg", answer: "아스트로봇" },

    // PC게임
    { img: "https://i.ytimg.com/vi/SBML9dmJkxE/maxresdefault.jpg", answer: ["리그오브레전드","리그오브래전드","롤","LOL","lol"]},
    { img: "https://www.krafton.com/wp-content/uploads/2021/06/battle-bg1-min.png", answer: ["배틀그라운드","배그", "베틀그라운드"] },
    { img: "https://image.xportsnews.com/contents/images/upload/article/2020/0707/1594108790522089.jpg", answer: ["발로란트","발로란트"] },
    { img: "https://i.namu.wiki/i/NUzo8Y8CQrxIjuZF9SlDK1ciyYMegj3PRFRi4x6qd6ll4C-jY3BEk4sPPACnrYCwWvbIZDYM49XSqT6gkBaNmg.webp", answer: ["메이플스토리","메이플"]},
    { img: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/18/bde34890-427b-4fcd-b938-a692b2198dc4.jpg", answer: ["던전엔파이터","던파"] },
    { img: "img/img22.jpg", answer: ["서든어택","서든"] }, //img 폴더에 넣어놨음 따로 설정 X
    { img: "https://cdn.gamemeca.com/gmdata/0001/758/836/gm791625_123167899.jpg", answer: ["레포(R.E.P.O.)","레포"] },
    { img: "https://i.namu.wiki/i/vNQW1biNNsq6NbMIHv9Y3OmFvTxmUrWuRS6cmbblOrXZEFNGIp11NTPDZaVPL_fWu0-Is-qz3C6GEgse19HI-A.webp", answer: ["로스트아크","로아"] },
    { img: "https://media.bunjang.co.kr/product/86357598_1_1530373942_w360.jpg", answer: ["피파","피파온라인"] },
    { img: "https://images.ctfassets.net/h1rqp7q66d54/3yVDlCOrJnXMrb0yS4ea0y/d93ed97030eb7c233384e5a551aeaea7/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV_opt__1_.jpg", answer: ["GTA","GTA5", "GTA3", "그타", "지티에이"] },
    { img: "https://www.videogameschronicle.com/files/2022/02/sds5.jpg", answer: "엘든링"},
    { img: "https://sm.ign.com/t/ign_kr/cover/m/minecraft/minecraft_9hhx.600.jpg", answer: "마인크래프트"},
    { img: "img/img29.jpg", answer: "스타크래프트"}, //img 폴더에 넣어놨음 따로 설정 X
    { img: "img/img30.jpg", answer: "팰월드"}, //img 폴더에 넣어놨음 따로 설정 X
    { img: "https://i.namu.wiki/i/HLF818BA17ND4jqwDeTUNQUF1SqBkwARlW5K8U_jo6P031Jrh7QsT1TNocYCqwmpLP8tOWtrOEOuVtIDqNEFWQ.webp", answer: ["오버워치","옵치"] },
    { img: "img/img32.jpg", answer: "마비노기" }, //img 폴더에 넣어놨음 따로 설정 X
    { img: "https://i.ytimg.com/vi/i_cCiMG-fyg/maxresdefault.jpg", answer: "카트라이더" },
    { img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/5f8d164d8269cffacc89422054b94c70/roblox-logo.png", answer: "로블록스" },


    // 모바일게임
    { img: "https://mblogthumb-phinf.pstatic.net/20130611_193/ddihw_1370876465583yUGJa_JPEG/IMG_0139.jpg?type=w420", answer: "모두의마블"},
    { img: "https://flexible.img.hani.co.kr/flexible/normal/384/640/imgdb/resize/2012/0918/00444296501_20120918.webp", answer: "애니팡" },
    { img: "https://i.namu.wiki/i/VgSuAIeIK_qkR0PGFHRyQUMdrHX1jwsiQd3Q2q-h3ZteXe7g4r7uBGARXWmIFtaKoHtDnvwCCkKvQfHbQHvHQw.webp", answer: "쿠키런" },
    { img: "https://image.dongascience.com/Photo/2016/07/14684554927602.jpg", answer: ["포켓몬go","포켓몬고", "포캣몬고"] },
    { img: "https://i.ytimg.com/vi/0fPTjMzh-1w/maxresdefault.jpg", answer: "좀비고" },
    { img: "https://i.namu.wiki/i/BapdA1Ge-Lx9xECCtTbVwn24ZcvkroTatxJTNDnN4IX0HFhLjV93rmO8uqlqhcrQuhxCxlhzSBwaIoibYdWKSQ.webp", answer: "무한의계단"},
    { img: "https://wimg.heraldcorp.com/content/default/2013/02/27/20130227000676_0.jpg", answer: "바운스볼"},
    { img: "https://i.namu.wiki/i/stFRaj4yc5qgNHLfG-RJAhJU2HvXQOehs0L1kBbNvtY6wT78U0ShoipHLGy25P78F95bV8oOR0zZuZHKZ2LMBg.webp", answer: ["템플런","탬플런"] },
    { img: "https://db.kookje.co.kr/news2000/photo/2023/0222/20230222.99099006692i2.jpg", answer: "서브웨이서퍼"},
    { img: "https://upload3.inven.co.kr/upload/2025/11/15/bbs/i1825978851.png", answer: "앵그리버드"},
    { img: "https://cdn.gamey.kr/news/photo/201601/1624427_68495_1403.jpg", answer: "포우"},
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjFfMTIz/MDAxNTgyMjU4NzEwNTkz.It31_swi3kDrQiaYbeTRdSk4VvPSZK1TK1-VrylJlqQg.p6lYLLJud7pMl2ar2e2Etew0LLfao5ryKg0WARLEtzsg.JPEG.dpeb011/20200221_130014.jpg?type=w800", answer: ["슈퍼팽귄","슈퍼펭귄"] },
    { img: "https://i.namu.wiki/i/HiWaTw5E7oL7Pi__fHTZW4nVYmrMPLcQIUImJ73oiYHRmDJrX9Is43D3r5PqDZvQqCBuhVN7xT2ipKEJspCE6g.webp", answer: "마피아42" },
    { img: "https://cdn.newspost.kr/news/photo/201301/14128_20148_719.png", answer: "윈드러너"},
    { img: "https://i.namu.wiki/i/3YTjbMfv46w2PBqCKt0JmwvyrbrrmEURyhs9J3zmxDePWkmlQUuBh6KM3VcYlFAv5T7O9UGReI6HKaA6aVCN2w.webp", answer: "캔디크러쉬사가"},
    { img: "https://mblogthumb-phinf.pstatic.net/20160305_26/ddihw_1457181791236gqO2Y_JPEG/1.jpg?type=w420", answer: "클래시로얄"}
];




function startGame(count) {
    totalRounds = count;
    maxRound = count;
    currentRound = 1;
    score = 0;

    document.getElementById("round-info").textContent = "라운드: " + currentRound + "/" + totalRounds;
    availableQuestions = shuffle(questions).slice(0, maxRound);

    document.getElementById("setup").style.display = "none";
    document.getElementById("game-display").style.display = "block";

    loadQuestion();
    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    if (countdown) clearInterval(countdown);

    timeLeft = 7;
    timerElement.textContent = `남은 시간: ${timeLeft}초`;
    timerElement.style.color = "black";
    timerElement.style.fontWeight = "normal";

    countdown = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `남은 시간: ${timeLeft}초`;

        if (timeLeft < 4) {
            timerElement.style.color = "red";
            timerElement.style.fontWeight = "bold";
        }

        if (timeLeft <= 0) {
            clearInterval(countdown);
            nextRound();
        }
    }, 1000);
}

function nextRound() {
    const roundElement = document.querySelector('#room-info span');
    const timerElement = document.getElementById('timer');

    if (currentRound < maxRound) {
        currentRound++;
        roundElement.textContent = `라운드: ${currentRound}/${maxRound}`;
        loadQuestion();
        startTimer();
    } else {
        endGame();
    }
}

function loadQuestion() {
    const questionArea = document.getElementById("question-area");
    const currentQuestion = availableQuestions[currentRound - 1];
    questionArea.innerHTML = `<img src="${currentQuestion.img}" alt="문제 이미지" style="max-width:100%; height:auto;">`;
}

function endGame() {
    document.getElementById("game-display").style.display = "none";
    document.getElementById("result-display").style.display = "block";

    document.getElementById("final-score").innerHTML = `
        전체 문제 수: ${maxRound}문제 <br>
        맞춘 갯수: ${score}개
    `;
}


function shuffle(array) {
    let arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 정답 제출 함수
function submitAnswer() {
    const userAnswer = document.getElementById("user-answer").value.trim();
    const feedbackElement = document.getElementById("feedback");

    if (userAnswer === "") {
        feedbackElement.textContent = "정답을 입력하세요!";
        feedbackElement.style.color = "orange";
        return;
    }

    const currentQuestion = availableQuestions[currentRound - 1];

    // 여러 정답 중 하나라도 맞으면 정답 처리
    if (currentQuestion.answer.includes(userAnswer)) {
        score++;
        feedbackElement.textContent = "정답!";
        feedbackElement.style.color = "green";
    } else {
        // answer가 배열일 수도 있으니 첫 번째 값을 대표로 사용
    const correctName = Array.isArray(currentQuestion.answer) 
        ? currentQuestion.answer[0] 
        : currentQuestion.answer;

    // 부모 요소 색상 초기화
    feedbackElement.style.color = "black";

    // 오답!만 빨간색
    feedbackElement.innerHTML = `<span style="color:red;">오답!</span> - ${correctName}`;
}

    document.getElementById("user-answer").value = "";
    clearInterval(countdown);

    setTimeout(() => {
        feedbackElement.textContent = "";
        nextRound();
    }, 1000);
}



document.addEventListener('DOMContentLoaded', () => {
    const answerButton = document.getElementById("send-btn");
    const answerInput = document.getElementById("user-answer");

    // 버튼 클릭
    answerButton.addEventListener("click", submitAnswer);

    // 엔터 키 입력
    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            submitAnswer();
        }
    });
});
