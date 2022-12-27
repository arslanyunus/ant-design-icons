// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask1BulkSvg from '@ant-design/icons-svg/lib/asn/Mask1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask1Bulk: Mask1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask1BulkSvg}></AntdIcon>;
};

Mask1Bulk.displayName = 'Mask1Bulk';
Mask1Bulk.inheritAttrs = false;
export default Mask1Bulk;