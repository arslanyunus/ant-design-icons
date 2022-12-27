// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CodeCircleBoldSvg from '@ant-design/icons-svg/lib/asn/CodeCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CodeCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CodeCircleBold: CodeCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CodeCircleBoldSvg}></AntdIcon>;
};

CodeCircleBold.displayName = 'CodeCircleBold';
CodeCircleBold.inheritAttrs = false;
export default CodeCircleBold;