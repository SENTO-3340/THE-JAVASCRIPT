import { githubApi } from "./modules/api.js";
import { carousel } from "./modules/carousel.js";
import { hum } from "./modules/hum.js";
import { icon } from "./modules/icon.js";
import { scroll } from "./modules/scroll.js";

hum();
icon();
scroll();
carousel();
githubApi();

window.addEventListener('resize', () => {
    const readMeDes = document.querySelector('.rm-description');
    if (window.innerWidth < 900) {
        readMeDes.innerHTML = "このサイトは<br>JavaScriptを”作りながら学ぶ”ために作成したサイトです。<br>JavaScriptの機能を使うためのサイト構築をしており<br>各機能はESModulesを用いて分割しています。<br>また各sectionの最後にGitHub REST APIで<br>取得したsourcecodeを載せています。<br>サイト内にちりばめたJSの機能を<br>体感して楽しんでください!"
    } else {
        readMeDes.innerHTML = "このサイトはJavaScriptを”作りながら学ぶ”ために作成したサイトです。<br>JavaScriptの機能を使うためのサイト構築をしており各機能はESModulesを用いて分割しています。<br>また各sectionの最後にGitHub REST APIで取得したsourcecodeを載せています。<br>サイト内にちりばめたJSの機能を体感して楽しんでください!"
    }
});
