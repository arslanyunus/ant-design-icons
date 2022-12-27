// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeBrokenSvg from '@ant-design/icons-svg/lib/asn/CodeBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeBroken: CodeBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeBrokenSvg}></AntdIcon>;
};

CodeBroken.displayName = 'CodeBroken';
CodeBroken.inheritAttrs = false;
export default CodeBroken;