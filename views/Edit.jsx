const React = require('react');

class Edit extends React.Component{
  render() {
    const journals = this.props.journals;
    return (<div>
        <h1>Journal Edit</h1>
          <form action={`/journals/${journals._id}?_method=PUT`} method="POST"> 


          Title: <input type="text" name="title" defaultValue={journals.title}/><br/>
          journal Entry: <input type="text" name="journalEntry"  defaultValue={journals.entry}/><br/>
          Was Today A Good Day? :
              {journals.wasTodayAGoodDay}? <input type="checkbox" name="wasTodayAGoodDay" defaultChecked />
          <br/>
          <input type="submit" value="Submit Changes"/>
      </form> 

      <a href='/journals'>Home </a>
      </div>)
  }
}

module.exports = Edit;