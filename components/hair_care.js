import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Men_Hair_Putty = lazy(() => import('../pages/body-blends-for-men-hair-putty'))
const Shampoo_and_Conditioner_280mL = lazy(() => import('../pages/two-in-one-shampoo-and-conditioner-280mL'))
const Anti_Hairfall_Conditioner_280mL = lazy(() => import('../pages/anti-hairfall-conditioner-280mL'))
const Color_Repair_Conditioner_750mL = lazy(() => import('../pages/color-repair-conditioner-750mL'))
const Color_Repair_Shampoo_280mL = lazy(() => import('../pages/color-repair-shampoo-280mL'))
const Color_Repair_Shampoo_750mL = lazy(() => import('../pages/color-repair-shampoo-750mL'))
const Anti_Hairfall_Shampoo_280mL = lazy(() => import('../pages/anti-hairfall-shampoo-280mL'))
const Shampoo_and_Conditioner_750mL = lazy(() => import('../pages/two-in-one-shampoo-and-conditioner-750mL'))
const Color_Repair_Conditioner_280mL = lazy(() => import('../pages/color-repair-conditioner-280mL'))

const details = [
    {
        title: "Body Blends For Men Hair Putty - Xtreme Live On The Edge",
        id: "Body Blends For Men Hair Putty - Xtreme Live On The Edge",
        price: "15.80",
        image: "/images/body-blends-for-men-hair-putty.webp",
        path: '/body-blends-for-men-hair-putty',
        component: Men_Hair_Putty,
    },
    {
        title: "Satinique 2 in 1 Shampoo and Conditioner - 280mL",
        id: "Satinique 2 in 1 Shampoo and Conditioner - 280mL",
        price: "9.25",
        image: "/images/satinique-2-in-1-shampoo-and-conditioner-280mL.webp",
        path: '/two-in-one-shampoo-and-conditioner-280mL',
        component: Shampoo_and_Conditioner_280mL,
    },
    {
        title: "Satinique Anti-Hairfall Conditioner - 280mL",
        id: "Satinique Anti-Hairfall Conditioner - 280mL",
        price: "9.75",
        image: "/images/satinique-anti-hairfall-conditioner-280mL.webp",
        path: '/anti-hairfall-conditioner-280mL',
        component: Anti_Hairfall_Conditioner_280mL,
    },
    {
        title: "Satinique Color Repair Conditioner - 750mL",
        id: "Satinique Color Repair Conditioner - 750mL",
        price: "19.00",
        image: "/images/satinique-color-repair-conditioner-750mL.webp",
        path: '/color-repair-conditioner-750mL',
        component: Color_Repair_Conditioner_750mL,
    },
    {
        title: "Satinique Color Repair Shampoo - 280mL",
        id: "Satinique Color Repair Shampoo - 280mL",
        price: "9.75",
        image: "/images/satinique-color-repair-shampoo-280mL.webp",
        path: '/color-repair-shampoo-280mL',
        component: Color_Repair_Shampoo_280mL,
    },
    {
        title: "Satinique Color Repair Shampoo - 750mL",
        id: "Satinique Color Repair Shampoo - 750mL",
        price: "19.00",
        image: "/images/satinique-color-repair-shampoo-750mL.webp",
        path: '/color-repair-shampoo-750mL',
        component: Color_Repair_Shampoo_750mL,
    },
    {
        title: "Satinique Anti-Hairfall Shampoo - 280mL",
        id: "Satinique Anti-Hairfall Shampoo - 280mL",
        price: "9.75",
        image: "/images/satinique-anti-hairfall-shampoo-280mL.webp",
        path: '/anti-hairfall-shampoo-280mL',
        component: Anti_Hairfall_Shampoo_280mL,
    },
    {
        title: "Satinique 2 in 1 Shampoo and Conditioner - 750mL",
        id: "Satinique 2 in 1 Shampoo and Conditioner - 750mL",
        price: "18.75",
        image: "/images/satinique-2-in-1-shampoo-and-conditioner-750mL.webp",
        path: '/two-in-one-shampoo-and-conditioner-750mL',
        component: Shampoo_and_Conditioner_750mL,
    },
    {
        title: "Satinique Color Repair Conditioner - 280mL",
        id: "Satinique Color Repair Conditioner - 280mL",
        price: "9.75",
        image: "/images/satinique-color-repair-conditioner-280mL.webp",
        path: '/color-repair-conditioner-280mL',
        component: Color_Repair_Conditioner_280mL,
    }
]

export default function hair_care() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Hair Care Products</Heading>
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