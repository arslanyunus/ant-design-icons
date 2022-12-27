// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashOutlineSvg from '@ant-design/icons-svg/lib/asn/FlashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashOutline: FlashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashOutlineSvg}></AntdIcon>;
};

FlashOutline.displayName = 'FlashOutline';
FlashOutline.inheritAttrs = false;
export default FlashOutline;