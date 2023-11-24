/* eslint-disable react/prop-types */

export function CatCard({ url, id }) {

    return (
        <>
            <p>{id}</p>
            <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <img src={url} className="object-cover group-hover:opacity-75" />
            </div>
        </>
    );
}