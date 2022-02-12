

import './download.css';

const Download = () => {
    return (
        <section id='download'>
            <div className="container download">
                <h2>G&JMSOCIO MESSENGER DOWNLOAD</h2>
                <p className="u-text-small u-text-light">
                    our apps are available for download
                </p>
                <div className="download-icons">
                    <div className="download-icon">
                        <i className="fab fa-android"></i> <p>Android</p>
                    </div>
                    <div className="download-icon">
                        <i className="fab fa-apple"></i> <p>iOS</p>
                    </div>
                    <div className="download-icon">
                        <i className="fab fa-windows"></i> <p>Windows</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Download;