const REVERSE_QUOTES = '`';
const QUOTES = '&quot;';
const HTML = `
<main id="wrapper" class="wrapper" data-lang="ru">
<textarea class="text" cols="30" rows="10" placeholder="&#10004; to change the language use the keyboard shortcut Ctrl + Alt &#10;&#10004; для смены языка используйте сочетание клавиш Ctrl + Alt"></textarea>
<div class="keyboard-wrapper">
  <div class="keyboard-keys">
    <div class="row">
      <div class="keys" data-symbol="${REVERSE_QUOTES}" data-subsymbol="~">${REVERSE_QUOTES}
        <div class="sub-keys">~</div>
      </div>
      <div class="keys" data-number="1" data-subsymbol="!">1
        <p class="sub-keys">!</p>
      </div>
      <div class="keys" data-number="2" data-subsymbol="@">2
        <div class="sub-keys">@</div>
      </div>
      <div class="keys" data-number="3" data-subsymbol="#">3
        <div class="sub-keys">#</div>
      </div>
      <div class="keys" data-number="4" data-subsymbol="$">4
        <div class="sub-keys">$</div>
      </div>
      <div class="keys" data-number="5" data-subsymbol="%">5
        <div class="sub-keys">%</div>
      </div>
      <div class="keys" data-number="6" data-subsymbol="^">6
        <div class="sub-keys">^</div>
      </div>
      <div class="keys" data-number="7" data-subsymbol="&">7
        <div class="sub-keys">&</div>
      </div>
      <div class="keys" data-number="8" data-subsymbol="*">8
        <div class="sub-keys">*</div>
      </div>
      <div class="keys" data-number="9" data-subsymbol="(">9
        <div class="sub-keys">(</div>
      </div>
      <div class="keys" data-number="0" data-subsymbol=")">0
        <div class="sub-keys">)</div>
      </div>
      <div class="keys" data-symbol="-" data-subsymbol="_">-
        <div class="sub-keys">_</div>
      </div>
      <div class="keys" data-symbol="=" data-subsymbol="+">=
        <div class="sub-keys">+</div>
      </div>
      <div class="keys backspace">Backspace</div>
    </div>
    <div class="row">
      <div class="keys tab">Tab</div>
      <div class="keys lang-Q" data-eng="Q">Q</div>
      <div class="keys lang-W" data-eng="W">W</div>
      <div class="keys lang-E" data-eng="E">E</div>
      <div class="keys lang-R" data-eng="R">R</div>
      <div class="keys lang-T" data-eng="T">T</div>
      <div class="keys lang-Y" data-eng="Y">Y</div>
      <div class="keys lang-U" data-eng="U">U</div>
      <div class="keys lang-I" data-eng="I">I</div>
      <div class="keys lang-O" data-eng="O">O</div>
      <div class="keys lang-P" data-eng="P">P</div>
      <div class="keys" data-rus="x" data-symbol="[" data-subsymbol="{">[
        <div class="sub-keys">{</div>
      </div>
      <div class="keys" data-symbol="]" data-subsymbol="}">]
        <div class="sub-keys">}</div>
      </div>
      <div class="keys backslash" data-symbol="&#92;">&#92;
        <div class="sub-keys">|</div>
      </div>
      <div class="keys delete">Del</div>
    </div>
    <div class="row">
      <div class="keys caps">Caps Lock</div>
      <div class="keys" data-eng="A">A</div>
      <div class="keys" data-eng="S">S</div>
      <div class="keys" data-eng="D">D</div>
      <div class="keys" data-eng="F">F</div>
      <div class="keys" data-eng="G">G</div>
      <div class="keys" data-eng="H">H</div>
      <div class="keys" data-eng="J">J</div>
      <div class="keys" data-eng="K">K</div>
      <div class="keys" data-eng="L">L</div>
      <div class="keys" data-symbol=";" data-subsymbol=":">;
        <div class="sub-keys">:</div>
      </div>
      <div class="keys" data-symbol="'" data-subsymbol="${QUOTES}">'
        <div class="sub-keys">"</div>
      </div>
      <div class="keys enter">Enter</div>
    </div>
    <div class="row">
      <div class="keys shift shift-left">Shift</div>
      <div class="keys" data-eng="Z">Z</div>
      <div class="keys" data-eng="X">X</div>
      <div class="keys" data-eng="C">C</div>
      <div class="keys" data-eng="V">V</div>
      <div class="keys" data-eng="B">B</div>
      <div class="keys" data-eng="N">N</div>
      <div class="keys" data-eng="M">M</div>
      <div class="keys" data-symbol="," data-subsymbol="&lt;">,
        <div class="sub-keys">&lt;</div>
      </div>
      <div class="keys" data-symbol="." data-subsymbol="&gt;">.
        <div class="sub-keys">&gt;</div>
      </div>
      <div class="keys" data-symbol="/" data-subsymbol="?">/
        <div class="sub-keys">?</div>
      </div>
      <div class="keys shift shift-right">Shift</div>
      <div class="keys up">Up</div>
      <div id="flag" class="en">
      </div>
    </div>
    <div class="row">
      <div class="keys ctrl ctrl-left">Ctrl</div>
      <div class="keys win">Win</div>
      <div class="keys alt alt-left">Alt</div>
      <div class="keys space"></div>
      <div class="keys alt alt-right">Alt</div>
      <div class="keys ctrl ctrl-right">Ctrl</div>
      <div class="keys left">Left</div>
      <div class="keys down">Down</div>
      <div class="keys right">Right</div>
    </div>
  </div>
</div>
</main>
`;

