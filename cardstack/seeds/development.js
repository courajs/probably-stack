/* eslint-env node */

module.exports = [
  {
    type: 'fields',
    id: 'slug',
    attributes: {
      'field-type': '@cardstack/core-types::string'
    }
  },
  {
    "type": "fields",
    "id": "title",
    "attributes": {
      "field-type": "@cardstack/core-types::string"
    }
  },
  {
    "type": "fields",
    "id": "date",
    "attributes": {
      "field-type": "@cardstack/core-types::date"
    }
  },
  {
    "type": "fields",
    "id": "description",
    "attributes": {
      "field-type": "@cardstack/core-types::string"
    }
  },
  {
    type: 'content-types',
    id: 'streams',
    attributes: {
      'is-built-in': false
    },
    relationships: {
      fields: {
        data: [
          {
            type: 'fields',
            id: 'slug'
          },
          {
            type: 'fields',
            id: 'title'
          },
          {
            type: 'fields',
            id: 'date'
          },
          {
            type: 'fields',
            id: 'description'
          }
        ]
      }
    }
  },
  {
    type: 'streams',
    id: 0,
    attributes: {
      'slug': 'elixir-and-phoenix-presence',
      'title': 'Elixir & Phoenix Presence',
      'date': '2016-09-23',
      'description':
`The very first one!

We walked through building a small Elixir & Phoenix app for live audience participation. We took advantage of Phoenix Presence.`
    }
  },
  {
    type: 'plugin-configs',
    id: 0,
    attributes: {
      module: '@cardstack/hub'
    },
    relationships: {
      'default-data-source': {
        data: { type: 'data-sources', id: 0 }
      }
    }
  },
  {
    type: 'plugin-configs',
    id: 1,
    attributes: {
      module: '@cardstack/git'
    }
  },
  {
    type: 'plugin-configs',
    id: 3,
    attributes: {
      module: '@cardstack/jsonapi'
    }
  },
  {
    type: 'data-sources',
    id: 0,
    attributes: {
      'source-type': '@cardstack/git',
      params: {
        // Location of our git repository
        repo: __dirname + '/../..',

        // Path within git repository that's reserve for us to read
        // and write our content.
        basePath: 'cardstack',

        // Keep all of the branches we manage segregated under this
        // prefix. So when the user queries 'master' they will really
        // be querying cs-master in our repo.
        //
        // This is intended as a development-mode feature for people
        // who are actively managing their own local git
        // repository. In production or in friendly-desktop mode, this
        // feature should not be needed.
        branchPrefix: 'cs-'
      }
    }
  },
  {
    type: 'grants',
    id: 0,
    attributes: {
      'may-create-resource': true,
      'may-update-resource': true,
      'may-delete-resource': true,
      'may-write-field': true
    }
  }
];
