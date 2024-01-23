const Locations = () => {
    // Function to generate Google Maps link based on latitude and longitude
    const generateGoogleMapsLink = (latitude: any, longitude: any) => {
        return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    };

    return (
        <div className="flex min-h-min">
            <div className="container mt-8 mx-auto p-4">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div>
                            <p className="text-4xl phone:text-2xl font-semibold text-gray-800">Hope Point Gisozi</p>
                            <p className="text-md mt-4 phone:text-sm text-gray-600">Rte de Lennik 806 02 201 23 45</p>
                            <p className="text-md mt-2 text-gray-600">Open 24 hours</p>
                        </div>
                        <a
                            href={generateGoogleMapsLink(-1.943725, 30.086548)} // Replace with actual coordinates
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 text-white px-4 py-2 rounded-full"
                        >
                            Directions
                        </a>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <div>
                            <p className="text-4xl phone:text-2xl font-semibold text-gray-800">Hope Point Gisozi</p>
                            <p className="text-md mt-4 phone:text-sm text-gray-600">Rte de Lennik 806 02 201 23 45</p>
                            <p className="text-md mt-2 text-gray-600">Open 24 hours</p>
                        </div>
                        <a
                            href={generateGoogleMapsLink(-1.943725, 30.086548)} // Replace with actual coordinates
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-500 text-white px-4 py-2 rounded-full"
                        >
                            Directions
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Locations;
