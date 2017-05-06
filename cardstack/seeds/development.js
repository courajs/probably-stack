/* eslint-env node */

module.exports = [
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
    type: 'plugin-configs',
    id: 4,
    attributes: {
      module: 'cardstack-open-sesame'
    }
  },
  {
    type: 'plugin-configs',
    id: 5,
    attributes: {
      module: '@cardstack/authentication'
    }
  },
  {
    type: 'authentication-sources',
    id: 'open-sesame',
    attributes: {
      'authenticator-type': 'cardstack-open-sesame'
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
    type: 'data-sources',
    id: 1,
    attributes: {
      'source-type': 'cardstack-open-sesame'
    }
  },
  {
    type: 'grants',
    id: 1,
    attributes: {
      'may-create-resource': true,
      'may-update-resource': true,
      'may-delete-resource': true,
      'may-write-field': true
    },
    relationships: {
      who: {
        data: { type: 'admin-users', id: 'admin' }
      }
    }
  }
];
