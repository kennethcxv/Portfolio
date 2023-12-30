import React, { useEffect, useRef, useState } from 'react';

const SphereTagCloud = () => {
  const sphereContainer = useRef(null);
  const [radius, setRadius] = useState(350); // Default radius is 350px

  useEffect(() => {
    let scriptLoaded = false;
    const scriptId = 'tag-cloud-script';

    const updateRadiusBasedOnScreenSize = () => {
      // Define the breakpoint for XL screen size (e.g., 1200px)
      const breakpointXL = 1535; 
      const newRadius = window.innerWidth <= breakpointXL ? 275 : 350;
      setRadius(newRadius);
    };

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
          radius: radius,
          maxSpeed: 'fast',
          initSpeed: 'fast',
          direction: 135,
          keep: true,
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
    updateRadiusBasedOnScreenSize();
    window.addEventListener('resize', updateRadiusBasedOnScreenSize);

    return () => {
      if (sphereContainer.current) {
        sphereContainer.current.innerHTML = '';
      }
      window.removeEventListener('resize', updateRadiusBasedOnScreenSize);
    };
  }, [radius]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div 
        ref={sphereContainer} 
        className="flex sphere-container dark:text-white text-black xl:mb:60  " 
        style={{width: '300px', height: '700px'}}
      ></div>
    </div>
  );
};
export default SphereTagCloud;