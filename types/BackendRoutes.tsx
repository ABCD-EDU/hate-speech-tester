export interface BackendRoutes {
  ProjectInformation: string;
  ProjectModel: string;
}

const BackendToRoute: BackendRoutes = {
  ProjectInformation: "http://127.0.0.1:8000/models",
  ProjectModel: "http://127.0.0.1:8000/models"
};

export const getBackendRoute = (): BackendRoutes => {
  return BackendToRoute;
};
