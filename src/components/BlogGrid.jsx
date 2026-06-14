import React, { useEffect } from 'react';
import './BlogGrid.css';

export default function BlogGrid() {
  useEffect(() => {
    const scriptId = 'certifyied-blog-embed-script';
    let script = document.getElementById(scriptId);

    // If script already exists, remove it first to re-trigger execution on route changes
    if (script) {
      script.remove();
    }

    script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="blog-grid-section" id="blog">
      <div className="container">
        <div className="blog-grid-header">
          <h2 className="blog-grid-title">Latest from our Blog</h2>
          <p className="blog-grid-subtitle">
            Travel stories, local guides, and transportation updates from Kannur and across Kerala.
          </p>
        </div>

        {/* Container where the 3x3 blog grid will load */}
        <div 
          id="certifyied-blog-container" 
          data-project-id="e015b984-9937-4df6-8d16-49ec9237a122" 
          data-limit="9" 
          data-redirect-url="/blog"
        ></div>
      </div>
    </section>
  );
}
