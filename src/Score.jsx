/* eslint-disable react/prop-types */

export function ScoreBoard({ score, maxScore }) {

    return (
        <div className="bg-white py-1 sm:py-4 mx-auto">
            <div className="mx-auto max-w-xl px-6 lg:px-8">
                <dl className="mx-auto grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 max-w-md">
                    <div className="flex flex-col bg-gray-400/5 p-2">
                        <dt className="text-base leading-7 text-gray-600">Current Score</dt>
                        <dd className="order-first text-l font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {score}
                        </dd>
                    </div>
                    <div className="flex flex-col bg-gray-400/5 p-2">
                        <dt className="text-base leading-7 text-gray-600">Best Score</dt>
                        <dd className="order-first text-l font-semibold tracking-tight text-gray-900 sm:text-5xl">
                            {maxScore}
                        </dd>
                    </div>
                </dl>
                <p className="text-center p-2"><b>warning:</b> you can only pet each kitty once!</p>
            </div>
        </div>
    )
}