
---

# MoneyIQ 💰

**MoneyIQ** is an **AI-powered finance manager** built with **Next.js (JavaScript)**, **Prisma**, **Clerk**, **Arcjet**, and **Inngest**. It helps users track budgets, log transactions, receive reminders, and get monthly AI-driven financial insights.

---

## 🚀 Features

* **Authentication** with [Clerk](https://clerk.com/) for secure sign-in/sign-up
* **Budget Tracking**: Add, update, monitor budgets category-wise
* **Income & Expense Management**: Log transactions with categories
* **Dashboard**: Visual overview of finances
* **AI Insights**: Monthly financial analysis and suggestions
* **Reminders**: Notifications for budgets and payments
* **Security & Rate Limiting**: Bot protection with [Arcjet](https://arcjet.io/)
* **Serverless Workflows**: Background automation using [Inngest](https://www.inngest.com/)

---

## 🛠 Tech Stack

* **Frontend**: Next.js 13+ (JavaScript, App Router)
* **Backend & Database**: Prisma ORM + Supabase
* **Authentication**: Clerk
* **Serverless Workflows**: Inngest
* **Security / Bot Protection**: Arcjet
* **AI Features**: Gemini API

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/moneyiq.git
cd moneyiq
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Set up environment variables

Create a `.env` file in the root and configure:

```env
DATABASE_URL=<your_supabase_database_url>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
NEXT_PUBLIC_CLERK_FRONTEND_API=<your_clerk_frontend_api>
CLERK_API_KEY=<your_clerk_api_key>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=<your_sign_in_url>
NEXT_PUBLIC_CLERK_SIGN_UP_URL=<your_sign_up_url>
INNGEST_API_KEY=<your_inngest_api_key>
ARCJET_KEY=<your_arcjet_api_key>
GEMINI_API_KEY=<your_gemini_api_key>
```

### 4. Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser

---

## 🗂 Project Structure

```
/app                # Next.js App Router pages, layouts, API routes
/actions            # Server-side actions, API calls, Inngest triggers, email sending
/components         # Reusable React components
/data               # Static data, enums, constants
/emails             # Email templates (React Email)
/hooks              # Custom React hooks
/lib                # Utility functions, API clients (Clerk, Arcjet, Inngest, Prisma)
/node_modules       # Node dependencies
/prisma             # Prisma schema, migrations, seed scripts
/public             # Static assets: images, fonts, icons
/.env               # Environment variables
/.eslintrc.json     # ESLint configuration
/.gitignore         # Git ignore file
/components.json    # Components metadata (if used by Next.js or other tool)
/jsconfig.json      # JS/TS configuration
/middleware.js      # Next.js middleware (optional)
/next.config.mjs    # Next.js configuration
/package-lock.json  # NPM lock file
/package.json       # NPM project file
/postcss.config.mjs # PostCSS configuration
/README.md          # Project documentation
/tailwind.config.js # Tailwind CSS configuration

```

---

## 📈 How it Works

1. **Authentication**: Secure login/signup with Clerk
2. **Transactions & Budgets**: Add, edit, and categorize income/expenses
3. **Dashboard**: Overview of spending and budgets
4. **AI Insights**: Monthly financial analysis using Gemini API
5. **Reminders**: Alerts for budget thresholds and payments
6. **Bot Protection**: Arcjet ensures safe usage and prevents abuse
7. **Serverless Workflows**: Automated recurring transactions, monthly reports, and budget alerts using Inngest

---

## 🔗 Useful Links

* [Next.js Documentation](https://nextjs.org/docs)
* [Prisma Documentation](https://www.prisma.io/docs/)
* [Clerk Documentation](https://docs.clerk.com/)
* [Inngest Docs](https://docs.inngest.com/)
* [Arcjet Docs](https://docs.arcjet.io/)

---

## 🌟 Contributing

Contributions are welcome! Open issues or submit pull requests to improve MoneyIQ

---

## 📄 License

MIT License

---

Made with ❤️ by **Prachiti Kitey**

---

