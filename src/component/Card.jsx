import emptyPng from '../empty.png';

const Card = (props) => {
    return (
        <div className="w-[240px] h-[380px] max-w-sm rounded overflow-hidden shadow-[0_8px_40px_-15px_rgba(225,225,225,0.3)] m-4 relative">
            {props.author && <div className={'absolute top-0 right-0 py-[1px] px-2 bg-red-500 rounded-2xl'}><span>{props.author}</span>
            </div>}
            <img src={props.urlToImage === null? emptyPng : props.urlToImage} alt="Card"  style={{
                width: '100%',
                height: '150px',
                objectFit: 'cover'
            }}/>
            <div className="px-6 py-4">
                <div className="font-bold text-sm mb-2 text-white">{props.title ? props.title.slice(0, 47) : "this title"}...</div>
                <p className="text-gray-500 text-base">
                    {props.description ? props.description.slice(0, 45) : ""}...
                </p>
            </div>
            <div className="px-6 py-4 my-3 absolute bottom-0 ">
                <a href={props.url} target={'_blank'} rel="noreferrer" className="inline-block custom-bg rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 hover:bg-blue-700" style={{background: 'rgba(60, 60, 186, 0.84)'}}>read more</a>
            </div>
        </div>
    );
};

export default Card;