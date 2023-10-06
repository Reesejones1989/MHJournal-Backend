const React = require('react');
const border = {
    border: "1px solid black",
    textAlign: "center"
}
const center = {
    textAlign:"center"
}


class Index extends React.Component {
    render(){
        const journals = this.props.journals;
       
        return (
            <div style={center}>
               <h1> INDEX</h1>
               <ul>
               {journals.map((journal,i) => {
                  return <li style={border} key={i}>
                    <div>
                      <a href={`/journals/${journal.id}`}>Title: {journal.title} </a>
                      <p>Entry: {journal.entry} 
                      ID: {journal.id}
                      </p>
                       { journal.shipIsBroken? <span> Ship is Broken</span>: <span>  Ship is Not Broken </span>}  

                 <form 
                
                  action={`/journals/${journal._id}?_method=DELETE`} method="POST"><input type="submit" value="DELETE"/>
                  </form>  
                 <a href={`/journals/${journal._id}/edit`}>Edit This Journal</a>  <br/>  <br/>
                 </div>
                  </li>
              })} 
              
                </ul>
               <a href='/journals/new'>Create New Journal</a>
            </div>
        )
    }
}

module.exports = Index;