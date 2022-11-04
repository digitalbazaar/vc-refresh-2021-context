/*!
 * Copyright (c) 2021-2022 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      '@version': 1.1,
      '@protected': true,
      id: '@id',
      type: '@type',
      refresh2021: 'https://w3id.org/vc-refresh-2021#',
      url: 'http://schema.org/url',
      MediatedRefresh2021: {
        '@id': 'refresh2021:MediatedRefresh2021',
        '@type': '@id',
        '@context': {
          validAfter: {
            '@id': 'refresh2021:validAfter',
            '@type': 'xsd:dateTime'
          },
          validUntil: {
            '@id': 'refresh2021:validUntil',
            '@type': 'xsd:dateTime'
          }
        }
      },
      UnmediatedRefresh2021: {
        '@id': 'refresh2021:UnmediatedRefresh2021',
        '@type': '@id',
        '@context': {
          validAfter: {
            '@id': 'refresh2021:validAfter',
            '@type': 'xsd:dateTime'
          },
          validUntil: {
            '@id': 'refresh2021:validUntil',
            '@type': 'xsd:dateTime'
          }
        }
      }
    }
  ]
};
