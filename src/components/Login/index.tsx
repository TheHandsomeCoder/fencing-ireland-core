import { Button, Grid, Paper, TextField, Theme, Typography, WithStyles } from "@material-ui/core";
import createStyles from "@material-ui/core/styles/createStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import * as React from "react";

const styles = (theme: Theme) => createStyles({
    buttonContainer: {
        flexGrow: 1,
        'margin-top': '48px'
    },
    loginButtonContainer: {
        [theme.breakpoints.down("xs")]: {
            order:1
        }
    },
    paper: {
        [theme.breakpoints.up("sm")]: {
            'margin': '0 auto',
            'max-width': '640px',
            'padding': '48px 48px 32px',
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
    textField: {
        'width': '100%'
    },
    wrapper: {
        height: '100%'
    },
});

interface Props extends WithStyles<typeof styles> { }

class Login extends React.Component<Props> {
    public render() {
        const { classes } = this.props;
        return (
            <Paper elevation={14} className={classes.paper} >
                <Typography variant="display1" gutterBottom={true} align="center" >
                    Fencing Ireland Membership
            </Typography>
                <TextField id="email" label="Email" className={classes.textField} margin="normal" />
                <TextField id="password" label="Password" className={classes.textField} margin="normal" type="password" />
                <Grid container={true} justify="space-between" className={classes.buttonContainer} >
                    <Grid item={true} xs={12} className={classes.loginButtonContainer}>
                        <Button variant="flat" > Forgot Password </Button>
                    </Grid >
                    <Grid item={true} xs={12}>
                        <Button variant="contained" color="primary" > Login </Button>
                    </Grid >
                </Grid>
            </Paper>
        )
    };
}

export default withStyles(styles)(Login);