import React from 'react';

const ResumeGuidelines = () => {
    const guidelines = [
        {
            type: 'do',
            title: 'Do This',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            ),
            items: [
                'Keep it concise (1-2 pages maximum)',
                'Use clear, professional headings',
                'Quantify your achievements with data',
                'Tailor your resume for each job title',
                'Include a strong professional summary'
            ]
        },
        {
            type: 'dont',
            title: 'Do Not Do This',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ),
            items: [
                'Include unprofessional email addresses',
                'Use complex or hard-to-read fonts',
                'List every job you have ever had',
                'Forget to proofread for typos',
                'Use "I" or "me" in your descriptions'
            ]
        }
    ];

    return (
        <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Resume Best Practices</h2>
                <p className="text-gray-400">Follow these guidelines to increase your chances of getting hired.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {guidelines.map((group, idx) => (
                    <div
                        key={idx}
                        className={`rounded-3xl p-6 border transition-all duration-300
                            ${group.type === 'do'
                                ? 'bg-green-500/5 border-green-500/20 hover:border-green-500/40 shadow-lg shadow-green-500/5'
                                : 'bg-red-500/5 border-red-500/20 hover:border-red-500/40 shadow-lg shadow-red-500/5'}`}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className={`p-2 rounded-xl ${group.type === 'do' ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                                {group.icon}
                            </div>
                            <h3 className={`text-xl font-bold ${group.type === 'do' ? 'text-green-400' : 'text-red-400'}`}>
                                {group.title}
                            </h3>
                        </div>

                        <ul className="space-y-4">
                            {group.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 group">
                                    <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 
                                        ${group.type === 'do' ? 'bg-green-500' : 'bg-red-500'}`}
                                    />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-center">
                <p className="text-indigo-300 font-medium">Pro Tip: Always save your resume as a PDF before uploading!</p>
            </div>
        </div>
    );
};

export default ResumeGuidelines;
