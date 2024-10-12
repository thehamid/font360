import { Card,Flex } from "@chakra-ui/react"
import { BiLogoTypescript } from "react-icons/bi"
import { FaHeart, FaReact } from "react-icons/fa6"



export const Footer = () => {
  return (
    <Card mt={5} dir="ltr">

          <Flex justify="center" gap={2} p={2} >Made with <FaHeart/><FaReact/><BiLogoTypescript /> by <a href="https://hamidamini.ir">Hamid Amini</a></Flex>

    </Card>
  )
}
