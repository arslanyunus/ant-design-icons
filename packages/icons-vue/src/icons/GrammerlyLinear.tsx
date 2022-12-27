// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GrammerlyLinearSvg from '@ant-design/icons-svg/lib/asn/GrammerlyLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GrammerlyLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GrammerlyLinear: GrammerlyLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GrammerlyLinearSvg}></AntdIcon>;
};

GrammerlyLinear.displayName = 'GrammerlyLinear';
GrammerlyLinear.inheritAttrs = false;
export default GrammerlyLinear;