import Image from 'next/image'
import React from 'react'
import Loader from '@/public/assets/Images/icon.png'

const Loading = () => {
    return (
        <div className='loader'>
            <Image src={Loader} width={150} />
        </div>
    )
}

export default Loading