import { useState } from 'react';

import { 
    Container,
    InnerContainer
} from "./styles";

const categoryItems = [
    { label: 'All' },
    { label: 'Gaming' },
    { label: 'Music' },
    { label: 'Mixes' },
    { label: 'Nvidia RTX' },
    { label: 'Computers' },
    { label: 'Escape From Tarkov' },
    { label: 'Live' },
    { label: 'Guitar solos' },
    { label: 'Podcasts' },
    { label: 'Call of Duty: Modern Warfare' },
    { label: 'Bodybuilding' },
    { label: 'Gadgets' },
    { label: 'Conversation' },
    { label: 'Action-adventure games' },
    { label: 'Recently uploaded' },
    { label: 'Watched' },
    { label: 'New to you' },
];

interface ICategoryProps {
    expanded: boolean;
    setExpanded: (value: boolean) => void;
}

function Category() {
    const [expanded, setExpanded] = useState(false);

    return (
        <Container>
            <InnerContainer>
                {categoryItems.map((menuItem, index) => (
                    <span
                        key={index}
                        style={{
                            margin: index === 0 ? '12px 12px 12px 24px' : index === categoryItems.length - 1 ? '12px 24px 12px 0' : '12px 12px 12px 0',
                        }}
                    >
                        {menuItem.label}
                    </span>
                ))}
            </InnerContainer>
        </Container>
    )
}

export default Category;