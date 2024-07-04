interface Product {
    name: string;
    cost: number; //Cost per unit
    demand(price: number): number;
  }
  
  class ToothpasteProduct implements Product {
    name: string = "Toothpaste";
    cost: number = 5;
    demand(price: number): number {
      //Assume Linear Demand function
      return 10000 - 2 * price;
    }
  }
  
  class ProfitOptimizer {
    optimize(product: Product, packageName: string, packageSizes: number[]) {
      let maxProfit = 0;
      let optimalPrice = 0;
      let optimalSize = 0;
      for (const size of packageSizes) {
        const price = this.calculatePrice(product, size);
        const profit = this.calculateProfit(product, price, size);
        if (profit > maxProfit) {
          maxProfit = profit;
          optimalPrice = price;
          optimalSize = size;
        }
      }
      console.log(
        `Optimal price for ${packageName} ${product.name}: ${optimalPrice}`
      );
      console.log(`Optimal package size: ${optimalSize} units`);
    }
    calculatePrice(product: Product, size: number): number {
      //Calculate price based on cost, demand and package size
      const costPerUnit = product.cost / size;
      const demand = product.demand(costPerUnit);
      return costPerUnit + demand / 100;
    }
    calculateProfit(product: Product, price: number, size: number): number {
      const demand = product.demand(price);
      const revenue = demand * price;
      const cost = product.cost * size;
      return revenue - cost;
    }
  }
  
  
  const product = new ToothpasteProduct();
  const optimizer = new ProfitOptimizer();
  optimizer.optimize(product,"Family Pack",[150,250,300]);
  