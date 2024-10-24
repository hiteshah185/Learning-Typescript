export class Price {
    private _price!: number;
    constructor(price: number) {
      if (price < 0) {
        throw new Error("Invalid Price");
      }
      this._price = price;
    }
    get Price(): number {
      return this._price;
    }
    applyDiscount(discountPercentage: number): Price {
      const discountedPrice = this._price * (discountPercentage / 100);
      const finalPrice = this._price - discountedPrice;
      if (finalPrice < 0) {
        throw new Error("Invalid Price");
      }
      return new Price(finalPrice);
    }
  }
  