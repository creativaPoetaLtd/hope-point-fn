const Locations = () => {
    const locationsData = [
        {
            name: 'Hope Point Gisozi',
            address: 'Rte de Lennik 806',
            phone: '02 201 23 45',
            hours: 'Open 24 hours',
            coordinates: { latitude: -1.943725, longitude: 30.086548 }
        },
        {
            name: 'Another Location',
            address: '123 Main Street',
            phone: '555-1234',
            hours: '9 AM - 5 PM',
            coordinates: { latitude: -2.0, longitude: 31.0 }
        }
    ];

    const generateGoogleMapsLink = (latitude: any, longitude: any) => {
        return `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    };

    return (
        <div className="flex min-h-min">
            <div className="container desktop:mt-8 tablet:-mt-20 mx-auto p-4">
                {locationsData.map((location, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <div className="flex items-center justify-between p-4 border-b border-gray-200">
                            <div>
                                <p className="text-4xl phone:text-2xl font-semibold text-gray-800">{location.name}</p>
                                <p className="text-md mt-4 phone:text-sm text-gray-600">{location.address} {location.phone}</p>
                                <p className="text-md mt-2 text-gray-600">{location.hours}</p>
                            </div>
                            <a
                                href={generateGoogleMapsLink(location.coordinates.latitude, location.coordinates.longitude)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-red-500 text-white px-4 py-2 rounded-full"
                            >
                                Directions
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Locations;
