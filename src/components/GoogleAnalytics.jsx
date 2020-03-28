import React from 'react';
import { withRouter } from 'react-router-dom';

const GA_TRACKING_ID = 'UA-129154812-1';

class GoogleAnalytics extends React.Component {
    componentWillUpdate ({ location, history }) {
        const gtag = window.gtag;

        if (location.pathname === this.props.location.pathname) {
            return;
        }

        if (history.action === 'PUSH' &&
            typeof(gtag) === 'function') {
            gtag('config', GA_TRACKING_ID, {
                'page_title': document.title,
                'page_location': window.location.href,
                'page_path': location.pathname
            });
        }
    }

    render () {
        return null;
    }
}

export default withRouter(GoogleAnalytics);
