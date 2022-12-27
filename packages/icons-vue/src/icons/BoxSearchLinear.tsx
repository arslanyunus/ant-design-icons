// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BoxSearchLinearSvg from '@ant-design/icons-svg/lib/asn/BoxSearchLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BoxSearchLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BoxSearchLinear: BoxSearchLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BoxSearchLinearSvg}></AntdIcon>;
};

BoxSearchLinear.displayName = 'BoxSearchLinear';
BoxSearchLinear.inheritAttrs = false;
export default BoxSearchLinear;