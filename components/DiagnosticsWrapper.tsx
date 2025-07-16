import React from 'react';
import DiagnosticsTool from './DiagnosticsTool';

const DiagnosticsWrapper = () => {
    return (
        <section id="diagnostics" className="py-20 md:py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-brand-gray-dark rounded-2xl p-4 md:p-8 shadow-2xl">
                    <DiagnosticsTool />
                </div>
            </div>
        </section>
    );
};

export default DiagnosticsWrapper;