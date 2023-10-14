import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    githubName?: string;
    user: DefaultSession;
    error?: string;
  }
  interface JWT {
    accessToken?: string;
    githubName?: string;
  }
}

declare module "three/examples/jsm/loaders/GLTFLoader" {
  import { LoadingManager, Group } from "three";
  export class GLTFLoader {
    constructor(loadingManager?: LoadingManager);
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void,
    ): void;
  }

  export interface GLTF {
    scene: Group;
  }
}
