export const formatSelectOptions = (options: string[]) => {
    return options.map(data => {
        return {
            value: data,
            label: data
        }
    })
};
