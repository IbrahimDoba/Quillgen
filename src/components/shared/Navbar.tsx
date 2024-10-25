"use client"

import React from "react"
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
} from "@nextui-org/react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { AcmeLogo } from "@/assets/AcmeLogo"
import { MenuItems } from "@/constants"
import Image from "next/image"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const { theme, setTheme } = useTheme()



  return (
    <div className="flex justify-center w-full  ">
      <Navbar
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        position="static"
        className="max-w-[1300px] rounded-lg my-2 bg-blue-600 m-4  text-white justify-center"
        classNames={{
          wrapper: "px-4",
        }}
      >
        
        {/* // for small screens */}
        <NavbarContent className="sm:hidden" justify="start">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>

        <NavbarContent className="sm:hidden pr-3 border-white"  justify="start">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ThumbForgeAi</p>
          </NavbarBrand>

        </NavbarContent>
        {/* // for large screen */}
        <NavbarBrand>
            <Image src='/assets/svg/no bg logo.svg' alt="logo" width={30} height={30}/>
            <p className="font-bold text-inherit ml-5">ThumbForgeAi</p>
          </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          
          <NavbarItem>
            <Link className="text-white" color="foreground" href="#">
              Testimonial
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-white" color="foreground" href="#">
              Pricing
            </Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link className="text-white" color="foreground" href="#">
              Playground
            </Link>
          </NavbarItem> */}
          <NavbarItem>
            <Link  color="foreground" href="#" className="flex items-center text-white">
              Image To Prompt
              {/* <span className="ml-1 px-1 py-0.5 text-xs bg-red-500 text-white rounded">new</span> */}
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent  justify="end">
          <NavbarItem>
            <Button
              isIconOnly
              variant="light"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  className="text-sm text-white"
                >
                  English
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Language selection">
                <DropdownItem key="english">English</DropdownItem>
                <DropdownItem key="french">French</DropdownItem>
                <DropdownItem key="german">German</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
          <NavbarItem>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          {MenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  )
}

