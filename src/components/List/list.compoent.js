import React, { useContext } from 'react'
import { List, ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, IconButton, Slide } from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons';
import useStyles from './style'
import { ExpenseTrackerContext } from '../../context/context'




const ListComponent = () => {
    const { deleteTransaction,state } = useContext(ExpenseTrackerContext)
    const classes = useStyles();
    
   


    return (
        <List dense={false} className={classes.list}>
            {
                state.map(el =>
                    <Slide direction='down' in mountOnEnter unmountOnExit key={el.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={el.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}><MoneyOff /></Avatar>
                            </ListItemAvatar>

                            <ListItemText primary={el.category} secondary={`$${el.amount} - ${el.date} `} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label='delete' onClick={()=>deleteTransaction(el.id)}><Delete /></IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                )
            }
        </List>
    )
}

export default ListComponent
