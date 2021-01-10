import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Oral_Rinse = lazy(() => import('../pages/oral-rinse'))
const Toothpaste_Small = lazy(() => import('../pages/toothpaste-small'))
const Toothpaste_Travel = lazy(() => import('../pages/toothpaste-travel-size'))

const details = [
    {
        title: "Glister™ Multi-Action Oral Rinse",
        id: "Glister Multi-Action Oral Rinse",
        price: "9.25",
        image: "/images/oral-rinse.webp",
        path: '/oral-rinse',
        component: Oral_Rinse,
    },
    {
        title: "Glister™ Multi-Action Fluoride Toothpaste",
        id: "Glister Fluoride Toothpaste",
        price: "4.00",
        image: "/images/toothpaste-small.webp",
        path: '/toothpaste-small',
        component: Toothpaste_Small,
    },
    {
        title: "Glister™ Multi-Action Fluoride Toothpaste – Travel Size",
        id: "Glister Multi-Action Fluoride Toothpaste – Travel Size",
        price: "6.00",
        image: "/images/toothpaste.webp",
        path: '/toothpaste-travel-size',
        component: Toothpaste_Travel,
    }
]

export default function oral_care() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Oral Care</Heading>
                <div className="md:grid md:grid-cols-2 mx-auto">
                    {details.map(Product => {
                        return (
                            <Box key={Product.id} p={4} display={{ lg: "flex" }}
                                border="1px"
                                borderColor="gray.200"
                                borderRadius={2}
                                margin={3}>
                                <Box>
                                    <Image
                                        className="w-full h-full md:w-full md:h-48 object-center object-contain"
                                        src={Product.image}
                                        alt={Product.title}
                                        borderRadius="lg"
                                    />
                                </Box>
                                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                                    <Link href={Product.path}>
                                        <Text
                                            fontWeight="semibold"
                                            textTransform="uppercase"
                                            fontSize="lg"
                                            letterSpacing="wide"
                                        >
                                            {Product.title}
                                        </Text>
                                    </Link>
                                    <Text fontSize="sm" mt={1} color="gray.500">
                                        In stock
                                        </Text>
                                    <Text my={2} fontSize="lg">
                                        ${Product.price}
                                    </Text>
                                    <Stack direction="row" spacing={4} align="center" justify="center">
                                        <Button
                                            className="snipcart-add-item snipcart-checkout text-white"
                                            bg="brand.100"
                                            _hover="brand.100"
                                            width={1 / 2}
                                            data-item-id={Product.id}
                                            data-item-price={Product.price}
                                            data-item-url="/"
                                            data-item-image={Product.image}
                                            data-item-name={Product.title}>
                                            Buy now
                                            </Button>
                                        <Button
                                            className="snipcart-add-item"
                                            colorScheme="black"
                                            variant="outline"
                                            width={1 / 2}
                                            data-item-id={Product.id}
                                            data-item-price={Product.price}
                                            data-item-url="/"
                                            data-item-image={Product.image}
                                            data-item-name={Product.title}>
                                            Add to bag
                                            </Button>
                                    </Stack>
                                </Box>
                            </Box>
                        );
                    })}
                </div>
            </main>
        </div>
    )
}