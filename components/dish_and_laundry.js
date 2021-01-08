import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Dish_Washing = lazy(() => import('../pages/dish-washing'))
const Detergent = lazy(() => import('../pages/detergent'))
const Fabric_Bleach = lazy(() => import('../pages/all-fabric-bleach'))
const Scouring_Pads = lazy(() => import('../pages/scouring-pads'))
const Dispenser_Bottle = lazy(() => import('../pages/dish-drops-dispenser-bottle'))

const details = [
    {
        title: "Dish Drops™ Dishwashing Liquid - Original Scent",
        id: "Dish Drops - Dishwashing Liquid",
        price: "14.25",
        image: "/images/dishwashing.jpg",
        path: '/dish-washing',
        component: Dish_Washing,
    },
    {
        title: "Liquid Laundry Detergent - Floral Scent - 4 L",
        id: "Liquid Laundry Detergent",
        price: "35.00",
        image: "/images/detergent.jpg",
        path: '/detergent',
        component: Detergent,
    },
    {
        title: "Amway Home™ All Fabric Bleach",
        id: "Amway Home All Fabric Bleach",
        price: "22.30",
        image: "/images/all-fabric-bleach.jpg",
        path: '/all-fabric-bleach',
        component: Fabric_Bleach,
    },
    {
        title: "Amway Home™ Scrub Buds™ Scouring Pads",
        id: "Amway Home Scrub Buds Scouring Pads",
        price: "4.50",
        image: "/images/scouring-pads.jpg",
        path: '/scouring-pads',
        component: Scouring_Pads,
    },
    {
        title: "Amway Home™ Dish Drops™ Dispenser Bottle",
        id: "Amway Home Dish Drops Dispenser Bottle",
        price: "5.50",
        image: "/images/dish-drops-dispenser-bottle.jpg",
        path: '/dish-drops-dispenser-bottle',
        component: Dispenser_Bottle,
    }
]

export default function dish_and_laundry() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Dish and Laundry Products</Heading>
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