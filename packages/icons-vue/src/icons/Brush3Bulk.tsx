// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush3BulkSvg from '@ant-design/icons-svg/lib/asn/Brush3Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush3BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush3Bulk: Brush3BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush3BulkSvg}></AntdIcon>;
};

Brush3Bulk.displayName = 'Brush3Bulk';
Brush3Bulk.inheritAttrs = false;
export default Brush3Bulk;