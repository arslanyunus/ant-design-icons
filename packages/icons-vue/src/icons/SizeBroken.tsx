// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SizeBrokenSvg from '@ant-design/icons-svg/lib/asn/SizeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SizeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SizeBroken: SizeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SizeBrokenSvg}></AntdIcon>;
};

SizeBroken.displayName = 'SizeBroken';
SizeBroken.inheritAttrs = false;
export default SizeBroken;