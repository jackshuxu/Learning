class Synth {
  constructor(brand, price, algo) {
    this.brand = brand;
    this.price = price;
    this.algo = algo;
  }

  set brand(newBrand) {
    if (typeof newBrand === "string") this._brand = newBrand;
  }
  set price(newPrice) {
    if (typeof newPrice === "number" && newPrice > 0) this._price = newPrice;
    else console.error("Incorrect price");
  }
  set algo(newAlgo) {
    if (typeof newAlgo === "string") {
      if (newAlgo == "Digital" || newAlgo == "Analog") this._algo = newAlgo;
      else console.error("This type of synth does not exist");
    } else console.error("Incorrect type");
  }

  get brand() {
    return this._brand;
  }
  get price() {
    return this._price;
  }
  get algo() {
    return this._algo;
  }
}

const minifreak = new Synth("Aturia", 599, "Digital");
console.log(minifreak.brand);
console.log(minifreak.price);
console.log(minifreak.algo);

const dateobj = new Date();
console.log(dateobj);
