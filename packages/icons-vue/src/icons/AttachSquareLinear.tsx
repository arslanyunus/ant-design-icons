// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AttachSquareLinearSvg from '@ant-design/icons-svg/lib/asn/AttachSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AttachSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AttachSquareLinear: AttachSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AttachSquareLinearSvg}></AntdIcon>;
};

AttachSquareLinear.displayName = 'AttachSquareLinear';
AttachSquareLinear.inheritAttrs = false;
export default AttachSquareLinear;