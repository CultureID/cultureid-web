const events = [
    {
        name: "Grebek Maulud Yogyakarta",
        location: "Yogyakarta",
        city: "Daerah Istimewa Yogyakarta",
        is_free: true,
        fee: 0,
        date: "2023-10-13",
        thumbnail: 'grebek-maulud.png'
    },
    {
        name: "Kauman Batik Art Festival",
        location: "Kampoeng Batik Kauman",
        city: "Kota Surakarta",
        is_free: true,
        fee: 0,
        date: "2023-10-14",
        thumbnail: 'kauman-batik-art-festival.png'
    },
    {
        name: "Festival Kalipucang Wetan",
        location: "Desa Kalipucang Wetan",
        city: "Kabupaten Batang",
        is_free: true,
        fee: 0,
        date: "2023-10-13",
        thumbnail: 'festival-kalipucang-wetan.png'
    },
    {
        name: "Pameran Flona",
        location: "Taman Lapangan Banteng",
        city: "Jakarta Pusat",
        is_free: true,
        fee: 0,
        date: "2023-10-16",
        thumbnail: 'pameran-flona.png'
    },
    {
        name: "Pameran Garis Ombak",
        location: "Jagad Gallery",
        city: "Jakarta Pusat",
        is_free: true,
        fee: 0,
        date: "2023-09-30",
        thumbnail: 'pameran-garis-ombak.png'
    },
    {
        name: "Attack on Titan: The Final Exhibition",
        location: "Jl. Panjang No.5 Kebon Jeruk, Kec. Kb Jeruk",
        city: "Kota Jakarta Barat",
        is_free: true,
        fee: 0,
        date: "2023-09-22",
        thumbnail: 'aot-the-final-exhibition.png'
    },
    {
        name: "Pameran Wisma Geha",
        location: "Wisma Geha",
        city: "Jakarta Pusat",
        is_free: true,
        fee: 0,
        date: "2023-09-21",
        thumbnail: 'pameran-wisma-geha.png'
    },
    {
        name: "Festival Pesona Raja Ampat",
        location: "Raja Ampat",
        city: "Kabupaten Raja Ampat",
        is_free: true,
        fee: 0,
        date: "2023-09-15",
        thumbnail: 'festival-pesona-raja-ampat.png'
    },
]

export const endedEvents = events.filter((event) => new Date() > new Date(event.date));
export const upcomingEvents = events.filter((event) => new Date() < new Date(event.date));
