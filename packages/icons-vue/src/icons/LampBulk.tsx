// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampBulkSvg from '@ant-design/icons-svg/lib/asn/LampBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampBulk: LampBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampBulkSvg}></AntdIcon>;
};

LampBulk.displayName = 'LampBulk';
LampBulk.inheritAttrs = false;
export default LampBulk;