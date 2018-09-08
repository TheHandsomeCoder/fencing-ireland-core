import { AppBar, Button, Grid, IconButton, Paper, TextField, Theme, Toolbar, Typography, WithStyles } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { WithWidthProps } from "@material-ui/core/withWidth";
import MenuIcon from '@material-ui/icons/Menu';
import React from "react";
import compose from 'recompose/compose';

//#region Styles
const styles = (theme: Theme) => createStyles({
    buttonContainer: {
        flexGrow: 1,
        'margin-top': '16px'
    },
    checkoutButton: {
        [theme.breakpoints.down("xs")]: {
            width: '100%'
        }
    },
    checkoutButtonContainer: {
        [theme.breakpoints.down("xs")]: {
            order: 1
        }
    },
    paper: {
        [theme.breakpoints.up("sm")]: {
            'margin': '0 auto',
            'max-width': '640px',
            'padding': '32px',
            'position': 'relative',
            'top': '100px',
        },
        [theme.breakpoints.down("xs")]: {
            "margin": 0,
            "min-height": "100%",
            "padding": " 48px 16px 16px",
            'top': 0,
        }
    },
    spacer: {
        marginTop: "32px",
        marginBottom: "16px",
        borderBottom: "1px solid rgb(219, 219, 219)"
    },
    textField: {
        'width': '100%'
    },
    flex: {
        flexGrow: 1,
    },
    wrapper: {
        height: '100%'
    },

});
//#endregion

interface Props extends WithStyles<typeof styles>, WithWidthProps { 
    logout: () => void;
}

class Checkout extends React.Component<Props> {
    public render() {

        const { classes } = this.props;

        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Membership
                        </Typography>
                        <Button onClick={this.props.logout} color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
                <div>
                    <Paper elevation={14} className={classes.paper} >
                        <Typography variant="display1" gutterBottom={true} align="center" >
                            Checkout
                    </Typography>
                        <TextField id="fistName" label="First Name" className={classes.textField} margin="normal" />
                        <TextField id="lastName" label="Last Name" className={classes.textField} margin="normal" />
                        <TextField id="company" label="Company" className={classes.textField} margin="normal" />
                        <Grid container={true} justify="center" className={classes.buttonContainer} >
                            <Grid container={true} item={true} xs={12} sm={6} justify="center" className={classes.checkoutButtonContainer}>
                                <Button variant="contained" color="primary" size="large" className={classes.checkoutButton}> Checkout with Stripe </Button>
                            </Grid >
                        </Grid>
                    </Paper>
                </div>
            </div>
        )
    };
}

export default compose(withStyles(styles))(Checkout);