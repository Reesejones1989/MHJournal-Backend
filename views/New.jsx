const React = require('react')

class New extends React.Component {
    render(){
        return (
            <div>
                <h1>Your Journal Entry</h1><br/>

                <form action="/logs" method="POST">
                    Title: <input type='text' name='title'/><br/>
                    journalEntry: <input type='textarea' name='journalEntry'/><br/>
                    date: <input type='textarea' name='date'/><br/>
                    Was Today A Good Day (Check For Yes) <input type='checkbox' name='wasTodayAGoodDay'/><br/>


                    <input type="submit" />

                </form>

            </div>
        )
    }
}

module.exports = New;