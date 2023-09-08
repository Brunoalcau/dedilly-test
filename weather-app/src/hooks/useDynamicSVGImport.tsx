import React, { useRef, useState, useEffect } from 'react';



function useDynamicSVGImport(name: string) {
  const ImportedIconRef = useRef<React.FC<React.SVGProps<SVGSVGElement>>>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setLoading(true);
    const importIcon = async (): Promise<void> => {
      try {
        ImportedIconRef.current = (
          await import(`../assets/icons/${name}.svg`)
        ).ReactComponent;

      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };
    importIcon();
  }, [name]);
  return { error, loading, SvgIcon: ImportedIconRef.current };
}


export default useDynamicSVGImport;