
const Locations = () => {
    return (
        <div className="flex min-h-min">
            <div className="container mt-8 mx-auto p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div>
                            <p className="text-4xl phone:text-2xl font-bold text-gray-800">Hope Point Gisozi</p>
                            <p className="text-md mt-4 phone:text-sm text-gray-600">Rte de Lennik 806 02 201 23 45</p>
                            <p className="text-md mt-2 text-gray-600">Open 24 hours</p>
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
                            Directions
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div>
                            <p className="text-lg font-bold text-gray-800">Hope Point Gisozi</p>
                            <p className="text-sm text-gray-600">Rte de Lennik 806 02 201 23 45</p>
                            <p className="text-xs text-gray-600">Open 24 hours</p>
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-full">
                            Directions
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Locations