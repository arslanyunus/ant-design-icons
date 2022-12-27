// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StickynoteOutlineSvg from '@ant-design/icons-svg/lib/asn/StickynoteOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StickynoteOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StickynoteOutline: StickynoteOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StickynoteOutlineSvg}></AntdIcon>;
};

StickynoteOutline.displayName = 'StickynoteOutline';
StickynoteOutline.inheritAttrs = false;
export default StickynoteOutline;