// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LifebuoyLinearSvg from '@ant-design/icons-svg/lib/asn/LifebuoyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LifebuoyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LifebuoyLinear: LifebuoyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LifebuoyLinearSvg}></AntdIcon>;
};

LifebuoyLinear.displayName = 'LifebuoyLinear';
LifebuoyLinear.inheritAttrs = false;
export default LifebuoyLinear;