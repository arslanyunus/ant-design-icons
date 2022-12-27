// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Map1BulkSvg from '@ant-design/icons-svg/lib/asn/Map1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Map1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Map1Bulk: Map1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Map1BulkSvg}></AntdIcon>;
};

Map1Bulk.displayName = 'Map1Bulk';
Map1Bulk.inheritAttrs = false;
export default Map1Bulk;