// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeOutlineSvg from '@ant-design/icons-svg/lib/asn/CodeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeOutline: CodeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeOutlineSvg}></AntdIcon>;
};

CodeOutline.displayName = 'CodeOutline';
CodeOutline.inheritAttrs = false;
export default CodeOutline;