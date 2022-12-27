// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachCircleLinearSvg from '@ant-design/icons-svg/lib/asn/AttachCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachCircleLinear: AttachCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachCircleLinearSvg}></AntdIcon>;
};

AttachCircleLinear.displayName = 'AttachCircleLinear';
AttachCircleLinear.inheritAttrs = false;
export default AttachCircleLinear;