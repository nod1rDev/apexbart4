export const CompanyInfo = () => {
    return (
      <div>
        <div className="flex items-center mb-6">
          <img
            src="/logo.png" // Logotip uchun fayl manzili
            alt="Company Logo"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl font-semibold">Axe Automation</h3>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-4">Automation Discovery Call</h2>
        <p className="text-sm text-gray-600 mb-4">30 min</p>
        <p className="text-gray-700">
          If you are looking to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li>Scale your company with automations and systems</li>
          <li>Reduce your workload</li>
          <li>Improve your margins</li>
        </ul>
      </div>
    );
  };
  