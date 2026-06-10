const properties = [
    // CHENNAI (15 samples)
    {
        id: 'ch-1',
        title: 'Modern Apartment in Adyar',
        location: 'Chennai',
        area: 'Adyar',
        price: 12500000, // 1.25 Cr
        bhk: 3,
        size: 1450,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-2',
        title: 'Luxury Villa in ECR',
        location: 'Chennai',
        area: 'ECR',
        price: 35000000, // 3.5 Cr
        bhk: 4,
        size: 3200,
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ch-3',
        title: 'Compact Studio in OMR',
        location: 'Chennai',
        area: 'OMR',
        price: 4500000, // 45 L
        bhk: 1,
        size: 550,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
        type: 'Studio'
    },
    {
        id: 'ch-4',
        title: 'Spacious 2BHK in Velachery',
        location: 'Chennai',
        area: 'Velachery',
        price: 8500000, // 85 L
        bhk: 2,
        size: 1100,
        image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-5',
        title: 'Premium Penthouse in Anna Nagar',
        location: 'Chennai',
        area: 'Anna Nagar',
        price: 28000000, // 2.8 Cr
        bhk: 4,
        size: 2800,
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-6',
        title: 'Gated Community Villa in Sholinganallur',
        location: 'Chennai',
        area: 'Sholinganallur',
        price: 15000000, // 1.5 Cr
        bhk: 3,
        size: 2100,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ch-7',
        title: 'Affordable Flat in Medavakkam',
        location: 'Chennai',
        area: 'Medavakkam',
        price: 5500000, // 55 L
        bhk: 2,
        size: 950,
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-8',
        title: 'Sea View Flat in Besant Nagar',
        location: 'Chennai',
        area: 'Besant Nagar',
        price: 17500000, // 1.75 Cr
        bhk: 3,
        size: 1600,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-9',
        title: 'Row House in Perumbakkam',
        location: 'Chennai',
        area: 'Perumbakkam',
        price: 9500000, // 95 L
        bhk: 3,
        size: 1350,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ch-10',
        title: 'Budget Apartment in Tambaram',
        location: 'Chennai',
        area: 'Tambaram',
        price: 4200000, // 42 L
        bhk: 2,
        size: 900,
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-11',
        title: 'Luxury Flat in T. Nagar',
        location: 'Chennai',
        area: 'T. Nagar',
        price: 22000000, // 2.2 Cr
        bhk: 3,
        size: 1900,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-12',
        title: 'High-rise Living in Navalur',
        location: 'Chennai',
        area: 'Navalur',
        price: 7000000, // 70 L
        bhk: 2,
        size: 1250,
        image: 'https://images.unsplash.com/photo-1567496898731-daabd1cfc3ee?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-13',
        title: 'Bungalow in Thiruvanmiyur',
        location: 'Chennai',
        area: 'Thiruvanmiyur',
        price: 48000000, // 4.8 Cr
        bhk: 5,
        size: 4500,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ch-14',
        title: 'Modern Flat in Porur',
        location: 'Chennai',
        area: 'Porur',
        price: 6500000, // 65 L
        bhk: 2,
        size: 1150,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ch-15',
        title: 'Eco-friendly Villa in Kelambakkam',
        location: 'Chennai',
        area: 'Kelambakkam',
        price: 11000000, // 1.1 Cr
        bhk: 3,
        size: 1800,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },

    // COIMBATORE (15 samples)
    {
        id: 'co-1',
        title: 'Elite Residency in Race Course',
        location: 'Coimbatore',
        area: 'Race Course',
        price: 18000000, // 1.8 Cr
        bhk: 3,
        size: 2200,
        image: 'https://images.unsplash.com/photo-1600607687940-c52af036999c?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-2',
        title: 'Hill View Villa in Saravanampatti',
        location: 'Coimbatore',
        area: 'Saravanampatti',
        price: 9500000, // 95 L
        bhk: 3,
        size: 2400,
        image: 'https://images.unsplash.com/photo-1600566752355-397921163bc3?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'co-3',
        title: 'Smart Home in Avinashi Road',
        location: 'Coimbatore',
        area: 'Avinashi Road',
        price: 12000000, // 1.2 Cr
        bhk: 3,
        size: 1950,
        image: 'https://images.unsplash.com/photo-1628744876497-eb30460be9f6?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-4',
        title: 'Budget Flat in Ganapathy',
        location: 'Coimbatore',
        area: 'Ganapathy',
        price: 4500000, // 45 L
        bhk: 2,
        size: 1050,
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-5',
        title: 'Luxury Penthouse in Peelamedu',
        location: 'Coimbatore',
        area: 'Peelamedu',
        price: 14000000, // 1.4 Cr
        bhk: 4,
        size: 2600,
        image: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-6',
        title: 'Independent House in Vadavalli',
        location: 'Coimbatore',
        area: 'Vadavalli',
        price: 11000000, // 1.1 Cr
        bhk: 3,
        size: 2200,
        image: 'https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'co-7',
        title: 'Cozy Flat in Singanallur',
        location: 'Coimbatore',
        area: 'Singanallur',
        price: 5200000, // 52 L
        bhk: 2,
        size: 1100,
        image: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-8',
        title: 'Modern Township in Trichy Road',
        location: 'Coimbatore',
        area: 'Trichy Road',
        price: 8800000, // 88 L
        bhk: 3,
        size: 1650,
        image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-9',
        title: 'Spanish Style Villa in Perur',
        location: 'Coimbatore',
        area: 'Perur',
        price: 21000000, // 2.1 Cr
        bhk: 4,
        size: 3500,
        image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'co-10',
        title: 'Centrally Located Flat in RS Puram',
        location: 'Coimbatore',
        area: 'RS Puram',
        price: 16500000, // 1.65 Cr
        bhk: 3,
        size: 2100,
        image: 'https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-11',
        title: 'Project Apartment in Kovaipudur',
        location: 'Coimbatore',
        area: 'Kovaipudur',
        price: 4900000, // 49 L
        bhk: 2,
        size: 1150,
        image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-12',
        title: 'Luxury Living in Saibaba Colony',
        location: 'Coimbatore',
        area: 'Saibaba Colony',
        price: 13500000, // 1.35 Cr
        bhk: 3,
        size: 1850,
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-13',
        title: 'Gated Villa in Eachanari',
        location: 'Coimbatore',
        area: 'Eachanari',
        price: 12500000, // 1.25 Cr
        bhk: 3,
        size: 2300,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'co-14',
        title: 'Designer Flat in Ramanathapuram',
        location: 'Coimbatore',
        area: 'Ramanathapuram',
        price: 7800000, // 78 L
        bhk: 3,
        size: 1550,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'co-15',
        title: 'Affordable Home in Thudiyalur',
        location: 'Coimbatore',
        area: 'Thudiyalur',
        price: 3800000, // 38 L
        bhk: 2,
        size: 950,
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },

    // BANGALORE (15 samples)
    {
        id: 'ba-1',
        title: 'Premium Flat in Indiranagar',
        location: 'Bangalore',
        area: 'Indiranagar',
        price: 25000000, // 2.5 Cr
        bhk: 4,
        size: 2800,
        image: 'https://images.unsplash.com/photo-1560448204-61dc36dc98c8?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-2',
        title: 'Ultra Luxury Villa in Whitefield',
        location: 'Bangalore',
        area: 'Whitefield',
        price: 45000000, // 4.5 Cr
        bhk: 4,
        size: 4200,
        image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ba-3',
        title: 'Chic Studio in Koramangala',
        location: 'Bangalore',
        area: 'Koramangala',
        price: 6500000, // 65 L
        bhk: 1,
        size: 650,
        image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
        type: 'Studio'
    },
    {
        id: 'ba-4',
        title: 'Modern 3BHK in HSR Layout',
        location: 'Bangalore',
        area: 'HSR Layout',
        price: 15500000, // 1.55 Cr
        bhk: 3,
        size: 1850,
        image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-5',
        title: 'Penthouse in Hebbal',
        location: 'Bangalore',
        area: 'Hebbal',
        price: 32000000, // 3.2 Cr
        bhk: 4,
        size: 3100,
        image: 'https://images.unsplash.com/photo-1512914890251-2f96a9b09c53?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-6',
        title: 'Green Villa in Sarjapur',
        location: 'Bangalore',
        area: 'Sarjapur',
        price: 21000000, // 2.1 Cr
        bhk: 3,
        size: 2600,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ba-7',
        title: 'Budget Flat in Electronic City',
        location: 'Bangalore',
        area: 'Electronic City',
        price: 4800000, // 48 L
        bhk: 2,
        size: 1000,
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-8',
        title: 'High-rise Living in Bannerghatta Road',
        location: 'Bangalore',
        area: 'Bannerghatta Road',
        price: 9200000, // 92 L
        bhk: 3,
        size: 1550,
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-9',
        title: 'Gated Township in Marathahalli',
        location: 'Bangalore',
        area: 'Marathahalli',
        price: 11500000, // 1.15 Cr
        bhk: 3,
        size: 1700,
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-10',
        title: 'Eco-Luxury Villa in Yelahanka',
        location: 'Bangalore',
        area: 'Yelahanka',
        price: 28000000, // 2.8 Cr
        bhk: 4,
        size: 3400,
        image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ba-11',
        title: 'Central Apartment in MG Road',
        location: 'Bangalore',
        area: 'MG Road',
        price: 35000000, // 3.5 Cr
        bhk: 3,
        size: 2400,
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-12',
        title: 'Townhouse in JP Nagar',
        location: 'Bangalore',
        area: 'JP Nagar',
        price: 19500000, // 1.95 Cr
        bhk: 3,
        size: 2200,
        image: 'https://images.unsplash.com/photo-1567496898731-daabd1cfc3ee?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ba-13',
        title: 'Bungalow in Sadashivanagar',
        location: 'Bangalore',
        area: 'Sadashivanagar',
        price: 75000000, // 7.5 Cr
        bhk: 5,
        size: 5200,
        image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=400&q=80',
        type: 'Villa'
    },
    {
        id: 'ba-14',
        title: 'Modern Apartment in Bellandur',
        location: 'Bangalore',
        area: 'Bellandur',
        price: 12800000, // 1.28 Cr
        bhk: 3,
        size: 1750,
        image: 'https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    },
    {
        id: 'ba-15',
        title: 'Budget Living in Kengeri',
        location: 'Bangalore',
        area: 'Kengeri',
        price: 4200000, // 42 L
        bhk: 2,
        size: 950,
        image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=400&q=80',
        type: 'Apartment'
    }
];

export default properties;
