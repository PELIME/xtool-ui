const defaultTheme={
    header:{
        backgroud:'black',
    },
    color:'white',
    backgroudColor:'black',
    font:''
}
var theme={
    getTheme(){
        var th=localStorage.getItem('XtoolTheme');
        if(th){
            return JSON.parse(th)
        }
        else{
            return defaultTheme;
        }
    },
    setTheme(th){
        if(th){
            localStorage.setItem('XtoolTheme',JSON.stringify(th));
        }
    }
}
module.exports=theme