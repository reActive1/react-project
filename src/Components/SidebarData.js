import React from 'react';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import BuildIcon from '@material-ui/icons/Build';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailIcon from '@material-ui/icons/Mail';
import Home from "./Home"

export const SidebarData = [{
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
    component: Home
},
{
    title: "Overview",
    icon: <HistoryIcon />,
    link: "/overview"
},
{
    title: "CreateYourTrain",
    icon: <BuildIcon />,
    link: "/createYourTrain"
},
{
    title: "LikedTrains",
    icon: <FavoriteIcon />,
    link: "/likedTrains"
},
{
    title: "ContactUs",
    icon: <MailIcon />,
    link: "/contactUs"
}]