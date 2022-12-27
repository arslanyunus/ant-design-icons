// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartAddOutlineSvg from '@ant-design/icons-svg/lib/asn/HeartAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartAddOutline: HeartAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartAddOutlineSvg}></AntdIcon>;
};

HeartAddOutline.displayName = 'HeartAddOutline';
HeartAddOutline.inheritAttrs = false;
export default HeartAddOutline;