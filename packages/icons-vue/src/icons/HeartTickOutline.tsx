// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartTickOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartTickOutline: HeartTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartTickOutlineSvg}></AntdIcon>;
};

HeartTickOutline.displayName = 'HeartTickOutline';
HeartTickOutline.inheritAttrs = false;
export default HeartTickOutline;