import React, { useEffect, useRef } from 'react';

const SphereTagCloud = () => {
  const sphereContainer = useRef(null);

  useEffect(() => {
    let scriptLoaded = false;
    const scriptId = 'tag-cloud-script';

    const initializeSphere = () => {
      if (sphereContainer.current && window.TagCloud) {
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
      }
    };

    const loadTagCloudScript = () => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js';
        script.async = true;
        script.onload = () => {
          scriptLoaded = true;
          initializeSphere();
        };

        document.body.appendChild(script);
      } else if (!scriptLoaded) {
        initializeSphere();
      }
    };

    loadTagCloudScript();

    return () => {
      if (sphereContainer.current) {
        sphereContainer.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={sphereContainer} 
      className="flex flex-col sphere-container dark:text-white text-black" 
      style={{width: '300px', height: '700px'}}
    ></div>
  );
};

export default SphereTagCloud;
