// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HouseLinearSvg from '@ant-design/icons-svg/lib/asn/HouseLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HouseLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HouseLinear: HouseLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HouseLinearSvg}></AntdIcon>;
};

HouseLinear.displayName = 'HouseLinear';
HouseLinear.inheritAttrs = false;
export default HouseLinear;