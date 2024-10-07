

type Props = {
    numberOrdinal: number,
    nameValue: string,
    focus ?:boolean
}

const CardValues = ({ numberOrdinal, nameValue, focus }: Props) => {
    return (
        <div className={` ${!focus ? 'scale-90' :''} bg-slate-50 gap-4 sm:gap-6 lg:gap-11  rounded-lg flex items-center
        justify-center w-[142px] h-[60px] sm:w-[200px] sm:h-auto lg:w-[260px] xl:w-[300px] px-2 py-3 sm:px-3 sm:py-4 lg:px-5 lg:py-6 shadow-md `}>
            
            <span className={`flex sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${!focus ? 'opacity-30' : ''}  border-[0px] sm:border-dark-blue sm:border-2 text-center rounded-full justify-center items-center`}>
                <p className=''>
                    {numberOrdinal}
                </p>
            </span>

            <p className={`font-light text-[1rem] sm:text-xl   xl:text-2xl ${!focus ? 'opacity-30' : ''}`}>{nameValue}</p>

        </div>
    )
}




export default CardValues