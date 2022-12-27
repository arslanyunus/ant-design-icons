// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Radar1BulkSvg from '@ant-design/icons-svg/lib/asn/Radar1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Radar1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Radar1Bulk: Radar1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Radar1BulkSvg}></AntdIcon>;
};

Radar1Bulk.displayName = 'Radar1Bulk';
Radar1Bulk.inheritAttrs = false;
export default Radar1Bulk;