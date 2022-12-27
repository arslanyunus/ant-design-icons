// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FlashCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/FlashCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FlashCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FlashCircleOutline: FlashCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FlashCircleOutlineSvg}></AntdIcon>;
};

FlashCircleOutline.displayName = 'FlashCircleOutline';
FlashCircleOutline.inheritAttrs = false;
export default FlashCircleOutline;