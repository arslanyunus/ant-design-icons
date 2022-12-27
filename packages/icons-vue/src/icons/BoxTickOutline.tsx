// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTickOutlineSvg from '@ant-design/icons-svg/lib/asn/BoxTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTickOutline: BoxTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTickOutlineSvg}></AntdIcon>;
};

BoxTickOutline.displayName = 'BoxTickOutline';
BoxTickOutline.inheritAttrs = false;
export default BoxTickOutline;