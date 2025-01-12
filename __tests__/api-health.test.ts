import { DiagnosticSeverity } from '@stoplight/types';
import testRule from './__helpers__/helper';

testRule('api-health', [
  {
    name: 'valid case',
    document: {
      openapi: '3.1.0',
      info: { version: '1.0', contact: {} },
      paths: { '/health': {} },
    },
    errors: [],
  },

  {
    name: 'invalid case',
    document: {
      openapi: '3.1.0',
      info: { version: '1.0', contact: {} },
      paths: {},
    },
    errors: [
      {
        message: 'Creating a `/health` endpoint is a simple solution for pull-based monitoring and manually checking the status of an API.',
        path: ['paths'],
        severity: DiagnosticSeverity.Warning,
      },
    ],
  },
]);
