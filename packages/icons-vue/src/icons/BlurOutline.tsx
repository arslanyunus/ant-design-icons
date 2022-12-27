// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlurOutlineSvg from '@ant-design/icons-svg/lib/asn/BlurOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlurOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlurOutline: BlurOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurOutlineSvg}></AntdIcon>;
};

BlurOutline.displayName = 'BlurOutline';
BlurOutline.inheritAttrs = false;
export default BlurOutline;