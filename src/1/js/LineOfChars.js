export class LineOfChars { // １行あたりの字数（全角:10〜50,半角:30〜140）
    constructor(id='line-of-wide-chars', value=40, min=10, max=50) {
        this.#id = id; // CSSカスタムプロパティ、HTML要素のid属性値
        this.#value = value; // 字数（初期値）
        this.#min = min; // 字数（最小値）
        this.#max = max; // 字数（最大値）
        this.#elm_html_input = null;
        this.#elm_html_label = null;
        this.#elm_css_root = null;
    }
    #get() {
        this.#elm_css_root = document.querySelector(':root');
        this.#value = ('LineOfChars' in localStorage) ? localStorage.getItem(`${this.#id}`) : getComputedStyle(root).getPropertyValue(`--${this.#id}`);
        this.#min = getComputedStyle(root).getPropertyValue(`--min-${this.#id}`);
        this.#max = getComputedStyle(root).getPropertyValue(`--max-${this.#id}`);
    }
    init() {
        this.#get();
        this.#elm_html_input = document.querySelector(`#${this.#id}`);
        this.#elm_html_input.addEventListener('input', (e) => { this.#change(e); }); // UI変更時その値をCSS変数やHTMLにセットする
        this.#elm_html_input.dispatchEvent(new Event('input'));
    }
    #change(e) {
        this.#value = e.target.value;
        document.querySelector(':root').style.setProperty(`--${this.#id}`, `${this.#value}`);
        document.querySelector(`${this.#id}-label`).innerHTML = this.#value;
        console.log(`${this.#value}`);
    }
    save() {
        localStorage.setItem(`${this.#id}`, document.querySelector(`#${this.#id}`).value);
    }
}

