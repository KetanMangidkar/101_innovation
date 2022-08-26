import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/products/action";
import { useDispatch } from "react-redux";

export const FilterComponent = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [categoryValues, setCategoryValues] = useState(
    searchParams.getAll("Menu_Category") || []
  );
  const categoryHandler = (values) => {
    setCategoryValues(values);
  };

  useEffect(() => {
    if (categoryValues) {
      setSearchParams({ category: categoryValues }, { replace: true });
      let params = {
        category: searchParams.getAll("Menu_Category"),
      };
      console.log(params);

      dispatch(fetchData(params));
    }
  }, [categoryValues, setSearchParams, searchParams, dispatch]);

  return (
    <Box>
      <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
        <Text fontSize="2xl">Filters</Text>
        <Text>Category</Text>

        <CheckboxGroup
          colorScheme="green"
          defaultValue={categoryValues}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"}>
            <Checkbox value="Regular Menu">Regular Menu</Checkbox>
            <Checkbox value="Breakfast Menu">Breakfast Menu</Checkbox>
            <Checkbox value="McCafe Menu">McCafe Menu</Checkbox>
            <Checkbox value="Desserts Menu">Desserts Menu</Checkbox>
            <Checkbox value="Gourmet Menu">Gourmet Menu</Checkbox>
            <Checkbox value="Beverages Menu">Beverages Menu</Checkbox>
            <Checkbox value="Condiments Menu">Condiments Menu</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};
