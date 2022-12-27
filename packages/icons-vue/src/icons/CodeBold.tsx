// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeBoldSvg from '@ant-design/icons-svg/lib/asn/CodeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeBold: CodeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeBoldSvg}></AntdIcon>;
};

CodeBold.displayName = 'CodeBold';
CodeBold.inheritAttrs = false;
export default CodeBold;