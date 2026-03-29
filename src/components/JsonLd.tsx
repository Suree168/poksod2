type JsonLdValue = Record<string, unknown>;

type JsonLdProps = {
  data: JsonLdValue | JsonLdValue[];
};

const JsonLd = ({ data }: JsonLdProps) => {
  const entries = Array.isArray(data) ? data : [data];

  return (
    <>
      {entries.map((entry, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }}
        />
      ))}
    </>
  );
};

export default JsonLd;
