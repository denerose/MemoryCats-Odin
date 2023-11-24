/* eslint-disable react/prop-types */

export function CatCard({ url, id, handleClick }) {


    return (
        <>
            <p>{id}</p>
            <div onClick={() => handleClick(id)} className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
                <img src={url} className="object-cover group-hover:opacity-75" />
            </div>
        </>
    );
}