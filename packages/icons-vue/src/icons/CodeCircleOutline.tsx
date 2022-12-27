// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/CodeCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeCircleOutline: CodeCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeCircleOutlineSvg}></AntdIcon>;
};

CodeCircleOutline.displayName = 'CodeCircleOutline';
CodeCircleOutline.inheritAttrs = false;
export default CodeCircleOutline;