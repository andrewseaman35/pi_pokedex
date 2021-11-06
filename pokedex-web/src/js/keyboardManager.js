const KEYS = {
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    ARROW_DOWN: "ArrowDown",
    ENTER: "Enter",
    BACK: "[",
};

class KeyboardManager {
    constructor() {
        if (KeyboardManager._instance) {
          return KeyboardManager._instance
        }
        KeyboardManager._instance = this;

        this.handlers = {};

        this.initEventHandler();
    }

    initEventHandler() {
        window.addEventListener('keydown', (e) => {
            console.log(`${e.key}`);
            if ((e.key) in this.handlers) {
                this.handlers[e.key]();
            }
        });
    }

    clear() {
        this.handlers = {};
    }

    onArrowLeft(func) {
        this.handlers[KEYS.ARROW_LEFT] = func;
    }

    onArrowRight(func) {
        this.handlers[KEYS.ARROW_RIGHT] = func;
    }

    onArrowDown(func) {
        this.handlers[KEYS.ARROW_DOWN] = func;
    }

    onArrowUp(func) {
        this.handlers[KEYS.ARROW_UP] = func;
    }

    onEnter(func) {
        this.handlers[KEYS.ENTER] = func;
    }

    onBack(func) {
        this.handlers[KEYS.BACK] = func;
    }
}

export default KeyboardManager;