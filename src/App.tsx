import React, { useState } from 'react';
import {  Box,Input, SimpleGrid,Container, Flex, Divider, Button   } from '@chakra-ui/react';
import { FontCard } from './components/card/Card';
import { LuRows, LuTable } from 'react-icons/lu';
import Header from './components/Header';
import { Footer } from './components/Footer';

const fonts:any = [
  { name: 'الف', style: 'Alef', src:"" },
  { name: 'امیری', style: 'Amiri', src:"" },
  { name: 'اسماء', style: 'Asmae', src:"" },
  { name: 'سینما', style: 'Cinema', src:"" },
  { name: 'دفتر', style: 'Daftar', src:"" },
  { name: 'گندم', style: 'Gandom', src:"" },
  { name: 'هانیه', style: 'Hanieh', src:"" },
  { name: 'ایران شارپ', style: 'iransharp', src:"" },
  { name: 'نیان', style: 'nian', src:"" },
  { name: 'نیک', style: 'nik', src:"" },
  { name: 'وزیر', style: 'Vazir', src:"https://fonts.thehamid.ir/estedad/Estedad-VF-FD.ttf" },
  { name: 'یکان بخ', style: 'yekan-bakh', src:"" },
];


const App: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [countCol, setCountCol] = useState<number[]>([1, 2, 3]);

    return ( 
        <Container maxW="7xl" p={4} fontFamily="Vazir" lang='fa'>
            <Header/>
            <Box p={5}>
                <Input
                    placeholder="متن خود را وارد کنید"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    mb={10}
                    mt={10}
                    maxW="100%"
                    height="14"
                    
                />         
                <Divider orientation='horizontal' mb={5} />
                <Flex justify="right" gap={5} mb={5} >
                     <Button onClick={()=>setCountCol([1,2,3])}><LuTable/> </Button>
                      <Button onClick={()=>setCountCol([1])}><LuRows/> </Button>
                </Flex>
               
                <SimpleGrid columns={countCol} spacing={5}>
                    {fonts.map((font: { name: string; style: "string"; src: "string"; }) => (
                       <FontCard text={inputText} font={font} />
                    ))}
                </SimpleGrid>
            </Box>

            <Footer/>
        </Container>    
    );
};

export default App;