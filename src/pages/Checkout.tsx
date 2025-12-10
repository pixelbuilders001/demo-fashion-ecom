import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { useCart } from "@/context/CartContext";
import { ChevronLeft, CreditCard, Smartphone, Banknote } from "lucide-react";

const deliveryOptions = [
  { id: "standard", name: "Standard Delivery", price: 0, time: "5-7 business days" },
  { id: "express", name: "Express Delivery", price: 15, time: "2-3 business days" },
];

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard },
  { id: "upi", name: "UPI", icon: Smartphone },
  { id: "cod", name: "Cash on Delivery", icon: Banknote },
];

export default function Checkout() {
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  });

  const [selectedDelivery, setSelectedDelivery] = useState("standard");
  const [selectedPayment, setSelectedPayment] = useState("card");

  const deliveryPrice = deliveryOptions.find((d) => d.id === selectedDelivery)?.price || 0;
  const shipping = subtotal >= 150 ? 0 : deliveryPrice;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate order ID
    const orderId = `LX${Date.now().toString(36).toUpperCase()}`;
    clearCart();
    navigate(`/order-confirmation/${orderId}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container-elegant py-24 text-center">
          <h1 className="heading-section mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Add some items to your cart before checking out.
          </p>
          <Link to="/collection" className="btn-elegant">
            Shop Now
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-elegant py-8 md:py-12">
        {/* Back Link */}
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to Cart
        </Link>

        <h1 className="heading-section mb-8">Checkout</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Address */}
              <section>
                <h2 className="text-lg font-medium mb-6">Shipping Address</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-muted-foreground block mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleInputChange}
                      className="input-elegant"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-2">
                      Country
                    </label>
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="input-elegant"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                      <option>Australia</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Delivery Options */}
              <section>
                <h2 className="text-lg font-medium mb-6">Delivery Options</h2>
                <div className="space-y-3">
                  {deliveryOptions.map((option) => (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between p-4 border cursor-pointer transition-colors ${
                        selectedDelivery === option.id
                          ? "border-primary bg-secondary/50"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={(e) => setSelectedDelivery(e.target.value)}
                          className="sr-only"
                        />
                        <span
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedDelivery === option.id
                              ? "border-primary"
                              : "border-border"
                          }`}
                        >
                          {selectedDelivery === option.id && (
                            <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                          )}
                        </span>
                        <div>
                          <span className="font-medium">{option.name}</span>
                          <span className="text-sm text-muted-foreground ml-2">
                            ({option.time})
                          </span>
                        </div>
                      </div>
                      <span className="font-medium">
                        {option.price === 0 ? "Free" : `$${option.price}`}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              {/* Payment Method */}
              <section>
                <h2 className="text-lg font-medium mb-6">Payment Method</h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                        selectedPayment === method.id
                          ? "border-primary bg-secondary/50"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={selectedPayment === method.id}
                        onChange={(e) => setSelectedPayment(e.target.value)}
                        className="sr-only"
                      />
                      <span
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPayment === method.id
                            ? "border-primary"
                            : "border-border"
                        }`}
                      >
                        {selectedPayment === method.id && (
                          <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                        )}
                      </span>
                      <method.icon className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium">{method.name}</span>
                    </label>
                  ))}
                </div>

                {selectedPayment === "card" && (
                  <div className="mt-6 p-4 bg-secondary rounded">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm text-muted-foreground block mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          className="input-elegant"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-muted-foreground block mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="input-elegant"
                          />
                        </div>
                        <div>
                          <label className="text-sm text-muted-foreground block mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="input-elegant"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary p-6 md:p-8 sticky top-32">
                <h2 className="text-lg font-medium mb-6">Order Summary</h2>

                {/* Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.selectedColor}-${item.selectedSize}`}
                      className="flex gap-4"
                    >
                      <div className="w-16 aspect-[3/4] bg-background">
                        <img
                          src={item.product.images[0]}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{item.product.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {item.selectedColor} / {item.selectedSize}
                        </p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm font-medium">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="space-y-3 py-4 border-t border-border">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                </div>

                <div className="flex justify-between py-4 border-t border-border mb-6">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>

                <button type="submit" className="btn-elegant w-full">
                  Place Order
                </button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By placing your order, you agree to our Terms & Conditions
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
