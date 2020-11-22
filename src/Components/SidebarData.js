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
    title: "Over view",
    icon: <HistoryIcon />,
    link: "/overview"
},
{
    title: "Create Your Train",
    icon: <BuildIcon />,
    link: "/createYourTrain"
},
{
    title: "Liked Trains",
    icon: <FavoriteIcon />,
    link: "/likedTrains"
},
{
    title: "ContactUs",
    icon: <MailIcon />,
    link: "/contactUs"
}]