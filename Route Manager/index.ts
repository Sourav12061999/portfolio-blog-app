import type { NextApiRequest, NextApiResponse } from "next";
class RouteManager {
  request: NextApiRequest;
  response: NextApiResponse;
  constructor(req: NextApiRequest, res: NextApiResponse) {
    this.request = req;
    this.response = res;
  }
  get(callback: (req: NextApiRequest, res: NextApiResponse) => void) {
    if (this.request.method !== "GET") {
      return;
    }
    callback(this.request, this.response);
  }

  post(callback: (req: NextApiRequest, res: NextApiResponse) => void) {
    if (this.request.method !== "POST") {
      return;
    }
    callback(this.request, this.response);
  }

  patch(callback: (req: NextApiRequest, res: NextApiResponse) => void) {
    if (this.request.method !== "PATCH") {
      return;
    }
    callback(this.request, this.response);
  }

  delete(callback: (req: NextApiRequest, res: NextApiResponse) => void) {
    if (this.request.method !== "DELETE") {
      return;
    }
    callback(this.request, this.response);
  }
}

export default RouteManager;
