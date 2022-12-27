// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlashOutlineSvg from '@ant-design/icons-svg/lib/asn/SlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlashOutline: SlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlashOutlineSvg}></AntdIcon>;
};

SlashOutline.displayName = 'SlashOutline';
SlashOutline.inheritAttrs = false;
export default SlashOutline;