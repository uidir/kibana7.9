/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { omit } from 'lodash/fp';
import { TimelineType, TimelineStatus } from '../../../../../common/types/timeline';

export const mockDuplicateIdErrors = [];

export const mockParsedObjects = [
  {
    savedObjectId: '79deb4c0-6bc1-11ea-a90b-f5341fb7a189',
    version: 'WzEyMjUsMV0=',
    columns: [],
    dataProviders: [],
    description: 'description',
    eventType: 'all',
    filters: [],
    kqlMode: 'filter',
    kqlQuery: { filterQuery: [Object] },
    title: 'My duplicate timeline',
    dateRange: { start: '2020-03-18T09:31:47.294Z', end: '2020-03-19T09:31:47.294Z' },
    savedQueryId: null,
    sort: { columnId: '@timestamp', sortDirection: 'desc' },
    created: 1584828930463,
    createdBy: 'angela',
    updated: 1584868346013,
    updatedBy: 'angela',
    eventNotes: [
      {
        noteId: '73ac2370-6bc2-11ea-a90b-f5341fb7a189',
        version: 'WzExMjgsMV0=',
        eventId: 'ZaAi8nAB5OldxqFfdhke',
        note: 'event note2',
        timelineId: 'da49a0e0-6bc1-11ea-a90b-f5341fb7a189',
        created: 1584829349563,
        createdBy: 'angela',
        updated: 1584829349563,
        updatedBy: 'angela',
      },
      {
        noteId: 'f7b71620-6bc2-11ea-a0b6-33c7b2a78885',
        version: 'WzExMzUsMV0=',
        eventId: 'ZaAi8nAB5OldxqFfdhke',
        note: 'event note2',
        timelineId: 'da49a0e0-6bc1-11ea-a90b-f5341fb7a189',
        created: 1584829571092,
        createdBy: 'angela',
        updated: 1584829571092,
        updatedBy: 'angela',
      },
    ],
    globalNotes: [
      {
        noteId: 'd2649d40-6bc5-11ea-86f0-5db0048c6086',
        version: 'WzExNjQsMV0=',
        note: 'global',
        timelineId: 'd123dfe0-6bc5-11ea-86f0-5db0048c6086',
        created: 1584830796969,
        createdBy: 'angela',
        updated: 1584830796969,
        updatedBy: 'angela',
      },
    ],
    pinnedEventIds: ['k-gi8nABm-sIqJ_scOoS'],
  },
];

export const mockUniqueParsedObjects = [
  {
    savedObjectId: '79deb4c0-6bc1-11ea-a90b-f5341fb7a189',
    version: 'WzEyMjUsMV0=',
    columns: [],
    dataProviders: [],
    description: 'description',
    eventType: 'all',
    filters: [],
    kqlMode: 'filter',
    kqlQuery: { filterQuery: [] },
    title: 'My duplicate timeline',
    dateRange: { start: '2020-03-18T09:31:47.294Z', end: '2020-03-19T09:31:47.294Z' },
    savedQueryId: null,
    sort: { columnId: '@timestamp', sortDirection: 'desc' },
    created: 1584828930463,
    createdBy: 'angela',
    updated: 1584868346013,
    updatedBy: 'angela',
    eventNotes: [
      {
        noteId: '73ac2370-6bc2-11ea-a90b-f5341fb7a189',
        version: 'WzExMjgsMV0=',
        eventId: 'ZaAi8nAB5OldxqFfdhke',
        note: 'event note1',
        timelineId: 'da49a0e0-6bc1-11ea-a90b-f5341fb7a189',
        created: 1584829349563,
        createdBy: 'angela',
        updated: 1584829349563,
        updatedBy: 'angela',
      },
      {
        noteId: 'f7b71620-6bc2-11ea-a0b6-33c7b2a78885',
        version: 'WzExMzUsMV0=',
        eventId: 'ZaAi8nAB5OldxqFfdhke',
        note: 'event note2',
        timelineId: 'da49a0e0-6bc1-11ea-a90b-f5341fb7a189',
        created: 1584829571092,
        createdBy: 'angela',
        updated: 1584829571092,
        updatedBy: 'angela',
      },
    ],
    globalNotes: [
      {
        noteId: 'd2649d40-6bc5-11ea-86f0-5db0048c6086',
        version: 'WzExNjQsMV0=',
        note: 'global',
        timelineId: 'd123dfe0-6bc5-11ea-86f0-5db0048c6086',
        created: 1584830796969,
        createdBy: 'angela',
        updated: 1584830796969,
        updatedBy: 'angela',
      },
    ],
    pinnedEventIds: ['k-gi8nABm-sIqJ_scOoS'],
  },
];

