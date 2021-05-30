import Character from './Character'


const CharacterGrid = ({characters}) => {
    return (
        <section className="cards">
            {characters.map(character => (
                <Character key={character.char_id} character={character} />
            ))}
        </section>
    )
}

export default CharacterGrid
