type ExperienceProps = {
  company: string;
  role: string;
  duration: string;
  highlights: string[];
};

export default function ExperienceBlock({ company, role, duration, highlights }: ExperienceProps) {
  return (
    <div className="mb-6 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{company}</h2>
      <p className="italic text-sm">{role} • {duration}</p>
      <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
        {highlights.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}