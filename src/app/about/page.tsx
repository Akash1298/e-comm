import Image from 'next/image';
import { StarIcon, HeartIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Founder & CEO',
      image: 'https://img.freepik.com/free-photo/portrait-young-man-with-green-hoodie_23-2148514952.jpg',
      bio: 'With over 15 years of experience in fashion retail, Sarah leads our company with passion and vision.',
    },
    {
      name: 'John Doe Brother',
      role: 'Creative Director',
      image: 'https://img.freepik.com/free-photo/man-isolated-showing-facial-emotions_1303-20262.jpg',
      bio: 'Michael brings his creative expertise to curate our unique product selection and brand identity.',
    },
    {
      name: 'John Doe Father',
      role: 'Customer Experience',
      image: 'https://img.freepik.com/free-photo/close-up-smiley-senior-man_23-2149196165.jpg',
      bio: 'Emma ensures every customer receives exceptional service and support throughout their journey.',
    },
    {
      name: 'John Doe Grandpa',
      role: 'Technology Lead',
      image: 'https://img.freepik.com/free-photo/bearded-grey-haired-elderly-man-dressed-formal-suit_273609-5562.jpg',
      bio: 'David oversees our digital infrastructure and ensures a seamless shopping experience.',
    },
  ];

  const values = [
    {
      icon: StarIcon,
      title: 'Quality First',
      description: 'We never compromise on quality, ensuring every product meets our high standards.',
    },
    {
      icon: HeartIcon,
      title: 'Customer Focus',
      description: 'Our customers are at the heart of everything we do, driving our decisions and innovations.',
    },
    {
      icon: SparklesIcon,
      title: 'Innovation',
      description: 'We constantly evolve and innovate to bring you the latest trends and technologies.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Sustainability',
      description: "We're committed to sustainable practices and reducing our environmental impact.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Story
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Founded in 2020, StyleHub has grown from a small startup to a leading fashion destination,
              serving thousands of customers worldwide with our unique blend of style and quality.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://img.freepik.com/free-photo/online-shopping-concept_23-2151896842.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At StyleHub, we're on a mission to revolutionize the online shopping experience.
                We believe that everyone deserves access to high-quality fashion that makes them
                feel confident and beautiful.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to quality, customer service, and sustainable practices sets us
                apart in the industry. We're not just selling products; we're creating
                experiences that inspire and empower our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do at StyleHub
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="h-12 w-12 text-indigo-600 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind StyleHub's success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/90">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/90">Products Available</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
