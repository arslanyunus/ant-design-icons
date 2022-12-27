// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GeminiBrokenSvg from '@ant-design/icons-svg/lib/asn/GeminiBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GeminiBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GeminiBroken: GeminiBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GeminiBrokenSvg}></AntdIcon>;
};

GeminiBroken.displayName = 'GeminiBroken';
GeminiBroken.inheritAttrs = false;
export default GeminiBroken;