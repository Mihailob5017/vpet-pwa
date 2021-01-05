import React, { useState, useContext, useEffect } from 'react'
import { TextField, Typography, Grid, Button, FormControl, Select, MenuItem, InputLabel } from '@material-ui/core'
import useStyles from './style'
import { ExpenseTrackerContext } from '../../context/context'
import { v4 as uuidv4 } from 'uuid'
import { incomeCategories, expenseCategories } from '../../constants/categories'
import { formatDate } from '../../helpers/formatDate'
import { useSpeechContext } from '@speechly/react-client'
const FormComponent = () => {
    const { addTransaction } = useContext(ExpenseTrackerContext)
    const classes = useStyles()
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('Income')
    const [date, setDate] = useState(formatDate(new Date()))

    const addCaller = () => {
        if (Number.isNaN(amount) || !date.includes('-'))
            return;
        const transaction = {
            id: uuidv4(),
            amount: Number(amount),
            category, type, date
        }


        addTransaction(transaction)
        setAmount(0)
        setCategory('')
        setType('Income')
        setDate(formatDate(new Date()))
    }

    const { segment } = useSpeechContext()
    const selectedCategories = type === 'Income' ? incomeCategories : expenseCategories

    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === 'add_expense')
                setType('Expense')
            else if (segment.intent.intent === 'add_income')
                setType('Income')
            else if (segment.isFinal && segment.intent.intent === 'create_transaction')
                return addCaller()
            else if (segment.isFinal && segment.intent.intent === 'cancel_transaction') {
                setAmount(0)
                setCategory('')
                setType('Income')
                setDate(formatDate(new Date()))
            }

            segment.entities.forEach(e => {
                const category = `${e.value.charAt(0)}${e.value.slice(1,).toLowerCase()}`
                switch (e.type) {
                    case 'amount':
                        setAmount(e.value)
                        break;
                    case 'category':
                        if (incomeCategories.map(IC => IC.type.includes(category))) {
                            setType('Income')
                            setCategory(category)
                        } else if (expenseCategories.map(IC => IC.type.includes(category))) {
                            setType('Expense')
                            setCategory(category)
                        }

                        break;
                    case 'date':
                        setDate(e.value)

                    default:
                        break;
                }
            })

            if (segment.isFinal && amount && category && type && date)
                addCaller()
        }
    }, [segment])


    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align='center' variant='subtitle2' gutterBottom>
                    {segment && <>{segment.words.map(w => w.value).join(' ')}</>}
                </Typography>
            </Grid>

            <Grid item xs={6}>

                {/* Plus or minus */}
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={e => setType(e.target.value)} >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            {/* Type of expense */}
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={category} onChange={e => setCategory(e.target.value)}>
                        {
                            selectedCategories.map((category) => <MenuItem value={category.type}>{category.type}</MenuItem>)
                        }
                    </Select>
                </FormControl>
            </Grid>

            {/* Mony number */}
            <Grid item xs={6}>
                <TextField value={amount} onChange={e => setAmount(e.target.value)} type="number" label="Amount" fullWidth />
            </Grid>

            {/* Date */}
            <Grid item xs={6}>
                <TextField value={date} onChange={e => setDate(formatDate(e.target.value))} type="date" label="Date" fullWidth />
            </Grid>

            <Button onClick={addCaller} variant="outlined" color="primary" className={classes.button} fullWidth>Create</Button>



        </Grid>
    )
}

export default FormComponent
