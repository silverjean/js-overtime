import TopLeftImg from '../../components/TopLeftImg'
import Header from '../Header'
import Nav from '../Nav'

import { sora } from '../../config/font'
import { MainLayout } from './style'

const Layout = ({ children }) => {
    return (
        <MainLayout className={`${sora.variable} font-sora`}>
            <TopLeftImg />
            <Nav />
            <Header />
            {children}
        </MainLayout>
    )
}

export default Layout
