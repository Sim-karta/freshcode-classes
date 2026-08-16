const postGroup = document.querySelector(".post");
const postShowBtn = postGroup.querySelector(".post-show-btn");
const postLikeBtn = postGroup.querySelector(".post-like-btn");
const postDislikeBtn = postGroup.querySelector(".post-dislike-btn");
const postEditBtn = postGroup.querySelector(".post-edit-btn");

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
            this._text = text.trim();
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

postShowBtn.addEventListener("click", () => {
    console.dir(post1);
});

postLikeBtn.addEventListener("click", () => {
    post1.like();
});

postDislikeBtn.addEventListener("click", () => {
    post1.dislike();
});

postEditBtn.addEventListener("click", () => {
    post1.editText(prompt("Введіть новий текст посту"));
});
