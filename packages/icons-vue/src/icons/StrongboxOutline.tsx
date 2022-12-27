// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import StrongboxOutlineSvg from '@ant-design/icons-svg/lib/asn/StrongboxOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface StrongboxOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const StrongboxOutline: StrongboxOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={StrongboxOutlineSvg}></AntdIcon>;
};

StrongboxOutline.displayName = 'StrongboxOutline';
StrongboxOutline.inheritAttrs = false;
export default StrongboxOutline;