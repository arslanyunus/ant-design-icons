// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampBrokenSvg from '@ant-design/icons-svg/lib/asn/LampBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampBroken: LampBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampBrokenSvg}></AntdIcon>;
};

LampBroken.displayName = 'LampBroken';
LampBroken.inheritAttrs = false;
export default LampBroken;