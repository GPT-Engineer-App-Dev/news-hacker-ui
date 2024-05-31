import { Box, Container, Heading, Link, Text, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const news = [
  {
    id: 1,
    title: "Introducing GPT-4: The Next Breakthrough in AI",
    url: "https://openai.com/blog/gpt-4",
  },
  {
    id: 2,
    title: "SpaceX's Starship Successfully Lands on Mars",
    url: "https://spacex.com/starship-lands",
  },
  {
    id: 3,
    title: "World's First Quantum Computer Now a Reality",
    url: "https://quantumtech.com/first-quantum-computer",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Box as="nav" bg="orange.500" color="white" p={4} mb={4}>
        <Heading as="h1" size="lg">
          Hacker News Clone
        </Heading>
      </Box>
      <VStack spacing={4} align="stretch">
        {news.map((item) => (
          <Box key={item.id} p={4} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">
              <Link href={item.url} isExternal>
                {item.title} <ExternalLinkIcon mx="2px" />
              </Link>
            </Heading>
            <Text mt={2}>Author: John Doe</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;