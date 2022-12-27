// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerCricleBrokenSvg from '@ant-design/icons-svg/lib/asn/FingerCricleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerCricleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerCricleBroken: FingerCricleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerCricleBrokenSvg}></AntdIcon>;
};

FingerCricleBroken.displayName = 'FingerCricleBroken';
FingerCricleBroken.inheritAttrs = false;
export default FingerCricleBroken;