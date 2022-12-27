// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashBoldSvg from '@ant-design/icons-svg/lib/asn/FlashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashBold: FlashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashBoldSvg}></AntdIcon>;
};

FlashBold.displayName = 'FlashBold';
FlashBold.inheritAttrs = false;
export default FlashBold;