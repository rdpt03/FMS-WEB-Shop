// order.js
// Class representing an Order in the shop system

export class Order {
  #id;
  #orderDate;
  #confirmed;
  #confirmedDate;

  constructor(id, orderDate, confirmed = false, confirmedDate = null) {
    this.id = id;
    this.orderDate = orderDate;
    this.confirmed = confirmed;
    this.confirmedDate = confirmedDate;
  }
}
