export type SiteConfig = typeof siteConfig;

export const siteConfig = (t: any) => {
  return {
    name: "D",
    description:
      "Make beautiful websites regardless of your design experience.",
    navItems: [
      {
        label: t("Home"),
        href: "/",
      },
      {
        label: t("Dashboard"),
        href: "/dashboard",
      },
      {
        label: t("User"),
        href: "/user",
      },
      {
        label: t("Blog"),
        href: "/blog",
      },
      {
        label: t("About"),
        href: "/about",
      },
    ],
    navMenuItems: [
      {
        label: t("Home"),
        href: "/",
      },
      {
        label: t("Dashboard"),
        href: "/dashboard",
      },
      {
        label: t("Pricing"),
        href: "/pricing",
      },
      {
        label: t("Blog"),
        href: "/blog",
      },
      {
        label: t("User"),
        href: "/user",
      },
    ],
    links: {
      github: "https://github.com/heroui-inc/heroui",
      twitter: "https://twitter.com/hero_ui",
      docs: "https://heroui.com",
      discord: "https://discord.gg/9b6yyZKmH4",
      sponsor: "https://patreon.com/jrgarciadev",
    },
  };
};
