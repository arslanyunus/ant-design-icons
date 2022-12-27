// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampOnBulkSvg from '@ant-design/icons-svg/lib/asn/LampOnBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampOnBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampOnBulk: LampOnBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampOnBulkSvg}></AntdIcon>;
};

LampOnBulk.displayName = 'LampOnBulk';
LampOnBulk.inheritAttrs = false;
export default LampOnBulk;