
import { makeStyles } from '@mui/styles';
import { InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles((theme) => ({
    search: {
        borderRadius: 5,
        backgroundColor: '#f39c12',
        marginLeft: 500,
        marginTop: -38,
        width: '18%',
        display: 'flex',
        color: 'black'
      },
      searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        color: 'black'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        visibility: 'visible',
      },
}))

const SearchBar = () => {
    const classes = useStyles();
    return (
        <div className={classes.search}>
            <InputBase
              placeholder=" Search MasterAPI" 
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
          </div>
    )
}

export default SearchBar;