// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxTimeOutlineSvg from '@ant-design/icons-svg/lib/asn/BoxTimeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxTimeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxTimeOutline: BoxTimeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxTimeOutlineSvg}></AntdIcon>;
};

BoxTimeOutline.displayName = 'BoxTimeOutline';
BoxTimeOutline.inheritAttrs = false;
export default BoxTimeOutline;