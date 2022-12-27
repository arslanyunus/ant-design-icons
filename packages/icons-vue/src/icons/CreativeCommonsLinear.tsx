// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CreativeCommonsLinearSvg from '@ant-design/icons-svg/lib/asn/CreativeCommonsLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CreativeCommonsLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CreativeCommonsLinear: CreativeCommonsLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CreativeCommonsLinearSvg}></AntdIcon>;
};

CreativeCommonsLinear.displayName = 'CreativeCommonsLinear';
CreativeCommonsLinear.inheritAttrs = false;
export default CreativeCommonsLinear;