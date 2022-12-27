// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlashBoldSvg from '@ant-design/icons-svg/lib/asn/SlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlashBold: SlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlashBoldSvg}></AntdIcon>;
};

SlashBold.displayName = 'SlashBold';
SlashBold.inheritAttrs = false;
export default SlashBold;