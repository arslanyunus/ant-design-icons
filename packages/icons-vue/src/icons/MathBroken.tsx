// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MathBrokenSvg from '@ant-design/icons-svg/lib/asn/MathBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MathBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MathBroken: MathBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MathBrokenSvg}></AntdIcon>;
};

MathBroken.displayName = 'MathBroken';
MathBroken.inheritAttrs = false;
export default MathBroken;