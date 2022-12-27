// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar2BulkSvg from '@ant-design/icons-svg/lib/asn/Radar2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar2Bulk: Radar2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar2BulkSvg}></AntdIcon>;
};

Radar2Bulk.displayName = 'Radar2Bulk';
Radar2Bulk.inheritAttrs = false;
export default Radar2Bulk;