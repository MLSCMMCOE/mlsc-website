export default function TestimonialCard({
    avatar,
    name,
    designation,
    testimonial
}) {
    return (
        <div class="testimonial-card">
            <div class="card-header">
                <img
                    src={avatar}
                    alt=""
                    id="avatar"
                />
                <div class="author">
                    <h3 class="author-name header-font-700">{name}</h3>
                    <p class="author-desc">
                        {designation}
                    </p>
                </div>
            </div>
            <div class="card-content">
                <p class="body-font-regular">
                    "{testimonial}"
                </p>
            </div>
        </div>
    )
}