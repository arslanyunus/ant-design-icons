// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartOutline: HeartOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartOutlineSvg}></AntdIcon>;
};

HeartOutline.displayName = 'HeartOutline';
HeartOutline.inheritAttrs = false;
export default HeartOutline;