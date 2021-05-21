import React from 'react';
import {Box, Badge} from "@chakra-ui/react";

function Meal (props) {

    return(
        <Box p="2">
            <Box d="flex" alignItems="baseline">
                <Badge fontSize={16} borderRadius="full" px="2" colorScheme="purple">
                {props.name}
                </Badge>
                <Box
                color="gray.500"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize={16}
                ml="2"
                >
                {props.calories}g calories &bull; 
                {props.protein}g protein &bull;
                {props.carbohydrates}g carbohydrates &bull;
                {props.fat} fat
                </Box>
            </Box>
        </Box>

    )
}

export default Meal;