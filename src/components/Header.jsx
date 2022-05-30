
import { makeStyles } from "@mui/styles";
// import { AppBar, Toolbar } from "@mui/material";

const useStyles = makeStyles({
    logo: {
        width: 200,
        padding: 5
    },
    navbar: {
        background: ['#000', '!important'],
        position: ['static', '!important'],
        height: [50, '!important']
    }
})

const Header = () => {
    const classes = useStyles();
    // const logo = 'https://lh3.googleusercontent.com/yqUrETs4s9sRH4elcQ82iipgkO3ZtLEEMv_KqqGjhVkMCNB4HWhF_L1I_9NVf5mPHGVvew=s170';
    const logo = require ('./mainlogo.jpg'); 
    return (
        <>
        <img src={logo} alt="logo" className={classes.logo} />    
            {/* <AppBar className={classes.navbar}>
                <Toolbar>
                </Toolbar>
            </AppBar> */}
        </>
    )
}

export default Header;