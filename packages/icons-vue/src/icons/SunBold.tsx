// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SunBoldSvg from '@ant-design/icons-svg/lib/asn/SunBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SunBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SunBold: SunBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SunBoldSvg}></AntdIcon>;
};

SunBold.displayName = 'SunBold';
SunBold.inheritAttrs = false;
export default SunBold;