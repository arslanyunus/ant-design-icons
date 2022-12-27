// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize3BulkSvg from '@ant-design/icons-svg/lib/asn/Maximize3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize3Bulk: Maximize3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize3BulkSvg}></AntdIcon>;
};

Maximize3Bulk.displayName = 'Maximize3Bulk';
Maximize3Bulk.inheritAttrs = false;
export default Maximize3Bulk;