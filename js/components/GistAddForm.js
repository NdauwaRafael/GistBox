/**
 * Created by Raphael Karanja on 22/11/2018.
 */
var GistAddForm = React.createClass({

    render: function () {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Type a GitHub username...."/>
                    <button>Fetch Latest Gist</button>
                </form>
            </div>
        )
    }
});