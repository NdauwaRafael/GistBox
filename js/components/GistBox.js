/**
 * Created by Raphael Karanja on 21/11/2018.
 */
var GistBox = React.createClass({
    addGist: function (username) {
        let url = `https://api.github.com/users/${username}/gists`;
        $.get(url,  (result)=> {
            let username = result[0].owner.login;
            let url = result[0].html_url

            let gists = this.state.gists.concat({username, url});
            this.setState({gists})
        })
    },
    getInitialState: function () {
        return {
            gists: []
        }
    },

    render: function () {
        let newGist = function (gist) {
            return <Gist username={gist.username} url={gist.url} />
        };
        return (
            <div>
                <h1>GistBox</h1>
                <GistAddForm onAdd={this.addGist}/>
                {this.state.gists.map(newGist)}
            </div>
        );
    }
});

React.render(<GistBox/>, document.querySelector("#app"));