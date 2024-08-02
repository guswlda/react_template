import React from 'react';
import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from '../constants/data';
// import { Link } from 'react-router-dom';
import FooterContents from './FooterContents';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10">
        <FooterContents title="Resources" linkData={resourcesLinks} />
        <FooterContents title="PlateForm" linkData={platformLinks} />
        <FooterContents title="Community" linkData={communityLinks} />
      </div>
    </footer>
  );
};

export default Footer;
