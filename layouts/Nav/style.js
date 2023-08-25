import tw from 'tailwind-styled-components'

export const Navbar = tw.nav`
    flex
    flex-col
    items-center xl:justify-center
    gab-y-4
    fixed
    h-max
    bottom-0
    mt-auto
    xl:right-[2%]
    z-50
    top-0
    w-full xl:w-16 xl:max-w-md
    xl:h-screen
    `

export const NavDiv = tw.div`
    flex
    w-full
    xl:flex-col
    items-center
    justify-between
    xl:justify-center
    gap-y-10

    px-4
    md:px-40 xl:px-0
    h-[80px] xl:h-max
    py-8
    bg-white/10
    backdrop-blur-sm
    text-3xl xl:text-xl
    xl:rounded-full
`
