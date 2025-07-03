import { Sandbox } from '@e2b/code-interpreter';

export async function getSandbox(sandboxId : string) {
 
    const sandboxInstance = await Sandbox.connect(sandboxId);
    return sandboxInstance;  
};