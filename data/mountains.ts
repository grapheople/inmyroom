import { CompetitionItem } from "@/types/competition/CompetitionItem";
import { Mountain } from "@/types/Mountain";

export const mountainData: Mountain[] = [
    {
        "id": 1,
        "name": "감악산",
        "elevation": 675,
        "location": "서울, 인천, 경기",
        "description": "감악산은 경기도 파주와 양주시 사이에 위치한 산으로, 도봉산과 함께 경기 5악 중 하나로 꼽힙니다. 정상에서는 한강과 임진강을 비롯해 주변 자연경관을 감상할 수 있습니다. 다양한 등산로와 접근성이 좋아 많은 이들이 찾는 산입니다.",
        "priority": 0
    },
    {
        "id": 2,
        "name": "관악산",
        "elevation": 632,
        "location": "서울, 인천, 경기",
        "description": "관악산은 서울과 과천 경계에 위치한 산으로, 도심 속 등산 명소로 유명합니다. 정상인 연주대에서는 서울 전경을 감상할 수 있습니다. 암릉 구간이 많아 등산의 재미를 더해주는 산입니다.",
        "priority": 98
    },
    {
        "id": 3,
        "name": "광교산",
        "elevation": 582,
        "location": "서울, 인천, 경기",
        "description": "광교산은 경기도 수원과 용인에 걸쳐 있는 산으로, 가족 단위 등산객들에게 인기 있습니다. 부드러운 산세와 광교저수지 등 다양한 볼거리를 제공합니다. 초보자도 쉽게 오를 수 있는 산입니다.",
        "priority": 0
    },
    {
        "id": 4,
        "name": "검단산",
        "elevation": 657,
        "location": "서울, 인천, 경기",
        "description": "검단산은 하남시에 위치한 산으로, 한강과 서울 전경을 감상할 수 있는 명소입니다. 가벼운 산행을 즐기기에 적합하며, 다양한 코스가 마련되어 있습니다. 서울 근교의 대표적인 휴식처입니다.",
        "priority": 0
    },
    {
        "id": 5,
        "name": "고려산",
        "elevation": 436,
        "location": "서울, 인천, 경기",
        "description": "고려산은 인천 강화군에 위치한 산으로, 고려 시대의 유적이 많아 역사적 가치가 높습니다. 봄철에는 진달래 군락지가 유명하며, 등산로도 완만해 가족 단위 산행에 적합합니다.",
        "priority": 0
    },
    {
        "id": 6,
        "name": "남한산",
        "elevation": 522,
        "location": "서울, 인천, 경기",
        "description": "남한산은 경기도 성남과 광주 사이에 위치한 산으로, 남한산성 유적이 있는 곳으로 잘 알려져 있습니다. 역사와 자연을 동시에 즐길 수 있는 산입니다. 가벼운 산행으로 적합합니다.",
        "priority": 0
    },
    {
        "id": 7,
        "name": "도봉산",
        "elevation": 740,
        "location": "서울, 인천, 경기",
        "description": "도봉산은 서울과 경기도 의정부에 걸쳐 있는 산으로, 기암괴석과 수려한 자연 경관으로 유명합니다. 암벽 등반과 하이킹을 즐기기에 좋은 산으로, 많은 등산객들이 찾습니다.",
        "priority": 0
    },
    {
        "id": 8,
        "name": "마니산",
        "elevation": 472,
        "location": "서울, 인천, 경기",
        "description": "마니산은 강화도에 위치한 산으로, 단군이 하늘에 제사를 지냈다는 참성단이 유명합니다. 역사와 문화가 깃든 명소로, 봄에는 철쭉이 아름답게 핍니다.",
        "priority": 0
    },
    {
        "id": 9,
        "name": "명지산",
        "elevation": 1267,
        "location": "서울, 인천, 경기",
        "description": "명지산은 경기도 가평에 위치한 산으로, 높은 해발과 탁 트인 경관이 특징입니다. 특히 가을 단풍으로 유명하며, 중급 이상의 등산로가 있어 도전 정신을 자극합니다.",
        "priority": 0
    },
    {
        "id": 10,
        "name": "백운산",
        "elevation": 940,
        "location": "서울, 인천, 경기",
        "description": "백운산은 경기도 포천에 위치한 산으로, 정상에서 바라보는 경치가 아름답습니다. 수려한 자연과 함께 다양한 야생 동식물이 서식하는 곳으로 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 11,
        "name": "북한산",
        "elevation": 836,
        "location": "서울, 인천, 경기",
        "description": "북한산은 서울 북부에 위치하며, 아름다운 암릉과 다양한 등산 코스로 유명합니다. 국립공원으로 지정되어 있으며, 역사적인 북한산성도 볼 수 있습니다.",
        "priority": 98
    },
    {
        "id": 12,
        "name": "불암산",
        "elevation": 508,
        "location": "서울, 인천, 경기",
        "description": "불암산은 서울 노원구와 남양주 경계에 위치하며, 이름처럼 바위가 많은 산입니다. 초보자도 쉽게 오를 수 있는 등산 코스가 마련되어 있습니다.",
        "priority": 0
    },
    {
        "id": 13,
        "name": "서리산",
        "elevation": 832,
        "location": "서울, 인천, 경기",
        "description": "서리산은 경기 가평에 위치하며, 봄철 진달래와 가을 단풍으로 유명한 산입니다. 완만한 경사로 초보자도 쉽게 산행을 즐길 수 있습니다.",
        "priority": 0
    },
    {
        "id": 14,
        "name": "수락산",
        "elevation": 638,
        "location": "서울, 인천, 경기",
        "description": "수락산은 서울과 남양주에 걸쳐 있는 산으로, 수많은 계곡과 암릉 구간이 특징입니다. 서울 근교의 인기 등산 코스로 손꼽힙니다.",
        "priority": 0
    },
    {
        "id": 15,
        "name": "수리산",
        "elevation": 475,
        "location": "서울, 인천, 경기",
        "description": "수리산은 군포와 안양에 걸쳐 있는 산으로, 산림욕과 가벼운 산행을 즐기기에 적합합니다. 다양한 숲길이 있어 가족 단위 방문객들에게 인기가 많습니다.",
        "priority": 0
    },
    {
        "id": 16,
        "name": "소요산",
        "elevation": 587,
        "location": "서울, 인천, 경기",
        "description": "소요산은 동두천에 위치하며, 산세가 부드럽고 계곡이 아름다워 가벼운 산책 코스로 인기가 높습니다. 사계절 내내 등산객이 많은 명소입니다.",
        "priority": 0
    },
    {
        "id": 17,
        "name": "용문산",
        "elevation": 1157,
        "location": "서울, 인천, 경기",
        "description": "용문산은 경기 양평에 위치하며, 천년 고찰인 용문사가 자리 잡고 있습니다. 특히 봄철 철쭉과 가을 단풍이 아름답기로 유명합니다.",
        "priority": 0
    },
    {
        "id": 18,
        "name": "운악산",
        "elevation": 935,
        "location": "서울, 인천, 경기",
        "description": "운악산은 포천과 가평 사이에 위치한 산으로, 암릉과 협곡이 어우러진 풍경이 인상적입니다. 중급 이상의 산행을 원하는 등산객들에게 추천됩니다.",
        "priority": 0
    },
    {
        "id": 19,
        "name": "유명산",
        "elevation": 862,
        "location": "서울, 인천, 경기",
        "description": "유명산은 경기 가평에 위치하며, 숲이 울창하고 경치가 뛰어나 산림욕과 캠핑 명소로 알려져 있습니다. 완만한 등산로로 초보자에게 적합합니다.",
        "priority": 0
    },
    {
        "id": 20,
        "name": "연인산",
        "elevation": 1068,
        "location": "서울, 인천, 경기",
        "description": "연인산은 경기 가평에 위치한 산으로, 이름처럼 연인들이 함께 산행을 즐기기 좋은 명소입니다. 철쭉 군락과 시원한 계곡이 매력적입니다.",
        "priority": 0
    },
    {
        "id": 21,
        "name": "천마산",
        "elevation": 812,
        "location": "서울, 인천, 경기",
        "description": "천마산은 남양주에 위치하며, 접근성이 좋아 주말 산행지로 인기가 많습니다. 정상에서는 남양주 일대를 조망할 수 있습니다.",
        "priority": 0
    },
    {
        "id": 22,
        "name": "청계산",
        "elevation": 849,
        "location": "서울, 인천, 경기",
        "description": "청계산은 과천과 의왕 사이에 위치하며, 서울 근교 산행지로 유명합니다. 숲이 울창하고 등산로가 잘 정비되어 있습니다.",
        "priority": 0
    },
    {
        "id": 23,
        "name": "축령산",
        "elevation": 879,
        "location": "서울, 인천, 경기",
        "description": "축령산은 경기 남양주에 위치하며, 잣나무 숲이 울창한 곳으로 알려져 있습니다. 산림욕과 하이킹을 즐기기에 적합한 산입니다.",
        "priority": 0
    },
    {
        "id": 24,
        "name": "화악산",
        "elevation": 1468,
        "location": "서울, 인천, 경기",
        "description": "화악산은 경기 가평과 강원 화천 사이에 위치한 산으로, 높은 해발과 험준한 산세가 특징입니다. 겨울철 설경이 특히 아름답습니다.",
        "priority": 0
    },
    {
        "id": 25,
        "name": "가리산",
        "elevation": 1051,
        "location": "강원",
        "description": "가리산은 강원도 홍천에 위치하며, 울창한 소나무 숲과 산세가 조화로운 산입니다. 계곡과 숲길이 아름다워 사계절 내내 인기 있습니다.",
        "priority": 0
    },
    {
        "id": 26,
        "name": "가리왕산",
        "elevation": 1561,
        "location": "강원",
        "description": "가리왕산은 평창에 위치하며, 풍부한 자연 경관과 생태계를 자랑합니다. 동계 올림픽 스키 경기장으로도 활용된 산입니다.",
        "priority": 0
    },
    {
        "id": 27,
        "name": "감악산",
        "elevation": 1203,
        "location": "강원",
        "description": "감악산은 강원도 삼척에 위치하며, 고즈넉한 산세와 함께 역사적인 유적지가 곳곳에 자리하고 있습니다.",
        "priority": 0
    },
    {
        "id": 28,
        "name": "계방산",
        "elevation": 1577,
        "location": "강원",
        "description": "계방산은 평창과 홍천 사이에 위치하며, 국내에서 다섯 번째로 높은 산입니다. 겨울철 설경이 특히 아름답습니다.",
        "priority": 0
    },
    {
        "id": 29,
        "name": "공작산",
        "elevation": 887,
        "location": "강원",
        "description": "공작산은 강원도 횡성에 위치하며, 이름처럼 산세가 공작새의 모습을 닮았습니다. 산림욕과 캠핑에 적합한 곳입니다.",
        "priority": 0
    },
    {
        "id": 30,
        "name": "금대봉",
        "elevation": 1418,
        "location": "강원",
        "description": "금대봉은 태백에 위치하며, 하늘을 찌를 듯한 높이와 장엄한 경치로 유명합니다. 백두대간 종주 코스의 일환으로도 잘 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 31,
        "name": "대암산",
        "elevation": 1304,
        "location": "강원",
        "description": "대암산은 철원과 인제에 걸쳐 있으며, 수많은 동식물과 고산 식물이 서식하는 생태의 보고입니다.",
        "priority": 0
    },
    {
        "id": 32,
        "name": "덕항산",
        "elevation": 1071,
        "location": "강원",
        "description": "덕항산은 강원도 태백과 삼척에 걸쳐 있으며, 석회암 지대와 다양한 지질학적 특징이 있는 산입니다.",
        "priority": 0
    },
    {
        "id": 33,
        "name": "두타산",
        "elevation": 1353,
        "location": "강원",
        "description": "두타산은 삼척과 동해에 걸쳐 있으며, 주위에 무릉계곡이 있어 명승지로 손꼽힙니다. 산과 계곡의 조화로운 풍경이 돋보입니다.",
        "priority": 0
    },
    {
        "id": 34,
        "name": "마대산",
        "elevation": 1052,
        "location": "강원",
        "description": "마대산은 강원도 영월에 위치하며, 경사가 완만해 초보자도 쉽게 오를 수 있는 산입니다. 자연 경관이 뛰어나 많은 이들에게 사랑받고 있습니다.",
        "priority": 0
    },
    {
        "id": 35,
        "name": "민둥산",
        "elevation": 1119,
        "location": "강원",
        "description": "민둥산은 정선에 위치하며, 이름과는 달리 숲과 초지가 조화된 경관을 자랑합니다. 억새밭으로도 유명합니다.",
        "priority": 0
    },
    {
        "id": 36,
        "name": "문암산",
        "elevation": 1052,
        "location": "강원",
        "description": "문암산은 강원도 정선에 위치하며, 아늑한 산세와 숲길로 편안한 산행을 즐기기 좋은 산입니다.",
        "priority": 0
    },
    {
        "id": 37,
        "name": "명성산",
        "elevation": 922,
        "location": "강원",
        "description": "명성산은 철원에 위치하며, 억새가 장관을 이루는 곳으로 가을철에 많은 방문객이 찾습니다.",
        "priority": 0
    },
    {
        "id": 38,
        "name": "선자령",
        "elevation": 1157,
        "location": "강원",
        "description": "선자령은 평창과 강릉에 걸쳐 있으며, 풍력 발전 단지와 초원 풍경이 어우러진 독특한 산입니다.",
        "priority": 0
    },
    {
        "id": 39,
        "name": "방태산",
        "elevation": 1444,
        "location": "강원",
        "description": "방태산은 인제에 위치하며, 원시림과 계곡이 어우러진 생태의 보고입니다. 가을 단풍 명소로도 잘 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 40,
        "name": "백덕산",
        "elevation": 1350,
        "location": "강원",
        "description": "백덕산은 평창에 위치하며, 다양한 야생화가 피는 여름철 산행으로 유명합니다. 백두대간의 한 부분을 이루고 있습니다.",
        "priority": 0
    },
    {
        "id": 41,
        "name": "백운산",
        "elevation": 1216,
        "location": "강원",
        "description": "백운산은 강원도 홍천과 인제에 걸쳐 있으며, 수려한 자연경관과 맑은 계곡으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 42,
        "name": "삼악산",
        "elevation": 654,
        "location": "강원",
        "description": "삼악산은 춘천에 위치하며, 춘천호와 어우러진 경치가 매력적입니다. 가족 단위의 산행지로도 인기가 많습니다.",
        "priority": 0
    },
    {
        "id": 43,
        "name": "설악산",
        "elevation": 1708,
        "location": "강원",
        "description": "설악산은 대한민국을 대표하는 명산으로, 웅장한 암벽과 사계절의 아름다움이 두드러집니다. UNESCO 생물권 보전지역으로도 지정되어 있습니다.",
        "priority": 100
    },
    {
        "id": 44,
        "name": "오대산",
        "elevation": 1563,
        "location": "강원",
        "description": "오대산은 평창에 위치하며, 천년 고찰 월정사와 전나무 숲길로 유명합니다. 고즈넉한 분위기로 마음을 치유할 수 있는 곳입니다.",
        "priority": 0
    },
    {
        "id": 45,
        "name": "오봉산",
        "elevation": 877,
        "location": "강원",
        "description": "오봉산은 강원도 철원에 위치하며, 다섯 개의 봉우리가 특징입니다. 산행 중 탁 트인 경관을 감상할 수 있습니다.",
        "priority": 0
    },
    {
        "id": 46,
        "name": "용화산",
        "elevation": 878,
        "location": "강원",
        "description": "용화산은 춘천과 화천에 걸쳐 있으며, 산 정상에서 보는 경치가 일품입니다. 하이킹과 자연 탐방에 적합한 산입니다.",
        "priority": 0
    },
    {
        "id": 47,
        "name": "점봉산",
        "elevation": 1424,
        "location": "강원",
        "description": "점봉산은 인제에 위치하며, 원시림과 고산 식물이 서식하는 생태의 보고입니다. 한국의 자연 보호구역 중 하나입니다.",
        "priority": 0
    },
    {
        "id": 48,
        "name": "치악산",
        "elevation": 1288,
        "location": "강원",
        "description": "치악산은 원주와 횡성에 걸쳐 있으며, 고찰과 계곡이 어우러져 역사와 자연을 동시에 느낄 수 있습니다.",
        "priority": 0
    },
    {
        "id": 49,
        "name": "태백산",
        "elevation": 1566,
        "location": "강원",
        "description": "태백산은 강원도 태백시에 위치하며, 한국의 영산으로 불립니다. 특히 천제단과 겨울철 눈꽃이 유명합니다.",
        "priority": 0
    },
    {
        "id": 50,
        "name": "태화산",
        "elevation": 1027,
        "location": "강원",
        "description": "태화산은 강원도 철원에 위치하며, 비교적 낮은 해발 고도로 가벼운 산행을 즐길 수 있는 곳입니다.",
        "priority": 0
    },
    {
        "id": 51,
        "name": "팔봉산",
        "elevation": 327,
        "location": "강원",
        "description": "팔봉산은 홍천에 위치하며, 여덟 개의 봉우리가 독특한 모습을 이루고 있습니다. 가벼운 등산 코스로 인기가 많습니다.",
        "priority": 0
    },
    {
        "id": 52,
        "name": "함백산",
        "elevation": 1573,
        "location": "강원",
        "description": "함백산은 태백에 위치하며, 한국에서 여섯 번째로 높은 산입니다. 특히 고산지대의 특색 있는 식생이 유명합니다.",
        "priority": 0
    },
    {
        "id": 53,
        "name": "가야산",
        "elevation": 1432,
        "location": "충남",
        "description": "가야산은 충남과 전북에 걸쳐 있으며, 소나무 숲과 계곡이 어우러진 자연경관이 돋보입니다.",
        "priority": 0
    },
    {
        "id": 54,
        "name": "광덕산",
        "elevation": 699,
        "location": "충남",
        "description": "광덕산은 천안과 아산 사이에 위치하며, 가벼운 산행 코스로 사랑받는 산입니다.",
        "priority": 0
    },
    {
        "id": 55,
        "name": "계룡산",
        "elevation": 845,
        "location": "충남",
        "description": "계룡산은 국립공원으로 지정되어 있으며, 도교와 불교의 역사가 깃든 명산입니다.",
        "priority": 0
    },
    {
        "id": 56,
        "name": "대둔산",
        "elevation": 878,
        "location": "충남",
        "description": "대둔산은 기암괴석과 케이블카로 유명하며, '호남의 금강'으로 불립니다.",
        "priority": 0
    },
    {
        "id": 57,
        "name": "덕숭산",
        "elevation": 495,
        "location": "충남",
        "description": "덕숭산은 예산에 위치하며, 사찰인 수덕사와 함께 산행을 즐길 수 있는 곳입니다.",
        "priority": 0
    },
    {
        "id": 58,
        "name": "서대산",
        "elevation": 904,
        "location": "충남",
        "description": "서대산은 금산군에 위치하며, 정상에서 충청남도의 풍경을 한눈에 볼 수 있습니다.",
        "priority": 0
    },
    {
        "id": 59,
        "name": "오서산",
        "elevation": 790,
        "location": "충남",
        "description": "오서산은 서해안의 일몰과 억새로 유명하며, 가을철 방문객이 많습니다.",
        "priority": 0
    },
    {
        "id": 60,
        "name": "용봉산",
        "elevation": 381,
        "location": "충남",
        "description": "용봉산은 홍성에 위치하며, 가벼운 트레킹과 바위산행을 즐길 수 있는 명소입니다.",
        "priority": 0
    },
    {
        "id": 61,
        "name": "진악산",
        "elevation": 732,
        "location": "충남",
        "description": "진악산은 논산에 위치하며, 조용하고 한적한 산행 코스로 잘 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 62,
        "name": "칠갑산",
        "elevation": 561,
        "location": "충남",
        "description": "칠갑산은 청양에 위치하며, 동요 '칠갑산'의 배경이 된 산으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 63,
        "name": "구병산",
        "elevation": 876,
        "location": "충북",
        "description": "구병산은 괴산에 위치하며, 병풍처럼 둘러싼 바위 능선이 특징인 산입니다.",
        "priority": 0
    },
    {
        "id": 64,
        "name": "금수산",
        "elevation": 1016,
        "location": "충북",
        "description": "금수산은 단양에 위치하며, 가파른 능선과 단양강의 경치를 즐길 수 있는 명소입니다.",
        "priority": 0
    },
    {
        "id": 65,
        "name": "도락산",
        "elevation": 964,
        "location": "충북",
        "description": "도락산은 단양의 절경을 감상할 수 있는 산으로, 독특한 암릉 지형이 인상적입니다.",
        "priority": 0
    },
    {
        "id": 66,
        "name": "민주지산",
        "elevation": 1241,
        "location": "충북",
        "description": "민주지산은 영동에 위치하며, 주변 계곡과 산림이 우거진 자연경관으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 67,
        "name": "소백산",
        "elevation": 1439,
        "location": "충북",
        "description": "소백산은 국립공원으로 지정된 산으로, 철쭉 군락과 사계절 아름다움을 자랑합니다.",
        "priority": 0
    },
    {
        "id": 68,
        "name": "속리산",
        "elevation": 1058,
        "location": "충북",
        "description": "속리산은 법주사가 위치한 명산으로, 울창한 숲과 깊은 계곡이 특징입니다.",
        "priority": 0
    },
    {
        "id": 69,
        "name": "월악산",
        "elevation": 1094,
        "location": "충북",
        "description": "월악산은 단양과 충주에 걸쳐 있으며, 기암괴석과 충주호의 조화가 돋보입니다.",
        "priority": 0
    },
    {
        "id": 70,
        "name": "천태산",
        "elevation": 715,
        "location": "충북",
        "description": "천태산은 영동에 위치하며, 불교 문화와 어우러진 산으로 편안한 산행이 가능합니다.",
        "priority": 0
    },
    {
        "id": 71,
        "name": "청화산",
        "elevation": 984,
        "location": "충북",
        "description": "청화산은 괴산과 증평 경계에 위치하며, 울창한 숲과 맑은 계곡이 있는 산입니다.",
        "priority": 0
    },
    {
        "id": 72,
        "name": "칠보산",
        "elevation": 778,
        "location": "충북",
        "description": "칠보산은 영동과 보은 사이에 위치하며, 완만한 경사로 편안한 산행이 가능한 곳입니다.",
        "priority": 0
    },
    {
        "id": 73,
        "name": "희양산",
        "elevation": 998,
        "location": "충북",
        "description": "희양산은 단양과 제천 경계에 위치하며, 가을 단풍으로 유명한 산입니다.",
        "priority": 0
    },
    {
        "id": 74,
        "name": "가야산",
        "elevation": 1430,
        "location": "대구, 경북",
        "description": "가야산은 해인사가 위치한 산으로, 유네스코 세계문화유산으로 지정된 아름다운 산입니다.",
        "priority": 0
    },
    {
        "id": 75,
        "name": "금오산",
        "elevation": 976,
        "location": "대구, 경북",
        "description": "금오산은 구미의 랜드마크로, 금오지 호수와 함께 도심 속 자연을 느낄 수 있는 명소입니다.",
        "priority": 0
    },
    {
        "id": 76,
        "name": "경주 남산",
        "elevation": 494,
        "location": "대구, 경북",
        "description": "경주 남산은 신라의 역사와 불교 유적이 풍부한 산으로, 문화재 탐방이 가능합니다.",
        "priority": 0
    },
    {
        "id": 77,
        "name": "내연산",
        "elevation": 710,
        "location": "대구, 경북",
        "description": "내연산은 포항에 위치하며, 유명한 폭포 군락지와 사찰이 자리한 산입니다.",
        "priority": 0
    },
    {
        "id": 78,
        "name": "대야산",
        "elevation": 931,
        "location": "대구, 경북",
        "description": "대야산은 상주와 문경에 걸쳐 있으며, 가파른 암릉과 빼어난 경치로 유명합니다.",
        "priority": 0
    },
    {
        "id": 79,
        "name": "문수산",
        "elevation": 376,
        "location": "대구, 경북",
        "description": "문수산은 경산에 위치하며, 도심에서 가까운 산책로와 소규모 산행으로 인기가 있습니다.",
        "priority": 0
    },
    {
        "id": 80,
        "name": "비슬산",
        "elevation": 1083,
        "location": "대구, 경북",
        "description": "비슬산은 대구 근교의 산으로, 봄철 철쭉 군락지로 유명한 명산입니다.",
        "priority": 0
    },
    {
        "id": 81,
        "name": "성인봉",
        "elevation": 986,
        "location": "대구, 경북",
        "description": "성인봉은 울릉도에 위치한 산으로, 울릉도의 자연 생태를 감상할 수 있는 명소입니다.",
        "priority": 0
    },
    {
        "id": 82,
        "name": "운문산",
        "elevation": 1195,
        "location": "대구, 경북",
        "description": "운문산은 청도와 밀양에 걸쳐 있으며, 청정한 자연과 아름다운 숲으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 83,
        "name": "응봉산",
        "elevation": 999,
        "location": "대구, 경북",
        "description": "응봉산은 문경에 위치하며, 가을 단풍과 함께 산행을 즐길 수 있는 산입니다.",
        "priority": 0
    },
    {
        "id": 84,
        "name": "일월산",
        "elevation": 1219,
        "location": "대구, 경북",
        "description": "일월산은 영양에 위치하며, 원시림과 고요한 산행이 매력적인 산입니다.",
        "priority": 0
    },
    {
        "id": 85,
        "name": "조령산",
        "elevation": 1025,
        "location": "대구, 경북",
        "description": "조령산은 문경새재의 중심 산으로, 옛길과 문화적 가치가 높은 명소입니다.",
        "priority": 0
    },
    {
        "id": 86,
        "name": "주왕산",
        "elevation": 720,
        "location": "대구, 경북",
        "description": "주왕산은 청송에 위치하며, 주왕암과 기암괴석이 어우러진 경관으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 87,
        "name": "주흘산",
        "elevation": 1106,
        "location": "대구, 경북",
        "description": "주흘산은 문경새재의 동쪽을 장식하는 산으로, 급경사와 숲길이 인상적입니다.",
        "priority": 0
    },
    {
        "id": 88,
        "name": "청량산",
        "elevation": 870,
        "location": "대구, 경북",
        "description": "청량산은 안동에 위치하며, 기암괴석과 절벽 경치가 뛰어난 산입니다.",
        "priority": 0
    },
    {
        "id": 89,
        "name": "토함산",
        "elevation": 745,
        "location": "대구, 경북",
        "description": "토함산은 불국사와 석굴암이 위치한 신라의 문화와 역사를 품은 산입니다.",
        "priority": 0
    },
    {
        "id": 90,
        "name": "팔공산",
        "elevation": 1193,
        "location": "대구, 경북",
        "description": "팔공산은 대구의 명산으로, 사찰과 휴양림이 잘 갖춰진 사계절 관광지입니다.",
        "priority": 0
    },
    {
        "id": 91,
        "name": "황악산",
        "elevation": 1111,
        "location": "대구, 경북",
        "description": "황악산은 김천에 위치하며, 겨울 설경과 단풍철에 특히 아름다운 산입니다.",
        "priority": 0
    },
    {
        "id": 92,
        "name": "황장산",
        "elevation": 1077,
        "location": "대구, 경북",
        "description": "황장산은 봉화에 위치하며, 울창한 숲과 가을 풍경이 일품인 명산입니다.",
        "priority": 0
    },
    {
        "id": 93,
        "name": "가야산",
        "elevation": 1430,
        "location": "부산, 울산, 경남",
        "description": "가야산은 해인사와 함께 위치하며, 산세가 웅장하고 고즈넉한 자연환경이 돋보입니다.",
        "priority": 0
    },
    {
        "id": 94,
        "name": "가지산",
        "elevation": 1240,
        "location": "부산, 울산, 경남",
        "description": "영남알프스의 최고봉으로 알려져 있으며, 사계절 다양한 풍경을 제공합니다.",
        "priority": 0
    },
    {
        "id": 95,
        "name": "거제 계룡산",
        "elevation": 566,
        "location": "부산, 울산, 경남",
        "description": "거제도에 위치한 계룡산은 해안선을 따라 드넓은 바다 전망을 자랑합니다.",
        "priority": 0
    },
    {
        "id": 96,
        "name": "남덕유산",
        "elevation": 1507,
        "location": "부산, 울산, 경남",
        "description": "덕유산 국립공원의 일부로, 아름다운 계곡과 철쭉 군락지로 유명합니다.",
        "priority": 0
    },
    {
        "id": 97,
        "name": "금산",
        "elevation": 704,
        "location": "부산, 울산, 경남",
        "description": "통영과 거제 사이에 위치하며, 아름다운 해안선과 조망을 제공합니다.",
        "priority": 0
    },
    {
        "id": 98,
        "name": "금정산",
        "elevation": 801,
        "location": "부산, 울산, 경남",
        "description": "부산 도심에 위치한 산으로, 금정산성과 온천 관광지가 유명합니다.",
        "priority": 0
    },
    {
        "id": 99,
        "name": "무학산",
        "elevation": 761,
        "location": "부산, 울산, 경남",
        "description": "창원시에 위치하며, 마산만을 내려다볼 수 있는 아름다운 풍경이 특징입니다.",
        "priority": 0
    },
    {
        "id": 100,
        "name": "미륵산",
        "elevation": 461,
        "location": "부산, 울산, 경남",
        "description": "통영에 위치한 미륵산은 케이블카와 함께 해양 경관을 감상하기 좋은 명소입니다.",
        "priority": 0
    },
    {
        "id": 101,
        "name": "신불산",
        "elevation": 1209,
        "location": "부산, 울산, 경남",
        "description": "영남알프스에 속하며, 억새 평원과 고산 식생으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 102,
        "name": "연화산",
        "elevation": 528,
        "location": "부산, 울산, 경남",
        "description": "거제도에 위치하며, 자연휴양림과 해안 경관이 어우러진 산입니다.",
        "priority": 0
    },
    {
        "id": 103,
        "name": "재약산",
        "elevation": 1108,
        "location": "부산, 울산, 경남",
        "description": "영남알프스의 산 중 하나로, 사계절 내내 아름다운 산세를 자랑합니다.",
        "priority": 0
    },
    {
        "id": 104,
        "name": "지리산",
        "elevation": 1915,
        "location": "부산, 울산, 경남",
        "description": "한국의 첫 국립공원으로, 천왕봉과 대피소 등 다양한 산행 코스를 제공합니다.",
        "priority": 0
    },
    {
        "id": 105,
        "name": "통영 지리산",
        "elevation": 398,
        "location": "부산, 울산, 경남",
        "description": "통영 도심에서 가까운 소규모 산으로, 해안선을 따라 산책하기 좋습니다.",
        "priority": 0
    },
    {
        "id": 106,
        "name": "천성산",
        "elevation": 922,
        "location": "부산, 울산, 경남",
        "description": "양산시에 위치하며, 불교 문화와 자연 경관이 어우러진 산입니다.",
        "priority": 0
    },
    {
        "id": 107,
        "name": "천주산",
        "elevation": 639,
        "location": "부산, 울산, 경남",
        "description": "진주시와 가까운 산으로, 가볍게 즐길 수 있는 산책 코스가 인상적입니다.",
        "priority": 0
    },
    {
        "id": 108,
        "name": "천황산",
        "elevation": 1189,
        "location": "부산, 울산, 경남",
        "description": "영남알프스에 위치하며, 억새 군락지와 함께 트레킹 명소로 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 109,
        "name": "화왕산",
        "elevation": 757,
        "location": "부산, 울산, 경남",
        "description": "화왕산은 창녕에 위치하며, 가을 억새와 봄 야생화로 유명합니다.",
        "priority": 0
    },
    {
        "id": 110,
        "name": "황매산",
        "elevation": 1113,
        "location": "부산, 울산, 경남",
        "description": "황매산은 한국의 알프스라 불리며, 영화 촬영지로도 잘 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 111,
        "name": "황석산",
        "elevation": 1192,
        "location": "부산, 울산, 경남",
        "description": "황석산은 산청에 위치하며, 고즈넉한 분위기와 생태 보존 상태가 뛰어납니다.",
        "priority": 0
    },
    {
        "id": 112,
        "name": "강천산",
        "elevation": 583,
        "location": "전북",
        "description": "강천산은 사계절 내내 아름다운 산행이 가능하며, 특히 가을 단풍으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 113,
        "name": "구봉산",
        "elevation": 1002,
        "location": "전북",
        "description": "구봉산은 아홉 개의 봉우리가 독특한 형태를 이루며, 전망이 뛰어난 산입니다.",
        "priority": 0
    },
    {
        "id": 114,
        "name": "내장산",
        "elevation": 763,
        "location": "전북",
        "description": "내장산은 단풍 명소로 잘 알려져 있으며, 계곡과 폭포가 어우러져 장관을 이룹니다.",
        "priority": 0
    },
    {
        "id": 115,
        "name": "덕유산",
        "elevation": 1614,
        "location": "전북",
        "description": "덕유산은 국립공원으로 지정되어 있으며, 겨울 설경과 트레킹 코스로 유명합니다.",
        "priority": 0
    },
    {
        "id": 116,
        "name": "마이산",
        "elevation": 686,
        "location": "전북",
        "description": "마이산은 말의 귀를 닮은 독특한 형태로, 도립공원으로 지정된 관광 명소입니다.",
        "priority": 0
    },
    {
        "id": 117,
        "name": "만행산",
        "elevation": 460,
        "location": "전북",
        "description": "만행산은 완만한 등산로로 초보자도 쉽게 오를 수 있는 가족 산행지입니다.",
        "priority": 0
    },
    {
        "id": 118,
        "name": "모악산",
        "elevation": 793,
        "location": "전북",
        "description": "모악산은 전주의 대표적인 산으로, 금산사와 연계된 등산 코스가 인기입니다.",
        "priority": 0
    },
    {
        "id": 119,
        "name": "방장산",
        "elevation": 739,
        "location": "전북",
        "description": "방장산은 울창한 숲과 평화로운 자연경관으로 트레킹 명소로 알려져 있습니다.",
        "priority": 0
    },
    {
        "id": 120,
        "name": "백암산",
        "elevation": 741,
        "location": "전북",
        "description": "백암산은 내장산 국립공원에 속하며, 암릉과 단풍으로 많은 사랑을 받는 산입니다.",
        "priority": 0
    },
    {
        "id": 121,
        "name": "백운산",
        "elevation": 1265,
        "location": "전북",
        "description": "백운산은 주변의 수려한 계곡과 함께 조화로운 자연미를 자랑합니다.",
        "priority": 0
    },
    {
        "id": 122,
        "name": "변산",
        "elevation": 508,
        "location": "전북",
        "description": "변산반도 국립공원의 일부로, 해안 경관과 함께 다채로운 산행을 제공합니다.",
        "priority": 0
    },
    {
        "id": 123,
        "name": "선운산",
        "elevation": 336,
        "location": "전북",
        "description": "선운산은 고즈넉한 절경과 선운사로 유명하며, 봄과 가을에 방문객이 많습니다.",
        "priority": 0
    },
    {
        "id": 124,
        "name": "신무산",
        "elevation": 422,
        "location": "전북",
        "description": "신무산은 낮은 고도와 평온한 등산로로 초보자들에게 적합한 산입니다.",
        "priority": 0
    },
    {
        "id": 125,
        "name": "운장산",
        "elevation": 1126,
        "location": "전북",
        "description": "운장산은 전북의 대표적인 산으로, 사계절 내내 아름다운 산행이 가능합니다.",
        "priority": 0
    },
    {
        "id": 126,
        "name": "지리산 바래봉",
        "elevation": 1165,
        "location": "전북",
        "description": "지리산의 바래봉은 철쭉 군락지로 유명하며, 봄철 등산객이 많이 찾습니다.",
        "priority": 0
    },
    {
        "id": 127,
        "name": "지리산 반야봉",
        "elevation": 1732,
        "location": "전북",
        "description": "지리산의 주요 봉우리 중 하나로, 일출 명소로도 사랑받고 있습니다.",
        "priority": 0
    },
    {
        "id": 128,
        "name": "장안산",
        "elevation": 1237,
        "location": "전북",
        "description": "장안산은 아름다운 능선과 트레킹 코스로 등산객에게 인기가 많습니다.",
        "priority": 0
    },
    {
        "id": 129,
        "name": "적상산",
        "elevation": 1034,
        "location": "전북",
        "description": "적상산은 가을 단풍과 함께 적상산성의 역사적 유적으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 130,
        "name": "천상데미",
        "elevation": 1055,
        "location": "전북",
        "description": "천상데미는 비교적 덜 알려진 산으로, 조용히 자연을 즐기기에 적합합니다.",
        "priority": 0
    },
    {
        "id": 131,
        "name": "깃대봉",
        "elevation": 271,
        "location": "광주, 전남",
        "description": "깃대봉은 완만한 경사와 함께 가족 단위로 즐기기 좋은 산책 코스를 제공합니다.",
        "priority": 0
    },
    {
        "id": 132,
        "name": "달마산",
        "elevation": 489,
        "location": "광주, 전남",
        "description": "달마산은 기암괴석과 함께 불교 유적이 조화를 이루는 독특한 산입니다.",
        "priority": 0
    },
    {
        "id": 133,
        "name": "덕룡산",
        "elevation": 924,
        "location": "광주, 전남",
        "description": "덕룡산은 주변 풍광이 아름다우며, 등산로가 잘 정비되어 있습니다.",
        "priority": 0
    },
    {
        "id": 134,
        "name": "동악산",
        "elevation": 743,
        "location": "광주, 전남",
        "description": "동악산은 소나무 숲과 조화로운 경관이 매력적인 산입니다.",
        "priority": 0
    },
    {
        "id": 135,
        "name": "두륜산",
        "elevation": 700,
        "location": "광주, 전남",
        "description": "두륜산은 다도해를 조망할 수 있는 전망대가 인기 있는 명소입니다.",
        "priority": 0
    },
    {
        "id": 136,
        "name": "무등산",
        "elevation": 1187,
        "location": "광주, 전남",
        "description": "무등산은 광주의 상징적인 산으로, 유네스코 세계지질공원으로 지정되었습니다.",
        "priority": 0
    },
    {
        "id": 137,
        "name": "병풍산",
        "elevation": 822,
        "location": "광주, 전남",
        "description": "병풍산은 병풍처럼 펼쳐진 암릉과 계곡으로 유명합니다.",
        "priority": 0
    },
    {
        "id": 138,
        "name": "불갑산",
        "elevation": 516,
        "location": "광주, 전남",
        "description": "불갑산은 가을철 꽃무릇 축제가 열리는 산으로 많은 관광객이 방문합니다.",
        "priority": 0
    },
    {
        "id": 139,
        "name": "백운산",
        "elevation": 1217,
        "location": "광주, 전남",
        "description": "백운산은 다양한 생태계와 산림 경관을 자랑하는 지역 대표 산입니다.",
        "priority": 0
    },
    {
        "id": 140,
        "name": "영취산",
        "elevation": 510,
        "location": "광주, 전남",
        "description": "영취산은 봄철 진달래가 만개하여 화려한 산행을 즐길 수 있는 곳입니다.",
        "priority": 0
    },
    {
        "id": 141,
        "name": "월출산",
        "elevation": 808,
        "location": "광주, 전남",
        "description": "월출산은 기암괴석과 함께 국립공원으로 지정된 멋진 풍경을 제공합니다.",
        "priority": 0
    },
    {
        "id": 142,
        "name": "조계산",
        "elevation": 887,
        "location": "광주, 전남",
        "description": "조계산은 승려와 관련된 문화재가 많아 역사와 자연이 어우러진 산입니다.",
        "priority": 0
    },
    {
        "id": 143,
        "name": "제암산",
        "elevation": 807,
        "location": "광주, 전남",
        "description": "제암산은 조용하고 한적한 트레킹 코스로 많은 사랑을 받고 있습니다.",
        "priority": 0
    },
    {
        "id": 144,
        "name": "천관산",
        "elevation": 723,
        "location": "광주, 전남",
        "description": "천관산은 해발이 낮지만, 다도해와 주변 경관이 아름답기로 유명합니다.",
        "priority": 0
    },
    {
        "id": 145,
        "name": "추월산",
        "elevation": 731,
        "location": "광주, 전남",
        "description": "추월산은 아름다운 계곡과 단풍으로 잘 알려져 있는 산입니다.",
        "priority": 0
    },
    {
        "id": 146,
        "name": "축령산",
        "elevation": 621,
        "location": "광주, 전남",
        "description": "축령산은 자연휴양림으로 조성되어 캠핑과 트레킹에 적합합니다.",
        "priority": 0
    },
    {
        "id": 147,
        "name": "팔영산",
        "elevation": 608,
        "location": "광주, 전남",
        "description": "팔영산은 여덟 봉우리가 펼쳐진 독특한 경관으로 등산객들에게 사랑받습니다.",
        "priority": 0
    },
    {
        "id": 148,
        "name": "한라산",
        "elevation": 1950,
        "location": "제주",
        "description": "한라산은 제주도의 상징이며, 한국에서 가장 높은 산으로 다양한 등반 코스를 제공합니다.",
        "priority": 99
    }
];