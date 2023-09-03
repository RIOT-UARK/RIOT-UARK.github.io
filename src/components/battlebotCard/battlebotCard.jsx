const BattlebotCard = ({ battlebot, currentSemester }) => {
    if (battlebot.semester == currentSemester) {
        return (
            <div className="battlebotCard">
                <h3>{battlebot.name}</h3>
                <h4>{battlebot.creator}</h4>
            </div>
        );
    }
};

export default BattlebotCard;
