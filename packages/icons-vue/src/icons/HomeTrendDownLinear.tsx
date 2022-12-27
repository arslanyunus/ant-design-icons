// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HomeTrendDownLinearSvg from '@ant-design/icons-svg/lib/asn/HomeTrendDownLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HomeTrendDownLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HomeTrendDownLinear: HomeTrendDownLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HomeTrendDownLinearSvg}></AntdIcon>;
};

HomeTrendDownLinear.displayName = 'HomeTrendDownLinear';
HomeTrendDownLinear.inheritAttrs = false;
export default HomeTrendDownLinear;