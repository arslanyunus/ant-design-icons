// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlashLinearSvg from '@ant-design/icons-svg/lib/asn/SlashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlashLinear: SlashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlashLinearSvg}></AntdIcon>;
};

SlashLinear.displayName = 'SlashLinear';
SlashLinear.inheritAttrs = false;
export default SlashLinear;