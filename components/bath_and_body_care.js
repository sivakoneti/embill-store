import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Body_Wash = lazy(() => import('../pages/body-wash'))
const Complexion_Bar = lazy(() => import('../pages/nourish-plus-complex-bar'))
const Shave_Balm = lazy(() => import('../pages/men-after-shave-balm'))
const Shave_Gel = lazy(() => import('../pages/men-foaming-shave-gel'))

const details = [
    {
        title: "G&H Nourish+™ Body Wash",
        id: "G&H Nourish+ Body Wash",
        price: "9.75",
        image: "/images/bodywash.jpg",
        path: '/body-wash',
        component: Body_Wash,
    },
    {
        title: "G&H Nourish+ Complexion Bar",
        id: "G&H Nourish+ Complexion Bar",
        price: "8.00",
        image: "/images/G&H-protect+-nourish+-complexion-bar.jpg",
        path: '/nourish-plus-complex-bar',
        component: Complexion_Bar,
    },
    {
        title: "G&H Soothe+ For Men After Shave Balm",
        id: "G&H Soothe+ For Men After Shave Balm",
        price: "13.25",
        image: "/images/G&H-soothe+-for-men-after-shave-balm.jpg",
        path: '/men-after-shave-balm',
        component: Shave_Balm,
    },
    {
        title: "G&H Soothe+ For Men Foaming Shave Gel",
        id: "G&H Soothe+ For Men Foaming Shave Gel",
        price: "11.50",
        image: "/images/G&H-soothe+-for-men-foaming-shave-gel.jpg",
        path: '/men-foaming-shave-gel',
        component: Shave_Gel,
    }
]

export default function bath_and_body_care() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Bath And Body Products</Heading>
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