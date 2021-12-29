import {LineOfChars} from 'js/LineOfChars.js';
export class LineOfCharsFactory { // １行あたりの字数（全角:10〜50,半角:30〜140）設定UI生成者
    constructor() {}
    create() {
        this.#lineOfWideChars = this.#create(id='line-of-wide-chars'); // 全角字数／行
        this.#lineOfHalfChars = this.#create(id='line-of-half-chars'); // 半角字数／行
    }
    #get(id='line-of-chars', value=40, min=10, max=50) {// CSSカスタムプロパティ＆HTML要素のid属性値、初期値、最小値、最大値
        const root = document.querySelector(':root');
        const Value = localStorage.getItem(`${id}`) || getComputedStyle(root).getPropertyValue(`--${id}`) || value;
        const Min = getComputedStyle(root).getPropertyValue(`--min-${id}`) || min;
        const Max = getComputedStyle(root).getPropertyValue(`--max-${id}`) || max;
        return [Value, Min, Max];
    }
    #create(id='line-of-chars') {
        const [value, min, max] = this.#get(id);
        return new LineOfChars(id, value, min, max);
    }
    get Wide() { return this.#lineOfWideChars; }
    get Half() { return this.#lineOfHalfChars; }
}

