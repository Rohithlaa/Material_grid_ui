import { AppBar, Toolbar, Typography } from "@material-ui/core";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import { makeStyles, createStyles } from "@material-ui/core";

const useStyles = makeStyles( () =>  
    createStyles ({
        headerstyles: {
            display: "flex",
            justifyContent: "space-between",
        },
        color:{
            backgroundColor: "Blue"
        },
        hover:{
            cursor: "Pointer"
        }
        
    })
)

const Header = ( ) => {
    const style_header = useStyles( )
     return (
        <AppBar position="static" className={style_header.color}>
            <Toolbar className={style_header.headerstyles}>
                <Typography >Rohith </Typography>
                <AccountCircleSharpIcon  className={style_header.hover}/>
            </Toolbar>
        </AppBar>

     )
}

export default Header;