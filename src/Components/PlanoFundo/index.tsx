interface PlanoFundoProps{
  backgroundImage: string;  
  children: JSX.Element,
}
const PlanoFundo: React.FC<PlanoFundoProps> = ({backgroundImage,children}) =>(
<div style={{"backgroundImage":`url(${backgroundImage})`}}>
  {children}
</div>

)
export default PlanoFundo