import fs from 'fs';
import {getPlaceInfo} from "./place-API";

interface CityName {
    city: string;
    districts: string[];
}

export async function testLoop() {
    const data: CityName[] =[
        {
            city: "Nicosia",
            districts: [
                "Akıncılar",
                "Alayköy",
                "Balıkesir",
                "Beyköy",
                "Cihangir",
                "Çağlayan",
                "Çukurova",
                "Değirmenlik",
                "Demirhan",
                "Dilekkaya",
                "Dumlupınar",
                "Düzova",
                "Erdemli",
                "Gaziköy",
                "Gelibolu",
                "Göçmenköy",
                "Gökhan",
                "Gönyeli",
                "Gürpınar",
                "Hamitköy",
                "Haspolat",
                "Kalavaç",
                "Kanlıköy",
                "Kırklar",
                "Kızılbaş",
                "Köşklüçiftlik",
                "Kumsal",
                "Küçük Kaymaklı",
                "Lefkoşa Surlariçi",
                "Marmara",
                "Meriç",
                "Metehan",
                "Minareliköy",
                "Ortaköy",
                "Sanayi Bölgesi",
                "Taşkınköy",
                "Türkeli",
                "Yeniceköy",
                "Yenikent",
                "Yenişehir",
                "Yılmazköy",
                "Yiğitler"
            ]

        },
        {
            city: "Kyrenia",
            districts: [
                "Ağırdağ",
                "Akçiçek",
                "Akdeniz",
                "Alagadi",
                "Alemdağ",
                "Alsancak",
                "Arapköy",
                "Aşağı Girne",
                "Bahçeli",
                "Bellapais",
                "Beşparmak",
                "Boğaz",
                "Çamlıbel",
                "Çatalköy",
                "Dağyolu",
                "Dikmen",
                "Doğanköy",
                "Edremit",
                "Esentepe",
                "Geçitköy",
                "Girne Merkez",
                "Göçeri",
                "Hisarköy",
                "Ilgaz",
                "İncesu",
                "Karaağaç",
                "Karakum",
                "Karaoğlanoğlu",
                "Karmi",
                "Karşıyaka",
                "Kayalar",
                "Kılıçarslan",
                "Koruçam",
                "Kozan",
                "Kömürcü",
                "Lapta",
                "Malatya",
                "Ozanköy",
                "Pınarbaşı",
                "Sadrazamköy",
                "Şirinevler",
                "Taşkent",
                "Tepebaşı",
                "Türk Mahallesi",
                "Yeşiltepe",
                "Yukarı Girne",
                "Zeytinlik"
            ]
        },
        {
            city: "Famagusta",
            districts: [
                "Akdoğan",
                "Akova",
                "Alaniçi",
                "Arıdamı",
                "Aslanköy",
                "Atlılar",
                "Baykal",
                "Beyarmudu",
                "Çanakkale",
                "Çayönü",
                "Çınarlı",
                "Dörtyol",
                "Dumlupınar",
                "Geçitkale",
                "Gönendere",
                "Gülseren",
                "Güvercinlik",
                "İnönü",
                "Kaleiçi",
                "Karakol",
                "Korkuteli",
                "Köprülü",
                "Kurudere",
                "Kuzucuk",
                "Küçük Erenköy",
                "Mağusa Merkez",
                "Mallıdağ",
                "Maraş",
                "Mormenekşe",
                "Mutluyaka",
                "Nergisli",
                "Paşaköy",
                "Pınarlı",
                "Pirhan",
                "Sakarya",
                "Salamis",
                "Serdarlı",
                "Sütlüce",
                "Tatlısu",
                "Tirmen",
                "Turunçlu",
                "Tuzla",
                "Türkmenköy",
                "Ulukışla",
                "Vadili",
                "Yamaçköy",
                "Yeni Boğaziçi",
                "Yıldırım"
            ]
        },
        {
            city: "Guzelyurt",
            districts: [
                "Akçay",
                "Aşağı Bostancı",
                "Aydınköy",
                "Güzelyurt Merkez",
                "Kalkanlı",
                "Serhatköy",
                "Yayla",
                "Yukarı Bostancı",
                "Zümrütköy"
            ]
        },
        {
            city: "Iskele",
            districts: [
                "Ağıllar",
                "Altınova",
                "Ardahan",
                "Avtepe",
                "Aygün",
                "Bafra",
                "Bahçeler",
                "Balalan",
                "Boğaz",
                "Boğaziçi",
                "Boğaztepe - Monarga",
                "Boltaşlı",
                "Büyükkonuk",
                "Çayırova",
                "Derince",
                "Dipkarpaz",
                "Ergazi",
                "Esenköy",
                "İskele Merkez",
                "Kaleburnu",
                "Kalecik",
                "Kantara",
                "Kaplıca",
                "Kilitkaya",
                "Kumyalı",
                "Kurtuluş",
                "Kuruova",
                "Kuzucuk",
                "Long Beach",
                "Mehmetçik",
                "Mersinlik",
                "Ötüken",
                "Pamuklu",
                "Sazlıköy",
                "Sınırüstü",
                "Sipahi",
                "Taşlıca",
                "Topçuköy",
                "Turnalar",
                "Tuzluca",
                "Yarköy",
                "Yedikonuk",
                "Yeni Erenköy",
                "Yeşilköy",
                "Ziyamet"
            ]
        },
        {
            city: "Lefke",
            districts: [
                "Bağlıköy",
                "Cengizköy",
                "Doğancı",
                "Gaziveren",
                "Gemikonağı",
                "Lefke",
                "Yedidalga",
                "Yeşilırmak",
                "Yeşilyurt"
            ]
        }
    ];
    const cityDistricts = [];

    for (const city of data) {
        for (const district of city.districts) {
            console.log(`City: ${city.city} - ${district}`);
          const result =  await getPlaceInfo(city.city, district);
          if(result){
              cityDistricts.push({
                  city: city.city,
                  district: district,
                  map: {
                      lat: result.lat,
                      lng: result.lng,
                  },
                  place_id: result.place_id
              })
          }else{
              cityDistricts.push({
                  city: city.city,
                  district: district,
                  map: null,
                  place_id: null
              })
          }


            ///
        }
    }

    // console.log(cityDistricts);
    const fileName = "output.json";
    writeDataArrayToJsonFile(cityDistricts, fileName);
}


interface Data {
    [key: string]: any;
}

function writeDataArrayToJsonFile(data: Data[], fileName: string): void {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(fileName, jsonData);
        console.log(`Data has been written to ${fileName}`);
    } catch (error) {
        console.error(`Error writing data to ${fileName}:`, error);
    }
}