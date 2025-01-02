import React from 'react';

const TeamSection: React.FC = () => {
    const team = [
        { name: 'John Smith', role: 'Web Developer', image: 'path/to/image1.jpg' },
        { name: 'Emily Johnson', role: 'UI/UX Designer', image: 'path/to/image2.jpg' },
        { name: 'Michael Williams', role: 'Project Manager', image: 'path/to/image3.jpg' },
    ];

    return (
        <section className="py-16 px-8 bg-[#1A1A1A] text-white">
            <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="text-center">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-400">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
