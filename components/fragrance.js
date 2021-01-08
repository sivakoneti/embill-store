import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Dry_Oil_Spray = lazy(() => import('../pages/studio-multi-purpose-dry-oil-spray'))
const Defend_Spray = lazy(() => import('../pages/dual-defend-spray'))
const Roll_On = lazy(() => import('../pages/protect-plus-deodorant-roll-on'))
const Unknown_Parfum_Spray = lazy(() => import('../pages/men-unknown-spray'))
const Refresher_Spray = lazy(() => import('../pages/refresher-spray'))
const Chic_Spray = lazy(() => import('../pages/flora-chic-spray'))

const details = [
    {
        title: "Artistry Studio Multi-Purpose Dry Oil Spray",
        id: "Artistry Studio Multi-Purpose Dry Oil Spray",
        price: "22.30",
        image: "/images/artistry-studio-multi-purpose-dry-oil-spray.jpg",
        path: '/studio-multi-purpose-dry-oil-spray',
        component: Dry_Oil_Spray,
    },
    {
        title: "Satinique Dual Defend Spray",
        id: "Satinique Dual Defend Spray",
        price: "15.80",
        image: "/images/satinique-dual-defend-spray.jpg",
        path: '/dual-defend-spray',
        component: Defend_Spray,
    },
    {
        title: "G&H Protect+ Deodorant & Anti Perspirant Roll-On",
        id: "G&H Protect+ Deodorant & Anti Perspirant Roll-On",
        price: "7.00",
        image: "/images/G&H-protect+-deodorant-roll-on.jpg",
        path: '/protect-plus-deodorant-roll-on',
        component: Roll_On,
    },
    {
        title: "Artistry Men Unknown Eau de Parfum Spray",
        id: "Artistry Men Unknown Eau de Parfum Spray",
        price: "63.00",
        image: "/images/artistry-men-unknown-spray.jpg",
        path: '/men-unknown-spray',
        component: Unknown_Parfum_Spray,
    },
    {
        title: "Glister™ Refresher Spray",
        id: "Glister Refresher Spray",
        price: "5.15",
        image: "/images/refresher-spray.jpg",
        path: '/refresher-spray',
        component: Refresher_Spray,
    },
    {
        title: "Artistry Flora Chic Eau de Parfum Spray",
        id: "Artistry Flora Chic Eau de Parfum Spray",
        price: "70.00",
        image: "/images/artistry-flora-chic-spray.jpg",
        path: '/flora-chic-spray',
        component: Chic_Spray,
    }
]

export default function fragrance() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Fragrance</Heading>
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