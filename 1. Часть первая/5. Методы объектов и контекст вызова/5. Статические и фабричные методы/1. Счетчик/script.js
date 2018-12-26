function Article() {
    this.created = new Date();

    Article.count++; // увеличиваем счетчик при каждом вызове
    Article.last = this.created; // и запоминаем дату
}

Article.showStats = function () {
    return "Всего: " + this.counter + ", Последняя:" + this.last;
};
Article.count = 0;

new Article();
new Article();

console.log(Article.showStats()); // Всего: 2, Последняя: (дата)

new Article();

console.log(Article.showStats()); // Всего: 3, Последняя: (дата)