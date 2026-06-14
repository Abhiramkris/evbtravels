import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './BlogPage.css';

export default function BlogPage() {
  useEffect(() => {
    const scriptId = 'certifyied-blog-embed-script';
    let script = document.getElementById(scriptId);

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
    <section className="blog-page-section">
      <div className="container">
        <Link to="/" className="btn-back-home">
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        {/* Container where the single blog post will load */}
        <div 
          id="certifyied-blog-post" 
          data-project-id="e015b984-9937-4df6-8d16-49ec9237a122"
        ></div>
      </div>
    </section>
  );
}
