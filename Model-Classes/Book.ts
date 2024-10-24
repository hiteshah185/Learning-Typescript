class Book {
    private isbn: number;
    private title!: string;
    private author!: string;
    private _price: number;
    private countryOfPublication?: string;
    private maxPrice: number = 10000;
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
    set Title(title: string) {
      this.checkTitle(title);
      this.title = title;
    }
    get Title(): string {
      return this.title;
    }
    set Price(price: number) {
      this.checkPrice(price);
      this._price = price;
    }
    get Price(): number {
      return this._price;
    }
    private checkTitle(newTitle: string) {
      if (newTitle && newTitle.length == 0) {
        throw new Error("Invalid Title");
      }
    }
    private checkPrice(newPrice: number) {
      if (newPrice && (newPrice < 0 || newPrice > this.maxPrice)) {
        throw new Error("Invalid Price");
      }
    }
  }
  