import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { Button } from "@heroui/button";
import { siteConfig } from "@/app/config/site";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import { SearchIcon, Logo } from "@/app/components/icons";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/nextjs";
import LanSwitcher from "./LanSwitcher";
import { getTranslations } from "next-intl/server";

export const Navbar = async () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );
  const t = await getTranslations("menu");

  const _siteConfig = siteConfig(t);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">Du</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-40">
          {_siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

        <SignedOut>
          <NavbarItem className="hidden lg:flex">
            <SignInButton mode="modal">
              <Button color="primary">{t("Login")}</Button>
            </SignInButton>
          </NavbarItem>
        </SignedOut>
        <SignedIn>
          <NavbarItem className="hidden lg:flex">
            <Link
              href="/user-profile"
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium"
              )}
              color="foreground"
            >
              {t("UserProfile")}
            </Link>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            <SignOutButton>
              <Button color="primary">{t("Logout")}</Button>
            </SignOutButton>
          </NavbarItem>
        </SignedIn>
        <NavbarItem className="hidden md:flex">
          <LanSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitcher />
        <LanSwitcher />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {_siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === _siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
