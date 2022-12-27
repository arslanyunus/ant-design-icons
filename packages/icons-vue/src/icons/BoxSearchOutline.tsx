// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxSearchOutlineSvg from '@ant-design/icons-svg/lib/asn/BoxSearchOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxSearchOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxSearchOutline: BoxSearchOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxSearchOutlineSvg}></AntdIcon>;
};

BoxSearchOutline.displayName = 'BoxSearchOutline';
BoxSearchOutline.inheritAttrs = false;
export default BoxSearchOutline;