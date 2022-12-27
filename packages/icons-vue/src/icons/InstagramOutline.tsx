// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramOutlineSvg from '@ant-design/icons-svg/lib/asn/InstagramOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramOutline: InstagramOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramOutlineSvg}></AntdIcon>;
};

InstagramOutline.displayName = 'InstagramOutline';
InstagramOutline.inheritAttrs = false;
export default InstagramOutline;