import { Flex, Text, Image, Button, useColorMode } from "@chakra-ui/react";
import { LuMoon, LuSearch, LuSun } from "react-icons/lu";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <header>
      <Flex justify="space-between">
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <LuMoon /> : <LuSun />}
        </Button>

        <Flex direction="column" justify="center" align="center" gap={4} maxW="sm">
          <a href="/">
            {colorMode === "light" ? (
              <Image src="../public/logo_dark.png" alt="font360" width="100%" />
            ) : (
              <Image src="../public/logo_light.png" alt="font360" width="100%" />
            )}
          </a>
          <Text> برترین فونت‌های فارسی</Text>
        </Flex>
        <Button>
          <LuSearch />
        </Button>
      </Flex>
    </header>
  );
}

export default Header;
