import logo from '../assets/images/logo.jpeg'
import profile from '../assets/images/profile.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from 'react-icons/hi2'
import { HiPlus } from 'react-icons/hi'
import { HeaderItem } from './HeaderItem'

export const Header = () => {

    const menu = [{
        name: 'Home',
        icon: HiHome
    }, {
        name: 'Search',
        icon: HiMagnifyingGlass
    }, {
        name: 'Watch List',
        icon: HiPlus
    }, {
        name: 'Originals',
        icon: HiStar
    }, {
        name: 'Movies',
        icon: HiPlayCircle
    }, {
        name: 'Series',
        icon: HiTv
    }]

    return (
        <div className='flex items-center gap-10 justify-between p-3'>
            <div className='flex gap-10'>
                <img src={logo} className='w-[80px] object-cover md: w-[100px]' />
                {menu.map((item) => <HeaderItem name={item.name} Icon={item.icon} />)}
            </div>
            <img src={profile} className='w-[80px] object-cover md: w-[50px] h-[50px]' />
        </div>
    )
}