export const mockGetTimelineValue = {
  savedObjectId: '79deb4c0-6bc1-11ea-a90b-f5341fb7a189',
  version: 'WzEyMjUsMV0=',
  columns: [],
  dataProviders: [],
  description: 'description',
  eventType: 'all',
  filters: [],
  kqlMode: 'filter',
  kqlQuery: { filterQuery: [] },
  title: 'My duplicate timeline',
  timelineType: TimelineType.default,
  dateRange: { start: '2020-03-18T09:31:47.294Z', end: '2020-03-19T09:31:47.294Z' },
  savedQueryId: null,
  sort: { columnId: '@timestamp', sortDirection: 'desc' },
  created: 1584828930463,
  createdBy: 'angela',
  updated: 1584868346013,
  updatedBy: 'angela',
  noteIds: ['d2649d40-6bc5-xxxx-0000-5db0048c6086'],
  pinnedEventIds: ['k-gi8nABm-sIqJ_scOoS'],
};

export const mockGetTemplateTimelineValue = {
  ...mockGetTimelineValue,
  timelineType: TimelineType.template,
  templateTimelineId: '79deb4c0-6bc1-0000-0000-f5341fb7a189',
  templateTimelineVersion: 1,
};

export const mockUniqueParsedTemplateTimelineObjects = [
  { ...mockUniqueParsedObjects[0], ...mockGetTemplateTimelineValue, templateTimelineVersion: 2 },
];

export const mockParsedTemplateTimelineObjects = [
  { ...mockParsedObjects[0], ...mockGetTemplateTimelineValue, templateTimelineVersion: 2 },
];

export const mockGetDraftTimelineValue = {
  savedObjectId: '79deb4c0-6bc1-11ea-a90b-f5341fb7a189',
  version: 'WzEyMjUsMV0=',
  columns: [],
  dataProviders: [],
  description: 'description',
  eventType: 'all',
  filters: [],
  kqlMode: 'filter',
  kqlQuery: { filterQuery: [] },
  title: 'My duplicate timeline',
  dateRange: { start: '2020-03-18T09:31:47.294Z', end: '2020-03-19T09:31:47.294Z' },
  savedQueryId: null,
  sort: { columnId: '@timestamp', sortDirection: 'desc' },
  created: 1584828930463,
  createdBy: 'angela',
  updated: 1584868346013,
  updatedBy: 'angela',
  noteIds: [],
  pinnedEventIds: ['k-gi8nABm-sIqJ_scOoS'],
  timelineType: TimelineType.default,
  status: TimelineStatus.draft,
};

export const mockParsedTimelineObject = omit(
  [
    'globalNotes',
    'eventNotes',
    'pinnedEventIds',
    'version',
    'savedObjectId',
    'created',
    'createdBy',
    'updated',
    'updatedBy',
  ],
  mockUniqueParsedObjects[0]
);

export const mockParsedTemplateTimelineObject = omit(
  [
    'globalNotes',
    'eventNotes',
    'pinnedEventIds',
    'version',
    'savedObjectId',
    'created',
    'createdBy',
    'updated',
    'updatedBy',
  ],
  mockUniqueParsedTemplateTimelineObjects[0]
);

export const mockGetCurrentUser = {
  user: {
    username: 'mockUser',
  },
};

