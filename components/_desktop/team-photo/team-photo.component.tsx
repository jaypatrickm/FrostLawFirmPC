import React from 'react';
import {
  TeamPhotoWrapper,
  TeamPhotoContainer,
  Image,
  ImageContainer,
  ImageCaption
} from './team-photo.styles';

const TeamPhoto = () => {
  return (
    <TeamPhotoWrapper>
      <TeamPhotoContainer>
        <ImageContainer>
          <Image
            src="/images/blog/mesowalk/mesowalk+team-frost-law-firm+tracysaundersart+1.jpg"
            alt="Photo of Team Frost Law Firm at the 8th Annual Mesothelioma Walk"
          />
          <ImageCaption>
            Team Frost Law Firm poses during the 8th Annual Mesothelioma Walk at
            Will Rogers State Historic Park on October 26th 2019.
          </ImageCaption>
        </ImageContainer>
      </TeamPhotoContainer>
    </TeamPhotoWrapper>
  );
};

export default TeamPhoto;
