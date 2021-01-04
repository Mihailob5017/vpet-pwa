import React from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './style'
const ListComponent = () => {

    const classes = useStyles();

    const transactions = [
        { id: 1, type: 'Income', category: "Salary", amount: 150, date: "Wed Dec 16" },
        { id: 2, type: 'Expense', category: "Pets", amount: 10, date: "Monday Nov 12" },
        { id: 3, type: 'Income', category: "Business", amount: 50, date: "Friday Dec 18" }
    ];

    return (
        <List dense={false} className={classes.list}>
            {
                transactions.map(el =>
                    <Slide direction='down' in mountOnEnter unmountOnExit key={el.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={el.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}><MoneyOff /></Avatar>
                            </ListItemAvatar>

                            <ListItemText primary={el.category} secondary={`$${el.amount} - ${el.date} `} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='delete' onClick=''><Delete /></IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                )
            }
        </List>
    )
}

export default ListComponent
