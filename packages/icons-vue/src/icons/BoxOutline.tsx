// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxOutlineSvg from '@ant-design/icons-svg/lib/asn/BoxOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxOutline: BoxOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxOutlineSvg}></AntdIcon>;
};

BoxOutline.displayName = 'BoxOutline';
BoxOutline.inheritAttrs = false;
export default BoxOutline;