import {GraphyMenuItem} from "@/types/GraphyMenuItem";
import {AssistWalker, EmojiEvents, Home, Landscape, PedalBike} from "@mui/icons-material";

export const menuItems: GraphyMenuItem[] = [
    {
        label: "홈",
        labelEn: "Home",
        icon: <Home/>,
        key: "home",
        href: "/",
        categoryDepth1: "all"
    },
    {
        label: "대회",
        labelEn: "Competition",
        icon: <EmojiEvents/>,
        key: "competition",
        href: "/cycling/competition",
        categoryDepth1: "cycling"
    },
    {
        label: "통증",
        labelEn: "Pain Point",
        icon: <AssistWalker/>,
        key: "painpoint",
        href: "/cycling/painpoint",
        categoryDepth1: "cycling"
    },
    {
        label: "명산",
        labelEn: "Mountains",
        icon: <Landscape/>,
        key: "mountain-top-100",
        href: "/hiking/mountain-top-100",
        categoryDepth1: "hiking",
    },
    {
        label: "기어",
        labelEn: "Gear",
        icon: <PedalBike/>,
        key: "gear",
        href: "/cycling/gear",
        categoryDepth1: "cycling"
    },
    {
        label: "기어",
        labelEn: "Gear",
        icon: <PedalBike/>,
        key: "gear",
        href: "/hiking/gear",
        categoryDepth1: "hiking"
    }
];