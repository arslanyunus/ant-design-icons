// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashBrokenSvg from '@ant-design/icons-svg/lib/asn/FlashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashBroken: FlashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashBrokenSvg}></AntdIcon>;
};

FlashBroken.displayName = 'FlashBroken';
FlashBroken.inheritAttrs = false;
export default FlashBroken;