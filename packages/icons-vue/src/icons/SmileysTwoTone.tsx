// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileysTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmileysTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileysTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileysTwoTone: SmileysTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileysTwoToneSvg}></AntdIcon>;
};

SmileysTwoTone.displayName = 'SmileysTwoTone';
SmileysTwoTone.inheritAttrs = false;
export default SmileysTwoTone;