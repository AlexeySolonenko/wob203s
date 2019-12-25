import winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: './tmp/wob203s.log' })
    ]
});

export { logger };