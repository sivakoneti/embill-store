import { lazy } from 'react'
import { Box, Text, Image, Link, Heading, Stack, Button } from '@chakra-ui/react';

const Toner = lazy(() => import('../pages/fresh-toner'))
const Brush_Set = lazy(() => import('../pages/brush-set'))
const Sharpener = lazy(() => import('../pages/signature-pencil-sharpener'))
const Fit_Compact = lazy(() => import('../pages/exact-fit-compact'))
const Pressed_Powder = lazy(() => import('../pages/exact-fit-pressed-powder'))
const Foam_Cleanser = lazy(() => import('../pages/foaming-cleanser'))
const Bealty_Balm = lazy(() => import('../pages/exact-fit-beauty-balm-perfecting-primer'))

const details = [
    {
        title: "Artistry Hydra-V Fresh toner",
        id: "Artistry Hydra-V Fresh toner",
        price: "20.30",
        image: "/images/hydra-v-fresh-toner.webp",
        path: '/fresh-toner',
        component: Toner,
    },
    {
        title: "Artistry Brush Set",
        id: "Artistry Brush Set",
        price: "62.60",
        image: "/images/artistry-brush-set.webp",
        path: '/brush-set',
        component: Brush_Set,
    },
    {
        title: "Artistry Signature Color Eye Pencil Sharpener",
        id: "Artistry Signature Color Eye Pencil Sharpener",
        price: "3.50",
        image: "/images/artistry-signature-pencil-sharpener.webp",
        path: '/signature-pencil-sharpener',
        component: Sharpener,
    },
    {
        title: "Artistry Exact Fit Compact",
        id: "Artistry Exact Fit Compact",
        price: "13.00",
        image: "/images/artistry-exact-fit-compact.webp",
        path: '/exact-fit-compact',
        component: Fit_Compact,
    },
    {
        title: "Artistry Exact Fit Pressed Powder",
        id: "Artistry Exact Fit Pressed Powder",
        price: "18.70",
        image: "/images/artistry-exact-fit-pressed-powder.webp",
        path: '/exact-fit-pressed-powder',
        component: Pressed_Powder,
    },
    {
        title: "Artistry Hydra-V Fresh Foaming Cleanser",
        id: "Artistry Hydra-V Fresh Foaming Cleanser",
        price: "20.30",
        image: "/images/hydra-v-fresh-foaming-cleanser.webp",
        path: '/foaming-cleanser',
        component: Foam_Cleanser,
    },
    {
        title: "Artistry Exact Fit Beauty Balm Perfecting Primer",
        id: "Artistry Exact Fit Beauty Balm Perfecting Primer",
        price: "31.40",
        image: "/images/artistry-exact-fit-beauty-balm-perfecting-primer.webp",
        path: '/exact-fit-beauty-balm-perfecting-primer',
        component: Bealty_Balm,
    }
]

export default function skin_and_make_up() {
    return (
        <div>
            <main>
                <Heading textAlign="center" p={1}>Skin and Makeup Products</Heading>
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