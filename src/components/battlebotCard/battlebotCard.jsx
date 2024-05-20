import './battlebotCard.css';

const BattlebotCard = ({ battlebot }) => {
    return (
        <div className="battlebotCard">
            {/*Image here eventually*/}
            <h3>{battlebot.name}</h3>
            <h4>{battlebot.creator}</h4>
        </div>
    );
};

export default BattlebotCard;
