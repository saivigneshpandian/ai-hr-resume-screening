import React, { useState, useRef } from 'react';

const ResumeUpload = () => {
    const [status, setStatus] = useState('idle'); // idle, uploading, success, error
    const [errorMessage, setErrorMessage] = useState('');
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        phone: ''
    });
    const inputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            setStatus('idle');
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setStatus('idle');
        }
    };

    const handleUpload = async () => {
        if (!file || !formData.name || !formData.email || !formData.role || !formData.phone) {
            setStatus('error');
            setErrorMessage('check your data and try again');
            return;
        }

        setStatus('uploading');
        setErrorMessage('');

        const data = new FormData();
        // Text fields first
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('role', formData.role);
        data.append('phone', formData.phone);
        data.append('fileName', file.name);
        data.append('uploadedAt', new Date().toISOString());

        // File last
        data.append('resume', file);

        try {
            const response = await fetch('YOUR_N8N_WEBHOOK_URL', {
                method: 'POST',
                body: data,
            });

            if (response.ok) {
                setStatus('success');
            } else {
                setStatus('error');
                setErrorMessage('check your data and try again');
            }
        } catch (error) {
            console.error('Upload error:', error);
            setStatus('error');
            setErrorMessage('check your data and try again');
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    };

    const removeFile = () => {
        setFile(null);
        setStatus('idle');
        setErrorMessage('');
    };

    const isFormValid = file && formData.name && formData.email && formData.role && formData.phone;

    return (
        <div className="w-full max-w-2xl mx-auto p-8 bg-gray-900/40 rounded-3xl backdrop-blur-md shadow-2xl border border-white/5">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent mb-4">
                    Careers
                </h2>
                <p className="text-gray-400 text-lg">Join our team of innovators.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-gray-800 transition-all"
                        required
                    />
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-gray-800 transition-all"
                        required
                    />
                </div>
                <div className="space-y-1 relative">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Applying Role</label>
                    <div className="relative">
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-gray-800 transition-all appearance-none cursor-pointer"
                            required
                        >
                            <option value="" disabled className="bg-gray-900">Select a role</option>
                            <option value="ML Engineer" className="bg-gray-900">ML Engineer</option>
                            <option value="AI Automation Engineer" className="bg-gray-900">AI Automation Engineer</option>
                            <option value="Full Stack Developer" className="bg-gray-900">Full Stack Developer</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-400">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider ml-1">Mobile Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-gray-800/50 border border-gray-700/50 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500/50 focus:bg-gray-800 transition-all"
                        required
                    />
                </div>
            </div>

            <div
                className={`relative group rounded-3xl border-2 border-dashed transition-all duration-300 ease-in-out p-8 text-center mb-8
                    ${dragActive
                        ? "border-indigo-500 bg-indigo-500/10 scale-[1.01] shadow-xl shadow-indigo-500/10"
                        : "border-gray-700/50 bg-gray-800/30 hover:border-gray-600 hover:bg-gray-800/50"
                    }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                />

                {!file ? (
                    <div className="space-y-4">
                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center transition-all duration-300
                            ${dragActive ? "bg-indigo-500 text-white" : "bg-gray-700/50 text-gray-400 group-hover:bg-gray-600 group-hover:text-gray-300"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-gray-200 mb-1">Drop your resume here</p>
                            <p className="text-gray-400 text-sm">or <button onClick={onButtonClick} className="text-indigo-400 hover:text-indigo-300 font-medium hover:underline pointer-events-auto">browse files</button> to upload</p>
                        </div>
                        <p className="text-xs text-gray-500">Supports PDF, DOC, DOCX up to 10MB</p>
                    </div>
                ) : (
                    <div className="pointer-events-auto text-center">
                        <div className="w-12 h-12 mx-auto bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <p className="text-base font-medium text-white mb-1">{file.name}</p>
                        <p className="text-xs text-gray-500 mb-4">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        <button onClick={removeFile} className="text-xs text-red-400 hover:text-red-300 transition-colors uppercase font-bold tracking-widest">Remove File</button>
                    </div>
                )}
            </div>

            <div className="space-y-4">
                <button
                    onClick={handleUpload}
                    disabled={status === 'uploading' || status === 'success'}
                    className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 transform active:scale-[0.98]
                        ${status === 'success'
                            ? 'bg-green-600 shadow-lg shadow-green-600/30'
                            : isFormValid
                                ? 'bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/20'
                                : 'bg-gray-700/50 text-gray-500 cursor-not-allowed'}
                        flex items-center justify-center gap-3`}
                >
                    {status === 'uploading' ? (
                        <>
                            <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                        </>
                    ) : status === 'success' ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Submitted Successfully
                        </>
                    ) : (
                        "Submit"
                    )}
                </button>

                {status === 'error' && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-400 py-3 px-4 rounded-xl text-center text-sm font-medium animate-pulse">
                        {errorMessage}
                    </div>
                )}


            </div>
        </div>
    );
};

export default ResumeUpload;
