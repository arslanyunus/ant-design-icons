// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MobileProgrammingLinearSvg from '@ant-design/icons-svg/lib/asn/MobileProgrammingLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MobileProgrammingLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MobileProgrammingLinear: MobileProgrammingLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MobileProgrammingLinearSvg}></AntdIcon>;
};

MobileProgrammingLinear.displayName = 'MobileProgrammingLinear';
MobileProgrammingLinear.inheritAttrs = false;
export default MobileProgrammingLinear;