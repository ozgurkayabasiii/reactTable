    export interface Bindings {
        select: any[];
        from: any[];
        join: any[];
        where: any[];
        groupBy: any[];
        having: any[];
        order: any[];
        union: any[];
        unionOrder: any[];
    }

    export interface Data {
        connection: any[];
        grammar: any[];
        processor: any[];
        bindings: Bindings;
        aggregate?: any;
        columns: any[];
        distinct: boolean;
        from: string;
        joins?: any;
        wheres: any[];
        groups?: any;
        havings?: any;
        orders?: any;
        limit: number;
        offset: number;
        unions?: any;
        unionLimit?: any;
        unionOffset?: any;
        unionOrders?: any;
        lock?: any;
        beforeQueryCallbacks: any[];
        operators: string[];
        bitwiseOperators: string[];
        useWritePdo: boolean;
    }

    export interface Result {
        status: string;
        statusMessage: string;
        statusMessageDetail: string;
        statusCode: number;
        statusCodeE: string;
    }

    export interface RootObject {
        data: Data;
        result: Result;
    }

