import './style.css'
import Ball from '../Ball/index'
import PlanoFundo from '../PlanoFundo/index'

interface ITable{
  a1?: String;
  a2?: String;
  a3?: String; 
  a4?: String;
  a5?: String;
  a6?: String; 
  a7?: String; 
  a8?: String; 

  b1?: String;
  b2?: String;
  b3?: String; 
  b4?: String;
  b5?: String;
  b6?: String; 
  b7?: String; 
  b8?: String; 

  c1?: String;
  c2?: String;
  c3?: String; 
  c4?: String;
  c5?: String;
  c6?: String;
  c7?: String; 
  c8?: String; 

  d1?: String;
  d2?: String;
  d3?: String; 
  d4?: String;
  d5?: String;
  d6?: String;
  d7?: String; 
  d8?: String; 
  
  e1?: String;
  e2?: String;
  e3?: String; 
  e4?: String;
  e5?: String;
  e6?: String;
  e7?: String; 
  e8?: String; 

  f1?: String;
  f2?: String;
  f3?: String; 
  f4?: String;
  f5?: String;
  f6?: String;
  f7?: String; 
  f8?: String; 

  g1?: String;
  g2?: String;
  g3?: String; 
  g4?: String;
  g5?: String;
  g6?: String;
  g7?: String; 
  g8?: String; 

}

function Table (tabela:ITable){
    return(
      <div className='container'>
        <PlanoFundo backgroundImage={'img/fundo.png'}>
          <>
            <table className="table">
      {/* 1º coluna */}
              <td  >
              <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/azul.png'} onClick={()=>{alert('teste')}}/></tr>
                <tr className="linha"><Ball backgroundImage={'img/azul.png'} onClick={()=>{alert('teste')}}/></tr>
                <tr className="linha"><Ball backgroundImage={'img/azul.png'} onClick={()=>{alert('teste')}}/></tr>
                <tr className="linha"><Ball backgroundImage={'img/azul.png'} onClick={()=>{alert('teste')}}/></tr>
              
              </td>
      {/* 2º coluna */}
              <td>
                <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/amarelo.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/amarelo.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/amarelo.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/amarelo.png'} onClick={()=>{alert('teste')}}/> </tr>
              
              </td>
      {/* 3º coluna */}
              <td>
              <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/verde.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/verde.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/verde.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/verde.png'} onClick={()=>{alert('teste')}}/> </tr>
                
              </td>
      {/* 4º coluna */}
              <td>
                <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/preto.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/preto.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/preto.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/preto.png'} onClick={()=>{alert('teste')}}/> </tr>                
              
              </td>
      {/* 5º coluna */}
              <td>
                <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/cinza.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/cinza.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/cinza.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/cinza.png'} onClick={()=>{alert('teste')}}/> </tr>  
              
              </td>
      {/* 6º coluna */}
              <td>
                <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>                
              
              </td>
      {/* 1º coluna */}
              <td>
                <tr className="linha">vago </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>
                <tr className="linha"><Ball backgroundImage={'img/branco.png'} onClick={()=>{alert('teste')}}/> </tr>                
              
              </td>
            </table>
            
          </>
        </PlanoFundo>
      </div>
    )
}

export default Table