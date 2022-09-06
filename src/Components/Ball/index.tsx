interface BallProps{
  backgroundImage?: string;  
  onClick: () => void,
}
const Ball: React.FC<BallProps> = ({backgroundImage,onClick}) =>(
<div style={{ 
              "borderRadius":"28px", 
              "width":"25px","height":"25px",
              "marginLeft":"20px","marginRight":"10px",  
              "cursor":"pointer"}} 
     onClick={onClick}>
       <img src={backgroundImage} alt="" style={{"width":"25px","height":"25px"}} />  

</div>
)
export default Ball