export const dateToInputFormat = (date: Date | string | undefined): string => {
    if (!date) return "";
    if (typeof date === "string") return date;
    const years = String(date.getFullYear()).padStart(4, "0");
    const months = String(date.getMonth()).padStart(2, "0");
    const days = String(date.getDate()).padStart(2, "0");

    // "YYYY-MM-DD"
    return `${years}-${months}-${days}`;
};

export const timeToInputFormat = (date: Date | string | undefined): string => {
    if (!date) return "";
    if (typeof date === "string") return date;
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    
    // "HH:MM"
    return `${hours}:${minutes}`;
};

export const stringToTimeValue = (date_obj: Date, time_string: string): Date => {
    const [hours, minutes] = time_string.split(":").map(Number);
    const new_date = new Date(date_obj);
    new_date.setHours(hours ?? 0, minutes);
    
    return new_date;
};

export const stringToDateValue = (date_string: string): Date => {
    return new Date(date_string + "T00:00:00");
};


// Convertir Date en format datetime-local
export const dateToDatetimeLocalString = (val: string | Date | undefined): string => {
    if (!val) return "";

    if (typeof val === "string") {
        if ((/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/).exec(val)) {
            return val.slice(0, 16);
        }

        return "";
    }

    if (val instanceof Date && !isNaN(val.getTime())) {
        return val.toISOString().slice(0, 16);
    }

    return "";
};

// Convertir datetime-local en Date
export const datetimeLocalStringToDate = (datetime_string: string): Date => {
    return new Date(datetime_string);
};
