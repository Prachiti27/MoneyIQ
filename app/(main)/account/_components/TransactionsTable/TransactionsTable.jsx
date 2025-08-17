"use client"
import { bulkDeleteTransactions } from '@/actions/account'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { categoryColors } from '@/data/categories'
import useFetch from '@/hooks/use-fetch'
import { format } from 'date-fns'
import { ChevronDown, ChevronUp, Clock, MoreHorizontal, RefreshCw, Search, Trash, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'
import { BarLoader } from 'react-spinners'
import { toast } from 'sonner'

const RECURRING_INTERVALS = {
    DAILY: "Daily",
    WEEKLY: "Weekly",
    MONTHLY: "Monthly",
    YEARLY: "Yearly"
}

const ITEMS_PER_PAGE = 10 // set your desired page size

const TransactionsTable = ({ transaction }) => {
    const router = useRouter()

    const [selectedIds, setSelectedIds] = useState([])
    const [sortConfig, setSortConfig] = useState({ field: "date", direction: "desc" })
    const [searchTerm, setSearchTerm] = useState("")
    const [typeFilter, setTypeFilter] = useState("")
    const [recurringFilter, setRecurringFilter] = useState("")
    const [currentPage, setCurrentPage] = useState(1)

    const { loading: deleteLoading, fn: deleteFn, data: deleted } = useFetch(bulkDeleteTransactions)

    // Filter and sort
    const filteredAndSortedTransactions = useMemo(() => {
        let result = [...transaction]

        if (searchTerm) {
            const searchLower = searchTerm.toLowerCase()
            result = result.filter((t) => t.description?.toLowerCase().includes(searchLower))
        }

        if (recurringFilter) {
            result = result.filter((t) => recurringFilter === "recurring" ? t.isRecurring : !t.isRecurring)
        }

        if (typeFilter) {
            result = result.filter((t) => t.type === typeFilter)
        }

        result.sort((a, b) => {
            let cmp = 0
            switch (sortConfig.field) {
                case "date":
                    cmp = new Date(a.date) - new Date(b.date)
                    break
                case "amount":
                    cmp = a.amount - b.amount
                    break
                case "category":
                    cmp = a.category.localeCompare(b.category)
                    break
                default: cmp = 0
            }
            return sortConfig.direction === "asc" ? cmp : -cmp
        })

        return result
    }, [transaction, searchTerm, typeFilter, recurringFilter, sortConfig])

    // Pagination
    const totalPages = Math.ceil(filteredAndSortedTransactions.length / ITEMS_PER_PAGE)
    const paginatedTransactions = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
        return filteredAndSortedTransactions.slice(startIndex, startIndex + ITEMS_PER_PAGE)
    }, [filteredAndSortedTransactions, currentPage])

    // Sort handler
    const handleSort = (field) => {
        setSortConfig(current => ({
            field,
            direction: current.field === field && current.direction === "asc" ? "desc" : "asc"
        }))
    }

    // Selection handlers
    const handleSelect = (id) => {
        setSelectedIds(current =>
            current.includes(id) ? current.filter(i => i !== id) : [...current, id]
        )
    }

    const handleSelectAll = () => {
        const currentPageIds = paginatedTransactions.map(t => t.id)
        const allSelected = currentPageIds.every(id => selectedIds.includes(id))
        setSelectedIds(current =>
            allSelected
                ? current.filter(id => !currentPageIds.includes(id))
                : [...current, ...currentPageIds.filter(id => !current.includes(id))]
        )
    }

    // Bulk delete
    const handleBulkDelete = async () => {
        if (!window.confirm(`Are you sure you want to delete ${selectedIds.length} transactions?`)) return

        try {
            await deleteFn(selectedIds)
            toast.success("Transactions deleted successfully")
            setSelectedIds([])
        } catch (error) {
            toast.error("Failed to delete transactions")
        }
    }

    // Clear filters
    const handleClearFilters = () => {
        setSearchTerm("")
        setTypeFilter("")
        setRecurringFilter("")
        setSelectedIds([])
        setCurrentPage(1)
    }

    // Page change
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
        setSelectedIds([])
    }

    return (
        <div>
            {/* Loader */}
            {deleteLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
                    <div className="p-4 rounded-lg bg-white shadow-md flex flex-col items-center gap-2">
                        <BarLoader width={200} color="#111827" />
                        <span className="text-sm text-gray-700">Deleting transactions...</span>
                    </div>
                </div>
            )}

            {/* Filters */}
            <div className='space-y-4'>
                <div className='flex flex-col sm:flex-row gap-4'>
                    <div className='relative flex-1'>
                        <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                        <Input
                            placeholder="Search transactions..."
                            value={searchTerm}
                            onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1) }}
                            className='pl-8'
                        />
                    </div>
                    <div className='flex gap-2'>
                        <Select value={typeFilter} onValueChange={(value) => { setTypeFilter(value); setCurrentPage(1) }}>
                            <SelectTrigger><SelectValue placeholder="All Types" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="INCOME">Income</SelectItem>
                                <SelectItem value="EXPENSE">Expense</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select value={recurringFilter} onValueChange={(value) => { setRecurringFilter(value); setCurrentPage(1) }}>
                            <SelectTrigger className="w-[140px]"><SelectValue placeholder="All Transactions" /></SelectTrigger>
                            <SelectContent>
                                <SelectItem value="recurring">Recurring Only</SelectItem>
                                <SelectItem value="non-recurring">Non-recurring Only</SelectItem>
                            </SelectContent>
                        </Select>

                        {selectedIds.length > 0 && (
                            <Button variant="destructive" className="text-white" size="sm" onClick={handleBulkDelete}>
                                <Trash className='h-4 w-4 mr-2' /> Delete Selected ({selectedIds.length})
                            </Button>
                        )}

                        {(searchTerm || typeFilter || recurringFilter) && (
                            <Button variant="outline" size="icon" onClick={handleClearFilters} title="Clear Filters">
                                <X className='h-4 w-5' />
                            </Button>
                        )}
                    </div>
                </div>

                {/* Table */}
                <div className='rounded-md border'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">
                                    <Checkbox
                                        onCheckedChange={handleSelectAll}
                                        checked={paginatedTransactions.length > 0 && paginatedTransactions.every(t => selectedIds.includes(t.id))}
                                    />
                                </TableHead>
                                <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
                                    <div className='flex items-center'>Date {sortConfig.field === "date" && (sortConfig.direction === "asc" ? <ChevronUp className='ml-1 h-4 w-4' /> : <ChevronDown className='ml-1 h-4 w-4' />)}</div>
                                </TableHead>
                                <TableHead>Description</TableHead>
                                <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
                                    <div className='flex items-center'>Category {sortConfig.field === "category" && (sortConfig.direction === "asc" ? <ChevronUp className='ml-1 h-4 w-4' /> : <ChevronDown className='ml-1 h-4 w-4' />)}</div>
                                </TableHead>
                                <TableHead className="cursor-pointer" onClick={() => handleSort("amount")}>
                                    <div className='flex items-center justify-end'>Amount {sortConfig.field === "amount" && (sortConfig.direction === "asc" ? <ChevronUp className='ml-1 h-4 w-4' /> : <ChevronDown className='ml-1 h-4 w-4' />)}</div>
                                </TableHead>
                                <TableHead>Recurring</TableHead>
                                <TableHead className="w-[50px]" />
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {paginatedTransactions.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={7} className="text-center text-muted-foreground">No transactions Found</TableCell>
                                </TableRow>
                            ) : paginatedTransactions.map(t => (
                                <TableRow key={t.id}>
                                    <TableCell><Checkbox checked={selectedIds.includes(t.id)} onCheckedChange={() => handleSelect(t.id)} /></TableCell>
                                    <TableCell>{format(new Date(t.date), "PP")}</TableCell>
                                    <TableCell>{t.description}</TableCell>
                                    <TableCell className="capitalize">
                                        <span className='px-2 py-1 rounded text-white text-sm' style={{ background: categoryColors[t.category] }}>{t.category}</span>
                                    </TableCell>
                                    <TableCell className="text-right" style={{ color: t.type === 'EXPENSE' ? 'red' : 'green' }}>
                                        {t.type === 'EXPENSE' ? "-" : "+"}${t.amount.toFixed(2)}
                                    </TableCell>
                                    <TableCell>
                                        {t.isRecurring ? (
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <Badge variant="outline" className="gap-1 bg-gray-100 text-gray-700 hover:bg-gray-200">
                                                        <RefreshCw className='h-3 w-3' />{RECURRING_INTERVALS[t.recurringInterval]}
                                                    </Badge>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <div className='text-sm'>
                                                        <div className='font-medium'>Next Date:</div>
                                                        <div>{format(new Date(t.nextRecurringDate), "PPP")}</div>
                                                    </div>
                                                </TooltipContent>
                                            </Tooltip>
                                        ) : (
                                            <Badge variant="outline" className="gap-1"><Clock className='h-3 w-3' />One-time</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0"><MoreHorizontal className='h-4 w-4' /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem onClick={() => router.push(`/transaction/create?edit=${t.id}`)}>Edit</DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem className="text-destructive" onClick={async () => await deleteFn([t.id])}>Delete</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-2">
                        <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><ChevronLeft className="h-4 w-4" /></Button>
                        <span className="text-sm">Page {currentPage} of {totalPages}</span>
                        <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}><ChevronRight className="h-4 w-4" /></Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default TransactionsTable
