import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Package, Truck, CheckCircle, MapPin, Box } from "lucide-react";
import { cn } from "@/lib/utils";

const trackingSteps = [
  {
    id: "placed",
    label: "Order Placed",
    description: "Your order has been confirmed",
    icon: CheckCircle,
    date: "Dec 5, 2024",
    time: "10:30 AM",
  },
  {
    id: "packed",
    label: "Packed",
    description: "Your order is being packed",
    icon: Box,
    date: "Dec 6, 2024",
    time: "2:15 PM",
  },
  {
    id: "shipped",
    label: "Shipped",
    description: "Your order is on the way",
    icon: Truck,
    date: "Dec 7, 2024",
    time: "9:00 AM",
  },
  {
    id: "out-for-delivery",
    label: "Out for Delivery",
    description: "Your order will arrive today",
    icon: MapPin,
    date: null,
    time: null,
  },
  {
    id: "delivered",
    label: "Delivered",
    description: "Package delivered successfully",
    icon: Package,
    date: null,
    time: null,
  },
];

export default function TrackOrder() {
  const { orderId } = useParams();
  const currentStep = 2; // 0-indexed, simulating "Shipped" status

  return (
    <Layout>
      <div className="container-elegant py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-section mb-2">Track Your Order</h1>
          <p className="text-muted-foreground mb-8">
            Order ID: <span className="font-mono font-medium text-foreground">{orderId}</span>
          </p>

          {/* Status Card */}
          <div className="bg-secondary p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Current Status</p>
                <p className="text-xl font-serif font-medium">
                  {trackingSteps[currentStep].label}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                <p className="font-medium">Dec 10, 2024</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="h-1 bg-border rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${((currentStep + 1) / trackingSteps.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                {trackingSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={cn(
                      "flex flex-col items-center",
                      index <= currentStep ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center -mt-5 mb-2",
                        index <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}
                    >
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className="text-xs text-center hidden md:block">{step.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Timeline */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-6">Order Timeline</h2>
            <div className="space-y-0">
              {trackingSteps.map((step, index) => {
                const isCompleted = index <= currentStep;
                const isCurrent = index === currentStep;

                return (
                  <div key={step.id} className="relative pl-10 pb-8 last:pb-0">
                    {/* Connecting Line */}
                    {index < trackingSteps.length - 1 && (
                      <div
                        className={cn(
                          "absolute left-[15px] top-8 w-0.5 h-full -translate-x-1/2",
                          index < currentStep ? "bg-primary" : "bg-border"
                        )}
                      />
                    )}

                    {/* Icon */}
                    <div
                      className={cn(
                        "absolute left-0 w-8 h-8 rounded-full flex items-center justify-center",
                        isCompleted ? "bg-primary text-primary-foreground" : "bg-muted"
                      )}
                    >
                      <step.icon className="h-4 w-4" />
                    </div>

                    {/* Content */}
                    <div
                      className={cn(
                        "p-4 border",
                        isCurrent ? "border-primary bg-secondary" : "border-border"
                      )}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={cn("font-medium", !isCompleted && "text-muted-foreground")}>
                          {step.label}
                        </h3>
                        {step.date && (
                          <span className="text-xs text-muted-foreground">
                            {step.date} • {step.time}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                      {isCurrent && (
                        <p className="text-sm text-primary mt-2 font-medium">
                          Currently in progress
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 border border-border">
              <h3 className="font-medium mb-4">Shipping Address</h3>
              <p className="text-muted-foreground text-sm">
                John Doe<br />
                123 Fashion Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>
            <div className="p-6 border border-border">
              <h3 className="font-medium mb-4">Shipping Carrier</h3>
              <p className="text-muted-foreground text-sm mb-2">
                Standard Shipping via FedEx
              </p>
              <p className="text-sm">
                Tracking: <span className="font-mono">FX123456789</span>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/account/orders" className="btn-outline-elegant">
              View All Orders
            </Link>
            <Link to="/collection" className="btn-elegant">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
