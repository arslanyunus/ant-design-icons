// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bag2BulkSvg from '@ant-design/icons-svg/lib/asn/Bag2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bag2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bag2Bulk: Bag2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bag2BulkSvg}></AntdIcon>;
};

Bag2Bulk.displayName = 'Bag2Bulk';
Bag2Bulk.inheritAttrs = false;
export default Bag2Bulk;