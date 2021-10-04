var data = [
    {
        color:"blue",
        num:0
    },
    {
        color:"red",
        num:0
    },
    {
        color:"Green",
        num:0
    },
];
var eles= [];

function character (color,num) {
    const that = this;
    this.color = color;
    this.num = num;
    this.ele = document.createElement("div");
    this.ele.innerHTML = this.num;
    this.ele.classList.add("style");
    this.ele.style.backgroundColor = this.color;
    this.ele.addEventListener("click", function () {
        that.changeNum();
    })
    document.body.appendChild(this.ele);
}

    character.prototype.changeNum = function () {
        this.num = this.num + 1;
        this.ele.innerHTML = this.num;
    };

        for (var i=0; i<data.length; i++){
            eles.push(new character(data[i].color,data[i].num));
        }