// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.Club
 * @header lbServices.Club
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Club` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Club",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Clubs/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Club.races.findById() instead.
            "prototype$__findById__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/races/:fk",
              method: "GET",
            },

            // INTERNAL. Use Club.races.destroyById() instead.
            "prototype$__destroyById__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/races/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Club.races.updateById() instead.
            "prototype$__updateById__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/races/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Club.administrator() instead.
            "prototype$__get__administrator": {
              url: urlBase + "/Clubs/:id/administrator",
              method: "GET",
            },

            // INTERNAL. Use Club.participants.findById() instead.
            "prototype$__findById__participants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/participants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Club.participants.destroyById() instead.
            "prototype$__destroyById__participants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/participants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Club.participants.updateById() instead.
            "prototype$__updateById__participants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/participants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Club.races() instead.
            "prototype$__get__races": {
              isArray: true,
              url: urlBase + "/Clubs/:id/races",
              method: "GET",
            },

            // INTERNAL. Use Club.races.create() instead.
            "prototype$__create__races": {
              url: urlBase + "/Clubs/:id/races",
              method: "POST",
            },

            // INTERNAL. Use Club.races.destroyAll() instead.
            "prototype$__delete__races": {
              url: urlBase + "/Clubs/:id/races",
              method: "DELETE",
            },

            // INTERNAL. Use Club.races.count() instead.
            "prototype$__count__races": {
              url: urlBase + "/Clubs/:id/races/count",
              method: "GET",
            },

            // INTERNAL. Use Club.participants() instead.
            "prototype$__get__participants": {
              isArray: true,
              url: urlBase + "/Clubs/:id/participants",
              method: "GET",
            },

            // INTERNAL. Use Club.participants.create() instead.
            "prototype$__create__participants": {
              url: urlBase + "/Clubs/:id/participants",
              method: "POST",
            },

            // INTERNAL. Use Club.participants.destroyAll() instead.
            "prototype$__delete__participants": {
              url: urlBase + "/Clubs/:id/participants",
              method: "DELETE",
            },

            // INTERNAL. Use Club.participants.count() instead.
            "prototype$__count__participants": {
              url: urlBase + "/Clubs/:id/participants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#create
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Clubs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#createMany
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Clubs",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#upsert
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Clubs",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#replaceOrCreate
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Clubs/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#exists
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Clubs/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#findById
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Clubs/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#replaceById
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Clubs/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#find
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Clubs",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#findOne
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Clubs/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#updateAll
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Clubs/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#deleteById
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Clubs/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#count
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Clubs/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#prototype$updateAttributes
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Clubs/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Club#createChangeStream
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Clubs/change-stream",
              method: "POST",
            },

            // INTERNAL. Use People.club() instead.
            "::get::People::club": {
              url: urlBase + "/Peoples/:id/club",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Club#patchOrCreate
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Club#updateOrCreate
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Club#update
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Club#destroyById
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Club#removeById
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Club#patchAttributes
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Club#modelName
        * @propertyOf lbServices.Club
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Club`.
        */
        R.modelName = "Club";

    /**
     * @ngdoc object
     * @name lbServices.Club.races
     * @header lbServices.Club.races
     * @object
     * @description
     *
     * The object `Club.races` groups methods
     * manipulating `Race` instances related to `Club`.
     *
     * Call {@link lbServices.Club#races Club.races()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Club#races
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Queries races of Club.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::get::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#count
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Counts races of Club.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.races.count = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::count::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#create
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Creates a new instance in races of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.create = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::create::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#createMany
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Creates a new instance in races of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.createMany = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::createMany::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#destroyAll
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Deletes all races of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.races.destroyAll = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::delete::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#destroyById
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Delete a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.races.destroyById = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::destroyById::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#findById
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Find a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.findById = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::findById::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.races#updateById
             * @methodOf lbServices.Club.races
             *
             * @description
             *
             * Update a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.updateById = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::updateById::Club::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club#administrator
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Fetches belongsTo relation administrator.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.administrator = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::get::Club::administrator"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Club.participants
     * @header lbServices.Club.participants
     * @object
     * @description
     *
     * The object `Club.participants` groups methods
     * manipulating `Participant` instances related to `Club`.
     *
     * Call {@link lbServices.Club#participants Club.participants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Club#participants
             * @methodOf lbServices.Club
             *
             * @description
             *
             * Queries participants of Club.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R.participants = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::get::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#count
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Counts participants of Club.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.participants.count = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::count::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#create
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Creates a new instance in participants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R.participants.create = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::create::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#createMany
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Creates a new instance in participants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R.participants.createMany = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::createMany::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#destroyAll
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Deletes all participants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.participants.destroyAll = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::delete::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#destroyById
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Delete a related item by id for participants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.participants.destroyById = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::destroyById::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#findById
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Find a related item by id for participants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R.participants.findById = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::findById::Club::participants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Club.participants#updateById
             * @methodOf lbServices.Club.participants
             *
             * @description
             *
             * Update a related item by id for participants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R.participants.updateById = function() {
          var TargetResource = $injector.get("Participant");
          var action = TargetResource["::updateById::Club::participants"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Race
 * @header lbServices.Race
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Race` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Race",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Races/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Race.fees.findById() instead.
            "prototype$__findById__fees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/fees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Race.fees.destroyById() instead.
            "prototype$__destroyById__fees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/fees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Race.fees.updateById() instead.
            "prototype$__updateById__fees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/fees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Race.participate.findById() instead.
            "prototype$__findById__participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/:fk",
              method: "GET",
            },

            // INTERNAL. Use Race.participate.destroyById() instead.
            "prototype$__destroyById__participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Race.participate.updateById() instead.
            "prototype$__updateById__participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Race.participate.link() instead.
            "prototype$__link__participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Race.participate.unlink() instead.
            "prototype$__unlink__participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Race.participate.exists() instead.
            "prototype$__exists__participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Race.fees() instead.
            "prototype$__get__fees": {
              isArray: true,
              url: urlBase + "/Races/:id/fees",
              method: "GET",
            },

            // INTERNAL. Use Race.fees.create() instead.
            "prototype$__create__fees": {
              url: urlBase + "/Races/:id/fees",
              method: "POST",
            },

            // INTERNAL. Use Race.fees.destroyAll() instead.
            "prototype$__delete__fees": {
              url: urlBase + "/Races/:id/fees",
              method: "DELETE",
            },

            // INTERNAL. Use Race.fees.count() instead.
            "prototype$__count__fees": {
              url: urlBase + "/Races/:id/fees/count",
              method: "GET",
            },

            // INTERNAL. Use Race.participate() instead.
            "prototype$__get__participate": {
              isArray: true,
              url: urlBase + "/Races/:id/participate",
              method: "GET",
            },

            // INTERNAL. Use Race.participate.create() instead.
            "prototype$__create__participate": {
              url: urlBase + "/Races/:id/participate",
              method: "POST",
            },

            // INTERNAL. Use Race.participate.destroyAll() instead.
            "prototype$__delete__participate": {
              url: urlBase + "/Races/:id/participate",
              method: "DELETE",
            },

            // INTERNAL. Use Race.participate.count() instead.
            "prototype$__count__participate": {
              url: urlBase + "/Races/:id/participate/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#create
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Races",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#createMany
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Races",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#upsert
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Races",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#replaceOrCreate
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Races/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#exists
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Races/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#findById
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Races/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#replaceById
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Races/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#find
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Races",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#findOne
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Races/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#updateAll
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Races/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#deleteById
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Races/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#count
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Races/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#prototype$updateAttributes
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Races/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Race#createChangeStream
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Races/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Club.races.findById() instead.
            "::findById::Club::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/races/:fk",
              method: "GET",
            },

            // INTERNAL. Use Club.races.destroyById() instead.
            "::destroyById::Club::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/races/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Club.races.updateById() instead.
            "::updateById::Club::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/races/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Club.races() instead.
            "::get::Club::races": {
              isArray: true,
              url: urlBase + "/Clubs/:id/races",
              method: "GET",
            },

            // INTERNAL. Use Club.races.create() instead.
            "::create::Club::races": {
              url: urlBase + "/Clubs/:id/races",
              method: "POST",
            },

            // INTERNAL. Use Club.races.createMany() instead.
            "::createMany::Club::races": {
              isArray: true,
              url: urlBase + "/Clubs/:id/races",
              method: "POST",
            },

            // INTERNAL. Use Club.races.destroyAll() instead.
            "::delete::Club::races": {
              url: urlBase + "/Clubs/:id/races",
              method: "DELETE",
            },

            // INTERNAL. Use Club.races.count() instead.
            "::count::Club::races": {
              url: urlBase + "/Clubs/:id/races/count",
              method: "GET",
            },

            // INTERNAL. Use People.races.findById() instead.
            "::findById::People::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/:fk",
              method: "GET",
            },

            // INTERNAL. Use People.races.destroyById() instead.
            "::destroyById::People::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use People.races.updateById() instead.
            "::updateById::People::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/:fk",
              method: "PUT",
            },

            // INTERNAL. Use People.races.link() instead.
            "::link::People::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use People.races.unlink() instead.
            "::unlink::People::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use People.races.exists() instead.
            "::exists::People::races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use People.races() instead.
            "::get::People::races": {
              isArray: true,
              url: urlBase + "/Peoples/:id/races",
              method: "GET",
            },

            // INTERNAL. Use People.races.create() instead.
            "::create::People::races": {
              url: urlBase + "/Peoples/:id/races",
              method: "POST",
            },

            // INTERNAL. Use People.races.createMany() instead.
            "::createMany::People::races": {
              isArray: true,
              url: urlBase + "/Peoples/:id/races",
              method: "POST",
            },

            // INTERNAL. Use People.races.destroyAll() instead.
            "::delete::People::races": {
              url: urlBase + "/Peoples/:id/races",
              method: "DELETE",
            },

            // INTERNAL. Use People.races.count() instead.
            "::count::People::races": {
              url: urlBase + "/Peoples/:id/races/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Race#patchOrCreate
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Race#updateOrCreate
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Race#update
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Race#destroyById
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Race#removeById
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Race#patchAttributes
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Race#modelName
        * @propertyOf lbServices.Race
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Race`.
        */
        R.modelName = "Race";

    /**
     * @ngdoc object
     * @name lbServices.Race.fees
     * @header lbServices.Race.fees
     * @object
     * @description
     *
     * The object `Race.fees` groups methods
     * manipulating `Fee` instances related to `Race`.
     *
     * Call {@link lbServices.Race#fees Race.fees()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Race#fees
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Queries fees of Race.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R.fees = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::get::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#count
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Counts fees of Race.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.fees.count = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::count::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#create
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Creates a new instance in fees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R.fees.create = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::create::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#createMany
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Creates a new instance in fees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R.fees.createMany = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::createMany::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#destroyAll
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Deletes all fees of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.fees.destroyAll = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::delete::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#destroyById
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Delete a related item by id for fees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.fees.destroyById = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::destroyById::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#findById
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Find a related item by id for fees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fees
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R.fees.findById = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::findById::Race::fees"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.fees#updateById
             * @methodOf lbServices.Race.fees
             *
             * @description
             *
             * Update a related item by id for fees.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for fees
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R.fees.updateById = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::updateById::Race::fees"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Race.participate
     * @header lbServices.Race.participate
     * @object
     * @description
     *
     * The object `Race.participate` groups methods
     * manipulating `People` instances related to `Race`.
     *
     * Call {@link lbServices.Race#participate Race.participate()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Race#participate
             * @methodOf lbServices.Race
             *
             * @description
             *
             * Queries participate of Race.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::get::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#count
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Counts participate of Race.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.participate.count = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::count::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#create
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Creates a new instance in participate of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate.create = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::create::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#createMany
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Creates a new instance in participate of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate.createMany = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::createMany::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#destroyAll
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Deletes all participate of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.participate.destroyAll = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::delete::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#destroyById
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Delete a related item by id for participate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participate
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.participate.destroyById = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::destroyById::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#exists
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Check the existence of participate relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participate
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate.exists = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::exists::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#findById
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Find a related item by id for participate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participate
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate.findById = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::findById::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#link
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Add a related item by id for participate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participate
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate.link = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::link::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#unlink
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Remove the participate relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participate
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.participate.unlink = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::unlink::Race::participate"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Race.participate#updateById
             * @methodOf lbServices.Race.participate
             *
             * @description
             *
             * Update a related item by id for participate.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for participate
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R.participate.updateById = function() {
          var TargetResource = $injector.get("People");
          var action = TargetResource["::updateById::Race::participate"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Fee
 * @header lbServices.Fee
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Fee` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Fee",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Fees/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Fee#create
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Fees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#createMany
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Fees",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#upsert
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Fees",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#replaceOrCreate
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Fees/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#exists
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Fees/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#findById
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Fees/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#replaceById
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Fees/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#find
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Fees",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#findOne
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Fees/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#updateAll
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Fees/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#deleteById
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Fees/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#count
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Fees/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#prototype$updateAttributes
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Fees/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Fee#createChangeStream
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Fees/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Race.fees.findById() instead.
            "::findById::Race::fees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/fees/:fk",
              method: "GET",
            },

            // INTERNAL. Use Race.fees.destroyById() instead.
            "::destroyById::Race::fees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/fees/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Race.fees.updateById() instead.
            "::updateById::Race::fees": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/fees/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Race.fees() instead.
            "::get::Race::fees": {
              isArray: true,
              url: urlBase + "/Races/:id/fees",
              method: "GET",
            },

            // INTERNAL. Use Race.fees.create() instead.
            "::create::Race::fees": {
              url: urlBase + "/Races/:id/fees",
              method: "POST",
            },

            // INTERNAL. Use Race.fees.createMany() instead.
            "::createMany::Race::fees": {
              isArray: true,
              url: urlBase + "/Races/:id/fees",
              method: "POST",
            },

            // INTERNAL. Use Race.fees.destroyAll() instead.
            "::delete::Race::fees": {
              url: urlBase + "/Races/:id/fees",
              method: "DELETE",
            },

            // INTERNAL. Use Race.fees.count() instead.
            "::count::Race::fees": {
              url: urlBase + "/Races/:id/fees/count",
              method: "GET",
            },

            // INTERNAL. Use Participant.fee() instead.
            "::get::Participant::fee": {
              url: urlBase + "/Participants/:id/fee",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Fee#patchOrCreate
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Fee#updateOrCreate
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Fee#update
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Fee#destroyById
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Fee#removeById
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Fee#patchAttributes
             * @methodOf lbServices.Fee
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Fee#modelName
        * @propertyOf lbServices.Fee
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Fee`.
        */
        R.modelName = "Fee";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.People
 * @header lbServices.People
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `People` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "People",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Peoples/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__findById__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__destroyById__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__updateById__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use People.club() instead.
            "prototype$__get__club": {
              url: urlBase + "/Peoples/:id/club",
              method: "GET",
            },

            // INTERNAL. Use People.races.findById() instead.
            "prototype$__findById__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/:fk",
              method: "GET",
            },

            // INTERNAL. Use People.races.destroyById() instead.
            "prototype$__destroyById__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use People.races.updateById() instead.
            "prototype$__updateById__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/:fk",
              method: "PUT",
            },

            // INTERNAL. Use People.races.link() instead.
            "prototype$__link__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use People.races.unlink() instead.
            "prototype$__unlink__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use People.races.exists() instead.
            "prototype$__exists__races": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Peoples/:id/races/rel/:fk",
              method: "HEAD",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__get__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Queries accessTokens of People.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Peoples/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__create__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Peoples/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__delete__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Peoples/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$__count__accessTokens
             * @methodOf lbServices.People
             *
             * @description
             *
             * Counts accessTokens of People.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Peoples/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use People.races() instead.
            "prototype$__get__races": {
              isArray: true,
              url: urlBase + "/Peoples/:id/races",
              method: "GET",
            },

            // INTERNAL. Use People.races.create() instead.
            "prototype$__create__races": {
              url: urlBase + "/Peoples/:id/races",
              method: "POST",
            },

            // INTERNAL. Use People.races.destroyAll() instead.
            "prototype$__delete__races": {
              url: urlBase + "/Peoples/:id/races",
              method: "DELETE",
            },

            // INTERNAL. Use People.races.count() instead.
            "prototype$__count__races": {
              url: urlBase + "/Peoples/:id/races/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#create
             * @methodOf lbServices.People
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Peoples",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#createMany
             * @methodOf lbServices.People
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Peoples",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#upsert
             * @methodOf lbServices.People
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Peoples",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#replaceOrCreate
             * @methodOf lbServices.People
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Peoples/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#exists
             * @methodOf lbServices.People
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Peoples/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#findById
             * @methodOf lbServices.People
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Peoples/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#replaceById
             * @methodOf lbServices.People
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Peoples/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#find
             * @methodOf lbServices.People
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Peoples",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#findOne
             * @methodOf lbServices.People
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Peoples/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#updateAll
             * @methodOf lbServices.People
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Peoples/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#deleteById
             * @methodOf lbServices.People
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Peoples/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#count
             * @methodOf lbServices.People
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Peoples/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#prototype$updateAttributes
             * @methodOf lbServices.People
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Peoples/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#createChangeStream
             * @methodOf lbServices.People
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Peoples/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#login
             * @methodOf lbServices.People
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Peoples/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#logout
             * @methodOf lbServices.People
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Peoples/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#confirm
             * @methodOf lbServices.People
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Peoples/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#resetPassword
             * @methodOf lbServices.People
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Peoples/reset",
              method: "POST",
            },

            // INTERNAL. Use Club.administrator() instead.
            "::get::Club::administrator": {
              url: urlBase + "/Clubs/:id/administrator",
              method: "GET",
            },

            // INTERNAL. Use Race.participate.findById() instead.
            "::findById::Race::participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/:fk",
              method: "GET",
            },

            // INTERNAL. Use Race.participate.destroyById() instead.
            "::destroyById::Race::participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Race.participate.updateById() instead.
            "::updateById::Race::participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Race.participate.link() instead.
            "::link::Race::participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Race.participate.unlink() instead.
            "::unlink::Race::participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Race.participate.exists() instead.
            "::exists::Race::participate": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Races/:id/participate/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Race.participate() instead.
            "::get::Race::participate": {
              isArray: true,
              url: urlBase + "/Races/:id/participate",
              method: "GET",
            },

            // INTERNAL. Use Race.participate.create() instead.
            "::create::Race::participate": {
              url: urlBase + "/Races/:id/participate",
              method: "POST",
            },

            // INTERNAL. Use Race.participate.createMany() instead.
            "::createMany::Race::participate": {
              isArray: true,
              url: urlBase + "/Races/:id/participate",
              method: "POST",
            },

            // INTERNAL. Use Race.participate.destroyAll() instead.
            "::delete::Race::participate": {
              url: urlBase + "/Races/:id/participate",
              method: "DELETE",
            },

            // INTERNAL. Use Race.participate.count() instead.
            "::count::Race::participate": {
              url: urlBase + "/Races/:id/participate/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.People#getCurrent
             * @methodOf lbServices.People
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Peoples" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.People#patchOrCreate
             * @methodOf lbServices.People
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.People#updateOrCreate
             * @methodOf lbServices.People
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.People#update
             * @methodOf lbServices.People
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.People#destroyById
             * @methodOf lbServices.People
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.People#removeById
             * @methodOf lbServices.People
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.People#patchAttributes
             * @methodOf lbServices.People
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `People` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.People#getCachedCurrent
         * @methodOf lbServices.People
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.People#login} or
         * {@link lbServices.People#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A People instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.People#isAuthenticated
         * @methodOf lbServices.People
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.People#getCurrentId
         * @methodOf lbServices.People
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.People#modelName
        * @propertyOf lbServices.People
        * @description
        * The name of the model represented by this $resource,
        * i.e. `People`.
        */
        R.modelName = "People";


            /**
             * @ngdoc method
             * @name lbServices.People#club
             * @methodOf lbServices.People
             *
             * @description
             *
             * Fetches belongsTo relation club.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Club` object.)
             * </em>
             */
        R.club = function() {
          var TargetResource = $injector.get("Club");
          var action = TargetResource["::get::People::club"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.People.races
     * @header lbServices.People.races
     * @object
     * @description
     *
     * The object `People.races` groups methods
     * manipulating `Race` instances related to `People`.
     *
     * Call {@link lbServices.People#races People.races()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.People#races
             * @methodOf lbServices.People
             *
             * @description
             *
             * Queries races of People.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::get::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#count
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Counts races of People.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.races.count = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::count::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#create
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Creates a new instance in races of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.create = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::create::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#createMany
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Creates a new instance in races of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.createMany = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::createMany::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#destroyAll
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Deletes all races of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.races.destroyAll = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::delete::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#destroyById
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Delete a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.races.destroyById = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::destroyById::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#exists
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Check the existence of races relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.exists = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::exists::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#findById
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Find a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.findById = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::findById::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#link
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Add a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.link = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::link::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#unlink
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Remove the races relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.races.unlink = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::unlink::People::races"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.People.races#updateById
             * @methodOf lbServices.People.races
             *
             * @description
             *
             * Update a related item by id for races.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for races
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Race` object.)
             * </em>
             */
        R.races.updateById = function() {
          var TargetResource = $injector.get("Race");
          var action = TargetResource["::updateById::People::races"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Participant
 * @header lbServices.Participant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Participant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Participant",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector',
      function(Resource, LoopBackAuth, $injector) {
        var R = Resource(
        urlBase + "/Participants/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Participant.fee() instead.
            "prototype$__get__fee": {
              url: urlBase + "/Participants/:id/fee",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#create
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Participants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#createMany
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Participants",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#upsert
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Participants",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#replaceOrCreate
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Participants/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#exists
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Participants/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#findById
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Participants/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#replaceById
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Participants/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#find
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Participants",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#findOne
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Participants/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#updateAll
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
            "updateAll": {
              url: urlBase + "/Participants/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#deleteById
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Participants/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#count
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Participants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#prototype$updateAttributes
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Participants/:id",
              method: "PATCH",
            },

            /**
             * @ngdoc method
             * @name lbServices.Participant#createChangeStream
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Participants/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Club.participants.findById() instead.
            "::findById::Club::participants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/participants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Club.participants.destroyById() instead.
            "::destroyById::Club::participants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/participants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Club.participants.updateById() instead.
            "::updateById::Club::participants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Clubs/:id/participants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Club.participants() instead.
            "::get::Club::participants": {
              isArray: true,
              url: urlBase + "/Clubs/:id/participants",
              method: "GET",
            },

            // INTERNAL. Use Club.participants.create() instead.
            "::create::Club::participants": {
              url: urlBase + "/Clubs/:id/participants",
              method: "POST",
            },

            // INTERNAL. Use Club.participants.createMany() instead.
            "::createMany::Club::participants": {
              isArray: true,
              url: urlBase + "/Clubs/:id/participants",
              method: "POST",
            },

            // INTERNAL. Use Club.participants.destroyAll() instead.
            "::delete::Club::participants": {
              url: urlBase + "/Clubs/:id/participants",
              method: "DELETE",
            },

            // INTERNAL. Use Club.participants.count() instead.
            "::count::Club::participants": {
              url: urlBase + "/Clubs/:id/participants/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Participant#patchOrCreate
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Participant#updateOrCreate
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `data` – `{object=}` - Model instance data
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Participant#update
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The number of instances updated
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Participant#destroyById
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Participant#removeById
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Participant#patchAttributes
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `data` – `{object=}` - An object of model property name/value pairs
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Participant` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Participant#modelName
        * @propertyOf lbServices.Participant
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Participant`.
        */
        R.modelName = "Participant";


            /**
             * @ngdoc method
             * @name lbServices.Participant#fee
             * @methodOf lbServices.Participant
             *
             * @description
             *
             * Fetches belongsTo relation fee.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Fee` object.)
             * </em>
             */
        R.fee = function() {
          var TargetResource = $injector.get("Fee");
          var action = TargetResource["::get::Participant::fee"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
