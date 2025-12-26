import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';

const NonBenefitPage = () => {
    // Reference data structure (placeholder)
    const nonBenefitItems = [
        { category: '제증명수수료', name: '일반진단서', code: 'A001', cost: '10,000원', remarks: '-' },
        { category: '제증명수수료', name: '영문진단서', code: 'A002', cost: '20,000원', remarks: '-' },
        { category: '제증명수수료', name: '상해진단서(3주미만)', code: 'A003', cost: '100,000원', remarks: '-' },
        { category: '처치 및 수술료', name: '레이저시술(점제거)', code: 'B001', cost: '5,000원~', remarks: '개당/크기에따라 상이' },
        { category: '초음파검사료', name: '초음파영상(피부)', code: 'C001', cost: '50,000원', remarks: '-' },
        // Add more rows as needed
    ];

    const isScrolled = true; // Always show scrolled header style for subpages usually

    return (
        <div className="min-h-screen flex flex-col font-suit">
            <Header isScrolled={isScrolled} />

            {/* Subpage Banner similar to reference or just simple spacing */}
            <div className="pt-[100px] pb-10 bg-gray-50">
                <div className="max-w-[1400px] mx-auto px-6">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">비급여 진료비 안내</h1>
                    <p className="text-gray-600">미호의원의 비급여 진료비 항목을 안내해 드립니다.</p>
                </div>
            </div>

            <main className="flex-grow bg-white py-12">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border-t-2 border-gray-900 text-sm md:text-base">
                            <thead>
                                <tr className="bg-gray-100 text-gray-700">
                                    <th className="py-4 px-6 border-b border-gray-300 font-bold w-[15%]">분류</th>
                                    <th className="py-4 px-6 border-b border-gray-300 font-bold w-[30%]">명칭</th>
                                    <th className="py-4 px-6 border-b border-gray-300 font-bold w-[15%]">코드</th>
                                    <th className="py-4 px-6 border-b border-gray-300 font-bold w-[15%]">비용(VAT포함)</th>
                                    <th className="py-4 px-6 border-b border-gray-300 font-bold w-[25%]">비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                {nonBenefitItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-gray-50 transition-colors text-center text-gray-600">
                                        <td className="py-4 px-6 border-b border-gray-200">{item.category}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-left font-medium text-gray-800">{item.name}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-400">{item.code}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 font-bold text-gray-900">{item.cost}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-500 text-left">{item.remarks}</td>
                                    </tr>
                                ))}
                                {nonBenefitItems.map((item, index) => (
                                    <tr key={`dup-${index}`} className="hover:bg-gray-50 transition-colors text-center text-gray-600">
                                        <td className="py-4 px-6 border-b border-gray-200">{item.category}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-left font-medium text-gray-800">{item.name}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-400">{item.code}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 font-bold text-gray-900">{item.cost}</td>
                                        <td className="py-4 px-6 border-b border-gray-200 text-gray-500 text-left">{item.remarks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 text-sm text-gray-500 bg-gray-50 p-6 rounded-lg">
                        <ul className="list-disc pl-5 space-y-1">
                            <li>상기 비급여 진료비용은 의료법 제45조에 의거하여 고지합니다.</li>
                            <li>진료 상황 및 환자의 상태에 따라 구체적인 진료비용은 변동될 수 있습니다.</li>
                            <li>제증명수수료는 의료법 제45조의3에 의거하여 고지합니다.</li>
                        </ul>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NonBenefitPage;
