import { Card, Tag } from 'react-bulma-components';
import { FaJsSquare, FaCss3Alt, FaHtml5, FaBootstrap } from 'react-icons/fa';

export const Mockup = ({name, url, image, tech}) => {
    return (
        <div id={'panel'}>
            <Card className='sf-mono-light'>
                <Card.Header>
                    <p className='card-header-title'>
                        {name}
                    </p>
                </Card.Header>
                <Card.Image src={image} alt={name}/>
                <Card.Content>
                    <div id='tech'>
                    {tech.map((technologies, index) => {
                        let color = "";
                        let icon = null;

                        switch (technologies) {
                            case "javascript":
                                color = "warning";
                                icon = <FaJsSquare />;
                                break;
                            case "css":
                                color = "primary";
                                icon = <FaCss3Alt />;
                                break;
                            case "html":
                                color = "danger";
                                icon = <FaHtml5 />;
                                break;
                            case "bootstrap":
                                color = "purple";
                                icon = <FaBootstrap />;
                                break;
                            default:
                                return <p key={index}></p>;
                        }

                        return (
                            <div key={index}>
                                <Tag color={color} className={color} rounded={false} size="default" key={index}>
                                    {icon}
                                </Tag>
                            </div>
                        );
                    })}
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Card.Footer.Item>
                        <a href={url}>Take a look</a>
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
        </div>
    )
}