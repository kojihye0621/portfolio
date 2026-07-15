import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center font-sans">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">포트폴리오 스타일 분기</h1>
      <p className="text-gray-500 mb-12">비교해 볼 버전을 선택해 주세요.</p>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* Style A 버튼 */}
        <Link 
          href="/gemini" 
          className="group w-64 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1 transition-all flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">Google Gemini</h2>
          <p className="text-sm text-gray-500">
            모던하고 깔끔한<br />기본 이력서 스타일
          </p>
        </Link>

        {/* Style B 버튼 */}
        <Link 
          href="/gpt" 
          className="group w-64 p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:purple-400 hover:-translate-y-1 transition-all flex flex-col items-center text-center"
        >
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">✨</div>
          <h2 className="text-xl font-bold text-gray-800 mb-2">ChatGPT</h2>
          <p className="text-sm text-gray-500">
            개성있고 트렌디한<br />강조형 포트폴리오 스타일
          </p>
        </Link>
      </div>
    </div>
  );
}