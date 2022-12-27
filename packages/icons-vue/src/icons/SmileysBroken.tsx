// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileysBrokenSvg from '@ant-design/icons-svg/lib/asn/SmileysBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileysBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileysBroken: SmileysBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileysBrokenSvg}></AntdIcon>;
};

SmileysBroken.displayName = 'SmileysBroken';
SmileysBroken.inheritAttrs = false;
export default SmileysBroken;