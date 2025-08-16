import {
  BarChart3,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Receipt,
} from "lucide-react";

export const highlightsData = [
  {
    value: "Smart Tracking",
    label: "Automatically track all your expenses and income in one place",
  },
  {
    value: "Budget Planning",
    label: "Create and manage budgets with AI-powered recommendations",
  },
  {
    value: "Financial Insights",
    label: "Get actionable insights to optimize spending and savings",
  },
  {
    value: "Multi-Account Support",
    label: "Manage multiple accounts and credit cards seamlessly",
  },
];

export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-gray-500" />,
    title: "Advanced Analytics",
    description:
      "Gain detailed insights into your spending patterns with AI-powered analytics",
  },
  {
    icon: <PieChart className="h-8 w-8 text-gray-500" />,
    title: "Budget Planning",
    description: "Create and manage budgets with intelligent recommendations",
  },
  {
    icon: <CreditCard className="h-8 w-8 text-gray-500" />,
    title: "Multi-Account Support",
    description: "Manage multiple accounts and credit cards in one place",
  },
  {
    icon: <Globe className="h-8 w-8 text-gray-500" />,
    title: "Multi-Currency",
    description: "Support for multiple currencies with real-time conversion",
  },
  {
    icon: <Zap className="h-8 w-8 text-gray-500" />,
    title: "Automated Insights",
    description: "Get automated financial insights and recommendations",
  },
  {
  icon: <Receipt className="h-8 w-8 text-gray-500" />,
  title: "Spending Tracker",
  description: "Easily track daily expenses and categorize transactions automatically to stay on top of your finances.",
}
];

export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-gray-500" />,
    title: "1. Create Your Account",
    description:
      "Sign up securely and link your accounts to start managing your finances",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-gray-500" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track all transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-gray-500" />,
    title: "3. Get Insights",
    description:
      "Receive AI-driven insights and recommendations to optimize your financial health",
  },
];

export const testimonialsData = [
  {
    name: "Sarah Johnson",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/75.jpg",
    quote:
      "Welth has transformed how I manage my business finances. The AI insights have helped me identify cost-saving opportunities I never knew existed.",
  },
  {
    name: "Michael Chen",
    role: "Freelancer",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    quote:
      "Tracking my expenses and budgets has never been easier. I now have full control over my finances without manual work.",
  },
  {
    name: "Emily Rodriguez",
    role: "Financial Advisor",
    image: "https://randomuser.me/api/portraits/women/74.jpg",
    quote:
      "I recommend Welth to all my clients. The multi-currency support and detailed analytics make it perfect for international investors.",
  },
];
