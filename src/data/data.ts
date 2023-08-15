export const initialBanners = [
    'https://via.placeholder.com/1920x450',
];

export interface CardProps {
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
}

export const cardData: CardProps[] = [
    {
        title: "Card 1",
        image: "https://via.placeholder.com/200x250",
        description: "Descripción de la tarjeta 1.",
        price: 19.99,
        rating: 1.5,
    },
    {
        title: "Card 2",
        image: "https://via.placeholder.com/200x250",
        description: "Descripción de la tarjeta 2.",
        price: 24.99,
        rating: 1.5,
    },
    {
        title: "Card 3",
        image: "https://via.placeholder.com/200x250",
        description: "Descripción de la tarjeta 3.",
        price: 29.99,
        rating: 2.5,
    },
    {
        title: "Card 4",
        image: "https://via.placeholder.com/200x250",
        description: "Descripción de la tarjeta 4.",
        price: 34.99,
        rating: 3.5,
    },
    {
        title: "Card 5",
        image: "https://via.placeholder.com/200x250",
        description: "Descripción de la tarjeta 5.",
        price: 39.99,
        rating: 4.5,
    },
    {
        title: "Card 6",
        image: "https://via.placeholder.com/200x250",
        description: "Descripción de la tarjeta 6.",
        price: 44.99,
        rating: 5.0,
    }
];
