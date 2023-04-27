const REVERSE_QUOTES = '`';
const HTML = `
<main class="wrapper">
<textarea class="text" cols="30" rows="10" placeholder="&#10004; to change the language use the keyboard shortcut Shift + Alt &#10;&#10004; для смены языка используйте сочетание клавиш Shift + Alt"></textarea>
<div class="keyboard-wrapper">
  <div class="keyboard-keys">
    <div class="row">
      <div class="keys">${REVERSE_QUOTES}
        <div class="sub-keys">~</div>
      </div>
      <div class="keys">1
        <div class="sub-keys">!</div>
      </div>
      <div class="keys">2
        <div class="sub-keys">@</div>
      </div>
      <div class="keys">3
        <div class="sub-keys">#</div>
      </div>
      <div class="keys">4
        <div class="sub-keys">$</div>
      </div>
      <div class="keys">5
        <div class="sub-keys">%</div>
      </div>
      <div class="keys">6
        <div class="sub-keys">^</div>
      </div>
      <div class="keys">7
        <div class="sub-keys">&</div>
      </div>
      <div class="keys">8
        <div class="sub-keys">*</div>
      </div>
      <div class="keys">9
        <div class="sub-keys">(</div>
      </div>
      <div class="keys">0
        <div class="sub-keys">)</div>
      </div>
      <div class="keys">-
        <div class="sub-keys">_</div>
      </div>
      <div class="keys">=
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
      <div class="keys">[
        <div class="sub-keys">{</div>
      </div>
      <div class="keys">]
        <div class="sub-keys">}</div>
      </div>
      <div class="keys slash">\
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
      <div class="keys">;
        <div class="sub-keys">:</div>
      </div>
      <div class="keys">'
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
      <div class="keys">,
        <div class="sub-keys">&lt;</div>
      </div>
      <div class="keys">.
        <div class="sub-keys">&gt;</div>
      </div>
      <div class="keys">/
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