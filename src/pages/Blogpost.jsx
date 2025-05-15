import React from 'react';

const BlogPost = () => {
  const articleData = {
    breadcrumbs: [
      { name: 'Signy', href: '#' },
      { name: 'Блог', href: '#' },
      { name: 'Название статьи', href: '#', current: true },
    ],
    title: 'Название статьи',
    date: '28.05.2020',
    tags: ['много тегов', 'теги', 'много тегов'],
    introduction:
      'Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. One of the best ways to get the luxury of the rich and famous to fit into your budget can be yours through yacht charter companies. These companies specialize in creating custom sailing vacations that redefine travel.',
    sections: [
      {
        heading: 'Planning Your Luxury Trip',
        paragraphs: [
          'With your budget in mind, it is easy to plan a chartered yacht vacation. Companies often have a fleet of sailing vessels that can accommodate parties of various sizes. You may want to make it a more intimate trip with only close family. There are charters that can be rented for as few as two people. These include either a sailboat or motorboat and can come with or without a crew and captain to sail the ship for you. If you choose not to hire a crew, you will have to show that you are knowledgeable of sailing and can handle the ship competently.',
          'The next part of planning is to determine your starting and ending ports. This could be a place close to home and sail in one area or start and finish at two different ports. Generally, starting and stopping in the same port will save you money and is usually more convenient. You can also fly to a destination far from home and then sail another exotic sea. There are luxury yacht charter companies that cruise the Caribbean and Mediterranean seas or around Alaska, the Panama Canal, or anyplace you can imagine.',
          'Determining the type of cruise is another aspect of planning a chartered yachting trip. You can have as little or many crew members as the ship will hold. A captain takes all the worries out of navigating and onboard housekeeping services make it a real vacation that rivals the finest hotel services. You can also choose to have a chef and service crew as part of your vacation package.',
        ],
      },
    ],
  };

  return (
    <div className="bg-white font-sans">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-3" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-1.5">
            {articleData.breadcrumbs.map((crumb, index) => (
              <li key={crumb.name}>
                <div className="flex items-center">
                  {index > 0 && (
                    <svg
                      className="flex-shrink-0 h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                    </svg>
                  )}
                  <a
                    href={crumb.href}
                    className={`ml-1.5 text-xs font-medium ${
                      crumb.current
                        ? 'text-gray-700 hover:text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    aria-current={crumb.current ? 'page' : undefined}
                  >
                    {crumb.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          {articleData.title}
        </h1>

        {/* Meta Info: Date and Tags */}
        <div className="flex items-center space-x-4 mb-8">
          <span className="text-sm text-gray-600">{articleData.date}</span>
          {articleData.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Introduction */}
        <p className="text-gray-700 text-base leading-relaxed mb-8">
          {articleData.introduction}
        </p>

        {/* Content Sections */}
        {articleData.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-8">
            {section.heading && (
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-6">
                {section.heading}
              </h2>
            )}
            {section.paragraphs.map((paragraph, paraIndex) => (
              <p
                key={paraIndex}
                className="text-gray-700 text-base leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;