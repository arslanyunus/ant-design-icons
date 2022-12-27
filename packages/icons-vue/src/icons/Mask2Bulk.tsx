// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Mask2BulkSvg from '@ant-design/icons-svg/lib/asn/Mask2Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Mask2BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Mask2Bulk: Mask2BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Mask2BulkSvg}></AntdIcon>;
};

Mask2Bulk.displayName = 'Mask2Bulk';
Mask2Bulk.inheritAttrs = false;
export default Mask2Bulk;