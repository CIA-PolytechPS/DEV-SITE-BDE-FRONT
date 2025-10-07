import { RefObject, useRef } from "react";

export class SmartRef<T> {
    private readonly _forced_listeners = new Set<(prev: T, curr: T) => void>();
    private readonly _listeners = new Set<(prev: T, curr: T) => void>();
    private readonly _ref: RefObject<T>;

    constructor(value: T) {
        this._ref = useRef(value);
    }

    get current(): T {
        return this._ref.current;
    }

    set current(value: T) {
        const prev = this._ref.current;

        if (this._ref.current !== value) {
            this._ref.current = value;
            this._listeners.forEach((callback) => { callback(prev, this._ref.current); });
        }

        this._forced_listeners.forEach((callback) => { callback(prev, this._ref.current); });
    }

    subscribe(callback: (prev: T, curr: T) => void, forced = false): () => void {
        (forced ? this._forced_listeners : this._listeners).add(callback);

        return () => { (forced ? this._forced_listeners : this._listeners).delete(callback); };
    }
}
