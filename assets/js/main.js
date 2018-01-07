var paragraphs = document.querySelectorAll('article p');
paragraphs.forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/([\s]+)(\S{1,2})([\s]+)/g, '$1$2&nbsp;');
})

Hyphenator.config({
    selectorfunction: () => paragraphs
});
Hyphenator.run();
