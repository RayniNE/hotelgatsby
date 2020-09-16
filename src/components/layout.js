import React from 'react';
import Header from './header';
import Helmet from 'react-helmet';

const Layout = (props) => {

    return ( 
        <>

            <Helmet>
                <title> Gatsby Hotel </title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
            </Helmet>

            <Header/>
            {props.children}

        </>
     );
}
 
export default Layout;