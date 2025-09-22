import React, { useState } from 'react';
// Note: This component requires the 'recharts' library.
// Please install it by running: npm install recharts
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// --- SVG Icon Components ---
const HomeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);
const PackageIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>
  </svg>
);
const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>
  </svg>
);
const UsersIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);
const SettingsIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle>
  </svg>
);
const TrendingUpIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);
const ZapIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
);
const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// --- Mock Data ---
const initialInventory = [
    { id: 1, name: "Cotton Fabric (Blue)", sku: "FAB-CTN-BL-01", quantity: 1500, unit: "meters", reorder: 500, status: "In Stock" },
    { id: 2, name: "Shirt Buttons (White)", sku: "BTN-WHT-12MM", quantity: 8500, unit: "pieces", reorder: 2000, status: "In Stock" },
    { id: 3, name: "Sewing Thread (Black)", sku: "THRD-BLK-50M", quantity: 450, unit: "spools", reorder: 500, status: "Low Stock" },
    { id: 4, name: "Polo T-Shirt (Medium)", sku: "TSH-POL-M-GRN", quantity: 250, unit: "pieces", reorder: 100, status: "In Stock" },
    { id: 5, name: "Denim Fabric", sku: "FAB-DNM-DK-01", quantity: 0, unit: "meters", reorder: 300, status: "Out of Stock" },
];

const initialInvoices = [
    { id: "INV-2025-0922", customer: "Rajesh Exports Pvt. Ltd.", amount: 25000, issueDate: "2025-09-20", dueDate: "2025-10-20", status: "Paid" },
    { id: "INV-2025-0921", customer: "Modern Kirana Store", amount: 12450, issueDate: "2025-09-18", dueDate: "2025-10-03", status: "Pending" },
    { id: "INV-2025-0920", customer: "Surat Textiles", amount: 88000, issueDate: "2025-08-15", dueDate: "2025-09-15", status: "Overdue" },
];

const initialVendors = [
    { id: 1, name: "Tiruppur Threads", contact: "Ramesh Kumar", email: "ramesh@tiruppurthreads.com", status: "Active", since: "2022-05-10" },
    { id: 2, name: "Surat Textiles", contact: "Priya Singh", email: "priya.s@surattextiles.in", status: "Active", since: "2021-11-20" },
    { id: 3, name: "Delhi Dyeing House", contact: "Amit Sharma", email: "contact@delhidye.co", status: "Inactive", since: "2023-01-15" },
    { id: 4, name: "Mumbai Buttons Inc.", contact: "Anjali Mehta", email: "anjali@mumbaibuttons.com", status: "Active", since: "2022-08-01" },
];

// --- Reusable Components ---
const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md m-4 relative">
                <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
                    <XIcon className="h-6 w-6" />
                </button>
                {children}
            </div>
        </div>
    );
};

// --- Page Components ---

