import Cat from '../../assets/cat.jpg';
import Dog from '../../assets/dog.jpg';

const PetToggle = ({ petType, setPetType }) => {
  return (
    <div className="flex h-30 w-60">
      <button
        className={`flex-1 rounded-l-md ${
          petType === 'cat' && 'rounded border-color1 border-[5px]'
        }`}
        onClick={() => setPetType('cat')}
      >
        <img src={Cat} alt="dog" />
      </button>
      <button
        className={`flex-1 rounded-r-md ${
          petType === 'dog' && ' rounded border-color1 border-[5px] '
        }`}
        onClick={() => setPetType('dog')}
      >
        <img src={Dog} alt="dog" />
      </button>
    </div>
  );
};

export default PetToggle;
