

interface DataObject {
    nameProduct: string,
    descriptionText: string,
    valueProduct?: string,
    iconProduct?: any,
}


type Props = {
    name: string,
    text: string,
    description:string,
    imgBackground: string,
    value?:string,
    icon:any;
    handleChildClick:(data: DataObject)=> void
}

const CardProduct = ({ name, text,description, imgBackground ,value, handleChildClick, icon}: Props) => {

    const dataToPopUp: DataObject = {
        nameProduct: name, 
        descriptionText: description,
        valueProduct: value,
        iconProduct: icon
    };

   
    return (
        <>
            <div className={`bg-[url(${imgBackground})] w-full h-full rounded-xl flex flex-col text-white  px-6 sm:px-9  lg:px-6 py-3
        after:absolute after:h-full after:w-full after:bg-gradient-to-t	from-dark-blue from-15%  after:left-0 after:top-0 after:rounded-xl after:z-0`} >

                <div className="header-card flex justify-between items-center z-10">

                    <p className="font-extralight text-2xl  sm:text-3xl ">{name}</p>

                    <span className="text-5xl sm:text-6xl">{icon} </span>

                </div>

                <p className="my-auto  text-white font-thin  text-xl sm:text-2xl z-10">{text}</p>

                <button onClick={()=>handleChildClick(dataToPopUp)} className="mb-10 relative shadow-3xl mx-auto z-10 font-light
                border-2 py-2 rounded-xl w-3/4 sm:w-3/5 text-[1rem]
            hover:bg-white  hover:text-dark-blue  hover:scale-110 transition-all hover:pr-5 duration-500 
            after:content-['»']  after:right-0 after:opacity-0 after:absolute hover:after:opacity-100 hover:after:right-5 ">
                    descubra mais
                </button>

            </div>
        </>

    )
}

export default CardProduct