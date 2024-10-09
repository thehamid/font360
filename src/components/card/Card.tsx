import { background, Card, CardBody, Text } from "@chakra-ui/react";
import '../../styles/fonts.css'
import { LuDownload } from "react-icons/lu";

type FontType = {
  name: string;
  style: "string";
  src: "string";
};

type CardPropsType = {
  text: string;
  font: FontType;
};

export const FontCard = ({ text, font }: CardPropsType) => {
     return (
       <Card
         _hover={{
          background: "gray.100",
          color: "teal.500",
        }}
       >
      <CardBody
        key={font.name}
        p={5}
        borderWidth={1}
        borderRadius="md"
        textAlign="center"
          >        
        <Text fontFamily={font.style} fontSize="lg" >
          {text || "فارسی را پاس بداریم"}
        </Text>
        <Text mt={2} fontSize="sm" color="gray.500">
          {font.name}
           </Text>
        <LuDownload/>   
      </CardBody>
    </Card>
  );
};
