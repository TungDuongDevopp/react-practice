class Novel{
    #Title;
    #Author;
    constructor(title, author){
        this.#Title = title;
        this.#Author = author; }
        getAuthor(){
            return this.#Author;
        }
        getTitle(){
            return this.#Title;
        }
}
    const novel1 = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Nhật Ánh");
    console.log(novel1);