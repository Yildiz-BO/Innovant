import Head from 'next/head';

import 'styles/globals.css';
import { Nav, RouteGuard ,Footer } from 'components';

export default App;

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Test PFE</title>

                {/* eslint-disable-next-line @next/next/no-css-tags */}
                <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
            </Head>
            <Nav />

            <div className="app-container bg-light">
                <div className="container pt-4 pb-4">
                    <RouteGuard>
                        <Component {...pageProps} />
                    </RouteGuard>
                </div>
            </div>
            <Footer/>

        </>
    );
}
