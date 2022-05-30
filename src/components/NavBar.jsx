import { navData } from '../constants/data';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
//import { color } from '@mui/system';

const useStyle = makeStyles({
    component: {
        display: 'flex',
        margin: '0px 80px 0 40px',
        padding: 0
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px',
        justifyContent: 'space-between'
    },
    text: {
        fontSize: 14,
        fontWeight: 600,
        color: '#a04000'
    }

})


const NavBar = () => {
    const classes = useStyle();
    return (    
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container}>
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;