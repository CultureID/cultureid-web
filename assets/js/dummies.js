export const events = [
    {
        name: "Grebek Maulud Yogyakarta",
        location: "Yogyakarta",
        city: "Daerah Istimewa Yogyakarta",
        is_free: true,
        fee: 0,
        date: "2023-10-13",
        thumbnail: 'grebek-maulud.png',
        url: "/detail-event.html?event=Grebek Maulud Yogyakarta"
    },
    {
        name: "Kauman Batik Art Festival",
        location: "Kampoeng Batik Kauman",
        city: "Kota Surakarta",
        is_free: true,
        fee: 0,
        date: "2023-10-14",
        thumbnail: 'kauman-batik-art-festival.png',
        url: "/detail-event.html?event=Kauman Batik Art Festival"
    },
    {
        name: "Festival Kalipucang Wetan",
        location: "Desa Kalipucang Wetan",
        city: "Kabupaten Batang",
        is_free: true,
        fee: 0,
        date: "2023-10-13",
        thumbnail: 'festival-kalipucang-wetan.png',
        url: "/detail-event.html?event=Festival Kalipucang Wetan"
    },
    {
        name: "Pameran Flona",
        location: "Taman Lapangan Banteng",
        city: "Jakarta Pusat",
        is_free: true,
        fee: 0,
        date: "2023-10-16",
        thumbnail: 'pameran-flona.png',
        url: "/detail-event.html?event=Pameran Flona"
    },
    {
        name: "Pameran Garis Ombak",
        location: "Jagad Gallery",
        city: "Jakarta Pusat",
        is_free: true,
        fee: 0,
        date: "2023-09-30",
        thumbnail: 'pameran-garis-ombak.png',
        url: "/detail-event.html?event=Pameran Garis Ombak"
    },
    {
        name: "Attack on Titan: The Final Exhibition",
        location: "Jl. Panjang No.5 Kebon Jeruk, Kec. Kb Jeruk",
        city: "Kota Jakarta Barat",
        is_free: true,
        fee: 0,
        date: "2023-09-22",
        thumbnail: 'aot-the-final-exhibition.png',
        url: "/detail-event.html?event=Attack on Titan: The Final Exhibition"
    },
    {
        name: "Pameran Wisma Geha",
        location: "Wisma Geha",
        city: "Jakarta Pusat",
        is_free: true,
        fee: 0,
        date: "2023-09-21",
        thumbnail: 'pameran-wisma-geha.png',
        url: "/detail-event.html?event=Pameran Wisma Geha"
    },
    {
        name: "Festival Pesona Raja Ampat",
        location: "Raja Ampat",
        city: "Kabupaten Raja Ampat",
        is_free: true,
        fee: 0,
        date: "2023-09-15",
        thumbnail: 'festival-pesona-raja-ampat.png',
        url: "/detail-event.html?event=Festival Pesona Raja Ampat"
    },
]

export const endedEvents = events.filter((event) => new Date() > new Date(event.date));
export const upcomingEvents = events.filter((event) => new Date() < new Date(event.date));


export const islands = [
    {
        "island": "Jawa",
        "island_slug": "jawa",
        "provinces": [
            { "name": "Banten", "slug": "banten" },
            { "name": "DKI Jakarta", "slug": "dki-jakarta" },
            { "name": "Jawa Barat", "slug": "jawa-barat" },
            { "name": "DI Yogyakarta", "slug": "di-yogyakarta" },
            { "name": "Jawa Tengah", "slug": "jawa-tengah" },
            { "name": "Jawa Timur", "slug": "jawa-timur" },
        ]
    },
    {
        "island": "Sumatra",
        "island_slug": "sumatra",
        "provinces": [
            { "name": "Aceh", "slug": "aceh" },
            { "name": "Sumatera Utara", "slug": "sumatera-utara" },
            { "name": "Sumatera Barat", "slug": "sumatera-barat" },
            { "name": "Riau", "slug": "riau" },
            { "name": "Kepulauan Riau", "slug": "kepulauan-riau" },
            { "name": "Jambi", "slug": "jambi" },
            { "name": "Bengkulu", "slug": "bengkulu" },
            { "name": "Sumatera Selatan", "slug": "sumatera-selatan" },
            { "name": "Kepulauan Bangka Belitung", "slug": "kepulauan-bangka-belitung" },
            { "name": "Lampung", "slug": "lampung" }
        ]
    },
    {
        "island": "Kalimantan",
        "island_slug": "kalimantan",
        "provinces": [
            { "name": "Kalimantan Barat", "slug": "kalimantan-barat" },
            { "name": "Kalimantan Tengah", "slug": "kalimantan-tengah" },
            { "name": "Kalimantan Selatan", "slug": "kalimantan-selatan" },
            { "name": "Kalimantan Timur", "slug": "kalimantan-timur" },
            { "name": "Kalimantan Utara", "slug": "kalimantan-utara" }
        ]
    },
    {
        "island": "Sulawesi",
        "island_slug": "sulawesi",
        "provinces": [
            { "name": "Gorontalo", "slug": "gorontalo" },
            { "name": "Sulawesi Utara", "slug": "sulawesi-utara" },
            { "name": "Sulawesi Tengah", "slug": "sulawesi-tengah" },
            { "name": "Sulawesi Selatan", "slug": "sulawesi-selatan" },
            { "name": "Sulawesi Tenggara", "slug": "sulawesi-tenggara" },
            { "name": "Sulawesi Barat", "slug": "sulawesi-barat" }
        ]
    },
    {
        "island": "Bali & Nusa Tenggara",
        "island_slug": "bali-nusa-tenggara",
        "provinces": [
            { "name": "Bali", "slug": "bali" },
            { "name": "Nusa Tenggara Barat", "slug": "nusa-tenggara-barat" },
            { "name": "Nusa Tenggara Timur", "slug": "nusa-tenggara-timur" }
        ]
    },
    {
        "island": "Maluku & Papua",
        "island_slug": "maluku-papua",
        "provinces": [
            { "name": "Maluku", "slug": "maluku" },
            { "name": "Maluku Utara", "slug": "maluku-utara" },
            { "name": "Papua", "slug": "papua" },
            { "name": "Papua Barat", "slug": "papua-barat" }
        ]
    }
]
