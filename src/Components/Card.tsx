import React, { FC } from 'react';

import imgCard from '../Assets/image-equilibrium.jpg';

import IconEthereum from './IconEthereum';
import IconClock from './IconClock';
interface CardProps {

};

const Card: FC<CardProps> = () => {
    return (
        <div className='sm:px-0 px-2'>
            <div className='bg-dark-blue-card-bg rounded-3xl flex flex-col p-5 w-72 shadow-lg drop-shadow-xl'>
                <img className='rounded-2xl w-auto h-auto' src={imgCard} />
                <p className='text-xl mt-5'>Equilibrium #3429</p>
                <p className='text-sm text-soft-blue font-light mt-5 w-full'>Our equilibrium collection promotes balance and calm</p>
                <div className="flex flex-row mb-4 justify-between">
                    <div className="flex items-center mt-3">
                        <IconEthereum className='h-5 w-5 fill-cyan'/>
                        <p className='text-sm text-cyan'>0.041 ETH</p>
                    </div>
                    <div className="flex flex-row items-center mt-3">
                        <IconClock className='h-15 w-15 mr-1 fill-soft-blue' height={17} width={17}/>
                        <p className='text-sm text-soft-blue'>3 days left</p>
                    </div>
                </div>
                <hr className='border-dark-blue-line'/>
            </div>
        </div>
    );
};

export default Card;
