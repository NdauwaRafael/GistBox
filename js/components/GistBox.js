/**
 * Created by Raphael Karanja on 21/11/2018.
 */
var GistBox = React.createClass({
    getInitialState: function () {
        return {
            gists: [
                {
                    username: 'Raphael Karanja',
                    url: 'https://github.com/NdauwaRafael',
                    id: 5
                }
            ]
        }
    },

    render: function () {
        let newGist = function (gist) {
            return <Gist username={gist.username} url={gist.url} />
        };
        return (
            <div>
                <h1>GistBox</h1>
                {this.state.gists.map(newGist)}
            </div>
        );
    }
});

React.render(<GistBox/>, document.querySelector("#app"));