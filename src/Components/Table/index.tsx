import './style.css'
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
        <table className="table">
  {/* 1º coluna */}
          <td  >
          <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.a1}.png`} className="img"  onClick={(e)=>(alert('teste'))}/>  </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.a2}.png`} className="img"/> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.a3}.png`} className="img"/> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.a4}.png`} className="img"/> </tr>
           
          </td>
  {/* 2º coluna */}
          <td>
            <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.b1}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.b2}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.b3}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.b4}.png`} className="img" /> </tr>
           
          </td>
  {/* 3º coluna */}
          <td>
           <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.c1}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.c2}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.c3}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.c4}.png`} className="img" /> </tr>
            
          </td>
  {/* 4º coluna */}
          <td>
             <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.d1}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.d2}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.d3}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.d4}.png`} className="img" /> </tr>
           
          </td>
  {/* 5º coluna */}
          <td>
            <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.e1}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.e2}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.e3}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.e4}.png`} className="img" /> </tr>
          
          </td>
  {/* 6º coluna */}
          <td>
            <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.f1}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.f2}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.f3}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.f4}.png`} className="img" /> </tr>
           
          </td>
  {/* 1º coluna */}
          <td>
            <tr className="linha">vago </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.g1}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.g2}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.g3}.png`} className="img" /> </tr>
            <tr className="linha"><input type="image" src={`img/${tabela.g4}.png`} className="img" /> </tr>
           
          </td>
        </table>
      </div>
    )
}

export default Table