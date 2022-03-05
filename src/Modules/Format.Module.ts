export const DateFormat = (Date: string) =>
{
    let resultDate = '';
    let initSplitDate = Date.split('-');

    initSplitDate[2] = initSplitDate[2].slice(0, 2);

    for (let index = initSplitDate.length - 1; index >= 0; index--)
    {
        if (index === initSplitDate.length - 1)
        {
            resultDate = resultDate.concat('', initSplitDate[index]);
        }
        else
        {
            resultDate = resultDate.concat('/', initSplitDate[index]);
        }
    }

    return resultDate;
};

export const FormatPhone = (Phone: string) =>
{
    let resultPhone = '';
    const initSplitPhone = Phone.split('-');

    for (let index = 0; index < initSplitPhone.length; index++)
    {
        resultPhone = resultPhone.concat('', initSplitPhone[index]);
    }

    return resultPhone;
};
