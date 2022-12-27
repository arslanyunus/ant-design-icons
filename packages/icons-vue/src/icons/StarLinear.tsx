// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StarLinearSvg from '@ant-design/icons-svg/lib/asn/StarLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StarLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StarLinear: StarLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StarLinearSvg}></AntdIcon>;
};

StarLinear.displayName = 'StarLinear';
StarLinear.inheritAttrs = false;
export default StarLinear;