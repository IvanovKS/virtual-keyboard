const REVERSE_QUOTES = '`';
const HTML = `
<main class="wrapper">
<textarea class="text" cols="30" rows="10" placeholder="&#10004; to change the language use the keyboard shortcut ShiftLeft + AltLeft &#10;&#10004; для смены языка используйте сочетание клавиш ShiftLeft + AltLeft"></textarea>
<div class="keyboard-wrapper">
  <div class="keyboard-keys">
    <div class="row">
      <div class="keys" data-symbol="${REVERSE_QUOTES}">${REVERSE_QUOTES}
        <div class="sub-keys">~</div>
      </div>
      <div class="keys" data-number="1">1
        <p class="sub-keys">!</p>
      </div>
      <div class="keys" data-number="2">2
        <div class="sub-keys">@</div>
      </div>
      <div class="keys" data-number="3">3
        <div class="sub-keys">#</div>
      </div>
      <div class="keys" data-number="4">4
        <div class="sub-keys">$</div>
      </div>
      <div class="keys" data-number="5">5
        <div class="sub-keys">%</div>
      </div>
      <div class="keys" data-number="6">6
        <div class="sub-keys">^</div>
      </div>
      <div class="keys" data-number="7">7
        <div class="sub-keys">&</div>
      </div>
      <div class="keys" data-number="8">8
        <div class="sub-keys">*</div>
      </div>
      <div class="keys" data-number="9">9
        <div class="sub-keys">(</div>
      </div>
      <div class="keys" data-number="0">0
        <div class="sub-keys">)</div>
      </div>
      <div class="keys" data-symbol="-">-
        <div class="sub-keys">_</div>
      </div>
      <div class="keys" data-symbol="=">=
        <div class="sub-keys">+</div>
      </div>
      <div class="keys backspace">Backspace</div>
    </div>
    <div class="row">
      <div class="keys tab">Tab</div>
      <div class="keys">Q</div>
      <div class="keys">W</div>
      <div class="keys">E</div>
      <div class="keys">R</div>
      <div class="keys">T</div>
      <div class="keys">Y</div>
      <div class="keys">U</div>
      <div class="keys">I</div>
      <div class="keys">O</div>
      <div class="keys">P</div>
      <div class="keys" data-symbol="[">[
        <div class="sub-keys">{</div>
      </div>
      <div class="keys" data-symbol="]">]
        <div class="sub-keys">}</div>
      </div>
      <div class="keys backslash">&#92;
        <div class="sub-keys">|</div>
      </div>
      <div class="keys delete">Del</div>
    </div>
    <div class="row">
      <div class="keys caps">Caps Lock</div>
      <div class="keys">A</div>
      <div class="keys">S</div>
      <div class="keys">D</div>
      <div class="keys">F</div>
      <div class="keys">G</div>
      <div class="keys">H</div>
      <div class="keys">J</div>
      <div class="keys">K</div>
      <div class="keys">L</div>
      <div class="keys" data-symbol=";">;
        <div class="sub-keys">:</div>
      </div>
      <div class="keys" data-symbol="'">'
        <div class="sub-keys">"</div>
      </div>
      <div class="keys enter">Enter</div>
    </div>
    <div class="row">
      <div class="keys shift shift-left">Shift</div>
      <div class="keys">Z</div>
      <div class="keys">X</div>
      <div class="keys">C</div>
      <div class="keys">V</div>
      <div class="keys">B</div>
      <div class="keys">N</div>
      <div class="keys">M</div>
      <div class="keys" data-symbol=",">,
        <div class="sub-keys">&lt;</div>
      </div>
      <div class="keys" data-symbol=".">.
        <div class="sub-keys">&gt;</div>
      </div>
      <div class="keys" data-symbol="/">/
        <div class="sub-keys">?</div>
      </div>
      <div class="keys shift shift-right">Shift</div>
      <div class="keys up">Up</div>
      <div class="flag">
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
const FLAG = document.querySelector('.flag');
const TEXT = document.querySelector('.text');
const NUMBERS = document.querySelectorAll('[data-number]');
const SYMBOLS = document.querySelectorAll('[data-symbol]');
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
    if (el.code === 'CapsLock') {
      CAPS.classList.toggle('active');
    }
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

// console.log(KEYS_ARRAY)


KEYS_ARRAY.forEach(function(el) {
  el.addEventListener('click', function(event) {
    // let value = event.target.getAttribute('data-value');
    el.classList.add('active');
    setTimeout(() => {
      el.classList.remove('active')
    }, 300);
    let value = el.textContent;
    TEXT.value += value.toLocaleLowerCase();
  });
});

