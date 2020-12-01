module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: 'ec2-54-228-250-82.eu-west-1.compute.amazonaws.com',
        port: '5432',
        database: 'd1bgsflnomh0dr',
        username:'bwtwoevyzqvoha',
        password: '5deec0f3e16032d278a6d6965cc1802942db707b0558cfa7398dccb9fbb5c53c',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
