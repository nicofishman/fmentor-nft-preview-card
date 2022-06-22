import React, { FC } from 'react';

import imgCard from '../Assets/image-equilibrium.jpg';
import imgAvatar from '../Assets/image-avatar.png';

import IconView from './IconView';
import IconEthereum from './IconEthereum';
import IconClock from './IconClock';
interface CardProps {

};

const Card: FC<CardProps> = () => {
    return (
        <div className='sm:px-0 px-2'>
            <div className='bg-dark-blue-card-bg rounded-3xl flex flex-col p-4 w-72 shadow-lg drop-shadow-xl'>
                <div className="relative w-64 h-64 group">
                    <div className='h-full flex justify-center items-center w-full top-0 rounded-2xl invisible group-hover:visible cursor-pointer absolute bg-cyan/40 z-10'>
                        <IconView className='h-10 w-10 opacity-100' fill='#fff' height={48} width={48}/>
                    </div>
                    <img className='w-full h-full rounded-2xl' src={imgCard} />
                </div>
                <p className='text-xl mt-5 hover:text-cyan cursor-pointer'>Equilibrium #3429</p>
                <p className='text-sm text-soft-blue font-light mt-5 w-full'>Our equilibrium collection promotes balance and calm</p>
                <div className="flex flex-row mb-4 justify-between">
                    <div className="flex items-center mt-3">
                        <IconEthereum className='h-5 w-5 fill-cyan'/>
                        <p className='text-sm font-bold text-cyan'>0.041 ETH</p>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                        <IconClock className='h-15 w-15 mr-1 fill-soft-blue' height={17} width={17}/>
                        <p className='text-sm text-soft-blue'>3 days left</p>
                    </div>
                </div>
                <hr className='border-dark-blue-line'/>
                <div className="flex flex-row mt-3 text-sm items-center">
                    <img alt="" className='h-7 w-7 border-cyan border-[1px] rounded-full' src={imgAvatar} />
                    <span className='ml-3 text-soft-blue'>Creation of{'\u00A0'}</span> <span className='hover:text-cyan cursor-pointer transition-colors'>Jules Wyvern</span>
                </div>
            </div>
        </div>
    );
};

export default Card;
