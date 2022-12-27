// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import IconOutlineSvg from '@ant-design/icons-svg/lib/asn/IconOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface IconOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const IconOutline: IconOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={IconOutlineSvg}></AntdIcon>;
};

IconOutline.displayName = 'IconOutline';
IconOutline.inheritAttrs = false;
export default IconOutline;