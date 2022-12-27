// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SizeBoldSvg from '@ant-design/icons-svg/lib/asn/SizeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SizeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SizeBold: SizeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SizeBoldSvg}></AntdIcon>;
};

SizeBold.displayName = 'SizeBold';
SizeBold.inheritAttrs = false;
export default SizeBold;