// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartSearchOutline: HeartSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartSearchOutlineSvg}></AntdIcon>;
};

HeartSearchOutline.displayName = 'HeartSearchOutline';
HeartSearchOutline.inheritAttrs = false;
export default HeartSearchOutline;