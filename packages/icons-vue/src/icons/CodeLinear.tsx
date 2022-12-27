// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeLinearSvg from '@ant-design/icons-svg/lib/asn/CodeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeLinear: CodeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeLinearSvg}></AntdIcon>;
};

CodeLinear.displayName = 'CodeLinear';
CodeLinear.inheritAttrs = false;
export default CodeLinear;