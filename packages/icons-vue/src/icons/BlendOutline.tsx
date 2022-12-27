// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlendOutlineSvg from '@ant-design/icons-svg/lib/asn/BlendOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlendOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlendOutline: BlendOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlendOutlineSvg}></AntdIcon>;
};

BlendOutline.displayName = 'BlendOutline';
BlendOutline.inheritAttrs = false;
export default BlendOutline;