import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Other_Products_drink = lazy(() => import('../pages/energy-drink-pallet'))
const Other_Products_sanitizer = lazy(() => import('../pages/protect-plus-hand-sanitizer'))

const details = [
    {
        title: "XS™ Energy Drink - Cranberry-Grape",
        id: "XS™ Energy Drink - Cranberry-Grape",
        price: "22.60",
        image: "/images/energydrinkpallet.jpg",
        path: '/energy-drink-pallet',
        component: Other_Products_drink,
    },
    {
        title: "G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5",
        id: "G&H Protect+ Advanced Hand Sanitizer With Pro-Vitamin B5",
        price: "10.00",
        image: "/images/G&H-protect+-hand-sanitizer.jpg",
        path: '/protect-plus-hand-sanitizer',
        component: Other_Products_sanitizer,
    }
]

export default function other_products() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Energy Drink and Hand Sanitizer</Heading>
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