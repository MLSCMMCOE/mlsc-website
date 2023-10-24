export default function TestimonialCard({
    avatar,
    name,
    designation,
    testimonial
}) {
    return (
        <div className="testimonial-card">
            <div className="card-header">
                <img
                    src={avatar}
                    alt=""
                    id="avatar"
                />
                <div className="author">
                    <h3 className="author-name header-font-700">{name}</h3>
                    <p className="author-desc">
                        {designation}
                    </p>
                </div>
            </div>
            <div className="card-content">
                <p className="body-font-regular" style={{ textAlign: 'justify' }}>
                    "{testimonial}"
                </p>
            </div>
        </div>
    )
}
