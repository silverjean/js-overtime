// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope,
} from 'react-icons/hi2'

import Link from 'next/link'

import { useRouter } from 'next/router'
import { Navbar, NavDiv } from './style'

// nav data
export const navData = [
    { name: 'home', path: '/', icon: <HiHome /> },
    { name: 'about', path: '/about', icon: <HiUser /> },
    { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
    { name: 'work', path: '/work', icon: <HiViewColumns /> },
    {
        name: 'testimonials',
        path: '/testimonials',
        icon: <HiChatBubbleBottomCenterText />,
    },
    {
        name: 'contact',
        path: '/contact',
        icon: <HiEnvelope />,
    },
]

const Nav = () => {
    const router = useRouter()

    const pathname = router.pathname
    return (
        <Navbar>
            <NavDiv>
                {navData.map((link, index) => {
                    return (
                        <Link
                            className={`${
                                link.path === pathname && 'text-accent'
                            }`}
                            key={index}
                            href={link.path}
                        >
                            <div>{link.icon}</div>
                        </Link>
                    )
                })}
            </NavDiv>
        </Navbar>
    )
}

export default Nav
