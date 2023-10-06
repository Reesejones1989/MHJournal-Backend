const React = require('react')
const border = {
    border: "1px solid black",
    textAlign: "center"
}
const center = {
    textAlign:"center"
}

class Show extends React.Component {
   render () {
    const journals = this.props.journals
    console.log(journals + "Look HERE")
    return (
      <div>
       
        <h1>Title: {journals.title} </h1>
        
        <h2>Date: {journals.date} </h2>

         <h2>Journal Entry: {journals.journalEntry}</h2>

        <h4>{journals.wasTodayAGoodDay? `Today Was A Good Day` : `Today Wasn't A Good Day`} </h4>
        
        <h4>{journals.rateIt} </h4>
       

        <h3>
        <nav>
        <a href="/journals/">Back to Home</a>
        </nav>
        </h3>
      </div>

      
     );
    }
 }
 module.exports  = Show;