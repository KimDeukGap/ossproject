let totalRounds = 0;
let currentRound = 1;
let maxRound = 0;
let availableQuestions = [];
let timeLeft = 10;
let countdown;
let score = 0; // 점수 저장


// 이미지와 정답 매칭 배열
const questions = [
    // 콘솔게임
    { img: "https://mblogthumb-phinf.pstatic.net/MjAxODA2MDFfMTk1/MDAxNTI3Nzg2MDc1MDkw.owbtvbXghF5kUPN5s9a-vMv9OxIDVx0rT3AjyxbC3w4g.ba2O8JOWHmmlG-rAzfBPSN5PifnUEhVxJDy8vDDfGUsg.PNG.mumurat/Screenshot_2018-06-01-01-40-06-1.png?type=w966", answer: ["마리오", "슈퍼마리오"]},
    { img: "img/img2.jpg", answer: ["젤다의전설","젤다"]},
    { img: "img/img3.jpg", answer: ["메트로이드", "메트로이드"] },
    { img: "img/img4.jpg", answer: ["스플래툰", "스플레툰"]},
    { img: "img/img5.jpg", answer: ["별의커비","커비"] },
    { img: "img/img6.jpg", answer: ["포켓몬", "포캣몬", "포켓몬스터", "포캣몬스터"]},
    { img: "img/img7.jpg", answer: ["스매시브라더스","스메시브라더스"] },
    { img: "img/img8.jpg", answer: ["피그민","피크민"] },
    { img: "img/img9.webp", answer: ["동물의숲","동숲"]},
    { img: "img/img10.jpg", answer: "동키콩" },
    { img: "img/img11.jpg", answer: ["레이튼교수와이상한마을", "레이튼교수"]},
    { img: "img/img12.jpg", answer: "요괴워치"},
    { img: "img/img13.webp", answer: "드래곤퀘스트"},
    { img: "img/img14.jpg", answer: ["파이널판타지", "파판"]},
    { img: "img/img15.jpg", answer: ["스파이더맨게임", "스파이더맨"]},
    { img: "img/img16.jpg", answer: "아스트로봇" },

    // PC게임
    { img: "https://i.ytimg.com/vi/SBML9dmJkxE/maxresdefault.jpg", answer: ["리그오브레전드","리그오브래전드","롤","LOL","lol","대상혁"]},
    { img: "https://www.krafton.com/wp-content/uploads/2021/06/battle-bg1-min.png", answer: ["배틀그라운드","배그", "베틀그라운드"] },
    { img: "https://image.xportsnews.com/contents/images/upload/article/2020/0707/1594108790522089.jpg", answer: ["발로란트","발로란트","발로"] },
    { img: "img/img20.jpg", answer: ["메이플스토리","메이플","메","신창섭","정상화","정상화의 신","버섯게임","버섯"]},
    { img: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202211/18/bde34890-427b-4fcd-b938-a692b2198dc4.jpg", answer: ["던전엔파이터","던파","던전앤파이터"] },
    { img: "img/img22.jpg", answer: ["서든어택","서든"] },
    { img: "https://cdn.gamemeca.com/gmdata/0001/758/836/gm791625_123167899.jpg", answer: ["레포(R.E.P.O.)","레포"] },
    { img: "img/img24.jpg", answer: ["로스트아크","로아"] },
    { img: "https://media.bunjang.co.kr/product/86357598_1_1530373942_w360.jpg", answer: ["피파","피파온라인", "fc온라인"] },
    { img: "https://images.ctfassets.net/h1rqp7q66d54/3yVDlCOrJnXMrb0yS4ea0y/d93ed97030eb7c233384e5a551aeaea7/GTAV_Gen9_MFT_Webstore_Hero_3840x2160_DELIV_opt__1_.jpg", answer: ["GTA","GTA5", "GTA3", "그타", "지티에이"] },
    { img: "https://www.videogameschronicle.com/files/2022/02/sds5.jpg", answer: ["엘든링","앨든링"] },
    { img: "https://sm.ign.com/t/ign_kr/cover/m/minecraft/minecraft_9hhx.600.jpg", answer: ["마인크래프트","마크"]},
    { img: "img/img29.jpg", answer: ["스타크래프트","스타"]},
    { img: "img/img30.jpg", answer: "팰월드"},
    { img: "https://i.namu.wiki/i/HLF818BA17ND4jqwDeTUNQUF1SqBkwARlW5K8U_jo6P031Jrh7QsT1TNocYCqwmpLP8tOWtrOEOuVtIDqNEFWQ.webp", answer: ["오버워치","옵치","알아"] },
    { img: "img/img32.jpg", answer: "마비노기" },
    { img: "https://i.ytimg.com/vi/i_cCiMG-fyg/maxresdefault.jpg", answer: ["카트라이더", "카트"] },
    { img: "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=204,height=204,fit=cover,f=auto/5f8d164d8269cffacc89422054b94c70/roblox-logo.png", answer: ["로블록스","roblox","Roblox"] },


    // 모바일게임
    { img: "https://flexible.img.hani.co.kr/flexible/normal/384/640/imgdb/resize/2012/0918/00444296501_20120918.webp", answer: "애니팡" },
    { img: "https://i.namu.wiki/i/VgSuAIeIK_qkR0PGFHRyQUMdrHX1jwsiQd3Q2q-h3ZteXe7g4r7uBGARXWmIFtaKoHtDnvwCCkKvQfHbQHvHQw.webp", answer: "쿠키런" },
    { img: "https://image.dongascience.com/Photo/2016/07/14684554927602.jpg", answer: ["포켓몬go","포켓몬고", "포캣몬고"] },
    { img: "https://i.ytimg.com/vi/0fPTjMzh-1w/maxresdefault.jpg", answer: "좀비고" },
    { img: "https://i.namu.wiki/i/BapdA1Ge-Lx9xECCtTbVwn24ZcvkroTatxJTNDnN4IX0HFhLjV93rmO8uqlqhcrQuhxCxlhzSBwaIoibYdWKSQ.webp", answer: "무한의계단"},
    { img: "https://wimg.heraldcorp.com/content/default/2013/02/27/20130227000676_0.jpg", answer: "바운스볼"},
    { img: "img/img42.jpg", answer: ["템플런","탬플런"] },
    { img: "https://db.kookje.co.kr/news2000/photo/2023/0222/20230222.99099006692i2.jpg", answer: "서브웨이서퍼"},
    { img: "https://i.namu.wiki/i/_Z_rXNxtk8cG6D1KsBD02t6GRiCMoLYToSXXDDlEDhuKd5MzJshkYDzr5KUzzw2P3SxACR6u2qeAw6x3J17Faw.webp", answer: "앵그리버드"},
    { img: "https://cdn.gamey.kr/news/photo/201601/1624427_68495_1403.jpg", answer: "포우"},
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjFfMTIz/MDAxNTgyMjU4NzEwNTkz.It31_swi3kDrQiaYbeTRdSk4VvPSZK1TK1-VrylJlqQg.p6lYLLJud7pMl2ar2e2Etew0LLfao5ryKg0WARLEtzsg.JPEG.dpeb011/20200221_130014.jpg?type=w800", answer: "슈퍼펭귄"},
    { img: "https://i.namu.wiki/i/HiWaTw5E7oL7Pi__fHTZW4nVYmrMPLcQIUImJ73oiYHRmDJrX9Is43D3r5PqDZvQqCBuhVN7xT2ipKEJspCE6g.webp", answer: ["마피아42","마피아"]},
    { img: "https://cdn.newspost.kr/news/photo/201301/14128_20148_719.png", answer: "윈드러너"},
    { img: "https://i.namu.wiki/i/3YTjbMfv46w2PBqCKt0JmwvyrbrrmEURyhs9J3zmxDePWkmlQUuBh6KM3VcYlFAv5T7O9UGReI6HKaA6aVCN2w.webp", answer: ["캔디크러쉬사가","캔디크러쉬", "캔디크러시사가", "캔디크러시"] },
    { img: "https://mblogthumb-phinf.pstatic.net/20160305_26/ddihw_1457181791236gqO2Y_JPEG/1.jpg?type=w420", answer: ["클래시로얄", "클로"]},

    
    // 개인적으로 추가
    { img: "img/img51.jpg", answer: ["메탈슬러그","메탈슬러그3"] },
    { img: "img/img52.jpg", answer: ["테일즈런너","테런"] },
    { img: "img/img53.jpg", answer: ["서브노티카", "서브노티카2"] },
    { img: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2020%2F11%2Frockstar-games-red-dead-redemption-2-online-standalone-0001.jpg?q=90&w=1400&cbr=1&fit=max", answer: ["레데리", "레드데드리뎀션"] },
    { img: "https://i.namu.wiki/i/tn9GhYA8l6xb6vilt-q8tPVWlBPr-SRoMNXUTsvg2O8Ktn5SKrm1puRucP2g3-Bxx0eCaNKD9GGMr5Sn3TKY8w.png", answer: ["퍼즐보블","퍼즐버블"] },
    { img: "https://djf7qc4xvps5h.cloudfront.net/post/inline/resize/NDY3Mjk1ODU0ZGFrZWRvMTU4NTQ5NDAzODIyMw.png", answer: ["더킹오브파이터즈","더킹오브파이터","킹오파","킹오브파이터즈","킹오브파이터"] },
    { img: "https://i.ytimg.com/vi/W5pUSn--ZDo/sddefault.jpg", answer: ["철권", "철권태그"]},
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTNfMyAg/MDAxNjE1NjQ2ODMyMTE4.5ZQGG7WcciM-kozjE3jNxEOagu48rLUMKPkPXiovMkYg.Xo_L_Zh4C84wnz8y5WtSnZmpf6hqDx4of8UR9J-3Ujgg.PNG.bumsuck0402/%EC%BA%A1%EC%B2%98_2021_03_13_23_38_05_344.png?type=w800", answer: ["닌자베이스볼배트맨","야구왕"] },
    { img: "https://i.ytimg.com/vi/DWuhdGKcpbA/maxresdefault.jpg", answer: ["스노우브라더스","스노우 브라더스","스노우브라더스2","스노우 브라더스2"] },
    { img: "https://www.krafton.com/wp-content/uploads/2025/09/ReLUGames_MIMESIS.png", answer: "미메시스"},
    { img: "img/img61.webp", answer: ["모두의마블", "모마"] },
    { img: "https://i.ytimg.com/vi/N2WT6iB_cnc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCxKtc8bWKn05o4nwv9Fa7YzfiLYw", answer: ["리썰컴퍼니","리썰"] },
    { img: "https://cdn.globale.co.kr/news/photo/202206/19785_24253_1443.jpg", answer: ["소닉","쏘닉"]},
    { img: "https://sm.ign.com/t/ign_kr/review/h/hollow-kni/hollow-knight-review_t5jr.1200.jpg", answer: ["할로우나이트", "할로우 나이트"]},
    { img: "img/img65.jpg", answer: "호그와트레거시"}, 
    { img: "https://kr.imboldn.com/wp-content/uploads/2019/03/Apex-Legends-Mar-2019-02-2.jpg", answer: ["에이펙스레전드","에펙","에이펙스"] },
    { img: "https://blog.kakaocdn.net/dna/Outsw/btrBMgGI5I6/AAAAAAAAAAAAAAAAAAAAAJpncRY3RbsBOeRWuLZajw8LGO1PwSZmMOd_CuA2Iv61/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=eYdDsGYnXBiPi%2BsQ7PHUcfiYUUM%3D", answer: ["팩맨"] },
    { img: "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/2da7/live/51912200-234b-11ef-baa7-25d483663b8e.png.webp", answer: "테트리스"},
    { img: "https://i0.wp.com/news.qoo-app.com/ko/wp-content/uploads/sites/4/2019/03/19032605472727.png?fit=666%2C505&ssl=1", answer: ["크레이지아케이드", "크아","크레이지 아케이드"] },
    { img: "img/img70.jpg", answer: ["데드바이데이라이트", "데바데","데부기"] },
    { img: "https://image-cdn.hypb.st/https%3A%2F%2Fkr.hypebeast.com%2Ffiles%2F2023%2F05%2Fdiablo-4-developer-interview-blizzard-entertainment-2023-1.jpg?q=90&w=800&cbr=1&fit=max", answer: ["디아블로", "디아블로4"] },
    { img: "https://i.ytimg.com/vi/5eYWYxMuUaI/maxresdefault.jpg", answer: ["월드오브워크래프트", "와우"] },
    { img: "https://thumbnews.nateimg.co.kr/view610///onimg.nate.com/orgImg/hk/2009/03/03/2009030225631_2009030359551.jpg", answer: ["버블파이터", "버파"] },
    { img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo3QFw3sqUyvNViHE2Fif5-mA1LIYB41ddOhJxVwp7F4b5THEndfEDCNONEUTsNoGZ9Th0ECeGIz4XSBnsd4rylw5n4vfRHR0czjakW9E&s=10", answer: ["카운터스트라이크", "카스"] },
    { img: "https://games.gg/cdn-cgi/image/width=1920,quality=75,format=auto,fit=scale-down,metadata=none,onerror=redirect/https://assets.games.gg/1748470933733_gallery_image_3_fa79f6d5ca.jpeg", answer: ["Dota","도타2","dota","도타"] },
    { img: "https://cms-assets.xboxservices.com/assets/e8/0b/e80bdd6d-ff22-4b02-810c-e2c2fe7c543a.jpg?n=Forza-Horizon-5_GLP-Page-Hero-0_1083x1222_02.jpg", answer: ["forza horizon","포르자호라이즌"] },
    { img: "https://cdn.sisajournal-e.com/news/photo/202412/408340_213472_825.jpg", answer: ["마블라이벌즈","마블 라이벌즈", "마라"] },
    { img: "https://cdn.khgames.co.kr/news/photo/202010/125171_97240_3832.jpeg", answer: ["레인보우식스","레이보우식스시즈","레식","군주님","타찬카"] },
    { img: "https://image.api.playstation.com/vulcan/ap/rnd/202505/1308/e70a120a0ab52e5ccfb34d1814a35601ab1abb688056313c.png", answer: ["Rust","러스트","rust"] },
    { img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/413150/ss_b887651a93b0525739049eb4194f633de2df75be.1920x1080.jpg?t=1754692865", answer: ["스타듀밸리","스타듀 밸리","스듀"] },
    { img: "https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfOTMg/MDAxNTI2NTU4OTg0NjYx.qbNRAQYck14N8aViNFR8fc4TgT4opeTxyAhV4zoslJIg.tmosipXh_hPBf4SxYLBz-d3BwVN-KS6JVDDIV9aVtVwg.PNG.nice5page/XLAVH.PNG?type=w800", answer: ["팀포트리스","팀 포트리스","팀포트리스2","팀 포트리스2","팀포","팀포2"] },
    { img: "https://i.ytimg.com/vi/h9zWWnd2fDU/maxresdefault.jpg", answer: ["배틀필드","배틀 필드","배필","배필1"] },
    { img: "https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltd31831eda9199937/62abc0df5cbe472513c0ce59/Cortez_Base_Game-Bnet_Game-Card_Feature-960x540.jpg", answer: ["콜오브듀티","콜옵듀","콜옵"] },
    { img: "img/img84.jpg", answer: ["레포데","레포데2","레프트포데드","레프트4데드","레프트4데드2"] },
    { img: "https://image.api.playstation.com/vulcan/img/rnd/202010/2122/gLzJBlftOeX9rKCTXvrHM7Mi.png", answer: ["H1Z1","하이즈","h1z1"] },
    { img: "https://cdn2.unrealengine.com/dame-1920x1080-1920x1080-6005df88fd7e.jpg", answer: ["NBA","nba 2k","NBA 2K","nba2k","NBA2K","nba"] },
    { img: "https://res09.bignox.com/appcenter/kr/gp-game-image/e62a9018dbc902a4f99041b2fae2e39d", answer: ["페이데이","페이데이2","payday","payday2"] },
    { img: "img/img88.jpg", answer: ["문명","문명6"] },
    { img: "https://i.namu.wiki/i/QHBE7GjuJho5nyIvXzvBY6isZ6jMJrol9eJajOwxe4_qfskqixFSx_BWNZ6Gj2AHv7e5SJt4YP8n5WTLGoO9pg.webp", answer: ["헬다이버즈"] },
    { img: "https://bnetcmsus-a.akamaihd.net/cms/gallery/O41RYLFMDBW31429007446506.jpg", answer: ["하스스톤","하스"] },
    { img: "img/img91.jpg", answer: ["아이작","아이작의번제"] },
    { img: "https://images.steamusercontent.com/ugc/859481150100324113/C48F74D7E09FADC33746ADD8A526A49907AC4917/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", answer: ["개리모드"] },
    { img: "img/img93.jpg", answer: ["몬스터헌터월드","몬헌"] },
    { img: "https://mblogthumb-phinf.pstatic.net/MjAxODA4MjJfMjgw/MDAxNTM0OTQ4NjM5NDE4.4KtoQFMWW8UvViGuYX5QHeYOQBZOQcy2fLkdLlRPLFQg.00pvJkwql4AE1Uus9zbEptfe7k97YjeEXmKX3U_FWisg.JPEG.effy1018/IMG_3246.jpg?type=w800", answer: ["돈스타브투게더","돈스타브","굶지마"] },
    { img: "https://sm.ign.com/ign_kr/screenshot/default/untitled-1-1654597014758-1_nxk8.jpg", answer: ["사이버펑크","사펑"] },
    { img: "https://i.ytimg.com/vi/mVcuyrCHa1g/maxresdefault.jpg", answer: ["유로트럭","유로트럭2"] },
    { img: "https://i.ytimg.com/vi/11l0rPOrvP8/maxresdefault.jpg", answer: ["아빠와 나","아빠와나"] },
    { img: "https://i.ytimg.com/vi/OhVMG1tEKKA/maxresdefault.jpg", answer: ["후레쉬맨","후래쉬맨"] },
    { img: "img/img99.jpg", answer: ["테크모 월드컵 98","테크모 축구","테크모 월드컵","테크모","테크모축구","테크모월드컵","싱가"] },
    { img: "https://blog.kakaocdn.net/dna/2Wd3U/btrJLTCGSHO/AAAAAAAAAAAAAAAAAAAAAB-tGePVmJc8SyNTbu-fRwurNAmN1hKXFlrSSdvAYP9L/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=q%2FJNpEhaBGZp84VfpqcElMvCgAM%3D", answer: ["동물철권","동철"] },
    // 100개

    { img: "https://i.namu.wiki/i/Aib1jbOAGB83rHNk-aZduRyBKPQEf2mxzrc04WT9mC8rgE6zADpJkUlipbmdfp0rSk7y2jGc6rc5FVcI-mcuJA.webp", answer: ["케로로팡팡","케팡"] },
    { img: "https://cdn.e2news.com/news/photo/201110/56809_18375_2949.jpg", answer: ["탭소닉","텝소닉","탭 소닉"] },
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyMTA2MThfMTA5/MDAxNjI0MDExMDY0OTg1.i-QqpIxD9kUmwDBnSYHNn-a6s7wfy62YQgwgHfCOpwsg.fp-jdRgQqaF1LF2eFQssm1lj_64fdugn0i34uz8_mPkg.PNG.iyy1021/%EC%96%BC%EB%B6%88%EC%B6%A4_%EB%AC%B4%EB%A3%8C_%EB%A6%AC%EB%93%AC%EA%B2%8C%EC%9E%84_%EB%B6%88%EA%B3%BC_%EC%96%BC%EC%9D%8C%EC%9D%98_%EC%B6%A4_A_Dance_of_Fire_and_Ice_10.png?type=w800", answer: ["불과 얼음의 춤","불과얼음의춤","얼불춤"] },
    { img: "https://upload2.inven.co.kr/upload/2020/01/10/bbs/i15601218695.jpg", answer: ["롤토체스","롤체"] },
    { img: "https://cdn.gameple.co.kr/news/photo/201812/146128_151068_5835.jpg", answer: ["브롤스타즈","브롤"] },
    { img: "https://blog.kakaocdn.net/dna/45VzJ/btsrgQklNjN/AAAAAAAAAAAAAAAAAAAAAPpFeRauVn5LB4RcTBAzEE2lZHy-LySLbVmUx_z23BGy/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=P8b49zf3K8Jn%2FnPYRoakoofC7t8%3D", answer: ["길건너친구들","길건너 친구들"] },
    { img: "https://i.ytimg.com/vi/yssfMxGtMt0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCoKzEAZrzM737FO9QFXTvk2ro-6g", answer: ["지오메트리 대시","지오매트리대쉬","지오매트리대시","지오메트리대쉬","지오메트리 대쉬"] },
    { img: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/29SlgXGpS8o7HgCowiwzx3/3c74167f4476667e53339a3991df15f0/62cec0c151aa9379b071f7dc-bg.jpg", answer: ["헝그리샤크","헝그리 샤크"] },
    { img: "https://image.newdaily.co.kr/site/data/img/2013/03/22/2013032210006_0.jpg", answer: ["다함께 차차차","다함께차차차"] },
    { img: "https://i.namu.wiki/i/5srMhzoPrkc4HElSRey210VwEvcTlSbNoR3gmaLh_t6ne0LrlQ0-s5cqSNUbMBBFTBBgGxNOthSgOqksxtVQFQ.webp", answer: ["제트팩 조이라이드","제트팩조이라이드"] },
    { img: "https://image.zdnet.co.kr/2012/10/31/5SJnFNYUShQXMiF4xtoL.jpg", answer: ["드래곤 플라이트","드래곤플라이트"] },
    { img: "https://blog.kakaocdn.net/dna/oNLaq/btrKHdG8SDD/AAAAAAAAAAAAAAAAAAAAAO2SyI44RqEIPxfHKV72lo-nVYsdFwX5UbBOPQyc4pyM/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1780239599&allow_ip=&allow_referer=&signature=d2DvfwQn8s07wyXGafFC1EXCGhA%3D", answer: ["팔라독"] },
    { img: "https://i.ytimg.com/vi/cmerP_BFSdk/maxresdefault.jpg", answer: ["피망 뉴맞고","피망 맞고","맞고"] },
    { img: "https://cdn-www.bluestacks.com/bs-images/pmang-poker-how-to-play-on-pc-mac-ko-3.jpg", answer: ["피망 포커","피망포커","포커"] },
    { img: "https://mblogthumb-phinf.pstatic.net/MjAyMDEyMjdfOTQg/MDAxNjA5MDQ4NDc1MjU3.M4_Y7R9HS7LMn_pMDSu-XEt5yZRMF15iJXb-IkBPFwcg.yZfIoYy5TYOhBb6Zw6zv3u4r5vZvU4hpBabxeQKEYvUg.PNG.wydks119/SE-3d613f49-9ebb-482e-b5b7-85310c46aac3.png?type=w800", answer: ["세븐 데이즈 투 다이","세븐데이즈투다이","셉투다","세븐데이즈 투 다이","세븐데이즈 투다이"] },
    { img: "https://img.etoday.co.kr/pto_db/2015/03/20150313083722_601809_450_305.jpg", answer: ["13일의 금요일","13금"] },
    { img: "https://i.namu.wiki/i/7sYpMuX55VZGH8olLEuF20i4MGfHIF-F1Liza8_pc0JIHTpnFxeLtYqauIotKNYt5sZ5sMg48u3hB3Nh0Aas3w.webp", answer: ["아웃라스트","아웃 라스트"] },
    { img: "https://i.namu.wiki/i/5TVAj0X_yXgxj2V7DbZLutSXbn7ng-aYeaY5FIb9qRS8ZyT2HpluUNhzM9rPj8V6qL1b31-X-X1VDyWXQWciOg.webp", answer: ["후즈 앳 더 도어"] },
    { img: "https://keepmind.net/assets/images/Review/017/02.jpg", answer: ["포탈"] },
    { img: "https://i.namu.wiki/i/khoSds7XpyVJW6SUqRCA4HOQGk11Z0vdjcs4mzwqJFeCSuFnhExNCEFeER8TpCLTVmQF6cwZbGzkRGIGx7EYlg.webp", answer: ["귀혼"] }


    // 추가적으로 더 넣을 수 있음
    // { img: "img/img121.jpg", answer: [""] }
    // { img: "img/img122.jpg", answer: [""] }
    // { img: "img/img123.jpg", answer: [""] }
    // { img: "img/img124.jpg", answer: [""] }
    // { img: "img/img125.jpg", answer: [""] }
    // { img: "img/img126.jpg", answer: [""] }
    // { img: "img/img127.jpg", answer: [""] }
    // { img: "img/img128.jpg", answer: [""] }
    // { img: "img/img129.jpg", answer: [""] }
    // { img: "img/img130.jpg", answer: [""] }

];


// 진행바 업데이트 (maxRound 0 방지)
function updateProgress() {
    const progress = maxRound ? (currentRound / maxRound) * 100 : 0;
    const bar = document.getElementById("progress-bar");
    if (bar) bar.style.width = progress + "%";
}

function startGame(count) {
    totalRounds = count;
    maxRound = count;
    currentRound = 1;
    score = 0;

    document.getElementById("round-info").textContent = "라운드: " + currentRound + "/" + totalRounds;
    document.getElementById("current-score").textContent = score;
    availableQuestions = shuffle(questions).slice(0, maxRound);

    document.getElementById("setup").style.display = "none";
    document.getElementById("game-display").style.display = "block";

    loadQuestion();
    startTimer();
    updateProgress(); // 첫 라운드 시작 시 진행바 표시
}

function startTimer() {
    const timerNumber = document.getElementById('timer-number');
    const timerCircle = document.getElementById('timer-circle');
    
    if (countdown) clearInterval(countdown);

    timeLeft = 10;
    if (timerNumber) {
        timerNumber.textContent = timeLeft;
    }
    if (timerCircle) {
        timerCircle.style.background = 'conic-gradient(#000000, #000000)';
    }

    countdown = setInterval(() => {
        timeLeft--;
        if (timerNumber) timerNumber.textContent = timeLeft;

        if (timeLeft <= 0) {
            if (countdown) clearInterval(countdown);
            nextRound();
        }
    }, 1000);
}

function nextRound() {
    const roundElement = document.getElementById('round-info');

    if (currentRound < maxRound) {
        currentRound++;
        if (roundElement) roundElement.textContent = `라운드: ${currentRound}/${maxRound}`;
        loadQuestion();
        startTimer();
        updateProgress();
    } else {
        endGame();
    }
}

function loadQuestion() {
    const questionArea = document.getElementById("question-area");
    const currentQuestion = availableQuestions[currentRound - 1];

    if (!questionArea) return;

    if (!currentQuestion) {
        questionArea.innerHTML = `<p>문제를 불러올 수 없습니다.</p>`;
        return;
    }

    questionArea.innerHTML = `<img src="${currentQuestion.img}" alt="문제 이미지" style="max-width:100%; height:auto;">`;
}

function endGame() {
    if (countdown) clearInterval(countdown);
    document.getElementById("game-display").style.display = "none";
    document.getElementById("result-display").style.display = "block";

    const finalScoreValue = document.getElementById("final-score-value");
    const finalScore = document.getElementById("final-score");
    const resultGrade = document.getElementById("result-grade");
    const resultBar = document.getElementById("result-bar");
    const resultPercent = document.getElementById("result-percent");

    // 최종 점수
    if (finalScoreValue) finalScoreValue.textContent = score;

    // 점수 정보
    const percentage = Math.round((score / maxRound) * 100);
    if (finalScore) {
        finalScore.innerHTML = `
            <strong>전체 문제: ${maxRound}문제</strong> <br>
            <span style="font-size: 20px; font-weight: bold; margin-top: 10px;">맞춘 갯수: ${score}개</span>
        `;
    }

    // 등급 결정
    let grade = "GAME";
    let gradeText = "";
    if (percentage >= 100) {
        grade = "🌟 최고의 게이머!";
        gradeText = "전설적인 점수입니다!";
    } else if (percentage >= 80) {
        grade = "훌륭한 게이머!";
        gradeText = "정말 잘했습니다!";
    } else if (percentage >= 60) {
        grade = "좋은 게이머!";
        gradeText = "더 도전해보세요!";
    } else if (percentage >= 40) {
        grade = "공부 중인 게이머";
        gradeText = "다시 한 번 해보세요!";
    } else {
        grade = "🆕 뉴비 게이머";
        gradeText = "게임을 더 알아가요!";
    }

    if (resultGrade) {
        resultGrade.innerHTML = `<div style="font-size: 48px; margin-bottom: 10px;">${grade}</div><div style="font-size: 14px; color: #000000;">${gradeText}</div>`;
    }

    // 진행바 애니메이션
    if (resultBar) {
        setTimeout(() => {
            resultBar.style.width = percentage + "%";
        }, 200);
    }

    if (resultPercent) {
        resultPercent.textContent = `정답률: ${percentage}%`;
    }
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
    const answerBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-answer");
    const feedbackElement = document.getElementById("feedback");

    if (!userInput || !feedbackElement) return;

    const userAnswerRaw = userInput.value.trim();
    if (userAnswerRaw === "") {
        feedbackElement.textContent = "정답을 입력하세요!";
        feedbackElement.style.color = "#ffa500";
        return;
    }

    // 중복 제출 방지
    if (answerBtn) answerBtn.disabled = true;

    const userAnswer = userAnswerRaw.toLowerCase();
    const currentQuestion = availableQuestions[currentRound - 1];

    if (!currentQuestion) {
        feedbackElement.textContent = "문제가 없습니다.";
        if (answerBtn) answerBtn.disabled = false;
        return;
    }

    const answers = Array.isArray(currentQuestion.answer) ? currentQuestion.answer : [currentQuestion.answer];
    const normalizedAnswers = answers.map(a => String(a).trim().toLowerCase());

    const isCorrect = normalizedAnswers.some(a => a === userAnswer);

    if (isCorrect) {
        score++;
        feedbackElement.textContent = "✅ 정답!";
        feedbackElement.style.color = "#4caf50";
        feedbackElement.classList.add("correct");
        
        const scoreEl = document.getElementById("current-score");
        if (scoreEl) scoreEl.textContent = score;
    } else {
        const correctName = answers[0];
        feedbackElement.innerHTML = `<span style="color:red;">❌ 오답!</span>&nbsp;- ${correctName}`;
        feedbackElement.classList.add("incorrect");
    }

    userInput.value = "";
    if (countdown) clearInterval(countdown);

    setTimeout(() => {
        feedbackElement.textContent = "";
        feedbackElement.classList.remove("correct", "incorrect");
        if (answerBtn) answerBtn.disabled = false;
        nextRound();
    }, 1500);
}

document.addEventListener('DOMContentLoaded', () => {
    const answerButton = document.getElementById("send-btn");
    const answerInput = document.getElementById("user-answer");

    if (answerButton) answerButton.addEventListener("click", submitAnswer);
    if (answerInput) {
        answerInput.addEventListener("keydown", (event) => {
            if (event.key === "Enter") submitAnswer();
        });
    }
});
