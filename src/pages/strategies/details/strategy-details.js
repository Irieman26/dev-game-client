import React from 'react';

import './strategy-details.css';
import '../../../common.css';
import Toolbar from "../../../components/toolbar/Toolbar";

class StrategyDetails extends React.Component {
    render() {
        return (
            <div className="Page">
                <Toolbar history={this.props?.history}/>
                <div className="PageContent">
                    strategy details
                </div>
            </div>
        );
    }
}

export default StrategyDetails;
