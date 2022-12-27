// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneysLinearSvg from '@ant-design/icons-svg/lib/asn/MoneysLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneysLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneysLinear: MoneysLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneysLinearSvg}></AntdIcon>;
};

MoneysLinear.displayName = 'MoneysLinear';
MoneysLinear.inheritAttrs = false;
export default MoneysLinear;