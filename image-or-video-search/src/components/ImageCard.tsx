import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const ImageCard = (props: any) => {
  const images: any[] = props.images.map((image: any) => {
    return (
      <Card key={image.id}>
        <Image
          wrapped
          key={image.id}
          src={image.urls.regular}
          ui={false}
          alt={image.alt_description}
        />
        <Card.Content>
          <Card.Header>
            <a
              href={image.user.links.html}
              target="_blank"
              rel="noreferrer external"
            >
              {image.user.username}
            </a>
          </Card.Header>
          <Card.Meta>
            <span className="date">On: {image.created_at}</span>
          </Card.Meta>
          <Card.Description>
            {image.description || image.alt_description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon size="small" color="pink" name="like" />
          {image.likes}
        </Card.Content>
      </Card>
    );
  });
  if (images.length === 0) return <div>No Results Found</div>;
  return <div className="image-card">{images}</div>;
};

export default ImageCard;
