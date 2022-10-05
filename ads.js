class Table extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         componentes: [
            { id: 1, disciplina: 'Redes de Computadores', carga: 30, periodo: 'Noturno' },
            { id: 2, disciplina: 'Segurança da Informação', carga: 45, periodo: 'Noturno' },
            { id: 3, disciplina: 'Qualidade e Teste de Software', carga: 45, periodo: 'Noturno' },
            { id: 4, disciplina: 'Modelagem de Sistemas', carga: 60, periodo: 'Noturno' }
         ]
      }
   }

    renderTableHeader() {
      let header = Object.keys(this.state.componentes[0]).splice(1,3);      
      console.log(header);
      return header.map((key, index) => {
         return <th key={index}>{key.toUpperCase()}</th>
      })
   }

   renderTableData() {
      return this.state.componentes.map((grade, index) => {
         const { id, disciplina, carga, periodo } = grade 
         return (
            <tr key={id}>              
               <td>{disciplina}</td>
               <td>{carga}</td>
               <td>{periodo}</td>
            </tr>
         )
      })
   }


   render() {
      return (
         <div>
            <h2 id='titulo'>Grade curricular</h2>
            <table id='grade'>
               <tbody>
                  <tr>{this.renderTableHeader()}</tr>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}

ReactDOM.render(<Table />, document.getElementById('mydiv'))