import { Button, Grid, Paper, TextField, Theme, Typography, WithStyles } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import { WithWidthProps } from "@material-ui/core/withWidth";
import * as React from "react";
import { Link } from "react-router-dom";
import compose from 'recompose/compose';

const styles = (theme: Theme) => createStyles({
    buttonContainer: {
        flexGrow: 1,
        'margin-top': '16px'
    },
    forgotPasswordContainer: {
        [theme.breakpoints.down("xs")]: {
            'justify-content': 'center',
            order: 2,
            'padding-top': '8px'
        }
    },
    signUpButton: {
        [theme.breakpoints.down("xs")]: {
            width: '100%'
        }
    },
    signUpButtonContainer: {
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
    wrapper: {
        height: '100%'
    },
});

interface Props extends WithStyles<typeof styles>, WithWidthProps { }

class SignUp extends React.Component<Props> {
    public render() {

        const { classes } = this.props;

        return (
            <Paper elevation={14} className={classes.paper} >
                <Typography variant="display1" gutterBottom={true} align="center" >
                    Hack Day Membership
            </Typography>
                <TextField id="email" label="Email" className={classes.textField} margin="normal" type="email" />
                <TextField id="fistName" label="First Name" className={classes.textField} margin="normal" />
                <TextField id="lastName" label="Last Name" className={classes.textField} margin="normal" />
                <TextField id="password" label="Password" className={classes.textField} margin="normal" type="password" />
                <Grid container={true} justify="center" className={classes.buttonContainer} >
                    <Grid container={true} item={true} xs={12} sm={6} justify="center" className={classes.signUpButtonContainer}>
                        <Button variant="contained" color="primary" size="large" className={classes.signUpButton}> SignUp </Button>
                    </Grid >
                </Grid>
                <div className={classes.spacer} />
                <Grid container={true} justify="center">
                    <Grid item={true} justify="center">
                        <span>
                            <span><Typography>
                                Already have an account? <Link to="/login">Login</Link>
                            </Typography></span>

                        </span>
                    </Grid>
                </Grid>
            </Paper>
        )
    };
}

export default compose(
    withStyles(styles)
)(SignUp);