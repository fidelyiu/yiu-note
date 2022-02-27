import _ from "lodash";

export const jsAdapter = (filePath: string): string => {
    if (_.endsWith(filePath, ".ts")) {
        return filePath.slice(0, -3) + ".js";
    }
    return filePath;
};
