export class StorageUtil{
    public static storageSave<T>(key: string, value: any): void{
        sessionStorage.setItem(key,JSON.stringify(value));
    }
    public static storageRemove<T>(key: string, value: any): void{
        sessionStorage.removeItem(key);
    }

    public static storageRead<T>(key: string): T | undefined{
        const storedValue = sessionStorage.getItem(key);
        try {
            if(storedValue){
                return JSON.parse(storedValue) as T
            }
            return undefined;
        }
        catch(e){
            sessionStorage.removeItem(key)
            return undefined
        }     
    }
}

