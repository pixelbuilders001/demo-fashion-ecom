import { Link, useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Package, Truck } from "lucide-react";

export default function OrderConfirmation() {
  const { orderId } = useParams();

  const estimatedDelivery = new Date();
  estimatedDelivery.setDate(estimatedDelivery.getDate() + 5);

  return (
    <Layout>
      <div className="container-elegant py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto mb-8 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="heading-display mb-4">Thank You!</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Your order has been placed successfully.
          </p>

          {/* Order Details Card */}
          <div className="bg-secondary p-8 mb-8 text-left">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Number</p>
                <p className="font-medium font-mono">{orderId}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Order Date</p>
                <p className="font-medium">{new Date().toLocaleDateString()}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Payment Status</p>
                <p className="font-medium text-green-600">Confirmed</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                <p className="font-medium">{estimatedDelivery.toLocaleDateString()}</p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="p-6 border border-border text-center">
              <Package className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">Order Processing</h3>
              <p className="text-sm text-muted-foreground">
                We're preparing your order for shipment.
              </p>
            </div>
            <div className="p-6 border border-border text-center">
              <Truck className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
              <h3 className="font-medium mb-2">Track Your Order</h3>
              <p className="text-sm text-muted-foreground">
                You'll receive tracking info via email.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={`/track-order/${orderId}`} className="btn-outline-elegant">
              Track Order
            </Link>
            <Link to="/collection" className="btn-elegant">
              Continue Shopping
            </Link>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            A confirmation email has been sent to your email address.
          </p>
        </div>
      </div>
    </Layout>
  );
}
