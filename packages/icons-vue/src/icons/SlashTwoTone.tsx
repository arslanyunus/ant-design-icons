// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlashTwoToneSvg from '@ant-design/icons-svg/lib/asn/SlashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlashTwoTone: SlashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlashTwoToneSvg}></AntdIcon>;
};

SlashTwoTone.displayName = 'SlashTwoTone';
SlashTwoTone.inheritAttrs = false;
export default SlashTwoTone;