class Post {
    constructor({ id, title, author, text, date, likes }) {
        this._id = id;
        this._title = title;
        this._author = author;
        this.text = text;
        this._date = date;
        this.likes = likes;
    }

    set text(text) {
        if (text.trim() !== "") {
            this._text = text;
        }
    }

    set likes(likes) {
        if (likes >= 0) {
            this._likes = likes;
        }
    }

    get likes() {
        return this._likes;
    }

    editText(newText) {
        this.text = newText;
    }

    like() {
        this.likes++;
    }

    dislike() {
        this.likes--;
    }
}

const post1 = new Post({
    id: 123,
    title: "test post",
    author: "I",
    text: "Всім привіт",
    date: Date(),
    likes: 0,
});

console.dir(post1);

post1.like();
post1.like();
post1.like();
post1.dislike();
post1.dislike();
post1.dislike();
post1.dislike();
post1.dislike();

post1.editText("   ");
