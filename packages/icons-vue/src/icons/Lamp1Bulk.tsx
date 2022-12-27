// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lamp1BulkSvg from '@ant-design/icons-svg/lib/asn/Lamp1Bulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lamp1BulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lamp1Bulk: Lamp1BulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lamp1BulkSvg}></AntdIcon>;
};

Lamp1Bulk.displayName = 'Lamp1Bulk';
Lamp1Bulk.inheritAttrs = false;
export default Lamp1Bulk;