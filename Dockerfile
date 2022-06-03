FROM amazon/aws-lambda-nodejs:12

COPY ./src package*.json  ${LAMBDA_TASK_ROOT} 

RUN  npm ci --only=production

CMD ["sendingemail.handler"]