import React from 'react';

const ClientTestimonials: React.FC = () => {
    const testimonials = [
        {
            name: 'Jane Doe',
            feedback: 'This agency transformed our online presence. Highly recommended!',
        },
        {
            name: 'Richard Roe',
            feedback: 'Their team is professional, talented, and easy to work with.',
        },
    ];

    return (
        <section className="py-16 px-8 bg-[#121212] text-white">
            <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg shadow-md">
                        <p className="text-gray-400 mb-4">"{testimonial.feedback}"</p>
                        <h4 className="text-lg font-semibold">{testimonial.name}</h4>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientTestimonials;
