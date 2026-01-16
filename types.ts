
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  preferredDate: string;
  location: string;
  message: string;
}