export const mockCreatedTimeline = {
  savedObjectId: '79deb4c0-1111-1111-1111-f5341fb7a189',
  version: 'WzEyMjUsMV0=',
  columns: [],
  dataProviders: [],
  description: 'description',
  eventType: 'all',
  filters: [],
  kqlMode: 'filter',
  kqlQuery: { filterQuery: [] },
  title: 'My duplicate timeline',
  dateRange: { start: '2020-03-18T09:31:47.294Z', end: '2020-03-19T09:31:47.294Z' },
  savedQueryId: null,
  sort: { columnId: '@timestamp', sortDirection: 'desc' },
  created: 1584828930463,
  createdBy: 'angela',
  updated: 1584868346013,
  updatedBy: 'angela',
  eventNotes: [],
  globalNotes: [],
  pinnedEventIds: [],
};

export const mockCreatedTemplateTimeline = {
  ...mockCreatedTimeline,
  ...mockGetTemplateTimelineValue,
};

export const mockCheckTimelinesStatusBeforeInstallResult = {
  timelinesToInstall: [
    {
      savedObjectId: null,
      version: null,
      columns: [
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: '@timestamp',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'signal.rule.description',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'The action captured by the event.\n\nThis describes the information in the event. It is more specific than `event.category`.\nExamples are `group-add`, `process-started`, `file-created`. The value is\nnormally defined by the implementer.',
          columnHeaderType: 'not-filtered',
          id: 'event.action',
          category: 'event',
          type: 'string',
          searchable: null,
          example: 'user-password-change',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'endgame.data.rule_name',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'rule.reference',
          searchable: null,
        },
        {
          aggregatable: true,
          description:
            'Name of the host.\n\nIt can contain what `hostname` returns on Unix systems, the fully qualified\ndomain name, or a name specified by the user. The sender decides which value\nto use.',
          columnHeaderType: 'not-filtered',
          id: 'host.name',
          category: 'host',
          type: 'string',
        },
        {
          aggregatable: true,
          description: 'Operating system name, without the version.',
          columnHeaderType: 'not-filtered',
          id: 'host.os.name',
          category: 'host',
          type: 'string',
          example: 'Mac OS X',
        },
      ],
      dataProviders: [
        {
          excluded: false,
          and: [],
          kqlQuery: '',
          name: '3c322ed995865f642c1a269d54cbd177bd4b0e6efcf15a589f4f8582efbe7509',
          queryMatch: {
            displayValue: null,
            field: '_id',
            displayField: null,
            value: '3c322ed995865f642c1a269d54cbd177bd4b0e6efcf15a589f4f8582efbe7509',
            operator: ':',
          },
          id:
            'send-signal-to-timeline-action-default-draggable-event-details-value-formatted-field-value-timeline-1-signal-id-3c322ed995865f642c1a269d54cbd177bd4b0e6efcf15a589f4f8582efbe7509',
          enabled: true,
        },
      ],
      description: '',
      eventType: 'all',
      filters: [],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            kind: 'kuery',
            expression: '',
          },
          serializedQuery: '',
        },
      },
      title: 'Generic Endpoint Timeline',
      dateRange: {
        start: 1588257731065,
        end: 1588258391065,
      },
      savedQueryId: null,
      sort: {
        columnId: '@timestamp',
        sortDirection: 'desc',
      },
      created: 1588258576517,
      createdBy: 'Elastic',
      updated: 1588261039030,
      updatedBy: 'Elastic',
      eventNotes: [],
      globalNotes: [],
      pinnedEventIds: [],
      timelineType: 'template',
      status: 'immutable',
      templateTimelineId: '2c7e0663-5a91-0001-aa15-26bf756d2c39',
      templateTimelineVersion: 1,
    },
    {
      savedObjectId: null,
      version: null,
      columns: [
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: '@timestamp',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'signal.rule.description',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'The action captured by the event.\n\nThis describes the information in the event. It is more specific than `event.category`.\nExamples are `group-add`, `process-started`, `file-created`. The value is\nnormally defined by the implementer.',
          columnHeaderType: 'not-filtered',
          id: 'event.action',
          category: 'event',
          type: 'string',
          searchable: null,
          example: 'user-password-change',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Array of process arguments, starting with the absolute path to\nthe executable.\n\nMay be filtered to protect sensitive information.',
          columnHeaderType: 'not-filtered',
          id: 'process.args',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '["/usr/bin/ssh","-l","user","10.0.0.16"]',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'process.pid',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'IP address of the source (IPv4 or IPv6).',
          columnHeaderType: 'not-filtered',
          id: 'source.ip',
          category: 'source',
          type: 'ip',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Port of the source.',
          columnHeaderType: 'not-filtered',
          id: 'source.port',
          category: 'source',
          type: 'number',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'IP address of the destination (IPv4 or IPv6).',
          columnHeaderType: 'not-filtered',
          id: 'destination.ip',
          category: 'destination',
          type: 'ip',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'destination.port',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Short name or login of the user.',
          columnHeaderType: 'not-filtered',
          id: 'user.name',
          category: 'user',
          type: 'string',
          searchable: null,
          example: 'albert',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'host.name',
          searchable: null,
        },
      ],
      dataProviders: [
        {
          excluded: false,
          and: [],
          kqlQuery: '',
          name: '30d47c8a1b179ae435058e5b23b96118125a451fe58efd77be288f00456ff77d',
          queryMatch: {
            displayValue: null,
            field: '_id',
            displayField: null,
            value: '30d47c8a1b179ae435058e5b23b96118125a451fe58efd77be288f00456ff77d',
            operator: ':',
          },
          id:
            'send-signal-to-timeline-action-default-draggable-event-details-value-formatted-field-value-timeline-1-signal-id-30d47c8a1b179ae435058e5b23b96118125a451fe58efd77be288f00456ff77d',
          enabled: true,
        },
      ],
      description: '',
      eventType: 'all',
      filters: [],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            kind: 'kuery',
            expression: '',
          },
          serializedQuery: '',
        },
      },
      title: 'Generic Network Timeline',
      dateRange: {
        start: 1588255858373,
        end: 1588256218373,
      },
      savedQueryId: null,
      sort: {
        columnId: '@timestamp',
        sortDirection: 'desc',
      },
      created: 1588256264265,
      createdBy: 'Elastic',
      updated: 1588256629234,
      updatedBy: 'Elastic',
      eventNotes: [],
      globalNotes: [],
      pinnedEventIds: [],
      timelineType: 'template',
      status: 'immutable',
      templateTimelineId: '2c7e0663-5a91-0002-aa15-26bf756d2c39',
      templateTimelineVersion: 1,
    },
    {
      savedObjectId: null,
      version: null,
      columns: [
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: '@timestamp',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'signal.rule.description',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'event.action',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'process.name',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'The working directory of the process.',
          columnHeaderType: 'not-filtered',
          id: 'process.working_directory',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '/home/alice',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Array of process arguments, starting with the absolute path to\nthe executable.\n\nMay be filtered to protect sensitive information.',
          columnHeaderType: 'not-filtered',
          id: 'process.args',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '["/usr/bin/ssh","-l","user","10.0.0.16"]',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'process.pid',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Absolute path to the process executable.',
          columnHeaderType: 'not-filtered',
          id: 'process.parent.executable',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '/usr/bin/ssh',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Array of process arguments.\n\nMay be filtered to protect sensitive information.',
          columnHeaderType: 'not-filtered',
          id: 'process.parent.args',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '["ssh","-l","user","10.0.0.16"]',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Process id.',
          columnHeaderType: 'not-filtered',
          id: 'process.parent.pid',
          category: 'process',
          type: 'number',
          searchable: null,
          example: '4242',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Short name or login of the user.',
          columnHeaderType: 'not-filtered',
          id: 'user.name',
          category: 'user',
          type: 'string',
          searchable: null,
          example: 'albert',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Name of the host.\n\nIt can contain what `hostname` returns on Unix systems, the fully qualified\ndomain name, or a name specified by the user. The sender decides which value\nto use.',
          columnHeaderType: 'not-filtered',
          id: 'host.name',
          category: 'host',
          type: 'string',
          searchable: null,
        },
      ],
      dataProviders: [
        {
          excluded: false,
          and: [],
          kqlQuery: '',
          name: '590eb946a7fdbacaa587ed0f6b1a16f5ad3d659ec47ef35ad0826c47af133bde',
          queryMatch: {
            displayValue: null,
            field: '_id',
            displayField: null,
            value: '590eb946a7fdbacaa587ed0f6b1a16f5ad3d659ec47ef35ad0826c47af133bde',
            operator: ':',
          },
          id:
            'send-signal-to-timeline-action-default-draggable-event-details-value-formatted-field-value-timeline-1-signal-id-590eb946a7fdbacaa587ed0f6b1a16f5ad3d659ec47ef35ad0826c47af133bde',
          enabled: true,
        },
      ],
      description: '',
      eventType: 'all',
      filters: [],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            kind: 'kuery',
            expression: '',
          },
          serializedQuery: '',
        },
      },
      title: 'Generic Process Timeline',
      dateRange: {
        start: 1588161020848,
        end: 1588162280848,
      },
      savedQueryId: null,
      sort: {
        columnId: '@timestamp',
        sortDirection: 'desc',
      },
      created: 1588162404153,
      createdBy: 'Elastic',
      updated: 1588604767818,
      updatedBy: 'Elastic',
      eventNotes: [],
      globalNotes: [],
      pinnedEventIds: [],
      timelineType: 'template',
      status: 'immutable',
      templateTimelineId: '2c7e0663-5a91-0003-aa15-26bf756d2c39',
      templateTimelineVersion: 1,
    },
  ],
  timelinesToUpdate: [],
  prepackagedTimelines: [],
};

