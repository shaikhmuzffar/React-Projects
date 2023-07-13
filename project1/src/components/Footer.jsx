function Footer(){
    const style={
        textAlign:'center',
        fontFamily: "'Agdasima', sans-serif",
        padding:"5px 10%",
         backgroundColor:"rgba(0, 0, 0,.9)",
         color:'#fff',
         fontSize:"14px"
        }
    return(
        <footer>
        <p style={style}>
            <span>&copy;Animissta. all rights reserved  </span>
             | 
            <span>  designed by shaikh muzffar</span>
        </p>
      </footer>
    )
}

    export default Footer;