import ENV from '../config/environment';
import { mapValues, omit, each } from 'lodash';

export const getTypeObject = (nodeType) => {
  return ({

    "_links": { "type": { "href": `${ENV.BASE_API_URL}rest/type/node/${nodeType}` } },
    "type": [{ "target_id": nodeType }]
  });
};

;

export const getRelationshipObject = (nodeType, relationships) => {
  const embeddedObject = {};
  each(relationships, rel => {
    embeddedObject[`${ENV.BASE_API_URL}rest/relation/node/${nodeType}/${rel.field}`] = [{ "uuid": [{ "value": rel.value }] }];
  });
  return { "_embedded": embeddedObject };
};

export const mapFormValuesToHalFormat = (obj) => mapValues(omit(obj, 'recaptchaKey'), v => [{ 'value': v }]);
