export type NavItem = {
    label:string;
    href: string;
};

export const navigation: NavItem[] = [
    {
        label: "Home",
        href : "/"
    },
    {
        label: "About Us",
        href : "/about"
    },
    {
        label: "Services",
        href : "/services"
    },
    // {
    //     label: "Gallery",
    //     href : "/gallery"
    // },
    {
        label: "Contact Us",
        href : "/contact"
    },

]