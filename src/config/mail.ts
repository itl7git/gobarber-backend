interface IMailConfig {
    driver: 'ethereal' | 'ses';
    defaults: {
        from: {
            email: string;
            name: string;
        }
    }
}

export default {
    driver: process.env.MAIL_DRIVER || 'ethereal',

    defaults: {
        from: {
            email: 'itl_leal@zohomail.com',
            name: 'Italo Leal'
        }
    }
} as IMailConfig;
