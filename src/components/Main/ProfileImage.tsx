import React, { FunctionComponent } from "react";
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';

export interface ProfileImageProps {
  profileImage: FluidObject;
}

const PROFILE_IMAGE_LINK = 
  `https://willy-kim.github.io/images/me.jpg`;

const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper fluid={profileImage} alt="Profile Image" />
};
export default ProfileImage;

const ProfileImageWrapper = styled(Img)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px){
    width: 80px;
    height: 80px;
  }
`;