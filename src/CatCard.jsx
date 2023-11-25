/* eslint-disable react/prop-types */

export function CatCard({ url, id, handleClick }) {


    return (
        <>
            <div onClick={() => handleClick(id)} className="group box-border border-white aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gradient-to-t from-slate-900 to-slate-300">
                <img src={url} className="object-cover group-hover:opacity-60 " />
            </div>
        </>
    );
}