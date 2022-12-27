// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileysBoldSvg from '@ant-design/icons-svg/lib/asn/SmileysBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileysBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileysBold: SmileysBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileysBoldSvg}></AntdIcon>;
};

SmileysBold.displayName = 'SmileysBold';
SmileysBold.inheritAttrs = false;
export default SmileysBold;