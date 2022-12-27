// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafeHomeOutlineSvg from '@ant-design/icons-svg/lib/asn/SafeHomeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafeHomeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafeHomeOutline: SafeHomeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeHomeOutlineSvg}></AntdIcon>;
};

SafeHomeOutline.displayName = 'SafeHomeOutline';
SafeHomeOutline.inheritAttrs = false;
export default SafeHomeOutline;