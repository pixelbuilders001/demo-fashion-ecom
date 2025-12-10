import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  LogOut,
  ChevronRight,
  Edit,
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { id: "profile", label: "My Profile", icon: User },
  { id: "orders", label: "My Orders", icon: Package },
  { id: "wishlist", label: "Wishlist", icon: Heart },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "payments", label: "Payment Methods", icon: CreditCard },
];

const mockOrders = [
  {
    id: "LX1A2B3C",
    date: "Dec 5, 2024",
    status: "Shipped",
    total: 245,
    items: 2,
  },
  {
    id: "LX9D8E7F",
    date: "Nov 28, 2024",
    status: "Delivered",
    total: 189,
    items: 1,
  },
];

const mockAddresses = [
  {
    id: "1",
    name: "Home",
    address: "123 Fashion Street, Apt 4B, New York, NY 10001",
    isDefault: true,
  },
  {
    id: "2",
    name: "Office",
    address: "456 Business Ave, Suite 100, New York, NY 10002",
    isDefault: false,
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">My Profile</h2>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Edit className="h-4 w-4" />
                Edit
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground">First Name</label>
                <p className="font-medium mt-1">John</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Last Name</label>
                <p className="font-medium mt-1">Doe</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Email</label>
                <p className="font-medium mt-1">john.doe@example.com</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Phone</label>
                <p className="font-medium mt-1">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-medium mb-4">Change Password</h3>
              <button className="btn-outline-elegant">Update Password</button>
            </div>
          </div>
        );

      case "orders":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">My Orders</h2>
            {mockOrders.length === 0 ? (
              <div className="text-center py-12">
                <Package className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                <p className="text-muted-foreground mb-4">No orders yet</p>
                <Link to="/collection" className="btn-elegant">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {mockOrders.map((order) => (
                  <div
                    key={order.id}
                    className="p-4 border border-border hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-medium">{order.id}</span>
                      <span
                        className={cn(
                          "text-xs px-2 py-1",
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700"
                            : "bg-blue-100 text-blue-700"
                        )}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>
                        {order.date} • {order.items} item{order.items > 1 ? "s" : ""}
                      </span>
                      <span className="font-medium text-foreground">${order.total}</span>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Link
                        to={`/track-order/${order.id}`}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        Track Order
                      </Link>
                      <button className="text-sm text-muted-foreground hover:text-foreground">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "wishlist":
        return (
          <div>
            <h2 className="text-xl font-medium mb-6">My Wishlist</h2>
            <div className="text-center py-12">
              <Heart className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">Your wishlist is empty</p>
              <Link to="/collection" className="btn-elegant">
                Explore Collection
              </Link>
            </div>
          </div>
        );

      case "addresses":
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">Saved Addresses</h2>
              <button className="btn-outline-elegant">Add New</button>
            </div>
            <div className="space-y-4">
              {mockAddresses.map((address) => (
                <div key={address.id} className="p-4 border border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{address.name}</span>
                    {address.isDefault && (
                      <span className="text-xs bg-secondary px-2 py-1">Default</span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{address.address}</p>
                  <div className="flex gap-4 mt-4">
                    <button className="text-sm text-muted-foreground hover:text-foreground">
                      Edit
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-foreground">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "payments":
        return (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-medium">Payment Methods</h2>
              <button className="btn-outline-elegant">Add New</button>
            </div>
            <div className="p-4 border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded flex items-center justify-center text-white text-xs font-bold">
                  VISA
                </div>
                <div className="flex-1">
                  <p className="font-medium">•••• •••• •••• 4242</p>
                  <p className="text-sm text-muted-foreground">Expires 12/25</p>
                </div>
                <span className="text-xs bg-secondary px-2 py-1">Default</span>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="container-elegant py-8 md:py-12">
        <h1 className="heading-section mb-8">My Account</h1>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between p-3 text-left transition-colors",
                    activeTab === item.id
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    {item.label}
                  </span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
              <button className="w-full flex items-center gap-3 p-3 text-left text-destructive hover:bg-destructive/10 transition-colors">
                <LogOut className="h-5 w-5" />
                Logout
              </button>
            </nav>
          </aside>

          {/* Content */}
          <main className="lg:col-span-3 bg-card p-6 md:p-8 border border-border">
            {renderContent()}
          </main>
        </div>
      </div>
    </Layout>
  );
}
