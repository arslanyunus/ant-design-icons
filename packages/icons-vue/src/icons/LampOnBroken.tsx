// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LampOnBrokenSvg from '@ant-design/icons-svg/lib/asn/LampOnBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LampOnBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LampOnBroken: LampOnBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LampOnBrokenSvg}></AntdIcon>;
};

LampOnBroken.displayName = 'LampOnBroken';
LampOnBroken.inheritAttrs = false;
export default LampOnBroken;