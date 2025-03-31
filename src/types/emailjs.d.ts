declare module '@emailjs/browser' {
  interface EmailJSResponseStatus {
    status: number;
    text: string;
  }

  interface InitOptions {
    publicKey: string;
    blockHeadless?: boolean;
    blockList?: object;
    limitRate?: object;
  }

  export function init(options: InitOptions | string): void;
  
  export function send(
    serviceID: string,
    templateID: string,
    templateParams: Record<string, unknown>,
    publicKey?: string
  ): Promise<EmailJSResponseStatus>;
} 