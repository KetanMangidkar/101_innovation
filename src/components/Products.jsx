import { Box, Center, Heading, Stack ,Flex,Text, useColorModeValue,Image} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FilterComponent } from './FilterComponent'
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from "../Redux/products/action"
import { useSearchParams } from 'react-router-dom'

import { Link } from "react-router-dom"
import ProductSimple from './ProductSimple'



export const Products = () => {
const dispatch=useDispatch();
const [searchParams]=useSearchParams()
const [page, setPage] = useState(Number(searchParams.get("page") || 1));  

const products=useSelector((store)=>store.ecommerceData.products)

  useEffect(()=>{
    if(products?.length===0){
      let params={
        category:searchParams.getAll("Menu_Category")
      }
      console.log(params);
      dispatch(fetchData(params, page))
    }
  },[dispatch, products?.length, searchParams])

  console.log(products)

  useEffect(() => {
    dispatch(fetchData(page))
  },[page])
  console.log(page, dispatch)

  
  return (
   
    <Box>
      <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>

      <Box minWidth={"15rem"}>
        <FilterComponent/>
      </Box>
      <Box>
        <Heading as="h3">Menu</Heading>
        <Flex flexWrap="wrap" justifyContent="space-around">

          {products.map((product)=>(
            <Link key ={product.id} to={`/products/${product.Id}`}> 
              <ProductSimple  key ={product.id} image="https://media.istockphoto.com/photos/close-up-of-fast-food-snacks-and-drink-on-table-picture-id1045891638?b=1&k=20&m=1045891638&s=170667a&w=0&h=JSEIoGUgDeevl82VbnXSBwSC4M9_2OOSpKx4qJAJnGc=" heading={product.Menu_Category} title={product.Menu_Items} price={product.Per_Serve_Size}/>
            </Link>
          ))}
        </Flex>
      </Box>
      </Stack>
    </Box>
  )
}

