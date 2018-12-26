

if(document.documentElement.textContent === undefined){
    Object.defineProperty(Element.prototype, "textContent", {
        get: function () {
            var text = this.innerText
            return text;
        }
    });
}