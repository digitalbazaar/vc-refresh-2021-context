/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      '@context': {
        id: '@id',
        type: '@type',
        refresh2021: 'https://w3id.org/vc-refresh-2021/v1#',
        url: 'refresh2021:url',
        validAfter: {'@id': 'refresh2021:validAfter', '@type': 'xsd:dateTime'},
        validUntil: {'@id': 'refresh2021:validUntil', '@type': 'xsd:dateTime'},
        MediatedRefresh2021: 'refresh2021:MediatedRefresh2021',
        UnmediatedRefresh2021: 'refresh2021:UnmediatedRefresh2021',
        refreshService: {
          '@id': 'refresh2021:refreshService',
          // reset the context to avoid conflicts with Vc
          // context's refreshService
          '@context': null
        }
      }
    }
  ]
};
