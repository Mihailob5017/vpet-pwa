import { useContext } from 'react'
import { ExpenseTrackerContext } from '../context/context';
import { incomeCategories, expenseCategories, resetCategories } from '../constants/categories'

const useTransactions = (title) => {
    resetCategories();
    const { state } = useContext(ExpenseTrackerContext)

    const selectedCategories = state.filter(el => el.type === title);
    const total = selectedCategories.reduce((acc, curr) => acc += curr.amount, 0)
    const categories = title === 'Income' ? incomeCategories : expenseCategories

    console.log({ selectedCategories, total, categories })

    selectedCategories.forEach(element => {
        const singleCategory = categories.find(c => c.type === element.category)

        if (singleCategory) singleCategory.amount += element.amount
    });


    const filteredCategories = categories.filter(c => c.amount > 0)

    const chartData = {
        datasets: [{ data: filteredCategories.map(el => el.amount), backgroundColor: filteredCategories.map(el => el.color) }],
        labels: filteredCategories.map(el => el.type)
    }

    return { filteredCategories, total, chartData }
}




export default useTransactions;