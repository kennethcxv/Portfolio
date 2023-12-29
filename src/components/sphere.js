import React, { useEffect } from 'react';

const SphereTagCloud = () => {
    useEffect(() => {
        if (window.TagCloud) {
            const sphereContainer = document.getElementById('sphereContainer');

      // List of tags for the sphere
      const tags = [
        'Security', 'Solutions', 'Businesses', 'Educational', 'Institutions', 'Organizers', 
        'Safety', 'Authorized', 'Attendees', 'Tailored', 'Plans', 'Advanced',
        'Dedicated', 'Cater', 'Secure', 'Authentication', 'Identity', 'Access', 
        'Surveillance', 'Security', 'Threat detection'
      ];

      // Configuration options for the sphere
      const options = {
        radius: 300,
        maxSpeed: 15.0,
        minSpeed: 2.0,
        direction: 135,
        keep: true,
      };

      // Initialize the TagCloud
      window.TagCloud(sphereContainer, tags, options);
    } else {
      console.error('TagCloud script not loaded.');
    }
  }, []);

  return <div id="sphereContainer" style={{
    width: '500px', 
    height: '500px', 
    position: 'relative'
}}></div>
};

export default SphereTagCloud;
