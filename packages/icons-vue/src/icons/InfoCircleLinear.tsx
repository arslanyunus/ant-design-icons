// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InfoCircleLinearSvg from '@ant-design/icons-svg/lib/asn/InfoCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InfoCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InfoCircleLinear: InfoCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InfoCircleLinearSvg}></AntdIcon>;
};

InfoCircleLinear.displayName = 'InfoCircleLinear';
InfoCircleLinear.inheritAttrs = false;
export default InfoCircleLinear;