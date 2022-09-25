import './shapeTeamMemberCards.scss'

export default function ShapeTeamMemberCards({ member }) {
    return (
        <div className="shape-team-member-cards">
            <img
                className="team-member-image"
                src={member.memberImage}
                alt="team member profile image"
            />
            <div className="team-member-name">{member.name}</div>
            <div className="team-member-description">{member.description}</div>
            <p className="about-team-member">{member.about}</p>
            <div className="about-member-read-more">
                <a href={member.readMoreLink}>Read More</a>
            </div>
            <hr />
        </div>
    )
}
