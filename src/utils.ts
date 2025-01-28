interface Benefit {
  title: string;
  description: string;
}

interface Example {
  title: string;
  description: string;
}

interface Service {
  id: number;
  title: string;
  img: string;
  overview: string;
  Services_Offered: ServiceOffering[];
  Benefits: Benefit[];
  Examples: Example[];
}

interface ServiceOffering {
  title: string;
  description: string;
}

// Add data validation
const validateService = (service: Service): boolean => {
  return (
    typeof service.id === 'number' &&
    typeof service.title === 'string' &&
    typeof service.img === 'string' &&
    Array.isArray(service.Services_Offered) &&
    Array.isArray(service.Benefits)
  );
};

export const services: Service[] = [
  // ...existing services
].filter(validateService);
