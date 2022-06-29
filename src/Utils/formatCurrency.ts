const formatCurrency = (current: number): string => {
    return current.toLocaleString(
        'eu-pt',
        {
            style: 'currency',
            currency: 'EUR'
        });
};

export default formatCurrency