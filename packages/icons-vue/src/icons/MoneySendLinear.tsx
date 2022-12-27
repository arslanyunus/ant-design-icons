// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneySendLinearSvg from '@ant-design/icons-svg/lib/asn/MoneySendLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneySendLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneySendLinear: MoneySendLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneySendLinearSvg}></AntdIcon>;
};

MoneySendLinear.displayName = 'MoneySendLinear';
MoneySendLinear.inheritAttrs = false;
export default MoneySendLinear;