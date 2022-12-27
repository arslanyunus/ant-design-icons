// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GrammerlyTwoToneSvg from '@ant-design/icons-svg/lib/asn/GrammerlyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GrammerlyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GrammerlyTwoTone: GrammerlyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GrammerlyTwoToneSvg}></AntdIcon>;
};

GrammerlyTwoTone.displayName = 'GrammerlyTwoTone';
GrammerlyTwoTone.inheritAttrs = false;
export default GrammerlyTwoTone;