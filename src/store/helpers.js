import {
  createEntitiesHelpers,
  createResourceHelpers,
} from 'uptrend-redux-modules'
import * as entities from './modules/entities'
import * as resource from './modules/resource'

const {EntityDetail, EntityList} = createEntitiesHelpers({entities})
const {
  ResourceDetailLoader,
  ResourceListLoader,
  resourceCreate,
  resourceDelete,
  resourceDetailRead,
  resourceListCreate,
  resourceListRead,
  resourceUpdate,
} = createResourceHelpers({entities, resource})

export {
  EntityDetail,
  EntityList,
  ResourceDetailLoader,
  ResourceListLoader,
  resourceCreate,
  resourceDelete,
  resourceDetailRead,
  resourceListCreate,
  resourceListRead,
  resourceUpdate,
}
