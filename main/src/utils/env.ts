import commonConstant from "../constant/common";

export const isDev = () => {
    return process.env[commonConstant.ENV] === commonConstant.ENV_DEV;
};

export const isProd = () => {
    return process.env[commonConstant.ENV] === commonConstant.ENV_PROD;
};
