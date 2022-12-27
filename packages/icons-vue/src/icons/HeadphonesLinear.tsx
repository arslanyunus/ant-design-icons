// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphonesLinearSvg from '@ant-design/icons-svg/lib/asn/HeadphonesLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphonesLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphonesLinear: HeadphonesLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphonesLinearSvg}></AntdIcon>;
};

HeadphonesLinear.displayName = 'HeadphonesLinear';
HeadphonesLinear.inheritAttrs = false;
export default HeadphonesLinear;