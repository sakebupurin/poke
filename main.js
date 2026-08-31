//ボタンを押したら確率で文字と背景色が変わる
const btn = document.getElementById('shiny-btn');
const resultText = document.getElementById('display-result');
const body = document.getElementById('poke-body');
const counterText = document.getElementById('counter');
const reset = document.getElementById('reset-btn');

const shinyRates = [
    { rate: 1 / 8192, text: '[1/8192]色違いのポケモンが現れた！！！！！', color: 'red' },
    { rate: 1 / 4096, text: '[1/4096]色違いのポケモンが現れた！！！！', color: 'green' },
    { rate: 1 / 500,  text: '[1/500]色違いのポケモンが現れた！！！',  color: 'yellow' },
    { rate: 1 / 25,   text: '[1/25]色違いのポケモンが現れた！！',    color: 'plum' },
    { rate: 1 / 20,   text: '[1/20]色違いのポケモンが現れた！',     color: 'silver' },
];

let count = 0;

btn.addEventListener('click', () => {
    const random = Math.random();
    let accumulatedRate = 0;
    let hit = null;

    count ++;

    counterText.textContent = `ボタンを押した回数：${count}回`;

    for (const item of shinyRates) {
        accumulatedRate += item.rate;
        if (random <= accumulatedRate) {
            hit = item;
            break;
        }
    }

    if (hit) {
        resultText.textContent = hit.text;
        body.style.backgroundColor = hit.color;
    } else {
        resultText.textContent = '[通常色]ポケモンが現れた！';
        body.style.backgroundColor = 'aliceblue';
    }
});

reset.addEventListener('click', () => {
    count = 0;
    resultText.innerText = 'ボタンを押すと確率で色が変わります\n（1/20 銀, 1/25 紫, 1/500 黄, 1/4096 緑, 1/8192 赤, それ以外 青）';
    counterText.textContent = `ボタンを押した回数：${count}回`;
    body.style.backgroundColor = 'white';
});

//アニメーション
const h1 = document.querySelector("#title");

const keyframes = {
  opacity: [0, 1],
  transform: ["translateY(20px)", "translateY(0)"]
};

h1.animate(keyframes, {
  duration: 1500,
  easing: "ease-in",
  fill: "forwards"
});


//アコーディオンメニュー
document.querySelectorAll('.accordion').forEach((accordion) => {
  const props = {
    isAnimating: false,
    slideDuration: 400,
    slideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
  };

  function answerShow(li) {
    props.isAnimating = true;
    li.classList.add('is-open');

    const answer = li.querySelector('.accordion-a');
    answer.style.display = 'block';
    const startHeight = 0;
    const endHeight = answer.scrollHeight;
    
    answer.animate([
      { height: `${startHeight}px` },
      { height: `${endHeight}px` }
    ], {
      duration: props.slideDuration,
      easing: props.slideEasing
    }).onfinish = () => {
      answer.style.height = '';
      props.isAnimating = false;
    };
  }

  function answerHide(li) {
    props.isAnimating = true;
    li.classList.remove('is-open');

    const answer = li.querySelector('.accordion-a');
    
    const startHeight = answer.scrollHeight;
    const endHeight = 0;
    
    answer.animate([
      { height: `${startHeight}px` },
      { height: `${endHeight}px` }
    ], {
      duration: props.slideDuration,
      easing: props.slideEasing
    }).onfinish = () => {
      answer.style.display = '';
      answer.style.height = '';
      props.isAnimating = false;
    };
  }

  accordion.querySelectorAll('li').forEach((li) => {
    li.querySelector('.accordion-q button').addEventListener('click', () => {
      if (!props.isAnimating) {
        if (!li.classList.contains('is-open')) {
          answerShow(li);
        } else {
          answerHide(li);
        }
      }
    });
  });
});


//隠しボタン
function revealText() {
      
  const message = document.getElementById('secretText');
  message.classList.add('show');
}


// 上に戻るボタン
const backToTopBtn = document.getElementById('back-to-top');


window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('is-active');
  } else {
    backToTopBtn.classList.remove('is-active');
  }
});


backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});




// 要素を取得
const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

// ボタンクリック時の処理
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
});

// メニュー内のリンクを押したら自動でメニューを閉じる処理
const navLinks = document.querySelectorAll('.nav__item a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('is-active');
    nav.classList.remove('is-active');
  });
});