// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlashBrokenSvg from '@ant-design/icons-svg/lib/asn/SlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlashBroken: SlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlashBrokenSvg}></AntdIcon>;
};

SlashBroken.displayName = 'SlashBroken';
SlashBroken.inheritAttrs = false;
export default SlashBroken;