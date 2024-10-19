import { defineStore } from "pinia";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [
      {
        id: "AF0000001952",
        name: "iPhone 12",
        category: "phone",
        brand: "Apple",
        companyId: "2",
        country: "Germany",
        in_stock: true,
        color: "Black",
        size: "Mini",
        price: 3865,
        currency: "USD",
        description: "Lorem ipsum dolor sit amet...",
        images: [
          { url: "https://i.ebayimg.com/images/g/x8QAAOSwmPFmq2kO/s-l1600.jpg", alt: "iPhone 12 in different colors" },
          { url: "https://cdn.dxomark.com/wp-content/uploads/medias/post-70968/apple_iphone_12_mini_-1024x768.jpg", alt: "iPhone 12 front view" },
        ],
        rating: 5,
      },
      {
        id: "AF0000001953",
        name: "Samsung Galaxy S21",
        category: "phone",
        brand: "Samsung",
        companyId: "1",
        country: "South Korea",
        in_stock: true,
        color: "Phantom Gray",
        size: "128GB",
        price: 799,
        currency: "USD",
        description:
          "The Samsung Galaxy S21 comes with a 6.2-inch Dynamic AMOLED display, Exynos 2100 processor, and a triple camera setup.",
        images: [
          {
            url: "https://cdn.dxomark.com/wp-content/uploads/medias/post-105187/Samsung-Galaxy-S21-FE-5G-featured-image-packshot-review.jpg",
            alt: "Samsung Galaxy S21 front and back view",
          },
          {
            url: "https://media.wired.com/photos/6008b82a03f380c029207a14/master/w_1600%2Cc_limit/Gear-Samsung-Galaxy-S21-Ultra-side-SOURCE-Samsung.jpg",
            alt: "Samsung Galaxy S21 side view",
          },
        ],
        rating: 4.5,
      },
      {
        id: "AF0000001954",
        name: "Google Pixel 6",
        category: "phone",
        brand: "Google",
        country: "USA",
        in_stock: true,
        color: "Stormy Black",
        size: "128GB",
        price: 699,
        currency: "USD",
        description:
          "Google Pixel 6 features a 6.4-inch AMOLED display, Google Tensor chipset, and the latest Android software experience.",
        images: [
          {
            url: "https://onepoint.kz/uploads/products/955/google-pixel-6-8128gb-sorta-seafoam.jpeg",
            alt: "Google Pixel 6 front and back view",
          },
          { url: "https://assets-prd.ignimgs.com/2021/10/19/google-pixel-6-pro-hands-on-3-1634656831738.jpg", alt: "Google Pixel 6 display" },
        ],
        rating: 4.7,
      },
      {
        id: "AF0000001955",
        name: "OnePlus 9 Pro",
        category: "phone",
        brand: "OnePlus",
        country: "China",
        in_stock: false,
        color: "Morning Mist",
        size: "256GB",
        price: 969,
        currency: "USD",
        description:
          "OnePlus 9 Pro comes with a 6.7-inch Fluid AMOLED display, Snapdragon 888, and Hasselblad camera for mobile.",
        images: [
          {
            url: "https://adminapi.applegadgetsbd.com/storage/media/large/%F0%9D%97%A2%F0%9D%97%BB%F0%9D%97%B2%F0%9D%97%BD%F0%9D%97%B9%F0%9D%98%82%F0%9D%98%80-%F0%9D%9F%97-%F0%9D%97%A3%F0%9D%97%BF%F0%9D%97%BC-Morning-Mist-5167.jpg",
            alt: "OnePlus 9 Pro back and front view",
          },
          {
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/OnePlus_9_Pro_Camera_Module_with_Hasselblad_logo.jpg/1365px-OnePlus_9_Pro_Camera_Module_with_Hasselblad_logo.jpg",
            alt: "OnePlus 9 Pro camera closeup",
          },
        ],
        rating: 4.6,
      },
      {
        id: "AF0000001956",
        name: "Xiaomi Mi 11 Ultra",
        category: "phone",
        brand: "Xiaomi",
        companyId: "5",
        country: "China",
        in_stock: true,
        color: "Ceramic White",
        size: "256GB",
        price: 1199,
        currency: "USD",
        description:
          "Xiaomi Mi 11 Ultra offers a 6.81-inch AMOLED display, Snapdragon 888, and an impressive rear camera setup.",
        images: [
          {
            url: "https://onepoint.kz/uploads/products/896/xiaomi-mi-11-ultra-12256gb.jpeg",
            alt: "Xiaomi Mi 11 Ultra front and back view",
          },
          {
            url: "https://images.anandtech.com/doci/16830/X-T30_DSF5893.jpg",
            alt: "Xiaomi Mi 11 Ultra rear camera",
          },
        ],
        rating: 4.8,
      },
      {
        id: "AF0000001957",
        name: "Sony Xperia 5 III",
        category: "phone",
        brand: "Sony",
        companyId: "4",
        country: "Japan",
        in_stock: true,
        color: "Frosted Black",
        size: "128GB",
        price: 999,
        currency: "USD",
        description:
          "Sony Xperia 5 III features a 6.1-inch OLED display, Snapdragon 888, and a triple camera with Zeiss optics.",
        images: [
          {
            url: "https://gagadget.com/media/post_big/Sony_Xperia_5_III.jpg",
            alt: "Sony Xperia 5 III front and back view",
          },
          {
            url: "https://lh4.googleusercontent.com/proxy/wtwQZPsmtNKqtiMkFyiwJqR1SpMKSMkJmPkaCgGRmfPfHa0g2wdStifh16rieSkqeH477zO2LkRYMtRCgvI8YHzx-hWP_lsxjdfE8kEHhQ",
            alt: "Sony Xperia 5 III camera closeup",
          },
        ],
        rating: 4.3,
      },
      {
        id: "AF0000001958",
        name: "Huawei P50 Pro",
        category: "phone",
        brand: "Huawei",
        companyId: "3",
        country: "China",
        in_stock: false,
        color: "Golden Black",
        size: "256GB",
        price: 1199,
        currency: "USD",
        description:
          "Huawei P50 Pro features a 6.6-inch OLED display, Kirin 9000, and Leica-powered camera for exceptional photography.",
        images: [
          {
            url: "https://cdn.new-brz.net/app/public/models/JAD-LX98256CGL/large/w/230125120821796159.webp",
            alt: "Huawei P50 Pro front and back view",
          },
          {
            url: "https://www.technodom.kz/under/fmun/vit/259013-01.webp",
            alt: "Huawei P50 Pro camera closeup",
          },
        ],
        rating: 4.4,
      },
      {
        id: "AF0000001959",
        name: "Oppo Find X3 Pro",
        category: "phone",
        brand: "Oppo",
        country: "China",
        in_stock: true,
        color: "Gloss Black",
        size: "256GB",
        price: 1149,
        currency: "USD",
        description:
          "Oppo Find X3 Pro boasts a 6.7-inch AMOLED display, Snapdragon 888, and a quad-camera setup with microscope lens.",
        images: [
          {
            url: "https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/h/15/b8b5d8f2-b23f-4381-806b-ec8fb2379b75.jpg",
            alt: "Oppo Find X3 Pro front and back view",
          },
          {
            url: "https://www.androidauthority.com/wp-content/uploads/2021/03/Oppo-Find-X3-Pro-camera.jpg",
            alt: "Oppo Find X3 Pro camera closeup",
          },
        ],
        rating: 4.5,
      },
      {
        id: "AF0000001960",
        name: "Vivo X60 Pro",
        category: "phone",
        brand: "Vivo",
        country: "China",
        in_stock: true,
        color: "Shimmer Blue",
        size: "256GB",
        price: 899,
        currency: "USD",
        description:
          "Vivo X60 Pro features a 6.56-inch AMOLED display, Snapdragon 870, and Zeiss optics for superior photography.",
        images: [
          {
            url: "https://m.media-amazon.com/images/I/81DJgF3G9iL.jpg",
            alt: "Vivo X60 Pro front and back view",
          },
          {
            url: "https://instore.bnn.in.th/wp-content/uploads/2021/06/review_vivo_x60_pro_5g-16-1024x684.jpg",
            alt: "Vivo X60 Pro display closeup",
          },
        ],
        rating: 4.6,
      },
      {
        id: "AF0000001961",
        name: "Asus ROG Phone 5",
        category: "phone",
        brand: "Asus",
        country: "Taiwan",
        in_stock: true,
        color: "Phantom Black",
        size: "512GB",
        price: 1499,
        currency: "USD",
        description:
          "Asus ROG Phone 5 features a 6.78-inch AMOLED display, Snapdragon 888, and is designed for gaming enthusiasts.",
        images: [
          {
            url: "https://onepoint.kz/uploads/products/787/asus-rog-phone-5-12256gb-storm-white.jpeg",
            alt: "Asus ROG Phone 5 front and back view",
          },
          {
            url: "https://www.connecteddevices.co.za/cdn/shop/products/b330616-1_bd6daa80-8864-4a46-908a-9b67951a0dad_700x700.jpg?v=1618240328",
            alt: "Asus ROG Phone 5 side view",
          },
        ],
        rating: 4.9,
      },
      {
        id: "AF0000001962",
        name: "Realme GT Master Edition",
        category: "phone",
        brand: "Realme",
        country: "China",
        in_stock: true,
        color: "Luna White",
        size: "128GB",
        price: 399,
        currency: "USD",
        description:
          "Realme GT Master Edition comes with a 6.43-inch AMOLED display, Snapdragon 778G, and a unique suitcase design.",
        images: [
          {
            url: "https://images.jdmagicbox.com/quickquotes/images_main/realme-gt-master-edition-ram-6-gb-128-gb-cosmos-black-241164473-0idf9.png",
            alt: "Realme GT Master Edition front and back view",
          },
          {
            url: "https://www.colorsmagazine.net/wp-content/uploads/2021/10/Voyager-gery-1_Web.jpg",
            alt: "Realme GT Master Edition suitcase design",
          },
        ],
        rating: 4.5,
      },
      {
        id: "WT0000001001",
        name: "Rolex Submariner",
        category: "watch",
        brand: "Rolex",
        country: "Switzerland",
        in_stock: true,
        color: "Black",
        size: "40mm",
        price: 8950,
        currency: "USD",
        description:
          "The Rolex Submariner is an iconic diver's watch, featuring a 40mm stainless steel case, ceramic bezel, and automatic movement.",
        images: [
          {
            url: "https://www.watchtime.com/wp-content/uploads/2021/07/Rolex_Submariner_Date_LV_FI.jpg",
            alt: "Rolex Submariner front view",
          },
          {
            url: "https://www.everestbands.com/cdn/shop/articles/watch-club-rolex-submariner-date-brand-new-release-41mm-ref-126610ln-year-2020-14096-3.jpg?v=1636149581",
            alt: "Rolex Submariner side view",
          },
        ],
        rating: 4.9,
      },
      {
        id: "WT0000001002",
        name: "Omega Speedmaster",
        category: "watch",
        brand: "Omega",
        country: "Switzerland",
        in_stock: true,
        color: "Black",
        size: "42mm",
        price: 6200,
        currency: "USD",
        description:
          "The Omega Speedmaster is known for its role in space exploration, with a 42mm case, chronograph function, and manual-wind movement.",
        images: [
          {
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr_HlqPa3fGjBPxMoR6RFhP9YpMwJWiy6sRQ&s",
            alt: "Omega Speedmaster front view",
          },
          {
            url: "https://www.vintagemasters.eu/wp-content/uploads/2022/04/20220426_vintagemasters_web-10-van-34.jpg",
            alt: "Omega Speedmaster caseback",
          },
        ],
        rating: 4.8,
      },
      {
        id: "WT0000001003",
        name: "Tag Heuer Carrera",
        category: "watch",
        brand: "Tag Heuer",
        country: "Switzerland",
        in_stock: false,
        color: "Blue",
        size: "43mm",
        price: 4950,
        currency: "USD",
        description:
          "The Tag Heuer Carrera is a racing-inspired chronograph, with a 43mm case, blue dial, and automatic movement.",
        images: [
          {
            url: "https://content.thewosgroup.com/productimage/17382072/17382072_1.jpg?impolicy=zoom",
            alt: "Tag Heuer Carrera front view",
          },
          {
            url: "https://www.timekeepers.club/storage/files/profil-v2-1-1f-_x4000.jpg?token=c4e375b375c385d3839a49f0b48a774a",
            alt: "Tag Heuer Carrera side view",
          },
        ],
        rating: 4.7,
      },
      {
        id: "WT0000001004",
        name: "Patek Philippe Nautilus",
        category: "watch",
        brand: "Patek Philippe",
        country: "Switzerland",
        in_stock: false,
        color: "Silver",
        size: "40mm",
        price: 34000,
        currency: "USD",
        description:
          "The Patek Philippe Nautilus is a highly sought-after luxury sports watch, featuring a 40mm stainless steel case and automatic movement.",
        images: [
          {
            url: "https://www.hodinarstvibechyne.cz/res/crc-3208899248/pages/images/1220x1220/26373-iz-patek-philippe-nautilus-history.jpg",
            alt: "Patek Philippe Nautilus front view",
          },
          {
            url: "https://www.thewatchcompany.com/media/tm_blog/p/o/7/4946/post_7_4946.jpg",
            alt: "Patek Philippe Nautilus on wrist",
          },
        ],
        rating: 4.9,
      },
      {
        id: "WT0000001005",
        name: "Breitling Navitimer",
        category: "watch",
        brand: "Breitling",
        country: "Switzerland",
        in_stock: true,
        color: "Black",
        size: "41mm",
        price: 5200,
        currency: "USD",
        description:
          "The Breitling Navitimer is a classic pilot's watch, featuring a 41mm case, slide rule bezel, and automatic chronograph movement.",
        images: [
          {
            url: "https://monochrome-watches.com/wp-content/uploads/2014/05/Breitling-Navitimer-01-46mm-1.jpeg",
            alt: "Breitling Navitimer front view",
          },
          {
            url: "https://www.lepage.fr/74280-medium_default/breitling-navitimer-2024-automatic-watch-green-dial-steel-bracelet-41-mm.jpg",
            alt: "Breitling Navitimer bezel closeup",
          },
        ],
        rating: 4.6,
      },
      {
        id: "WT0000001006",
        name: "Audemars Piguet Royal Oak",
        category: "watch",
        brand: "Audemars Piguet",
        country: "Switzerland",
        in_stock: false,
        color: "Silver",
        size: "41mm",
        price: 28000,
        currency: "USD",
        description:
          "The Audemars Piguet Royal Oak features the iconic octagonal bezel and a 41mm stainless steel case with an automatic movement.",
        images: [
          {
            url: "https://oliverandclarke.com/cdn/shop/files/AP_ROYALOAK_GREYDL_DIAMNDS_IG_1.jpg?v=1711743836&width=2500",
            alt: "Audemars Piguet Royal Oak front view",
          },
          {
            url: "https://swisswatches-magazine.com/wp-content/uploads/2023/11/audemars-piguet-royal-oak-squelette-openworked-ro-16204ba-oo-1240ba-titelbild.jpg",
            alt: "Audemars Piguet Royal Oak bracelet closeup",
          },
        ],
        rating: 4.9,
      },
      {
        id: "WT0000001007",
        name: "Tissot Le Locle",
        category: "watch",
        brand: "Tissot",
        country: "Switzerland",
        in_stock: true,
        color: "White",
        size: "39mm",
        price: 600,
        currency: "USD",
        description:
          "The Tissot Le Locle is an elegant dress watch with a 39mm stainless steel case, Roman numerals, and an automatic movement.",
        images: [
          {
            url: "https://www.tissotwatches.com/media/catalog/product/T/0/T006.407.11.033.00_R_1.png",
            alt: "Tissot Le Locle front view",
          },
          {
            url: "https://i.redd.it/t7mdzswwnca41.jpg",
            alt: "Tissot Le Locle exhibition caseback",
          },
        ],
        rating: 4.5,
      },
      {
        id: "WT0000001008",
        name: "Seiko Prospex Diver",
        category: "watch",
        brand: "Seiko",
        country: "Japan",
        in_stock: true,
        color: "Blue",
        size: "44mm",
        price: 550,
        currency: "USD",
        description:
          "The Seiko Prospex Diver is a rugged dive watch with a 44mm case, unidirectional rotating bezel, and automatic movement.",
        images: [
          {
            url: "https://wornandwound.com/library/uploads/2024/08/SEIKO_SPB453_SPB451_1.jpg",
            alt: "Seiko Prospex Diver front view",
          },
          {
            url: "https://monochrome-watches.com/wp-content/uploads/2021/11/Seiko-Prospex-Diver-62MAS-Interpretations-140th-Anniversary-white-dial-blue-bezel-SPB213J1-hands-on-9.jpg",
            alt: "Seiko Prospex Diver bezel closeup",
          },
        ],
        rating: 4.6,
      },
      {
        id: "WT0000001009",
        name: "Citizen Eco-Drive Promaster",
        category: "watch",
        brand: "Citizen",
        country: "Japan",
        in_stock: true,
        color: "Black",
        size: "43mm",
        price: 425,
        currency: "USD",
        description:
          "The Citizen Eco-Drive Promaster is a solar-powered dive watch with a 43mm case, ISO certification, and unidirectional bezel.",
        images: [
          {
            url: "https://halifaxwatch.com/cdn/shop/products/bn0199-53x_beauty_3_1200x.jpg?v=1676410026",
            alt: "Citizen Eco-Drive Promaster front view",
          },
          {
            url: "https://www.watchspecialists.com/app/uploads/2021/05/citizen-BN0158-18X-promaster-green-dial-200m-divers-mens-watch-side-view.jpg",
            alt: "Citizen Eco-Drive side view",
          },
        ],
        rating: 4.4,
      },
      {
        id: "WT0000001010",
        name: "Casio G-Shock Mudmaster",
        category: "watch",
        brand: "Casio",
        country: "Japan",
        in_stock: true,
        color: "Green",
        size: "45mm",
        price: 350,
        currency: "USD",
        description:
          "The Casio G-Shock Mudmaster is a tough, shock-resistant watch designed for extreme conditions, with a 45mm case and multiple sensors.",
        images: [
          {
            url: "https://i.pinimg.com/originals/ea/f1/fc/eaf1fc5438a75e54fac0fd82f165b0c7.jpg",
            alt: "Casio G-Shock Mudmaster front view",
          },
          {
            url: "https://www.watchesonline.com/media/catalog/product/g/w/gwg-b1000-1aer_or03_sideview_right_web.jpg?width=700&height=700&store=watchesonline&image-type=image",
            alt: "Casio G-Shock Mudmaster side view",
          },
        ],
        rating: 4.7,
      },
      {
        id: "LT0000002001",
        name: "MacBook Pro 14-inch",
        category: "laptop",
        brand: "Apple",
        companyId: "2",
        country: "USA",
        in_stock: true,
        color: "Space Gray",
        size: "14-inch",
        price: 1999,
        currency: "USD",
        description:
          "The MacBook Pro 14-inch comes with the M1 Pro chip, a stunning Liquid Retina XDR display, and all-day battery life.",
        images: [
          {
            url: "https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/q:100/plain/s3://catalog-products/211123140154655652/230918160045689656.png@jpeg",
            alt: "MacBook Pro 14 front and side view",
          },
          {
            url: "https://static.tildacdn.pro/tild3663-3638-4431-b839-363265666464/4.jpg",
            alt: "MacBook Pro 14 display closeup",
          },
        ],
        rating: 4.9,
      },
      {
        id: "LT0000002002",
        name: "Dell XPS 13",
        category: "laptop",
        brand: "Dell",
        country: "USA",
        in_stock: true,
        color: "Silver",
        size: "13.4-inch",
        price: 1499,
        currency: "USD",
        description:
          "Dell XPS 13 features a 13.4-inch InfinityEdge display, 11th Gen Intel Core processors, and premium build quality.",
        images: [
          {
            url: "https://www.laptopsatcost.co.za/wp-content/uploads/2023/06/dell-xps-9320.png",
            alt: "Dell XPS 13 front and side view",
          },
          {
            url: "https://cdn.vox-cdn.com/thumbor/w04N5QkSampQOIatmlLAGplofws=/0x0:2040x1360/2400x1356/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24432609/236524_Dell_XPS_13_AKrales_0016.jpg",
            alt: "Dell XPS 13 keyboard closeup",
          },
        ],
        rating: 4.8,
      },
      {
        id: "LT0000002003",
        name: "HP Spectre x360",
        category: "laptop",
        brand: "HP",
        country: "USA",
        in_stock: false,
        color: "Nightfall Black",
        size: "13.5-inch",
        price: 1399,
        currency: "USD",
        description:
          "The HP Spectre x360 is a 2-in-1 convertible laptop with a 13.5-inch OLED touchscreen, Intel Evo platform, and long battery life.",
        images: [
          {
            url: "https://www.tmt.my/data/editor/sc-product/4247/NBB-HPKX36014EF2016TULarvee.png",
            alt: "HP Spectre x360 in tablet and laptop mode",
          },
          {
            url: "https://img-cdn.tnwcdn.com/image?fit=1200%2C900&height=900&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2021%2F08%2FHP-Spectre-x360-14-1-of-7.jpg&signature=0d2f21c8c102f0b5f8f935cee9d98ef6",
            alt: "HP Spectre x360 OLED display closeup",
          },
        ],
        rating: 4.7,
      },
      {
        id: "LT0000002004",
        name: "Lenovo ThinkPad X1 Carbon",
        category: "laptop",
        brand: "Lenovo",
        country: "China",
        in_stock: true,
        color: "Black",
        size: "14-inch",
        price: 1799,
        currency: "USD",
        description:
          "The Lenovo ThinkPad X1 Carbon is a business laptop with a 14-inch FHD display, Intel Core i7, and legendary keyboard.",
        images: [
          {
            url: "https://images-na.ssl-images-amazon.com/images/I/51FOmWwmqaL.jpg",
            alt: "Lenovo ThinkPad X1 Carbon front and side view",
          },
          {
            url: "https://notik.kz/wp-content/uploads/2022/02/1-2.png",
            alt: "Lenovo ThinkPad X1 Carbon keyboard closeup",
          },
        ],
        rating: 4.8,
      },
      {
        id: "LT0000002005",
        name: "Asus ROG Zephyrus G14",
        category: "laptop",
        brand: "Asus",
        country: "Taiwan",
        in_stock: true,
        color: "Eclipse Gray",
        size: "14-inch",
        price: 1599,
        currency: "USD",
        description:
          "The Asus ROG Zephyrus G14 is a gaming laptop with a 14-inch 120Hz display, AMD Ryzen 9, and NVIDIA RTX 3060 GPU.",
        images: [
          {
            url: "https://dlcdnwebimgs.asus.com/gain/67B92400-DFFC-42FA-B2D9-A4EA34FDAE29",
            alt: "Asus ROG Zephyrus G14 front and back view",
          },
          {
            url: "https://external-preview.redd.it/asus-rog-zephyrus-g14-2024-review-a-gaming-laptop-for-all-v0-bVP2f0qglm42yqt85byt7feJ5FG-wU2_g3e-U6mto54.jpg?auto=webp&s=6f22b612c8676815f69c3011cdf9c296c85278f2",
            alt: "Asus ROG Zephyrus G14 RGB lighting",
          },
        ],
        rating: 4.7,
      },
      {
        id: "LT0000002006",
        name: "Microsoft Surface Laptop 4",
        category: "laptop",
        brand: "Microsoft",
        country: "USA",
        in_stock: true,
        color: "Matte Black",
        size: "13.5-inch",
        price: 1299,
        currency: "USD",
        description:
          "The Microsoft Surface Laptop 4 is a sleek, powerful ultrabook with a 13.5-inch PixelSense display and Intel or AMD processors.",
        images: [
          {
            url: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE59By8?ver=1c41&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true",
            alt: "Microsoft Surface Laptop 4 front and side view",
          },
          {
            url: "https://assets.hardwarezone.com/img/2021/06/ms-surfacelaptop4-intro1.jpg",
            alt: "Microsoft Surface Laptop 4 display closeup",
          },
        ],
        rating: 4.6,
      },
      {
        id: "LT0000002007",
        name: "Razer Blade 15",
        category: "laptop",
        brand: "Razer",
        country: "USA",
        in_stock: true,
        color: "Black",
        size: "15.6-inch",
        price: 2299,
        currency: "USD",
        description:
          "The Razer Blade 15 is a high-performance gaming laptop with a 15.6-inch 240Hz display, Intel Core i7, and NVIDIA RTX 3070.",
        images: [
          {
            url: "https://m.media-amazon.com/images/I/71kcJxMggRL.jpg",
            alt: "Razer Blade 15 front and side view",
          },
          {
            url: "https://assets2.razerzone.com/images/pnx.assets/70d741427ce0ab9ad64b56a67a147877/razer-blade16-hotspot-desktop.webp",
            alt: "Razer Blade 15 RGB keyboard closeup",
          },
        ],
        rating: 4.9,
      },
      {
        id: "LT0000002008",
        name: "Acer Swift 3",
        category: "laptop",
        brand: "Acer",
        country: "Taiwan",
        in_stock: true,
        color: "Silver",
        size: "14-inch",
        price: 699,
        currency: "USD",
        description:
          "The Acer Swift 3 is a budget-friendly ultrabook with a 14-inch FHD display, AMD Ryzen 7, and lightweight design.",
        images: [
          {
            url: "https://itechstore.com.np/_ipx/f_webp/img/product/7fce432d-e6b1-4c7b-9ed7-82a156b79363/acer-swift-3-sf314-44-with-fingerprintbacklit-and-windows-11-in-pure-silver-01-main.webp",
            alt: "Acer Swift 3 front and side view",
          },
          {
            url: "https://www.notebookcheck.net/fileadmin/Notebooks/Acer/Swift_3_SF314-42-R4XJ/4zu3_Acer_Swift3_SF314_42.jpg",
            alt: "Acer Swift 3 side view closeup",
          },
        ],
        rating: 4.5,
      },
      {
        id: "LT0000002009",
        name: "LG Gram 17",
        category: "laptop",
        brand: "LG",
        country: "South Korea",
        in_stock: false,
        color: "Silver",
        size: "17-inch",
        price: 1799,
        currency: "USD",
        description:
          "The LG Gram 17 is an ultra-lightweight 17-inch laptop with an Intel Core i7 processor, long battery life, and vibrant display.",
        images: [
          { url: "https://m.media-amazon.com/images/I/81inFqt1MiL.jpg", alt: "LG Gram 17 front view" },
          { url: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/11/LG-gram-17-7.jpg", alt: "LG Gram 17 display closeup" },
        ],
        rating: 4.7,
      },
      {
        id: "LT0000002010",
        name: "Huawei MateBook X Pro",
        category: "laptop",
        brand: "Huawei",
        companyId: "3",
        country: "China",
        in_stock: true,
        color: "Emerald Green",
        size: "13.9-inch",
        price: 1599,
        currency: "USD",
        description:
          "The Huawei MateBook X Pro features a 13.9-inch 3K display, Intel Core i7, and an ultra-slim design for portability.",
        images: [
          {
            url: "https://ir-3.ozone.ru/s3/multimedia-1-0/c1000/7057893600.jpg",
            alt: "Huawei MateBook X Pro front view",
          },
          {
            url: "https://www.androidauthority.com/wp-content/uploads/2024/04/Huawei-MateBook-X-Pro-2024-thin-side-profile.jpg",
            alt: "Huawei MateBook X Pro side view",
          },
        ],
        rating: 4.6,
      },
      {
        id: "TB0000003001",
        name: "Apple iPad Pro 12.9-inch",
        category: "tablet",
        brand: "Apple",
        companyId: "2",
        country: "USA",
        in_stock: true,
        color: "Space Gray",
        size: "12.9-inch",
        price: 1099,
        currency: "USD",
        description:
          "The Apple iPad Pro features a stunning 12.9-inch Liquid Retina XDR display, M1 chip, and support for Apple Pencil and Magic Keyboard.",
        images: [
          {
            url: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-ipad-pro-12-wifi-spacegray-2020?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1626721066000",
            alt: "Apple iPad Pro 12.9-inch front view",
          },
          {
            url: "https://m.media-amazon.com/images/I/41cga3Y+0IL.jpg",
            alt: "Apple iPad Pro 12.9-inch with Apple Pencil",
          },
        ],
        rating: 4.9,
      },
      {
        id: "TB0000003002",
        name: "Samsung Galaxy Tab S8 Ultra",
        category: "tablet",
        brand: "Samsung",
        country: "South Korea",
        in_stock: true,
        color: "Graphite",
        size: "14.6-inch",
        price: 1149,
        currency: "USD",
        description:
          "The Samsung Galaxy Tab S8 Ultra offers a massive 14.6-inch AMOLED display, Snapdragon 8 Gen 1, and S Pen support for creativity.",
        images: [
          {
            url: "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1948981-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NzEzMTB8aW1hZ2UvanBlZ3xhREZrTDJneFppOHhNekk1T1RJek1UVTRPRE00TWk4eE9UUTRPVGd4TFRBeExtcHdaMTh4TWpBd1YzZ3hNakF3U0F8MjFiZWUwZDQ2YTE4ZGYwMTAzZmUzZjVhYTQzYmFlZmNkZWU4YTI4NWZmZTNmYzdjODU5MzAxYmFjMjBlNjk1OQ",
            alt: "Samsung Galaxy Tab S8 Ultra front view",
          },
          {
            url: "https://cdn.vox-cdn.com/thumbor/dFLySsNh3dtlqbcBb6CgjS2IDwY=/0x0:2040x1360/2000x1333/filters:focal(994x929:995x930)/cdn.vox-cdn.com/uploads/chorus_asset/file/23297844/dseifert_220305_5068_0001.jpg",
            alt: "Samsung Galaxy Tab S8 Ultra with S Pen",
          },
        ],
        rating: 4.8,
      },
      {
        id: "TB0000003003",
        name: "Microsoft Surface Pro 8",
        category: "tablet",
        brand: "Microsoft",
        country: "USA",
        in_stock: true,
        color: "Platinum",
        size: "13-inch",
        price: 999,
        currency: "USD",
        description:
          "The Surface Pro 8 combines the portability of a tablet with the power of a laptop, featuring a 13-inch PixelSense display and Intel Core i5.",
        images: [
          {
            url: "https://185504.selcdn.ru/static/ajpro.reshop.kz/catalog/631/207749437661a0d26f31597_original.jpg",
            alt: "Microsoft Surface Pro 8 front view",
          },
          {
            url: "https://eezepc.com/wp-content/uploads/2022/05/Surface-Pro-8.jpg",
            alt: "Microsoft Surface Pro 8 with keyboard",
          },
        ],
        rating: 4.7,
      },
      {
        id: "TB0000003004",
        name: "Lenovo Tab P11 Pro",
        category: "tablet",
        brand: "Lenovo",
        country: "China",
        in_stock: true,
        color: "Slate Grey",
        size: "11.5-inch",
        price: 499,
        currency: "USD",
        description:
          "The Lenovo Tab P11 Pro is a high-end tablet with an 11.5-inch OLED display, Snapdragon 730G, and quad JBL speakers for multimedia.",
        images: [
          {
            url: "https://m.media-amazon.com/images/I/71CdP9jojmL.jpg",
            alt: "Lenovo Tab P11 Pro front and back view",
          },
          {
            url: "https://cdn2.techbang.com/system/images/581523/original/43afc8a62462d5375313b26b8c63f657.jpg?1608617893",
            alt: "Lenovo Tab P11 Pro display closeup",
          },
        ],
        rating: 4.6,
      },
      {
        id: "TB0000003005",
        name: "Amazon Fire HD 10",
        category: "tablet",
        brand: "Amazon",
        country: "USA",
        in_stock: true,
        color: "Black",
        size: "10.1-inch",
        price: 149,
        currency: "USD",
        description:
          "The Amazon Fire HD 10 is an affordable tablet with a 10.1-inch 1080p display, powerful octa-core processor, and hands-free Alexa.",
        images: [
          {
            url: "https://m.media-amazon.com/images/G/01/kindle/journeys/MGVhYmUyMjAt/MGVhYmUyMjAt-NjM4NmZlN2Et._CB658972813_.jpg",
            alt: "Amazon Fire HD 10 front view",
          },
          {
            url: "https://media2.nbb-cdn.de/images/products/originals/FireHD10_Schwarz_4_67cb.jpg?size=780",
            alt: "Amazon Fire HD 10 side view",
          },
        ],
        rating: 4.3,
      },
      {
        id: "TB0000003006",
        name: "Huawei MatePad Pro",
        category: "tablet",
        brand: "Huawei",
        companyId: "3",
        country: "China",
        in_stock: true,
        color: "Midnight Gray",
        size: "10.8-inch",
        price: 649,
        currency: "USD",
        description:
          "The Huawei MatePad Pro features a 10.8-inch display, Kirin 990 chip, and support for M-Pencil, making it ideal for creativity and productivity.",
        images: [
          {
            url: "https://m.media-amazon.com/images/I/71SEX8cEfYL.jpg",
            alt: "Huawei MatePad Pro front and side view",
          },
          {
            url: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/tablets/matepad-pro-13-2/img/hero/en-kv/huawei-matepad-pro-13-2-kv.jpg",
            alt: "Huawei MatePad Pro with M-Pencil",
          },
        ],
        rating: 4.5,
      },
      {
        id: "TB0000003007",
        name: "Google Pixel Slate",
        category: "tablet",
        brand: "Google",
        country: "USA",
        in_stock: false,
        color: "Midnight Blue",
        size: "12.3-inch",
        price: 799,
        currency: "USD",
        description:
          "The Google Pixel Slate is a powerful Chrome OS tablet with a 12.3-inch Molecular Display, Intel Core m3, and multitasking capabilities.",
        images: [
          {
            url: "https://cdn11.bigcommerce.com/s-o9pppsyjzh/images/stencil/1280x1280/products/411858/12131071/N2132251__1__68906.1689919380.jpg?c=1",
            alt: "Google Pixel Slate front view",
          },
          {
            url: "https://www.androidauthority.com/wp-content/uploads/2018/11/Google-Pixel-Slate-Review-22.jpg",
            alt: "Google Pixel Slate side view",
          },
        ],
        rating: 4.4,
      },
      {
        id: "TB0000003008",
        name: "Xiaomi Pad 5",
        category: "tablet",
        brand: "Xiaomi",
        companyId: "5",
        country: "China",
        in_stock: true,
        color: "Pearl White",
        size: "11-inch",
        price: 399,
        currency: "USD",
        description:
          "The Xiaomi Pad 5 features an 11-inch WQHD+ display with a 120Hz refresh rate, Snapdragon 860, and long battery life for entertainment and productivity.",
        images: [
          { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOCmAchQa_t2fKraYGMjNLf8gG9mtlIs0Tag&s", alt: "Xiaomi Pad 5 front view" },
          { url: "https://ae01.alicdn.com/kf/H0d8e3c876ac64e79b76d60ccd6e0bff7M.jpg_640x640q90.jpg", alt: "Xiaomi Pad 5 back view" },
        ],
        rating: 4.6,
      },
      {
        id: "TB0000003009",
        name: "Sony Xperia Z4 Tablet",
        category: "tablet",
        brand: "Sony",
        companyId: "4",
        country: "Japan",
        in_stock: false,
        color: "Black",
        size: "10.1-inch",
        price: 699,
        currency: "USD",
        description:
          "The Sony Xperia Z4 Tablet is a sleek and powerful Android tablet featuring a 10.1-inch 2K display, waterproof design, and Snapdragon 810.",
        images: [
          {
            url: "https://cdn11.bigcommerce.com/s-o9pppsyjzh/images/stencil/1280x1280/products/387537/12132902/N020268__1__62763.1689922484.jpg?c=1",
            alt: "Sony Xperia Z4 Tablet front view",
          },
          {
            url: "https://i.ebayimg.com/images/g/yAAAAOSw-vdfyN8Q/s-l1200.jpg",
            alt: "Sony Xperia Z4 Tablet side view",
          },
        ],
        rating: 4.5,
      },
      {
        id: "TB0000003010",
        name: "Asus ZenPad 3S 10",
        category: "tablet",
        brand: "Asus",
        country: "Taiwan",
        in_stock: true,
        color: "Slate Grey",
        size: "9.7-inch",
        price: 329,
        currency: "USD",
        description:
          "The Asus ZenPad 3S 10 features a 9.7-inch 2K IPS display, powerful Hexa-core processor, and high-quality audio for entertainment on the go.",
        images: [
          {
            url: "https://m.media-amazon.com/images/I/717YF0nz70L.jpg",
            alt: "Asus ZenPad 3S 10 front view",
          },
          {
            url: "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/ZenPad_3s_10_Z550M/4_zu_3_zenpad_3s_10.jpg",
            alt: "Asus ZenPad 3S 10 side view",
          },
        ],
        rating: 4.4,
      },
    ],
  }),
});
