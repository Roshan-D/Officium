import { Flex, Heading, Input, Spacer, HStack, SimpleGrid } from '@chakra-ui/react';
import React from "react";
import useAxios from 'axios-hooks';

const ProjectContainer: React.FC = () => {
    // const [{ data, loading, error}, refetch ] = useAxios("/");

    // if (loading) {
    //   return <h1>Loading...</h1>;
    // } else if (error) {
    //   console.log(error);
  
    //   return <h1>Error</h1>;
    // }

    return (
    <div>
        <Flex 
            as="nav"
            justify={'space-between'} 
            align="center" 
            padding="1.5rem" 
            bg="#EC4067" 
            color="white"
            height="100%"
            marginBottom="40px">
            <Heading as="h1">Project Ideas</Heading>
        </Flex>
        <HStack>
            <Spacer/>
            <Input 
                placeholder='Enter a LinkedIn url'
                size='md'
                variant='filled'
                width='50%'/>
            <Spacer/>
        </HStack>
    </div>
    );
};

export default ProjectContainer;