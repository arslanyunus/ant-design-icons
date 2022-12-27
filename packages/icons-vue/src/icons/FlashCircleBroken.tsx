// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/FlashCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircleBroken: FlashCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircleBrokenSvg}></AntdIcon>;
};

FlashCircleBroken.displayName = 'FlashCircleBroken';
FlashCircleBroken.inheritAttrs = false;
export default FlashCircleBroken;