document.body.innerHTML = HTML;
// -----------------------------------------------------------------------

// * Variables -----------------------------------------------------------
const KEYS = document.querySelectorAll('.keys');
const KEYS_ARRAY = Array.from(document.querySelectorAll('.keys'));
const BACKSPACE = document.querySelector('.backspace');
const TAB = document.querySelector('.tab');
const BACKSLASH = document.querySelector('.backslash');
const DELETE = document.querySelector('.delete');
const CAPS = document.querySelector('.caps');
const ENTER = document.querySelector('.enter');
const SHIFT_RIGHT = document.querySelector('.shift-right');
const SHIFT_LEFT = document.querySelector('.shift-left');
const UP = document.querySelector('.up');
const DOWN = document.querySelector('.down');
const LEFT = document.querySelector('.left');
const RIGHT = document.querySelector('.right');
const WIN = document.querySelector('.win');
const SPACE = document.querySelector('.space');
const ALT_LEFT = document.querySelector('.alt-left');
const ALT_RIGHT = document.querySelector('.alt-right');
const CTRL_LEFT = document.querySelector('.ctrl-left');
const CTRL_RIGHT = document.querySelector('.ctrl-right');
const FLAG = document.getElementById('flag');
const WRAPPER = document.getElementById('wrapper');
const TEXT = document.querySelector('.text');
const NUMBERS = document.querySelectorAll('[data-number]');
const SYMBOLS = document.querySelectorAll('[data-symbol]');
const SUBSYMBOLS = document.querySelectorAll('[data-subsymbol]');
const DATA_ENG = document.querySelectorAll('[data-eng]');

const langSymbol = {
  "x": {
    en: "[",
    ru: "Х",
  },
  // "]": {
  //   en: "]",
  //   ru: "Ъ",
  // },
}

const langText = {
  "Q": {
    en: "Q",
    ru: "Й",
  },
  "W": {
    en: "W",
    ru: "Ц",
  },
  "E": {
    en: "E",
    ru: "У",
  },
  "R": {
    en: "R",
    ru: "К",
  },
  "T": {
    en: "T",
    ru: "Е",
  },
  "Y": {
    en: "Y",
    ru: "Н",
  },
  "U": {
    en: "U",
    ru: "Г",
  },
  "I": {
    en: "I",
    ru: "Ш",
  },
  "O": {
    en: "O",
    ru: "Щ",
  },
  "P": {
    en: "P",
    ru: "З",
  },
  // "[": {
  //   en: "[",
  //   ru: "Х",
  // },
  // "]": {
  //   en: "]",
  //   ru: "Ъ",
  // },
  "A": {
    en: "A",
    ru: "Ф",
  },
  "S": {
    en: "S",
    ru: "Ы",
  },
  "D": {
    en: "D",
    ru: "В",
  },
  "F": {
    en: "F",
    ru: "А",
  },
  "G": {
    en: "G",
    ru: "П",
  },
  "H": {
    en: "H",
    ru: "Р",
  },
  "J": {
    en: "J",
    ru: "О",
  },
  "K": {
    en: "K",
    ru: "Л",
  },
  "L": {
    en: "L",
    ru: "Д",
  },
  // ";": {
  //   en: ";",
  //   ru: "Ж",
  // },
  // "'": {
  //   en: "'",
  //   ru: "Э",
  // },
  "Z": {
    en: "Z",
    ru: "Я",
  },
  "X": {
    en: "X",
    ru: "Ч",
  },
  "C": {
    en: "C",
    ru: "C",
  },
  "V": {
    en: "V",
    ru: "М",
  },
  "B": {
    en: "B",
    ru: "И",
  },
  "N": {
    en: "N",
    ru: "Т",
  },
  "M": {
    en: "M",
    ru: "Ь",
  },
  // ",": {
  //   en: ",",
  //   ru: "Б",
  // },
  // ".": {
  //   en: ".",
  //   ru: "Ю",
  // },
}
// -----------------------------------------------------------------------

