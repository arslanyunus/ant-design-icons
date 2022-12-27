// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GrammerlyOutlineSvg from '@ant-design/icons-svg/lib/asn/GrammerlyOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GrammerlyOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GrammerlyOutline: GrammerlyOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GrammerlyOutlineSvg}></AntdIcon>;
};

GrammerlyOutline.displayName = 'GrammerlyOutline';
GrammerlyOutline.inheritAttrs = false;
export default GrammerlyOutline;