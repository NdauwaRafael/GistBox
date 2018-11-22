/**
 * Created by Raphael Karanja on 22/11/2018.
 */
var GistAddForm = React.createClass({
    getInitialState: function () {
        return {
            text: ''
        }
    },
    onChange: function (e) {
        let text = e.target.value;
        this.setState({text});
    },
    addGist: function (e) {
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({text: ''});
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.addGist}>
                    <input type="text" value={this.state.text} onChange={this.onChange} placeholder="Type a GitHub username...."/>
                    <button>Fetch Latest Gist</button>
                </form>
            </div>
        )
    }
});