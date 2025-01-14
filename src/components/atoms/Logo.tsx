const Logo = ({url, logo}:{url:string,logo:string}) => {
    return ( 
    <>
        <img className="w-12 h-12" src={url} alt={logo} />
    </> 
    );
}
 
export default Logo;