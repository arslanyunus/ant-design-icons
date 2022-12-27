// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphoneLinearSvg from '@ant-design/icons-svg/lib/asn/HeadphoneLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphoneLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphoneLinear: HeadphoneLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneLinearSvg}></AntdIcon>;
};

HeadphoneLinear.displayName = 'HeadphoneLinear';
HeadphoneLinear.inheritAttrs = false;
export default HeadphoneLinear;