const DashboardPage = () => {
    const salesData = [
      { name: 'Apr', sales: 400000 },
      { name: 'May', sales: 300000 },
      { name: 'Jun', sales: 450000 },
      { name: 'Jul', sales: 420000 },
      { name: 'Aug', sales: 510000 },
      { name: 'Sep', sales: 620000 },
    ];

    const SalesChart = () => (
        <div className="bg-white p-6 rounded-lg shadow-md w-full h-96">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Sales Trend (Last 6 Months)</h3>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={salesData} margin={{ top: 5, right: 20, left: 30, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `₹${value/100000}L`} />
              <Tooltip formatter={(value) => [`₹${value.toLocaleString('en-IN')}`, "Sales"]} />
              <Legend />
              <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
    );
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-green-600">Today's Sales</h3>
                    <p className="text-3xl font-extrabold text-gray-800">₹ 84,520</p>
                    <p className="text-sm text-green-500">+12% from yesterday</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-red-600">Pending Payments</h3>
                    <p className="text-3xl font-extrabold text-gray-800">₹ 1,12,300</p>
                    <p className="text-sm text-gray-500">From 12 invoices</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="font-bold text-lg text-yellow-600">Low Stock Items</h3>
                    <p className="text-3xl font-extrabold text-gray-800">4 Items</p>
                    <p className="text-sm text-gray-500">Raw materials below threshold</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                <div className="lg:col-span-3">
                    <SalesChart />
                </div>
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-3">
                            <div className="p-2 bg-green-100 rounded-full"><FileTextIcon className="h-5 w-5 text-green-600" /></div>
                            <div>
                                <p className="text-sm font-semibold">Invoice #INV-2025-0922 paid</p>
                                <p className="text-xs text-gray-500">2 hours ago</p>
                            </div>
                        </li>
                         <li className="flex items-center space-x-3">
                            <div className="p-2 bg-blue-100 rounded-full"><PackageIcon className="h-5 w-5 text-blue-600" /></div>
                            <div>
                                <p className="text-sm font-semibold">New item "Denim Fabric" added</p>
                                <p className="text-xs text-gray-500">1 day ago</p>
                            </div>
                        </li>
                         <li className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-full"><UsersIcon className="h-5 w-5 text-yellow-600" /></div>
                            <div>
                                <p className="text-sm font-semibold">New vendor "Tiruppur Threads" added</p>
                                <p className="text-xs text-gray-500">3 days ago</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const InventoryPage = () => {
    const [inventory, setInventory] = useState(initialInventory);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const getStatusClass = (status) => {
        switch (status) {
            case "In Stock": return "bg-green-100 text-green-800";
            case "Low Stock": return "bg-yellow-100 text-yellow-800";
            case "Out of Stock": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };
    
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Inventory</h1>
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center">
                    <span className="mr-2">+</span> Add New Item
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Product Name</th>
                            <th className="p-4 font-semibold">SKU</th>
                            <th className="p-4 font-semibold">Quantity</th>
                            <th className="p-4 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map(item => (
                            <tr key={item.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">{item.name}</td>
                                <td className="p-4 text-gray-600">{item.sku}</td>
                                <td className="p-4">{item.quantity.toLocaleString()} {item.unit}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(item.status)}`}>
                                        {item.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Add New Inventory Item</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Item Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="e.g., Cotton Fabric (Blue)" />
                    </div>
                     <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">SKU</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="e.g., FAB-CTN-BL-01" />
                    </div>
                     <div className="grid grid-cols-2 gap-4 mb-4">
                         <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Quantity</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="number" placeholder="1500" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Unit</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="meters" />
                        </div>
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" type="button">
                        Add Item
                    </button>
                </form>
            </Modal>
        </div>
    );
};

const InvoicesPage = () => {
    const getStatusClass = (status) => {
        switch (status) {
            case "Paid": return "bg-green-100 text-green-800";
            case "Pending": return "bg-yellow-100 text-yellow-800";
            case "Overdue": return "bg-red-100 text-red-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center">
                    <span className="mr-2">+</span> Create New Invoice
                </button>
            </div>
             <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Invoice ID</th>
                            <th className="p-4 font-semibold">Customer</th>
                            <th className="p-4 font-semibold">Amount</th>
                            <th className="p-4 font-semibold">Due Date</th>
                            <th className="p-4 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialInvoices.map(invoice => (
                            <tr key={invoice.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium text-blue-600">{invoice.id}</td>
                                <td className="p-4">{invoice.customer}</td>
                                <td className="p-4">₹{invoice.amount.toLocaleString('en-IN')}</td>
                                <td className="p-4 text-gray-600">{invoice.dueDate}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(invoice.status)}`}>
                                        {invoice.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const VendorsPage = () => {
    const [vendors, setVendors] = useState(initialVendors);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getStatusClass = (status) => {
        switch (status) {
            case "Active": return "bg-green-100 text-green-800";
            case "Inactive": return "bg-gray-100 text-gray-800";
            default: return "bg-gray-100 text-gray-800";
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Vendors</h1>
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center">
                    <span className="mr-2">+</span> Add New Vendor
                </button>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="p-4 font-semibold">Vendor Name</th>
                            <th className="p-4 font-semibold">Contact Person</th>
                            <th className="p-4 font-semibold">Email</th>
                            <th className="p-4 font-semibold">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vendors.map(vendor => (
                            <tr key={vendor.id} className="border-b hover:bg-gray-50">
                                <td className="p-4 font-medium">{vendor.name}</td>
                                <td className="p-4 text-gray-600">{vendor.contact}</td>
                                <td className="p-4 text-gray-600">{vendor.email}</td>
                                <td className="p-4">
                                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusClass(vendor.status)}`}>
                                        {vendor.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
             <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <h2 className="text-2xl font-bold mb-4">Add New Vendor</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Vendor Name</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="e.g., Tiruppur Threads" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Contact Person</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" placeholder="e.g., Ramesh Kumar" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="email" placeholder="e.g., contact@tiruppurthreads.com" />
                    </div>
                    <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700" type="button">
                        Add Vendor
                    </button>
                </form>
            </Modal>
        </div>
    );
};

const forecastData = {
    "TSH-POL-M-GRN": {
        data: [
            { name: 'Jun', historical: 220, forecast: 220 }, { name: 'Jul', historical: 240, forecast: 240 }, { name: 'Aug', historical: 290, forecast: 290 },
            { name: 'Sep', forecast: 310 }, { name: 'Oct (Diwali)', forecast: 450 }, { name: 'Nov', forecast: 320 },
        ],
        insights: "Significant demand spike expected in October for the Diwali season. Recommend increasing production by 50% in September."
    },
    "FAB-CTN-BL-01": {
        data: [
            { name: 'Jun', historical: 1400, forecast: 1400 }, { name: 'Jul', historical: 1600, forecast: 1600 }, { name: 'Aug', historical: 1550, forecast: 1550 },
            { name: 'Sep', forecast: 1700 }, { name: 'Oct', forecast: 1750 }, { name: 'Nov', forecast: 1800 },
        ],
        insights: "Steady upward trend in demand for blue cotton fabric. Suggest placing a bulk order with a 10% increase to meet demand and get better pricing."
    },
};

const ForecastingPage = () => {
    const [selectedProduct, setSelectedProduct] = useState("TSH-POL-M-GRN");

    const currentForecast = forecastData[selectedProduct];

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">AI Demand Forecasting</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Controls and Insights */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Forecasting Options</h3>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Select Product</label>
                            <select 
                                value={selectedProduct}
                                onChange={(e) => setSelectedProduct(e.target.value)}
                                className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                                <option value="TSH-POL-M-GRN">Polo T-Shirt (Medium)</option>
                                <option value="FAB-CTN-BL-01">Cotton Fabric (Blue)</option>
                            </select>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">AI Insights</h3>
                        <p className="text-gray-600">{currentForecast.insights}</p>
                    </div>
                </div>
                {/* Chart */}
                <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md h-96">
                    <h3 className="text-lg font-bold text-gray-800 mb-4">Demand Forecast (Units)</h3>
                    <ResponsiveContainer width="100%" height="90%">
                        <LineChart data={currentForecast.data} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="historical" name="Historical" stroke="#8884d8" strokeWidth={3} />
                            <Line type="monotone" dataKey="forecast" name="Forecasted" stroke="#82ca9d" strokeWidth={3} strokeDasharray="5 5" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

const SettingsPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
            <div className="space-y-8">
                {/* Company Profile */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Profile</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" defaultValue="My Awesome MSME" />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">GSTIN</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" defaultValue="27ABCDE1234F1Z5" />
                        </div>
                         <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Contact Email</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="email" defaultValue="contact@msme.com" />
                        </div>
                         <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="text" defaultValue="+91 98765 43210" />
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Security</h2>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Change Password</label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-4" type="password" placeholder="Current Password" />
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700" type="password" placeholder="New Password" />
                    </div>
                </div>

                <div className="flex justify-end">
                    <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Save Changes</button>
                </div>
            </div>
        </div>
    )
};

// --- Main App Component ---
export default function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', icon: HomeIcon },
    { name: 'Inventory', icon: PackageIcon },
    { name: 'Invoices', icon: FileTextIcon },
    { name: 'Vendors', icon: UsersIcon },
    { name: 'Forecasting', icon: TrendingUpIcon },
    { name: 'Settings', icon: SettingsIcon },
  ];
  
  const renderPage = () => {
    switch (activePage) {
      case 'Dashboard': return <DashboardPage />;
      case 'Inventory': return <InventoryPage />;
      case 'Invoices': return <InvoicesPage />;
      case 'Vendors': return <VendorsPage />;
      case 'Forecasting': return <ForecastingPage />;
      case 'Settings': return <SettingsPage />;
      default: return <DashboardPage />;
    }
  };
  
  const Sidebar = () => (
     <aside className={`bg-white text-gray-800 w-64 space-y-2 py-4 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-30 shadow-lg md:shadow-none`}>
        <div className="flex items-center space-x-2 px-4 pb-4 border-b mb-2">
            <ZapIcon className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold tracking-tight">Vyapar<span className="text-blue-600">Plus</span></span>
        </div>
        <ul>
            {navItems.map(item => (
                <li key={item.name}>
                    <a href="#" onClick={() => { setActivePage(item.name); setSidebarOpen(false); }} 
                       className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${activePage === item.name ? 'bg-blue-600 text-white shadow-md' : 'hover:bg-blue-50 text-gray-600'}`}>
                        <item.icon className="h-6 w-6" />
                        <span className="font-semibold">{item.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    </aside>
  );

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm p-4 flex justify-between items-center md:hidden">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-600">
                <MenuIcon className="h-6 w-6"/>
            </button>
            <div className="flex items-center space-x-2">
                <ZapIcon className="w-7 h-7 text-blue-600" />
                <span className="text-xl font-bold tracking-tight">Vyapar<span className="text-blue-600">Plus</span></span>
            </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {renderPage()}
        </main>
      </div>
    </div>
  );
}

  