import { getAccountWithTransactions } from "@/actions/account"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import TransactionsTable from "../_components/TransactionsTable/TransactionsTable"
import { BarLoader } from "react-spinners"
import { AccountChart } from "../_components/AccountChart"

const AccountPage = async ({ params }) => {
    const accountData = await getAccountWithTransactions(params.id)

    if (!accountData) {
        notFound()
    }

    const { transactions, ...account } = accountData

    return (
        <div className="px-8 py-6 space-y-8">
            {/* Account Header */}
            <div className="flex items-end justify-between border-b bg-white shadow-sm rounded-lg p-6">
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold capitalize text-gray-900">
                        {account.name}
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        {account.type.charAt(0) + account.type.slice(1).toLowerCase()} Account
                    </p>
                </div>
                <div className="text-right">
                    <div className="text-3xl sm:text-4xl font-bold text-gray-900">
                        ${parseFloat(account.balance).toFixed(2)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {account._count.transactions} Transactions
                    </p>
                </div>
            </div>

            {/* Chart section */}

            <Suspense fallback={<BarLoader className="mt-2" width={"100%"} color="#111827" />}>
                <AccountChart transactions={transactions} />
            </Suspense>

            {/* Transactions Table */}
            <div className="bg-white shadow-sm rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    Recent Transactions
                </h2>
                <Suspense fallback={<BarLoader className="mt-2" width={"100%"} color="#111827" />}>
                    <TransactionsTable transaction={transactions} />
                </Suspense>
            </div>
        </div>
    )
}

export default AccountPage
