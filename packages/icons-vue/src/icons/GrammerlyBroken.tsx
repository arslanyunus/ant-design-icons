// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GrammerlyBrokenSvg from '@ant-design/icons-svg/lib/asn/GrammerlyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GrammerlyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GrammerlyBroken: GrammerlyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GrammerlyBrokenSvg}></AntdIcon>;
};

GrammerlyBroken.displayName = 'GrammerlyBroken';
GrammerlyBroken.inheritAttrs = false;
export default GrammerlyBroken;