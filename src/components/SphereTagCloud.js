import React, { useEffect, useRef, useState } from 'react';

const SphereTagCloud = () => {
  const sphereContainer = useRef(null);
  const [radius, setRadius] = useState(350); // Default radius
  const [isReady, setIsReady] = useState(false); // State to track if the component is ready to render the sphere

  // Function to determine the initial radius based on screen size
  const getInitialRadius = () => {
    const breakpoint2XL = 1536; // 2xl
    const breakpointXL = 1280; // xl
    const breakpointLG = 1024; // lg
    const breakpointMD = 768; // md
    const breakpointSM = 640; // sm

    if (typeof window !== 'undefined') {
      if (window.innerWidth >= breakpoint2XL) {
        return 350;
      } else if (window.innerWidth >= breakpointXL) {
        return 300;
      } else if (window.innerWidth >= breakpointLG) {
        return 250;
      } else if (window.innerWidth >= breakpointMD) {
        return 200;
      } else if (window.innerWidth >= breakpointSM) {
        return 150;
      }
      return 100; // Default for smaller screens
    }
    return 350; // Fallback radius for server-side rendering
  };

  useEffect(() => {
    setRadius(getInitialRadius()); // Set radius on client side
    setIsReady(true); // Set the component as ready to render the sphere

    let scriptLoaded = false;
    const scriptId = 'tag-cloud-script';

    const initializeSphere = () => {
      if (sphereContainer.current && window.TagCloud) {
        const tags = [
          'JavaScript', 'React', 'Node.js', 'Python', 'Machine Learning',
          'C', 'C++', 'Java', 'C#', 'MySQL', 'Visual Basic', 'Ruby', '.NET', 'Next.js', 'TypeScript',
          'Data Structures', 'Computer Architecture', 'Database Management', 'Software Engineering',
           'Cloud Infrastructure', 'OCR', 'NLP',
          'Deep Learning', 'Neural Networks', 'AWS',
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

    if (isReady) {
      loadTagCloudScript();
    }

    window.addEventListener('resize', () => setRadius(getInitialRadius()));

    return () => {
      if (sphereContainer.current) {
        sphereContainer.current.innerHTML = '';
      }
      window.removeEventListener('resize', () => setRadius(getInitialRadius()));
    };
  }, [isReady, radius]);

  if (!isReady) {
    return null; // Don't render the sphere until the component is ready
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div 
        ref={sphereContainer} 
        className="flex sphere-container  dark:text-white text-black  
        sm:mt-[600px] sm:mr-[210px] 
        lg:ml-[500px] lg:mt-[700px] 
        md:ml-[650px] md:mt-[350px]
        xl:ml-[850px] xl:mt-[500px] xl:items-end " 
        style={{width: '300px', height: '700px'}}
      ></div>
    </div>
  );
};

export default SphereTagCloud;