export const mockCheckTimelinesStatusAfterInstallResult = {
  timelinesToInstall: [],
  timelinesToUpdate: [],
  prepackagedTimelines: [
    {
      savedObjectId: '4dc6b080-c4f5-11ea-90f7-5913f6a19d5c',
      version: 'WzQxNywxXQ==',
      columns: [
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: '@timestamp',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'signal.rule.description',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'The action captured by the event.\n\nThis describes the information in the event. It is more specific than `event.category`.\nExamples are `group-add`, `process-started`, `file-created`. The value is\nnormally defined by the implementer.',
          columnHeaderType: 'not-filtered',
          id: 'event.action',
          category: 'event',
          type: 'string',
          searchable: null,
          example: 'user-password-change',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Array of process arguments, starting with the absolute path to\nthe executable.\n\nMay be filtered to protect sensitive information.',
          columnHeaderType: 'not-filtered',
          id: 'process.args',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '["/usr/bin/ssh","-l","user","10.0.0.16"]',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'process.pid',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'IP address of the source (IPv4 or IPv6).',
          columnHeaderType: 'not-filtered',
          id: 'source.ip',
          category: 'source',
          type: 'ip',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Port of the source.',
          columnHeaderType: 'not-filtered',
          id: 'source.port',
          category: 'source',
          type: 'number',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'IP address of the destination (IPv4 or IPv6).',
          columnHeaderType: 'not-filtered',
          id: 'destination.ip',
          category: 'destination',
          type: 'ip',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'destination.port',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Short name or login of the user.',
          columnHeaderType: 'not-filtered',
          id: 'user.name',
          category: 'user',
          type: 'string',
          searchable: null,
          example: 'albert',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'host.name',
          searchable: null,
        },
      ],
      dataProviders: [
        {
          excluded: false,
          and: [],
          kqlQuery: '',
          name: '30d47c8a1b179ae435058e5b23b96118125a451fe58efd77be288f00456ff77d',
          queryMatch: {
            displayValue: null,
            field: '_id',
            displayField: null,
            value: '30d47c8a1b179ae435058e5b23b96118125a451fe58efd77be288f00456ff77d',
            operator: ':',
          },
          id:
            'send-signal-to-timeline-action-default-draggable-event-details-value-formatted-field-value-timeline-1-signal-id-30d47c8a1b179ae435058e5b23b96118125a451fe58efd77be288f00456ff77d',
          enabled: true,
        },
      ],
      description: '',
      eventType: 'all',
      filters: [],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            kind: 'kuery',
            expression: '',
          },
          serializedQuery: '',
        },
      },
      title: 'Generic Network Timeline',
      dateRange: {
        start: 1588255858373,
        end: 1588256218373,
      },
      savedQueryId: null,
      sort: {
        columnId: '@timestamp',
        sortDirection: 'desc',
      },
      timelineType: 'template',
      status: 'immutable',
      templateTimelineId: '2c7e0663-5a91-0002-aa15-26bf756d2c39',
      templateTimelineVersion: 1,
      created: 1594636843808,
      createdBy: 'Elastic',
      updated: 1594636843808,
      updatedBy: 'Elastic',
      excludedRowRendererIds: [],
      favorite: [],
      eventIdToNoteIds: [],
      noteIds: [],
      notes: [],
      pinnedEventIds: [],
      pinnedEventsSaveObject: [],
    },
    {
      savedObjectId: '4dc79ae0-c4f5-11ea-90f7-5913f6a19d5c',
      version: 'WzQxOCwxXQ==',
      columns: [
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: '@timestamp',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'signal.rule.description',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'event.action',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'process.name',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'The working directory of the process.',
          columnHeaderType: 'not-filtered',
          id: 'process.working_directory',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '/home/alice',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Array of process arguments, starting with the absolute path to\nthe executable.\n\nMay be filtered to protect sensitive information.',
          columnHeaderType: 'not-filtered',
          id: 'process.args',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '["/usr/bin/ssh","-l","user","10.0.0.16"]',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'process.pid',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Absolute path to the process executable.',
          columnHeaderType: 'not-filtered',
          id: 'process.parent.executable',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '/usr/bin/ssh',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Array of process arguments.\n\nMay be filtered to protect sensitive information.',
          columnHeaderType: 'not-filtered',
          id: 'process.parent.args',
          category: 'process',
          type: 'string',
          searchable: null,
          example: '["ssh","-l","user","10.0.0.16"]',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Process id.',
          columnHeaderType: 'not-filtered',
          id: 'process.parent.pid',
          category: 'process',
          type: 'number',
          searchable: null,
          example: '4242',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description: 'Short name or login of the user.',
          columnHeaderType: 'not-filtered',
          id: 'user.name',
          category: 'user',
          type: 'string',
          searchable: null,
          example: 'albert',
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'Name of the host.\n\nIt can contain what `hostname` returns on Unix systems, the fully qualified\ndomain name, or a name specified by the user. The sender decides which value\nto use.',
          columnHeaderType: 'not-filtered',
          id: 'host.name',
          category: 'host',
          type: 'string',
          searchable: null,
        },
      ],
      dataProviders: [
        {
          excluded: false,
          and: [],
          kqlQuery: '',
          name: '590eb946a7fdbacaa587ed0f6b1a16f5ad3d659ec47ef35ad0826c47af133bde',
          queryMatch: {
            displayValue: null,
            field: '_id',
            displayField: null,
            value: '590eb946a7fdbacaa587ed0f6b1a16f5ad3d659ec47ef35ad0826c47af133bde',
            operator: ':',
          },
          id:
            'send-signal-to-timeline-action-default-draggable-event-details-value-formatted-field-value-timeline-1-signal-id-590eb946a7fdbacaa587ed0f6b1a16f5ad3d659ec47ef35ad0826c47af133bde',
          enabled: true,
        },
      ],
      description: '',
      eventType: 'all',
      filters: [],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            kind: 'kuery',
            expression: '',
          },
          serializedQuery: '',
        },
      },
      title: 'Generic Process Timeline',
      dateRange: {
        start: 1588161020848,
        end: 1588162280848,
      },
      savedQueryId: null,
      sort: {
        columnId: '@timestamp',
        sortDirection: 'desc',
      },
      timelineType: 'template',
      status: 'immutable',
      templateTimelineId: '2c7e0663-5a91-0003-aa15-26bf756d2c39',
      templateTimelineVersion: 1,
      created: 1594636843813,
      createdBy: 'Elastic',
      updated: 1594636843813,
      updatedBy: 'Elastic',
      excludedRowRendererIds: [],
      favorite: [],
      eventIdToNoteIds: [],
      noteIds: [],
      notes: [],
      pinnedEventIds: [],
      pinnedEventsSaveObject: [],
    },
    {
      savedObjectId: '4dc66260-c4f5-11ea-90f7-5913f6a19d5c',
      version: 'WzQxNiwxXQ==',
      columns: [
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: '@timestamp',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'signal.rule.description',
          searchable: null,
        },
        {
          indexes: null,
          aggregatable: true,
          name: null,
          description:
            'The action captured by the event.\n\nThis describes the information in the event. It is more specific than `event.category`.\nExamples are `group-add`, `process-started`, `file-created`. The value is\nnormally defined by the implementer.',
          columnHeaderType: 'not-filtered',
          id: 'event.action',
          category: 'event',
          type: 'string',
          searchable: null,
          example: 'user-password-change',
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'endgame.data.rule_name',
          searchable: null,
        },
        {
          indexes: null,
          name: null,
          columnHeaderType: 'not-filtered',
          id: 'rule.reference',
          searchable: null,
        },
        {
          aggregatable: true,
          description:
            'Name of the host.\n\nIt can contain what `hostname` returns on Unix systems, the fully qualified\ndomain name, or a name specified by the user. The sender decides which value\nto use.',
          columnHeaderType: 'not-filtered',
          id: 'host.name',
          category: 'host',
          type: 'string',
        },
        {
          aggregatable: true,
          description: 'Operating system name, without the version.',
          columnHeaderType: 'not-filtered',
          id: 'host.os.name',
          category: 'host',
          type: 'string',
          example: 'Mac OS X',
        },
      ],
      dataProviders: [
        {
          excluded: false,
          and: [],
          kqlQuery: '',
          name: '3c322ed995865f642c1a269d54cbd177bd4b0e6efcf15a589f4f8582efbe7509',
          queryMatch: {
            displayValue: null,
            field: '_id',
            displayField: null,
            value: '3c322ed995865f642c1a269d54cbd177bd4b0e6efcf15a589f4f8582efbe7509',
            operator: ':',
          },
          id:
            'send-signal-to-timeline-action-default-draggable-event-details-value-formatted-field-value-timeline-1-signal-id-3c322ed995865f642c1a269d54cbd177bd4b0e6efcf15a589f4f8582efbe7509',
          enabled: true,
        },
      ],
      description: '',
      eventType: 'all',
      filters: [],
      kqlMode: 'filter',
      kqlQuery: {
        filterQuery: {
          kuery: {
            kind: 'kuery',
            expression: '',
          },
          serializedQuery: '',
        },
      },
      title: 'Generic Endpoint Timeline',
      dateRange: {
        start: 1588257731065,
        end: 1588258391065,
      },
      savedQueryId: null,
      sort: {
        columnId: '@timestamp',
        sortDirection: 'desc',
      },
      timelineType: 'template',
      status: 'immutable',
      templateTimelineId: '2c7e0663-5a91-0001-aa15-26bf756d2c39',
      templateTimelineVersion: 1,
      created: 1594636843807,
      createdBy: 'Elastic',
      updated: 1594636843807,
      updatedBy: 'Elastic',
      excludedRowRendererIds: [],
      favorite: [],
      eventIdToNoteIds: [],
      noteIds: [],
      notes: [],
      pinnedEventIds: [],
      pinnedEventsSaveObject: [],
    },
  ],
};

export const mockSavedObject = {
  type: 'siem-ui-timeline',
  id: '79deb4c0-6bc1-11ea-a90b-f5341fb7a189',
  attributes: {
    savedQueryId: null,

    status: 'immutable',

    excludedRowRendererIds: [],
    ...mockGetTemplateTimelineValue,
  },
  references: [],
  updated_at: '2020-07-21T12:03:08.901Z',
  version: 'WzAsMV0=',
  namespaces: ['default'],
  score: 0.9444616,
};