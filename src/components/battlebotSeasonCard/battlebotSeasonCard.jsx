const BattlebotSeasonCard = ({ prevSemesters }) => {
    for (let i = 0; i <= prevSemesters.length; i++) {
        return (
            <div className="battlebotSeasonCardContainer">
                <div className="battlebotSeasonCard">
                    <div className="container">
                        <h3>{prevSemesters[i]}</h3>
                    </div>
                </div>
            </div>
        );
    }
};

export default BattlebotSeasonCard;
