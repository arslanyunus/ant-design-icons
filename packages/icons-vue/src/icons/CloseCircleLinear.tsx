// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloseCircleLinearSvg from '@ant-design/icons-svg/lib/asn/CloseCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloseCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloseCircleLinear: CloseCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloseCircleLinearSvg}></AntdIcon>;
};

CloseCircleLinear.displayName = 'CloseCircleLinear';
CloseCircleLinear.inheritAttrs = false;
export default CloseCircleLinear;