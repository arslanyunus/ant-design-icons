// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GpsTwoToneSvg from '@ant-design/icons-svg/lib/asn/GpsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GpsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GpsTwoTone: GpsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GpsTwoToneSvg}></AntdIcon>;
};

GpsTwoTone.displayName = 'GpsTwoTone';
GpsTwoTone.inheritAttrs = false;
export default GpsTwoTone;