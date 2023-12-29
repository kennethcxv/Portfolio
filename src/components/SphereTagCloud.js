import React, { useEffect, useRef } from 'react';

const SphereTagCloud = () => {
  const sphereContainer = useRef(null);
  const initialized = useRef(false);

  useEffect(() => {
    const loadTagCloudScript = () => {
      if (document.getElementById('tag-cloud-script')) {
        // If script is already present, just initialize the sphere
        initializeSphere();
      } else {
        const script = document.createElement('script');
        script.id = 'tag-cloud-script';
        script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
        script.async = true;
        script.onload = initializeSphere;

        document.body.appendChild(script);
      }
    };

    const initializeSphere = () => {
      if (!initialized.current && sphereContainer.current && window.TagCloud) {
        const tags = [
          'JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning',
          'C', 'C++', 'Java', 'C#', 'MySQL', 'Visual Basic', 'Ruby', '.NET', 'Next.js', 'TypeScript',
          'Data Structures', 'Computer Architecture', 'Database Management', 'Software Engineering', 'Statistics for ML',
          'AI Accounting Software', 'Cloud Infrastructure', 'OCR', 'NLP', 'Disease Outbreak Prediction',
          'Deep Learning', 'Neural Networks', 'E-commerce Backend', 'AWS', 'Culture Coder',
          'TypeScript', 'PostgreSQL', 
          // ... add more tags as needed
        ];
        const options = {
          radius: 350,
          maxSpeed: 'fast',
          initSpeed: 'fast',
          direction: 135,
          keep: true
        };

        window.TagCloud(sphereContainer.current, tags, options);
        initialized.current = true;
      }
    };

    loadTagCloudScript();
  }, []);

  return <div ref={sphereContainer} className="sphere-container" style={{width: '300px', height: '700px' }}></div>;
};

export default SphereTagCloud;
