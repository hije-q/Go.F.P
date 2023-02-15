import { Header } from "../../components/Header";
import "./Home.css";
import "./styles/header.css";
import "./styles/invite.css";
import "./styles/main.css";

export const Home = () => {
  return (
    <>
      <div>
        <Header />
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </head>
        <body>
          <section class="main">
            <div class="main-background"></div>
          </section>

          <section class="main-content">
            <div class="left-section">
              <img
                class="gosrock"
                src="assets/고스락 로고/고스락-한글-흰색.png"
              />
            </div>
            <div class="right-section">
              <div class="goto">links</div>
              <div
                class="youtube-link"
                onClick={() => {
                  window.open(
                    "https://www.youtube.com/channel/UCBjYErlHCG0vfcdDmaeOIxQ"
                  );
                }}
              >
                <img
                  class="youtube"
                  src={require("./assets/logos/youtube.png")}
                />
                <div class="description">고스락 유튜브</div>
              </div>
              <div
                class="insta-link"
                onClick={() => {
                  window.open("https://www.instagram.com/gosrock_official");
                }}
              >
                <img class="insta" src="./Home/assets/logos/insta.png" />
                <div class="description">@gosrock_official</div>
              </div>

              <div
                class="insta-link"
                onClick={() => {
                  window.open("https://www.instagram.com/gosrock_archive/");
                }}
              >
                <img class="insta" src="assets/logos/insta.png" />
                <div class="description">@gosrock_archive</div>
              </div>
            </div>
          </section>

          <article class="history">
            <div class="intro">
              <p>
                1990년부터 시작된
                <br />
                깊은 역사를 자랑하는
                <br />
                컴퓨터공학과 밴드 학회
                <br />
                <br />
                33년이 지난 지금도
                <br />
                정상을 향한 여정을 나아가고 있는
                <br />
                저희 고스락을 소개합니다.
              </p>
            </div>
            <div class="abt-GSR">About GOSROCK</div>
            <div class="posters">
              <img class="poster" src="assets/포스터모음.png" />
            </div>
          </article>

          <section class="invite">
            <div class="intro">이런 고스락에서, 신입생을 모집합니다!</div>
            <div class="space"></div>
            <div class="recruit">
              <div class="qualifications">
                지원 자격 : ~~
                <br />
                모집 인원 : ~~
                <br />
              </div>
              <div class="details">
                <div class="schedule">
                  <div>3/2 개강</div>
                  <div>3/9 공연</div>
                  <div>3/nn 새내기 면접</div>
                  <div>3/nn 신입생 첫 모임</div>
                </div>
                <div class="contacts">
                  <div>
                    학회장 박찬혁
                    <br />
                    010-0000-0000
                  </div>
                  <div>
                    부학회장 최민혁
                    <br />
                    010-0000-0000
                  </div>
                  <div
                    class="kakao-button"
                    onclick="window.open('https://pf.kakao.com/_QxeZBT')"
                  >
                    <img class="kakao" src="assets/logos/kakao-talk.png" />
                    고스락
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              class="invite-button"
              onclick="window.open('구글폼주소')"
            >
              <div>지원하기</div>
            </button>
          </section>
        </body>
        메인 페이지~
        <h1 className="title">여기서 이런 식으로</h1>
        <p id="hihi">쓰면 됩니다</p>
        <ul>
          <li>ㅎㅎ</li>
          <li>11</li>
        </ul>
      </div>
    </>
  );
};
