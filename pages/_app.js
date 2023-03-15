import '../styles/globals.scss'
import {Provider} from "react-redux";
import store from "/store";
import {PersistGate} from "redux-persist/integration/react"
import {persistStore} from "redux-persist";
import Head from "next/head";
import {SessionProvider} from "next-auth/react";

let persistor = persistStore(store)

function MyApp({Component, pageProps: {session, ...pageProps}}) {
    return (
        <SessionProvider session={session}>
            <Head>
                <title>Shop App</title>
                <meta name="description" content="Ecommerce with react / next"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Component {...pageProps} />
                </PersistGate>
            </Provider>
        </SessionProvider>

    )
}

export default MyApp
