// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FingerCricleBoldSvg from '@ant-design/icons-svg/lib/asn/FingerCricleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FingerCricleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FingerCricleBold: FingerCricleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FingerCricleBoldSvg}></AntdIcon>;
};

FingerCricleBold.displayName = 'FingerCricleBold';
FingerCricleBold.inheritAttrs = false;
export default FingerCricleBold;