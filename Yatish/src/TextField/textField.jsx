import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme=createTheme({
    components:{
        MuiFormLabel:{
            styleOverrides:{
                asterisk: {
                    color: '#db3131',
                    // '&$error': {
                    //   color: '#db3131'
                    // },
                  }
            }
                
              }
        
      
    }
});


export default function TextFieldComponent(props){
return(
    <ThemeProvider theme={theme}>

        <TextField 
            
            onChange={(e)=>{
                props.handleChangeField(e,props.name);
            }}
            id={props.id} 
            label={props.label} 
            variant={props.variant} 
            value={props.value} 
            name={props.name}
            required
            multiline={props.multiline}
            style={{...props.style,margin:"10px"}}
            />      
    </ThemeProvider>
    
);
}

// handleChange(func,delay,name, e)(props.required)