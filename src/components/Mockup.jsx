export const Mockup = ({name, url, image, tech}) => {
    return (
        <div id={'panel'}>
            <img src={image} alt={name} className='mockup-img'/>
                <a href={url}>
                    <div className='overlay'>
                        <h2 className="bebas">
                            {name}
                        </h2>
                        {tech.map((technologies) => {
                            return (
                                <p className='bebas'>
                                    {technologies}
                                </p>
                            )
                        })}
                    </div>
                </a>
        </div>
    )
}