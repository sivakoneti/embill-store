import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Twist = lazy(() => import('../pages/twist'))
const Women_Pack = lazy(() => import('../pages/women-pack'))
const Immunity_Pack = lazy(() => import('../pages/immunity-pack'))
const Vitamin_C = lazy(() => import('../pages/vitamin-c'))
const Men_Pack = lazy(() => import('../pages/men-pack'))
const Defense_Zinc = lazy(() => import('../pages/defense-zinc'))
const Vitamin_D = lazy(() => import('../pages/vitamin-d'))
const Immunity_Gummies = lazy(() => import('../pages/immunity-gummies'))
const Antioxidant_Health = lazy(() => import('../pages/antioxidant-health'))

const details = [
    {
        title: "Nutrilite™ Twist Tubes 2GO™ – Immunity Health - Strawberry Kiwi",
        id: "Nutrilite Twist Tubes 2GO – Immunity Health - Strawberry Kiwi",
        price: "15.00",
        image: "/images/twist.jpg",
        path: '/twist',
        component: Twist,
    },
    {
        title: "Nutrilite™ Women’s Pack",
        id: "Nutrilite™ Women’s Pack",
        price: "38.00",
        image: "/images/womenpack.jpg",
        path: '/women-pack',
        component: Women_Pack,
    },
    {
        title: "Nutrilite™ Immunity Pack",
        id: "Nutrilite Immunity Pack",
        price: "17.50",
        image: "/images/immunity.jpg",
        path: '/immunity-pack',
        component: Immunity_Pack,
    },
    {
        title: "Nutrilite™ Vitamin C Extended Release - 60 Tablets",
        id: "Nutrilite Vitamin C - 60 Tablets",
        price: "22.60",
        image: "/images/vitamin-c.jpg",
        path: '/vitamin-c',
        component: Vitamin_C,
    },
    {
        title: "Nutrilite™ Men’s Pack",
        id: "Nutrilite Men’s Pack",
        price: "38.00",
        image: "/images/menpack.jpg",
        path: '/men-pack',
        component: Men_Pack,
    },
    {
        title: "Nutrilite™ Immunity Defense Zinc + Holy Basil",
        id: "Nutrilite Immunity Defense Zinc",
        price: "16.20",
        image: "/images/defense-zinc.jpg",
        path: '/defense-zinc',
        component: Defense_Zinc,
    },
    {
        title: "Nutrilite™ Vitamin D",
        id: "Nutrilite Vitamin D",
        price: "27.80",
        image: "/images/vitamin-d.jpg",
        path: '/vitamin-d',
        component: Vitamin_D,
    },
    {
        title: "Nutrilite™ Go Shield – Immunity Gummies",
        id: "Nutrilite Go Shield – Immunity Gummies",
        price: "16.20",
        image: "/images/immunity-gummies.jpg",
        path: '/immunity-gummies',
        component: Immunity_Gummies,
    },
    {
        title: "Nutrilite™ Twist Tubes 2GO Antioxidant Health – Mango Citrus",
        id: "Nutrilite Twist Tubes 2GO Antioxidant Health – Mango Citrus",
        price: "22.30",
        image: "/images/antioxidant-health.jpg",
        path: '/antioxidant-health',
        component: Antioxidant_Health,
    }
]

export default function vitamins_and_supplements() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Vitamins and Supplements</Heading>
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