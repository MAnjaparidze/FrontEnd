import React from 'react';

export default class Search extends React.Component {

    render() {
        return (
            <div className="input">
                <form action="" method="post">
                    <input type="text" placeholder="Search Text"
                        type="text"
                        placeholder="Search Text"
                        onChange={(e) => {
                            this.props.onSearchHandler(e)
                        }}
                    />
                    <button>OK</button>
                </form>
            </div>
        );
    }
};