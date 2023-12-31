import React, { useEffect, useRef, useState } from 'react';

const SphereTagCloud = () => {
  const sphereContainer = useRef(null);
  const [radius, setRadius] = useState(350); // Default radius is 350px

  useEffect(() => {
    let scriptLoaded = false;
    const scriptId = 'tag-cloud-script';

    const updateRadiusBasedOnScreenSize = () => {
      // Define breakpoints for different screen sizes
      const breakpoint2XL = 1536; // 2xl
      const breakpointXL = 1280; // xl
      const breakpointLG = 1024; // lg
      const breakpointMD = 768; // md
      const breakpointSM = 640; // sm
    
      let newRadius;
    
      if (window.innerWidth >= breakpoint2XL) {
        newRadius = 350; // Regular size (above 2xl)
      } else if (window.innerWidth >= breakpointXL && window.innerWidth < breakpoint2XL) {
        newRadius = 300; // 2xl screens
      } else if (window.innerWidth >= breakpointLG && window.innerWidth < breakpointXL) {
        newRadius = 350; // xl screens
      } else if (window.innerWidth >= breakpointMD && window.innerWidth < breakpointLG) {
        newRadius = 275; // lg screens
      } else if (window.innerWidth >= breakpointSM && window.innerWidth < breakpointMD) {
        newRadius = 200; // md screens
      } else if (window.innerWidth < breakpointSM) {
        newRadius = 170; // sm screens
      } else {
        newRadius = 350; // Default for other sizes
      }
    
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
        className="flex sphere-container sm:mt-[500px] sm:mr-[210px] lg:ml-[800px] lg:mt-[500px] md:ml-[650px] md:mt-[350px] dark:text-white text-black  xl:ml-[1000px] xl:mt-[700px] xl:items-end  " 
        style={{width: '300px', height: '700px'}}
      ></div>
    </div>
  );
};
export default SphereTagCloud;