// * Focus onload page----------------------------------------------------
window.onload = () => {
  TEXT.focus();
}
// -----------------------------------------------------------------------

// * keydown and keyup----------------------------------------------------
for (let i = 0; i < KEYS.length; i++) {
  KEYS[i].setAttribute('keyValue', KEYS[i].innerText);
  KEYS[i].setAttribute('lowerCaseValue', KEYS[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(el) {
  for (let i = 0; i < KEYS.length; i++) {
    if (el.key === KEYS[i].getAttribute('keyValue') || el.key === KEYS[i].getAttribute('lowerCaseValue')) {
      KEYS[i].classList.add('active');
    }
    if (el.code === 'Space') {
      SPACE.classList.add('active');
    }
    if (el.code === 'Delete') {
      DELETE.classList.add('active');
    }
    if (el.code === 'ArrowUp') {
      UP.classList.add('active');
    }
    if (el.code === 'ArrowDown') {
      DOWN.classList.add('active');
    }
    if (el.code === 'ArrowLeft') {
      LEFT.classList.add('active');
    }
    if (el.code === 'ArrowRight') {
      RIGHT.classList.add('active');
    }
    if (el.code === 'Backslash') {
      BACKSLASH.classList.add('active');
    }
    if (el.code === 'MetaLeft' || el.code === 'OSLeft') {
      WIN.classList.add('active');
    }
    if (el.code === 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
    }
    if (el.code === 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
    }
    if (el.code === 'AltLeft') {
      ALT_RIGHT.classList.remove('active');
    }
    if (el.code === 'AltRight') {
      ALT_LEFT.classList.remove('active');
    }
    if (el.code === 'ControlLeft') {
      CTRL_LEFT.classList.add('active');
    }
    if (el.code === 'ControlRight') {
      CTRL_RIGHT.classList.add('active');
    }
  }
})

window.addEventListener('keydown', function(el) {
  if (el.key === 'CapsLock') {
    CAPS.classList.toggle('active');
  }
})

window.addEventListener('keydown', function(el) {
  for (let i = 0; i < NUMBERS.length; i++) {
    if (el.key === NUMBERS[i].getAttribute('data-number')) {
      NUMBERS[i].classList.add('active');
    }
  }
})

window.addEventListener('keydown', function(el) {
  for (let i = 0; i < SYMBOLS.length; i++) {
    if (el.key === SYMBOLS[i].getAttribute('data-symbol')) {
      SYMBOLS[i].classList.add('active');
    }
  }
})

window.addEventListener('keydown', function(el) {
  for (let i = 0; i < SUBSYMBOLS.length; i++) {
    if (el.key === SUBSYMBOLS[i].getAttribute('data-subsymbol')) {
      SUBSYMBOLS[i].classList.add('active');
    }
  }
})

window.addEventListener('keyup', function(el) {
  for (let i = 0; i < KEYS.length; i++) {
    if (el.key === KEYS[i].getAttribute('keyValue') || el.key === KEYS[i].getAttribute('lowerCaseValue')) {
      KEYS[i].classList.remove('active');
      KEYS[i].classList.add('remove');
    }
    if (el.code === 'Space') {
      SPACE.classList.remove('active');
      SPACE.classList.add('remove');
    }
    if (el.code === 'Delete') {
      DELETE.classList.remove('active');
      DELETE.classList.add('remove');
    }
    if (el.code === 'ArrowUp') {
      UP.classList.remove('active');
      UP.classList.add('remove');
    }
    if (el.code === 'ArrowDown') {
      DOWN.classList.remove('active');
      DOWN.classList.add('remove');
    }
    if (el.code === 'ArrowLeft') {
      LEFT.classList.remove('active');
      LEFT.classList.add('remove');
    }
    if (el.code === 'ArrowRight') {
      RIGHT.classList.remove('active');
      RIGHT.classList.add('remove');
    }
    if (el.code === 'Backslash') {
      BACKSLASH.classList.remove('active');
      BACKSLASH.classList.add('remove');
    }
    if (el.code === 'MetaLeft' || el.code === 'OSLeft') {
      WIN.classList.remove('active');
      WIN.classList.add('remove');
    }
    if (el.code === 'ControlLeft') {
      CTRL_LEFT.classList.remove('active');
      CTRL_LEFT.classList.add('remove');
    }
    if (el.code === 'ControlRight') {
      CTRL_RIGHT.classList.remove('active');
      CTRL_RIGHT.classList.add('remove');
    }
    if (el.code === 'ShiftLeft') {
      SHIFT_RIGHT.classList.remove('active');
      SHIFT_RIGHT.classList.remove('remove');
    }
    if (el.code === 'ShiftRight') {
      SHIFT_LEFT.classList.remove('active');
      SHIFT_LEFT.classList.remove('remove');
    }
    if (el.code === 'AltLeft') {
      ALT_RIGHT.classList.remove('remove');
      ALT_RIGHT.classList.remove('active');
    }
    if (el.code === 'AltRight') {
      ALT_LEFT.classList.remove('active');
      ALT_LEFT.classList.remove('remove');
    }
    this.setTimeout(() => {
      KEYS[i].classList.remove('remove')
    }, 100);
  }
})

window.addEventListener('keyup', function(el) {
  for (let i = 0; i < NUMBERS.length; i++) {
    if (el.key === NUMBERS[i].getAttribute('data-number')) {
      NUMBERS[i].classList.remove('active');
      NUMBERS[i].classList.add('remove');
    }
    this.setTimeout(() => {
      NUMBERS[i].classList.remove('remove')
    }, 100);
  }
})

window.addEventListener('keyup', function(el) {
  for (let i = 0; i < SYMBOLS.length; i++) {
    if (el.key === SYMBOLS[i].getAttribute('data-symbol')) {
      SYMBOLS[i].classList.remove('active');
      SYMBOLS[i].classList.add('remove');
    }
    this.setTimeout(() => {
      SYMBOLS[i].classList.remove('remove')
    }, 100);
  }
})

window.addEventListener('keyup', function(el) {
  for (let i = 0; i < SUBSYMBOLS.length; i++) {
    if (el.key === SUBSYMBOLS[i].getAttribute('data-subsymbol')) {
      SUBSYMBOLS[i].classList.remove('active');
      SUBSYMBOLS[i].classList.add('remove');
    }
    this.setTimeout(() => {
      SUBSYMBOLS[i].classList.remove('remove')
    }, 100);
  }
})
// -----------------------------------------------------------------------

// * preventDefault-------------------------------------------------------
document.addEventListener('keydown', function(event) {
  let keyCode = event.code;
  if (keyCode === 'AltLeft' || keyCode === 'AltRight') {
    event.preventDefault();
  }
  if (keyCode === 'ControlLeft' || keyCode === 'ControlRight') {
    event.preventDefault();
  }
});

TEXT.addEventListener('keydown', function(event) {
  if (event.code === 'Tab') {
    event.preventDefault();
    const cursorPosition = this.selectionStart;
    const spaces = '    ';
    this.value = this.value.substring(0, cursorPosition) + spaces + this.value.substring(cursorPosition);
    this.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
  }
});
// -----------------------------------------------------------------------

// * Click on buttons-----------------------------------------------------
document.addEventListener('click', function(event) {
  if (!TEXT.contains(event.target)) {
    TEXT.focus();
  }
});

CAPS.addEventListener('click', function() {
  CAPS.classList.toggle('active');
})

SUBSYMBOLS.forEach(function(el) {
  el.addEventListener('click', function() {
    if (SHIFT_LEFT.classList.contains('active') || SHIFT_RIGHT.classList.contains('active')) {
      let value = el.getAttribute('data-subsymbol');
      value = value.split('');
      TEXT.value += value[0];
    }
  });
});

NUMBERS.forEach(function(el) {
  el.addEventListener('click', function() {
    el.classList.add('active');
    setTimeout(() => {
      el.classList.remove('active')
    }, 150);
    if (!SHIFT_LEFT.classList.contains('active')) {
      let value = el.getAttribute('data-number');
      TEXT.value += value;
    }
  });
});

SYMBOLS.forEach(function(el) {
  el.addEventListener('click', function() {
    el.classList.add('active');
    setTimeout(() => {
      el.classList.remove('active')
    }, 150);
    if (!SHIFT_LEFT.classList.contains('active')) {
      let value = el.getAttribute('data-symbol');
      TEXT.value += value;
    };
  });
});

DATA_ENG.forEach(function(el) {
  el.addEventListener('click', function() {
    el.classList.add('active');
    setTimeout(() => {
      el.classList.remove('active')
    }, 150);
    let value = el.textContent[0];
    if (CAPS.classList.contains('active')) {
      TEXT.value += value;
    } else {
      TEXT.value += value.toLowerCase();
    }
  });
});

BACKSPACE.addEventListener('click', () => {
  BACKSPACE.classList.add('active');
  let value = TEXT.value;
  value = value.substring(0, value.length - 1);
  TEXT.value = value;
  setTimeout(() => {
    BACKSPACE.classList.remove('active')
  }, 150);
});

DELETE.addEventListener('click', () => {
  DELETE.classList.add('active');
  const cursorPos = TEXT.selectionStart;
  let text = TEXT.value;
  text = text.slice(0, cursorPos) + text.slice(cursorPos + 1);
  TEXT.value = text;
  TEXT.selectionStart = cursorPos;
  TEXT.selectionEnd = cursorPos;
  setTimeout(() => {
    DELETE.classList.remove('active')
  }, 150);
});

ENTER.addEventListener('click', () => {
  ENTER.classList.add('active');
  TEXT.value += '\n';
  setTimeout(() => {
    ENTER.classList.remove('active')
  }, 150);
});

SPACE.addEventListener('click', () => {
  SPACE.classList.add('active');
  TEXT.value += ' ';
  setTimeout(() => {
    SPACE.classList.remove('active')
  }, 150);
});

RIGHT.addEventListener('click', () => {
  RIGHT.classList.add('active');
  const currentPosition = TEXT.selectionStart;
  TEXT.setSelectionRange(currentPosition + 1, currentPosition + 1);
  TEXT.focus();
  setTimeout(() => {
    RIGHT.classList.remove('active')
  }, 150);
});

LEFT.addEventListener('click', () => {
  LEFT.classList.add('active');
  let pos = TEXT.selectionStart;
  if (pos > 0) {
    TEXT.selectionStart = pos - 1;
    TEXT.selectionEnd = pos - 1;
  }
  TEXT.focus();
  setTimeout(() => {
    LEFT.classList.remove('active')
  }, 150);
});

DOWN.addEventListener('click', () => {
  DOWN.classList.add('active');
  let currentPosition = TEXT.selectionStart;
  let currentLine = TEXT.value.substr(0, currentPosition).split("\n").length - 1;
  let lines = TEXT.value.split("\n");
  let nextLineIndex = lines[currentLine].length + 1;
  TEXT.setSelectionRange(currentPosition + nextLineIndex, currentPosition + nextLineIndex);
  setTimeout(() => {
    DOWN.classList.remove('active')
  }, 150);
});

UP.addEventListener('click', () => {
  UP.classList.add('active');
  setTimeout(() => {
      UP.classList.remove('active')
    }, 150);
  let currentPosition = TEXT.selectionStart;
  let currentLine = TEXT.value.substr(0, currentPosition).split("\n").length - 1;
  let lines = TEXT.value.split("\n");
  let prevLine = lines[currentLine - 1];
  let prevLinePosition = prevLine.length;
  if (prevLinePosition > currentPosition) {
    prevLinePosition = currentPosition;
  }
  let newPosition = TEXT.value.substr(0, TEXT.value.indexOf(prevLine)) + prevLine.substr(0, prevLinePosition);
  TEXT.setSelectionRange(newPosition.length, newPosition.length);
});

TAB.addEventListener('click', () => {
  TAB.classList.add('active');
  const cursorPos = TEXT.selectionStart;
  const newCursorPos = cursorPos + 4;
  TEXT.value = TEXT.value.slice(0, cursorPos) + '    ' + TEXT.value.slice(cursorPos);
  TEXT.selectionStart = newCursorPos;
  TEXT.selectionEnd = newCursorPos;
  setTimeout(() => {
    TAB.classList.remove('active')
  }, 150);
});
// -----------------------------------------------------------------------

// * Change language------------------------------------------------------
const allLang = ['en', 'ru'];
let currentLang = 'en';
// const currentPathName = window.location.pathname;
// let currentText = {};

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.altKey) {
    WRAPPER.classList.toggle('rus');
    if (WRAPPER.classList.contains('rus')) {
      FLAG.style.backgroundImage = "url('./assets/Flag_of_Russia.svg')";
      WRAPPER.dataset.lang = 'ru';
      currentLang = WRAPPER.dataset.lang;
      changeLang();
    } else {
      FLAG.style.backgroundImage = "url('./assets/Square_Flag_of_the_United_Kingdom.svg')";
      WRAPPER.dataset.lang = 'en';
      currentLang = WRAPPER.dataset.lang;
      changeLang();
    };
  }
});

function changeLang() {
  for (const key in langText) {
    const elem = document.querySelector(`[data-eng=${key}]`)
    if(elem) {
      elem.textContent = langText[key][currentLang];
    }
  }

}
changeLang();

console.log(Array.from(SYMBOLS))