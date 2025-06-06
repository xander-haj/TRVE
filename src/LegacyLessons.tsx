import React, { useEffect } from 'react';
import content from './legacyContent.html?raw';
import script from './legacyScript.js?raw';

const LegacyLessons: React.FC = () => {
  useEffect(() => {
    // eslint-disable-next-line no-new-func
    const run = new Function(script);
    run();
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export default LegacyLessons;
