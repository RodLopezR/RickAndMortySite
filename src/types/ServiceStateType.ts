interface ServiceStateType {
  data: any;
  loading: boolean;
  error: boolean;
  errorMessage?: string;
}

export const InitialState: ServiceStateType = {
  data: null,
  loading: true,
  error: false,
};

export default ServiceStateType;
