import {  Button, Card, CardBody,Text } from "@chakra-ui/react";
import '../../styles/fonts.css'
import { LuDownload, LuSearch } from "react-icons/lu";

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
          background: "teal.400",
        }}
       >
      <CardBody
        key={font.name}
        p={2}
        borderWidth={1}
        borderRadius="md"
        textAlign="center"
         > 
          <Text fontSize="md" textAlign="right">
          {font.name}
           </Text>

        <Text fontFamily={font.style} fontSize="2xl"  p={5}>
          {text || "خط فارسی را هم پاس بداریم"}
        </Text>
        
           {font.src ? <Button size='xs' float="left" onClick={() => open(font.src)}><LuDownload /></Button>
             : <Button size='xs' float="left" onClick={() => open(`https://www.google.com/search?q=فونت ${font.name}`)}><LuSearch /></Button>}
        
         </CardBody>
     
    </Card>
  );
};
