interface MSPError extends Error { }

interface MSPErrorConstructor {
    new(name: string, message?: string): MSPError;
    (name: string, message?: string): MSPError;
    readonly prototype: MSPError;
}

export declare var MSPError: MSPErrorConstructor;

export { }