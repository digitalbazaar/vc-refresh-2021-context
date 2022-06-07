/*!
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

module.exports = {
  '@context': [
    'https://www.w3.org/2018/credentials/v1',
    {
      id: '@id',
      type: '@type',
      refresh2021: 'https://w3id.org/vc-refresh-2021#',
      url: 'http://schema.org/url',
      validAfter: {'@id': 'refresh2021:validAfter', '@type': 'xsd:dateTime'},
      validUntil: {'@id': 'refresh2021:validUntil', '@type': 'xsd:dateTime'},
      MediatedRefresh2021: 'refresh2021:MediatedRefresh2021',
      UnmediatedRefresh2021: 'refresh2021:UnmediatedRefresh2021',
    }
  ]
};
