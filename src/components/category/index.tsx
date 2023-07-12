import { useCategoryContext } from "../../contexts/categoryContext";
import { 
    Container,
    InnerContainer
} from "./styles";

const categoryItems = [
    { label: 'All', id: '0' },
    { label: 'Gaming', id: '20' },
    { label: 'Music', id: '10' },
    { label: 'Movies', id: '30' },
    { label: 'Howto & Style', id: '26' },
    { label: 'Vehicles', id: '2' },
    { label: 'Sports', id: '17' },
    { label: 'Anime/Animation', id: '21' },
    { label: 'Travel & Events', id: '19' },
    { label: 'Shorts', id: '42' },
    { label: 'Science & Technology', id: '28' },
    { label: 'Trailers', id: '40' },
    { label: 'Recently uploaded', id: '0' },
    { label: 'Watched', id: '0' },
    { label: 'New to you', id: '0' },
];

function Category() {
    const { setCategoryId } = useCategoryContext()

    function searchCategory(id: string) {
        setCategoryId(id)
    }

    return (
        <Container>
            <InnerContainer>
                {categoryItems.map((categoryItem, index) => (
                    <span
                        onClick={() => searchCategory(categoryItem.id)}
                        key={index}
                        style={{ 
                            margin: index === 0 
                            ? '12px 12px 12px 24px' 
                            : index === categoryItems.length - 1 
                            ? '12px 24px 12px 0' : '12px 12px 12px 0' 
                        }}
                    >
                        {categoryItem.label}
                    </span>
                ))}
            </InnerContainer>
        </Container>
    )
}

export default Category;